export const formatPhoneNumber = (phoneNumber) => {
  const phone = ('' + phoneNumber).replace(/\D/g, '');
  if (!phone) return;
  const mask = phone.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (mask) {
    return '+38(' + mask[1] + ')' + mask[2] + '-' + mask[3] + '-' + mask[4];
  }
  return phoneNumber;
};
