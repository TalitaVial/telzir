import CalculadoraDeTarifa from './components/CalculadoraDeTarifa'
import TabelaDeTarifa from './components/TabelaDeTarifa'
import { Box, Typography } from '@mui/material'

const style = {
  typography: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '3rem',
    boxShadow: '2px 3px 8px #add8e6'
  },
  box: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
}

function App() {
  return (
    <>
      <Typography
        color="primary"
        sx={style.typography}
        component="h1"
        variant="h2"
      >
        TELZIR
      </Typography>
      <Box sx={style.box}>
        <CalculadoraDeTarifa />
        <TabelaDeTarifa />
      </Box>
    </>
  )
}

export default App
