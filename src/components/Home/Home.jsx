import s from './Home.module.scss'

export const Home =()=>{
    return (
        <section className={s.wrapper}>
        <h1 className={s.title}>Easy Twitter</h1>
        <p className={s.desc}>
          Welcome to Easy Twitter! This is a simple social networking service
          where you can follow the pages you are interested in!
        </p>
        <button type="button" className={s.button}><Link to='/tweets'>Go tweets</Link></button>
      </section>
    )
}