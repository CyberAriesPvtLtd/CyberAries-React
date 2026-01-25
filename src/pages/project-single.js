import React from "react";

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

function ProjectSingle() {
  return (
    <div>
      <title>Project Details — CyberAries</title>
      <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16" />
      <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Detailed overview of our cybersecurity projects and implementations." name="description" />
      
      <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
      <link href="css/plugins.css" rel="stylesheet" type="text/css" />
      <link href="css/style.css" rel="stylesheet" type="text/css" />
      <link id="colors" href="css/colors/scheme-1.css" rel="stylesheet" type="text/css" />

      <div id="wrapper">
        <div className="float-text show-on-scroll">
          <span><a href="/">Scroll to top</a></span>
        </div>
        <div className="scrollbar-v show-on-scroll" />
        <div id="de-loader" />

        <header>
          <div id="topbar">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between xs-hide">
                    <div className="d-flex">
                      <div className="topbar-widget me-3">
                        <a href="/"><i className="icofont-location-pin" />Hiranandani Business Park, Powai, Mumbai - 400071</a>
                      </div>
                      <div className="topbar-widget me-3">
                        <a href="tel:+918828495202"><i className="icofont-phone" />+91 8828495202</a>
                      </div>
                      <div className="topbar-widget me-3">
                        <a href="mailto:info@cyberaries.com"><i className="icofont-envelope" />info@cyberaries.com</a>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="social-icons">
                        <a href="/" aria-label="Facebook"><i className="fa-brands fa-facebook fa-lg" /></a>
                        <a href="/" aria-label="Twitter"><i className="fa-brands fa-x-twitter fa-lg" /></a>
                        <a href="/" aria-label="YouTube"><i className="fa-brands fa-youtube fa-lg" /></a>
                        <a href="/" aria-label="Pinterest"><i className="fa-brands fa-pinterest fa-lg" /></a>
                        <a href="/" aria-label="Instagram"><i className="fa-brands fa-instagram fa-lg" /></a>
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
                    <div id="logo">
                      <a href="/">
                        <img className="logo-main" src="images/logo-white.webp" alt="CyberAries Logo" />
                        <img className="logo-mobile" src="images/logo-white.webp" alt="CyberAries Logo" />
                      </a>
                    </div>
                  </div>
                  <div className="de-flex-col header-col-mid">
                    <ul id="mainmenu">
                      <li><a className="menu-item" href="/">Home</a></li>
                      <li><a className="menu-item" href="/about">About Us</a></li>
                      <li><a className="menu-item" href="/services">Services</a></li>
                      <li><a className="menu-item" href="/projects">Projects</a></li>
                      <li><a className="menu-item" href="/blog">Blog</a></li>
                      <li><a className="menu-item" href="/contact">Contact Us</a></li>
                    </ul>
                  </div>
                  <div className="de-flex-col">
                    <div className="menu_side_area">
                      <a href="/appointment" className="btn-main fx-slide"><span>Start For Free</span></a>
                      <span id="menu-btn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="no-bottom no-top" id="content">
          <div id="top" />
          <section id="subheader" className="section-dark bg-dark text-light relative jarallax">
            <div className="gradient-edge-top" />
            <img src="images/background/2.webp" className="jarallax-img" alt="" />
            <div className="container relative z-2">
              <div className="row gy-4 gx-5 align-items-center">
                <div className="spacer-double sm-hide" />
                <div className="col-lg-6">
                  <h1 className="mb-0 wow fadeInUp" data-wow-delay=".2s">Service Details</h1>
                  <ul className="crumb wow fadeInUp">
                    <li><a href="/">Home</a></li>
                    <li className="active">Service Details</li>
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
                    <a href="/service-single" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                      <h5 className="mb-0">Network Security</h5>
                      <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px" />
                    </a>
                    <a href="/service-single" className="bg-light d-block p-3 px-4 rounded-10px mb-3"><h5 className="mb-0">Data Encryption</h5></a>
                    <a href="/service-single" className="bg-light d-block p-3 px-4 rounded-10px mb-3"><h5 className="mb-0">Identity &amp; Access</h5></a>
                    <a href="/service-single" className="bg-light d-block p-3 px-4 rounded-10px mb-3"><h5 className="mb-0">Security Monitoring</h5></a>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row g-4 gx-5">
                    <div className="col-lg-6">
                      <div className="relative">
                        <img src="images/misc/s1.webp" className="img-fluid rounded-1 wow fadeInUp" alt="Network Security illustration" />
                        <div className="bg-color text-light p-4 absolute start-10 w-80 mt-min-70 rounded-1 sm-hide">
                          <p className="no-bottom">Ensuring robust perimeter defense and internal network integrity.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h2>Protect your organization from cyber threats</h2>
                      <p>In today’s hyperconnected digital landscape, your network is the lifeline of your business. We provide robust, multi-layered network security solutions designed to safeguard your data and systems.</p> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="section-dark">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-4 col-sm-6">
                <img src="images/logo-white.webp" className="logo-footer" alt="CyberAries Logo" />
                <div className="spacer-20" />
                <p>At CyberAries Pvt. Ltd., we’re committed to delivering professional, high-quality cybersecurity solutions.</p>
                <div className="social-icons mb-sm-30">
                  <a href="/" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                  <a href="/" aria-label="Twitter"><i className="fa-brands fa-x-twitter" /></a>
                  <a href="/" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a>
                  <a href="/" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                  <a href="/" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="widget">
                      <h5>Company</h5>
                      <ul className="list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
                <div className="widget">
                  <h5>Contact Us</h5>
                  <div className="fw-bold text-white"><i className="icofont-location-pin me-2 id-color" />Head Office</div>
                  Hiranandani Business Park, Powai, Mumbai - 400071
                  <div className="spacer-20" />
                  <div className="fw-bold text-white"><i className="icofont-phone me-2 id-color" />Call Us</div>
                  +91 8828495202
                </div>
              </div>
            </div>
          </div>
          <div className="subfooter">
            <div className="container text-center">
              © 2026 CyberAries Pvt Ltd. All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ProjectSingle;