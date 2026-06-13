import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../app/cofig/axios";


// loggin user
export const loginEmployee = createAsyncThunk("auth/login" , async(
    credential , thunkApi)=>{
        try {
            const  res= await axiosInstance.post("/auth/login",credential);
            
            return res.data.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
    );


// current looged in user
// export const currentLoggedEmployee = createAsyncThunk("/auth/me", 
//     async(_ , thunkApi)=>{
//         try {
//             const res = await  axiosInstance.get("/auth/me");
//             console.log("logged from current employee data" , res);
//             return res.data
            
//         } catch (error) {
//             return thunkApi.rejectWithValue(error.response?.data?.message || error.message)
//         }
//     }
// )    


export const currentLoggedEmployee = createAsyncThunk(
  "auth/me",

  async (_, thunkApi) => {

    try {

      console.log("API CALL STARTED");

      const res = await axiosInstance.get("/auth/me");

      console.log("FULL RESPONSE", res);

      console.log("RESPONSE DATA", res.data);

      return res.data;

    } catch (error) {

      console.log("ERROR INSIDE THUNK");

      console.log(error);

      console.log(error.response);

      console.log(error.response?.data);

      return thunkApi.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);