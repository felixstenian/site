import axios from "axios";

const apiBitbucket = axios.create({
  baseURL: "https://api.bitbucket.org/2.0/",
});

export default apiBitbucket;
