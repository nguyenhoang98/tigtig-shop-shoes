import Axios from "axios";
import AxiosService from "../AxiosServices/index";
export const getData = (url) => {
  return AxiosService.get(url);
};
