"use client";

import Header from "./components/Header";

import PlayButton from "@/app/components/PlayButton";
import TextContainer from "@/app/components/TextContainer";
import TextInput from "@/app/components/TextInput";
import Result from "@/app/components/Result";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import {
    fetchText,
    setGameOver,
    setPlaying,
    setWordPerMinute,
} from "@/features/text";
import { useEffect } from "react";

export default function Home() {
    // Redux
    const { text } = useSelector((state: RootState) => state.text);
    const { wordsPerMinute, status, content, value, time, gameOver, playing } =
        text;
    const dispatch = useDispatch<AppDispatch>();

    // Component Constants
    const textValue = value && value.split("");
    const letterArr = content && content.split("").splice(0, 100);

    // Component Functions
    const calculateResult = () => {
        let result;
        const averageLetterPerWord = 4.7;
        const wordCount = content.length / averageLetterPerWord;
        if (
            letterArr &&
            textValue &&
            letterArr.join("") === textValue.join("")
        ) {
            result = Math.round((wordCount / time) * 60);
            dispatch(setWordPerMinute(result));
            dispatch(setGameOver(true));
            dispatch(setPlaying(false));
        }
    };

    const refetchOnFinish = () => {
        if (
            letterArr &&
            textValue &&
            letterArr.join("") === textValue.join("")
        ) {
            const promise = dispatch(fetchText());
            return () => {
                promise.abort();
            };
        }
    };
    useEffect(() => {
        calculateResult();
    }, [value, time, content, textValue, letterArr, dispatch]);

    useEffect(() => {
        refetchOnFinish();
    }, [gameOver, playing]);

    useEffect(() => {
        const promise = dispatch(fetchText());
        return () => {
            promise.abort();
        };
    }, [dispatch]);
    return (
        <main className="flex basis-full justify-center">
            <div className="basis-4/5 flex-wrap">
                <Header />
                <Result wordsPerMinute={wordsPerMinute} />
                <TextContainer
                    status={status}
                    textValue={textValue}
                    letterArr={letterArr}
                />
                <TextInput />
                <PlayButton />
            </div>
        </main>
    );
}
