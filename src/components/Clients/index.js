import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

class Clients extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    }
    return (
      <div className="client-container">
        <h1 className="client-heading">Our Clients</h1>
        <Slider {...settings}>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_lazzetti.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_pokketcafe.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_balandosa.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_bombaykulfi.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_burgerlounge.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_chanderlok.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_cheesy_chunks.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_chouringhee.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_dfc.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_instabite.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_jal-ejal.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_onebite.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_sagar_ratna.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_shree_rathnam.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_southindian.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_swadist.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/clients/tmbill_powered_by_swagath.jpg"
              alt="lazzetti"
            />
          </div>
        </Slider>
      </div>
    )
  }
}
export default Clients
