import React from "react";
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

function Services() {
  return (
    <div>
      <title>Our Services — CyberAries Pvt Ltd</title>
      <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16" />
      <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="CyberAries cybersecurity services: VAPT, Data Encryption, SOC Monitoring, and more." name="description" />
      
      <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
      <link href="css/plugins.css" rel="stylesheet" type="text/css" />
      <link href="css/swiper.css" rel="stylesheet" type="text/css" />
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
                        <a href="/" aria-label="X (Twitter)"><i className="fa-brands fa-x-twitter fa-lg" /></a>
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
                      <li><ReloadLink className="menu-item" to="/">Home</ReloadLink></li>
                      <li><ReloadLink className="menu-item" to="/about">About Us</ReloadLink></li>
                      <li><ReloadLink className="menu-item" to="/services">Services</ReloadLink></li>
                      <li><ReloadLink className="menu-item" to="/projects">Projects</ReloadLink></li>
                      <li><ReloadLink className="menu-item" to="/blog">Blog</ReloadLink></li>
                      <li><ReloadLink className="menu-item" to="/contact">Contact Us</ReloadLink></li>
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
            <div className="container relative z-2 text-center">
              <div className="spacer-double" />
              <h1 className="mb-0">Our Services</h1>
              <ul className="crumb">
                <li><a href="/">Home</a></li>
                <li className="active">Our Services</li>
              </ul>
            </div>
          </section>

          <section data-bgimage="url(images/background/6.webp) top">
            <div className="container">
              <div className="row g-4">
                {[
                  { name: "Network Security", icon: "cyber-security.png", desc: "Deploying firewalls and intrusion detection systems." },
                  { name: "Data Encryption", icon: "encryption.png", desc: "Encrypting sensitive data at rest and in transit." },
                  { name: "Identity & Access", icon: "fingerprint.png", desc: "Managing user identities with MFA and role-based control." },
                  { name: "Security Monitoring", icon: "monitoring.png", desc: "24/7 monitoring with advanced SIEM systems." },
                  { name: "Backup & Recovery", icon: "cloud-storage.png", desc: "Secure backups and rapid data recovery plans." },
                  { name: "Security Configuration", icon: "settings.png", desc: "Hardening systems across all infrastructure." }
                ].map((service, index) => (
                  <div className="col-lg-4 col-md-6 wow fadeInRight" key={index}>
                    <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                      <div className="relative z-2">
                        <img src={`images/icons-white/${service.icon}`} className="w-90px mb-3 bg-color p-3 rounded-1" alt={service.name} />
                        <h4>{service.name}</h4>
                        <p>{service.desc}</p>
                        <a className="btn-main fx-slide bg-dark" href="/service-single"><span>Learn More</span></a>
                      </div>
                      <img src={`images/icons-white/${service.icon}`} className="w-80 abs start-60 abs-middle op-1" alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <footer className="section-dark">
          <div className="container py-5 text-center">
             <img src="images/logo-white.webp" className="logo-footer mx-auto" alt="CyberAries Logo" style={{maxWidth: '150px'}} />
             <p className="mt-3">Providing professional cybersecurity solutions for modern enterprises.</p>
             <ul className="menu-simple list-inline">
                <li className="list-inline-item"><a href="/terms-and-conditions">Terms</a></li>
                <li className="list-inline-item"><a href="/privacy-policy">Privacy</a></li>
             </ul>
             <p>© 2026 – CyberAries Pvt Ltd. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Services;