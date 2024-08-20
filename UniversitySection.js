import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import './UniversitySection.css'; // Import custom CSS

const UniversitySection = () => {
  const logos = [
    "https://suesyslearning.com/storage/admin/university/logos/YNGbTBRk8ps6N1mOtcSVn1CM8tf34kSkSBDz5GYd.png",

    "https://suesyslearning.com/storage/admin/university/logos/k4trkGAO7WflTuzUVOcsyX1LSIr1KV8TnJ6YWwqK.png",

    "https://suesyslearning.com/storage/admin/university/logos/a5ERtnsRduHt7vfWnUecIZuF6JvIU78uwHyvHNGk.png",

    "https://suesyslearning.com/storage/admin/university/logos/4dxunqpwfPtxSnxGMpqLLqdg0SEbPfA1HKZ3oCb2.png",

    "https://suesyslearning.com/storage/admin/university/logos/jFFVQCAtdOfMRnsYVGEdt12RWG5MSzKurVi2MC3Y.png",

    "https://suesyslearning.com/storage/admin/university/logos/C36E0KYM1w2RwKTS4rKwMqRXC1NoYKHr3WIE0Yd8.png",

    "https://suesyslearning.com/storage/admin/university/logos/uT5po7YwErQKG3CG2p5NvH8phTce1WAUcsSFjch7.png",

    "https://suesyslearning.com/storage/admin/university/logos/qcADmDbCApw3ifJPFnpBYIVaBtAGlvSXU5D3VxKX.png",

    "https://suesyslearning.com/storage/admin/university/logos/P99nmaggWiJUUOdqJ45dzFbFx101GFoHmOJN72SR.png",

    "https://suesyslearning.com/storage/admin/university/logos/iaam7mk1qfN8Bl9Qk8E9PdleVQUYHblYFcqJh7Qt.png"
  ];
  
  return (
    <section className="ptb-40 university-section">
      <div className="container">
        <div className="text-center mb-4" style={{ fontWeight: 500  }}>
          <h4>Worldwide top universities students enrolled with us</h4>
        </div>
        <div className="row align-items-center" style={{marginTop:50}}>
          <OwlCarousel className="owl-theme" loop margin={10} nav autoplay autoplayTimeout={3000} responsive={{
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 5
            }
          }}>
            {logos.map((logo, index) => (
              <div className="item" key={index}>
                <img src={logo} alt={`University logo ${index + 1}`} className="university-logo" />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;
