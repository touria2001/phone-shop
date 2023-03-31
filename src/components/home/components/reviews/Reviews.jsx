import axios from "axios";
import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { GET_REVIEWS } from "../../../../context/actions";
import { useProductContext } from "../../../../context/CustomHookContext";
const API_URL = " http://localhost:3000/reviews";

export default function Reviews() {
  const [state, dispatch] = useProductContext();

  useEffect(() => {
    const getReviews = () => {
      axios
        .get(`${API_URL}`)
        .then((data) => dispatch({ type: GET_REVIEWS, payload: data.data }))
        .catch((error) => console.log(error));
    };
    getReviews();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: state.reviews.length },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];
  if (state.reviews.length === 0) return <></>;
  return (
    <>
      <section className="section testimonial" id="testimonial">
        <div className="testimonial__container">
          <div className="glide" id="glide_4">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <Carousel
                  breakPoints={breakPoints}
                  isInfinite={true}
                  enableAutoPlay={true}
                  autoPlaySpeed={5000}
                  enableSwipe={true}
                  transitionMs={1000}
                  disableArrowsOnEnd={false}
                  showArrows={true}
                  itemsToScroll={1}
                  tiltEasing="ease-out"
                  tiltAngleX={10}
                  tiltAngleY={0}
                >
                  
                  {state.reviews.map((review, index) => (
                    <li key={index} className="glide__slide">
                      
                      <div className="testimonial__box">
                        
                        <div className="client__image">
                          
                          <img src={review.image} alt={review.name} />
                        </div>
                        <p>{review.text_review}</p>
                        <div className="client__info">
                          
                          <h3>{review.name}</h3> <span>{review.job}</span>
                          <p>{review.review_text}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </Carousel>
              </ul>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
}
