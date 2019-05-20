//returns the day of the week for the user
function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

function greeting(date)  {
  return `Hello, world! Happy ${dayName(date)}.`;
}