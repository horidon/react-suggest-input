import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``

import { InputProps } from './Input.types'

const TestComponent: React.FC<InputProps> = ({ theme }) => (
  <Wrapper data-testid="wrapper">
    hello
  </Wrapper>
);

export default TestComponent;