const key = "4faa05bc8691134529546a79397e3a7f";

// const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=4faa05bc8691134529546a79397e3a7f';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
  const baseURL = "http://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&appid=${key}`;

  //make fetch call (promise call)
  const response = await fetch(baseURL + query);

  //promise data
  const data = await response.json();
  return data;
};
