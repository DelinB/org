import express from 'express';
import cors from 'cors';
import { errorMiddleware } from '../../../packages/error-handler/error-midleware';

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Auth API LIVE - Fixed Port!' });
});

app.use(errorMiddleware);

// ✅ FIXED PORT LOGIC
const port = Number(process.env.PORT) || 6001;
app.listen(port, () => {
  console.log(`Auth service LIVE on http://localhost:${port}`);
});
