import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: JSON.parse(localStorage.getItem("data")) || {},
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {

  try {
    const response = await axiosInstance.post("/user/register", data, {
      headers: {
        'Content-Type': 'multipart/form-data'  // Set the correct content type
      }
    });
    toast.promise(response, {
      loading: "Wait! , Creating your account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to create your account",
    });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});



export const updateProfile = createAsyncThunk("/auth/updateProfile", async (data) => {
  try {
    const response = await axiosInstance.put(`/user/update/${data[0]}`, data[1]);
    toast.promise(response, {
      loading: "Wait! , updating your account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to update your account",
    });
    return (await response).data;
    
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});


export const getUserData = createAsyncThunk("/auth/getData", async () => {
  try {
    const response = await axiosInstance.get("/user/me");
      return (await response).data;
    
  } catch (error) {
    toast.error(error?.message);
  }
});


export const login = createAsyncThunk("/auth/signin", async (data) => {
  try {
    const response = await axiosInstance.post("/user/login", data);
    console.log(response);
    toast.promise(response, {
      loading: "Wait! , Authenticating your account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to authenticate your account",
    });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const logout = createAsyncThunk("/auth/logout", async () => {
  try {
    const response = await axiosInstance.post("/user/logout");
    console.log(response);
    toast.promise(response, {
      loading: "Wait! , logging out your account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to logout your account",
    });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action?.payload?.data));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.data?.user?.role);
        state.isLoggedIn = true;
        state.role = action?.payload?.data?.user?.role;
        state.data = action?.payload?.data?.user;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.isLoggedIn = false;
        state.role = "";
        state.data = "";
      })
      .addCase(getUserData.fulfilled , (state ,action) =>{
         if(!action?.payload?.user) return ;
         localStorage.setItem("data", JSON.stringify(action?.payload?.user));
         localStorage.setItem("isLoggedIn", true);
         localStorage.setItem("role", action?.payload?.user?.role);
         state.isLoggedIn = true;
         state.role = action?.payload?.user?.role;
         state.data = action?.payload?.user;
      })
  },
});

export default authSlice.reducer;
