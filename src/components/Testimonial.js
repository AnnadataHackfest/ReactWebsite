import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';

const Testimonial = () => {
  return (
    <section class="pn_reviews my-5">
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1 class="text-center pb-5">Reviews of our valuable users</h1>
        </div>

        <div class="col-md-12 col-lg-4">
            <div class="pn_testimonial_box mt-4">
                <p class="text-justify">What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.
</p>

                <div class="row pt-3">
                    <div class="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_1.svg" class="border-radius-12 float-right" alt="client image" /> <span> Charles Boyle </span> </div>
                    <div class="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img class="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="client stars image" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 col-lg-4">
            <div class="pn_testimonial_box mt-4">
                <p class="text-justify">What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.
</p>
                <div class="row pt-3">
                    <div class="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_2.svg" class="border-radius-12 float-right" alt="client image" /> <span> Gina Lannety </span> </div>
                    <div class="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img class="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="client stars image" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 col-lg-4">
            <div class="pn_testimonial_box mt-4">
                <p class="text-justify">What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.
</p>
                <div class="row pt-3">
                    <div class="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_3.svg" class="border-radius-12 float-right" alt="client image" /> <span> Dug Judey </span> </div>
                    <div class="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img class="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="stars image" /> </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
  );
}

export default Testimonial;