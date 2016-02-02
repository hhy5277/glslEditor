export function getDomOrigin (el) {
    const box = (el.getBoundingClientRect) ? el.getBoundingClientRect() : { top: 0, left: 0 };
    const doc = el && el.ownerDocument;
    const body = doc.body;
    const win = doc.defaultView || doc.parentWindow || window;
    const docElem = doc.documentElement || body.parentNode;
    const clientTop = docElem.clientTop || body.clientTop || 0; // border on html or body or both
    const clientLeft = docElem.clientLeft || body.clientLeft || 0;

    return {
        left: box.left + (win.pageXOffset || docElem.scrollLeft) - clientLeft,
        top: box.top + (win.pageYOffset || docElem.scrollTop) - clientTop
    };
}

 /* Event handling */
export function addEvent (element, event, callback, caller) {
    let handler;
    element.addEventListener(event, handler = function (e) {
        callback.call(caller, e);
    }, false);
    return handler;
}

export function removeEvent (element, event, callback) {
    element.removeEventListener(event, callback, false);
}