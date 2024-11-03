import React from "react";
import styled from "styled-components";

const Input = ({ type, name, value, handleChange }) => {
  return (
    <StyledWrapper>
      <div className="form__group field">
        <input
          type={type ? type : "text"}
          className="form__field"
          name={name}
          onChange={handleChange}
          value={value}
          placeholder={type ? new Date(2001 - 7 - 30) : null}
        />
        <label className="form__label">{name}</label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form__group {
    position: relative;
    padding: 5px 0 0;
    width: 100%;
    max-width: 180px;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    outline: 0;
    font-size: 12px;
    color: black;
    padding: 7px 0;
    margin: 10px 0px;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 15px;
    color: black;
    pointer-events: none;
  }

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 500;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
  }

  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: black;
    font-weight: 700;
  }

  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }
`;

export default Input;
