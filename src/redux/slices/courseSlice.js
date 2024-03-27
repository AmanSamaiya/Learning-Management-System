import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";

const initialState = {
  courseList: [],
};

export const getAllCourses = createAsyncThunk(
  "/course/getAllCourses",
  async (data) => {
    try {
      const response = await axiosInstance.get("/courses", data);
      console.log(response);
      toast.promise(response, {
        loading: "Wait! , Fetching all courses",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to load courses",
      });
      return (await response).data.courses;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const CreateNewCourse = createAsyncThunk(
  "/course/create",
  async (data) => {
    try {
      let formdata = new FormData();
      formdata.append("title", data?.title);
      formdata.append("description", data?.description);
      formdata.append("category", data?.category);
      formdata.append("createdBy", data?.createdBy);
      formdata.append("thumbnail", data?.thumbnail);

      const response = await axiosInstance.post("/courses", formdata);
      toast.promise(response, {
        loading: "Wait! , Creating new course",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to create course",
      });
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if (action?.payload) {
        state.courseList = [...action.payload];
      }
    });
  },
});

export default courseSlice.reducer;
