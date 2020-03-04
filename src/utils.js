const iconUrl = "http://openweathermap.org/img/wn/"

const ordinalDay = (dateAndTime) => {
    const date = dateAndTime.getDate()
    if(date > 20 || date < 10) {
        switch(date%10) {
            default: return date+"th"
            case 1: return date+"st"
            case 2: return date+"nd"
            case 3: return date+"rd"
        }
    }
  }

  export default { iconUrl, ordinalDay }