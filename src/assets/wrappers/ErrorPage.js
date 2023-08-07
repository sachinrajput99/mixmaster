import styled from "styled-components";
const Wrapper = styled.div`

  /* describes the height of page */
  /*  helps in responsive=> 100vh means height = window height */
  min-height: 100vh;
  text-align: center;
  /* sets the container into center */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    /*helps in responsive=>  view port width  sets  width according to browser width*/
    width: 90vw;
    /*helps in responsive=>  we must give max-width when we set  width in vw */
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;
export default Wrapper;
