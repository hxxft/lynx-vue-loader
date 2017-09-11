var camelCase = require('camelcase');

var _color_map_ = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkgrey": "#a9a9a9",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkslategrey": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "grey": "#808080",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgray": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightgrey": "#d3d3d3",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370db",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#db7093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "rebeccapurple": "#663399",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32"
  }

var _enum_map_ = {
    "visible": ['visible', 'hidden'],
    "display": ['flex', 'none'],
    "alignItems": ['auto', 'flex-start', 'flex-end', 'center', 'stretch'],
    "alignSelf": ['auto', 'center', 'flex-start', 'flex-end'],
    "flexDirection": ['row', 'column'],
    "justifyContent": ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    "flexWrap": ['nowrap', 'wrap'],
    "position": ['relative', 'absolute', 'fixed'],
    "textAlign": ['left', 'right', 'center'],
    "textDecoration": ['none', 'underline', 'line-through'],
    "fontWeight": ['normal', 'bold'],
    "textOverflow": ['clip', 'ellipsis'],
    "whiteSpace": ['normal', 'nowrap'],
    "objectFit": ['cover', 'fill', 'contain']
}

var _len_validator_func_ = function (name, k, v) {
    v = (v || '').toString()

    if (v.match(/^[-+]?[0-9]*\.?[0-9]+$/)) {
        return { value: parseFloat(v) }
    }

    // 100% web for hack
    if (v === 'pixel' || v === 'auto' || v === '100%') {
        return { value: v }
    }

    if (v.match(/^[-+]?[0-9]*\.?[0-9]+px$/)) {
        return {
            value: v
        }
    }

    return {
        value: null,
        reason: 'ERROR: property value `' + v + '` is not supported for `' + name + '` (only number and pixel values are supported)'
    }
}

var _enum_validator_func_ = function (name, k, v) {
    var list = _enum_map_[k]
    var index = list.indexOf(v)
    if (index > 0) {
        return { value: v }
    }
    if (index === 0) {
        return {
            value: v,
            reason: 'NOTE: property value `' + v + '` is the DEFAULT value for `' + name + '` (could be removed)'
        }
    } else {
        return {
            value: null,
            reason: 'ERROR: property value `' + v + '` is not supported for `' + name + '` (supported values are: `' + list.join('`|`') + '`)'
        }
    }
}

var _integer_validator_func_ = function (name, k, v) {
    v = (v || '').toString()

    if (v.match(/^[-+]?[0-9]+$/)) {
        return { value: parseInt(v, 10) }
    }

    return {
        value: null,
        reason: 'ERROR: property value `' + v + '` is not supported for `' + name + '` (only integer is supported)'
    }
}

var _number_validator_func_ = function (name, k, v) {
    v = (v || '').toString()

    if (v.match(/^[-+]?[0-9]*\.?[0-9]+$/)) {
        return { value: parseFloat(v) }
    }

    return {
        value: null,
        reason: 'ERROR: property value `' + v + '` is not supported for `' + name + '` (only number is supported)'
    }
}

var _color_validator_func_ = function (name, k, v) {
    v = (v || '').toString()

    if (v.match(/^#[0-9a-fA-F]{6}$/)) {
        return { value: v }
    }

    if (v.match(/^#[0-9a-fA-F]{3}$/)) {
        return {
            value: '#' + v[1] + v[1] + v[2] + v[2] + v[3] + v[3],
            reason: 'NOTE: property value `' + v + '` is autofixed to `' + '#' + v[1] + v[1] + v[2] + v[2] + v[3] + v[3] + '`'
        }
    }

    if (_color_map_[v]) {
        return {
            value: _color_map_[v],
            reason: 'NOTE: property value `' + v + '` is autofixed to `' + _color_map_[v] + '`'
        }
    }

    var arrColor, r, g, b, a
    var RGB_REGEXP = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/gi
    var RGBA_REGEXP = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d*\.?\d+)\s*\)$/gi
    if (arrColor = RGB_REGEXP.exec(v)) {
        r = parseInt(arrColor[1])
        g = parseInt(arrColor[2])
        b = parseInt(arrColor[3])
        if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
            return { value: 'rgb(' + [r, g, b].join(',') + ')' }
        }
    }
    if (arrColor = RGBA_REGEXP.exec(v)) {
        r = parseInt(arrColor[1])
        g = parseInt(arrColor[2])
        b = parseInt(arrColor[3])
        a = parseFloat(arrColor[4])
        if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255 && a >= 0 && a <= 1) {
            return { value: 'rgba(' + [r, g, b, a].join(',') + ')' }
        }
    }
    if (v === 'transparent') {
        return { value: 'rgba(0,0,0,0)' }
    }

    return {
        value: null,
        reason: 'ERROR: property value `' + v + '` is not valid for `' + name + '`'
    }
}

var _validator_map_ = {
    "width": _len_validator_func_,
    "height": _len_validator_func_,
    "top": _len_validator_func_,
    "bottom": _len_validator_func_,
    "left": _len_validator_func_,
    "right": _len_validator_func_,
    "paddingLeft": _len_validator_func_,
    "paddingRight": _len_validator_func_,
    "paddingTop": _len_validator_func_,
    "paddingBottom": _len_validator_func_,
    "marginLeft": _len_validator_func_,
    "marginRight": _len_validator_func_,
    "marginTop": _len_validator_func_,
    "marginBottom": _len_validator_func_,
    "borderWidth": _len_validator_func_,
    "borderRadius": _len_validator_func_,
    "minWidth": _len_validator_func_,
    "maxWidth": _len_validator_func_,
    "maxHeight": _len_validator_func_,
    "minHeight": _len_validator_func_,
    "lineHeight": _len_validator_func_,
    "fontSize": _len_validator_func_,
    "visible": _enum_validator_func_,
    "display": _enum_validator_func_,
    "alignItems": _enum_validator_func_,
    "alignSelf": _enum_validator_func_,
    "flexDirection": _enum_validator_func_,
    "justifyContent": _enum_validator_func_,
    "flexWrap": _enum_validator_func_,
    "position": _enum_validator_func_,
    "textAlign": _enum_validator_func_,
    "textDecoration": _enum_validator_func_,
    "fontWeight": _enum_validator_func_,
    "textOverflow": _enum_validator_func_,
    "whiteSpace": _enum_validator_func_,
    "objectFit": _enum_validator_func_,
    "zIndex": _integer_validator_func_,
    "flex": _integer_validator_func_,
    "opacity": _number_validator_func_,
    "backgroundColor": _color_validator_func_,
    "borderColor": _color_validator_func_,
    "color": _color_validator_func_,
}

module.exports = function (name, value) {
    var key = camelCase(name);
    var validator_func = _validator_map_[key]
    if(typeof validator_func === 'function') {
        result = validator_func(name, key, value)
    }else{
        result = {
            value: null,
            reason: 'ERROR: `' + name + '` is not supported by Lynx'
        }
    }
    result.property = name
    return result
}