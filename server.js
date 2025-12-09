const express = require('express');
const timerRoutes = require('./routes/timerRoutes');
const logMiddleware = require('./middlewares/logMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logMiddleware);

// Маршруты
app.use('/api/timers', timerRoutes);

// Тестовый маршрут
app.get('/api/test', (req, res) => {
  res.json({ message: 'Сервер работает!', timestamp: new Date() });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});