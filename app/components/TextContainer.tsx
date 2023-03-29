"use client";
import React from "react";
import Loading from "./Loading";
import { AppDispatch } from "@/app/store/store";

interface TextContainerProps {
    status: String;
    textValue: string[];
    letterArr: string[];
}
const TextContainer = ({
    status,
    textValue,
    letterArr,
}: TextContainerProps) => {
    return (
        <div className="flex sm:basis-3/5 sm:my-10 my-5 border border-black sm:p-16 p-5 rounded-lg">
            {status === "loading" ? (
                <Loading />
            ) : (
                <div>
                    {letterArr &&
                        letterArr.map((letter, i) => {
                            return (
                                <span
                                    key={i}
                                    className={`text-4xl inline text-black ${
                                        textValue &&
                                        letterArr &&
                                        textValue[i] === letter
                                            ? "text-green"
                                            : textValue &&
                                              textValue[i] !== letter &&
                                              textValue.length > i
                                            ? "text-red"
                                            : ""
                                    }`}
                                >
                                    {letter}
                                </span>
                            );
                        })}
                </div>
            )}
        </div>
    );
};

export default TextContainer;
