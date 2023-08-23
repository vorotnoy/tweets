import s from "./TweetsList.module.scss";
import { Tweet } from "../Tweet/Tweet";
import { selectlistTweet } from "../../redux/tweetsSelector";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

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
      <ul className={s.tweetsList}>
        {array &&
          currentArray.map((item) => (
            <li key={item.id}>
              <Tweet data={item} />
            </li>
          ))}
      </ul>
      {array && curPage * itemOnPage < array.length && (
        <button onClick={loadMore} className={s.load}>
          Load more
        </button>
      )}
    </section>
  );
};
