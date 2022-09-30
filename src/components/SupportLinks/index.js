import './index.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import VisibilityIcon from '@mui/icons-material/Visibility'
import PlaceIcon from '@mui/icons-material/Place'
import EmailIcon from '@mui/icons-material/Email'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'

const SupportLinks = () => (
  <div className="support-links-container">
    <div className="support-links-description">
      <img
        src="https://tmbill.com/img/tmbill-logo.svg"
        alt="tmbill-logo"
        className="logo-image"
      />
      <p className="support-links-paragraph">
        TMBill is a leading cloud-based <br /> end to end technology solutions
        <br />
        for the Restaurants, Bar, Café,
        <br /> QSR, Ice-cream Shop, Bakery, and
        <br /> Cake Shop.TMBill helps all types
        <br /> of food businesses, from a <br /> standalone food outlet to a
        large <br /> food chain.
      </p>
      <div className="support-links-social-media">
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
      </div>
    </div>
    <div className="quick-links-container">
      <h1 className="quick-links-heading">Quick Links</h1>
      <div className="quick-link-descriptions">
        <ul className="quick-link-description-container">
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            TMBill Supported JRE.
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            Why TMBill?
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon /> Become a Reseller
            <span className="red">New!</span>
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            TMBill Software Agreement.
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            <span>
              Software Training
              <span className="green">TMBill Video Tutorials</span>
            </span>
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon /> Careers
            <span className="green">Hiring Apply Now</span>
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            <span>
              Is Cloud Kitchen a New Future of <br /> Food Industry?
              <span className="red">
                MustRead
                <VisibilityIcon />
              </span>
            </span>
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            <span>
              Unlock Your Restaurant With <br /> Digital Ordering !
              <span className="must-read red">
                MustRead
                <VisibilityIcon />
              </span>
            </span>
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            Create Your Online Ordering Platform
          </li>
        </ul>
      </div>
    </div>
    <div className="quick-links-container">
      <h1 className="quick-links-heading">TMBILL PRODUCTS</h1>
      <div className="quick-link-descriptions">
        <ul className="quick-link-description-container">
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            TMBill Pacific Desktop POS
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            <span>
              TMBill Pacific Desktop POS- <br /> Terminal (Multi Users)(24th
              <br /> June 2021)
              <span className="green">Download</span>
            </span>
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            <span className="extra">
              TMBill Atlantic Desktop
              <br /> <span className="blue">New on Cloud POS!</span>
              <span className="red"> Atlantic POS version 6.1.190</span>
              <span className="green">Latest 13th September 2022</span>
            </span>
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            <span>
              TMBill Atlantic Desktop POS-
              <br /> Terminal (Multi Users)(29th
              <br /> June 2021) <span className="green">Download</span>
            </span>
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            <span>
              TMBill Atlantic Desktop KDS <br />
              (5th Jan 2022) <br />
              <span className="green">Download Desktop KDS</span>
            </span>
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            <span>
              TMBill Atlantic CSK App
              <br /> <span className="green">Download</span>
              <span className="red">CSK App</span>
              <span className="green">18th Aug 2022</span>
            </span>
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            <span>
              TMBill Atlantic Mobile POS App
              <br /> <span className="green">Download App</span>
              <span className="red">Atlantic POS</span>
            </span>
          </li>
          <li className="quick-links">
            <KeyboardArrowRightIcon />
            <span>
              Customer Loyalty App
              <br /> Feedback Legend
              <span className="blue">New on Cloud POS!</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div className="quick-links-container">
      <h1 className="quick-links-heading">Head Office</h1>
      <div className="head-office-descriptions">
        <ul className="head-office-description-container">
          <li className="head-office">
            <PlaceIcon fontSize="small" className="head-office-icons" />
            TMBill Office No.434, 4th Floor Solitaire <br />
            Business Hub Opposite Ambience Hotel,
            <br /> Near Kalewadi Chowk, Wakad, Pimpri-
            <br />
            Chinchwad, Maharashtra 411057
          </li>
          <li className="head-office">
            <EmailIcon fontSize="small" className="head-office-icons" />
            contact@tmbill.com |<br /> support@tmbill.com
          </li>
          <li className="head-office">
            <SupportAgentIcon fontSize="small" className="head-office-icons" />
            <span>
              Customer Support-Training / Installation <br /> / Demo
              <span className="green-contact">Harshad</span>
              :(+91)9075-17-2224
              <br /> <span className="green-contact">Basit</span>
              :(+91)7774-03-5601 <br />
              <span className="green-contact">Deepa</span> :(+91)8856-90-8847
              <br /> <span className="green-contact">Ankita</span>
              :(+91)8625-09-8847
            </span>
          </li>
          <li className="head-office">
            <PhoneInTalkIcon fontSize="small" className="head-office-icons" />
            Sales / Installation / Demo <br /> +91 9075-444-888 / +91
            9322-824-410
          </li>
        </ul>
      </div>
    </div>
  </div>
)
export default SupportLinks
