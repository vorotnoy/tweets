import { TweetsList } from "../TweetsList/TweetsList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListTweets } from "../../redux/tweetsOperation";


export const TweetsPageWrap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListTweets());
  }, []);


  return (
    <>
      <TweetsList />
    </>
  );
};
