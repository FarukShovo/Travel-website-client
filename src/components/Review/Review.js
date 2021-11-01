import React from "react";
import "./Review.css";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <section class="review" id="review">
        <h1 class="heading">
          <span>r</span>
          <span>e</span>
          <span>v</span>
          <span>i</span>
          <span>e</span>
          <span>w</span>
          <span>s</span>
        </h1>

        <div class="swiper-container review-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="box">
                <img src="https://scontent.fdac91-1.fna.fbcdn.net/v/t1.6435-1/c81.137.311.310a/p480x480/156962895_1488508828146697_3530775731125074458_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFvsYSkgAOsRJ9U2x_IX4yhvSdoHVG-qKu9J2gdUb6oq72ycAkR8iCgBfPSE1OBzCscfnxtJO0PAYuIRrjW5fLd&_nc_ohc=Lp-pywpmhVMAX_z7PGM&tn=gbjOcL6jlUXprL4s&_nc_ht=scontent.fdac91-1.fna&oh=7c564f7f2ae59005badb1f42fbd4bb0b&oe=61A52843" alt="" />
                <h3>Ehsanul Islam</h3>
                <p>its really great service ....</p>
                <div class="stars">
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="box">
                <img src="https://scontent.fdac91-1.fna.fbcdn.net/v/t39.30808-1/c0.13.320.320a/p320x320/242360616_4359503844169452_1251754321581718837_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeH6GvEd3XL0klQn5ImjVKBvsq2VaewV0r6yrZVp7BXSvuUTZhs-xzVhMlRXAJPPywpfyQUPGdOtETBRjqu0aQLj&_nc_ohc=F0F6Pei06LwAX_P_-Y6&_nc_ht=scontent.fdac91-1.fna&oh=35fe077cbfeda246c8d5ff5a5c36bde8&oe=61848B25" alt="" />
                <h3>Ratul Khan</h3>
                <p>Wow it was awesome services . thank you for make me happy!!</p>
                <div class="stars">
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="box">
                <img src="https://scontent.fdac91-1.fna.fbcdn.net/v/t39.30808-6/247134891_2261336167349609_887113790936074580_n.png?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeH7iebYx8VqY9TCiHVcn9bQP3FPtU3tVeo_cU-1Te1V6k7PKFV3u3C9Ft3EAggYNW7h2VDCOphR01v4dhwfEeAv&_nc_ohc=JRfVnEmMYlkAX9pgWnq&tn=gbjOcL6jlUXprL4s&_nc_ht=scontent.fdac91-1.fna&oh=1fae3e7893e8cb9ba76fde1c526a9b1a&oe=618439BF" alt="" />
                <h3>Shakib al hasan</h3>
                <p>Yay......I wish I could go again and again...</p>
                <div class="stars">
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="box">
                <img src="data:image/jpeg;base64,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" alt="" />
                <h3>Zack ma</h3>
                <p>Excellent! Mind blowing.....just out of the world.......</p>
                <div class="stars">
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
