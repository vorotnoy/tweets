import s from "./Tweet.module.scss";
import bckgrd from "../../assets/images/bckgrd.png";
import logo from "../../assets/images/logo.png";

export const Tweet = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.middleline}></div>
      <img src="https://xsgames.co/randomusers/avatar.php?g=male" className={s.avatar}/>
      <div className={s.circle}></div>
      <img src={logo} className={s.logo} />
      <img src={bckgrd} className={s.bckgrd} />
      <p className={s.tweets}> 777 tweets</p>      
      <p className={s.followers}>100,500 Followers</p>
      <button type="button" className={s.btn_nofollow}>Follow</button>
    </section>
  );
};
