/*!
 * scroll-lock-body-2 v0.0.2
 * (c) kunukn
 * Released under the MIT License.
 */

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
/*
Copied from
https://github.com/twbs/bootstrap/blob/main/js/src/util/scrollbar.js
*/
var getScrollbarWidth = function () {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    var documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
};

export { disableScrollLock, enableScrollLock, getScrollbarWidth, isScrollLockEnabled };
//# sourceMappingURL=index.esm.js.map
