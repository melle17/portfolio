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
            <motion.div
                className="story-slider"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <p className="text-deep-blue text-center">Here are some of my photos.</p>
                <p className="text-deep-blue text-center mb-2">Hope you enjoy :)</p>
                <div className="flex justify-center">
                    <div className="flex justify-center text-center h-0.5 w-1/5 bg-gradient-rainblue mb-24"></div>
                </div>
                <Slider {...settings}>
                    {data.map((item) => (
                        <img src={item.cover} key={item.id} alt="" className="photo"/>
                    ))}
                </Slider>

            </motion.div>
        </section>
    )
}

export default Story;

