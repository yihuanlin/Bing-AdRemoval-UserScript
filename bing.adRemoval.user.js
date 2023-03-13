// ==UserScript==
// @name         Bing AdRemoval
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Automatically remove ads from www.bing.com
// @author       yihuanlin
// @match        https://www.bing.com/*
// @icon         https://www.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico
// @grant        none
// ==/UserScript==

(function() {
    document.querySelectorAll(".b_ad").forEach(el => el.remove());
    document.querySelectorAll(".b_spa_adblock").forEach(el => el.remove());
    document.getElementById("id_rh").remove()
    document.getElementById("id_n").remove()
    document.getElementById("id_nc").remove()
})();
