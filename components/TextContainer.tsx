"use client";
import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { AppDispatch, RootState } from "@/store/store";
import { fetchText } from "@/features/text";
import { useDispatch, useSelector } from "react-redux";

const TextContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { text } = useSelector((state: RootState) => state.text);
    const { status, content, value } = text;
    let textValue = value && value.split("");
    let letterArr = content && content.split("");

    useEffect(() => {
        const controller = new AbortController();
        dispatch(fetchText());
        return () => controller.abort();
    }, [dispatch]);

    useEffect(() => {
        console.log("value changed");
    }, [value]);
    return (
        <div className="flex sm:basis-3/5 sm:my-10 my-5 border border-black sm:p-16 p-5 rounded-lg">
            {status === "loading" ? (
                <Loading />
            ) : (
                <div>
                    {letterArr &&
                        letterArr.map((letter, i) => (
                            <span
                                key={i}
                                className={`text-4xl inline text-black ${
                                    textValue &&
                                    letterArr &&
                                    textValue[i] === letterArr[i]
                                        ? "text-green"
                                        : "text-orange"
                                }`}
                            >
                                {letter}
                            </span>
                        ))}
                </div>
            )}
        </div>
    );
};

export default TextContainer;
