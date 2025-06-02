import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserType } from "./types";

const initialState: UserState = { user: null };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserType>) => {
            const { name } = action.payload;

            state.user = { name };
        },
        removeUser: (state) => {
            state.user = null;
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
