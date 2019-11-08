import { Response, Request } from 'express';

export const setHeaders = (request: Request, response: Response) => {
  response.set('Access-Control-Allow-Origin', '*');
  response.set('Access-Control-Allow-Credentials', 'true'); // vital
  if (request.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    response.set('Access-Control-Allow-Methods', 'GET');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    response.set('Access-Control-Max-Age', '3600');
  }
}
