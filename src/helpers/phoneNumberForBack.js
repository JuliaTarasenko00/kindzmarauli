export const phoneNumberForBack = (tel) => {
  const cleanedNumber = tel.replace(/\D/g, '');
  const numberClean = cleanedNumber.split('').splice(2).join('');

  return { numberClean };
};
