import styled from "styled-components";

const StyledButton = styled.button`
  && {
    margin: 10px;
    box-sizing: border-box;
    padding: 10px 0px;
    width: 200px;
    border: 3px solid palevioletred;
    color: black;
    cursor: pointer;
    border-radius: 3px;
    background-color: transparent;
    outline: none;
    font-family: Roboto Mono;
    box-shadow: 1px 2px 0px 1px #545645;
    margin-top: -2px;
    :active {
      margin-top: 0px;
      box-shadow: 0px 0px 0px 0px #545645;
    }
  }
`;

export default StyledButton;
