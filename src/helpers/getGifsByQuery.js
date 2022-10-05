export const getGifsByQuery = async (category) => {
  // const apiUrl = import.meta.env.VITE_API_URL
  // const apiKey = import.meta.env.VITE_API_KEY
  const apiUrl = 'api.giphy.com/v1/gifs/search'
  const apiKey = 'iA39iJnWzk5bUHe4cgfuJC9ZT6RniYOf'

  const url = `https://${apiUrl}?api_key=${apiKey}&q=${category}&limit=9`
  const res = await fetch(url)
  const { data } = await res.json()
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_large.url
  }))
  return gifs
}
