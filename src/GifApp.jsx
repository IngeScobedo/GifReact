import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifApp = () => {
  const [categories, setCategories] = useState([])

  const onAddCategory = (category) => {
    if (categories.includes(category) || category.trim().length < 1) {
      return
    }
    setCategories([category, ...categories])
  }

  return (
    <div className="w-full flex flex-col bg-gray-200 min-h-screen">
        <div className="w-full h-44 bg-red-500 rounded-b-md flex justify-center items-center">
          <h1 className="text-5xl text-white font-bold">GifApp</h1>
        </div>
        <div className="flex flex-col">
          <AddCategory
            onNewCategory={ onAddCategory }
          />
          <ul>
          {
            categories.map(category => (<GifGrid key={category} category={category} />))
          }
          </ul>
        </div>
    </div>
  )
}
