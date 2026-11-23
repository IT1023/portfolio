import {
  act,
  cleanup,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import useModal from "./useModal";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";
import { FOCUSABLE_SELECTOR } from "../../shared/lib/constants";

describe("<Modal />", () => {
  beforeEach(() => {
    render(
      <Modal trigger={<button>Trigger</button>}>
        <div data-testid="modal">
          <input type="text" placeholder="email" />
          <input type="text" placeholder="name" />
          <button>inside modal</button>
        </div>
      </Modal>,
    );
  });
  afterEach(() => {
    cleanup();
  });

  test("initial rendering", async () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    const modal = screen.queryByTestId("modal");
    expect(modal).toBeNull();
  });

  test("opening modal", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button");
    await user.click(button);
    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
    const firstElement = modal.querySelector(FOCUSABLE_SELECTOR);
    expect(firstElement).toHaveFocus();
  });
});

describe("useModal", () => {
  test("modal returns", () => {
    const result = renderHook(() => useModal()).result;
    expect(result.current.isOpen).toEqual(false);
    act(() => result.current.openModal());
    expect(result.current.isOpen).toEqual(true);
  });
});
