import { RequestHandler } from 'express';
import { counter } from '../app';
import { responseHelper } from '../util/response.util';

export const
  UserController: RequestHandler = async (req, res, next) => {
    try {
      const user = await counter.getUsersData();
      res.status(201).json(responseHelper(user));

    } catch (error) {
      res.status(500).json(
        responseHelper({
          error
        }, false)
      );
    }
  }
