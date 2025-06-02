import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload);
    },
    deleteBlog: (state, action) => {
      return state.filter((blog, index) => index !== action.payload);
    },
    editBlog: (state, action) => {
      const { index, newData } = action.payload;
      state[index] = newData;
    }
  },
});

export const { addBlog, deleteBlog, editBlog } = blogSlice.actions;
export default blogSlice.reducer;
