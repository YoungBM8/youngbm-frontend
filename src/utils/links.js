/** True for absolute web addresses and mailto:/tel: links. */
export function isExternalHref(href) {
    return /^(https?:)?\/\//i.test(href) || /^(mailto|tel):/i.test(href);
}
