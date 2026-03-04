import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API Ferrelectricos Rivera activa',
    docs: '/api/company',
  });
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'backend', timestamp: new Date().toISOString() });
});

app.get('/api/company', (req, res) => {
  res.json({
    name: 'Ferrelectricos Rivera',
    slogan: 'Herramientas y materiales para tu hogar y obra',
    phone: '+57 300 000 0000',
    whatsapp: '+57 300 000 0000',
    email: 'contacto@ferrelectricosrivera.com',
    address: 'Bogota, Colombia',
    schedule: {
      mondayToFriday: '8:00 a.m. - 6:00 p.m.',
      saturday: '8:00 a.m. - 2:00 p.m.',
      sunday: 'Cerrado',
    },
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }

  return res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
