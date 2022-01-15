// HTTP REQUESTS WITH NODE.JS

// USING AXIOS

const axios = require("axios");
const url = "<a href="https://my-json-server.typicode.com/edurekaDemo/noderequest/db">https://my-json-server.typicode.com/edurekaDemo/noderequest/db</a>"";
const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getData(url);



