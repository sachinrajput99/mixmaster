import axios from "axios";

import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// loader is used so to pre-fetch the data (during the initial render)
// we could have use use-effect but use-effect fetches the data after the initial render

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      // console.log(response);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    // console.log(url.searchParams.get("search"));
    let searchTerm = url.searchParams.get("search") || "";
    // getting response from api
    // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

    // sending search term and response as an object0.p];
    // return { drinks: response.data.drinks, searchTerm };

    // check if the data is in the cached memory if not then fetch data
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  //pulling out the data from loader
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  // console.log(drinks);

  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  );
};

export default Landing;
