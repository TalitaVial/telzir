import { Grid } from '@mui/material'
import FormularioDeDados from './components/FormularioDeDados'
import TableTariff from './components/TableTariff'

const style = {
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

function App() {
  return (
    <Grid sx={style.grid}>
      <TableTariff />
      <FormularioDeDados />
    </Grid>
  )
}

export default App
