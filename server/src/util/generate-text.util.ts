export const generateText = (userData: any) => {
  const stringDate = new Date().toString();
  return `
  היי, נכון לעכשיו ${stringDate},
  יוזר נכנס ולשלח הודעה דרך האתר. תוכן ההדועה:

  שם: ${userData.fullName}
  נייד: ${userData.phone}
  אימייל: ${userData.email}

  תוכן ההודעה:
  ${userData.message}
 `
}
