import { server } from "../mocks/server";
import { rest } from "msw";
import textReducer, {
    TextState,
    setValue,
    setGameOver,
    setPlaying,
    addSecondToTime,
    resetTime,
    setWordPerMinute,
    fetchText,
} from "./text";
import TextContainer from "../app/components/TextContainer";
import { render } from "../app/__test__/test-utils";

describe("text reducer", () => {
    const initialState: TextState = {
        text: {
            status: "",
            content: "",
            value: "",
            gameOver: false,
            playing: false,
            time: 0,
            wordsPerMinute: 0,
        },
    };

    test("should handle initial state", () => {
        expect(textReducer(undefined, { type: "unknown" })).toEqual({
            text: {
                status: "",
                content: "",
                value: "",
                gameOver: false,
                playing: false,
                time: 0,
                wordsPerMinute: 0,
            },
        });
    });
    test("should handle setValue", () => {
        const { text } = textReducer(initialState, setValue("a"));
        const { value } = text;
        expect(value).toEqual("a");
    });
    test("should handle setGameOver", () => {
        const { text } = textReducer(initialState, setGameOver(true));
        const { gameOver } = text;
        expect(gameOver).toEqual(true);
    });
    test("should handle setPlaying", () => {
        const { text } = textReducer(initialState, setPlaying(true));
        const { playing } = text;
        expect(playing).toEqual(true);
    });
    test("should handle addSecondToTime", () => {
        const { text } = textReducer(initialState, addSecondToTime());
        const { time } = text;
        expect(time).toEqual(1);
    });
    test("should handle resetTime", () => {
        const { text } = textReducer(initialState, resetTime());
        const { time } = text;
        expect(time).toEqual(0);
    });
    test("should handle setWordPerMinute", () => {
        const { text } = textReducer(initialState, setWordPerMinute(50));
        const { wordsPerMinute } = text;
        expect(wordsPerMinute).toEqual(50);
    });
});
