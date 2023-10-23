import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../redux/slices/authSlice';
import { useState } from 'react';
 

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(false)

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      await Login(values)
      dispatch(authenticateUser())

      localStorage.setItem('isAuth', 'true')
    } catch (error) {
      console.log(error.response.data.errors[0].msg)
      setError(error.response.data.errors[0].msg)
    }
  }


  return (
    <Box component="form"  sx={{ '& > :not(style)': { m: 1, width: '55ch', marginBottom: "245px" }, backgroundImage: "url(/Durango.catedral.jpg)", backgroundSize: 'cover', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ margin: "8px", marginBottom: "100px", borderRadius: "43px", height: "auto", width: '54ch' , minWidth: 275, backgroundColor: 'rgba(255, 255, 255, 0.8)', display: "flex", alignContent: "center", alignItems: "center", flexDirection: "column" }}>
        <CardContent onSubmit={(e) => onSubmit(e)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography sx={{ fontSize: 34, marginBottom: '50px'}} color="text.secondary" gutterBottom>
            Iniciar Sesión
          </Typography>
          <TextField sx={{ width: "50ch", marginBottom: "50px", borderRadius: '22px'}} onChange={(e) => onChange(e)} value={values.email} id="username" label="Nombre de usuario" variant="outlined" />
          <TextField sx={{ width: "50ch", marginBottom: "50px", borderRadius: '22px'}}  onChange={(e) => onChange(e)} value={values.password} id="password" label="Contraseña" type="password" variant="outlined" />
        </CardContent>
        <Link href="/home" underline="hover" style={{color: "black", marginBottom: '20px'}}>
            {'Recuperar Contraseña'}
        </Link>
        <CardActions>
          <Button  variant="contained" size="large" type='submit' sx={{borderRadius: '29px', backgroundColor: 'rgba(12, 244, 38, 0.5)', marginBottom: '20px'}}>Iniciar sesión</Button>
        </CardActions>
      </Card>
    </Box>

    
    
  );
}


export default Login
