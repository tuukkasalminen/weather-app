const iconUrl = 'http://openweathermap.org/img/wn/';

const ordinalDay = (dateAndTime) => {
  const date = dateAndTime.getDate();
  if (date > 3 && date < 21) return date + 'th';
  switch (date % 10) {
    case 1: return date + 'st';
    case 2: return date + 'nd';
    case 3: return date + 'rd';
    default: return date + 'th';
  }
};

export default { iconUrl, ordinalDay };
