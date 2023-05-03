import app from "./app.js";
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();
const port = 4444;

app.listen(process.env.PORT, () => {
  console.log(chalk.bgGreenBright.black(`Servidor rodando: http://localhost:${process.env.PORT}`));
}); 