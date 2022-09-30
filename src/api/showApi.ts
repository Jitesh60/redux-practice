import axios from "axios";
import { Show } from "../model/show";

export const getShowList = async (query: string) => {
  const response = await axios.get<{ show: Show }[]>(
    "https://api.tvmaze.com/search/shows?q=" + query
  );
  return response.data.map((d) => d.show);
};
