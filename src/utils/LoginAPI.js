import axiosClient from "./AxiosCustomize";
const loginApi = {
  login: (payload) => {
    const url = "/user/login";
    return axiosClient.post(url, payload);
  },
  logout: (refreshToken) => {
    const url = "/auth/logout";
    return axiosClient.post(url, refreshToken);
  },
  validation: () => {
    const url = "/auth/validation";
    return axiosClient.post(url);
  },

  update_password: (data) => {
    const url = "/users/profile/update_password";
    return axiosClient.put(url, data);
  },
};
export default loginApi;