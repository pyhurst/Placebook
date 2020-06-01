// The getBusiness method retrieves business info  from the server
import axios from "axios";

export default {
  getBusiness: function (query) {
    return axios.get("/api/businesses");
  },
  addUser: function(userData) {
    return axios.post("/api/user/signup", userData);
  },
  userLogin: function(userData) {
    return axios.post("/api/user/login", userData);
  },
  addBusiness: function(businessData) {
    return axios.post("/api/businesses/add")
  }
};
