import axios from "axios";

axios.defaults.baseURL = "https://64e4b8eec55563802913aa4a.mockapi.io";

//---------------------------------------------------------------get data----------------------//

export const getListTweetsApi = () => {
  return axios.get("/tweets")
  .then(response=>response.data);
};

export const addFollowerApi = (data) => {
  return axios
    .put(`/tweets/${data.id}`,data).then(response=>response.data)}