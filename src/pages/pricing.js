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

function Pricing() {
  return (
    <div>
      <title>Pricing – CyberAries Security Solutions</title>
      <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16" />
      <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="CyberAries cybersecurity pricing plans for businesses of all sizes." name="description" />
      
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
                  <h1 className="mb-0 wow fadeInUp" data-wow-delay=".2s">Pricing</h1>
                  <ul className="crumb wow fadeInUp">
                    <li><a href="/">Home</a></li>
                    <li className="active">Pricing</li>
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
                <div className="col-lg-12 text-center">
                  <div className="switch-set">
                    <div>Monthly Plan</div>
                    <div><input id="sw-1" className="switch" type="checkbox" aria-label="Switch between monthly and yearly" /></div>
                    <div>Yearly Plan</div>
                  </div>
                </div>

                {/* Pricing Cards */}
                {[
                  { name: "Essential", price: "12.99", desc: "Core protection for small teams." },
                  { name: "Advanced", price: "19.99", desc: "Growing business threat protection." },
                  { name: "ProSecure", price: "29.99", desc: "Full-suite multi-office defense.", recommended: true },
                  { name: "Enterprise", price: "49.99", desc: "Ultimate custom infrastructure support." }
                ].map((plan, index) => (
                  <div className="col-lg-3 col-md-6" key={index}>
                    <div className={`relative bg-light p-30 pt-5 h-100 ${plan.recommended ? 'border-primary' : ''}`}>
                      {plan.recommended && <div className="abs start-0 top-0 w-100 bg-color p-30 py-0 text-light text-center">Recommended</div>}
                      <div className="mh-150">
                        <h3 className="mb-1">{plan.name}</h3>
                        <p>{plan.desc}</p>
                      </div>
                      <div className="relative">
                        <h4 className="mb-0 lh-1 fs-40">${plan.price}<span className="fs-16">/mo</span></h4>
                      </div>
                      <div className="relative py-3">
                        <a href="/contact" className="btn-main w-100">Get Started</a>
                      </div>
                      <ul className="ul-check list-unstyled">
                        <li>Threat Monitoring</li>
                        <li>24/7 Support</li>
                        <li>Security Dashboard</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <footer className="section-dark">
          <div className="container py-5">
            <div className="row gx-5">
              <div className="col-lg-4">
                <img src="images/logo-white.webp" className="logo-footer" alt="CyberAries Logo" />
                <p className="mt-3">At CyberAries, we’re committed to delivering professional, high-quality cybersecurity solutions.</p>
              </div>
              <div className="col-lg-4">
                <h5>Contact Us</h5>
                <p>Head Office: Hiranandani Business Park, Powai, Mumbai - 400071</p>
                <p>Phone: +91 8828495202</p>
              </div>
              <div className="col-lg-4">
                <h5>Legal</h5>
                <ul className="list-unstyled">
                  <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Pricing;