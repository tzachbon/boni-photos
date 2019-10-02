import { RequestHandler } from 'express';


export const headersController: RequestHandler = (req, res, next) => {
  // res.setHeader('Content-Type', 'application/json, text/html, application/javascript');
  // res.setHeader('Content-Type', 'text/html');

  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // res.setHeader('Accept', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  // if (process.env.PORT) {
  //   console.log('Access-Control-Allow-Origin');
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  // }



  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Accept', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  next();
};
