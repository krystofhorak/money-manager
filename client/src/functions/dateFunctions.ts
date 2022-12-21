export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const datePart = `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
  const timePart = `${date.getHours()}:${date.getMinutes()}`;
  return `${datePart} ${timePart}`;
};
