import Axios, { AxiosResponse } from "axios";

export const axios = Axios.create({
  baseURL: process.env.SERVER_URL,
  timeout: 10 * 1000,
  responseType: "json",
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
    "Content-Type": "application/json;charset=utf-8",
  },
});

export async function axiosGet<T>(endpoint: string): Promise<T> {
  try {
    const res: AxiosResponse<T> = await axios.get<T>(encodeURI(endpoint));

    return res.data;
  } catch (error) {
    // TODO: Reporting Error
    console.error(error);

    if (error.response) {
      throw error.response.data;
    }

    throw error;
  }
}

export async function axiosPost<T>(url: string, params: any): Promise<T> {
  try {
    const res: AxiosResponse<T> = await axios.post<T>(encodeURI(url), params);
    return res.data;
  } catch (error) {
    // TODO: Reporting Error
    console.error(error);

    if (error.response) {
      throw error.response.data;
    }

    throw error;
  }
}
