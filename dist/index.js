/*!
 * scroll-lock-body-2 v0.0.4
 * (c) kunukn
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var attribute = 'data-scroll-lock-is-active';
var enableScrollLock = function () {
    document.body.style.paddingRight = getScrollbarWidth() + 'px';
    document.body.style.overflow = 'hidden';
    document.body.setAttribute(attribute, '');
};
var disableScrollLock = function () {
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    document.body.removeAttribute(attribute);
};
var isScrollLockEnabled = function () {
    return document.body.getAttribute(attribute) != null;
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var getScrollbarWidth = function () {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    var documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
};

exports.disableScrollLock = disableScrollLock;
exports.enableScrollLock = enableScrollLock;
exports.getScrollbarWidth = getScrollbarWidth;
exports.isScrollLockEnabled = isScrollLockEnabled;
//# sourceMappingURL=index.js.map
