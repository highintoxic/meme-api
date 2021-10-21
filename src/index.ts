import app from './app.js';

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`API is up and running on port ${port}`));