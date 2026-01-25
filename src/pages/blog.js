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

function Blog() {
    return (
        <div>
            <title>Blog – CyberAries Security Solutions</title>
            <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16" />
            <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="Stay updated with the latest cybersecurity insights and threat reports." name="description" />
            <meta name="keywords" content="cybersecurity blog, ransomware prevention, cloud security" />
            <meta name="author" content="CyberAries" />

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
                        <img src="images/background/3.webp" className="jarallax-img" alt="" />
                        <div className="container relative z-2">
                            <div className="row gy-4 gx-5 align-items-center">
                                <div className="spacer-double sm-hide" />
                                <div className="col-lg-6">
                                    <h1 className="mb-0 wow fadeInUp" data-wow-delay=".2s">Blog</h1>
                                    <ul className="crumb wow fadeInUp">
                                        <li><a href="/">Home</a></li>
                                        <li className="active">Blog</li>
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
                                {/* Blog Post 1 */}
                                <div className="col-lg-4 wow fadeInRight" data-wow-delay=".0s">
                                    <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                        <img src="images/news/s1.webp" className="w-100 hover-scale-1-1" alt="Ransomware Prevention Strategies" />
                                        <div className="absolute start-0 bottom-0 p-40 z-2">
                                            <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Cyber Insights</div>
                                            <h4>Top Strategies to Prevent Ransomware Attacks in 2025</h4>
                                            <div className="relative">
                                                <img src="images/testimonial/1.webp" className="w-20px me-2 circle" alt="Michael Carter" />
                                                <div className="d-inline fs-14 me-3">Michael Carter</div>
                                                <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />15 Jul 2025</div>
                                            </div>
                                        </div>
                                        <div className="gradient-edge-bottom h-70" />
                                    </a>
                                </div>

                                {/* Blog Post 2 */}
                                <div className="col-lg-4 wow fadeInRight" data-wow-delay=".2s">
                                    <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                        <img src="images/news/s2.webp" className="w-100 hover-scale-1-1" alt="AI-Powered Cyber Threats" />
                                        <div className="absolute start-0 bottom-0 p-40 z-2">
                                            <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Threat Reports</div>
                                            <h4>AI-Powered Cyber Threats: How to Stay Ahead of Hackers</h4>
                                            <div className="relative">
                                                <img src="images/testimonial/2.webp" className="w-20px me-2 circle" alt="Sophia Lee" />
                                                <div className="d-inline fs-14 me-3">Sophia Lee</div>
                                                <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />10 Jul 2025</div>
                                            </div>
                                        </div>
                                        <div className="gradient-edge-bottom h-70" />
                                    </a>
                                </div>

                                {/* Blog Post 3 */}
                                <div className="col-lg-4 wow fadeInRight" data-wow-delay=".4s">
                                    <a href="/blog-single" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                        <img src="images/news/s3.webp" className="w-100 hover-scale-1-1" alt="Cyber Defense Planning" />
                                        <div className="absolute start-0 bottom-0 p-40 z-2">
                                            <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Best Practices</div>
                                            <h4>Building a Strong Cyber Defense Plan for Your Business</h4>
                                            <div className="relative">
                                                <img src="images/testimonial/3.webp" className="w-20px me-2 circle" alt="David Wilson" />
                                                <div className="d-inline fs-14 me-3">David Wilson</div>
                                                <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2" />2 Jul 2025</div>
                                            </div>
                                        </div>
                                        <div className="gradient-edge-bottom h-70" />
                                    </a>
                                </div>

                                {/* Pagination */}
                                <div className="col-lg-12 pt-4 text-center">
                                    <div className="d-inline-block">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link" href="/" aria-label="Previous">
                                                        <span aria-hidden="true"><i className="fa fa-chevron-left" /></span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="/">1</a></li>
                                                <li className="page-item active" aria-current="page"><a className="page-link" href="/">2</a></li>
                                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="/" aria-label="Next">
                                                        <span aria-hidden="true"><i className="fa fa-chevron-right" /></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
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
                                <img src="images/logo-white.webp" className="logo-footer" alt="Cyber Aries Footer Logo" />
                                <div className="spacer-20" />
                                <p>At Cyber Aries Pvt. Ltd., we’re committed to delivering professional, high-quality cybersecurity solutions.</p>
                                <div className="social-icons mb-sm-30">
                                    <a href="/"><i className="fa-brands fa-linkedin fa-lg" /></a>
                                    <a href="/"><i className="fa-brands fa-x-twitter fa-lg" /></a>
                                    <a href="/"><i className="fa-brands fa-facebook fa-lg" /></a>
                                    <a href="/"><i className="fa-brands fa-instagram fa-lg" /></a>
                                    <a href="/"><i className="fa-brands fa-whatsapp" /></a>
                                    <a href="/"><i className="fa-brands fa-blogger fa-lg" /></a>
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

export default Blog;