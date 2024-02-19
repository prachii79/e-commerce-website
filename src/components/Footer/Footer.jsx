import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png";
import "./Footer.scss";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <span className="title">About</span>
                <span className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam nam et nobis voluptate laudantium at doloribus odio. Dicta ad deserunt odit enim, ipsum labore!
                </span>
            </div>

            <div className="col">
                <span className="title">Contact</span>
                <div className="c-item">
                    <FaLocationArrow />
                    <span className="text">
                        Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha, Kerala, 688006
                    </span>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <span className="text">Phone: 0471 272 0261</span>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <span className="text">Email: store@jsdev.com</span>
                </div>
            </div>

            <div className="col">
                <span className="title">Categories</span>
                <span className="text">Headphones</span>
                <span className="text">Smart wWtches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>

            <div className="col">
                <span className="title">Pages</span>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    JSDEVSTORE 2024 CREATED BY JS DEV. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
