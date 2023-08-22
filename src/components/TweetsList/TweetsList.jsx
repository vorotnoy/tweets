import s from "./TweetsList.module.scss";
import { Tweet } from "../Tweet/Tweet";

export const TweetsList = () => {
  return (
    <section className={s.wrapper}>
      <Tweet />
    </section>
  );
};
