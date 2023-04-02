import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
    test("render", () => {
        render(<Header />);
        const header = screen.getByRole("heading", {
            name: /typing game/i,
        });
        expect(header).toBeInTheDocument();
    });
});
