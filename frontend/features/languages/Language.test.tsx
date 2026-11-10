import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import Language from "./Language";
import userEvent from "@testing-library/user-event";

describe("<Language />", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    render(<Language />);
    user = userEvent.setup();
  });
  afterEach(() => {
    cleanup();
  });

  test("initial language", () => {
    expect(document.title).toBe("it1023");
  });
  test("toggling language", async () => {
    expect(document.title).toBe("it1023");
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    await user.selectOptions(select, "jp");
    expect(document.title).toBe("いって1023");
    await user.selectOptions(select, "en");
    expect(document.title).toBe("it1023");
  });
});
