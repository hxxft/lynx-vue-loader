var css2Obj = require('./css2Obj')

function insertStr(str1, n, str2) {
  if (str1.length < n) {
    return str1 + str2
  } else {
    const s1 = str1.substring(0, n)
    const s2 = str1.substring(n, str1.length)
    return s1 + str2 + s2
  }
}

module.exports = function (parts) {
if (parts.styles.length) {
      parts.styles.forEach(function (style, i) {
        var styleStr = JSON.stringify(css2Obj(style.content))
        if (parts.script) {

          var regData = /export\s*default\s*\{[\s\S]*data\s*(\([\s\S]*\)\s*||\:\s*function\s*\([\s\S]*\)||:\s*\([\s\S]*\)\s*\=\>\s*)\s*{\s*return\s*{/.exec(parts.script.content)
          var scriptData = /\<script\>\s*/.exec(parts.script.content)
          var exportDefaultData = /export\s*default/.exec(parts.script.content)
          var insertString = `style:${styleStr},`
          var insertExportDefault = `export default {data(){return {style:${styleStr}}}}`
          var noDataInsertString = `data(){return{style:${styleStr}}},`

          if (scriptData != null & exportDefaultData == null) {
            var end = parts.script.content.indexOf(scriptData[0]) + scriptData[0].length
            parts.script.content = insertStr(parts.script.content, end, insertExportDefault)
          } else if (regData == null) {
            var regExportDefaultData = /export\s*default\s*\{/.exec(parts.script.content)[0]
            var regExportStartIndex = parts.script.content.indexOf(regExportDefaultData)
            var regExportEndIndex = regExportStartIndex + regExportDefaultData.length
            parts.script.content = insertStr(parts.script.content, regExportEndIndex, noDataInsertString)
          } else {
            var regStartIndex = parts.script.content.indexOf(regData[0])
            var regEndIndex = regStartIndex + regData[0].length
            parts.script.content = insertStr(parts.script.content, regEndIndex, insertString)
          }
        }
      })
    }
  }
