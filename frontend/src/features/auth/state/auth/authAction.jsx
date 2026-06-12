import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../app/cofig/axios";


// loggin user
export const loginEmployee = createAsyncThunk("auth/login" , async(
    credential , thunkApi)=>{
        try {
            const  res= await axiosInstance.post("/auth/login",credential);
            console.log("log from thunk",res);
            
            return res.data.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
    );


// current looged in user
export const currentLoggedEmployee = createAsyncThunk("/auth/me", 
    async(_ , thunkApi)=>{
        try {
            const res = await  axiosInstance.get("/auth/me");
            console.log("logged from current employee data" , res);
            return res?.data?.user
            
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data?.message || error.message)
        }
    }
)    