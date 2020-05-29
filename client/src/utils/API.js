// The getBusiness method retrieves business info  from the server
import axios from "axios";

export default {
  getBusiness: function (query) {
    return axios.get("/api/business");
  },
};
