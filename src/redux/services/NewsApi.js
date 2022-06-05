import { endpoints } from "./endpoints";



export const NewsApi = (data) => {
  let endpont = endpoints.headline;
  const api_key ='b9a7c60c709b45c390aa4cd2fcfba05b'
//   let url = "https://newsapi.org/" + endpont+ "&" 

//   let url = "https://newsapi.org/v2/top-headlines?country=us&" 
  let url = "http://newsapi.org/" + endpont+ "&" + "apiKey="+ api_key 
  return fetch(url, {
    method: "GET",
    headers: {

         'Access-Control-Allow-Origin': "*",
         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
  })
    .then((response) => {
      if (response) {
          console.log('response')
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {
        error,
      };
    });
};



