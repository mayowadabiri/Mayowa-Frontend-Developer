import express, { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import appRoutes from './routes';

const app = express();

//  Middleware intializations

express.urlencoded({ extended: false });
app.use(express.json());

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

app.use(appRoutes);

// ExpressJS Error handling
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const defaultMessage =
    "An error occurred, we're already looking into it. Please try again later";
  if (error.response) {
    // an axios error overwrite message so that it can be easier to debug
    error.message = `Request to ${error.response?.config?.baseURL}${error.response?.config?.url} failed with message ${error.response?.data?.error}`;
  }
  res.status(error.status || 500).json({
    message: error.status ? error.message : defaultMessage,
    data: error.data,
  });
});
export default app;
