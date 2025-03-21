import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import toast from 'react-hot-toast';
// import { data } from 'react-router-dom';

import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const res = await axiosInstance.post("user/register", data);  // ✅ Await API call

        toast.success(res.data?.message || "Account created successfully!");

        return res.data;  // ✅ Ensure the returned data contains success status
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to create account");
        return Promise.reject(error.response?.data || { success: false });
    }
});


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

// export const {} = authSlice.actions;
export default authSlice.reducer;