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
    try {
        document.getElementById("id_p").setAttribute("src", "https://yhl.ac.cn/icon/Avatar.png");
    } catch (error) {
    }
    try {
        document.querySelectorAll(".b_ad").forEach(el => el.remove());
    } catch (error) {      
    }
    try {
        document.querySelectorAll(".b_spa_adblock").forEach(el => el.remove());
    } catch (error) {
    }
    try {
        document.getElementById("id_rh").remove();
    } catch (error) {
    }
    try {
        document.getElementById("id_n").remove();
    } catch (error) {
    }
    try {
        document.getElementById("id_nc").remove();
    } catch (error) {
    }
    setTimeout(() => {
        try {
            document.getElementById("id_p").setAttribute("src", "https://yhl.ac.cn/icon/Avatar.png");
        } catch (error) {
        }
    }, 1000);
})();
