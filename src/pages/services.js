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

function Services() {
  return (
    <div>
      <title>Cyber Aries Pvt. Ltd.</title>
      <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16" />
      <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Cyber Aries Pvt. Ltd." name="description" />
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
                      <li>
                        <ReloadLink className="menu-item" to="/">
                          Home
                        </ReloadLink>
                      </li>

                      <li>
                        <ReloadLink className="menu-item" to="/about">
                          About Us
                        </ReloadLink>
                      </li>

                      <li>
                        <ReloadLink className="menu-item" to="/services">
                          Services
                        </ReloadLink>
                      </li>

                      <li>
                        <ReloadLink className="menu-item" to="/projects">
                          Projects
                        </ReloadLink>
                      </li>

                      <li>
                        <ReloadLink className="menu-item" to="/blog">
                          Blog
                        </ReloadLink>
                      </li>

                      <li>
                        <ReloadLink className="menu-item" to="/contact">
                          Contact Us
                        </ReloadLink>
                      </li>
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
          <section data-bgimage="url(images/background/6.webp) top">
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="0s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2 wow scaleIn" data-wow-delay=".0s">
                      <img src="images/icons-white/cyber-security.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Network Security</h4>
                      <p>Deploying firewalls and intrusion detection systems to safeguard networks.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/cyber-security.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2 wow scaleIn" data-wow-delay=".2s">
                      <img src="images/icons-white/encryption.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Data Encryption</h4>
                      <p>Encrypting sensitive data at rest and in transit using advanced encryption.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/encryption.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".4s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2 wow scaleIn" data-wow-delay=".4s">
                      <img src="images/icons-white/fingerprint.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Identity &amp; Access</h4>
                      <p>Managing user identities and access with MFA and detailed role-based control.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/fingerprint.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".6s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2 wow scaleIn" data-wow-delay=".6s">
                      <img src="images/icons-white/monitoring.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Security Monitoring</h4>
                      <p>24/7 monitoring with advanced SIEM systems for real-time detection.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/monitoring.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".8s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2 wow scaleIn" data-wow-delay=".8s">
                      <img src="images/icons-white/cloud-storage.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Backup &amp; Recovery</h4>
                      <p>Protecting critical data with secure backups and rapid recovery plans.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/cloud-storage.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="1s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2 wow scaleIn" data-wow-delay="1s">
                      <img src="images/icons-white/settings.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Security Configuration</h4>
                      <p>Hardening systems and applying secure configurations across all infrastructure.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/settings.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-light">
            <div className="container">
              <div className="row g-4 justify-content-center mb-2">
                <div className="col-lg-12">
                  <div className="text-center">
                    <div className="subtitle wow fadeInUp">Why Choose Us</div>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">Complete Cyber Defense Against Modern Attacks</h2>
                    <p className="lead wow fadeInUp" data-wow-delay=".4s">Stay protected with a fully integrated defense strategy built for today’s complex cyber landscape.
                      From ransomware to phishing and zero-day exploits, we provide comprehensive protection across networks, endpoints, and cloud environments.</p>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="0s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2">
                      <img src="images/icons-white/cyber-security.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Network Security</h4>
                      <p>Deploying firewalls and intrusion detection systems to safeguard networks.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/cyber-security.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2">
                      <img src="images/icons-white/encryption.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Data Encryption</h4>
                      <p>Encrypting sensitive data at rest and in transit using advanced encryption.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/encryption.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".4s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2">
                      <img src="images/icons-white/fingerprint.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Identity &amp; Access</h4>
                      <p>Managing user identities and access with MFA and detailed role-based control.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/fingerprint.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".6s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2">
                      <img src="images/icons-white/monitoring.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Security Monitoring</h4>
                      <p>24/7 monitoring with advanced SIEM systems for real-time detection.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/monitoring.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".9s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2">
                      <img src="images/icons-white/cloud-storage.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Backup &amp; Recovery</h4>
                      <p>Protecting critical data with secure backups and rapid recovery plans.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/cloud-storage.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="1.2s">
                  <div href="/service-single" className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                    <div className="relative z-2">
                      <img src="images/icons-white/settings.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt />
                      <h4>Security Configuration</h4>
                      <p>Hardening systems and applying secure configurations across all infrastructure.</p>
                      <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                    </div>
                    <img src="images/icons-white/settings.png" className="w-80 abs start-60 abs-middle op-1" alt />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-color text-light pt-60 pb-50 relative overflow-hidden">
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

export default Services