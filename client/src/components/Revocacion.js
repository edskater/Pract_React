import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, Container, Divider, FormControl, InputLabel, TextField } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import jsPDF from 'jspdf';

const Revocacion = () => {
  const [Mov_rev, setMov_rev] = useState("");
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const handleFileChange = (setFile) => (event) => {
    setFile(event.target.files[0]);
  }

 

  const createPDF = () => {
    let doc = new jsPDF('p', undefined, 'a4');
    let date = new Date();

    // Array de nombres de meses
    let monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    // Obtener el mes, el día y el año
    let month = monthNames[date.getMonth()]; // getMonth() devuelve un número entre 0 y 11, por lo que puedes usarlo como índice para obtener el nombre del mes
    let day = date.getDate();
    let year = date.getFullYear();
    
    // Formatear la fecha en el formato MES / día / año
    let formattedDate = `${day} de ${month} del ${year}`;
    
    doc.text(formattedDate, 10, 30, { align: 'left' });

doc.text(formattedDate, 10, 30, { align: 'left' });
  
    // Captura el valor de Mov_rev desde el estado
    const motivoRevocacion = Mov_rev;
  
    // Definir el número de líneas por párrafo
    const linesPerParagraph = 1;
  
    // Definir el ancho máximo para el texto
    const maxWidth = 269 ; // El valor puede variar según tus necesidades
    const maxWidth2 = 200 ;
  
    // Texto del párrafo 1
    const paragraph1 = `Con el objeto de cumplir con los lineamientos para la Asignación del Certificado Digital de Firma Electrónica, establecidos por la Secretaría de Finanzas y de Administración a través de la Dirección de Tecnologías de la Información y Telecomunicaciones, solicito a usted la cancelación de dicho Certificado Digital suscrito a favor del Sr.(a) Eduardo Varelas Aldana, con CURP VAAE971005HDGRLD04. 
El motivo que justifica tal solicitud es: ${motivoRevocacion}.`
  
    // Dividir el texto en líneas que encajen en el ancho máximo y luego justificarlas
    let lines = doc.splitTextToSize(paragraph1, maxWidth);
  
    // Dividir las líneas en párrafos
    let paragraphs = [];
    for (let i = 0; i < lines.length; i += linesPerParagraph) {
        paragraphs.push(lines.slice(i, i + linesPerParagraph));
    }
  
    // Imprimir los párrafos
    let yPosition = 50;
    for (let paragraph of paragraphs) {
        doc.setFontSize(12);
        doc.text(paragraph, 10, yPosition, { align: 'justify' });
        yPosition += paragraph.length * 8; // Ajusta el valor "6" según el espaciado deseado
    }
  
    // Agregar el texto del párrafo 2
    const paragraph2 = `Para efectos de la cancelación del Certificado Digital, soy conocedor de que a partir de la hora y fecha en que la Secretaría me informe que la operación quedó confirmada, ya no podré hacer uso de los servicios en los cuales sea requerido el certificado digital en el Sistema Emisor de Firma Electronica, hasta que solicite y active un nuevo certificado digital, conforme a los procesos y lineamientos que la Secretaría determine para tales efectos.`;
  
    // Dividir y justificar el texto del párrafo 2
    lines = doc.splitTextToSize(paragraph2, maxWidth2);
  
    // Dividir las líneas en párrafos
    paragraphs = [];
    for (let i = 0; i < lines.length; i += linesPerParagraph) {
        paragraphs.push(lines.slice(i, i + linesPerParagraph));
    }
  
    // Imprimir los párrafos
    for (let paragraph of paragraphs) {
        doc.setFontSize(12);
        doc.text(paragraph, 10, yPosition, { align: 'justify' });
        yPosition += paragraph.length * 8; // Ajusta el valor "6" según el espaciado deseado
    }
  
      // Calcular la posición de la línea de firma
    let signatureLinePosition = yPosition + 50; // Ajusta el valor "20" según el espaciado deseado

    // Dibujar la línea de firma
    doc.line(50, signatureLinePosition, 150, signatureLinePosition); // Ajusta los valores "10" y "200" según la posición y longitud deseadas de la línea

    // Agregar el texto de la firma
    doc.text("Firma:", 100, signatureLinePosition + 10, {align: 'center'}); // Ajusta el valor "10" según el espaciado deseado

    // ...

    doc.autoPrint();

    const hiddFrame = document.createElement('iframe');
    hiddFrame.style.position = 'fixed';
    hiddFrame.style.width = '1px';
    hiddFrame.style.height = '1px';
    hiddFrame.style.opacity = '0.01';
    hiddFrame.src = doc.output('bloburl');
    document.body.appendChild(hiddFrame);
  };

    
  
  const createPDF2 = () => {
    let doc = new jsPDF('p', undefined, 'a4');
    let date = new Date();

    // Array de nombres de meses
    let monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    // Obtener el mes, el día y el año
    let month = monthNames[date.getMonth()]; // getMonth() devuelve un número entre 0 y 11, por lo que puedes usarlo como índice para obtener el nombre del mes
    let day = date.getDate();
    let year = date.getFullYear();
    
    // Formatear la fecha en el formato MES / día / año
    let formattedDate = `${day} de ${month} del ${year}`;
    
    doc.text(formattedDate, 10, 30, { align: 'left' });

doc.text(formattedDate, 10, 30, { align: 'left' });
  
    // Captura el valor de Mov_rev desde el estado
    const motivoRevocacion = Mov_rev;
  
    // Definir el número de líneas por párrafo
    const linesPerParagraph = 1;
  
    // Definir el ancho máximo para el texto
    const maxWidth = 269 ; // El valor puede variar según tus necesidades
    const maxWidth2 = 200 ;
  
    // Texto del párrafo 1
    const paragraph1 = `Con el objeto de cumplir con los lineamientos para la Asignación del Certificado Digital de Firma Electrónica, establecidos por la Secretaría de Finanzas y de Administración a través de la Dirección de Tecnologías de la Información y Telecomunicaciones, solicito a usted la cancelación de dicho Certificado Digital suscrito a favor del Sr.(a) Eduardo Varelas Aldana, con CURP VAAE971005HDGRLD04. 
El motivo que justifica tal solicitud es: ${motivoRevocacion}.`
  
    // Dividir el texto en líneas que encajen en el ancho máximo y luego justificarlas
    let lines = doc.splitTextToSize(paragraph1, maxWidth);
  
    // Dividir las líneas en párrafos
    let paragraphs = [];
    for (let i = 0; i < lines.length; i += linesPerParagraph) {
        paragraphs.push(lines.slice(i, i + linesPerParagraph));
    }
  
    // Imprimir los párrafos
    let yPosition = 50;
    for (let paragraph of paragraphs) {
        doc.setFontSize(12);
        doc.text(paragraph, 10, yPosition, { align: 'justify' });
        yPosition += paragraph.length * 8; // Ajusta el valor "6" según el espaciado deseado
    }
  
    // Agregar el texto del párrafo 2
    const paragraph2 = `Para efectos de la cancelación del Certificado Digital, soy conocedor de que a partir de la hora y fecha en que la Secretaría me informe que la operación quedó confirmada, ya no podré hacer uso de los servicios en los cuales sea requerido el certificado digital en el Sistema Emisor de Firma Electronica, hasta que solicite y active un nuevo certificado digital, conforme a los procesos y lineamientos que la Secretaría determine para tales efectos.`;
  
    // Dividir y justificar el texto del párrafo 2
    lines = doc.splitTextToSize(paragraph2, maxWidth2);
  
    // Dividir las líneas en párrafos
    paragraphs = [];
    for (let i = 0; i < lines.length; i += linesPerParagraph) {
        paragraphs.push(lines.slice(i, i + linesPerParagraph));
    }
  
    // Imprimir los párrafos
    for (let paragraph of paragraphs) {
        doc.setFontSize(12);
        doc.text(paragraph, 10, yPosition, { align: 'justify' });
        yPosition += paragraph.length * 8; // Ajusta el valor "6" según el espaciado deseado
    }
  
      // Calcular la posición de la línea de firma
    let signatureLinePosition = yPosition + 50; // Ajusta el valor "20" según el espaciado deseado

    // Dibujar la línea de firma
    doc.line(50, signatureLinePosition, 150, signatureLinePosition); // Ajusta los valores "10" y "200" según la posición y longitud deseadas de la línea

    // Agregar el texto de la firma
    doc.text("Firma:", 100, signatureLinePosition + 10, {align: 'center'}); // Ajusta el valor "10" según el espaciado deseado

    // ...

    doc.autoPrint();

    const hiddFrame = document.createElement('iframe');
    hiddFrame.style.position = 'fixed';
    hiddFrame.style.width = '1px';
    hiddFrame.style.height = '1px';
    hiddFrame.style.opacity = '0.01';
    hiddFrame.src = doc.output('bloburl');
    document.body.appendChild(hiddFrame);
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
                                  <MenuItem value="Expiración de Vigencia">Expiración de Vigencia</MenuItem>
                                  <MenuItem value="Pérdida robo o inutilización por daños">Pérdida robo o inutilización por daños </MenuItem>
                                  <MenuItem value="Inexactitud de los datos">Inexactitud de los datos</MenuItem>
                                  <MenuItem value="El certificado no cumple con los certificados de la ley">El certificado no cumple con los certificados de la ley</MenuItem>
                                  <Divider textAlign="left">SIN GENERAR  NUEVO CERTIFICADO</Divider>
                                  <MenuItem value="Revocación por mandato de autoridad competente">Revocación por mandato de autoridad competente</MenuItem>{/* Solicita documento justificante */}
                                  <MenuItem value="Solicitud del firmante">Solicitud del firmante</MenuItem>
                                  <MenuItem value="Fallecimiento del firmante">Fallecimiento del firmante</MenuItem>{/* Solicita documento justificante */}
                                  <MenuItem value="Incapacidad superviniente total o parcial">Incapacidad superviniente total o parcial</MenuItem>{/* Solicita documento justificante */}
                              </Select>
                          </FormControl>
                          <Stack direction="row" justifyContent="center" alignItems="stretch" spacing={4} sx={{marginTop: '20px', width: '100%'}}>
                            <Stack direction="column" alignItems="center" sx={{width: '100%'}}>
                              <Typography variant='h6' display="block" gutterBottom >Solicitud de Revocacion</Typography>
                            <TextField sx={{width: '100%'}} disabled value={file1 ? file1.name : ''} />
                            <ButtonGroup variant="text" aria-label=" outlined large button group" style={{justifyContent:'flex-end', marginTop: '20px'}} size="large" fullWidth>
                            <Button fullWidth variant="text" component="label" onClick={createPDF}>
                              Descarga
                            </Button>
                            <Divider orientation="vertical" variant="fullWidth" />
                            <Button variant="text" component="label" onChange={handleFileChange(setFile1)}>
                              Cargar
                              <input hidden accept="*/Pictures/*" multiple type="file" onChange={handleFileChange(setFile2)} />
                            </Button>
                            </ButtonGroup>
                            </Stack>
                            <Stack direction="column" alignItems="center" sx={{width: '100%'}}>
                              <Typography variant='h6' display="block" gutterBottom>Acta de Revocacion</Typography>
                            <TextField fullWidth disabled value={file2 ? file2.name : ''} />
                            <ButtonGroup variant="text" aria-label=" outlined large button group" style={{justifyContent:'flex-end', marginTop: '20px'}} size="large" fullWidth>
                            <Button fullWidth variant="text" component="label" onClick={createPDF2}>
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
                            <TextField sx={{width: '100%'}} disabled value={file3 ? file3.name : ''} />
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