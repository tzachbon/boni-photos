import { RequestHandler } from 'express';


export const healthCheckController: RequestHandler = async (req, res, next) => {
  console.log('====================================');
  console.log('Someone did health check!');
  console.log('====================================');
  res.send('We are good to go!');
};
