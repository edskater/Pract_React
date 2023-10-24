import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useState } from 'react';


 const HomeOperadorSupervisor = (
  <React.Fragment>
  <CssBaseline />
  <Container>
    <Box sx={{ height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center' }}>
      <Card sx={{ bgcolor: 'unset', borderRadius: 'unset', boxShadow: 'unset', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
    <CardMedia>
      <img  alt= 'Consulta de Registro' src="../RecursosgrfSGFE/address-card-solid@1x.png"/>
    </CardMedia>
    <CardContent>
      <Typography  variant="h3" component="div">
      Registro Nuevo
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" size="large" sx={{backgroundColor: 'black', borderRadius: '21.5px'}}>Iniciar Registro</Button>
    </CardActions>
  </Card>

  <Card sx={{ bgcolor: 'unset',borderRadius: 'unset', boxShadow: 'unset', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <CardMedia>
      <img  alt= 'Consulta de Registro' src="../RecursosgrfSGFE/Search-icon@1x.png"/>
    </CardMedia>
  <CardContent>
    <Typography  variant="h3" component="div">
    Consulta Registro
    </Typography>
  </CardContent>
  <CardActions>
    <Button variant="contained" size="large" sx={{backgroundColor: 'black', borderRadius: '21.5px'}}>Buscar</Button>
  </CardActions>
</Card>
      </Box>
  </Container>
  
</React.Fragment>
); 

const HomeAdmin = (
  <React.Fragment>
  <CssBaseline />
  <Container>
    <Box sx={{ height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center' }}>
      <Card sx={{ bgcolor: 'unset', borderRadius: 'unset', boxShadow: 'unset', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
    <CardMedia>
      <img  alt= 'Consulta de Registro' src="../RecursosgrfSGFE/address-card-solid@1x.png"/>
    </CardMedia>
    <CardContent>
      <Typography  variant="h3" component="div">
      Usuarios
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" size="large" sx={{backgroundColor: 'black', borderRadius: '21.5px'}}>Usuarios</Button>
    </CardActions>
  </Card>

  <Card sx={{ bgcolor: 'unset',borderRadius: 'unset', boxShadow: 'unset', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <CardMedia>
      <img  alt= 'Consulta de Registro' src="../RecursosgrfSGFE/Location filled icon@1x.png"/>
    </CardMedia>
  <CardContent>
    <Typography  variant="h3" component="div" sx={{ marginTop: '10px'}}>
    Domicilios
    </Typography>
  </CardContent>
  <CardActions>
    <Button variant="contained" size="large" sx={{backgroundColor: 'black', borderRadius: '21.5px'}}>Domicilios</Button>
  </CardActions>
</Card>

<Card sx={{ bgcolor: 'unset',borderRadius: 'unset', boxShadow: 'unset', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <CardMedia>
      <img  alt= 'Consulta de Registro' src="../RecursosgrfSGFE/chart-line-solid@1x.png"/>
    </CardMedia>
  <CardContent>
    <Typography  variant="h3" component="div">
    Reportes
    </Typography>
  </CardContent>
  <CardActions>
    <Button variant="contained" size="large" sx={{backgroundColor: 'black', borderRadius: '21.5px'}}>Reportes</Button>
  </CardActions>
</Card>
      </Box>
  </Container>
  
</React.Fragment>
);

// eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
/* const [userRole, setUserRole] = useState('admin'); */

export default function HOME(){
  return(
   <><div> {/* {userRole === 'admin' ? HomeAdmin : HomeOperadorSupervisor} */} </div><React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center' }}>
          <Card sx={{ bgcolor: 'unset', borderRadius: 'unset', boxShadow: 'unset', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia>
              <img alt='Consulta de Registro' src="../RecursosgrfSGFE/address-card-solid@1x.png" />
            </CardMedia>
            <CardContent>
              <Typography variant="h3" component="div">
                Usuarios
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="large" sx={{ backgroundColor: 'black', borderRadius: '21.5px' }}>Usuarios</Button>
            </CardActions>
          </Card>

          <Card sx={{ bgcolor: 'unset', borderRadius: 'unset', boxShadow: 'unset', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia>
              <img alt='Consulta de Registro' src="../RecursosgrfSGFE/Location filled icon@1x.png" />
            </CardMedia>
            <CardContent>
              <Typography variant="h3" component="div" sx={{ marginTop: '10px' }}>
                Domicilios
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="large" sx={{ backgroundColor: 'black', borderRadius: '21.5px' }}>Domicilios</Button>
            </CardActions>
          </Card>

          <Card sx={{ bgcolor: 'unset', borderRadius: 'unset', boxShadow: 'unset', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia>
              <img alt='Consulta de Registro' src="../RecursosgrfSGFE/chart-line-solid@1x.png" />
            </CardMedia>
            <CardContent>
              <Typography variant="h3" component="div">
                Reportes
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="large" sx={{ backgroundColor: 'black', borderRadius: '21.5px' }}>Reportes</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>

    </React.Fragment></>

  )
}
