export default async function handler(req, res) {
  const apiUrl = 'https://www.freetogame.com/api/games?sort-by=popularity';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
}
