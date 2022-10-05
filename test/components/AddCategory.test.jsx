import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <AddCategory/>', () => {
  const query = 'Hunter x Hunter'

  test('Debe hace match con el snapshot', () => {
    const onNewCategory = jest.fn()
    const { container } = render(<AddCategory onNewCategory={onNewCategory}/>)
    expect(container).toMatchSnapshot()
  })

  test('Debe de cambiar el valor de la caja de texto al escribir', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory}/>)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: query } })
    expect(input.value).toBe(query)
  })

  test('Debe de hacer el submit del formulario si la caja de texto tiene mas de 1 carácter', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory}/>)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: query } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(query)
  })

  test('El onNewCategory no debe ser llamado si la caja de texto esta vació', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory}/>)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    expect(input.value).toBe('')

    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
  })
})
