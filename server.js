import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { generate, count } from "random-words";

const app = Express();
const port = 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let randomString = '';

app.use(Express.static('public'));

const randomWordsGenerator = (req, res, next) => {
    randomString = generate({ exactly: 2, join: " " });
    next();
}
app.use(randomWordsGenerator);

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.ejs', { randomString: 'Welcome to the Band Generator👌' });
})

app.post('/submit', (req, res) => {
    res.render(__dirname + '/views/index.ejs', { randomString });
})

app.listen(port, () => {
    console.log(`Server is running on PORT:${port}`);
})