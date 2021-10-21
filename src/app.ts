import express, { Application, Request, Response, NextFunction } from 'express';
import Routes from './routes/index.js';

class App {
	public app: Application;
	public route: Routes = new Routes();
	constructor() {
		this.app = express();
		this.config;
		this.route.routes(this.app);
	}

	private config(): void {
		express.json();
		this.app.use((_req: Request, res: Response, next: NextFunction) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET');
			res.header('Access-Control-Allow-Headers', '*');
			next();
		});
	}
}

export default new App().app;
