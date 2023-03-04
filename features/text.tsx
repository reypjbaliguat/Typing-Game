import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchUtil from "../utilities/fetchUtil";

interface text {
    status: String;
    content: String;
    value: String;
}

// Type for our state
export interface TextState {
    text: text;
}

// Initial state
const initialState: TextState = {
    text: {
        status: "",
        content: "",
        value: "",
    },
};

export const fetchText = createAsyncThunk("text/fetchText", async () => {
    return fetchUtil("https://api.quotable.io/random");
});

// Actual Slice
export const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.text.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchText.pending, (state) => {
            state.text.status = "loading";
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
        }),
            builder.addCase(fetchText.fulfilled, (state, { payload }) => {
                state.text = payload;
            }),
            builder.addCase(fetchText.rejected, (state) => {
                state.text.status = "failed";
            });
    },
});

// Action creators are generated for each case reducer function
export const { setValue } = textSlice.actions;

export default textSlice.reducer;
