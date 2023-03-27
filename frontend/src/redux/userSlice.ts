import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
  token: string | null;
}
const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
  } as TokenState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = null;
    },
  },
});
export const { setToken, removeToken } = userSlice.actions;
export default userSlice.reducer;