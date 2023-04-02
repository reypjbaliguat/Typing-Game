import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TextContainer from "./TextContainer";

describe("Text Container", () => {
    test("renders", () => {
        render(
            <TextContainer
                letterArr={["t", "e", "s", "t"]}
                status={"idle"}
                textValue={["t", "e", "s", "t"]}
            />
        );
        const textCon = screen.queryByTestId("text-container");
        expect(textCon).toBeInTheDocument();
    });
    test("Length of letterArr", () => {
        render(
            <TextContainer
                letterArr={["t", "e", "s", "t"]}
                status={"idle"}
                textValue={["t", "e", "s", "t"]}
            />
        );
        const lettersDiv = screen.queryAllByTestId("letter");
        expect(lettersDiv).toHaveLength(4);
    });
    test("letter className if correct or wrong or null", () => {
        render(
            <TextContainer
                letterArr={["t", "e", "s", "t", "s"]}
                status={"idle"}
                textValue={["t", "e", "z", "t"]}
            />
        );
        const lettersDiv = screen.queryAllByTestId("letter");
        expect(lettersDiv[3]).toHaveClass("text-green");
        expect(lettersDiv[2]).toHaveClass("text-red");
        expect(lettersDiv[4]).not.toHaveClass("text-red");
        expect(lettersDiv[4]).not.toHaveClass("text-green");
    });
});
