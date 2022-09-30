import './index.css'

const Registration = () => (
  <div className="registration-container">
    <div className="registration-description">
      <h1 className="registration-heading">
        Reopen Restaurants <br />
        with
        <span className="green-heading">Technology!</span>
      </h1>
      <p>Unlock Your Restaurant With Digital Ordering !</p>
      <div className="registration-buttons-container">
        <button className="demo button" type="button">
          Take Free Demo
        </button>
        <button className="read button" type="button">
          Read Our Story
        </button>
      </div>
    </div>
    <img
      className="registration-image"
      src="https://tmbill.com/img/tmbill_all_in_one_restaurant_pos.png"
      alt="process"
    />
  </div>
)
export default Registration
