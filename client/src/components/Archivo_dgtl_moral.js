import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { Box, Container,  TextField } from '@mui/material';

import Typography from '@mui/material/Typography';
import { defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

function Archivo_dgtl_moral() {

  const [viewPdf, setViewPdf] = useState(null);
  const [pdfFile, SetPDFFile] = useState(null);
  const fileType = ['application/pdf']
  const newplugin = defaultLayoutPlugin()

  const handleFileChange = (e) =>  {
    let selectedFile = e.target.files[0]
    if (selectedFile){
      if (selectedFile && fileType.includes(selectedFile.type)){
        let reader = new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onload = (e) => {
          SetPDFFile(e.target.result)
        }
      }else {
        SetPDFFile(null)
      }
    }
    else{
      console.log("seleciona archivo")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(pdfFile !== null){
      setViewPdf(pdfFile)
    }
    else {
      setViewPdf(null)
    }
  }


return (
  <React.Fragment>
    <Container>
    <Typography sx={{marginBottom: '9px'}} variant='h2' display="flex" gutterBottom>Archivo Digital Moral</Typography>
      <Box sx={{ height: '66vh', display: 'grid', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                      
                      <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={4} sx={{marginTop: '20px', width: 'auto'}}>
                        <Stack direction="row" alignItems="center" sx={{width: 'auto'}} >
                          <Typography variant="h6" sx={{width: '50%'}} gutterBottom >Acta Constitutiva</Typography>
                          <TextField fullWidth disabled sx={{margin: "20px"}} value={pdfFile && pdfFile.name ? pdfFile.name : ''} />
                              <Button variant="text" component="label" type="submit" onSubmit={handleSubmit} >
                              Cargar
                              <input hidden accept="application/pdf" type="file" onChange={handleFileChange}  />
                            </Button>
                        </Stack>
                        <Stack direction="row" alignItems="center" sx={{width: 'auto'}}>
                          <Typography variant="h6" sx={{width: '50%'}} gutterBottom>Registro Federal de Contribuyentes</Typography>
                        <TextField fullWidth disabled sx={{margin: "20px"}}  />
                        <Button variant="text" component="label" type="submit">
                          Cargar
                          <input hidden accept="application/pdf" type="file" onChange={handleFileChange}  />
                        </Button>
                        </Stack>
                        <Stack direction="row" alignItems="center" sx={{width: 'auto'}}>
                          <Typography variant="h6" sx={{width: '50%'}} gutterBottom>Comprobante de Domicilio</Typography>
                        <TextField fullWidth disabled sx={{margin: "20px"}}  />
                        <Button variant="text" component="label" type="submit">
                          Cargar
                          <input hidden accept="application/pdf" type="file" onChange={handleFileChange}  />
                        </Button>
                        </Stack>
                        <Stack direction="row" alignItems="center" sx={{width: 'auto'}}>
                          <Typography variant="h6" sx={{width: '50%'}} gutterBottom>Acta de Registro</Typography>
                        <TextField fullWidth disabled sx={{margin: "20px"}}  />
                        <Button variant="text" component="label" type="submit">
                          Cargar
                          <input hidden accept="application/pdf" type="file" onChange={handleFileChange}  />
                        </Button>
                        </Stack>
                    </Stack>
                    <Stack direction="column" justifyContent="center" alignItems="center" spacing={4} sx={{marginTop: '20px', width: '100%'}}>
                    <div onSubmit={handleSubmit}>
                      <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js'>
                            { viewPdf && <>
                              <Viewer fileUrl={viewPdf} plugins={[newplugin]}/>
                            </>}
                            {!viewPdf && <>No PDF</>}
                      </Worker>
                      </div>
                    </Stack>
                    
      </Box>
    </Container>
</React.Fragment>
  )
}

export default Archivo_dgtl_moral
