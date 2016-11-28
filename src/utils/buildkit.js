export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function dispatchCustomEvent(eventName, detail, el) {
  el = el || document;

  var e;
  if (typeof Event === 'function') {
    // Custom Events: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
    e = detail && typeof CustomEvent === 'function' ? new CustomEvent(eventName, { 'detail': detail }) : new Event(eventName);
  } else if (detail) {
    // IE11 has slightly different syntax
    e = document.createEvent('CustomEvent');
    e.initEvent(eventName, false, true, detail); // type, canBubble, cancelable, detail
  } else {
    e = document.createEvent('Event');
    e.initCustomEvent(eventName, false, true);
  }
  el.dispatchEvent(e);
}
