import { useEffect, useState } from 'react'
import { getGifsByQuery } from '../helpers'

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const gifs = await getGifsByQuery(category)
    setGifs(gifs)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages()
  }, [])

  return {
    gifs,
    isLoading
  }
}
