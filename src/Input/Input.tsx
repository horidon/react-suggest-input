import React from "react";
import styled from "styled-components";
import { InputProps } from './Input.types'
import "../styles.scss"

const Wrapper = styled.div``

const TestComponent: React.FC<InputProps> = ({ theme }) => (
  <Wrapper
    className={`SuggestInput_wrapper_${theme}`}
    data-testid="wrapper"
    contentEditable
  >
    hello
  </Wrapper>
);

export default TestComponent;