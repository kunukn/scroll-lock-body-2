const attribute = 'data-scroll-lock-is-active';

export const enableScrollLock = (): void => {
  document.body.style.paddingRight = getScrollbarWidth() + 'px';
  document.body.style.overflow = 'hidden';
  document.body.setAttribute(attribute, '');
};

export const disableScrollLock = (): void => {
  document.body.style.paddingRight = '';
  document.body.style.overflow = '';
  document.body.removeAttribute(attribute);
};

export const isScrollLockEnabled = (): boolean => {
  return document.body.getAttribute(attribute) != null;
};

/*
Copied from 
https://github.com/twbs/bootstrap/blob/main/js/src/util/scrollbar.js
*/
export const getScrollbarWidth = (): number => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
};
