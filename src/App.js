import { Typography } from '@mui/material'
import CalculaTarifa from './components/CalculaTarifa'
import TableTariff from './components/TableTariff'

function App() {
  return (
    <div className="App">
      <Typography color="primary" component="h1" variant="h2">
        Telzir
      </Typography>
      <TableTariff />
      <CalculaTarifa />
    </div>
  )
}

export default App
