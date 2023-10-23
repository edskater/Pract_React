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

/* const HomeOperadorSupervisor = (
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
      <Button size="small">Share</Button>
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
    <Button size="small">Share</Button>
  </CardActions>
</Card>
      </Box>
  </Container>
  
</React.Fragment>
); */

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
      <Button size="small">Share</Button>
    </CardActions>
  </Card>

  <Card sx={{ bgcolor: 'unset',borderRadius: 'unset', boxShadow: 'unset', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <CardMedia>
      <img  alt= 'Consulta de Registro' src="../RecursosgrfSGFE/Search-icon@1x.png"/>
    </CardMedia>
  <CardContent>
    <Typography  variant="h3" component="div">
    Domicilios
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
  </CardActions>
</Card>

<Card sx={{ bgcolor: 'unset',borderRadius: 'unset', boxShadow: 'unset', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <CardMedia>
      <img  alt= 'Consulta de Registro' src="../RecursosgrfSGFE/Search-icon@1x.png"/>
    </CardMedia>
  <CardContent>
    <Typography  variant="h3" component="div">
    Reportes
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
  </CardActions>
</Card>
      </Box>
  </Container>
  
</React.Fragment>
);


export default function HOME(){
  return(

    
  );
}
