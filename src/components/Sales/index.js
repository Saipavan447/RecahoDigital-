import './index.css'

const Sales = () => (
  <div className="sales-container">
    <div className="sales-container-image">
      <div className="sales-description-container1">
        <h1 className="sales-heading">
          Company <br />
          highlights
        </h1>
        <p className="sales-paragraph1">Powering 5000+ Restaurants</p>
      </div>
      <div className="sales-description-container">
        <img
          src="https://tmbill.com/img/facts/tmbill-customer.png"
          alt="tmbill-customer"
          className="sales-image"
        />
        <h1 className="sales-heading">5000+</h1>
        <p className="sales-paragraph">Happy Restaurants</p>
      </div>
      <div className="sales-description-container">
        <img
          src="https://tmbill.com/img/facts/tmbill-contry.png"
          alt="tmbill-customer"
          className="sales-image"
        />
        <h1 className="sales-heading">21+</h1>
        <p className="sales-paragraph">Countries</p>
      </div>
      <div className="sales-description-container">
        <img
          src="https://tmbill.com/img/facts/tmbill-shopping.png"
          alt="tmbill-customer"
          className="sales-image"
        />
        <h1 className="sales-heading">4,50,000</h1>
        <p className="sales-paragraph">Daily Orders World Wide</p>
      </div>
      <div className="sales-description-container">
        <img
          src="https://tmbill.com/img/facts/tmbill-brand.png"
          alt="tmbill-customer"
          className="sales-image"
        />
        <h1 className="sales-heading">32</h1>
        <p className="sales-paragraph">Brands</p>
      </div>
    </div>
  </div>
)
export default Sales
