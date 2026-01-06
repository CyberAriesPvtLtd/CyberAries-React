import React from "react";
import { Link } from "react-router-dom";
import { useModals } from "../useModals";
import ReloadLink from "../components/ReloadLink";

// CSS
import "../css/bootstrap.min.css";
import "../css/plugins.css";
import "../css/swiper.css";
import "../css/style.css";
import "../css/colors/scheme-1.css";
import "../css/custom-swiper-1.css";

// Icons
import "@icon/icofont/icofont.css";
import "icofont/dist/icofont.css";

// Images
import logoWhite from "../images/logo-white.webp";
import logoBigWhite from "../images/logo-big-white.webp";

import b1 from "../images/badge/1.webp";
import b2 from "../images/badge/2.webp";
import b3 from "../images/badge/3.webp";
import b4 from "../images/badge/4.webp";
import b5 from "../images/badge/5.webp";
import b6 from "../images/badge/6.webp";

import bg6 from "../images/background/6.webp";

import l1 from "../images/misc/l1.webp";
import s1 from "../images/misc/s1.webp";
import s2 from "../images/misc/s2.webp";
import s3 from "../images/misc/s3.webp";
import c1 from "../images/misc/c1.webp";

import project1 from "../images/projects/1.webp";
import project2 from "../images/projects/2.webp";
import project3 from "../images/projects/3.webp";

import testimonial1 from "../images/testimonial/1.webp";
import testimonial2 from "../images/testimonial/2.webp";
import testimonial3 from "../images/testimonial/3.webp";
import testimonial4 from "../images/testimonial/4.webp";
import testimonial5 from "../images/testimonial/5.webp";
import testimonial6 from "../images/testimonial/6.webp";
import testimonial7 from "../images/testimonial/7.webp";
import testimonial8 from "../images/testimonial/8.webp";
import testimonial9 from "../images/testimonial/9.webp";
import testimonial10 from "../images/testimonial/10.webp";

import news1 from "../images/news/s1.webp";
import news2 from "../images/news/s2.webp";
import news3 from "../images/news/s3.webp";


function Blog() {
    useModals();
    return (
        <div>
            <title>Shared on NULLPHPSCRIPT.COM - CyberGuard - Cyber Security Services HTML Template</title>
            <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16" />
            <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="CyberGuard - Cyber Security Services HTML Template" name="description" />
            <meta content name="keywords" />
            <meta content name="author" />
            {/* CSS Files
    ================================================== */}
            <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
            <link href="css/plugins.css" rel="stylesheet" type="text/css" />
            <link href="css/swiper.css" rel="stylesheet" type="text/css" />
            <link href="css/style.css" rel="stylesheet" type="text/css" />
            {/* color scheme */}
            <link id="colors" href="css/colors/scheme-1.css" rel="stylesheet" type="text/css" />
            <div id="wrapper">
                <div className="float-text show-on-scroll">
                    <span><a href="#">Scroll to top</a></span>
                </div>
                <div className="scrollbar-v show-on-scroll" />
                {/* preloader begin */}
                <div id="de-loader" />
                {/* preloader end */}
                {/* header begin */}
                <header>
                    <div id="topbar">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="d-flex justify-content-between xs-hide">
                                        <div className="d-flex">
                                            <div className="topbar-widget me-3"><a href="#"><i className="icofont-location-pin" />Hiranandani Business Park, Powai, Mumbai - 400071</a></div>
                                            <div className="topbar-widget me-3"><a href="#"><i className="icofont-phone" />+91 8828495202</a></div>
                                            <div className="topbar-widget me-3"><a href="#"><i className="icofont-envelope" />info@cyberaries.com</a></div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="social-icons">
                                                <a href="#"><i className="fa-brands fa-facebook fa-lg" /></a>
                                                <a href="#"><i className="fa-brands fa-x-twitter fa-lg" /></a>
                                                <a href="#"><i className="fa-brands fa-youtube fa-lg" /></a>
                                                <a href="#"><i className="fa-brands fa-pinterest fa-lg" /></a>
                                                <a href="#"><i className="fa-brands fa-instagram fa-lg" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="de-flex sm-pt10">
                                    <div className="de-flex-col">
                                        {/* logo begin */}
                                        <div id="logo">
                                            <a href="/">
                                                <img className="logo-main" src="images/logo-white.webp" alt />
                                                <img className="logo-mobile" src="images/logo-white.webp" alt />
                                            </a>
                                        </div>
                                        {/* logo end */}
                                    </div>
                                    <div className="de-flex-col header-col-mid">
                                        {/* mainemenu begin */}
                                        <ul id="mainmenu">
                                            <li><a className="menu-item" href="/">Home</a>
                                            </li>
                                            <li><a className="menu-item" href="/about">About Us</a></li>
                                            <li><a className="menu-item" href="/services">Services</a></li>
                                            <li><a className="menu-item" href="/projects">Projects</a></li>
                                            <li><a className="menu-item" href="/blog">Blog</a></li>
                                            <li><a className="menu-item" href="/contact">Contact Us</a></li>
                                        </ul>
                                        {/* mainmenu end */}
                                    </div>
                                    <div className="de-flex-col">
                                        <div className="menu_side_area">
                                            <a href="/appointment" className="btn-main fx-slide"><span>Start For Free</span></a>
                                            {/* <a href="pricing.html" class="btn-main fx-slide"><span>Explore Pricing</span></a> */}
                                            <span id="menu-btn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* header end */}
                {/* content begin */}
                <div className="no-bottom no-top" id="content">
                    <div id="top" />
                    <section id="subheader" className="section-dark bg-dark text-light relative jarallax">
                        <div className="gradient-edge-top" />
                        <img src="images/background/3.webp" className="jarallax-img" alt />
                        <div className="container relative z-2">
                            <div className="row gy-4 gx-5 align-items-center">
                                <div className="spacer-double sm-hide" />
                                <div className="col-lg-6">
                                    <h1 className="mb-0 wow fadeInUp" data-wow-delay=".2s">Blog</h1>
                                    <ul className="crumb wow fadeInUp">
                                        <li><a href="/">Home</a></li>
                                        <li className="active">Blog</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 text-lg-end sm-hide">
                                    <h3>"Prevention is cheaper than a breach"</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-lg-4 wow fadeInRight" data-wow-delay=".0s">
                                    <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                        <img src="images/news/s1.webp" className="w-100 hover-scale-1-1" alt="Cybersecurity News" />
                                        <div className="absolute start-0 bottom-0 p-40 z-2">
                                            <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Cyber Insights</div>
                                            <h4>Top Strategies to Prevent Ransomware Attacks in 2025</h4>
                                            <div className="relative">
                                                <img src="images/testimonial/1.webp" className="w-20px me-2 circle" alt />
                                                <div className="d-inline fs-14 me-3">Michael Carter</div>
                                                <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />15 Jul 2025</div>
                                            </div>
                                        </div>
                                        <div className="gradient-edge-bottom h-70" />
                                    </a>
                                </div>
                                <div className="col-lg-4 wow fadeInRight" data-wow-delay=".2s">
                                    <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                        <img src="images/news/s2.webp" className="w-100 hover-scale-1-1" alt="Cybersecurity News" />
                                        <div className="absolute start-0 bottom-0 p-40 z-2">
                                            <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Threat Reports</div>
                                            <h4>AI-Powered Cyber Threats: How to Stay Ahead of Hackers</h4>
                                            <div className="relative">
                                                <img src="images/testimonial/2.webp" className="w-20px me-2 circle" alt />
                                                <div className="d-inline fs-14 me-3">Sophia Lee</div>
                                                <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />10 Jul 2025</div>
                                            </div>
                                        </div>
                                        <div className="gradient-edge-bottom h-70" />
                                    </a>
                                </div>
                                <div className="col-lg-4 wow fadeInRight" data-wow-delay=".4s">
                                    <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                        <img src="images/news/s3.webp" className="w-100 hover-scale-1-1" alt="Cybersecurity News" />
                                        <div className="absolute start-0 bottom-0 p-40 z-2">
                                            <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Best Practices</div>
                                            <h4>Building a Strong Cyber Defense Plan for Your Business</h4>
                                            <div className="relative">
                                                <img src="images/testimonial/3.webp" className="w-20px me-2 circle" alt />
                                                <div className="d-inline fs-14 me-3">David Wilson</div>
                                                <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />2 Jul 2025</div>
                                            </div>
                                        </div>
                                        <div className="gradient-edge-bottom h-70" />
                                    </a>
                                </div>
                                <div className="col-lg-4 wow fadeInRight" data-wow-delay=".0s">
                                    <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                        <img src="images/news/s4.webp" className="w-100 hover-scale-1-1" alt="Cybersecurity News" />
                                        <div className="absolute start-0 bottom-0 p-40 z-2">
                                            <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Data Protection</div>
                                            <h4>Ensuring Cloud Security: Best Practices for 2025</h4>
                                            <div className="relative">
                                                <img src="images/testimonial/4.webp" className="w-20px me-2 circle" alt />
                                                <div className="d-inline fs-14 me-3">Emily Johnson</div>
                                                <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />28 Jun 2025</div>
                                            </div>
                                        </div>
                                        <div className="gradient-edge-bottom h-70" />
                                    </a>
                                </div>
                                <div className="col-lg-4 wow fadeInRight" data-wow-delay=".2s">
                                    <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                        <img src="images/news/s5.webp" className="w-100 hover-scale-1-1" alt="Cybersecurity News" />
                                        <div className="absolute start-0 bottom-0 p-40 z-2">
                                            <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Cyber Awareness</div>
                                            <h4>Phishing Scams on the Rise: How to Protect Your Team</h4>
                                            <div className="relative">
                                                <img src="images/testimonial/5.webp" className="w-20px me-2 circle" alt />
                                                <div className="d-inline fs-14 me-3">Mark Peterson</div>
                                                <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />20 Jun 2025</div>
                                            </div>
                                        </div>
                                        <div className="gradient-edge-bottom h-70" />
                                    </a>
                                </div>
                                <div className="col-lg-4 wow fadeInRight" data-wow-delay=".4s">
                                    <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                        <img src="images/news/s6.webp" className="w-100 hover-scale-1-1" alt="Cybersecurity News" />
                                        <div className="absolute start-0 bottom-0 p-40 z-2">
                                            <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Security Updates</div>
                                            <h4>Latest Zero-Day Vulnerabilities Every Business Should Know</h4>
                                            <div className="relative">
                                                <img src="images/testimonial/6.webp" className="w-20px me-2 circle" alt />
                                                <div className="d-inline fs-14 me-3">Rachel Adams</div>
                                                <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />15 Jun 2025</div>
                                            </div>
                                        </div>
                                        <div className="gradient-edge-bottom h-70" />
                                    </a>
                                </div>
                                {/* pagination begin */}
                                <div className="col-lg-12 pt-4 text-center">
                                    <div className="d-inline-block">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true"><i className="fa fa-chevron-left" /></span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item active" aria-current="page"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true"><i className="fa fa-chevron-right" /></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* pagination end */}
                            </div>
                        </div>
                    </section>
                </div>
                {/* content end */}
                {/* footer begin */}
                <footer className="section-dark">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-4 col-sm-6">
                                <img src="images/logo-white.webp" className="logo-footer" alt />
                                <div className="spacer-20" />
                                <p>At Cyber Aries Pvt. Ltd., we’re committed to delivering professional, high-quality cybersecurity
                                    solutions. From proactive threat monitoring to advanced data protection, we help keep your business
                                    secure while preserving its reputation and protecting it from evolving digital threats.</p>
                                <div className="social-icons mb-sm-30">
                                    <a href="#"><i className="fa-brands fa-linkedin fa-lg" /></a>
                                    <a href="#"><i className="fa-brands fa-x-twitter fa-lg" /></a>
                                    <a href="#"><i className="fa-brands fa-facebook fa-lg" /></a>
                                    <a href="#"><i className="fa-brands fa-instagram fa-lg" /></a>
                                    <a href="#"><i className="fa-brands fa-whatsapp" /></a>
                                    <a href="#"><i className="fa-brands fa-blogger fa-lg" /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="widget">
                                            <h5>Company</h5>
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/services">Our Services</a></li>
                                                {/* <li><a href="gallery.html">Gallery</a></li> */}
                                                <li><a href="/about">About Us</a></li>
                                                <li><a href="/blog">Blog</a></li>
                                                <li><a href="/career">Career</a></li>
                                                <li><a href="/contact">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="widget">
                                            <h5>Our Services</h5>
                                            <ul>
                                                <li><a href="/service-single">Network Security</a></li>
                                                <li><a href="/service-single">Data Encryption</a></li>
                                                <li><a href="/service-single">Identity &amp; Access</a></li>
                                                <li><a href="/service-single">Security Monitoring</a></li>
                                                <li><a href="/service-single">Backup &amp; Recovery</a></li>
                                                <li><a href="/service-single">Security Configuration</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
                                <div className="widget">
                                    <h5>Contact Us</h5>
                                    <div className="fw-bold text-white">
                                        <i className="icofont-location-pin me-2 id-color" />Head Office
                                    </div>
                                    Hiranandani Business Park, Powai, Mumbai - 400071
                                    <div className="spacer-20" />
                                    <div className="fw-bold text-white">
                                        <i className="icofont-phone me-2 id-color" />Call Us
                                    </div>
                                    +91 8828495202
                                    <div className="spacer-20" />
                                    <div className="fw-bold text-white">
                                        <i className="icofont-envelope me-2 id-color" />Email Us
                                    </div>
                                    info@cyberaries.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subfooter">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="de-flex">
                                        <div className="de-flex-col">
                                            © 2025 – CyberAries Pvt Ltd. All Rights Reserved.
                                        </div>
                                        <div>
                                            <ul className="menu-simple">
                                                <li><a href="/terms-and-conditions" data-modal="termsModal">Terms &amp; Conditions</a></li>
                                                <li><a href="/privacy-policy" data-modal="privacyModal">Privacy Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></footer>
                {/* footer end */}
            </div>
            {/* Javascript Files
    ================================================== */}
        </div>

    )
}

export default Blog