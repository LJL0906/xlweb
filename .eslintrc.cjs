module.exports = {
  //运行环境
  env: {
    browser: true, //浏览器端工作
    es2021: true, //es2021 校验ES语法
  },
  //规则继承
  extends: [
    //全部规则默认是关闭的,这个配置项开启推荐规则,推荐规则参照文档
    //比如:函数不能重名、对象不能出现重复key

    "eslint:recommended", // 开启eslint推荐规则
    //vue3语法规则 检测vue
    "plugin:vue/vue3-essential",
    //ts语法规则 检测ts
    "plugin:@typescript-eslint/recommended",
  ],
  //要为特定类型的文件指定处理器
  //比如校验markdown，要自己添加
  overrides: [],

  //指定解析器:解析器
  //Esprima 默认解析器
  //Babel-ESLint babel解析器
  //@typescript-eslint/parser ts解析器
  parser: "@typescript-eslint/parser",

  //指定解析器选项
  parserOptions: {
    ecmaVersion: "latest", //校验ECMA最新版本
    sourceType: "module", //设置为"script"（默认），或者"module"代码在ECMAScript模块中
  },
  //ESLint支持使用第三方插件。在使用插件之前，您必须使用npm安装它
  //该eslint-plugin-前缀可以从插件名称被省略
  plugins: [
    "vue", //检测vue语法的插件
    "@typescript-eslint", // 检测TS语法的插件
  ],
  //eslint规则
  rules: {},
};
