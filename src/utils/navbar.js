const date = () => {
  return new Date()
}

let hour = date().getHours();

let minute =
  date().getMinutes() < 10
    ? "0" + date().getMinutes()
    : date().getMinutes();
    

export const Hour = () => {
  return `${hour}` < 12 ? `${hour}:${minute} AM ` : `${hour}:${minute} PM`;
};


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = date().getMonth();
let day = date().getDate();
let year = date().getFullYear();

export const NewDate = (m, d, y) => {
  return `${day}-${months[month]}  ${year}`
}
console.log(NewDate(month, day, year))