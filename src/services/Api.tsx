import axios, {AxiosResponse} from "axios";
import {Images} from "./api-types";

export const getImages = (): Promise<AxiosResponse<Array<Images>>> => {
    return axios.get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24")
}
