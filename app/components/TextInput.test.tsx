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
    test("text box is disable", async () => {
        render(
            <>
                <TextInput />
            </>
        );
        const textBox = screen.getByRole("textbox");
        expect(textBox).toHaveAttribute("disabled");
    });
    test("Input will enable and user can type in text box", async () => {
        user.setup();
        const handleChange = jest.fn();

        render(
            <>
                <TextInput
                    setComponentTextValue={handleChange}
                    componentTextValue={""}
                    content={""}
                    playing={true}
                />
                <PlayButton />
            </>
        );
        const button = screen.getByRole("button", {
            name: /play/i,
        });
        await user.click(button);
        const textbox = screen.getByRole("textbox");

        waitFor(() => {
            expect(textbox).not.toHaveAttribute("disabled");
        });
        await user.type(textbox, "test");
        expect(handleChange).toHaveBeenCalledTimes(4);

        waitFor(() => {
            expect(textbox).toHaveValue("test");
        });
    });
});
