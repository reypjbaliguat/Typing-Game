import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { iconSlice } from "../../features/icon";
import { authSlice } from "../../features/auth";
import { textSlice } from "../../features/text";

// config the store
const store = configureStore({
    reducer: {
        icon: iconSlice.reducer,
        auth: authSlice.reducer,
        text: textSlice.reducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
// export default the store
export default store;
