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

function Projects() {
    return (
        <div>
            <title>Projects — CyberAries Pvt Ltd</title>
            <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16" />
            <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="Explore CyberAries' successful security audits and implementations." name="description" />
            
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
                                            <div className="topbar-widget me-3"><a href="/"><i className="icofont-location-pin" />Hiranandani Business Park, Powai, Mumbai - 400071</a></div>
                                            <div className="topbar-widget me-3"><a href="tel:+918828495202"><i className="icofont-phone" />+91 8828495202</a></div>
                                            <div className="topbar-widget me-3"><a href="mailto:info@cyberaries.com"><i className="icofont-envelope" />info@cyberaries.com</a></div>
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
                        <img src="images/background/7.webp" className="jarallax-img" alt="" />
                        <div className="container relative z-2">
                            <div className="row gy-4 gx-5 align-items-center">
                                <div className="spacer-double sm-hide" />
                                <div className="col-lg-6">
                                    <h1 className="mb-0 wow fadeInUp" data-wow-delay=".2s">Projects</h1>
                                    <ul className="crumb wow fadeInUp">
                                        <li><a href="/">Home</a></li>
                                        <li className="active">Projects</li>
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
                            <div className="row g-4">
                                {/* Case Study 1 */}
                                <div className="col-lg-4 col-sm-6">
                                    <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".0s">
                                        <img src="images/projects/1.webp" className="hover-scale-1-1 w-100" alt="E-Commerce Security Case Study" />
                                        <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                            <div className="mb-3">Safeguard online stores with end-to-end protection, preventing data breaches and fraud.</div>
                                            <a className="btn-line" href="/project-single">View Details</a>
                                        </div>
                                        <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1" />
                                        <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                            <h4 className="fs-20 mb-3">E-Commerce Platform Security</h4>
                                        </div>
                                        <div className="gradient-edge-bottom abs w-100 h-60 bottom-0" />
                                    </div>
                                </div>

                                {/* Case Study 2 */}
                                <div className="col-lg-4 col-sm-6">
                                    <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".3s">
                                        <img src="images/projects/2.webp" className="hover-scale-1-1 w-100" alt="Cloud Misconfiguration Audit" />
                                        <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                            <div className="mb-3">Eliminate hidden cloud vulnerabilities with expert misconfiguration audits.</div>
                                            <a className="btn-line" href="/project-single">View Details</a>
                                        </div>
                                        <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1" />
                                        <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                            <h4 className="fs-20 mb-3">Cloud Misconfiguration Fix</h4>
                                        </div>
                                        <div className="gradient-edge-bottom abs w-100 h-60 bottom-0" />
                                    </div>
                                </div>

                                {/* Case Study 3 */}
                                <div className="col-lg-4 col-sm-6">
                                    <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".6s">
                                        <img src="images/projects/3.webp" className="hover-scale-1-1 w-100" alt="Law Firm Resilience" />
                                        <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                            <div className="mb-3">Strengthen firm defenses with advanced protection and incident readiness.</div>
                                            <a className="btn-line" href="/project-single">View Details</a>
                                        </div>
                                        <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1" />
                                        <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                            <h4 className="fs-20 mb-3">Law Firm Cyber Resilience</h4>
                                        </div>
                                        <div className="gradient-edge-bottom abs w-100 h-60 bottom-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="section-dark">
                    <div className="container">
                        <div className="row gx-5 text-center">
                            <div className="col-lg-12">
                                <img src="images/logo-white.webp" className="logo-footer mx-auto" alt="CyberAries Footer Logo" style={{maxWidth: '150px'}} />
                                <div className="spacer-20" />
                                <p>CyberAries Pvt. Ltd. — Providing enterprise-grade cybersecurity solutions.</p>
                                <div className="social-icons mb-sm-30 justify-content-center">
                                    <a href="/" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                                    <a href="/" aria-label="Twitter"><i className="fa-brands fa-x-twitter" /></a>
                                    <a href="/" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a>
                                    <a href="/" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                                </div>
                                <div className="spacer-20" />
                                <ul className="menu-simple list-inline">
                                    <li className="list-inline-item"><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
                                    <li className="list-inline-item"><a href="/privacy-policy">Privacy Policy</a></li>
                                </ul>
                                <p className="mt-3">© 2026 – CyberAries Pvt Ltd. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Projects;