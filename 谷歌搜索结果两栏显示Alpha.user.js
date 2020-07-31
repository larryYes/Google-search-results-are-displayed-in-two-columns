// ==UserScript==
// @name            谷歌搜索结果两栏显示
// @namespace       http://tampermonkey.net/
// @version         0.2.4
// @description     搜索结果支持两栏
// @author          LGJ
// @run-at          document-start
// @include         *://encrypted.google.*/search*
// @include         *://*.google*/search*
// @include         *://*.google*/webhp*
// @grant           none
// @note            2020-07-31 解决一下网页缩放带来的排版错乱问题
// @note            2020-07-31 谷歌分页栏居中排版显示
// @note            2020-07-31 大大减少了搜索结果排版错乱问题
// @create          2020-07-30 实现谷歌搜索结果两栏展示
// ==/UserScript==


/**
建议将搜索结果显示条数显示为20条体验更佳
建议配合AdblockPlus使用，去广告效果极佳
**/


const style = `
  div.card-section,
  div#trev,
    div#rhs,
    div#tads,
    div#bottomads,
    .vspib,
    .rgsep,
    div[id="gko-srp-sp"]+div[class="col"]
{
    display: none !important;
}

/**
屏蔽地图
**/
.xERobd {
    display: none;
}
/**
屏蔽相关搜索
**/

/**
屏蔽YouTube视频
**/
g-section-with-header {
    display: none!important;
}

.mw
{
    max-width: 1600px !important;

    margin: auto;
}

.col
{
    width: 100% !important;
}

#center_col
{
    margin-left: 20px !important;
    width: 100% !important;
}

.g
  {
    float: left !important;
    width: 47% !important;
    min-width: 500px;
    min-height: 130px !important;
    margin: 3px !important;
    padding: 7px !important;
    background-color: #ffffff !important;
    border: 1px solid #E5E5E5 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

/**Google分页栏**/
#foot {
    float: left !important;
    width: 100% !important;
}

.big #tsf {
    width: 1000px !important;
    margin: auto !important;
}
.WE0UJf {
    margin-left: 40%!important;
}

#hdtb-msb {
    width: 100%;
    justify-content: center;
}
#hdtbMenus {
    margin-left: 30%!important;
}
#hdtb-msb-vis {
    margin-left: 0px !important;
}



`;

// 嵌入css
loadStyleString(style);

function loadStyleString(css){
    var style = document.createElement("style");
    style.type = "text/css";
    try{
        style.appendChild(document.createTextNode(css));
    } catch (ex){
        style.styleSheet.cssText = css;
    }
    document.head.appendChild(style);
}