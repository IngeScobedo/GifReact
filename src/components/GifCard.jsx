import PropTypes from 'prop-types'

export const GifCard = ({ url, title }) => {
  return (
    <div className="w-full h-[145px] rounded-md border border-slate-200 flex flex-col">
        <div className="h-[70%] w-full rounded-t-md">
            <img src={url} alt={title} className='w-full h-full object-cover rounded-t-md' />
        </div>
        <div className='w-full h-[30%] flex flex-col items-center px-2 py-1 text-center justify-center bg-white rounded-b-md'>
            <h2 className='line-clamp-1'>{title}</h2>
        </div>
    </div>
  )
}

GifCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
