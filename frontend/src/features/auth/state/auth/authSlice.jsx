import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedEmployee, loginEmployee } from "./authAction";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    employee: null,
    isLoading: false,
  },

  reducers: {
    addEmplyee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    },

    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
    },
  },

  // ✅ OUTSIDE reducers
  extraReducers: (builder) => {
    builder

      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
        state.employee = null;
      })

      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      })

      .addCase(loginEmployee.rejected, (state) => {
        state.isLoading = false;
        state.employee = null;
      })

      // current logged in employee

      .addCase(currentLoggedEmployee.pending, (state) => {
        state.isLoading = true;
        state.employee = null;
      })

      .addCase(currentLoggedEmployee.fulfilled, (state, action) => {
        console.log("FULFILLED RUNNING");

        state.employee = action.payload;
        state.isLoading = false;
      })

      .addCase(currentLoggedEmployee.rejected, (state, action) => {
        console.log("REJECTED RUNNING");

        console.log(action.payload);

        state.isLoading = false;
      });
  },
});

export const { addEmplyee, removeEmployee } = authSlice.actions;

export default authSlice.reducer;
