import Providers from "../../provider";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../page";
import store from "../store/store";

describe("Home Page", () => {
    it("renders home page", () => {
        render(
            <Providers store={store}>
                <Home />
            </Providers>
        );
        // check if all components are rendered
        expect(screen.getByTestId("header")).toBeInTheDocument();
    });
});
