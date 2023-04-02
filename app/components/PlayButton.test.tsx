import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import PlayButton from "./PlayButton";

describe("Play Button", () => {
    test("renders", async () => {
        render(
            <PlayButton
                handlePlay={function (): void {
                    throw new Error("Function not implemented.");
                }}
                fetchNewContent={function (): void {
                    throw new Error("Function not implemented.");
                }}
                playing={false}
                time={0}
            />
        );
        const playButton = screen.getByRole("button", {
            name: /play/i,
        });
        const fetchNewContentButton = screen.getByRole("button", {
            name: /new content/i,
        });
        expect(playButton).toBeInTheDocument();
        expect(fetchNewContentButton).toBeInTheDocument();
    });
    test("It plays the game and render new content", async () => {
        user.setup();
        const playHandler = jest.fn();
        const fetchNewContentHandler = jest.fn();
        render(
            <PlayButton
                handlePlay={playHandler}
                fetchNewContent={fetchNewContentHandler}
                playing={false}
                time={0}
            />
        );
        const playButton = screen.getByRole("button", {
            name: /play/i,
        });
        const fetchNewContentButton = screen.getByRole("button", {
            name: /new content/i,
        });
        await user.click(playButton);
        expect(playHandler).toHaveBeenCalledTimes(1);
        await user.click(fetchNewContentButton);
        expect(fetchNewContentHandler).toHaveBeenCalledTimes(1);
    });
});
