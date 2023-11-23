import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import React, { useRef, useEffect, useState } from 'react';

const Datos_biometricos = () => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
 
  useEffect(() => {
   navigator.mediaDevices.getUserMedia({ video: true })
     .then(stream => {
       let video = videoRef.current;
       video.srcObject = stream;
       video.play();
     })
     .catch(err => console.log(err));
  }, []);
 
  const capture = () => {
   let canvas = canvasRef.current;
   let video = videoRef.current;
   canvas.getContext('2d').drawImage(video, 0, 0, 300, 300);
   let image = canvas.toDataURL('image/png');
   setImage(image);
  };
 
  const download = () => {
   let link = document.createElement('a');
   link.download = 'image.png';
   link.href = image;
   link.click();
  };
 
  return (
   <Container sx={{display: 'flex', flexDirection:'column', alignItems:'center'}} >
     <Typography sx={{marginBottom: '9px'}} variant='h2' display="flex" gutterBottom>Datos Biometricos</Typography>
     <Box sx={{ height: '624px', display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'nowrap', flexGrow: 1, bgcolor: 'background.paper'}}>
     <Container maxWidth="sm">
       <video ref={videoRef} width="300" height="300" autoPlay />
     </Container>
     <Container maxWidth="sm">
     <canvas ref={canvasRef} width="300" height="300" style={{ display: 'none' }} />
       {image && <img src={image} alt="Captured" />}
     </Container>
       <ButtonGroup>
        <Button onClick={capture} variant="contained">Capturar</Button>
        <Button onClick={download} variant="contained">Descargar</Button>
     </ButtonGroup>
     </Box>


   </Container>
  );
 };

export default Datos_biometricos;




