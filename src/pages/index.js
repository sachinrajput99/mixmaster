// import About from "./About";
import Cocktail from "./Cocktail";
import HomeLayout from "./HomeLayout";
import Landing from "./Landing";
import Newsletter from "./Newsletter";
import Error from "./Error";

export { Cocktail, HomeLayout, Landing, Newsletter, Error };

// other-way to export
// here we export directly with out using import

export { default as About } from "./About";
export { default as SinglePageError } from "./SinglePageError";
