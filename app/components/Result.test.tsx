import { render, screen } from "@testing-library/react";
import Result from "./Result";

describe("Result Component", () => {
    test("render", () => {
        render(<Result wordsPerMinute={35} />);
        const resultText = screen.getByText(/speed: 35 words per minute/i);
        expect(resultText).toBeInTheDocument();
    });
});
