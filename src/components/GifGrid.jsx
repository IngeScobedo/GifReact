import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks'
import { GifCard } from './GifCard'
import './GifGrid.css'

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category)

  return (
    <div className="w-full flex justify-center bg-gray-200">
        <section className="w-full max-w-[1100px] flex flex-col gap-5 px-8 py-3">
            <div className='w-full flex justify-center text-center'>
                <h1
                    className='text-indigo-500 font-bold text-4xl first-letter:uppercase' >{category}
                </h1>
            </div>
            <div className='w-full grid grid-cols-3 gap-4'>
                {
                    !isLoading
                      ? gifs.map(gif => (<GifCard url={gif.url} title={gif.title} key={gif.id}/>))
                      : (
                        <div className='w-full h-20 flex justify-center items-center'>
                            <span className='loader'></span>
                        </div>
                        )
                }
            </div>
        </section>

    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
