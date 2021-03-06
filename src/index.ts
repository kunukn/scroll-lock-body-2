const attribute = 'data-scroll-lock-is-active'
const noPadding = 'scrollLockNoPadding'

export const enableScrollLock = (): void => {
  if (document.body.dataset[noPadding] == null) {
    const scrollbarWidth = getScrollbarWidth()
    if (scrollbarWidth) {
      document.body.style.paddingRight = getScrollbarWidth() + 'px'
    }
  }

  document.body.style.overflow = 'hidden'
  document.body.setAttribute(attribute, '')
}

export const disableScrollLock = (): void => {
  if (document.body.dataset[noPadding] == null) {
    document.body.style.paddingRight = ''
  }
  document.body.style.overflow = ''
  document.body.removeAttribute(attribute)
}

export const isScrollLockEnabled = (): boolean => {
  return document.body.getAttribute(attribute) != null
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
export const getScrollbarWidth = (): number => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = document.documentElement.clientWidth
  return Math.abs(window.innerWidth - documentWidth)
}
