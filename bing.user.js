// ==UserScript==
// @name         Bing AdRemoval and Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Automatically remove ads from www.bing.com and switch to dark mode (code adopted from https://github.com/lucalewin/better-bing)
// @author       yihuanlin
// @match        https://www.bing.com/*
// @icon         https://www.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        GM_addStyle(`
        body{background-color:#222}*{color:#ccc !important;color-scheme:dark light}a{color:cornflowerblue !important}.scs_t{background-color:#222 !important}.scs_arw{filter: invert(70%)}#relatedQnAListDisplay:first-child{border-top:1px solid #333 !important}#b_header{background-color:#222 !important;z-index:3 !important;border-bottom:0}#b_results > li{background-color:#333 !important;border-radius:12px}.b_active::after{background-color:#402dde !important;border-radius:2px}.b_scopebar > ul > li > a{color:#aaa !important}cite{color:#58a02e !important}.b_searchboxForm{background-color:#333 !important}.algoSlug_icon{padding:3px 4px !important;color:#888 !important;border:none !important;background-color:#444 !important}#b_results > li.b_algo.b_algoBorder.b_algo_feedback.b_snippetGobig.b_rcgbt_bg{background-color:#333333 !important}.df_alsoAskCard{border-color:#555 !important}#b_results > li#mfa_root.fabcolapse{background-color:transparent !important}#rs_lgw_list a{background-color:#333 !important;border-radius:0 16px 16px 0 !important}#brsv3 > ul > li > a{background-color:#222 !important}#b_results > li > div > div.captionMediaCard > div,#na_ti > div > div > div.itm_cap.b_overflow.wimg,div > div > a.na_ccw{background-color:#2a2a2a !important}#b_context > li > div > div > div.b_sideBleed.lite-entcard-ans > div.lite-entcard-exp.exp-rs{background-color:transparent !important}#b_context > li > div > div > div.b_sideBleed.lite-entcard-ans,#tob_rail_container,#tob_rail_slide{background-color:transparent !important;border-radius:4px;border:1px solid #333 !important}footer{background-color:#333 !important}#sw_as > div,#sw_as > div > div,#sw_as > div > ul,#sw_as > div > ul:active,.b_ds5 > .mfa_btn{background-color:#333 !important}#sw_as > div > ul:hover{background-color:#444 !important;border-radius:6px}input#id_a{background-color:#333;border:1px solid #666;border-radius:6px}div.tab-head > div,div.tab-head > div > ul,div.tab-head > div > ul > li{background-color:#333 !important}.lite-entcard-blk{background-color:#222 !important}#HBContent{background-color:#333 !important}#sydwrap_wrapper{background-color:#333 !important}.b_antiSideBleed.b_antiTopBleed{background-color:#333 !important}#b_filterTabBar > a{background-color:#333 !important;border:1px solid #666 !important}#b_filterTabBar > a.selectedFilter{background-color:#444 !important}#overlayPanel{background-color:#333 !important}
        `);
    }
    document.querySelectorAll(".b_ad").forEach(el => el.remove());
    document.querySelectorAll(".b_spa_adblock").forEach(el => el.remove());
    document.getElementById("id_rh").remove()
    document.getElementById("id_n").remove()
    document.getElementById("id_nc").remove()
})();
