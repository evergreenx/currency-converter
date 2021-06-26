import axios from "axios";

const instance = axios.create({
  baseURL: "https://free.currconv.com/api/v7",
});

// Where you would set stuff like your 'Authorization' header, etc ...

// Also add/ configure interceptors && all the other cool stuff

export default instance;
