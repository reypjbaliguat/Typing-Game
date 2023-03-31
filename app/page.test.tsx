import "@testing-library/jest-dom";
import { render, screen } from "./__test__/test-utils";
import Home from "./page";
import { act } from "react-dom/test-utils";
import { useDispatch } from "react-redux";
import { fetchText } from "../features/text";
import { AppDispatch } from "./store/store";

describe("Home Page", () => {
    test("Renders Home page", () => {
        render(<Home />);
        const dispatch = useDispatch<AppDispatch>();
        act(() => dispatch(fetchText()));

        const main = screen.getByRole("main");
        expect(main).toBeInTheDocument();
    });
});
