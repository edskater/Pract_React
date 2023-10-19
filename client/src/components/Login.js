import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';



function LogIn() {
  return (
    <Box component="form"  sx={{ '& > :not(style)': { m: 1, width: '55ch', marginBottom: "245px" }, backgroundImage: "url(/Durango.catedral.jpg)", backgroundSize: 'cover', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ margin: "8px", width: "54ch", marginBottom: "100px", borderRadius: "43px", height: "auto", width: '54ch' , minWidth: 275, backgroundColor: 'rgba(255, 255, 255, 0.8)', display: "flex", alignContent: "center", alignItems: "center", flexDirection: "column" }}>
        <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography sx={{ fontSize: 34, marginBottom: '50px'}} color="text.secondary" gutterBottom>
            Iniciar Sesión
          </Typography>
          <TextField sx={{ width: "69ch", marginBottom: "50px", borderRadius: '22px'}} id="username" label="Nombre de usuario" variant="outlined" />
          <TextField sx={{ width: "69ch", marginBottom: "50px", borderRadius: '22px'}} id="password" label="Contraseña" type="password" variant="outlined" />
        </CardContent>
        <Link href="/home" underline="hover" style={{color: "black", marginBottom: '20px'}}>
            {'Recuperar Contraseña'}
        </Link>
        <CardActions>
          <Button  variant="contained" size="large" sx={{borderRadius: '29px', backgroundColor: 'rgba(12, 244, 38, 0.5)', marginBottom: '20px'}}>Iniciar sesión</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default LogIn;
