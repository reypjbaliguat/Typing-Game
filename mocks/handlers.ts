import { rest } from "msw";

export const handlers = [
    // rest.get("https://api.quotable.io/random", (req, res, ctx) => {
    //     return (
    //         res(ctx.status(200)),
    //         ctx.json({
    //             content: "The quick brown fox jumps over the lazy dog.",
    //         })
    //     );
    // }),
];
