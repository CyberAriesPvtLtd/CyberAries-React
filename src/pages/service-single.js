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


function Service_single() {
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
        <img src="images/background/2.webp" className="jarallax-img" alt />
        <div className="container relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="spacer-double sm-hide" />
            <div className="col-lg-6">
              <h1 className="mb-0 wow fadeInUp" data-wow-delay=".2s">Our Service</h1>
              <ul className="crumb wow fadeInUp">
                <li><a href="/">Home</a></li>
                <li className="active">Our Services</li>
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
          <div className="row g-4 gx-5">
            <div className="col-lg-3">
              <div className="me-lg-3">
                <a href="/service-single" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative"><h5 className="mb-0">Network Security</h5><i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px" /></a>
                <a href="/service-single" className="bg-light d-block p-3 px-4 rounded-10px mb-3"><h5 className="mb-0">Data Encryption</h5></a>
                <a href="/service-single" className="bg-light d-block p-3 px-4 rounded-10px mb-3"><h5 className="mb-0">Identity &amp; Access</h5></a>
                <a href="/service-single" className="bg-light d-block p-3 px-4 rounded-10px mb-3"><h5 className="mb-0">Security Monitoring</h5></a>
                <a href="/service-single" className="bg-light d-block p-3 px-4 rounded-10px mb-3"><h5 className="mb-0">Backup &amp; Recovery</h5></a>
                <a href="/service-single" className="bg-light d-block p-3 px-4 rounded-10px mb-3"><h5 className="mb-0">Security Configuration</h5></a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row g-4 gx-5">
                <div className="col-lg-6">
                  <div className="relative">
                    <img src="images/misc/s1.webp" className="img-fluid rounded-1 wow fadeInUp" alt />
                    <div className="bg-color text-light p-4 absolute start-10 w-80 mt-min-70 rounded-1 sm-hide">
                      <div className="row g-4 align-items-center">
                        <div className="col-lg-12">
                          <p className="no-bottom">Officia ullamco quis sunt adipisicing occaecat eiusmod ea ea velit deserunt.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h2>Protect your organization from cyber threats</h2>
                  <p>In today’s hyperconnected digital landscape, your network is the lifeline of your business — and one of the most common targets for cybercriminals. From ransomware and phishing to zero-day exploits and insider threats, attackers are constantly seeking vulnerabilities. We provide robust, multi-layered network security solutions designed to safeguard your data, systems, and operations against sophisticated attacks, ensuring your business stays secure and resilient.</p>                                    
                </div>
              </div>
              <div className="spacer-double" />
              <h2>Key Features</h2>
              <div className="row g-4">
                <div className="col-lg-6 wow fadeInUp">
                  <div className="relative">
                    <i className="abs fs-40 p-4 border-1-black icon_check rounded-1 text-dark" />
                    <div className="ps-100 ms-4">
                      <h4>Certified Security Experts</h4>
                      <p>Our cybersecurity team includes certified professionals with deep expertise in protecting networks from evolving digital threats and intrusions.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp">
                  <div className="relative">
                    <i className="abs fs-40 p-4 border-1-black icon_check rounded-1 text-dark" />
                    <div className="ps-100 ms-4">
                      <h4>Rapid Threat Response</h4>
                      <p>We prioritize speed in detecting and neutralizing cyber threats, ensuring minimal disruption and swift recovery for your business systems.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp">
                  <div className="relative">
                    <i className="abs fs-40 p-4 border-1-black icon_check rounded-1 text-dark" />
                    <div className="ps-100 ms-4">
                      <h4>Clear &amp; Fair Pricing</h4>
                      <p>Our pricing is honest and predictable. You'll receive a transparent quote for your security package with no surprise fees or add-ons.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp">
                  <div className="relative">
                    <i className="abs fs-40 p-4 border-1-black icon_check rounded-1 text-dark" />
                    <div className="ps-100 ms-4">
                      <h4>Enterprise-Grade Tools</h4>
                      <p>We utilize best-in-class cybersecurity tools and technologies, ensuring your infrastructure remains secure, stable, and fully protected.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp">
                  <div className="relative">
                    <i className="abs fs-40 p-4 border-1-black icon_check rounded-1 text-dark" />
                    <div className="ps-100 ms-4">
                      <h4>Comprehensive Coverage</h4>
                      <p>Our services cover everything from endpoint protection and firewalls to penetration testing, tailored for businesses of all sizes.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp">
                  <div className="relative">
                    <i className="abs fs-40 p-4 border-1-black icon_check rounded-1 text-dark" />
                    <div className="ps-100 ms-4">
                      <h4>Guaranteed Satisfaction</h4>
                      <p>Your peace of mind is our goal. We stand behind our security solutions and guarantee client satisfaction with every engagement.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer-double" />
              <h2>Testimonials</h2>
              <div className="row">
                <div className="owl-carousel owl-theme owl-2-dots wow fadeInUp">
                  <div className="item">
                    <div className="border-gray rounded-1 p-30">
                      <div className="d-flex justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <img className="w-40px circle me-3" alt src="images/testimonial/1.webp" />
                          <div className="mt-2">
                            <div className="text-dark fw-bold lh-1">
                              John Smith
                            </div>
                            <small>
                              7 December 2024
                            </small>
                          </div>
                        </div>
                        <img src="images/misc/google-icon.svg" className="w-30px" alt />
                      </div>
                      <div className="de-rating-ext mb-2">
                        <span className="d-stars">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </span>
                        <span className="ms-2 text-white">5.0</span>
                      </div>
                      <p>"Their technicians are always prompt, professional, and knowledgeable. From regular maintenance to emergency repairs, they've got us covered. Highly recommend!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-dark bg-color text-light pt-60 pb-50 relative overflow-hidden">
        <div className="w-30 abs abs-middle end-0 me-5 op-1">
          <img src="images/logo-big-white.webp" className="w-100 wow scaleIn" alt />
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-10">
              <h3 className="mb-0 fs-32 wow fadeInRight">Need 24/7 Protection From Cyber Attacks?</h3>
            </div>
            <div className="col-md-2">                            
              <a className="btn-main fx-slide btn-line wow fadeInLeft" href="/appointment"><span>Start For Free</span></a>
            </div>
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
            <p>At CyberGuard, we’re committed to delivering professional, high-quality cybersecurity solutions. From proactive threat monitoring to advanced data protection, we help keep your business secure while preserving its reputation and protecting it from evolving digital threats.</p>
            <div className="social-icons mb-sm-30">
              <a href="#"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#"><i className="fa-brands fa-x-twitter" /></a>
              <a href="#"><i className="fa-brands fa-whatsapp" /></a>
              <a href="#"><i className="fa-brands fa-instagram" /></a>
              <a href="#"><i className="fa-brands fa-youtube" /></a>
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
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/blog">Blog</a></li>
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
              123 Cyber Street, Los Angeles, CA
              <div className="spacer-20" />
              <div className="fw-bold text-white">
                <i className="icofont-phone me-2 id-color" />Call Us
              </div>
              +1 800 987 654
              <div className="spacer-20" />
              <div className="fw-bold text-white">
                <i className="icofont-envelope me-2 id-color" />Email Us
              </div>
              support@cyberguard.com
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
                  © 2025 - CyberGuard by Designesia
                </div>
                <ul className="menu-simple">
                 <li><a href="/terms-and-conditions" data-modal="termsModal">Terms &amp; Conditions</a></li>
                        <li><a href="/privacy-policy" data-modal="privacyModal">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* footer end */}
  </div>
  {/* Javascript Files
    ================================================== */}
</div>

  )
}

export default Service_single;