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

function About() {
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
            <img src="images/background/1.webp" className="jarallax-img" alt />
            <div className="container relative z-2">
              <div className="row gy-4 gx-5 align-items-center">
                <div className="spacer-double sm-hide" />
                <div className="col-lg-6">
                  <h1 className="mb-0 wow fadeInUp" data-wow-delay=".2s">About Us</h1>
                  <ul className="crumb wow fadeInUp">
                    <li><a href="/">Home</a></li>
                    <li className="active">About Us</li>
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
              <div className="row g-4 gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="ms-lg-4">
                    <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">About Us</div>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">Defending Your Digital World, 24/7</h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">
                      For over 15 years, we’ve been safeguarding organizations from evolving cyber threats.
                      Our team of experts provides end-to-end security solutions — from proactive threat detection
                      and vulnerability assessments to rapid incident response — ensuring your data, systems, and
                      reputation remain fully protected in an ever-changing digital landscape.
                    </p>
                    <a className="btn-main fx-slide mb10 mb-3 wow fadeInUp" data-wow-delay=".6s" href="/contact"><span>Start For Free</span></a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="relative">
                    <div className="p-4 mt-3 bg-white text-dark abs abs-centered rounded-1 text-center z-2 wow fadeIn">
                      <h1 className="fs-72 mb-1">15</h1>
                      <div className="fs-16 lh-1-5">Years of Experience</div>
                    </div>
                    <div className="row g-4">
                      <div className="col-lg-6 wow fadeInRight">
                        <div className="relative rounded-1 overflow-hidden">
                          <img src="images/misc/p1.webp" className="w-100" alt="Cybersecurity Operations Center" />
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInRight" data-wow-delay=".3s">
                        <div className="relative rounded-1 overflow-hidden">
                          <img src="images/misc/p2.webp" className="w-100" alt="Network Security Infrastructure" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="bg-color text-light d-flex py-4 lh-1 overflow-hidden">
            <div className="de-marquee-list-2 wow fadeIn" data-wow-duration="2s">
              <span className="fs-32 fw-500">Network Security</span>
              <span className="mx-3 fs-32 op-3">/</span>
              <span className="fs-32 fw-500">Endpoint Protection</span>
              <span className="mx-3 fs-32 op-3">/</span>
              <span className="fs-32 fw-500">Threat Intelligence</span>
              <span className="mx-3 fs-32 op-3">/</span>
              <span className="fs-32 fw-500">Penetration Testing</span>
              <span className="mx-3 fs-32 op-3">/</span>
              <span className="fs-32 fw-500">Security Audits</span>
              <span className="mx-3 fs-32 op-3">/</span>
              <span className="fs-32 fw-500">Incident Response</span>
              <span className="mx-3 fs-32 op-3">/</span>
            </div>
          </div>
          <section className="bg-light">
            <div className="container">
              <div className="row gy-4 gx-5">
                <div className="col-lg-12">
                  <div className="text-center">
                    <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Cybersecurity Experts</div>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">Comprehensive Cybersecurity Solutions for Modern Threats</h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="relative">
                    <div className="bg-color text-light text-center rounded-1 abs w-200px p-4 m-4 bottom-0 z-3 overflow-hidden wow zoomIn">
                      <h2 className="mb-0">99.9%</h2>
                      <p className="lh-1-5 fs-14 mb-0">Threat detection and prevention rate</p>
                    </div>
                    <div className="rounded-1 w-90 overflow-hidden wow zoomIn">
                      <img src="images/misc/l1.webp" className="w-100 wow scaleIn" alt="Cyber Defense Dashboard" />
                    </div>
                    <div className="rounded-1 w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft wow zoomIn" data-wow-delay=".2s">
                      <img src="images/misc/s1.webp" className="w-100 wow scaleIn" data-wow-delay=".2s" alt="Security Monitoring Interface" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="relative mb-4 wow fadeInUp" data-wow-delay=".2s">
                    <img src="images/icons-dark/padlock.png" className="absolute w-100px p-3 mb-3 z-2" alt="Vulnerability Assessment Icon" />
                    <div className="ps-100">
                      <h4>Vulnerability Assessment</h4>
                      <p>Identify weaknesses before attackers do, reduce risk exposure, and strengthen your overall security posture.</p>
                    </div>
                  </div>
                  <div className="relative mb-4 wow fadeInUp" data-wow-delay=".4s">
                    <img src="images/icons-dark/cloud.png" className="absolute w-100px p-3 mb-3 z-2" alt="Safety Icon" />
                    <div className="ps-100">
                      <h4>Data Protection</h4>
                      <p>Safeguard sensitive data against breaches and leaks with strong encryption, access control, and secure storage.</p>
                    </div>
                  </div>
                  <div className="relative wow fadeInUp" data-wow-delay=".6s">
                    <img src="images/icons-dark/quality.png" className="absolute w-100px p-3 mb-3 z-2" alt="Reputation Icon" />
                    <div className="ps-100">
                      <h4>Brand Reputation</h4>
                      <p>Maintain customer trust and brand integrity by preventing cyber incidents and demonstrating strong data responsibility.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer-single sm-hide" />
            </div>
          </section>
          <section className="section-dark text-light bg-dark-gradient no-top no-bottom overflow-hidden">
            <div className="container-fluid position-relative half-fluid">
              <div className="container">
                <div className="row">
                  {/* Image */}
                  <div className="col-lg-6 position-lg-absolute right-half h-100">
                    <div className="triangle-bottomright-dark" />
                    <div className="image" data-bgimage="url(images/misc/s4.webp) center" />
                  </div>
                  {/* Text */}
                  <div className="col-lg-6">
                    <div className="me-lg-3">
                      <div className="py-5 my-5 me-lg-3">
                        <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Maximum Protection</div>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">Cybersecurity Solutions for Complete Digital Safety</h2>
                        <p className="wow fadeInUp" data-wow-delay=".4s">
                          Safeguard your business with our comprehensive cybersecurity services.
                          We protect your data, networks, and infrastructure using advanced threat detection,
                          proactive defense strategies, and rapid incident response — ensuring peace of mind
                          in an increasingly hostile digital world.
                        </p>
                        <ul className="ul-check fw-600 mb-4 wow fadeInUp" data-wow-delay=".6s">
                          <li>24/7 threat monitoring and response</li>
                          <li>Advanced protection against malware and ransomware</li>
                          <li>Customized security solutions for your business</li>
                          <li>Compliance-ready and future-proof defense strategies</li>
                        </ul>
                        <a className="btn-main wow fadeInUp" data-wow-delay=".9s" href="/contact">Request a Security Assessment</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="text-center">
                    <div className="subtitle wow fadeInUp">Our Team</div>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">Complete Cyber Defense Against Modern Attacks</h2>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="rounded-1 overflow-hidden">
                    <img src="images/team/1.webp" className="w-100" alt="Cybersecurity Expert" />
                    <div className="bg-light p-4 overflow-hidden text-center">
                      <h4 className="mb-0">John Smith</h4>
                      <p className="mb-2">Chief Security Officer</p>
                      <div className="social-icons">
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin" /></a>
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter" /></a>
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="rounded-1 overflow-hidden">
                    <img src="images/team/2.webp" className="w-100" alt="Threat Analyst" />
                    <div className="bg-light p-4 overflow-hidden text-center">
                      <h4 className="mb-0">Sarah Johnson</h4>
                      <p className="mb-2">Lead Threat Analyst</p>
                      <div className="social-icons">
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin" /></a>
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter" /></a>
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="rounded-1 overflow-hidden">
                    <img src="images/team/3.webp" className="w-100" alt="Cloud Security Specialist" />
                    <div className="bg-light p-4 overflow-hidden text-center">
                      <h4 className="mb-0">Thomas Bennett</h4>
                      <p className="mb-2">Cloud Security Specialist</p>
                      <div className="social-icons">
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin" /></a>
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter" /></a>
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="rounded-1 overflow-hidden">
                    <img src="images/team/4.webp" className="w-100" alt="Incident Response Manager" />
                    <div className="bg-light p-4 overflow-hidden text-center">
                      <h4 className="mb-0">Joshua Henry</h4>
                      <p className="mb-2">Incident Response Manager</p>
                      <div className="social-icons">
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin" /></a>
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter" /></a>
                        <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github" /></a>
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

export default About;