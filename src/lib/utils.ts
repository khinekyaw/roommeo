export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function setScroll(state: 'hidden' | 'unset') {
  document.body.style.overflow = state
}

export function buildQueryString(params: any) {
  let esc = encodeURIComponent
  return Object.keys(params)
    .filter((k) => params[k])
    .map((k) => esc(k) + '=' + esc(params[k]))
    .join('&')
}
