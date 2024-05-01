import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
export const getData = createAsyncThunk("getData", async () => {
    const res = await axios.get("https://reqres.in/api/users?page=2")
    return res?.data?.data
})
const initialState = {
    users: [],
    loading: false,
    error: false
}
const fetchDataSlice = createSlice({
    name: "fetchData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.loading = true;
                state.error = false; // Reset error state on pending
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getData.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    },

})

export default fetchDataSlice.reducer