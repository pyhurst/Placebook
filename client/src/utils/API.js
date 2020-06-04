// The getBusiness method retrieves business info  from the server
import axios from "axios";
export default {
  getBusiness: function () {
    return axios.get("/api/businesses/all");
  },
  addUser: function (userData) {
    return axios.post("/api/user/signup", userData);
  },
  userLogin: function (userData) {
    return axios.post("/api/user/login", userData);
  },
  addBusiness: function (businessData) {
    return axios.post("/api/businesses/add", businessData);
  },
  getBusinessById: function (id) {
    return axios.get("/api/businesses/" + id);
  },
  checkUser: function () {
    return axios.get("/api/user/user");
  },
  reservation: function (id, businessData) {
    return axios.post("/api/businesses/" + id, businessData)
  }
};
