import React from "react";
import { render } from "@testing-library/react";
import HomeButtons from "./HomeButtons";

describe("HomeButtons tests", () => {
  it("should render", () => {
    expect(render(<HomeButtons />)).toBeTruthy();
  });
});
