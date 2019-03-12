module.exports = {
  "plugins": [],
  "rules": {
    "color-no-invalid-hex": true,//禁止无效的十六进制颜色
    "font-family-no-duplicate-names": true,//禁止重复的字体系列名称
    "font-family-no-missing-generic-family-keyword": true,//禁止在字体系列名称列表中缺少通用族
    "function-calc-no-invalid": true,//禁止在 calc 函数中使用无效表达式
    "function-calc-no-unspaced-operator": true,//禁止在 calc 函数中使用没有间隔的运算符
    "function-linear-gradient-no-nonstandard-direction": true,//禁止在 linear-gradient() 中调用不符合标准语法的无效方向值
    "string-no-newline": true,//禁止字符串中的(未转义)换行符
    "unit-no-unknown": true,//禁止未知的单位
    "property-no-unknown": true,//禁止未知的属性
    "keyframe-declaration-no-important": true,//禁止关键帧声明的 !important
    "declaration-block-no-duplicate-properties": [true, {
      "ignore": ["consecutive-duplicates-with-different-values"]
    }],//禁止声明块的重复属性
    "declaration-block-no-shorthand-property-overrides": true,//禁止简写属性覆盖相关的扩写属性
    "block-no-empty": true,//禁止空块
    "selector-pseudo-class-no-unknown": true,//禁止未知的伪类选择器
    "selector-pseudo-element-no-unknown": true,//禁止未知的伪元素选择器
    "selector-type-no-unknown": true,//禁止未知的类型选择器
    "media-feature-name-no-unknown": true,//禁止未知的媒体功能名
    "at-rule-no-unknown": true,//禁止未知的@规则
    "comment-no-empty": true,//禁止空注释
    "no-descending-specificity": true,//禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    "no-duplicate-at-import-rules": true,//禁止在样式表中使用重复的 @import 规则
    "no-duplicate-selectors": true,//禁止样式表中的重复选择器
    "no-empty-source": true,//禁止空源码
    "no-extra-semicolons": true,//禁止额外的分号,命令行中的 --fix 选项可以自动修复此规则报告的所有问题
    "no-invalid-double-slash-comments": true,//禁止 CSS 不支持并可能导致意外结果的双斜杠注释（//...）
    "color-named": "never",//要求（如果可能）或禁止命名颜色,"always-where-possible"|"never"
    // "color-no-hex": true,//禁止 16 进制颜色
    // "function-blacklist": [],//指定禁用的函数的黑名单,array|string: ["array", "of", "unprefixed", /functions/ or "regex"]|"function"|"/regex/"
    "function-url-no-scheme-relative": true,//禁止相对协议 URL,相对协议 URL是一个以 // 开头,后跟主机的 URL
    // "function-url-scheme-blacklist": [],//指定禁用的 URL 协议的黑名单,[URL 协议]由字母、数字、+、- 和 . 字符组成。它可以出现在 URL 的开头,后跟":",array|string|regex: ["array", "of", /schemes/ or "/regex/"]|"scheme"|/regex/
    // "function-url-scheme-whitelist": [],//规则同上面黑名单,指定允许的 URL 协议的白名单
    // "function-whitelist": [],//指定允许的函数的白名单,array|string: ["array", "of", "unprefixed", /functions/ or "regex"]|"function"|"/regex/"
    // "keyframes-name-pattern": "",//regex|string,字符串将被翻译成一个正则表达式,就像 new RegExp(yourString) ———— 所以一定要正确转义,指定关键帧名的模式
    // "number-max-precision": 6,//int：允许的最大小数位数,限制数字中允许的小数位数
    // "time-min-milliseconds": 100,//指定时间值的最小毫秒数,检查 transition-duration、transition-delay、animation-duration、animation-delay 中的正数,以及它们在 transition 和 animation 简写中声明的那些时间
    // "unit-blacklist": [],//指定禁用的单位的黑名单,array|string: ["array", "of", "units"]|"unit"
    // "unit-whitelist": [],//指定允许的单位的白名单,array|string: ["array", "of", "units"]|"unit"
    "shorthand-property-no-redundant-values": true,//禁止简写属性的冗余值,受用属性[margin,padding,border-color,border-radius,border-style,border-width,grid-gap],命令行中的 --fix 选项可以自动修复此规则报告的所有问题
    "value-no-vendor-prefix": true,//禁止值的浏览器引擎前缀,此规则仅针对标准值的前缀进行指正,而不针对专有或未知值
    // "custom-property-pattern": "",//regex|string,字符串将被翻译成一个正则表达式,就像 new RegExp(yourString) ———— 所以一定要正确转义,指定自定义属性的模式
    // "property-blacklist": [],//指定禁用的属性的黑名单（大概是不能使用名单的属性）,array|string: ["array", "of", "unprefixed", /properties/ or "regex"]|"property"|"/regex/"|/regex/
    "property-no-vendor-prefix": true,//禁止属性的浏览器引擎前缀,此规则并不排斥所有前缀。它使用 Autoprefixer 的最新数据（来自 caniuse.com）来判断前缀是否违规
    // "property-whitelist": [],//指定允许的属性的白名单（大概是只能用名单的属性）,array|string: ["array", "of", "unprefixed", /properties/ or "regex"]|"property"|"/regex/"|/regex/
    "declaration-block-no-redundant-longhand-properties": true,//禁止可合并为一个简写属性的扩写属性
    "declaration-no-important": true,//禁止声明的 !important
    // "declaration-property-unit-blacklist": {},//指定声明内禁用的属性和单位键值对的黑名单,object: { "unprefixed-property-name": ["array", "of", "units"] }
    // "declaration-property-unit-whitelist": {},//指定声明内允许的属性和单位键值对的白名单,object: { "unprefixed-property-name": ["array", "of", "units"] }
    // "declaration-property-value-blacklist": {},//指定声明内禁用的属性和值键值对的黑名单,object: { "unprefixed-property-name": ["array", "of", "values"], "unprefixed-property-name": ["/regex/", "non-regex", /regex/] }
    // "declaration-property-value-whitelist": {},//指定声明内允许的属性和值键值对的白名单,object: { "unprefixed-property-name": ["array", "of", "values"], "unprefixed-property-name": ["/regex/", "non-regex"] }
    "declaration-block-single-line-max-declarations": 1,//限制一个单行声明块中声明的数量,int：允许的最大声明数量
    // "selector-attribute-operator-blacklist": [],//指定禁用的属性运算符的黑名单,array|string: ["array", "of", "operators"]|"operator"
    // "selector-attribute-operator-whitelist": [],//指定允许的属性运算符的白名单,array|string: ["array", "of", "operators"]|"operator"
    // "selector-class-pattern": "",//指定类选择器的模式,此规则将检查"."之后的选择器值。无需在模式中包含".",regex|string
    // "selector-combinator-blacklist": [],//指定禁用的组合选择器的黑名单,此规则将空白后代选择器规范化为单个空格,array|string: ["array", "of", "combinators"]|"combinator"
    // "selector-combinator-whitelist": [],//指定允许的组合选择器的白名单,此规则将空白后代选择器规范化为单个空格,array|string: ["array", "of", "combinators"]|"combinator"
    // "selector-id-pattern": "",//指定 ID 选择器的模式,此规则将检查"#"之后的选择器值。无需在模式中包含"#",regex|string
    // "selector-max-attribute": 2,//限制一个选择器中属性选择器的数量,int：允许的最大选择器数量
    // "selector-max-class": 2,//限制一个选择器中类的数量,int：允许的最大类数量
    // "selector-max-combinators": 2,//限制一个选择器中组合选择器的数量,int：允许的最大组合选择器数量
    // "selector-max-compound-selectors": 3,//限制一个选择器中复合选择器的数量,int：允许的最大复合选择器数量
    // "selector-max-empty-lines": 0,//限制选择器中相邻空行的数量,int：允许的最大相邻空行数量
    // "selector-max-id": 2,//限制一个选择器中 ID 选择器的数量,int：允许的最大通用选择器数量
    // "selector-max-pseudo-class": 1,//限制一个选择器中伪类的数量,int：允许的最大伪类数量
    // "selector-max-specificity": "0.2.0",//限制选择器的优先级,string: 允许的最大优先级,格式为 "id,class,type",计算选择器中ID选择器的数量（= A）,计算选择器中的类选择器,属性选择器和伪类的数量（= B）,计算选择器中类型选择器和伪元素的数量（= C）,忽略通用选择器
    // "selector-max-type": 2,//限制一个选择器中类型选择器的数量,int：允许的最大类型选择器数量
    // "selector-max-universal": 2,//限制一个选择器中通用选择器的数量,int：允许的最大通用选择器数量
    // "selector-nested-pattern": "",//指定嵌套规则的选择器的模式,regex|string
    "selector-no-qualifying-type": [true, {
      "ignore": ["attribute"]
    }],//禁止用类型选择器来限定一个选择器,ignore: ["attribute", "class", "id"]
    "selector-no-vendor-prefix": true,//禁止选择器的浏览器引擎前缀
    // "selector-pseudo-class-blacklist": [],//指定禁用的伪类选择器的黑名单,array|string|regex: ["array", "of", "unprefixed", /pseudo-classes/ or "/regex/"]|"pseudo-class"|/regex/
    // "selector-pseudo-class-whitelist": [],//指定允许的伪类选择器的白名单,array|string|regex: ["array", "of", "unprefixed", /pseudo-classes/ or "/regex/"]|"pseudo-class"|/regex/
    // "selector-pseudo-element-blacklist": [],//指定禁用的伪元素选择器的黑名单,array|string|regex: ["array", "of", "unprefixed", "pseudo-elements" or "regex"]|"pseudo-element"|/regex/
    // "selector-pseudo-element-whitelist": [],//指定允许的伪元素选择器的白名单,array|string|regex: ["array", "of", "unprefixed", "pseudo-elements" or "regex"]|"pseudo-element"|/regex/
    // "media-feature-name-blacklist": [],//指定禁用的媒体功能名的黑名单,array|string|regex: ["array", "of", "unprefixed", /media-features/ or "regex"]|"media-feature"|/regex/
    "media-feature-name-no-vendor-prefix": true,//禁止媒体功能名的浏览器引擎前缀
    // "media-feature-name-value-whitelist": {},//指定允许的媒体功能名和值键值对的白名单
    // "media-feature-name-whitelist": [],//指定允许的媒体功能名的白名单,array|string|regex: ["array", "of", "unprefixed", /media-features/ or "regex"]|"media-feature"|/regex/
    // "custom-media-pattern": "",//指定自定义媒体查询名的模式,regex|string
    // "at-rule-blacklist": [],//指定禁用的@规则的黑名单,array|string: ["array", "of", "unprefixed", "at-rules"]|"at-rule"
    "at-rule-no-vendor-prefix": true,//禁止@规则的浏览器引擎前缀
    // "at-rule-whitelist": [],//指定允许的@规则的白名单,array|string: ["array", "of", "unprefixed", "at-rules"]|"at-rule"
    // "comment-word-blacklist": [],//指定在注释中禁用的单词的黑名单
    "max-nesting-depth": 3,//限制允许的嵌套深度,根级别@规则将不会计入嵌套深度中,int: 允许的最大嵌套深度,[ignore: ["blockless-at-rules"],忽略仅包含其他规则并且本身不具有声明块的@规则],[ignore: ["pseudo-classes"],忽略每个选择器列表项中的第一个选择器是伪类的规则],[ignoreAtRules: ["/regex/", /regex/, "string"],忽略指定的@规则]
    "no-unknown-animations": true,//禁止未知的动画,此规则认为在同一源码中定义的 @keyframes 规则的标识符是已知的
    "color-hex-case": "lower",//指定 16 进制颜色的大小写,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "lower"|"upper"
    // "color-hex-length": "",//指定 16 进制颜色的简写或扩写,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "short"|"long"
    // "font-family-name-quotes": "",//指定是否应在字体族名称周围使用引号,此规则检查 font 和 font-family 属性,string: "always-where-required"|"always-where-recommended"|"always-unless-keyword",如果您真的想使用名为 "sans-serif" 的字体，请关闭此规则,详情见文档
    // "font-weight-notation": "",//要求 font-weight 使用数字或命名（如果可能）值。此外，当需要命名值时，要求名称有效,有效的字体粗细命名是 normal、bold、bolder 和 lighter,string: "numeric"|"named-where-possible"
    // "function-comma-newline-after": "",//要求在函数的逗号之后必须有换行符或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-multi-line"|"never-multi-line"
    // "function-comma-newline-before": "",//要求在函数的逗号之前必须有换行符或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-multi-line"|"never-multi-line"
    "function-comma-space-after": "always",//要求在函数的逗号之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"
    // "function-comma-space-before": "",//要求在函数的逗号之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"
    "function-max-empty-lines": 0,//限制函数中相邻空行的数量,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,int：允许的最大相邻空行数量
    "function-name-case": "lower",//指定函数名的大小写,当使用 lower 选项时，驼峰函数名，例如 translateX，会被考虑,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "lower"|"upper"
    // "function-parentheses-newline-inside": "",//要求在函数的括号内侧必须有换行符或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-multi-line"|"never-multi-line"
    "function-parentheses-space-inside": "never",//要求在函数的括号内侧必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"
    "function-url-quotes": "always",//要求或禁止 URL 的引号,string: "always"|"never"
    "function-whitespace-after": "always",//要求或禁止函数之后的空白符,如果下一个字符是 ,、)、/ 或 }，则此规则不会在 ) 之后立即检查空格,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "number-leading-zero": "always",//要求或禁止小于 1 的小数有一个前导零,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "number-no-trailing-zeros": true,//禁止数量的尾随零,命令行中的 --fix 选项可以自动修复此规则报告的一些问题
    "string-quotes": ["double", { avoidEscape: true }],//指定字符串使用单引号或双引号,注释中的引号将被忽略,@charset 规则中的单引号将被忽略，因为根据 CSS 规范，在此上下文中使用单引号是不正确的,命令行中的 --fix 选项可以自动修复此规则报告的大多数问题,string: "single"|"double",[avoidEscape: true|false, defaults to true,允许字符串使用单引号或双引号，只要该字符串包含必须以其他方式转义的引号]
    "length-zero-no-unit": true,//禁止零长度的单位,长度单位是：em、ex、ch、vw、vh、cm、mm、in、pt、pc、px、rem、vmin 和 vmax
    "unit-case": "lower",//指定单位的大小写,命令行中的 --fix 选项可以自动修复此规则报告的大多数问题,string: "lower"|"upper"
    "value-keyword-case": "lower",//指定关键字值的大小写,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "lower"|"upper"
    // "value-list-comma-newline-after": "",//要求在值列表的逗号之后必须有换行符或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的大多数问题,string: "always"|"always-multi-line"|"never-multi-line"
    // "value-list-comma-newline-before": "",//要求在值列表的逗号之前必须有换行符或不能有空白符,string: "always"|"always-multi-line"|"never-multi-line"
    "value-list-comma-space-after": "always",//要求在值列表的逗号之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的大多数问题,string: "always"|"never"|"always-single-line"|"never-single-line"
    // "value-list-comma-space-before": "",//要求在值列表的逗号之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的大多数问题,string: "always"|"never"|"always-single-line"|"never-single-line"
    "value-list-max-empty-lines": 0,//限制值列表中相邻空行的数量,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,int：允许的最大相邻空行数量
    // "custom-property-empty-line-before": "",//要求或禁止在自定义属性之前的空行,命令行中的 --fix 选项可以自动修复此规则报告的所有问题。我们建议启用 indentation 规则，以便更好地使用此规则自动修复结果,string: "always"|"never"
    "property-case": "lower",//指定属性的大小写,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "lower"|"upper"
    "declaration-bang-space-after": "never",//要求在声明的叹号之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "declaration-bang-space-before": "always",//要求在声明的叹号之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    // "declaration-colon-newline-after": "",//要求在声明块的冒号之后必须有换行符或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-multi-line"
    "declaration-colon-space-after": "always",//要求在声明块的冒号之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"
    "declaration-colon-space-before": "never",//要求在声明块的冒号之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    // "declaration-empty-line-before": "",//要求或禁止在声明之前的空行,此规则仅适用于标准属性声明,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,我们建议启用 indentation 规则,string: "always"|"never",{except: ["after-comment", "after-declaration", "first-nested"]},["after-comment",如果声明紧跟在注释之后则反转主选项,共享行注释不会触发此选项],["after-declaration",如果声明紧跟在另一个声明之后则反转主选项,共享行注释不会影响此选项],["first-nested",如果声明被嵌套并且是其父节点的第一个子节点则反转主选项],{ignore: ["after-comment", "after-declaration", "first-nested", "inside-single-line-block"]}["after-comment",如果声明紧跟在注释之后则忽略],["after-declaration",如果声明紧跟在另一个声明之后则忽略],["first-nested",如果声明被嵌套并且是其父节点的第一个子节点则忽略],["inside-single-line-block",忽略单行块内的声明]
    "declaration-block-semicolon-newline-after": "always-multi-line",//要求在声明块的分号之后必须有换行符或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-multi-line"|"never-multi-line"
    "declaration-block-semicolon-newline-before": "never-multi-line",//要求在声明块的分号之前必须有换行符或不能有空白符,string: "always"|"always-multi-line"|"never-multi-line"
    "declaration-block-semicolon-space-after": "always-single-line",//要求在声明块的分号之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"
    "declaration-block-semicolon-space-before": "never",//要求在声明块的分号之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"
    "declaration-block-trailing-semicolon": "always",//要求或禁止声明块的一个尾随分号,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "block-closing-brace-empty-line-before": "never",//要求或禁止在块的闭大括号之前空行,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always-multi-line"|"never"
    "block-closing-brace-newline-after": "always-multi-line",//要求在块的闭大括号之后必须有换行符或不能有空白符,此规则允许用空格分隔的行尾注释, 只要注释不包含换行符即可,此规则允许在块的闭大括号之后使用尾随分号,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
    "block-closing-brace-newline-before": "always-multi-line",//要求在块的闭大括号之前必须有换行符或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-multi-line"|"never-multi-line"
    "block-closing-brace-space-after": "never-multi-line",//要求在块的闭大括号之后必须有一个空格或不能有空白符,此规则允许在块的闭括号之后使用尾随分号,string: "always"|"never"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
    "block-closing-brace-space-before": "always-single-line",//要求在块的闭大括号之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
    "block-opening-brace-newline-after": "always-multi-line",//要求在块的开大括号之后必须有换行符,此规则允许行尾注释后跟换行符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-multi-line"|"never-multi-line"
    // "block-opening-brace-newline-before": "",//要求在块的开大括号之前必须有换行符或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
    "block-opening-brace-space-after": "always-single-line",//要求在块的开大括号之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
    "block-opening-brace-space-before": "always",//要求在块的开大括号之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
    "selector-attribute-brackets-space-inside": "never",//要求在属性选择器的中括号内侧必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "selector-attribute-operator-space-after": "never",//要求在属性选择器中的运算符之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "selector-attribute-operator-space-before": "never",//要求在属性选择器中的运算符之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "selector-attribute-quotes": "always",//要求或禁止属性值的引号,string: "always"|"never"
    "selector-combinator-space-after": "always",//要求在组合选择器之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "selector-combinator-space-before": "always",//要求在组合选择器之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "selector-descendant-combinator-no-non-space": true,//禁止后代选择器使用非空格字符,此规则确保后代选择器仅使用单个空格，不使用制表符，换行符或多个空格,命令行中的 --fix 选项可以自动修复此规则报告的大多数问题
    "selector-pseudo-class-case": "lower",//指定伪类选择器的大小写,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "lower"|"upper"
    "selector-pseudo-class-parentheses-space-inside": "never",//要求在伪类选择器的括号内侧必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "selector-pseudo-element-case": "lower",//指定伪元素选择器的大小写,string: "lower"|"upper"
    // "selector-pseudo-element-colon-notation": "",//指定伪元素适用单冒号还是双冒号表示法,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "single"|"double"
    "selector-type-case": "lower",//指定类型选择器的大小写,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "lower"|"upper"
    "selector-list-comma-newline-after": "always-multi-line",//要求在选择器列表的逗号之后必须有换行符或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-multi-line"|"never-multi-line"
    "selector-list-comma-newline-before": "never-multi-line",//要求在选择器列表的逗号之前必须有换行符或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-multi-line"|"never-multi-line"
    "selector-list-comma-space-after": "always-single-line",//要求在选择器列表的逗号之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"
    "selector-list-comma-space-before": "never",//要求在选择器列表的逗号之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"
    "rule-empty-line-before": ["always-multi-line", {
      "ignore": ["inside-block"]
    }],//要求或禁止在规则之前的空行,此规则忽略作为源中第一个节点的规则,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-multi-line"|"never-multi-line",规则过多,查文档
    "media-feature-colon-space-after": "always",//要求在媒体功能的冒号之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "media-feature-colon-space-before": "never",//要求在媒体功能的冒号之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "media-feature-name-case": "lower",//指定媒体功能名的大小写,此规则忽略范围上下文中的媒体功能名称,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "lower"|"upper"
    "media-feature-parentheses-space-inside": "never",//要求在媒体功能的括号内侧必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "media-feature-range-operator-space-after": "always",//要求在媒体功能的范围运算符之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "media-feature-range-operator-space-before": "always",//要求在媒体功能的范围运算符之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "media-query-list-comma-newline-after": "always-multi-line",//要求在媒体查询列表的逗号之后必须有换行符或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-multi-line"|"never-multi-line"
    "media-query-list-comma-newline-before": "never-multi-line",//要求在媒体查询列表的逗号之前必须有换行符或不能有空白符,string: "always"|"always-multi-line"|"never-multi-line"
    "media-query-list-comma-space-after": "always-single-line",//要求在媒体查询列表的逗号之后必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"
    "media-query-list-comma-space-before": "never",//要求在媒体查询列表的逗号之前必须有一个空格或不能有空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"|"always-single-line"|"never-single-line"
    "at-rule-empty-line-before": ["always", {
      "ignore": ["after-comment", "first-nested", "inside-block", "blockless-after-same-name-blockless", "blockless-after-blockless"]
    }],//要求或禁止在@规则之前的空行,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "at-rule-name-case": "lower",//指定@规则名的大小写,SCSS 中只有小写的规则名称才有效,命令行中的 --fix 选项可以自动修复此规则报告的一些问题,string: "lower"|"upper"
    // "at-rule-name-newline-after": "",//要求在@规则名之后必须有换行符,string: "always"|"always-multi-line"
    "at-rule-name-space-after": "always",//要求在@规则名之后必须有一个空格,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"always-single-line"
    "at-rule-semicolon-newline-after": "always",//要求在@规则的分号之后必须有换行符,此规则允许在行尾注释之后跟换行符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"
    "at-rule-semicolon-space-before": "never",//要求在@规则的分号之前必须有一个空格或不能有空白符,string: "always"|"never"
    "comment-empty-line-before": ["always", {
      "except": ["first-nested"],
      "ignore": ["after-comment", "stylelint-commands"]
    }],//要求或禁止在注释之前的空行,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "comment-whitespace-inside": "always",//要求或禁止注释标记内侧的空白符,警告： 选择器和值列表中的注释目前被忽略,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "always"|"never"
    "indentation": [2, {
      "baseIndentLevel": 1,
      "indentInsideParens": "once-at-root-twice-in-block",
    }],//指定缩进,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,int|"tab", 其中 int 是空格的数量
    // "linebreaks": "unix",//指定 unix 或 windows 换行符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题,string: "unix"|"windows"
    "max-empty-lines": [2, {
      "ignore": ["comments"]
    }],//限制相邻空行的数量,int：允许的最大相邻空行数
    "max-line-length": [20, {
      "ignore": ["comments"]
    }],//限制行的长度,超出最大长度但不包含空格（除行开头之外）的行将被忽略,在计算行长度时，任何 url(...) 函数的参数都会从计算中排除，因为通常您无法控制这些参数的长度。这意味着长的 url(...) 函数不应该导致违规,int：允许的最大字符数
    "no-eol-whitespace": true,//禁止行尾空白符,命令行中的 --fix 选项可以自动修复此规则报告的所有问题
    // "no-missing-end-of-source-newline": true,//禁止缺少源码结尾换行符,空文件不被视为违规,命令行中的 --fix 选项可以自动修复此规则报告的所有问题
    "no-empty-first-line": true,//禁止空第一行,此规则忽略空源码。请使用no-empty-source规则禁止空源码,命令行中的 --fix 选项可以自动修复此规则报告的所有问题
  }
};
