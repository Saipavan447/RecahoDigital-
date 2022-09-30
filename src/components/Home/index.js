import './index.css'
import Navbar from '../Navbar'
import Registration from '../Registration'
import OperatingSystem from '../OperatingSystem'
import Clients from '../Clients'
import Sales from '../Sales'
import Partners from '../Partners'
import OutletTypes from '../OutletTypes'
import Media from '../Media'
import HappyClients from '../HappyClients'
import TakeADemo from '../TakeADemo'
import RequestCall from '../RequestCall'
import SupportLinks from '../SupportLinks'
import WhereAreWeNow from '../WhereAreWeNow'

const Home = () => (
  <div>
    <Navbar />
    <Registration />
    <hr className="hr-line" />
    <OperatingSystem />
    <hr className="hr-line" />
    <Clients />
    <Sales />
    <Partners />
    <OutletTypes />
    <Media />
    <HappyClients />
    <TakeADemo />
    <RequestCall />
    <SupportLinks />
    <WhereAreWeNow />
  </div>
)
export default Home
