import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://api.github.com/users");
  return response.data;
});

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      this.state = initialState;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: () => {
      console.log("pending");
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      console.log("success");
      return { ...state, users: payload };
    },
    [fetchUsers.rejected]: () => {
      console.log("rejected ");
    },
  },
});

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
