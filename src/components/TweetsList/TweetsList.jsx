import s from "./TweetsList.module.scss";
import { Tweet } from "../Tweet/Tweet";
import { selectlistTweet } from "../../redux/tweetsSelector";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TweetsList = () => {
  const itemOnPage = 3;
  const [curPage, setCurPage] = useState(1);
  const array = useSelector(selectlistTweet);
  const loadMore = async () => {
    setCurPage(curPage + 1);
  };

  const currentArray = array.slice(0, curPage * itemOnPage);

  return (
    <section className={s.wrapper}>
      <button type="button" className={s.btn_back}>
      <Link to="/" className={s.link}>Back</Link>
      </button>
      <ul className={s.tweetsList}>
        {array &&
          currentArray.map((item) => (
            <li key={item.id}>
              <Tweet data={item} />
            </li>
          ))}
      </ul>
      {array && curPage * itemOnPage < array.length && (
        <button onClick={loadMore} className={s.btn_load}>
          Load more
        </button>
      )}
    </section>
  );
};
