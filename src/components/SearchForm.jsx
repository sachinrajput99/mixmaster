import React from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { useNavigation, Form } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          className="form-input"
          name="search"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "submit"}
        </button>
        {/* submit button click krte hi url change hoga ,url ke query se search term lenge with the help of (searchParams) and them cocktail ko display krwa denge  */}
        {/* is tarike se content search ho jayega */}
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
