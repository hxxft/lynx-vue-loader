var _ = require('lodash');
var postcss = require('postcss');
var camelCase = require('camelcase');
var validator = require('./validator');

var sanitizeSelector = function (selector) {
  selector = selector.replace(/\n/gi, ' ');
  if (selector.charAt(0) === '.') {
    selector = selector.substr(1, selector.length)
  }
  return selector
};

var _check_reason_func_ = function (reason) {
  if (reason && reason.indexOf('ERROR:') !== -1) {
    console.error(reason)
    return false
  }else if(reason) {
    console.log(reason)
  }
  return true
}

var convertRule = function (rule) {
  var returnObj = {};
  var selector = sanitizeSelector(rule.selector);

  returnObj[selector] = _.transform(rule.nodes, function (convertedDecls, decl) {
    if (decl.type === 'decl') {
      var convertedDecl = validator(decl.prop, decl.value);
      if(_check_reason_func_(convertedDecl.reason)) {
        convertedDecls[convertedDecl.property] = convertedDecl.value;
      }
      }
  }, {})

  return returnObj;
};

var convertMedia = function (media) {
  var returnObj = { mediaQueries: {} };
  returnObj.mediaQueries[media.params] = {};

  _.forEach(media.nodes, function (node) {
    if (node.type !== 'rule') {
      return;
    }

    _.merge(returnObj.mediaQueries[media.params], convertRule(node));
  });

  return returnObj;
};

module.exports = function (sourceCss) {
  var source = postcss.parse(sourceCss).nodes;

  return _.transform(source, function (convertedObj, node) {
    node.type === 'rule' && _.merge(convertedObj, convertRule(node));
    node.name === 'media' && _.merge(convertedObj, convertMedia(node));
  }, {});
};
