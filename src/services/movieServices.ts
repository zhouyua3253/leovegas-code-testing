import { axiosGet } from "@Utils/networkRequest";
import { Endpoints } from "@Constants/endpoints";
import { Pagination } from "@Models/pagination";
import { MovieModel } from "@Models/movieModel";

export async function discoverMovies(): Promise<Pagination<MovieModel>> {
  return await axiosGet(Endpoints.discoverMovies);
}
