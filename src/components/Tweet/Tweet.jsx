import s from "./Tweet.module.scss";
import bckgrd from "../../assets/images/bckgrd.png";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFollower } from "../../redux/tweetsOperation";

export const Tweet = ({ data }) => {
  const dispatch = useDispatch()
  if (!data) return;
  const [follow, setFollow] = useState(data.follow);
  const [followers, setFollowers] = useState(data.followers);

  const updateFollowing = async() => {
    const setFollowing = follow ? followers - 1 : followers + 1;
    setFollowers(setFollowing);
    await setFollow(!follow);

    const updateTweet = {
      ...data,
      followers:setFollowing,
      follow:(!follow)
    }
    await dispatch(addFollower(updateTweet))
  };

  return (
    <section className={s.wrapper}>
      <div className={s.middleline}></div>
      <img src={data.avatar} className={s.avatar} alt={data.name} />
      <div className={s.circle}></div>
      <img src={logo} className={s.logo} />
      <img src={bckgrd} className={s.bckgrd} />
      <p className={s.tweets}>{data.tweets} tweets</p>
      <p className={s.followers}>{followers} Followers</p>
      <button
        className={follow ? s.btn_follow : s.btn_nofollow}
        onClick={updateFollowing}
      >
        {follow ? "Following" : "Follow"}
      </button>
    </section>
  );
};
