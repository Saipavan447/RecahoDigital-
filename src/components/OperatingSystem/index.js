import './index.css'

const OperatingSystem = () => (
  <div className="operating-system-container">
    <div className="operating-system-inside-container">
      <div className="operating-system-image">
        <img
          src="https://tmbill.com/img/tmbill_restaurant_operating_system.png"
          alt="operating"
          className="operating-system-img"
        />
      </div>
      <div className="operating-system-description-container">
        <h1 className="operating-system-heading">
          Restaurant Operating System
        </h1>
        <p className="operating-system-description">
          TMBill is a leading cloud-based end-to-end technology solutions for
          <br />
          the Restaurants, Bars, Cafés, QSRs, Ice-cream Shops, Bakeries, and
          Cake
          <br /> Shops.
        </p>
        <p className="operating-system-description">
          TMBill helps all types of food businesses, from a standalone food
          outlets <br />
          to a large food chain, manage functions like billing, QR Code Ordering
          <br />
          Platform, CRM, Customer Loyalty, Aggregators integrations, Analytics,
          <br />
          Inventory, Recipe, and Wastage Management, Centralized Menu
          <br />
          Management, Vendor Management and more. We have successfully
          <br />
          registered a global presence, with more than 5000+ customers in over
          <br />
          350+ cities and 21+ countries.
        </p>

        <p className="operating-system-description">
          We are the first company to provide a complete online cloud POS <br />
          solution for restaurants on Desktop and Mobile Devices.
        </p>
        <div className="payments-os">
          <div className="integration">
            <h1 className="payments-os-heading">Integration</h1>
            <div className="integration-container">
              <img
                src="https://tmbill.com/img/integration/tmbill_swiggy_integration.png"
                alt="swiggy"
                className="payment-os-image"
              />
              <img
                src="https://tmbill.com/img/integration/tmbill_zomato_integration.png"
                alt="zomato"
                className="payment-os-image"
              />
              <img
                src="https://tmbill.com/img/integration/tmbill_dunzo_integration.png"
                alt="dunzo"
                className="payment-os-image"
              />
              <img
                src="https://tmbill.com/img/integration/tmbill_googlepay_integration.png"
                alt="googlepay"
                className="payment-os-image"
              />
              <img
                src="https://tmbill.com/img/integration/tmbill_paytm_integration.png"
                alt="paytm"
                className="payment-os-image"
              />
            </div>
          </div>
          <div className="works-on">
            <h1 className="payments-os-heading">Works on</h1>
            <div className="works-on-container">
              <img
                src="https://tmbill.com/img/integration/tmbill_works_on_android.png"
                alt="android"
                className="payment-os-image"
              />
              <img
                src="https://tmbill.com/img/integration/tmbill_works_on_apple.png"
                alt="apple"
                className="payment-os-image"
              />
              <img
                src="https://tmbill.com/img/integration/tmbill_works_on_windows.png"
                alt="windows"
                className="payment-os-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="operating-system-processing">
      <div className="operating-system-processing-containers">
        <img
          src="https://tmbill.com/img/outlet/tmbill_admin_control.png"
          alt="tmbill_admin_control"
          className="processing-image"
        />
        <h1 className="heading-process">
          Paperless Menu with <br /> Ordering Platform
        </h1>
      </div>
      <div className="operating-system-processing-containers">
        <img
          src="https://tmbill.com/img/outlet/tmbill_deskop_pos_auto_sync.png"
          alt="tmbill_deskop_pos_auto_sync"
          className="processing-image"
        />
        <h1 className="heading-process">
          Desktop and Mobile POS <br /> with Cloud Sync
        </h1>
      </div>
      <div className="operating-system-processing-containers">
        <img
          src="https://tmbill.com/img/outlet/tmbill_Billing_and_Inventory.png"
          alt="tmbill_Billing_and_Inventory"
          className="processing-image"
        />
        <h1 className="heading-process">
          Inventory and Stock <br /> Management
        </h1>
      </div>
      <div className="operating-system-processing-containers">
        <img
          src="https://tmbill.com/img/outlet/tmbill_support_24_by_7.png"
          alt="tmbill_support_24_by_7"
          className="processing-image"
        />
        <h1 className="heading-process">24 X 7 Support</h1>
      </div>
    </div>
  </div>
)
export default OperatingSystem
