"use client";

export default function TextInput() {
    return (
        <textarea
            className="rounded-lg w-full border resize-none sm:p-16 p-5 text-3xl sm:mb-10 mb-5"
            placeholder="Type here..."
            value={"TextInput"}
            onChange={() => console.log("error")}
        />
    );
}
