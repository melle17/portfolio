import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import { sliderImages } from "../assets/data/data";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Story = () => {
    const [data, setData] = useState(sliderImages)
    const settings = {
        dots: true,
        fade:true,
        ladyLoad:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
    }
    
    return (
        <section className="slider mb-24" id="story">
            <p className="text-deep-blue text-2xl font-playfair text-center mb-5">Here are some of my photos.</p>
            <p className="text-deep-blue text-2xl font-playfair text-center mb-24">Hope you enjoy :)</p>
            <Slider {...settings}>
                {data.map((item) => (
                <div className="photo" key={item.id}>
                    <img src={item.cover} alt="item.cover" />
                </div>
                ))}
        </Slider>

        </section>
    )
}

export default Story;

