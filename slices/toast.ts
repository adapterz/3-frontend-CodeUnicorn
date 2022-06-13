import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ToastType = {
  toast?: { message: string };
  message: string;
};

export const toast = createSlice({
  name: "toast",
  initialState: { message: "" } as ToastType,
  reducers: {
    setMessage: (state, { payload }: PayloadAction<ToastType>) => {
      return {
        ...state,
        message: payload.message,
      };
    },
  },
});

export const { setMessage } = toast.actions;

export default toast.reducer;
