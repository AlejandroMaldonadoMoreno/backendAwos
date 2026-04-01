const express = require('express');
const cors = require('cors');
const productoRoutes = require('./routes/productoRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend de la tienda funcionando correctamente');
});

app.use('/api/productos', productoRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});