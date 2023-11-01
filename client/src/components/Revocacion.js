import React from 'react'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box, Container, FormControl, InputLabel } from '@mui/material';

function Revocacion() {

  const [Mov_rev, setMov_rev] = React.useState("");

  
  return (
    <React.Fragment>
          <Container>
            <Box sx={{ height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center' }}>
            <FormControl fullWidth  required>
                              <InputLabel>Motivo de Revocación</InputLabel>
                              <Select sx={{ minWidth: '92px' }}
                                        value={Mov_rev}
                                        onChange={(e) => setMov_rev(e.target.value)} // Captura el valor seleccionado de "Sexo"
                                >
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Masculino">Masculino</MenuItem>
                                  <MenuItem value="Femenino">Femenino</MenuItem>
                              </Select>
                          </FormControl>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label">
                  Cargar archivo 1
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Button variant="contained" component="label">
                  Cargar archivo 2
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Stack>
            </Box>
          </Container>
    </React.Fragment>
    
    
  )
}

export default Revocacion
