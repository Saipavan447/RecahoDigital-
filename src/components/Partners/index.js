import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

class Partners extends Component {
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
        <h1 className="client-heading">Our Partners</h1>
        <Slider {...settings}>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-Jahez.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-Just-eat.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-careem.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-deliveroo.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-dotpe.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-dunzo.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-instamojo.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-magicpin.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-payu.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-radyes.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-razorpay.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-reelo.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-swiggy.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-talabat.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-thrive.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-ubereats.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-upi.jpg"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-upsale.jpgs"
              alt="lazzetti"
            />
          </div>
          <div>
            <img
              className="clients-images"
              src="https://tmbill.com/img/Partners/tmbill-zomato.jpg"
              alt="lazzetti"
            />
          </div>
        </Slider>
      </div>
    )
  }
}
export default Partners
