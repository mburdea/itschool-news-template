export function getFormattedDate(stringDate) {
  const date = new Date(stringDate);

  let month = date.getMonth();
  month = month + 1;

  let day = date.getDate();
  let year = date.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }

  if (month < 10) {
    month = '0' + month;
  }
  
  return `${day}/${month}/${year}`;
}
