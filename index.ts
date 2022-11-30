import app from './app'
import run from './config/mongo';

run();

const PORT = 1337 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server connected to server ${PORT}`);
})