import express from 'express';
import type { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express!');
});

const PORT: number = parseInt(process.env.PORT!);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});