// The getBusiness method retrieves business info  from the server
import axios from "axios";

export default {
  getBusiness: function (query) {
    return axios.get("/api/business");
  },
  addUser: function(userData) {
    return axios.post("/api/user/signup", userData);
  },
  userLogin: function(userData) {
    return axios.post("/api/user/login", userData);
  }
};
