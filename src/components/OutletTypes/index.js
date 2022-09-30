import './index.css'

const OutletTypes = () => (
  <div className="outlet-types-container">
    <h1 className="outlet-heading">Outlet Types</h1>
    <p className="outlet-paragraph">
      TMBill’s Restaurant Management POS is built for all types of restaurant
      sizes and formats from single outlets to 100+ outlet chains. Select your
      format
      <br />
      to see how TMBill can help you run better.
    </p>
    <div className="outlet-types-box-containers">
      <div className="outlet-types-box-containers1">
        <div className="outlet-box">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_qsr.png"
            alt="outlettmbill"
            className="outlet-image"
          />
          <p className="outlet-box-description">QSR</p>
        </div>
        <div className="outlet-box">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_dine_in.png"
            alt="outlettmbill"
            className="outlet-image"
          />
          <p className="outlet-box-description">Dine-in</p>
        </div>
        <div className="outlet-box">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_cafe.png"
            alt="outlettmbill"
            className="outlet-image"
          />
          <p className="outlet-box-description">Cafes</p>
        </div>
        <div className="outlet-box">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_qsr.png"
            alt="outlettmbill"
            className="outlet-image"
          />
          <p className="outlet-box-description">Cloud Kitchens</p>
        </div>
      </div>
      <div className="outlet-types-box-containers2">
        <div className="outlet-box">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_food_truck.png"
            alt="outlettmbill"
            className="outlet-image"
          />
          <p className="outlet-box-description">Food Trucks</p>
        </div>
        <div className="outlet-box">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_Bakeries.png"
            alt="outlettmbill"
            className="outlet-image"
          />
          <p className="outlet-box-description">Bakeries</p>
        </div>
        <div className="outlet-box">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_ice_cream.png"
            alt="outlettmbill"
            className="outlet-image"
          />
          <p className="outlet-box-description">Ice Cream</p>
        </div>
        <div className="outlet-box">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_Pubs_bars.png"
            alt="outlettmbill"
            className="outlet-image"
          />
          <p className="outlet-box-description">Pubs & bars</p>
        </div>
      </div>
    </div>
  </div>
)
export default OutletTypes
