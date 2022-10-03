import axios from "axios";

export async function useAutoSuggestions(options) {
  await axios
    .request(options)
    .then((response) => {
      let responses = response.data.predictions;
      return responses;
    })
    .catch(function (error) {
      console.log(error);
    });
}
