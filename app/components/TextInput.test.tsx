import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import PlayButton from "./PlayButton";
import TextInput from "./TextInput";

describe("Text Input", () => {
    test("render", () => {
        render(
            <>
                <TextInput />
                <PlayButton />
            </>
        );
        const textbox = screen.getByRole("textbox");
        expect(textbox).toBeInTheDocument();
    });
    test("Click Play Button and Start the game", async () => {
        user.setup();
        render(
            <>
                <TextInput />
                <PlayButton />
            </>
        );
        const button = screen.getByRole("button", {
            name: /play/i,
        });
        await user.click(button);
        waitFor(() => {
            const textbox = screen.getByRole("textbox");
            expect(textbox).toHaveStyle({ outlineColor: "#13ce66" });
        });
    });
});
