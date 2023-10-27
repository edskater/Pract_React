import React from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Switch, FormControlLabel, Box, Container, Grid, Typography, Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';


function curpValida(curp) {
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        validado = curp.match(re);
	
    if (!validado)  
    	return false;
    
    function digitoVerificador(curp17) {

        var diccionario  = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
            lngSuma      = 0.0,
            lngDigito    = 0.0;
        for(var i=0; i<17; i++)
            lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
        lngDigito = 10 - lngSuma % 10;
        if (lngDigito === 10) return 0;
        return lngDigito;
    }
  
    if (validado[2] !== digitoVerificador(validado[1])) 
    	return false;
        
    return true; 
}




export default function RegistrationForm() {
  const [emergencyContact, setEmergencyContact] = React.useState(false);
    const [curpValidity, setCurpValidity] = useState(true); // Estado de validez de CURP
  
    const handleSwitchChange = () => {
    setEmergencyContact(!emergencyContact);
  };


  const handleCurpChange = (event) => {
    const curp = event.target.value.toUpperCase();
    setCurpValidity(curpValida(curp));
  };


 


  return (
    
      <Container>
        <Typography variant="h3" gutterBottom>
         Datos Generales
        </Typography>

              <Box height={'668px'} flexDirection="column" justifyContent={'space-evenly'} display={'flex'}>

                  <Grid container spacing={2}>
                      <Grid item xs={4}>
                          <TextField fullWidth required label="Nombre(s)" />
                      </Grid>
                      <Grid item xs={4}>
                          <TextField fullWidth required label="Primer Apellido" />
                      </Grid>
                      <Grid item xs={4}>
                          <TextField fullWidth label="Segundo Apellido" />
                      </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                      <Grid item xs={2}>
                          <TextField fullWidth required type="date" label="Fecha de Nacimiento" InputLabelProps={{ shrink: true }} />
                      </Grid>

                      <Grid item xs={2}>
                          <FormControl fullWidth required>
                              <InputLabel>Sexo</InputLabel>
                              <Select sx={{ minWidth: '92px' }}>
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Option 1">Option 1</MenuItem>
                                  <MenuItem value="Option 2">Option 2</MenuItem>
                              </Select>
                          </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                          <FormControl fullWidth required>
                              <InputLabel>Estado de Nacimiento</InputLabel>
                              <Select>
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Option 1">Option 1</MenuItem>
                                  <MenuItem value="Option 2">Option 2</MenuItem>
                              </Select>
                          </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                          <TextField required label="CURP"
                              id="curpInput" /* Asigna un id al campo de CURP */
                              onChange={handleCurpChange} /*  Agrega el manejador de cambios */
                              error={!curpValidity} /*  Muestra un error si la CURP no es válida */
                              helperText={!curpValidity ? "CURP no válida" : ""} /* Mensaje de error */
                              fullWidth />
                      </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                      <Grid item xs={4}>
                          <FormControl fullWidth required>
                              <InputLabel>ocupacion</InputLabel>
                              <Select sx={{ minWidth: '132px' }}>
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Option 1">Option 1</MenuItem>
                                  <MenuItem value="Option 2">Option 2</MenuItem>
                              </Select>
                          </FormControl>
                      </Grid>

                      <Grid item xs={4}>
                          <TextField fullWidth required label="Correo Electronico" />
                      </Grid>

                      <Grid item xs={4}>
                          <TextField fullWidth required label="Telefono" />
                      </Grid>
                  </Grid>

                  <FormControlLabel
                      control={<Switch
                          checked={emergencyContact}
                          onChange={handleSwitchChange}
                          name="emergencyContactSwitch"
                          color="primary" />}
                      label="Contacto para llamar en caso de emergencia" />
                  {emergencyContact && (
                      <>
                          <Grid container spacing={2}>
                              <Grid item xs={6}>
                                  <TextField fullWidth required label="Nombre completo" inputProps={{ maxLength: 50 }} />
                              </Grid>
                              <Grid item xs={6}>
                                  <TextField fullWidth required label="Teléfono" type="tel" inputProps={{ maxLength: 10 }} />
                              </Grid>
                          </Grid>
                      </>
                  )}

                    <ButtonGroup variant="text" aria-label=" outlined large button group" style={{justifyContent:'flex-end'}} size="large">
                        <Button key="Atras">Atras</Button>
                        <Button key="Siguiente">Siguiente</Button>
                    </ButtonGroup>
              </Box>
          </Container>   
  );
}

