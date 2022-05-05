import { render, screen } from '@testing-library/react'
import TabelaDeTarifa from './TabelaDeTarifa'

test('garantir que irá renderizar a tabela tarifa corretamente', () => {
  render(<TabelaDeTarifa />)
  const DDD11 = screen.getAllByText('011')
  expect(DDD11.length).toBe(6)

  const DDD16 = screen.getAllByText('016')
  expect(DDD16.length).toBe(2)

  const DDD17 = screen.getAllByText('017')
  expect(DDD17.length).toBe(2)

  const DDD18 = screen.getAllByText('018')
  expect(DDD18.length).toBe(2)
})
