import './index.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Popup from '../Popup'

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar-container1">
      <div className="contact-email">
        <p className="email">
          <EmailOutlinedIcon fontSize="small" className="contact-icons" />
          contact@tmbill.com
        </p>
        <p className="contact-phone">
          <LocalPhoneOutlinedIcon fontSize="small" className="contact-icons" />
          +91 9075-444-888
        </p>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/TMBill/" className="social-icons">
          <FacebookOutlinedIcon />
        </a>
        <a href="https://www.instagram.com/TMBillApp/" className="social-icons">
          <InstagramIcon />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLOsLk94aH-q7lhMh7GB8gXP6XeJw6nIZJ"
          className="social-icons"
        >
          <YouTubeIcon />
        </a>
        <a
          href="https://www.linkedin.com/company/tmbill/"
          className="social-icons"
        >
          <LinkedInIcon />
        </a>
        <Popup />
      </div>
    </div>
    <div className="navbar-container2">
      <div className="nav-image">
        <img
          src="https://tmbill.com/img/tmbill-logo.svg"
          alt="tmbill-logo"
          className="home-image"
        />
      </div>
      <div className="nav-products">
        <p className="home-section">Home</p>
        <p className="home-sections">Products</p>
        <div className="dropdown">
          <button type="button" className="dropdown-sections">
            Outlet Type <KeyboardArrowDownIcon />
          </button>
          <div className="dropdown-options">
            <a href="#/action-1">Dashboard</a>
            <a href="#/action-1">Setting</a>
            <a href="#/action-1">Logout</a>
          </div>
        </div>
        <div className="dropdown">
          <button type="button" className="dropdown-sections">
            Why TMBill <KeyboardArrowDownIcon />
          </button>
          <div className="dropdown-options">
            <a href="#/action-1">Dashboard</a>
            <a href="#/action-1">Setting</a>
            <a href="#/action-1">Logout</a>
          </div>
        </div>
        <p className="home-sections">Our Presence</p>
        <p className="home-sections">Become A Partner</p>
        <p className="home-sections">Contact us</p>
      </div>
    </div>
  </div>
)
export default Navbar
