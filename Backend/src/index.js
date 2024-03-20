import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Importar routes
import handlerTest from './routes/test.routes.js'
import handlerUser from './routes/user.routes.js'
import handler404 from './routes/404.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: '*',
}));
app.use(morgan('dev'));

// Routes
app.use("/test", handlerTest);
app.use("/user", handlerUser);
app.use(handler404);

// Starting the server
app.listen(4000, () => {
  console.log('Server on port', 4000);
});