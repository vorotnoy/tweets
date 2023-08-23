import { createSlice } from "@reduxjs/toolkit";
import { getListTweets, addFollower } from "./tweetsOperation";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    tweets: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListTweets.fulfilled, (state, { payload }) => {
        state.tweets = payload;
      })
      .addCase(addFollower.fulfilled, (state, { payload }) => {
        console.log(payload)
        return {
          tweets: state.tweets.map(item => {
            return item.id !== payload.id ? item : payload;
          }),
        };
      })
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});
export default tweetSlice.reducer;
