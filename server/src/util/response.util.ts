
import { IResponse } from '../../models/response.interface';

export const responseHelper = <T>(body: T, isValid = true): IResponse<T> => {
  if (!isValid) {
    console.log('====================================');
    console.log('ERROR::', body);
    console.log('====================================');
  }

  return {
    isValid,
    body
  };
}
