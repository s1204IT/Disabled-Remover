// ==UserScript==
// @name         Disabled Remover
// @namespace    https://github.com/s1204IT/Disabled-Remover
// @version      1.0.1
// @description  Remove all "disabled" attributes in HTML tags
// @author       Syuugo (@s1204IT)
// @match        *://*/*
// @icon         none
// @grant        none
// ==/UserScript==

Array.from(document.querySelectorAll('[disabled="disabled"], .disabled')).forEach(el => { el.removeAttribute('disabled'); el.classList.remove('disabled'); });
