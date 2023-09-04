import { RequestHandler } from 'express';
import * as CapsuleService from '../service';

export const getCapuslesQuery: RequestHandler = async (req, res, next) => {
  try {
    const capsules = await CapsuleService.getCapusleQuery(req.body);
    res.status(200).json({ data: capsules });
  } catch (error) {
    next(error);
  }
};
