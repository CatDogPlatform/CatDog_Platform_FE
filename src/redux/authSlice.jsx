import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  msg: "",
  userInf: "",
  accessToken: "",
  loading: false,
  error: "",
};

// Không cần phải lưu thông tin người dùng vào Local Storage tại đây
// Hãy thực hiện việc lưu thông tin người dùng vào Local Storage sau khi xử lý login

export const register = createAsyncThunk("auth/register", async (userData) => {
  try {
    console.log("data: ", userData);

    // Kiểm tra thông tin tài khoản đã tồn tại trong cơ sở dữ liệu chưa

    const response = await axios.post(
      "https://6479a016a455e257fa637183.mockapi.io/TblAccount",
      userData
    );
    toast.success("Registration successful!");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await axios.get(
    "https://6479a016a455e257fa637183.mockapi.io/TblAccount"
  );
  const accounts = response.data;
  const userInf = accounts.find(
    (u) =>
      u.username === credentials.username && u.password === credentials.password
  );
  if (userInf) {
    console.log("user: ", userInf);
    // Xử lý đăng nhập
    // Lưu thông tin người dùng vào Local Storage
    const jsonString = JSON.stringify(userInf);
    localStorage.setItem("userInfor", jsonString);
    toast.success("Login successful");

    return { userInf, accessToken: "YOUR_ACCESS_TOKEN" }; // Trả về thông tin người dùng và accessToken (giả định)
  } else {
    toast.error("Login fail");
    throw new Error("User not found");
  }
});

export const signout = createAsyncThunk("auth/signout", async () => {
  // Thực hiện xử lý logout
  // Xóa thông tin người dùng và accessToken khỏi Local Storage
  localStorage.removeItem("userInfor");

  return {}; // Trả về một object trống hoặc giá trị gì đó cho trường hợp cần thiết
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInf = action.payload.userInf;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.userInf = action.payload.userInf;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signout.pending, (state) => {
        state.loading = true;
      })
      .addCase(signout.fulfilled, (state) => {
        state.loading = false;
        state.userInf = "";
        state.accessToken = "";
      })
      .addCase(signout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
