import { useNavigate  } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardContent, Container,  Stack, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {IconButton} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export default function Editar_registro_moral() {
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [editClicked, setEditClicked] = useState(false);
  const [isFormEnabled, setIsFormEnabled] = useState(false);
 
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
    setEditClicked(false);
   };
   

  const handleClickOpen = () => {
    setOpen(!isFormEnabled);
    setEditClicked(!isFormEnabled); // Actualiza la variable de estado cuando se hace clic en el botón "Editar"
    setIsFormEnabled(!isFormEnabled);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    handleClose();
    navigate('/Revocacion');
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Typography sx={{marginBottom: '9px'}} variant='h2' display="flex" gutterBottom>Editar Registro Persona Moral</Typography>
      <Box sx={{ height: '66vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center', flexGrow: 1, bgcolor: 'background.paper'}}    >
      <Card>
        <CardContent sx={{display: 'flex', alignItems: 'center'}}>
        <Tabs
        
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Datos Generales" {...a11yProps(0)} />

        <Tab label="Documentacion" {...a11yProps(1)} />

      </Tabs>
      <TabPanel  value={value} index={0}>
      <Grid container sx={{display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'repeat(3, 1fr)'}}>
                  <Grid item sx={{gridArea: '1 / 1 / 2 / 3'}} >
                  <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Stack sx={{display: 'flex', flexDirection: 'column', marginRight:'20px', marginBottom:'20px'}}>
                      <Typography variant='h6'>Razon Social</Typography>
                      <TextField id="standard-basic" disabled label="nombre del usuario" variant="standard" />
                    </Stack>
                    <Stack sx={{display: 'flex', flexDirection: 'column' , marginRight:'20px', marginBottom:'20px'}}>
                      <Typography variant='h6'>RFC</Typography>
                      <TextField id="standard-basic" disabled label="Fecha de Nacimento" variant="standard" />
                    </Stack>
                    <Stack sx={{display: 'flex', flexDirection: 'column' , marginRight:'20px', marginBottom:'20px'}}>
                      <Typography variant='h6'>Correo</Typography>
                      <TextField id="standard-basic"  disabled label="Standard" variant="standard" />
                    </Stack>
                  </Stack>
                  </Grid>
                  <Grid item sx={{gridArea: '2 / 1 / 3 / 3'}}>
                    <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Stack sx={{display: 'flex', flexDirection: 'column' , marginRight:'20px' , marginBottom:'20px'}}>
                        <Typography variant='h6'>Pais</Typography>
                        <TextField id="standard-basic" disabled label="Standard" variant="standard" />
                      </Stack>
                      <Stack sx={{display: 'flex', flexDirection: 'column' , marginRight:'20px' , marginBottom:'20px'}}>
                        <Typography variant='h6'>Codigo Postal (CP)</Typography>
                        <TextField id="standard-basic" disabled label="Standard" variant="standard" />
                      </Stack>
                      <Stack sx={{display: 'flex', flexDirection: 'column', marginRight:'20px' , marginBottom:'20px'}}>
                        <Typography variant='h6'>Estado</Typography>
                        <TextField id="standard-basic" disabled label="Standard" variant="standard" />
                      </Stack>
                      <Stack sx={{display: 'flex', flexDirection: 'column', marginRight:'20px' , marginBottom:'20px'}}>
                        <Typography variant='h6'>Municipio</Typography>
                        <TextField id="standard-basic" disabled label="Standard" variant="standard" />
                      </Stack>                      
                    </Stack>
                  </Grid>
                  <Grid item sx={{gridArea: '3 / 1 / 4 / 3'}}>
                  <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  <Stack sx={{display: 'flex', flexDirection: 'column', marginRight:'20px', marginBottom:'20px'}}>
                        <Typography variant='h6'>Colonia</Typography>
                        <TextField id="standard-basic" disabled label="Standard" variant="standard" />
                      </Stack>
                    <Stack sx={{display: 'flex', flexDirection: 'column', marginRight:'20px', marginBottom:'20px'}}>
                      <Typography variant='h6'>Calle</Typography>
                      <TextField id="standard-basic"  disabled label="Standard" variant="standard" />
                    </Stack>
                    <Stack sx={{display: 'flex', flexDirection: 'column', marginRight:'20px', marginBottom:'20px'}}>
                      <Typography variant='h6'>Numero Exterior</Typography>
                      <TextField  disabled label="Telefono" variant="standard" />
                    </Stack>
                  </Stack>
                  </Grid>   
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack display="flex" flexDirection="row">
          <Typography  sx={{width: '100%', display:'flex', alignItems:'center'}} variant='body1'>
            CURP
          </Typography>
          <TextField id="outlined-basic" disabled label="Outlined" variant="outlined" fullWidth sx={{marginRight: '20px'}} />
          <input type="file" style={{ display: 'none' }} id="fileUpload" onChange={handleFileUpload} />
          <IconButton disabled={!isFormEnabled} onClick={() => document.getElementById('fileUpload').click()}>
          <FileUploadIcon />
          </IconButton>
        </Stack>
        <Stack display="flex" flexDirection="row">
          <Typography sx={{width: '100%', display:'flex', alignItems:'center'}} variant='body1'>
            Documento Aprovatorio de Nacionalidad
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth sx={{marginRight: '20px'}} />
          <input type="file" style={{ display: 'none' }} id="fileUpload" onChange={handleFileUpload} />
          <IconButton disabled={!isFormEnabled} onClick={() => document.getElementById('fileUpload').click()}>
          <FileUploadIcon />
          </IconButton>
        </Stack>
        <Stack display="flex" flexDirection="row">
          <Typography sx={{width: '100%', display:'flex', alignItems:'center'}} variant='body1'>
            Acta de Registro
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth sx={{marginRight: '20px'}} />
          <input type="file" style={{ display: 'none' }} id="fileUpload" onChange={handleFileUpload} />
          <IconButton disabled={!isFormEnabled} onClick={() => document.getElementById('fileUpload').click()}>
          <FileUploadIcon />
          </IconButton>
        </Stack>
        <Stack display="flex" flexDirection="row">
          <Typography sx={{width: '100%', display:'flex', alignItems:'center'}} variant='body1'>
          Identificacion Oficial
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth sx={{marginRight: '20px'}}  />
          <input type="file" style={{ display: 'none' }} id="fileUpload" onChange={handleFileUpload} />
          <IconButton disabled={!isFormEnabled} onClick={() => document.getElementById('fileUpload').click()}>
          <FileUploadIcon />
          </IconButton>
        </Stack>
        <Stack display="flex" flexDirection="row">
          <Typography sx={{width: '100%', display:'flex', alignItems:'center'}} variant='body1'>
          Comprobante de Domicilio
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth sx={{marginRight: '20px'}}  />
          <input type="file" style={{ display: 'none' }} id="fileUpload" onChange={handleFileUpload} />
          <IconButton disabled={!isFormEnabled} onClick={() => document.getElementById('fileUpload').click()}>
          <FileUploadIcon />
          </IconButton>
        </Stack>
      
      </TabPanel>
      
      {open && (editClicked && (value === 0)) &&(
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Advertencia"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Para editar los siguientes datos en necesario iniciar un porceso de Revocacion
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cerrar</Button>
            <Button onClick={handleAgree} autoFocus>
              Inicar Proceso de Revocacion
            </Button>
          </DialogActions>
        </Dialog>
      )}
        </CardContent>
        <Stack sx={{ display: 'flex', flexDirection:'row'  }}>
          <Button sx={{width:'50%'}} variant="contained" size='large'  color="primary" onClick={handleClickOpen}>
            Editar 
          </Button>
          <Button sx={{width:'50%'}} variant="contained" size='large'  color="success" onClick={handleClickOpen}>
            Guardar
          </Button>
        </Stack>
        
      </Card>
    </Box>
    </Container>
    
  );
}