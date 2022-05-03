import { Grid, Typography } from '@mui/material'
import FormSelect from './components/FormSelect'
import TableTariff from './components/TableTariff'

const style = {
  typography: { textAlign: 'center' }
}

function App() {
  return (
    <Grid container spacing={10}>
      <Grid item>
        <Typography
          sx={style.typography}
          color="primary"
          component="h1"
          variant="h2"
        >
          Telzir
        </Typography>
        <TableTariff />
      </Grid>
      <Grid item>
        <FormSelect />
      </Grid>
    </Grid>
  )
}

export default App
