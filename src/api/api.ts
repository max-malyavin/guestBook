import Axios from "axios";

export const istance = Axios.create({
  // withCredentials: true,
  baseURL: "http://localhost:5000/",
});

// istance.interceptors.request.use((config) => {
//   config.headers["authorization"] = window.localStorage.getItem(
//     "authorization"
//   );
//   return config;
// });

