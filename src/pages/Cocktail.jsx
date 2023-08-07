import axios from "axios";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";

// we use singleCocktailUrl to get data about single cocktail
// we already know the value of id ,we retrieve it using loader function
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailsQuery = (id) => {
  return {
    queryKey: ["Cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    // console.log(params);
    const { id } = params;
    // const response = await axios.get(`${singleCocktailUrl}${id}`);
    // const { data } = await axios.get(`${singleCocktailUrl}${id}`);
    // console.log(data);
    await queryClient.ensureQueryData(singleCocktailsQuery(id));
    // return { data, id };
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  // if (!data) return <h2>something went wrong...</h2>;

  // if there is error in cocktail id navigate to home page
  const { data } = useQuery(singleCocktailsQuery(id));
  if (!data) return <Navigate to="/" />;
  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  // console.log(singleDrink);

  const ingredient1 = singleDrink.strIngredient1;
  // console.log(ingredient1);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
