
export const getGifs = async ( category) => {

  const uri = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=DT9UWgW5mJ7AygyOXas2NCsI92qCbiVf`
  const peticion = await fetch(uri)
  const { data } = await peticion.json()

  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }
  })

  return gifs
}