import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Input = styled.input`
  justify-content: space-between;
  width: 47px;
  height: 49px;
  margin: 8.75px;
  border-radius: 0px;
  text-align: center;
  font-size: 34px;
  font-family: "Poppins", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial sans-serif;
`;

const InputBox = ({
  type,
  handleKeyDown,
  handleChange,
  handleFocus,
  name,
  inputRef,
  inputProps,
}) => {
  return (
    <Input
      {...inputProps}
      type={type}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onFocus={handleFocus}
      maxLength="1"
      name={name}
      ref={inputRef}
    />
  );
};

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleKeyDown: PropTypes.func,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  inputRef: PropTypes.func,
  inputProps: PropTypes.object,
};

export default InputBox;
