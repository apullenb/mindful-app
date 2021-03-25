import config from '../config'

const utilities = {


    async getFood() {
        try {
            const response = await fetch(`${config.API_ENDPOINT}/api/food`, {
              method: "GET",
              headers: { token: localStorage.token },
            });
            const parseRes = await response.json();
            const thisDay = parseRes.filter(
              (day) => moment(day.date).format("LL") == dateToday
            );
          
              console.log(thisDay[0])
            if (food.id === undefined) {
               
              }
          } catch (error) {
            console.error(error.message);
          }
        }
}

export default utilities;