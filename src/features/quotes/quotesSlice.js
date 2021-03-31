import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchQuotes = createAsyncThunk(
  "quotes/fetchQuotes",
  async (token) => {
    const response = await fetch(`${BASE_URI}/appointments`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return { quotes: data };
  }
);

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    filter: [],
  },
  reducers: {
    filterByCategory: (state, action) => {
      let { category } = action.payload;
      return {
        ...state,
        filter: state.items.filter(
          (item) => item.category === action.payload.category
        ),
        currentFilterCategory: category,
      };
    },
    filterByName: (state, action) => {
      let { name } = action.payload;
      let dataFilter = state.items.filter((item) =>
        item.name.toLowerCase().includes(name)
      );
      return {
        ...state,
        filter:
          name.length > 0
            ? dataFilter
            : state.items.filter(
                (item) => item.category === state.currentFilterCategory
              ),
        search: name.length > 0 ? true : false,
      };
    },
    backFilterProduct: (state, action) => {
      return {
        ...state,
        filter: state.items.filter(
          (item) => item.category === state.currentFilterCategory
        ),
        search: false,
      };
    },
  },
  extraReducers: {
    [fetchQuotes.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchQuotes.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.quotes;
      console.log(state.items);
      /*state.filter = state.items.filter(
        (item) => item.category === state.currentFilterCategory
      );*/
    },
    [fetchQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

/*export const { filterByCategory, filterByName ,backFilterProduct} = productsSlice.actions;*/
export default quotesSlice.reducer;
