import { createAsyncThunk } from '@reduxjs/toolkit';
import {getListTweetsApi, addFollowerApi} from '../services/API'

export const getListTweets = createAsyncThunk(
    'tweet/getListTweets',
    async (_, { getState, rejectWithValue }) => {
      try {
        const getListOfTweets = await getListTweetsApi();
        return getListOfTweets;
      } catch (error) {
        rejectWithValue(error.message);
      }
    }
  );

  export const addFollower = createAsyncThunk(
    'tweet/addfollower',
    async (data, { getState, rejectWithValue }) => {
      try {
        const addFavorite = await addFollowerApi(data);

        return addFavorite;
      } catch (error) {
        rejectWithValue(error.message);
      }
    }
  );