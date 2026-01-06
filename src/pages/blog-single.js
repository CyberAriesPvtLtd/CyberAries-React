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


function BlogSinglePage() {
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
                        <div className="sw-overlay op-8" />
                        <img src="images/background/7.webp" className="jarallax-img" alt />
                        <div className="container relative z-2">
                            <div className="row gy-4 gx-5 align-items-center">
                                <div className="spacer-double sm-hide" />
                                <div className="col-lg-12">
                                    <h1 className="mb-0 wow fadeInUp" data-wow-delay=".2s">E-Commerce Platform Security</h1>
                                    <ul className="crumb wow fadeInUp">
                                        <li><a href="/">Home</a></li>
                                        <li className="active">Projects</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-lg-8">
                                    <div className="blog-read">
                                        <p>
                                            Cybersecurity is a critical component of modern business infrastructure. As threats become more advanced, having a strong cyber defense strategy is essential to protect your data, systems, and reputation.
                                            Our cybersecurity services are designed to detect, prevent, and respond to threats in real time—minimizing risks and keeping your operations secure.
                                            Here are the top benefits of investing in professional cybersecurity services:
                                        </p>
                                        <ol className="ol-style-1">
                                            <li>
                                                <h4>Proactive Threat Detection</h4>
                                                <p>
                                                    Our systems constantly monitor your network for unusual activity, identifying and blocking potential threats before they cause harm.
                                                </p>
                                            </li>
                                            <li>
                                                <h4>Data Breach Prevention</h4>
                                                <p>
                                                    We implement strong encryption and access controls to prevent unauthorized access to sensitive business and customer information.
                                                </p>
                                            </li>
                                            <li>
                                                <h4>Ransomware &amp; Malware Protection</h4>
                                                <p>
                                                    Our multi-layered security solutions help block ransomware, spyware, and malicious software at every point in your infrastructure.
                                                </p>
                                            </li>
                                            <li>
                                                <h4>24/7 Monitoring and Response</h4>
                                                <p>
                                                    Our security operations center (SOC) monitors your systems around the clock, ensuring rapid response to incidents and suspicious activity.
                                                </p>
                                            </li>
                                            <li>
                                                <h4>Regulatory Compliance Support</h4>
                                                <p>
                                                    We help your business meet industry regulations like GDPR, HIPAA, or ISO 27001 through secure infrastructure and audit-ready documentation.
                                                </p>
                                            </li>
                                            <li>
                                                <h4>Reduced Downtime and Recovery Costs</h4>
                                                <p>
                                                    By preventing breaches and rapidly responding to incidents, we help reduce downtime, data loss, and associated financial impacts.
                                                </p>
                                            </li>
                                            <li>
                                                <h4>Increased Trust &amp; Reputation</h4>
                                                <p>
                                                    A strong cybersecurity posture builds customer trust and strengthens your brand’s reputation by demonstrating your commitment to data protection.
                                                </p>
                                            </li>
                                        </ol>
                                        <img src="images/misc/l1.webp" className="w-100 rounded-1" alt="Cybersecurity Services Benefit" />
                                    </div>
                                    <div className="spacer-single" />
                                    <div id="blog-comment">
                                        <h4>Comments (5)</h4>
                                        <div className="spacer-half" />
                                        <ol>
                                            <li>
                                                <div className="avatar">
                                                    <img src="images/testimonial/1.webp" alt />
                                                </div>
                                                <div className="comment-info">
                                                    <span className="c_name">Merrill Rayos</span>
                                                    <span className="c_date id-color">2 days ago</span>
                                                    <span className="c_reply"><a href="#">Reply</a></span>
                                                    <div className="clearfix" />
                                                </div>
                                                <div className="comment">Excellent overview. We’ve implemented SOC services and have already seen a drop in phishing incidents. Highly recommend investing early.</div>
                                                <ol>
                                                    <li>
                                                        <div className="avatar">
                                                            <img src="images/testimonial/2.webp" alt />
                                                        </div>
                                                        <div className="comment-info">
                                                            <span className="c_name">Jackqueline Sprang</span>
                                                            <span className="c_date id-color">2 days ago</span>
                                                            <span className="c_reply"><a href="#">Reply</a></span>
                                                            <div className="clearfix" />
                                                        </div>
                                                        <div className="comment">Same here. Endpoint protection has saved us more than once. This blog helped reinforce our decision to upgrade.</div>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <div className="avatar">
                                                    <img src="images/testimonial/3.webp" alt />
                                                </div>
                                                <div className="comment-info">
                                                    <span className="c_name">Sanford Crowley</span>
                                                    <span className="c_date id-color">2 days ago</span>
                                                    <span className="c_reply"><a href="#">Reply</a></span>
                                                    <div className="clearfix" />
                                                </div>
                                                <div className="comment">Great content. This is exactly what I was looking for to justify cybersecurity investment to management.</div>
                                                <ol>
                                                    <li>
                                                        <div className="avatar">
                                                            <img src="images/testimonial/4.webp" alt />
                                                        </div>
                                                        <div className="comment-info">
                                                            <span className="c_name">Lyndon Pocekay</span>
                                                            <span className="c_date id-color">2 days ago</span>
                                                            <span className="c_reply"><a href="#">Reply</a></span>
                                                            <div className="clearfix" />
                                                        </div>
                                                        <div className="comment">If your company handles any client data, these measures are essential. Great write-up and explanation.</div>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <div className="avatar">
                                                    <img src="images/testimonial/5.webp" alt />
                                                </div>
                                                <div className="comment-info">
                                                    <span className="c_name">Aleen Crigger</span>
                                                    <span className="c_date id-color">2 days ago</span>
                                                    <span className="c_reply"><a href="#">Reply</a></span>
                                                    <div className="clearfix" />
                                                </div>
                                                <div className="comment">Appreciate the breakdown. I didn’t realize how vulnerable small businesses are until I saw the numbers. Thanks for this.</div>
                                            </li>
                                        </ol>
                                        <div className="spacer-single" />
                                        <div id="comment-form-wrapper">
                                            <h4>Leave a Comment</h4>
                                            <div className="comment_form_holder">
                                                <form id="contact_form" name="form1" className="form-border" method="post" action="#">
                                                    <label>Name</label>
                                                    <input type="text" name="name" id="name" className="form-control" />
                                                    <label>Email <span className="req">*</span></label>
                                                    <input type="text" name="email" id="email" className="form-control" />
                                                    <div id="error_email" className="error">Please check your email</div>
                                                    <label>Message <span className="req">*</span></label>
                                                    <textarea cols={10} rows={10} name="message" id="message" className="form-control" defaultValue={""} />
                                                    <div id="error_message" className="error">Please check your message</div>
                                                    <div id="mail_success" className="success">Thank you. Your message has been sent.</div>
                                                    <div id="mail_failed" className="error">Error, email not sent</div>
                                                    <p id="btnsubmit">
                                                        <input type="submit" id="send" defaultValue="Send" className="btn-main" />
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="widget widget-post">
                                        <h4>Popular Posts</h4>
                                        <ul className="de-bloglist-type-1">
                                            <li>
                                                <div className="d-image">
                                                    <img src="images/news/s1.webp" alt />
                                                </div>
                                                <div className="d-content">
                                                    <a href="/blog-single">
                                                        <h4>Top Strategies to Prevent Ransomware Attacks in 2025</h4>
                                                    </a>
                                                    <div className="d-date">15 Jul 2025</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-image">
                                                    <img src="images/news/s2.webp" alt />
                                                </div>
                                                <div className="d-content">
                                                    <a href="/blog-single">
                                                        <h4>AI-Powered Cyber Threats: How to Stay Ahead of Hackers</h4>
                                                    </a>
                                                    <div className="d-date">10 Jul 2025</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-image">
                                                    <img src="images/news/s3.webp" alt />
                                                </div>
                                                <div className="d-content">
                                                    <a href="/blog-single">
                                                        <h4>Building a Strong Cyber Defense Plan for Your Business</h4>
                                                    </a>
                                                    <div className="d-date">2 Jul 2025</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-image">
                                                    <img src="images/news/s4.webp" alt />
                                                </div>
                                                <div className="d-content">
                                                    <a href="/blog-single">
                                                        <h4>Ensuring Cloud Security: Best Practices for 2025</h4>
                                                    </a>
                                                    <div className="d-date">28 Jun 2025</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-image">
                                                    <img src="images/news/s5.webp" alt />
                                                </div>
                                                <div className="d-content">
                                                    <a href="/blog-single">
                                                        <h4>Phishing Scams on the Rise: How to Protect Your Team</h4>
                                                    </a>
                                                    <div className="d-date">20 Jun 2025</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-image">
                                                    <img src="images/news/s6.webp" alt />
                                                </div>
                                                <div className="d-content">
                                                    <a href="/blog-single">
                                                        <h4>Latest Zero-Day Vulnerabilities Every Business Should Know</h4>
                                                    </a>
                                                    <div className="d-date">15 Jun 2025</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_tags">
                                        <h4>Popular Tags</h4>
                                        <ul>
                                            <li><a href="#link">Cybersecurity</a></li>
                                            <li><a href="#link">Ransomware</a></li>
                                            <li><a href="#link">Threat Detection</a></li>
                                            <li><a href="#link">Data Protection</a></li>
                                            <li><a href="#link">Cloud Security</a></li>
                                            <li><a href="#link">Phishing</a></li>
                                            <li><a href="#link">Zero-Day</a></li>
                                            <li><a href="#link">AI Threats</a></li>
                                            <li><a href="#link">Incident Response</a></li>
                                            <li><a href="#link">SOC</a></li>
                                            <li><a href="#link">Cyber Awareness</a></li>
                                            <li><a href="#link">Network Defense</a></li>
                                        </ul>
                                    </div>
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

export default BlogSinglePage