import { afterEach, beforeEach, describe, expect, test } from "vitest";
import {
  cleanup,
  render,
  renderHook,
  screen,
  act,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import useTheme from "./useTheme";

import Theme from "./Theme";
import ThemeWrapper from "./ThemeWrapper";

const preRenderTheme = (theme: string) => {
  localStorage.clear();
  localStorage.setItem("theme", theme);
};

describe("useTheme", () => {
  test("hook functionality", async () => {
    preRenderTheme("light");
    const result = renderHook(() =>
      useTheme({ THEME_KEY: "theme", cooldown: 1000 }),
    ).result;
    expect(result.current.currentTheme).toBe("light");
    act(() => result.current.toggleTheme());
    expect(result.current.currentTheme).toBe("dark");
    act(() => result.current.toggleTheme());
    expect(result.current.currentTheme).toBe("dark");
    await new Promise((res) => setTimeout(res, 1000));
    act(() => result.current.toggleTheme());
    expect(result.current.currentTheme).toBe("light");
  });
});

describe("<Theme />", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    preRenderTheme("dark");
    render(
      <ThemeWrapper>
        <Theme />
      </ThemeWrapper>,
    );
    user = userEvent.setup();
  });
  afterEach(() => {
    cleanup();
  });

  test("component functionality", async () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(document.documentElement).toHaveClass("dark");
    await user.click(button);
    expect(document.documentElement).not.toHaveClass("dark");
  });
});
