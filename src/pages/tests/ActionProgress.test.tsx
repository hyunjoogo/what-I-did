import { render, screen } from "@testing-library/react";
import ActionProgress from "../ActionProgress";
import { ACTION_TIME_OPTIONS } from "../../types/action";

describe("", () => {
  it("행동시간 선택창이 나오는지 확인", () => {
    render(<ActionProgress />);

    const selectElements = screen.getAllByRole("option");
    expect(selectElements.length).toBe(ACTION_TIME_OPTIONS.length);

    ACTION_TIME_OPTIONS.forEach((time) => {
      const timeEl = screen.getByText(time + "분");
      expect(timeEl).toBeInTheDocument();
    });
  });

  // it("임의값을 선택시 해당값으로 변경되는지 확인", () => {
  //   const user = userEvent.setup();
  //
  //   render(<ActionProgress />);
  //
  //   const selectElement = screen.getByRole("combobox");
  //   const selectValue = ACTION_TIME_OPTIONS[2];
  //   user.selectOptions(selectElement, selectValue + "분");
  //
  //   expect(selectElement).toHaveValue(selectValue);
  // });
});
