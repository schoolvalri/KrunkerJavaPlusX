// ==UserScript==
// @name         ESP by krunker Java
// @namespace    https://github.com/KrunkerJavaPlusX/KrunkerJavaPlusX
// @version      2.9.2
// @description  ESP NameTags!
// @author       krunker
// @match        *://krunker.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

// ESP Wallhacks
Function.prototype.toString = new Proxy(Function.prototype.toString, {
    apply(target, thisArg, argArray) {
        let ret = target.apply(thisArg, argArray);
        if (ret.length > 3500000 && ret.includes("function anonymous"))
            Object.defineProperty(Object.prototype, /if\(!\w+\['(\w+)']\)continue/.exec(ret)[1], {value: true, enumerable: false});
        return ret
    }
})
