import express from 'express';
import { getCapuslesQuery } from '../controller';

const routes = express.Router();

routes.post('/capsules/query', getCapuslesQuery);

export default routes;
