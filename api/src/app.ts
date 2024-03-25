import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';
import historyRoutes from './routes/history.route.js';
import searchRoutes from './routes/search.route.js';
const port = 4000;

const app = express();

const corsOptions: CorsOptions = {
	origin: '*',
	methods: 'GET,HEAD,OPTIONS,POST',
	optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/history', historyRoutes);
app.use('/search', searchRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
});

app.listen(port);
