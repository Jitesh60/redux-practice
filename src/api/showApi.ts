import axios from "axios";
import { Show } from "../model/show";

export const getShowList = async (query: string) => {
  const response = await axios.get<{ show: Show }[]>(
    "https://api.tvmaze.com/search/shows?q=" + query
  );
  return response.data.map((d) => d.show);
};

export const getShowDetail = async (id: number) => {
  const response = await axios.get<Show>("https://api.tvmaze.com/shows/" + id);
  return response.data;
};

export const getShowCast = async (id: number) => {
  const response = await axios.get<Show>(
    "https://api.tvmaze.com/shows/" + id + "/cast"
  );
  return response.data;
};
