import express, { Request, Response, NextFunction } from 'express';
import historyRoutes from './routes/history.route.js';
import searchRoutes from './routes/search.route.js';

const app = express();
const port = 4000;

app.use('/history', historyRoutes);
app.use('/search', searchRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
});

app.listen(port);
