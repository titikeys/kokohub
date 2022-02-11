import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./testimonial.css";
const Testimonial = () => {
  return (
    <Carousel
      id="Testimonials"
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <img src="" alt="img1" />
        <div className="myCarousel">
          <h3>Shirley Fultzer</h3>
          <h4>MD</h4>
          <p>
            I was looking for a great data analyst..and i was referred to the
            Ceo of Pk tech and design..all my data was analysed perfectly..i
            couldn't have asked for a better Data analyst..thanks Pk tech and
            design
          </p>
        </div>
      </div>

      <div>
        <img src="" alt="img2" />

        <div className="myCarousel">
          <h3>Danielle Kay</h3>
          <h4>Designer</h4>
          <p>
            The simple and intuitive design makes it easy for me use. I highly
            recommend Pk tech and design to my peers.
          </p>
        </div>
      </div>

      <div>
        <img src="" alt="img3" />

        <div className="myCarousel">
          <h3>katrina</h3>
          <h4>Designer</h4>
          <p>
            I am yet to see the Ceo of this great company...but what interest me
            is his excellent work delivery and transparency..i needed a website
            and it was done perfectly
          </p>
        </div>
      </div>
      <div>
        <img src="" alt="img3" />

        <div className="myCarousel">
          <h3>Rev George</h3>
          <h4>Ceo AgroSolution</h4>
          <p>
            I gave him my website which was previously messed up by more than
            three developers and he fixed it in 24 hours and even gave me a
            discount. very excellent and trust worthy
          </p>
        </div>
      </div>
      <div>
        <img src="" alt="img5" />

        <div className="myCarousel">
          <h3>Theo fish</h3>
          <h4>Ceo</h4>
          <p>
            pk tech and design brings inner joy and peace.. i so much enjoy the
            trust and transparency i have experienced with this great company..
            i couldn't have asked for a better delivery..thanks to the Ceo of
            this great company
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Testimonial;
