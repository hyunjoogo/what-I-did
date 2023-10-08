import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "../Select";

describe("셀렉트 컨텍스트", () => {
  it("랜더링 확인", async () => {
    const labelText = "Test Label";
    const childText = "Test Child";
    render(
      <Select label={labelText}>
        <div>{childText}</div>
      </Select>,
    );

    const label = screen.getByText(labelText);
    const child = screen.getByText(childText);

    expect(label).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });
});
