import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';



function BasicCard() {
  return (
    <Box component="form"  sx={{ '& > :not(style)': { m: 1, width: '69ch' }, backgroundImage: "url(/Durango.catedral.jpg)", backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{  width: '69ch' , minWidth: 275, backgroundColor: 'rgba(255, 255, 255, 0.8)', display: "flex", alignContent: "center", alignItems: "center", flexDirection: "column" }}>
        <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography sx={{ fontSize: 34 }} color="text.secondary" gutterBottom>
            Iniciar Sesión
          </Typography>
          <TextField sx={{ width: "69ch", marginBottom: "50px"}} id="username" label="Nombre de usuario" variant="outlined" />
          <TextField sx={{ width: "69ch", marginBottom: "50px"}} id="password" label="Contraseña" type="password" variant="outlined" />
        </CardContent>
        <CardActions>
          <Button  variant="contained" size="large">Iniciar sesión</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default BasicCard;
