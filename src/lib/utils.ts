export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function setScroll(state: 'hidden' | 'unset') {
  document.body.style.overflow = state
}
