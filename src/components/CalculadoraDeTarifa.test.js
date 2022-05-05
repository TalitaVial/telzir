import { render, screen, fireEvent } from '@testing-library/react'
import CalculadoraDeTarifa from './CalculadoraDeTarifa'

test('garantir que irá calcular dado da tarifa corretamente', () => {
  render(<CalculadoraDeTarifa />)

  const selectDDDOrigem = screen.getByLabelText(/ddd de origem:/i)
  // {"origem": "011",
  // "destino": "016",
  // "valor": "1.90"},
  fireEvent.change(selectDDDOrigem, { target: { value: '011' } })

  const selectDDDDestino = screen.getByLabelText(/ddd de destino:/i)
  fireEvent.change(selectDDDDestino, { target: { value: '016' } })

  const selectPlano = screen.getByLabelText(/informe seu plano/i)
  fireEvent.change(selectPlano, { target: { value: '30' } })

  const inputTempoDaChamada = screen.getByLabelText(/tempo da chamada:/i)
  fireEvent.change(inputTempoDaChamada, { target: { value: '40' } })

  const bntCalcular = screen.getByRole('button', { name: /calcular/i })
  fireEvent.click(bntCalcular)

  screen.debug()
  expect(screen.getByText(/0,00/i)).toBeInTheDocument()
})
