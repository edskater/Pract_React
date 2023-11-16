     # Establecer la imagen base
     FROM node:14-alpine
     
     # Establecer el directorio de trabajo dentro del contenedor
     WORKDIR /app
     
     # Copiar los archivos de la aplicación al contenedor
     COPY . .
     
     # Instalar las dependencias del servidor
     RUN npm install
     
     # Instalar las dependencias del cliente y construir la aplicación
     RUN cd client && npm install && npm start
     
     # Exponer el puerto en el que se ejecutará la aplicación
     EXPOSE 5000
     
     # Comando para ejecutar la aplicación
     CMD ["npm", "start"]
