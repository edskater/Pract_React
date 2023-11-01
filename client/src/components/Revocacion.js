import React from 'react'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box, Container, Divider, FormControl, InputLabel, TextField } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import jsPDF from 'jspdf';



function Revocacion() {

  const [Mov_rev, setMov_rev] = React.useState("");
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const handleFileChange = (setFile) => (event) => {
    setFile(event.target.files[0]);
  }
  
  const createPDF = () => {
    let doc = new jsPDF();
    let date = new Date();

    doc.text(`Fecha de creación del documento: ${date.toDateString()}`, 10, 10);
    doc.text(`Motivo de revocación: ${Mov_rev}`, 10, 20);

    doc.save('Solicitud de Revocacion.pdf');

    printPDF();
  };

  const printPDF = () => {
    let win = window.open();
    win.document.write('<html><head><title>Print</title></head><body>');
    win.document.write('<iframe src="documento.pdf" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    win.document.write('</body></html>');
    win.document.close();
    win.print();
  };

  
  return (
    <React.Fragment>
          <Container>
            <Box sx={{ height: '74vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center' }}>
            <FormControl fullWidth  required>
                              <InputLabel>Motivo de Revocación</InputLabel>
                              <Select sx={{ minWidth: '92px' }}
                                        value={Mov_rev}
                                        onChange={(e) => setMov_rev(e.target.value)} // Captura el valor seleccionado de "Sexo"
                                >
                                  {/* Aquí se colocaran las opciones cargadad de la BD de la tabla motivos _revocacion esa tabal tiene dos columnas 
                                  una donde se asigna los motivos que vna a dar un nuevo certificado 
                                  y otra con los que necesitan un documento que justifica la accion de revocacion */}
                                  <Divider textAlign="left">GENERA NUEVO CERTIFICADO</Divider>
                                  <MenuItem value="Masculino">Expiración de Vigencia</MenuItem>
                                  <MenuItem value="Masculino">Pérdida robo o inutilización por daños </MenuItem>
                                  <MenuItem value="Masculino">Inexactitud de los datos</MenuItem>
                                  <MenuItem value="Masculino">El certificado no cumple con los certificados de la ley</MenuItem>
                                  <Divider textAlign="left">SIN GENERAR  NUEVO CERTIFICADO</Divider>
                                  <MenuItem value="Femenino">Revocación por mandato de autoridad competente</MenuItem>{/* Solicita documento justificante */}
                                  <MenuItem value="Femenino">Solicitud del firmante</MenuItem>
                                  <MenuItem value="Femenino">Fallecimiento del firmante</MenuItem>{/* Solicita documento justificante */}
                                  <MenuItem value="Femenino">Incapacidad superviniente total o parcial</MenuItem>{/* Solicita documento justificante */}
                              </Select>
                          </FormControl>
                          <Stack direction="row" justifyContent="center" alignItems="stretch" spacing={4} sx={{marginTop: '20px'}}>
                            <Stack direction="column" alignItems="center" sx={{width: '100%'}}>
                              <Typography variant='h6' display="block" gutterBottom >Solicitud de Revocacion</Typography>
                            <TextField disabled value={file1 ? file1.name : ''} />
                            <ButtonGroup variant="text" aria-label=" outlined large button group" style={{justifyContent:'flex-end', marginTop: '20px'}} size="large" fullWidth>
                            <Button fullWidth variant="text" component="label" onClick={createPDF}>
                              Descarga
                            </Button>
                            <Divider orientation="vertical" variant="fullWidth" />
                            <Button variant="text" component="label">
                              Cargar
                              <input hidden accept="*/*" multiple type="file" onChange={handleFileChange(setFile1)} />
                            </Button>
                            </ButtonGroup>
                            </Stack>
                            <Stack direction="column" alignItems="center" sx={{width: '100%'}}>
                              <Typography variant='h6' display="block" gutterBottom>Acta de Revocacion</Typography>
                            <TextField fullWidth disabled value={file2 ? file2.name : ''} />
                            <ButtonGroup variant="text" aria-label=" outlined large button group" style={{justifyContent:'flex-end', marginTop: '20px'}} size="large" fullWidth>
                            <Button fullWidth variant="text" component="label">
                              Descarga
                            </Button>
                            <Divider orientation="vertical" variant="fullWidth" />
                            <Button fullWidth variant="text" component="label">
                              Cargar
                              <input hidden accept="*/*" multiple type="file" onChange={handleFileChange(setFile2)} />
                            </Button>
                            </ButtonGroup>
                            </Stack>
                            <Stack direction="column" alignItems="center" sx={{width: '100%'}}>
                            <Typography variant="h6" display="block" gutterBottom>
                              Documento justificante
                            </Typography>
                            <TextField disabled value={file3 ? file3.name : ''} />
                            <ButtonGroup variant="text" aria-label=" outlined large button group" style={{justifyContent:'flex-end', marginTop: '20px'}} size="large">
                                  <Button variant="text" component="label"> {/* Este boton se activa con  los motivos que requieran un documento que justifique el motivo de revocacion los motivos que lo requieren estan indicados en la BD como true en la columna documento justificante */}
                                  Cargar Documento Justficante
                                    <input hidden accept="*/*" multiple type="file" onChange={handleFileChange(setFile3)} />
                                  </Button>
                            </ButtonGroup>
                            </Stack>
                          </Stack>
            </Box>
          </Container>
    </React.Fragment>
    
    
  )
}

export default Revocacion
