import { axiosGet } from "@Utils/networkRequest";
import { Endpoints } from "@Constants/endpoints";
import { Pagination } from "@Models/pagination";
import { MovieDetailsModel, MovieModel } from "@Models/movieModel";

export async function discoverMovies(): Promise<Pagination<MovieModel>> {
  return await axiosGet<Pagination<MovieModel>>(Endpoints.discoverMovies);
}

export async function getMovieById(
  id: number | string
): Promise<MovieDetailsModel> {
  return await axiosGet<MovieDetailsModel>(`${Endpoints.getMovie}${id}`);
}
