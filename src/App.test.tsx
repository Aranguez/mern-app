import App from "./App";

import { render } from "@testing-library/react";

const setup = () => {
  return render(<App />);
};

it("should render correctly", () => {
  const component = setup();
  expect(component).toBeTruthy();
});
