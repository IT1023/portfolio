import {
  act,
  cleanup,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import useToast, { type Toast } from "./useToast";
import { ToastContext } from "./ToastContext";
import Toasts from "./Toasts";

const renderWithState = (toasts: Toast[]) => {
  render(
    <ToastContext.Provider value={{ toasts, addToast: () => {} }}>
      <Toasts />
    </ToastContext.Provider>,
  );
};

describe("useToast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  test("testing useToast hook", () => {
    const result = renderHook(() => useToast()).result;
    expect(result.current.toasts).toEqual([]);
    act(() => result.current.addToast({ message: "ERROR", type: "error" }));
    expect(result.current.toasts).toHaveLength(1);
    act(() => vi.advanceTimersByTime(8000));
    expect(result.current.toasts).toEqual([]);
  });
});

describe("<Toasts />", () => {
  afterEach(() => {
    cleanup();
  });

  test("empty toasts", () => {
    renderWithState([]);
    const toastsContainer = screen.getByTestId("toasts");
    expect(toastsContainer).toBeInTheDocument();
    expect(toastsContainer.children).toHaveLength(0);
  });

  test("toasts", () => {
    renderWithState([
      { id: "ERROR", message: "ERROR", type: "error" },
      { id: "INFO", message: "INFO", type: "info" },
    ]);
    const toastsContainer = screen.getByTestId("toasts");
    expect(toastsContainer).toBeInTheDocument();
    expect(toastsContainer.children).toHaveLength(2);
  });
});
