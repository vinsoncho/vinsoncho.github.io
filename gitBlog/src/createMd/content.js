//获取主页面的html
require('../component/index.scss');
let index = require('../component/index.html');

let articleWrap = document.getElementById('ajax');

//引入以md结尾的文件
let context = require.context("./", false, /\.md$/);
let mdUrl = context.keys()[0];
let md = context(mdUrl);


//把模板添加到html中
articleWrap.innerHTML = md;

require('../component/index.js');