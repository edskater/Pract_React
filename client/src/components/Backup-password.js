import React, { useState } from 'react';
import  {TextField, Button, Container, Box} from '@mui/material'
import Typography from '@mui/material/Typography'

export default function Backuppassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // Logic for password recovery goes here
    };

    return (
      <Container>
        <Box sx={{ height: '74vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center' }}>
          <form onSubmit={handleSubmit} style={{    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
          <Typography variant="h2" gutterBottom>
            RESTABLECE TU CONTRASEÑA
          </Typography>
          <Typography variant="body1" gutterBottom sx={{}}>
            Escribe tu dirección de email  y te enviaremos un email con instrucciones sobre cómo crear una nueva contraseña
          </Typography>
           <TextField
                label="Correo Electronico"
                variant="filled"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{margin: '20px', width: '60%'}}
                
            />
            <Button variant="contained" sx={{backgroundColor: 'black', borderRadius: '21.5px'}} type="submit">
                Recuperar Contraseña
            </Button>
        </form>
        </Box>
      </Container>
        
    );

}

