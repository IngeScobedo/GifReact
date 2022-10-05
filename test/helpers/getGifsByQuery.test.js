import { getGifsByQuery } from '../../src/helpers/getGifsByQuery'

describe('Pruebas en getGifsByQuery()', () => {
  const query = 'Hunter x Hunter'
  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifsByQuery(query)
    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
