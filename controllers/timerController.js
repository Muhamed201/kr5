let timers = [];
let nextId = 1;

exports.createTimer = (req, res) => {
  const { title, seconds } = req.body;
  if (!title || !seconds) {
    return res.status(400).json({ error: 'Не указаны заголовок или время' });
  }

  const timer = {
    id: nextId++,
    title,
    seconds: parseInt(seconds),
    createdAt: new Date(),
    isActive: true,
  };
  timers.push(timer);
  res.status(201).json(timer);
};

exports.getTimers = (req, res) => {
  res.json(timers);
};

exports.getTimerById = (req, res) => {
  const id = parseInt(req.params.id);
  const timer = timers.find(t => t.id === id);
  if (!timer) return res.status(404).json({ error: 'Таймер не найден' });
  res.json(timer);
};

exports.deleteTimer = (req, res) => {
  const id = parseInt(req.params.id);
  const index = timers.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Таймер не найден' });
  timers.splice(index, 1);
  res.json({ message: 'Таймер удалён' });
};