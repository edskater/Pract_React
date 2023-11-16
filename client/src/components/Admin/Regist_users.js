import React from 'react'
import { TextField, Select, MenuItem, FormControl, InputLabel, Box, Container, Grid, Typography, Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';


function Regist_users() {
    const[rol, setRol] = useState('');
    const[estatus, setEstatus] = useState('');

 
    const [datosDelPrimerFormulario, setDatosDelPrimerFormulario] = useState({
        nombre:'',
        apellidoP: '',
        apellidoM: '',
        FechaNac: '',
        Rol:'',
        Estatus:'',
        CorreoElc:'',
        Password:'',
        // ... otros campos y sus valores iniciales
      });

    const handleGuardarDatos = (data) => {
      
          setDatosDelPrimerFormulario(data); 
    
    }

    return (
    <Container >
          <Typography variant="h3" marginBottom={'5px'} gutterBottom fullWidth > Registro Usuarios </Typography>

  <Box sx={{ height: '68vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center', flexGrow: 1, bgcolor: 'background.paper'}}>

      <Grid container spacing={2} marginBottom={'6vh'}>
          <Grid item xs={4} >
              <TextField value={datosDelPrimerFormulario.nombre} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, nombre: e.target.value })}  fullWidth  label="Nombre(s)" />
          </Grid>
          <Grid item xs={4}>
              <TextField value={datosDelPrimerFormulario.apellidoP} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, apellidoP: e.target.value })} fullWidth   label="Primer Apellido" />
          </Grid>
          <Grid item xs={4}>
              <TextField value={datosDelPrimerFormulario.apellidoM} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, apellidoM: e.target.value })} fullWidth  label="Segundo Apellido" />
          </Grid>
      </Grid>

      <Grid container spacing={2} marginBottom={'6vh'}>

          <Grid item xs={4}>
              <FormControl fullWidth  required>
                  <InputLabel>Rol</InputLabel>
                  <Select sx={{ minWidth: '92px' }}
                            value={rol}
                            onChange={(e) => setRol(e.target.value)} // Captura el valor seleccionado de "Sexo"
                    >
                      {/* Aquí puedes añadir tus opciones */}
                      <MenuItem value="Supervisor">Supervisor</MenuItem>
                      <MenuItem value="Operador">Operador</MenuItem>
                      <MenuItem value="Administrador">Administrador</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={4}>
              <FormControl fullWidth  required>
                  <InputLabel>Estatus</InputLabel>
                  <Select value={estatus}
                        onChange={(e) => setEstatus(e.target.value)} // Captura el valor seleccionado de "Estado de Nacimiento"
                        >
                      {/* Aquí puedes añadir tus opciones con el api o metodo a usar para los estatus */}
                      {/* {entidades.map((entidad) => (
                        <MenuItem key={entidad} value={entidad}>
                            {entidad}
                        </MenuItem>
                        ))} */}
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={4}>
              <TextField value={datosDelPrimerFormulario.CorreoElc} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, nombre: e.target.value })}  fullWidth  label="Correo Electronico" />
          </Grid>
      </Grid>

      <Grid container spacing={2} marginBottom={'6vh'}>

          <Grid item xs={6}>
              <TextField value={datosDelPrimerFormulario.Password} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, nombre: e.target.value })}  fullWidth  label="Contraseña" />
          </Grid>
          <Grid item xs={6}>
              <TextField fullWidth   label="Confirma Contraseña" />
          </Grid>
      </Grid>

        <ButtonGroup variant="text" aria-label=" outlined large button group" style={{justifyContent:'flex-end'}} size="large">
            <Button key="Siguiente" onClick={() => handleGuardarDatos(datosDelPrimerFormulario)}>Registrar</Button>
        </ButtonGroup>
  </Box>
</Container>  
  )
}

export default Regist_users
