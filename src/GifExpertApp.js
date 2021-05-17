import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'
import GifGrid from './Components/GifGrid'

export default function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories = { setCategories } />
      <hr />

      {
        categories.map( category => {
          return <GifGrid category = { category } key = { category } />
        })
      }
      
    </>
  )
}
