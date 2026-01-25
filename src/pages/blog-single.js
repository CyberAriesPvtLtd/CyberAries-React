import React from "react";
import { useModals } from "../useModals";

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

function BlogSinglePage() {
    useModals();
    return (
        <div>
            <title>Blog Details – CyberAries Security Solutions</title>
            <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16" />
            <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="Cyber Security Insights and detailed project reporting." name="description" />
            <meta name="keywords" content="cybersecurity, data protection, network security" />
            <meta name="author" content="CyberAries" />

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
                                            <div className="topbar-widget me-3"><a href="/"><i className="icofont-location-pin" />Hiranandani Business Park, Powai, Mumbai - 400071</a></div>
                                            <div className="topbar-widget me-3"><a href="/"><i className="icofont-phone" />+91 8828495202</a></div>
                                            <div className="topbar-widget me-3"><a href="mailto:info@cyberaries.com"><i className="icofont-envelope" />info@cyberaries.com</a></div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="social-icons">
                                                <a href="/"><i className="fa-brands fa-facebook fa-lg" /></a>
                                                <a href="/"><i className="fa-brands fa-x-twitter fa-lg" /></a>
                                                <a href="/"><i className="fa-brands fa-youtube fa-lg" /></a>
                                                <a href="/"><i className="fa-brands fa-pinterest fa-lg" /></a>
                                                <a href="/"><i className="fa-brands fa-instagram fa-lg" /></a>
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
                        <div className="sw-overlay op-8" />
                        <img src="images/background/7.webp" className="jarallax-img" alt="Background" />
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
                                        </p>
                                        <ol className="ol-style-1">
                                            <li>
                                                <h4>Proactive Threat Detection</h4>
                                                <p>Our systems constantly monitor your network for unusual activity, identifying and blocking potential threats before they cause harm.</p>
                                            </li>
                                            <li>
                                                <h4>Data Breach Prevention</h4>
                                                <p>We implement strong encryption and access controls to prevent unauthorized access to sensitive business and customer information.</p>
                                            </li>
                                            <li>
                                                <h4>Ransomware &amp; Malware Protection</h4>
                                                <p>Our multi-layered security solutions help block ransomware, spyware, and malicious software at every point in your infrastructure.</p>
                                            </li>
                                            <li>
                                                <h4>24/7 Monitoring and Response</h4>
                                                <p>Our security operations center (SOC) monitors your systems around the clock, ensuring rapid response to incidents and suspicious activity.</p>
                                            </li>
                                        </ol>
                                        <img src="images/misc/l1.webp" className="w-100 rounded-1" alt="Security Infrastructure Diagram" />
                                    </div>

                                    <div className="spacer-single" />
                                    <div id="blog-comment">
                                        <h4>Comments (5)</h4>
                                        <div className="spacer-half" />
                                        <ol>
                                            <li>
                                                <div className="avatar">
                                                    <img src="images/testimonial/1.webp" alt="User Avatar" />
                                                </div>
                                                <div className="comment-info">
                                                    <span className="c_name">Merrill Rayos</span>
                                                    <span className="c_date id-color">2 days ago</span>
                                                    <span className="c_reply"><a href="/">Reply</a></span>
                                                    <div className="clearfix" />
                                                </div>
                                                <div className="comment">Excellent overview. We’ve implemented SOC services and have already seen a drop in phishing incidents.</div>
                                            </li>
                                        </ol>

                                        <div className="spacer-single" />
                                        <div id="comment-form-wrapper">
                                            <h4>Leave a Comment</h4>
                                            <div className="comment_form_holder">
                                                <form id="contact_form" name="form1" className="form-border" method="post" action="/">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" name="name" id="name" className="form-control" />
                                                    <label htmlFor="email">Email <span className="req">*</span></label>
                                                    <input type="text" name="email" id="email" className="form-control" />
                                                    <label htmlFor="message">Message <span className="req">*</span></label>
                                                    <textarea cols={10} rows={10} name="message" id="message" className="form-control" defaultValue={""} />
                                                    <p id="btnsubmit">
                                                        <input type="submit" id="send" value="Send" className="btn-main" />
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
                                                    <img src="images/news/s1.webp" alt="Ransomware Blog" />
                                                </div>
                                                <div className="d-content">
                                                    <a href="/blog-single"><h4>Top Strategies to Prevent Ransomware in 2025</h4></a>
                                                    <div className="d-date">15 Jul 2025</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-image">
                                                    <img src="images/news/s2.webp" alt="AI Threats Blog" />
                                                </div>
                                                <div className="d-content">
                                                    <a href="/blog-single"><h4>AI-Powered Cyber Threats: Stay Ahead</h4></a>
                                                    <div className="d-date">10 Jul 2025</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="widget widget_tags">
                                        <h4>Popular Tags</h4>
                                        <ul>
                                            <li><a href="/">Cybersecurity</a></li>
                                            <li><a href="/">Ransomware</a></li>
                                            <li><a href="/">Cloud Security</a></li>
                                            <li><a href="/">Zero-Day</a></li>
                                        </ul>
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
                                <img src="images/logo-white.webp" className="logo-footer" alt="CyberAries Footer Logo" />
                                <div className="spacer-20" />
                                <p>At Cyber Aries Pvt. Ltd., we’re committed to delivering professional cybersecurity solutions.</p>
                                <div className="social-icons mb-sm-30">
                                    <a href="/"><i className="fa-brands fa-linkedin fa-lg" /></a>
                                    <a href="/"><i className="fa-brands fa-x-twitter fa-lg" /></a>
                                    <a href="/"><i className="fa-brands fa-facebook fa-lg" /></a>
                                    <a href="/"><i className="fa-brands fa-instagram fa-lg" /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="widget">
                                            <h5>Company</h5>
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/about">About Us</a></li>
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
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="de-flex">
                                        <div className="de-flex-col">© 2025 – CyberAries Pvt Ltd. All Rights Reserved.</div>
                                        <div>
                                            <ul className="menu-simple">
                                                <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
                                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default BlogSinglePage;