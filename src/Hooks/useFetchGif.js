import { useEffect, useState } from 'react'
import { getGifs } from '../Helpers/GetGifs';

export const useFetchGif = ( category ) => {
  const [state, setstate] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getGifs( category ).then( gifs =>
        setstate({
          data: gifs,
          loading: false
        })
    )
  }, [ category ])

  return state
}