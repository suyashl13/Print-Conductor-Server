import express, { Express, Request, Response } from 'express'

const app: Express = express();


app.get('/', (req: Request, res: Response) => {
    res.json({'success': true});
})

app.listen(3330, ()=>{
    console.log("Server Started...");
})