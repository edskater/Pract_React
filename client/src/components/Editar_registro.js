import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardContent, Divider, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


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

export default function Editar_Regist() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
    sx={{ height: '74vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center', flexGrow: 1, bgcolor: 'background.paper'}}    >
      <Card>
        <CardContent sx={{display: 'flex'}}>
        <Tabs
        
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Datos Generales" {...a11yProps(0)} />
        <Tab label="Domicilio" {...a11yProps(1)} />
        <Tab label="Documentacion" {...a11yProps(2)} />
        <Tab label="Biometricos" {...a11yProps(3)} />
      </Tabs>
      <TabPanel  value={value} index={0}>
      <Grid container sx={{display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'repeat(3, 1fr)'}}>
                  <Grid item sx={{gridArea: '1 / 1 / 2 / 3'}} >
                  <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Stack sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant='h6'>Nombre Completo</Typography>
                      <TextField id="standard-basic" label="nombre del usuario" variant="standard" />
                    </Stack>
                    <Stack sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant='h6'>Fecha de Nacimento</Typography>
                      <TextField id="standard-basic" label="Fecha de Nacimento" variant="standard" />
                    </Stack>
                    <Stack sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant='h6'>Sexo</Typography>
                      <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Stack>
                  </Stack>
                  </Grid>
                  <Grid item sx={{gridArea: '2 / 1 / 3 / 3'}}>
                    <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                      <Stack sx={{display: 'flex', flexDirection: 'column', marginRight: '12px'}}>
                        <Typography variant='h6'>Ocupacion</Typography>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                      </Stack>
                      <Stack sx={{display: 'flex', flexDirection: 'column', marginRight: '12px'}}>
                        <Typography variant='h6'>Estado de nacimiento</Typography>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                      </Stack>
                      <Stack sx={{display: 'flex', flexDirection: 'column', marginRight: '12px'}}>
                        <Typography variant='h6'>Correo Electronico</Typography>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                      </Stack>
                      <Stack sx={{display: 'flex', flexDirection: 'column', marginRight: '12px'}}>
                        <Typography variant='h6'>Telefono</Typography>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                      </Stack>                      
                    </Stack>
                  
                  </Grid>
                  <Grid item sx={{gridArea: '3 / 1 / 4 / 3'}}>
                  <Divider textAlign="center">CONTACTO DE EMERGENCIA</Divider>
                  <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Stack sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant='h6'>Nombre Completo</Typography>
                      <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Stack>
                    <Stack sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant='h6'>Telefono</Typography>
                      <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Stack>
                  </Stack>
                  </Grid>   
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container sx={{display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'repeat(3, 1fr)'}}>
                  <Grid item sx={{gridArea: '1 / 1 / 2 / 3'}} >
                  <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Stack sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant='h6'>Nombre Completo</Typography>
                      <TextField id="standard-basic" label="nombre del usuario" variant="standard" />
                    </Stack>
                    <Stack sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant='h6'>Fecha de Nacimento</Typography>
                      <TextField id="standard-basic" label="Fecha de Nacimento" variant="standard" />
                    </Stack>
                    <Stack sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant='h6'>Sexo</Typography>
                      <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Stack>
                  </Stack>
                  </Grid>
                  <Grid item sx={{gridArea: '2 / 1 / 3 / 3'}}>
                    <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                      <Stack sx={{display: 'flex', flexDirection: 'column', marginRight: '12px'}}>
                        <Typography variant='h6'>Ocupacion</Typography>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                      </Stack>
                      <Stack sx={{display: 'flex', flexDirection: 'column', marginRight: '12px'}}>
                        <Typography variant='h6'>Estado de nacimiento</Typography>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                      </Stack>
                      <Stack sx={{display: 'flex', flexDirection: 'column', marginRight: '12px'}}>
                        <Typography variant='h6'>Correo Electronico</Typography>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                      </Stack>
                      <Stack sx={{display: 'flex', flexDirection: 'column', marginRight: '12px'}}>
                        <Typography variant='h6'>Telefono</Typography>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                      </Stack>                      
                    </Stack>
                  
                  </Grid>
                  <Grid item sx={{gridArea: '3 / 1 / 4 / 3'}}>
                  <Divider textAlign="center">CONTACTO DE EMERGENCIA</Divider>
                  <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Stack sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant='h6'>Nombre Completo</Typography>
                      <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Stack>
                    <Stack sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant='h6'>Telefono</Typography>
                      <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Stack>
                  </Stack>
                  </Grid>   
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Documentacion
      </TabPanel>
      <TabPanel value={value} index={3}>
        Biometricos
      </TabPanel>
        </CardContent>
      </Card>

    </Box>
  );
}