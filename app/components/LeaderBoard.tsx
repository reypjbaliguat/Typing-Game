import Link from "next/link";
import React from "react";

export default function LeaderBoard() {
    return (
        <>
            <div className="flex basis-full justify-center sm:mt-10 mt-5 bg-green rounded-t-2xl p-8 ">
                <p className="text-2xl text-center text-white">Leader Board</p>
            </div>
            <div className="flex basis-full justify-center rounded-b-2xl border border-green border-t-0 h-5/6">
                <div className="mt-3">
                    <Link
                        href="/login"
                        className="bg-green rounded text-2xl p-2 text-white border border-black"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}
