
import React from 'react';
import { useFetchGif } from '../Hooks/useFetchGif';
import GifGridItem from './GifGridItem'

export default function GifGrid({ category }) {

  const { data:gifs, loading } = useFetchGif( category )

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
      <p className='animate__animated animate__flash'>
        { loading && 'Cargando'}
      </p>
      <div className='card-grid'>
        {
          gifs.map( gf => {
            return <GifGridItem key = { gf.id } { ...gf } />
          })
        }
      </div>
    </>
  )
}
