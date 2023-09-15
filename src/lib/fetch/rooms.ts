//
const URL_SEGMENT = 'rooms'

export const getAll = async () => {
  const res = await fetch(`${process.env.API_URL}/${URL_SEGMENT}`, {
    cache: 'no-cache',
  })
  const data = await res.json()
  return data
}
