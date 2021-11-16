// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import Frame from "../models/Frame";
test("test the frame has own propertie balls", () => {
  expect(Array.isArray(Frame.balls)).toBe(true);
  //expect(Array.isArray(new Frame().balls)).toBe(true);
});
