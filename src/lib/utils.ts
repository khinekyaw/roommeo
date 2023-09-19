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

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
