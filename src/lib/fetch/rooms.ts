//
const URL_SEGMENT = 'rooms'

export const getAll = async (queryString = '') => {
  const res = await fetch(
    `${process.env.API_URL}/${URL_SEGMENT}${
      queryString ? `?${queryString}` : ''
    }`,
    {
      cache: 'no-cache',
    }
  )
  const data = await res.json()
  return data
}
