import mymemoimg from "../../assets/mymemo-img.jpg"
import './Home.scss'
const Home = () => {
  const handleClickChannel = () => {
    window.open('https://t.me/myMemo7', '_blank')
  }
  const handleClickAcc = () => {
    window.open('https://t.me/Kirub_el7', '_blank')
  }
  return (
    <div className="Home">
      {/* <img src={mymemoimg}/> */}
      <h1>my memo</h1>
      <p>
      Step into my personal space where I share my stuffs.
      </p>
      <button 
        className="btn-myaccount"
        onClick={handleClickAcc}>
        Reach me
      </button> 
      <button 
        className="btn-mytelegram"
        onClick={handleClickChannel}>
        Telegram
      </button>

    </div>
  )
};

export default Home;