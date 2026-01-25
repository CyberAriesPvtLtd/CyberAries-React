import React from "react";
import { Link } from "react-router-dom";
import { useModals } from "../useModals";
import { useEffect } from "react";
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


function Home() {

  useEffect(() => {
  if (window.$ && window.$.fn.owlCarousel) {
    const $carousel = window.$(".owl-carousel");

    // prevent double init (React strict mode / rerender)
    if ($carousel.hasClass("owl-loaded")) {
      $carousel.trigger("destroy.owl.carousel");
      $carousel.removeClass("owl-loaded");
      $carousel.find(".owl-stage-outer").children().unwrap();
    }

    $carousel.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      smartSpeed: 800,
      dots: true,
      nav: false,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 4 },
      },
    });
  }
}, []);

  useModals();
  return (
    <div>
      <title>Cyber Aries Pvt. Ltd.</title>
      <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16" />
      {/* Basic Meta */}
      <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      {/* SEO Meta */}
      <meta name="description" content="CyberAries — Risk-based IT & security audits, VAPT, 24/7 SOC monitoring and compliance readiness for financial and regulated enterprises." />
      <meta name="keywords" content="IT audit, security audit, VAPT, SOC monitoring, compliance, RBI audit, ISO 27001" />
      <meta content name="CyberAries Pvt. Ltd." />
      {/* Google Tag Manager */}
      {/* End Google Tag Manager */}
      {/* Google tag (gtag.js) */}
      {/* CSS Files
    ================================================== */}
      <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
      <link href="css/plugins.css" rel="stylesheet" type="text/css" />
      <link href="css/swiper.css" rel="stylesheet" type="text/css" />
      <link href="css/style.css" rel="stylesheet" type="text/css" />
      {/* color scheme */}
      <link id="colors" href="css/colors/scheme-1.css" rel="stylesheet" type="text/css" />
      <link href="css/custom-swiper-1.css" rel="stylesheet" type="text/css" />
      {/* Google Tag Manager (noscript) */}
      <noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHWCMRNZ" height="0" width="0"
        style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
      {/* End Google Tag Manager (noscript) */}
      <div id="wrapper">
        <div className="float-text show-on-scroll">
          <span><a href="/">Scroll to top</a></span>
        </div>
        <div className="scrollbar-v show-on-scroll" />
        <div className="scrollbar-v show-on-scroll" />
        {/* preloader begin */}
        <div id="de-loader" />
        {/* preloader end */}
        {/* header begin */}
        <header className="transparent">
          <div id="topbar">
            <div className="container">
              <div className="row">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-between xs-hide">
                      <div className="d-flex">
                        <div className="topbar-widget me-3"><a href="https://share.google/mQ8Nf8ARPCUzvTdDB"><i className="icofont-location-pin" />Hiranandani Business Park, Powai, Mumbai - 400071</a></div>
                        <div className="topbar-widget me-3"><a href="tel:+918828495202"><i className="icofont-phone" />+91 8828495202</a></div>
                        <div className="topbar-widget me-3"><a href="mailto:info@cyberaries.com">
  <ion-icon name="mail-outline"></ion-icon>
  info@cyberaries.com
</a></div>
                      </div>
                      <div className="d-flex">
                        <div className="social-icons">
                          <a href="#"><i className="fa-brands fa-linkedin fa-lg" /></a>
                          <a href="#"><i className="fa-brands fa-x-twitter fa-lg" /></a>
                          <a href="#"><i className="fa-brands fa-facebook fa-lg" /></a>
                          <a href="#"><i className="fa-brands fa-instagram fa-lg" /></a>
                          <a href="#"><i className="fa-brands fa-whatsapp" /></a>
                          <a href="#"><i className="fa-brands fa-blogger fa-lg" /></a>
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
                          <img className="logo-main" src={logoWhite} alt="Logo" />
                          <img className="logo-mobile" src={logoWhite} alt="Logo" />
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
                        <a href="/appointment" className="btn-main fx-slide"><span>Book a Free Security Consultation</span></a>
                        {/* <a href="pricing.html" class="btn-main fx-slide"><span>Explore Services</span></a> */}
                        <span id="menu-btn" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></header>
        {/* header end */}
        {/* content begin */}
        <div className="no-bottom no-top" id="content">
  <div id="top" />

  <section className="hero-video-section text-light section-dark">
    {/* VIDEO BACKGROUND */}
    <video
      className="bg-video"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src="/video/1.mp4" type="video/mp4" />
    </video>

    {/* OVERLAYS */}
    <div className="sw-overlay op-6" />
    <div className="gradient-edge-bottom" />

    <div className="container relative z-3">
      <div className="row g-4 justify-content-center">
        <div className="col-lg-12 text-center">
          <div className="spacer-double" />

          <div className="subtitle text-light s2 mb-3 wow fadeInUp">
            Cybersecurity Experts
          </div>

          <h1 className="fs-120 fs-xs-10vw wow fadeInUp">
            Cyber Aries Pvt. Ltd.
          </h1>

          <p className="lead mb-0 col-lg-6 offset-lg-3 wow fadeInUp">
            Empowering organizations with expert audits, continuous monitoring,
            and deep penetration testing — ensuring resilience, compliance, and
            confidence in every layer of your digital ecosystem.
          </p>

          <div className="spacer-single" />

          <a
            className="btn-main fx-slide wow fadeIn"
            href="/appointment"
          >
            <span>Book a Free Security Consultation</span>
          </a>
        </div>

        {/* BADGES */}
        <div className="row g-4">
          {[b1, b2, b3, b4, b5, b6].map((badge, i) => (
            <div
              key={i}
              className="col-lg-2 col-sm-4 col-6 wow fadeInRight"
              data-wow-delay={`${0.2 + i * 0.2}s`}
            >
              <img src={badge} className="w-100 px-4" alt={`Badge ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
</div>
        <section className="section-dark bg-dark-3 text-light pt-60 pb-50 relative overflow-hidden">
          <div className="w-30 abs abs-middle end-0 me-5 op-1">
            <img
              src={logoBigWhite}
              className="w-100 wow scaleIn"
              alt="Company logo"
            />
          </div>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-10">
                <h3 className="mb-0 fs-32 wow fadeInRight">Need a Comprehensive Cybersecurity Audit for Your Business?</h3>
              </div>
              <div className="col-md-2">
                <a className="btn-main fx-slide btn-line wow fadeInLeft" href="/appointment"><span>Get Your Audit Quote Now</span></a>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            backgroundImage: `url(${bg6})`,
            backgroundPosition: "top",
          }}
        >
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
                    <img
                      src={l1}
                      className="w-100 wow scaleIn"
                      alt="Cyber Defense Dashboard"
                    />
                  </div>
                  <div className="rounded-1 w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft wow zoomIn" data-wow-delay=".2s">
                    <img
                      src={s1}
                      className="w-100 wow scaleIn"
                      data-wow-delay=".2s"
                      alt="Security Monitoring Interface"
                    />
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
        {/* demo code */}
       <div className="section-dark bg-color text-light py-4 lh-1 overflow-hidden">
  <div className="marquee-outer">
    <div className="marquee-track">
      {/* BLOCK 1 */}
      <div className="marquee-group">
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

      {/* BLOCK 2 – exact copy of BLOCK 1 */}
      <div className="marquee-group">
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
  </div>
</div>


{/* demo code */}
        <section className="section-dark bg-dark text-light">
          <div className="container">
            <div className="row g-4 justify-content-center mb-2">
              <div className="col-lg-12">
                <div className="text-center">
                  <div className="subtitle wow fadeInUp">What We Provide</div>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">Robust Cybersecurity Services for Today’s Threats</h2>
                  <p className="lead wow fadeInUp" data-wow-delay=".4s">Protect your business from ever-evolving cyber risks with our end-to-end security solutions.
                    We offer advanced threat detection, real-time monitoring, and proactive defense strategies tailored to your infrastructure. Whether you're safeguarding sensitive data or ensuring compliance, our robust cybersecurity services help you stay secure, resilient, and ahead of the threat curve.</p>
                </div>
              </div>
            </div>
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
        <section className="section-dark bg-dark-2">
          <div className="container">
            <div className="row g-4 justify-content-center mb-2">
              <div className="col-lg-12 text-light">
                <div className="text-center">
                  <div className="subtitle wow fadeInUp">Why Choose Us</div>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">Complete Cyber Defense Against Modern Attacks</h2>
                  <p className="lead wow fadeInUp" data-wow-delay=".4s">Stay protected with a fully integrated defense strategy built for today’s complex cyber landscape.
                    From ransomware to phishing and zero-day exploits, we provide comprehensive protection across networks, endpoints, and cloud environments.</p>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInRight" data-wow-delay=".0s">
                <a href="/project-single" className="hover overflow-hidden rounded-1 bg-dark text-light d-block">
                  <div className="row g-0 align-items-center">
                    <div className="col-sm-6">
                      <div className="p-40">
                        <h3>Advanced Threat Detection</h3>
                        <p className="mb-0">Leverage real-time monitoring and AI-driven analytics to detect threats on your systems.</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="relative overflow-hidden">
                        <h3 className="abs text-white fs-32 lh-1 p-4 top-0 start-0 z-3">01</h3>
                        <img
                          src={s2}
                          className="w-100 hover-scale-1-2"
                          alt="Threat Detection"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                <a href="/project-single" className="hover overflow-hidden rounded-1 bg-dark text-light d-block">
                  <div className="row g-0 align-items-center">
                    <div className="col-sm-6">
                      <div className="p-40">
                        <h3>Zero Trust Architecture</h3>
                        <p className="mb-0">Enforce strict access control and verification at every level to prevent lateral movement in your network.</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="relative overflow-hidden">
                        <h3 className="abs text-white fs-32 lh-1 p-4 top-0 start-0 z-3">02</h3>
                        <img src={s3} className="w-100 hover-scale-1-2" alt="Zero Trust" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-3 col-sm-6">
                <div className="de_count text-center wow fadeInRight" data-wow-delay=".0s">
                  <i className="p-3 circle bg-color text-light fs-40 d-inline-block mb-2 icofont-briefcase-2" />
                  <h3 className="fs-40 mb-0 lh-1-1"><span className="timer" data-to={65250} data-speed={3000}>0</span>+</h3>
                  Hours of Works
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="de_count text-center wow fadeInRight" data-wow-delay=".2s">
                  <i className="p-3 circle bg-color text-light fs-40 d-inline-block mb-2 icofont-thumbs-up" />
                  <h3 className="fs-40 mb-0 lh-1-1"><span className="timer" data-to={23160} data-speed={3000}>0</span>+</h3>
                  Happy Customers
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="de_count text-center wow fadeInRight" data-wow-delay=".4s">
                  <i className="p-3 circle bg-color text-light fs-40 d-inline-block mb-2 icofont-users-alt-3" />
                  <h3 className="fs-40 mb-0 lh-1-1"><span className="timer" data-to={1500} data-speed={3000}>0</span>+</h3>
                  Experienced Workers
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="de_count text-center wow fadeInRight" data-wow-delay=".6s">
                  <i className="p-3 circle bg-color text-light fs-40 d-inline-block mb-2 icofont-badge" />
                  <h3 className="fs-40 mb-0 lh-1-1"><span className="timer" data-to={20} data-speed={3000}>0</span>+</h3>
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light pt-50 pb-0 overflow-hidden">
          <div className="container">
            <div className="row g-4 gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Cyber Security Experts</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">Defending Businesses With Expertise And Innovation</h2>
                <p className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">We provide comprehensive cybersecurity solutions tailored for organizations of all sizes. From proactive threat monitoring to advanced incident response, our dedicated team keeps your digital assets safe and resilient.</p>
                <a className="btn-main mb10 mb-3 wow fadeInUp" data-wow-delay=".6s" href="/contact"><span>Request Consultation</span></a>
                <div className="border-bottom my-3" />
                <div className="d-lg-flex align-items-center">
                  <div className="me-3">Google Rating</div>
                  <div className="de-flex justify-content-start align-items-center">
                    <div className="me-3">5.0</div>
                    <div className="d-flex fs-14 d-rating me-3">
                      <i className="fa fa-solid fa-star m-1" />
                      <i className="fa fa-solid fa-star m-1" />
                      <i className="fa fa-solid fa-star m-1" />
                      <i className="fa fa-solid fa-star m-1" />
                      <i className="fa fa-solid fa-star m-1" />
                    </div>
                  </div>
                  <div className="me-3">Based on 23k Reviews</div>
                </div>
                <div className="spacer-double" />
              </div>
              <div className="col-lg-6">
                <div className="relative">
                  <img
                    src={c1}
                    className="w-100 wow fadeInUp"
                    data-wow-delay=".3s"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-dark bg-dark text-light">
          <div className="container">
            <div className="row g-4 justify-content-center mb-2">
              <div className="col-lg-12">
                <div className="text-center">
                  <div className="subtitle wow fadeInUp">Real Study Case</div>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">Real-World Cybersecurity Success Stories</h2>
                  <p className="lead wow fadeInUp" data-wow-delay=".4s">
                    Explore how our tailored cybersecurity solutions have helped businesses overcome critical challenges — from preventing data breaches and fixing cloud vulnerabilities to achieving compliance and building long-term resilience.
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {/* service item begin */}
              <div className="col-lg-4 col-sm-6">
                <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".0s">
                  <img
                    src={project1}
                    className="hover-scale-1-1 w-100"
                    alt="img"
                  />
                  <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                    <div className="mb-3">Safeguard your online store with end-to-end protection, preventing data breaches, fraud, and unauthorized access.</div>
                    <a className="btn-line" href="/project-single">View Details</a>
                  </div>
                  <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1" />
                  <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                    <h4 className="fs-20 mb-3">E-Commerce Platform Security</h4>
                  </div>
                  <div className="gradient-edge-bottom abs w-100 h-60 bottom-0" />
                </div>
              </div>
              {/* service item end */}
              {/* service item begin */}
              <div className="col-lg-4 col-sm-6">
                <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".3s">
                  <img
                    src={project2}
                    className="hover-scale-1-1 w-100"
                    alt="img"
                  />
                  <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                    <div className="mb-3">Eliminate hidden cloud vulnerabilities with expert misconfiguration audits, secure policies, and real-time fixes.</div>
                    <a className="btn-line" href="/project-single">View Details</a>
                  </div>
                  <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1" />
                  <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                    <h4 className="fs-20 mb-3">Cloud Misconfiguration Fix</h4>
                  </div>
                  <div className="gradient-edge-bottom abs w-100 h-60 bottom-0" />
                </div>
              </div>
              {/* service item end */}
              {/* service item begin */}
              <div className="col-lg-4 col-sm-6">
                <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".6s">
                  <img
                    src={project3}
                    className="hover-scale-1-1 w-100"
                    alt="img"
                  />
                  <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                    <div className="mb-3">Strengthen your firm’s defenses with advanced protection, compliance support, and incident response readiness.</div>
                    <a className="btn-line" href="/project-single">View Details</a>
                  </div>
                  <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1" />
                  <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                    <h4 className="fs-20 mb-3">Law Firm Cyber Resilience</h4>
                  </div>
                  <div className="gradient-edge-bottom abs w-100 h-60 bottom-0" />
                </div>
              </div>
              {/* service item end */}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row g-4 mb-2">
              <div className="col-lg-12 text-center">
                <div className="subtitle wow fadeInUp mb-3">Testimonials</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">Hear It from Our Happy Customers</h2>
                <p className="lead wow fadeInUp" data-wow-delay=".4s">See how our cybersecurity solutions have helped businesses stay secure, compliant, and resilient against evolving digital threats.</p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="owl-carousel owl-theme wow fadeInUp four-cols-center-dots">
                {/* testimonial item begin */}
                <div className="item">
                  <div className="bg-light rounded-1 p-30">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="w-40px circle me-3"
                          alt="img"
                          src={testimonial1}
                        />
                        <div className="mt-2">
                          <div className="text-dark fw-bold lh-1">
                            Sarah Johnson
                          </div>
                          <small>
                            15 January 2025
                          </small>
                        </div>
                      </div>
                      <img src="images/misc/google-icon.svg" className="w-30px" alt />
                    </div>
                    <div className="de-rating-ext mb-2">
                      <span className="d-stars">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      </span>
                      <span className="ms-2 text-white">5.0</span>
                    </div>
                    <p>"CyberAries helped us identify critical vulnerabilities before attackers could exploit them. Their team is proactive and truly knows their craft."</p>
                  </div>
                </div>
                {/* testimonial item end */}
                {/* testimonial item begin */}
                <div className="item">
                  <div className="bg-light rounded-1 p-30">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="w-40px circle me-3"
                          alt="img"
                          src={testimonial2}
                        />
                        <div className="mt-2">
                          <div className="text-dark fw-bold lh-1">
                            Mark Davis
                          </div>
                          <small>
                            28 December 2024
                          </small>
                        </div>
                      </div>
                      <img src="images/misc/google-icon.svg" className="w-30px" alt />
                    </div>
                    <div className="de-rating-ext mb-2">
                      <span className="d-stars">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      </span>
                      <span className="ms-2 text-white">5.0</span>
                    </div>
                    <p>"Thanks to their 24/7 monitoring, we sleep better knowing our systems are safe. They’ve prevented several potential breaches already."</p>
                  </div>
                </div>
                {/* testimonial item end */}
                {/* testimonial item begin */}
                <div className="item">
                  <div className="bg-light rounded-1 p-30">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="w-40px circle me-3"
                          alt="img"
                          src={testimonial3}
                        />
                        <div className="mt-2">
                          <div className="text-dark fw-bold lh-1">
                            Emily Carter
                          </div>
                          <small>
                            10 December 2024
                          </small>
                        </div>
                      </div>
                      <img src="images/misc/google-icon.svg" className="w-30px" alt />
                    </div>
                    <div className="de-rating-ext mb-2">
                      <span className="d-stars">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      </span>
                      <span className="ms-2 text-white">5.0</span>
                    </div>
                    <p>"Their penetration testing gave us a clear picture of our risks. The remediation plan was actionable and effective. Highly recommended."</p>
                  </div>
                </div>
                {/* testimonial item end */}
                {/* testimonial item begin */}
                <div className="item">
                  <div className="bg-light rounded-1 p-30">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="w-40px circle me-3"
                          alt="img"
                          src={testimonial4}
                        />
                        <div className="mt-2">
                          <div className="text-dark fw-bold lh-1">
                            James Wilson
                          </div>
                          <small>
                            4 December 2024
                          </small>
                        </div>
                      </div>
                      <img src="images/misc/google-icon.svg" className="w-30px" alt />
                    </div>
                    <div className="de-rating-ext mb-2">
                      <span className="d-stars">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      </span>
                      <span className="ms-2 text-white">5.0</span>
                    </div>
                    <p>"We achieved ISO 27001 compliance with their guidance. The team is knowledgeable, patient, and delivers excellent results every time."</p>
                  </div>
                </div>
                {/* testimonial item end */}
                {/* testimonial item begin */}
                <div className="item">
                  <div className="bg-light rounded-1 p-30">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="w-40px circle me-3"
                          alt="img"
                          src={testimonial5}
                        />
                        <div className="mt-2">
                          <div className="text-dark fw-bold lh-1">
                            Olivia Martinez
                          </div>
                          <small>
                            22 November 2024
                          </small>
                        </div>
                      </div>
                      <img src="images/misc/google-icon.svg" className="w-30px" alt />
                    </div>
                    <div className="de-rating-ext mb-2">
                      <span className="d-stars">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      </span>
                      <span className="ms-2 text-white">5.0</span>
                    </div>
                    <p>"Our law firm’s sensitive data is now fully protected. CyberAries gave us the confidence to work securely in a digital-first world."</p>
                  </div>
                </div>
                {/* testimonial item end */}
                {/* testimonial item begin */}
                <div className="item">
                  <div className="bg-light rounded-1 p-30">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="w-40px circle me-3"
                          alt="img"
                          src={testimonial6}
                        />
                        <div className="mt-2">
                          <div className="text-dark fw-bold lh-1">
                            Michael Brown
                          </div>
                          <small>
                            16 November 2024
                          </small>
                        </div>
                      </div>
                      <img src="images/misc/google-icon.svg" className="w-30px" alt />
                    </div>
                    <div className="de-rating-ext mb-2">
                      <span className="d-stars">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      </span>
                      <span className="ms-2 text-white">5.0</span>
                    </div>
                    <p>"Their incident response team saved us when we faced a ransomware attack. We were back online quickly with minimal disruption."</p>
                  </div>
                </div>
                {/* testimonial item end */}
                {/* testimonial item begin */}
                <div className="item">
                  <div className="bg-light rounded-1 p-30">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="w-40px circle me-3"
                          alt="img"
                          src={testimonial7}
                        />
                        <div className="mt-2">
                          <div className="text-dark fw-bold lh-1">
                            Isabella Green
                          </div>
                          <small>
                            2 November 2024
                          </small>
                        </div>
                      </div>
                      <img src="images/misc/google-icon.svg" className="w-30px" alt />
                    </div>
                    <div className="de-rating-ext mb-2">
                      <span className="d-stars">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      </span>
                      <span className="ms-2 text-white">5.0</span>
                    </div>
                    <p>"They transformed our cloud security. No more misconfigurations or hidden risks — we feel secure managing sensitive workloads."</p>
                  </div>
                </div>
                {/* testimonial item end */}
                {/* testimonial item begin */}
                <div className="item">
                  <div className="bg-light rounded-1 p-30">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="w-40px circle me-3"
                          alt="img"
                          src={testimonial8}
                        />
                        <div className="mt-2">
                          <div className="text-dark fw-bold lh-1">
                            William Harris
                          </div>
                          <small>
                            25 October 2024
                          </small>
                        </div>
                      </div>
                      <img src="images/misc/google-icon.svg" className="w-30px" alt />
                    </div>
                    <div className="de-rating-ext mb-2">
                      <span className="d-stars">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      </span>
                      <span className="ms-2 text-white">5.0</span>
                    </div>
                    <p>"Their security awareness training dramatically reduced phishing incidents in our company. It’s worth every penny."</p>
                  </div>
                </div>
                {/* testimonial item end */}
                {/* testimonial item begin */}
                <div className="item">
                  <div className="bg-light rounded-1 p-30">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="w-40px circle me-3"
                          alt="img"
                          src={testimonial9}
                        />
                        <div className="mt-2">
                          <div className="text-dark fw-bold lh-1">
                            Sophia Lee
                          </div>
                          <small>
                            11 October 2024
                          </small>
                        </div>
                      </div>
                      <img src="images/misc/google-icon.svg" className="w-30px" alt />
                    </div>
                    <div className="de-rating-ext mb-2">
                      <span className="d-stars">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      </span>
                      <span className="ms-2 text-white">5.0</span>
                    </div>
                    <p>"From consultation to implementation, everything was seamless. They truly care about securing their clients’ businesses."</p>
                  </div>
                </div>
                {/* testimonial item end */}
                {/* testimonial item begin */}
                <div className="item">
                  <div className="bg-light rounded-1 p-30">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="w-40px circle me-3"
                          alt="img"
                          src={testimonial10}
                        />
                        <div className="mt-2">
                          <div className="text-dark fw-bold lh-1">
                            Daniel Scott
                          </div>
                          <small>
                            1 October 2024
                          </small>
                        </div>
                      </div>
                      <img src="images/misc/google-icon.svg" className="w-30px" alt />
                    </div>
                    <div className="de-rating-ext mb-2">
                      <span className="d-stars">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      </span>
                      <span className="ms-2 text-white">5.0</span>
                    </div>
                    <p>"A top-notch cybersecurity team! They guided us through building a strong defense strategy tailored to our unique needs."</p>
                  </div>
                </div>
                {/* testimonial item end */}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row g-4 mb-2">
              <div className="col-lg-12 text-center">
                <div className="subtitle wow fadeInUp mb-3">Testimonials</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">Hear It from Our Happy Customers</h2>
                <p className="lead wow fadeInUp" data-wow-delay=".4s">See how our cybersecurity solutions have helped businesses stay secure, compliant, and resilient against evolving digital threats.</p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-4">
                <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                  <img
                    src={news1}
                    className="w-100 hover-scale-1-1"
                    alt="Cybersecurity News"
                  />
                  <div className="absolute start-0 bottom-0 p-40 z-2">
                    <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Cyber Insights</div>
                    <h4>Top Strategies to Prevent Ransomware Attacks in 2025</h4>
                    <div className="relative">
                      <img
                        src={testimonial1}
                        className="w-20px me-2 circle"
                        alt="img"
                      />
                      <div className="d-inline fs-14 me-3">Michael Carter</div>
                      <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />15 Jul 2025</div>
                    </div>
                  </div>
                  <div className="gradient-edge-bottom h-70" />
                </a>
              </div>
              <div className="col-lg-4">
                <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                  <img
                    src={news2}
                    className="w-100 hover-scale-1-1"
                    alt="Cybersecurity News"
                  />
                  <div className="absolute start-0 bottom-0 p-40 z-2">
                    <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Threat Reports</div>
                    <h4>AI-Powered Cyber Threats: How to Stay Ahead of Hackers</h4>
                    <div className="relative">
                      <img
                        src={testimonial2}
                        className="w-20px me-2 circle"
                        alt="img"
                      />
                      <div className="d-inline fs-14 me-3">Sophia Lee</div>
                      <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />10 Jul 2025</div>
                    </div>
                  </div>
                  <div className="gradient-edge-bottom h-70" />
                </a>
              </div>
              <div className="col-lg-4">
                <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                  <img
                    src={news3}
                    className="w-100 hover-scale-1-1"
                    alt="Cybersecurity News"
                  />
                  <div className="absolute start-0 bottom-0 p-40 z-2">
                    <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Best Practices</div>
                    <h4>Building a Strong Cyber Defense Plan for Your Business</h4>
                    <div className="relative">
                      <img
                        src={testimonial3}
                        className="w-20px me-2 circle"
                        alt="img"
                      />
                      <div className="d-inline fs-14 me-3">David Wilson</div>
                      <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />2 Jul 2025</div>
                    </div>
                  </div>
                  <div className="gradient-edge-bottom h-70" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section-dark bg-color text-light pt-60 pb-50 relative overflow-hidden">
          <div className="w-30 abs abs-middle end-0 me-5 op-1">
            <img
              src={logoBigWhite}
              className="w-100 wow scaleIn"
              alt="img"
            />
          </div>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-10">
                <h3 className="mb-0 fs-32 wow fadeInRight">Need a Comprehensive Cybersecurity Audit for Your Business?</h3>
              </div>
              <div className="col-md-2">
                <a className="btn-main fx-slide btn-line wow fadeInLeft" href="/appointment"><span>Get Your Audit Quote
                  Now</span></a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Terms Modal */}
      <div id="termsModal" className="modal-overlay">
        <div className="modal-content">
          <span className="modal-close">×</span>
          <iframe title="Terms & Conditions" src="/Terms&Conditions" />
        </div>
      </div>
      {/* Privacy Modal */}
      <div id="privacyModal" className="modal-overlay">
        <div className="modal-content">
          <span className="modal-close">×</span>
          <iframe title="Privacy Policy" src="/PrivacyPolicy" />
        </div>
      </div>
      {/* content end */}
      {/* footer begin */}
      <footer className="section-dark">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-sm-6">
              <img
                src={logoWhite}
                className="logo-footer"
                alt="img"
              />
              <div className="spacer-20" />
              <p>At Cyber Aries Pvt. Ltd., we’re committed to delivering professional, high-quality cybersecurity solutions. From proactive threat monitoring to advanced data protection, we help keep your business secure while preserving its reputation and protecting it from evolving digital threats.</p>
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
                      <li><a href="/Terms&Conditions" data-modal="termsModal">Terms &amp; Conditions</a></li>
                      <li><a href="/privacy" data-modal="privacyModal">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></footer>
      {/* footer end */}
      {/* Javascript Files
    ================================================== */}
      {/* CSS Files
  ================================================== */}
      <style dangerouslySetInnerHTML={{ __html: "\n        .modal-overlay {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.65);\n            backdrop-filter: blur(4px);\n            z-index: 99999;\n        }\n    \n        .modal-content {\n            width: 80%;\n            height: 80%;\n            background: #fff;\n            margin: 40px auto;\n            padding: 0;\n            border-radius: 10px;\n            position: relative;\n            overflow: hidden;\n        }\n    \n        .modal-content iframe {\n            width: 100%;\n            height: 100%;\n            border: none;\n        }\n    \n        .modal-close {\n            position: absolute;\n            top: 10px;\n            right: 15px;\n            font-size: 30px;\n            cursor: pointer;\n            color: #333;\n        }\n    " }} />
    </div>
  )
}

export default Home