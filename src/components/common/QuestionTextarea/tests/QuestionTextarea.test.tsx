import { render, screen } from "@testing-library/react";
import Typography from "../../Typography/Typography";
import QuestionTextarea from "../QuestionTextarea";
import userEvent from "@testing-library/user-event";

describe("QuestionTextarea", () => {
  it("랜더링 확인", async () => {
    const user = userEvent.setup();
    const question = "test question";
    const fakeExample = "textarea 내용 입력";

    render(<QuestionTextarea question={question} />);

    const h6 = screen.getByRole("heading");
    expect(h6).toBeInTheDocument();

    const textarea = screen.getByRole("textbox");
    await user.type(textarea, fakeExample);
    expect(textarea).toHaveValue(fakeExample);
  });
});
