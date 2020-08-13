import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";
import { InputProps } from "./Input.types";

describe("Test Component", () => {
  let props: InputProps;

  beforeEach(() => {
    props = {
      theme: "light"
    };
  });

  const renderComponent = () => render(<Input {...props} />);

  it("renders", () => {
    renderComponent();
  });
});