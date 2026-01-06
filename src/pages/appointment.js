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

function Appointment() {
    return (
        <div>
            <title>Cyber Aries Pvt. Ltd.</title>
            <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16" />
            <meta content="text/html;charset=utf-8" http-equi v="Content-Type" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="CyberGuard - Ecology & Solar Energy HTML Template" name="description" />
            <meta content name="keywords" />
            <meta content name="author" />
            {/* CSS Files
    ================================================== */}
            <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
            <link href="css/plugins.css" rel="stylesheet" type="text/css" />
            <link href="css/style.css" rel="stylesheet" type="text/css" />
            <link href="css/datepicker.css" rel="stylesheet" type="text/css" />
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
                                            <div className="topbar-widget me-3"><a href="#"><i className="icofont-location-pin" />Hiranandani Business Park, Powai,
                                                Mumbai - 400071</a></div>
                                            <div className="topbar-widget me-3"><a href="#"><i className="icofont-phone" />+91
                                                8828495202</a></div>
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
                                            <a href="/appointment" className="btn-main fx-slide"><span>Book a Free Security
                                                Consultation</span></a>
                                            {/* <a href="pricing.html" class="btn-main fx-slide"><span>Explore Services</span></a> */}
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
                <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down" />
                <div className="no-bottom no-top" id="content">
                    <div id="top" />
                    <section className="section-dark jarallax">
                        <img src="images/background/1.webp" className="jarallax-img" alt />
                        <div className="container relative z-2">
                            <div className="spacer-single xs-hide" />
                            <div className="row g-4 justify-content-center align-items-center">
                                <div className="col-lg-6">
                                    <div className="spacer-double sm-hide" />
                                    <div className="relative">
                                        <div id="success_message_col" className="success text-light p-40 h-100">
                                            <h3>Thank You For Reaching Out</h3>
                                            <p>We've received your request and a cybersecurity expert will contact you shortly.
                                                Click the button below to submit another request.</p>
                                            <a className="btn-main" href="/get-a-quote">Submit Again</a>
                                        </div>
                                        <form name="bookingForm" id="booking_form" className="relative z1000 bg-light rounded-1 p-40" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSdCFuDARkRQbPWw-7RnDEhLW5uUz11Ncx4QbAPxak3nS-TA-Q/formResponse" target="gform-target">
                                            <div className="row g-3">
                                                <div className="col-lg-12">
                                                    <h2 className="mb-3"><i className="fa fa-shield id-color me-2" /> Book a Free
                                                        Consultation</h2>
                                                    <p>Concerned about cyber threats? Book your free consultation today and get
                                                        expert advice on how to protect your
                                                        systems, data, and reputation.</p>
                                                    <div className="relative">
                                                        <select name="entry.2100516128" id="service" className="form-control">
                                                            <option disabled selected value>Select Cybersecurity Service
                                                            </option>
                                                            <option value="Network Vulnerability Assessment">Network
                                                                Vulnerability Assessment</option>
                                                            <option value="Penetration Testing">Penetration Testing</option>
                                                            <option value="Managed Security Services">Managed Security Services
                                                            </option>
                                                            <option value="Incident Response Planning">Incident Response
                                                                Planning</option>
                                                            <option value="Security Awareness Training">Security Awareness
                                                                Training</option>
                                                            <option value="Compliance & Risk Assessment">Compliance &amp; Risk
                                                                Assessment</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                        <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down" />
                                                    </div>
                                                </div>
                                                {/* Optional 'Other service' field (hidden until selected) */}
                                                <div className="col-lg-12" id="service_other_block" style={{ display: 'none' }}>
                                                    <input type="text" name="entry.311169682" id="service_other" className="form-control" placeholder="Specify other service" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <div id="date" className="relative input-group date">
                                                        <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-calendar" />
                                                        <input className="form-control" name="entry.1947016194" type="text" placeholder="dd-mm-yyyy" autoComplete="off" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="relative">
                                                        <select name="entry.355360033" id="time" className="form-control">
                                                            <option disabled selected value>Select Time</option>
                                                            <option value="10:00">10:00</option>
                                                            <option value="11:00">11:00</option>
                                                            <option value="12:00">12:00</option>
                                                            <option value="13:00">13:00</option>
                                                            <option value="14:00">14:00</option>
                                                            <option value="15:00">15:00</option>
                                                            <option value="16:00">16:00</option>
                                                            <option value="17:00">17:00</option>
                                                            <option value="18:00">18:00</option>
                                                            <option value="19:00">19:00</option>
                                                            <option value="20:00">20:00</option>
                                                        </select>
                                                        <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" name="entry.1783163467" id="name" placeholder="Name" className="form-control" required />
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="email" name="entry.913903228" id="email" placeholder="Email" className="form-control" required />
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="tel" name="entry.1429787953" id="phone" placeholder="Phone" className="form-control" required pattern="^\+?[0-9\s\-]{7,20}$" />
                                                </div>
                                                <div className="col-lg-12">
                                                    <textarea name="entry.1035017623" id="message" className="form-control" placeholder="Tell us about your security concerns or needs..." defaultValue={""} />
                                                </div>
                                                {/* Added: How did you hear about CyberAries? */}
                                                <div className="col-lg-12">
                                                    <div className="relative">
                                                        <select name="entry.985637526" id="referrer" className="form-control">
                                                            <option disabled selected value>How did you hear about CyberAries?
                                                            </option>
                                                            <option value="Search Engine">Search Engine (Google / Bing)</option>
                                                            <option value="Social Media">Social Media</option>
                                                            <option value="Referral">Referral</option>
                                                            <option value="Industry Event/Conference">Industry Event /
                                                                Conference</option>
                                                            <option value="Online Advertisement">Online Advertisement</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                        <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down" />
                                                    </div>
                                                </div>
                                                {/* Honeypot field */}
                                                <input type="text" id="website" name="entry.2139951012" autoComplete="off" style={{ display: 'none' }} />
                                                <div className="col-lg-12">
                                                    <div id="submit">
                                                        <input type="submit" id="send_message" defaultValue="Send Appointment" className="btn-main" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="cy_modal" style={{ display: 'none', position: 'fixed', inset: 0, alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,.6)', zIndex: 9999 }}>
                                                <div style={{ background: '#0b1221', color: '#fff', padding: 20, borderRadius: 10, maxWidth: 520, margin: 'auto' }}>
                                                    <h3 id="cy_modal_title" style={{ margin: '0 0 6px 0' }}>Request submitted</h3>
                                                    <div id="cy_modal_msg" style={{ opacity: '.9', marginBottom: 10 }}>Thanks — your
                                                        request has been recorded.</div>
                                                    <div style={{ display: 'flex', gap: 8 }}>
                                                        <a id="cy_modal_ics" href="#" download="cyberaries-event.ics" style={{ background: '#0b5bd7', color: '#fff', padding: '8px 12px', borderRadius: 8, textDecoration: 'none' }}>Add
                                                            to
                                                            Calendar</a>
                                                        <a id="cy_modal_wa" href="#" target="_blank" style={{ background: '#25D366', color: '#062b12', padding: '8px 12px', borderRadius: 8, textDecoration: 'none' }}>Confirm
                                                            on WhatsApp</a>
                                                        <button id="cy_modal_close" style={{ marginLeft: 'auto', background: 'transparent', border: '1px solid rgba(255,255,255,.12)', color: '#fff', padding: '8px 12px', borderRadius: 8 }}>Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="error_message" className="error">
                                                Sorry there was an error sending your form.
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sw-overlay" />
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
                                <p>At Cyber Aries Pvt. Ltd., we’re committed to delivering professional, high-quality
                                    cybersecurity
                                    solutions. From proactive threat monitoring to advanced data protection, we help keep your
                                    business
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
            <iframe id="gform-target" style={{ display: 'none' }} />
            {/* Javascript Files
    ================================================== */}
            {/*  */}
            {/* datepicker begin */}
            {/* datepicker close */}
        </div>
    )
}

export default Appointment