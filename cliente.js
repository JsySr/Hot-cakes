const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Configurar el transporter de Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.tecnm.mx', // Configura el host SMTP adecuado
    port: 587, // Puerto SMTP
    secure: false, // false para conexiones TLS
    auth: {
        user: 'l20200881@pachuca.tecnm.mx', // Correo electrónico de autenticación
        pass: '123456789' // Contraseña de autenticación
    }
});

// Ruta para enviar correos
app.post('/enviar-correo', async (req, res) => {
    const { correo, contenido } = req.body;

    try {
        const info = await transporter.sendMail({
            from: 'l20200881@pachuca.tecnm.mx',
            to: correo,
            subject: 'Factura de Compra',
            text: contenido
        });
        res.status(200).send('Correo enviado');
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).send('Error al enviar el correo');
    }
});

// Ruta para descargar clientes
app.get('/descargar-clientes', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'clientes.csv'); // Asegúrate de tener un archivo 'clientes.csv' en la carpeta 'public'
    res.download(filePath, 'clientes.csv', (err) => {
        if (err) {
            console.error('Error al descargar el archivo:', err);
            res.status(500).send('Error al descargar el archivo');
        }
    });
});

// Ruta para descargar proveedores
app.get('/descargar-proveedores', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'proveedores.csv'); // Asegúrate de tener un archivo 'proveedores.csv' en la carpeta 'public'
    res.download(filePath, 'proveedores.csv', (err) => {
        if (err) {
            console.error('Error al descargar el archivo:', err);
            res.status(500).send('Error al descargar el archivo');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
