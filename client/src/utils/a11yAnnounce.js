/**
 * Screen Reader Announcement Utility (WCAG 2.1 / 2.2 AAA Compliance)
 * Injects and manages hidden aria-live announcement regions in the DOM.
 */

let politeRegion = null;
let assertiveRegion = null;

function ensureRegion(mode = 'polite') {
  if (typeof document === 'undefined') return null;

  const id = `samajh-a11y-live-${mode}`;
  let region = document.getElementById(id);

  if (!region) {
    region = document.createElement('div');
    region.id = id;
    region.setAttribute('aria-live', mode);
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    region.style.position = 'absolute';
    region.style.width = '1px';
    region.style.height = '1px';
    region.style.padding = '0';
    region.style.margin = '-1px';
    region.style.overflow = 'hidden';
    region.style.clip = 'rect(0, 0, 0, 0)';
    region.style.whiteSpace = 'nowrap';
    region.style.border = '0';
    document.body.appendChild(region);
  }

  return region;
}

/**
 * Announce an informational or status message politely to screen readers.
 * @param {string} message
 */
export function announcePolite(message) {
  if (!politeRegion) politeRegion = ensureRegion('polite');
  if (politeRegion) {
    // Clear first to trigger change detection in screen readers
    politeRegion.textContent = '';
    setTimeout(() => {
      politeRegion.textContent = message;
    }, 50);
  }
}

/**
 * Announce an urgent warning or error assertively to screen readers.
 * @param {string} message
 */
export function announceAssertive(message) {
  if (!assertiveRegion) assertiveRegion = ensureRegion('assertive');
  if (assertiveRegion) {
    assertiveRegion.textContent = '';
    setTimeout(() => {
      assertiveRegion.textContent = message;
    }, 50);
  }
}
