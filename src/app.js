import express from 'express';
import routes from './routes';

class App {
  constructor() { //classe carregada 
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server; //Estância de App e método disponível