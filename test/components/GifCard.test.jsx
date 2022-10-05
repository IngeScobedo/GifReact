import { GifCard } from '../../src/components/GifCard'
const { render, screen } = require('@testing-library/react')

describe('Pruebas en <GifCard/>', () => {
  const title = 'Hunter x Hunter'
  const url = 'https://media0.giphy.com/media/nbB1CV1fazlGo/giphy.gif?cid=e21578914ou1xinu6yqyf0zf8ouch0ms7d526axv20lj645s&rid=giphy.gif&ct=g'

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifCard title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar la imagen con el url y el alt indicado', () => {
    render(<GifCard title={title} url={url} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('debe de mostrar el titulo indicado', () => {
    render(<GifCard title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
