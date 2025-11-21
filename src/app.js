const express = require('express');
const cors = require('cors');
const app = express();
const itemRoutes = require('./routes/item.routes.js');

app.use(cors()); // <-- ¡Muy importante!
app.use(express.json());

app.use('/api/items', itemRoutes);

app.get('/api/jimenez', (req, res) => {
  res.json({ nombre_completo: "Diego Jiménez Pérez" });
});

app.listen(5000, () => console.log('🚀 Servidor corriendo en http://localhost:5000'));
