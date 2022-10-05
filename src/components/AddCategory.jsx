/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = ({ target }) => {
    console.log(target.value)
    setInputValue(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputValue.trim()
    console.log('value', value)
    if (value.length <= 1) { return }
    onNewCategory(value)
    setInputValue('')
  }

  return (
    <form aria-label="form" onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
            type="text"
            id="search"
            name="search"
            className='border border-black rounded-[28px] text-center text-black my-4 mx-2 w-[80%] px-2 py-3'
            placeholder='Buscar gifs...'
            value={inputValue}
            onChange={ handleInputChange }
            />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
