

export const responseHelper = <T>(body: T, isValid = true): any => {
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
