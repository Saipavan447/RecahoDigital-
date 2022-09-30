import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

class HappyClients extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    }
    return (
      <div className="happy-clients-container">
        <div className="happy-clients-heading-container">
          <h1 className="happy-clients-heading">Happy Clients</h1>
        </div>
        <div className="happy-clients-carousel">
          <Slider {...settings}>
            <div className="slider-container">
              <img
                className="happy-clients-images"
                src="https://tmbill.com/img/happy-client/tmbill_one_bite.jpg"
                alt="lazzetti"
              />
              <p className="slider-description">
                I would definitely recommend this software to all the store /
                outlets / restaurants as <br /> we are already using it in 100+
                outlets. TMBill team is so co-operative & provides <br />
                extremely satisfying services.
              </p>
              <p className="slider-name">MR.Abhishek</p>
              <p className="slider-founder">Co-Founder</p>
              <p className="slider-bite">OneBite</p>
            </div>
            <div className="slider-container">
              <img
                className="happy-clients-images"
                src="https://tmbill.com/img/happy-client/tmbill_south_indian.jpg"
                alt="lazzetti"
              />
              <p className="slider-description">
                We use TMBill as our POS partner, its flexible to use. We are
                happy to work with <br /> TMBill because they work enormously
                and are available 24x7 whenever we need <br />
                support even if we are in Europe and they are operating from
                India.
              </p>
              <p className="slider-name">Kannathasan Pandian</p>
              <p className="slider-founder">Director & Founder </p>
              <p className="slider-bite">South Indian (Denmark)</p>
            </div>
            <div className="slider-container">
              <img
                className="happy-clients-images"
                src="https://tmbill.com/img/happy-client/tmbill_the_taste_of_india.jpg"
                alt="lazzetti"
              />
              <p className="slider-description">
                Thank you Rahil and team. Your software is very useful to us
                moreover your 24 <br /> hours team support. I am really
                recommend this software to others to use and <br /> good price.
                Keep going on guys good luck.
              </p>
              <p className="slider-name">Rejoice Thomas</p>
              <p className="slider-founder">The Taste of India (M.D.),</p>
              <p className="slider-bite">Auckland, New Zealand - 1042.</p>
            </div>
            <div className="slider-container">
              <img
                className="happy-clients-images"
                src="https://tmbill.com/img/happy-client/tmbill_funky_buddha.jpg"
                alt="lazzetti"
              />
              <p className="slider-description">
                Best and easy software to work with and the support team are
                also very helpful <br /> and they give support everyone you can
                call them If it had option for 10 star I would <br />
                give 10 stars for TMBill billing software.
              </p>
              <p className="slider-name">Tushar Shrestha</p>
              <p className="slider-founder">Funky Buddha (Founder),</p>
              <p className="slider-bite"> Dimapur, Nagaland - 797112.</p>
            </div>
            <div className="slider-container">
              <img
                className="happy-clients-images"
                src="https://tmbill.com/img/happy-client/tmbill_doha_qatar.jpg"
                alt="lazzetti"
              />
              <p className="slider-description">
                Different suites of apps which makes operation of every F&B
                outlets easy. Efficient <br />
                support team making integrations possible. Economical and
                convenient solution <br /> found by our team after a good
                research among POS apps.
              </p>
              <p className="slider-name">Ahamed Ihjas</p>
              <p className="slider-founder">Founder of</p>
              <p className="slider-bite">Maraheb Mandi (Doha Qatar)</p>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
export default HappyClients
