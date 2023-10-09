import { render, screen } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography", () => {
  it("랜더링 확인", () => {
    const testText = "hello";
    render(<Typography variant={"h1"}>{testText}</Typography>);

    const typography_h1 = screen.getByRole("heading");
    expect(typography_h1).toBeInTheDocument();
  });
});
