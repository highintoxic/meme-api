import {Request, Response} from 'express';
import {Canvas, resolveImage} from 'canvas-constructor/cairo';
import canvas from 'canvas';
import path from 'path';
import stringNewLine from '../utils/stringNewLine';

class Drake {
    public static async drake(req: Request, res: Response): Promise<void> {
        if(!req.query){
            res.status(406).send('You need to specify nah and this text.');
        }
        if((req.query.nah?.length as number || req.query.this?.length as number) > 34){
            res.status(406).send('The character length must not exceed 34.');
        }

        const image = await resolveImage(path.join(__dirname, '..', '/assets/Drake-Hotline-Bling.jpg'));
        canvas.registerFont(path.join(__dirname, '..', 'assets', 'SourceSansPro-Regular.ttf'), {family: 'sans-serif'});
        const meme = new Canvas(image.width, image.height)
            .printImage(image,0,0)
            .setTextFont('65px Source Sans Pro')
            .printText(stringNewLine(req.query.nah as string, 17), 640, 295)
            .printText(stringNewLine(req.query.this as string, 17), 640, 875)
            .toBuffer();

        res.set({'Content-Type': 'image/png'});
        res.send(meme);

    }

    
}

export default Drake.drake;