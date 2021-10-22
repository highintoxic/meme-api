import {Application, Response, Request} from 'express';
import path from 'path';

import drake from './drake';
export default class Routes {
    public routes(app: Application): void {
        app.route('/_status')
            .get((_req: Request, res: Response) => {
                res.status(200).send('Healthy!!!');
            });
        app.route('/')
            .get((_req: Request, res: Response) => {
                res.status(200).sendFile(path.join(__dirname, '..', '/assets/endpoints.json'));
            });

        app.use('/drake', drake);
    }
}