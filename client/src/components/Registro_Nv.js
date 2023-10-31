import React from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Switch, FormControlLabel, Box, Container, Grid, Typography, Button, ButtonGroup } from '@mui/material';
import { useState, useEffect } from 'react';


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
  const [formularioActual, setFormularioActual] = useState(1);

  const [sexo, setSexo] = useState(''); // Estado para el campo "Sexo"
  const [estadoNacimiento, setEstadoNacimiento] = useState(''); // Estado para el campo "Estado de Nacimiento"
  const [Ocup, setOcupacion] = useState('');
  const [EstCivils, setEstCivils] = useState('');

  const [Estado, setEstado] = useState('');
  const [Municipio, setMunicipio] = useState('');
  const [Localidad, setLocalidad] = useState('');
  const [Colonia, setColonia] = useState('');
  const [Calle, setCalle] = useState('');

  const [entidades, setEntidades] = useState([]);

  useEffect(() => {
    const fetchEntidades = async () => {
      try {
        const response = await fetch('/api/entidades'); // Cambia la ruta de la API según tu configuración
        const data = await response.json();
        setEntidades(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntidades();
  }, []);

  const [datosDelPrimerFormulario, setDatosDelPrimerFormulario] = useState({
    nombre:'',
    apellidoP: '',
    apellidoM: '',
    FechaNac: '',
    Sexo:'',
    EstNac:'',
    CURP:'',
    Ocup:'',
    CorreoElc:'',
    Telefono:'',
    NombreEmergen:'',
    TelEmergen:'',
    // ... otros campos y sus valores iniciales
  });
  
  const [datosDelSegundoFormulario, setDatosDelSegundoFormulario] = useState({
    CP: '',
    Estado: '',
    Municipio: '',
    Localidad: '',
    Colonia: '',
    Calle: '',
    Num_ext: '',
    // ... otros campos y sus valores iniciales
  });

  const handleGuardarDatos = (data) => {
    if (formularioActual === 1) {
      setDatosDelPrimerFormulario(data);
      setFormularioActual(2); // Cambia al segundo formulario
    } else if (formularioActual === 2) {
      setDatosDelSegundoFormulario(data);
      // Aquí puedes realizar alguna acción adicional si es necesario
    }
  };
  
    const handleSwitchChange = () => {
    setEmergencyContact(!emergencyContact);
  };


  const handleCurpChange = (event) => {
    const curp = event.target.value.toUpperCase();
    setCurpValidity(curpValida(curp));
  };

  

  


 
  return (
    <div>
        {formularioActual === 1 && (
      <Container >

        
                <Grid container spacing={2} marginTop={'0px'}>
                <Grid item xs={10}>
                    <Typography variant="h3" gutterBottom fullWidth > 
                    Datos Generales
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="text" size="large" href='/Registro_Nv_moral'sx={{display: 'flex', justifyContent: 'flex-end'}} >
                    Persona Moral
                    </Button>
                </Grid>
                </Grid>

              <Box height={'652px'} flexDirection="column" justifyContent={'space-evenly'} display={'flex'}>

                  <Grid container spacing={2}>
                      <Grid item xs={4}>
                          <TextField value={datosDelPrimerFormulario.nombre} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, nombre: e.target.value })}  fullWidth  label="Nombre(s)" />
                      </Grid>
                      <Grid item xs={4}>
                          <TextField value={datosDelPrimerFormulario.apellidoP} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, apellidoP: e.target.value })} fullWidth   label="Primer Apellido" />
                      </Grid>
                      <Grid item xs={4}>
                          <TextField value={datosDelPrimerFormulario.apellidoM} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, apellidoM: e.target.value })} fullWidth  label="Segundo Apellido" />
                      </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                      <Grid item xs={2}>
                          <TextField fullWidth  required type="date" value={datosDelPrimerFormulario.FechaNac} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, FechaNac: e.target.value })} label="Fecha de Nacimiento" InputLabelProps={{ shrink: true }} />
                      </Grid>

                      <Grid item xs={2}>
                          <FormControl fullWidth  required>
                              <InputLabel>Sexo</InputLabel>
                              <Select sx={{ minWidth: '92px' }}
                                        value={sexo}
                                        onChange={(e) => setSexo(e.target.value)} // Captura el valor seleccionado de "Sexo"
                                >
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Masculino">Masculino</MenuItem>
                                  <MenuItem value="Femenino">Femenino</MenuItem>
                              </Select>
                          </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                          <FormControl fullWidth  required>
                              <InputLabel>Estado de Nacimiento</InputLabel>
                              <Select value={estadoNacimiento}
                                    onChange={(e) => setEstadoNacimiento(e.target.value)} // Captura el valor seleccionado de "Estado de Nacimiento"
                                    >
                                  {/* Aquí puedes añadir tus opciones */}
                                  {entidades.map((entidad) => (
                                    <MenuItem key={entidad} value={entidad}>
                                        {entidad}
                                    </MenuItem>
                                    ))}
                              </Select>
                          </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                          <TextField required label="CURP"
                              id="curpInput" /* Asigna un id al campo de CURP */
                              onChange={handleCurpChange} /*  Agrega el manejador de cambios */
                              error={!curpValidity} /*  Muestra un error si la CURP no es válida */
                              helperText={!curpValidity ? "CURP no válida" : ""} /* Mensaje de error */
                              value={datosDelPrimerFormulario.CURP}
                              fullWidth  />
                      </Grid>
                  </Grid>

                  <Grid container spacing={1}>
                      <Grid item xs={2}>
                          <FormControl fullWidth  required>
                              <InputLabel>ocupacion</InputLabel>
                              <Select sx={{ minWidth: '132px' }}
                              value={Ocup}
                              onChange={(e) => setOcupacion(e.target.value)} // Captura el valor seleccionado de "Estado de Nacimiento"
                              >
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Option 1">Option 1</MenuItem>
                                  <MenuItem value="Option 2">Option 2</MenuItem>
                              </Select>
                          </FormControl>
                      </Grid>

                      <Grid item xs={2}>
                          <FormControl fullWidth  required>
                              <InputLabel>Estado Civil</InputLabel>
                              <Select sx={{ minWidth: '132px' }}
                              value={EstCivils}
                              onChange={(e) => setEstCivils(e.target.value)} // Captura el valor seleccionado de "Estado de Nacimiento"
                              >
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Option 1">Option 1</MenuItem>
                                  <MenuItem value="Option 2">Option 2</MenuItem>
                              </Select>
                          </FormControl>
                      </Grid>


                      <Grid item xs={4}>
                          <TextField value={datosDelPrimerFormulario.CorreoElc} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, CorreoElc: e.target.value })} fullWidth  required label="Correo Electronico" />
                      </Grid>

                      <Grid item xs={4}>
                          <TextField value={datosDelPrimerFormulario.Telefono} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, Telefono: e.target.value })} fullWidth  required label="Telefono" />
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
                                  <TextField value={datosDelPrimerFormulario.NombreEmergen} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, NombreEmergen: e.target.value })} fullWidth  required label="Nombre completo" inputProps={{ maxLength: 50 }} />
                              </Grid>
                              <Grid item xs={6}>
                                  <TextField value={datosDelPrimerFormulario.TelEmergen} onChange={(e) => setDatosDelPrimerFormulario({ ...datosDelPrimerFormulario, TelEmergen: e.target.value })} fullWidth  required label="Teléfono" type="tel" inputProps={{ maxLength: 10 }} />
                              </Grid>
                          </Grid>
                      </>
                  )}

                    <ButtonGroup variant="text" aria-label=" outlined large button group" style={{justifyContent:'flex-end'}} size="large">
                        <Button key="Atras">Atras</Button>
                        <Button key="Siguiente" onClick={() => handleGuardarDatos(datosDelPrimerFormulario)}>Siguiente</Button>
                    </ButtonGroup>
              </Box>
          </Container>   
    )}

    {formularioActual === 2 && (
        <Container>
          {/* Código del segundo formulario */}
          <Grid container spacing={2} marginTop={'0px'}>
                <Grid item xs={10}>
                    <Typography variant="h3" gutterBottom fullWidth > 
                    Datos Domicilio
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                </Grid>

              <Box height={'652px'} flexDirection="column" justifyContent={'space-evenly'} display={'flex'}>

                  <Grid container spacing={2}>
                      <Grid item xs={4}>
                          <TextField value={datosDelSegundoFormulario.CP} onChange={(e) => setDatosDelSegundoFormulario({ ...datosDelSegundoFormulario, CP: e.target.value })}  fullWidth  label="CP" />
                      </Grid>
                      <Grid item xs={4}>
                      <FormControl fullWidth  required>
                              <InputLabel>Entidad Federativa</InputLabel>{/* implentar select de auto completado el que ingresas texto y busca resultados */}
                              <Select sx={{ minWidth: '92px' }}
                                        value={Estado}
                                        onChange={(e) => setEstado(e.target.value)} // Captura el valor seleccionado de "Sexo"
                                >
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Option 1">Option 1</MenuItem>
                                  <MenuItem value="Option 2">Option 2</MenuItem>
                              </Select>
                          </FormControl>
                      </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                      <Grid item xs={2}>
                          <FormControl fullWidth  required>
                              <InputLabel>Municipio</InputLabel>{/* implentar select de auto completado el que ingresas texto y busca resultados */}
                              <Select sx={{ minWidth: '92px' }}
                                        value={Municipio}
                                        onChange={(e) => setMunicipio(e.target.value)} // Captura el valor seleccionado de "Sexo"
                                >
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Option 1">Option 1</MenuItem>
                                  <MenuItem value="Option 2">Option 2</MenuItem>
                              </Select>
                          </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                      <FormControl fullWidth  required>
                              <InputLabel>Localidad</InputLabel>{/* implentar select de auto completado el que ingresas texto y busca resultados */}
                              <Select sx={{ minWidth: '92px' }}
                                        value={Localidad}
                                        onChange={(e) => setLocalidad(e.target.value)} // Captura el valor seleccionado de "Sexo"
                                >
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Option 1">Option 1</MenuItem>
                                  <MenuItem value="Option 2">Option 2</MenuItem>
                              </Select>
                          </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                      <FormControl fullWidth  required>
                              <InputLabel>Colonia</InputLabel>{/* implentar select de auto completado el que ingresas texto y busca resultados */}
                              <Select sx={{ minWidth: '92px' }}
                                        value={Colonia}
                                        onChange={(e) => setColonia(e.target.value)} // Captura el valor seleccionado de "Sexo"
                                >
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Option 1">Option 1</MenuItem>
                                  <MenuItem value="Option 2">Option 2</MenuItem>
                              </Select>
                          </FormControl>
                      </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                      <Grid item xs={4}>
                      <FormControl fullWidth  required>
                              <InputLabel>Calle</InputLabel>{/* implentar select de auto completado el que ingresas texto y busca resultados */}
                              <Select sx={{ minWidth: '92px' }}
                                        value={Calle}
                                        onChange={(e) => setCalle(e.target.value)} // Captura el valor seleccionado de "Sexo"
                                >
                                  {/* Aquí puedes añadir tus opciones */}
                                  <MenuItem value="Option 1">Option 1</MenuItem>
                                  <MenuItem value="Option 2">Option 2</MenuItem>
                              </Select>
                          </FormControl>
                      </Grid>

                      <Grid item xs={4}>
                          <TextField value={datosDelSegundoFormulario.Num_ext} onChange={(e) => setDatosDelSegundoFormulario({ ...datosDelSegundoFormulario, Num_ext: e.target.value })}  fullWidth  required label="Numero Exterior" />
                      </Grid>
                  </Grid>

                  

          <ButtonGroup variant="text" aria-label=" outlined large button group" style={{justifyContent:'flex-end'}} size="large">
                <Button key="Atras">Atras</Button>
                <Button key="Siguiente" onClick={() => handleGuardarDatos(datosDelSegundoFormulario)}> Siguiente </Button>
          </ButtonGroup>
          </Box>
        </Container>

      )}

      {formularioActual === 3 && (
        <Container>
          {/* Puedes mostrar los datos capturados aquí */}
          <div>
            <h2>Datos del Primer Formulario:</h2>
            <pre>{JSON.stringify(datosDelPrimerFormulario, null, 2)}</pre>
            <h2>Datos del Segundo Formulario:</h2>
            <pre>{JSON.stringify(datosDelSegundoFormulario, null, 2)}</pre>
          </div>
        </Container>
      )}
    </div>
  );

}

