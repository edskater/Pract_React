import React from 'react'
import { TextField, MenuItem, FormControl, InputLabel, Box, Container, Grid, Typography, Button, ButtonGroup } from '@mui/material';
import Select from '@mui/material/Select'
import { useState } from 'react';
import { onRegistration } from '../../api/auth';


function Regist_users() {

    var fechaActual = new Date();
        var año = fechaActual.getFullYear();
        var mes = fechaActual.getMonth() + 1; 
        var dia = fechaActual.getDate();
        var hora = fechaActual.getHours();
        var minutos = fechaActual.getMinutes();
        var segundos = fechaActual.getSeconds();
        var fechaFormateada = año + '-' + (mes < 10 ? '0' : '') + mes + '-' + (dia < 10 ? '0' : '') + dia + ' ' + (hora < 10 ? '0' : '') + hora + ':' + (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
        console.log(fechaFormateada);


    const [values, setValues] = useState({
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        email: '',
        password_hash: '',
        estatus: '',
        rol: '',
        created_at: fechaFormateada,
        created_by: 'system'
        // ... otros campos y sus valores iniciales
    });
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        const {value} = e.target
        if (value === "Supervisor" || value === "OPERADOR" || value === "Administrador") {
            setValues({ ...values, 'rol': e.target.value });
        } else if (value === 1) {
            setValues({ ...values, 'estatus': e.target.value });
            } else {
                setValues({ ...values, [e.target.name]: e.target.value });
            }
        }
        
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(values);

        try {
            const {data} = await onRegistration(values)

            setError('')
            setSuccess(data.message)
            setValues({
                nombre: '',
                apellido_paterno: '',
                apellido_materno: '',
                email: '',
                password_hash: '',
                estatus: '',
                rol: ''
            })
            
        } catch (error) {
            console.log(error.response.data.errors[0].msg)
            setError(error.response.data.errors[0].msg)
            setSuccess('')
        }
    }

    return (
        
        <Container >
            <Typography variant="h3" marginBottom={'5px'} gutterBottom fullWidth > Registro Usuarios </Typography>

            <Box sx={{ height: '68vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center', flexGrow: 1, bgcolor: 'background.paper' }}>

                <Grid container spacing={2} marginBottom={'6vh'}>
                    <Grid item xs={4} >
                        <TextField name='nombre' onChange={handleChange} fullWidth label="Nombre(s)" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField name='apellido_paterno' onChange={handleChange} fullWidth label="Primer Apellido" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField name='apellido_materno' onChange={handleChange} fullWidth label="Segundo Apellido" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginBottom={'6vh'}>

                    <Grid item xs={4}>
                        <FormControl fullWidth required>
                            <TextField
                                id="rol"
                                labelId="rol"
                                select
                                label="Rol"
                                onChange={handleChange}
                                sx={{ minWidth: '92px' }}
                                >
                                    {/* Aquí puedes añadir tus opciones */}
                                <MenuItem value={"Supervisor"}>Supervisor</MenuItem>
                                <MenuItem value={"OPERADOR"}>OPERADOR</MenuItem>
                                <MenuItem value={"Administrador"}>Administrador</MenuItem>
                            </TextField>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth required>
                            <TextField
                                id="estatus"
                                labelId="estatus"
                                select
                                label="Estatus"
                                onChange={handleChange}
                                sx={{ minWidth: '92px' }}
                                >
                                    {/* Aquí puedes añadir tus opciones */}
                                <MenuItem value={1}>Activo</MenuItem>
                            </TextField>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField name='email' onChange={handleChange} fullWidth label="Correo Electronico" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginBottom={'6vh'}>

                    <Grid item xs={6}>
                        <TextField name='password_hash' onChange={handleChange} fullWidth label="Contraseña" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Confirma Contraseña" />
                    </Grid>
                </Grid>

                <ButtonGroup variant="text" aria-label=" outlined large button group" style={{ justifyContent: 'flex-end' }} size="large">
                    <Button key="Siguiente" onClick={handleSubmit}>Registrar</Button>
                </ButtonGroup>
            </Box>
        </Container>
    )
}

export default Regist_users
