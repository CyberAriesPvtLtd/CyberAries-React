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


function Career() {
    useModals();
    return (
        <div>
            <meta charSet="utf-8" />
            <title>Careers — CyberAries</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="images/icon.webp" type="image/webp" sizes="16x16" />
            <meta name="description" content="CyberAries careers — open roles across Red Team, Cloud, AppSec, SOC and company functions." />
            {/* Fonts & icons */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossOrigin="anonymous" />
            <style dangerouslySetInnerHTML={{ __html: "\n        :root {\n            --bg: #0a0f1a;\n            --card: #111827;\n            --muted: #9fb7c9;\n            --cyan: #00eaff;\n            --green: #00ffae;\n            --glass: rgba(0, 255, 170, 0.14);\n            --radius: 10px;\n            --gap: 18px;\n            --focus: rgba(0, 255, 170, 0.16);\n            --maxw: 1200px;\n            --accent-border: rgba(255, 255, 255, 0.03);\n            --ease: cubic-bezier(.2, .9, .2, 1);\n        }\n\n        /* Basic reset */\n        *,\n        *::before,\n        *::after {\n            box-sizing: border-box\n        }\n\n        html,\n        body {\n            height: 100%;\n            margin: 0\n        }\n\n        body {\n            min-height: 100vh;\n            background: var(--bg);\n            color: #cfe8fb;\n            font-family: \"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\n            -webkit-font-smoothing: antialiased;\n            -moz-osx-font-smoothing: grayscale;\n            line-height: 1.45;\n            font-size: clamp(14px, 1.6vw, 16px);\n        }\n\n        a {\n            color: inherit;\n            text-decoration: none\n        }\n\n        /* container */\n        .container {\n            max-width: var(--maxw);\n            margin: 0 auto;\n            padding: 0 18px\n        }\n\n        /* TRANSPARENT HEADER + HIDE ON SCROLL */\n        header {\n            position: sticky;\n            top: 0;\n            z-index: 60;\n            backdrop-filter: blur(10px);\n            background: rgba(0, 0, 0, 0.24);\n            /* transparent glass */\n            border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n            transition: transform 260ms var(--ease), background 260ms var(--ease);\n        }\n\n        header.hide {\n            transform: translateY(-100%);\n        }\n\n        /* nav */\n        .nav {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            gap: 12px;\n            padding: 12px 0\n        }\n\n        .logo {\n            color: var(--cyan);\n            font-weight: 900;\n            font-size: clamp(18px, 2.2vw, 22px)\n        }\n\n        nav {\n            display: flex;\n            align-items: center;\n            gap: 12px\n        }\n\n        nav ul {\n            display: flex;\n            gap: 14px;\n            list-style: none;\n            margin: 0;\n            padding: 0\n        }\n\n        nav a {\n            font-weight: 500;\n            padding: 8px;\n            border-radius: 8px;\n            display: inline-block\n        }\n\n        nav a:hover,\n        nav a.active {\n            color: var(--green)\n        }\n\n        /* menu toggle (burger -> X) */\n        .menu-toggle {\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            gap: 8px;\n            background: transparent;\n            border: 1px solid var(--accent-border);\n            padding: 8px;\n            border-radius: 8px;\n            color: var(--muted);\n            cursor: pointer;\n            transition: transform 220ms var(--ease), background 220ms var(--ease);\n        }\n\n        .menu-toggle:focus {\n            outline: 3px solid var(--focus);\n            outline-offset: 2px\n        }\n\n        .menu-toggle .bar {\n            display: inline-block;\n            width: 18px;\n            height: 2px;\n            background: currentColor;\n            border-radius: 2px;\n            transition: transform 260ms var(--ease), opacity 200ms var(--ease)\n        }\n\n        .menu-toggle .bar.middle {\n            width: 12px\n        }\n\n        .menu-toggle.open .bar.top {\n            transform: translateY(6px) rotate(45deg)\n        }\n\n        .menu-toggle.open .bar.middle {\n            opacity: 0\n        }\n\n        .menu-toggle.open .bar.bottom {\n            transform: translateY(-6px) rotate(-45deg)\n        }\n\n        @media(min-width:768px) {\n            .menu-toggle {\n                display: none\n            }\n        }\n\n        /* mobile nav panel with animation */\n        .mobile-nav {\n            overflow: hidden;\n            max-height: 0;\n            opacity: 0;\n            transform-origin: top;\n            transition: max-height 360ms var(--ease), opacity 280ms calc(60ms) var(--ease), transform 360ms var(--ease);\n            transform: translateY(-6px);\n            background: transparent;\n            /* keep transparent */\n            border-top: 1px solid rgba(255, 255, 255, 0.02);\n            backdrop-filter: blur(6px);\n            -webkit-backdrop-filter: blur(6px);\n        }\n\n        .mobile-nav.open {\n            max-height: 600px;\n            opacity: 1;\n            transform: translateY(0);\n        }\n\n        .mobile-nav nav ul {\n            display: flex;\n            flex-direction: column;\n            padding: 12px;\n            gap: 8px\n        }\n\n        .mobile-nav a {\n            display: block;\n            padding: 10px;\n            border-radius: 8px;\n            color: var(--muted)\n        }\n\n        .mobile-nav a:hover {\n            background: rgba(0, 234, 255, 0.02);\n            color: var(--cyan)\n        }\n\n        @media(min-width:768px) {\n            #mainNav {\n                display: block\n            }\n\n            .mobile-nav {\n                display: none !important\n            }\n        }\n\n        main {\n            padding: 32px 0 28px\n        }\n\n        .hero {\n            text-align: center;\n            margin-bottom: 18px\n        }\n\n        h1 {\n            color: var(--cyan);\n            margin: 0 0 8px;\n            font-size: clamp(20px, 3.6vw, 34px);\n            line-height: 1.05\n        }\n\n        .sub {\n            color: var(--muted);\n            margin: 0 0 18px;\n            font-size: clamp(13px, 1.8vw, 16px)\n        }\n\n        /* controls */\n        .controls {\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n            align-items: stretch;\n            margin: 0 auto 18px;\n            max-width: 900px\n        }\n\n        .controls>* {\n            font-size: 14px\n        }\n\n        .controls-row {\n            display: flex;\n            gap: 12px;\n            flex-wrap: wrap;\n            align-items: center;\n            justify-content: center\n        }\n\n        .input,\n        .select,\n        .btn {\n            padding: 10px 12px;\n            border-radius: 8px;\n            background: #0d1420;\n            border: 1px solid rgba(0, 234, 255, 0.06);\n            color: #cfe8fb\n        }\n\n        .select {\n            min-width: 140px\n        }\n\n        .btn {\n            border: 2px solid var(--green);\n            background: transparent;\n            color: var(--green);\n            cursor: pointer;\n            font-weight: 700\n        }\n\n        .btn:hover {\n            background: var(--green);\n            color: var(--bg)\n        }\n\n        .reset-ghost {\n            background: transparent;\n            border: 1px dashed var(--accent-border);\n            color: var(--muted)\n        }\n\n        .meta-row {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: center;\n            gap: 12px;\n            margin-bottom: 12px;\n            color: var(--muted)\n        }\n\n        .meta-row strong {\n            color: var(--cyan)\n        }\n\n        /* grid: mobile 1, tablet 2, laptop 3, wide 4 */\n        .jobs-grid {\n            display: grid;\n            grid-template-columns: 1fr;\n            gap: var(--gap);\n            list-style: none;\n            padding: 0;\n            margin: 0\n        }\n\n        @media(min-width:640px) {\n            .jobs-grid {\n                grid-template-columns: repeat(2, 1fr)\n            }\n        }\n\n        @media(min-width:1024px) {\n            .jobs-grid {\n                grid-template-columns: repeat(3, 1fr)\n            }\n        }\n\n        /* laptop: 3 columns */\n        @media(min-width:1400px) {\n            .jobs-grid {\n                grid-template-columns: repeat(4, 1fr)\n            }\n        }\n\n        /* very wide: 4 columns */\n\n        .job-card {\n            background: var(--card);\n            border: 1px solid var(--glass);\n            border-radius: var(--radius);\n            padding: 16px;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            min-height: 180px;\n            transition: transform .18s, box-shadow .18s, border-color .18s\n        }\n\n        .job-card:hover,\n        .job-card:focus-within {\n            transform: translateY(-6px);\n            box-shadow: 0 14px 30px rgba(0, 255, 170, 0.06);\n            border-color: rgba(0, 255, 170, 0.22)\n        }\n\n        .job-title {\n            color: var(--cyan);\n            font-weight: 700;\n            margin: 0;\n            font-size: 16px\n        }\n\n        .job-meta {\n            color: var(--muted);\n            font-size: 13px;\n            margin: 8px 0\n        }\n\n        .job-bullets {\n            margin: 8px 0 0;\n            padding-left: 18px;\n            color: #dff4ff\n        }\n\n        .job-bullets li {\n            margin-bottom: 6px;\n            font-size: 14px\n        }\n\n        .apply-row {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-top: 12px;\n            gap: 8px;\n            flex-wrap: wrap\n        }\n\n        .job-badge {\n            font-size: 12px;\n            padding: 6px 10px;\n            border-radius: 999px;\n            border: 1px solid rgba(0, 255, 170, 0.15);\n            color: var(--green);\n            font-weight: 700;\n            white-space: nowrap\n        }\n\n        .apply-btn {\n            border: 1px solid var(--accent-border);\n            padding: 8px 10px;\n            border-radius: 8px;\n            cursor: pointer;\n            color: var(--cyan);\n            font-weight: 700;\n            background: transparent\n        }\n\n        .apply-btn:focus {\n            outline: 3px solid var(--focus);\n            outline-offset: 2px\n        }\n\n        /* load more */\n        .load-more-wrap {\n            display: flex;\n            justify-content: center;\n            margin-top: 22px\n        }\n\n        .load-more-btn {\n            padding: 10px 16px;\n            border-radius: 10px;\n            border: 1px solid rgba(255, 255, 255, 0.06);\n            background: transparent;\n            color: var(--cyan);\n            cursor: pointer;\n            font-weight: 700;\n            transition: transform 160ms var(--ease), box-shadow 160ms var(--ease)\n        }\n\n        .load-more-btn:hover {\n            transform: translateY(-4px);\n            box-shadow: 0 10px 24px rgba(0, 234, 255, 0.04)\n        }\n\n        .load-more-btn[disabled] {\n            opacity: 0.5;\n            cursor: not-allowed;\n            transform: none\n        }\n\n        /* modal & footer */\n        .modal-backdrop {\n            position: fixed;\n            inset: 0;\n            display: none;\n            align-items: center;\n            justify-content: center;\n            background: rgba(0, 0, 0, 0.72);\n            backdrop-filter: blur(4px);\n            z-index: 9999\n        }\n\n        .modal-backdrop.show {\n            display: flex\n        }\n\n        .modal {\n            width: 94%;\n            max-width: 520px;\n            background: var(--card);\n            border: 1px solid rgba(0, 255, 170, 0.24);\n            border-radius: 10px;\n            padding: 18px;\n            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);\n            position: relative\n        }\n\n        .modal h3 {\n            color: var(--cyan);\n            margin: 0 0 8px\n        }\n\n        .modal p {\n            color: var(--muted);\n            margin: 6px 0 12px\n        }\n\n        .modal .close {\n            position: absolute;\n            right: 12px;\n            top: 10px;\n            background: transparent;\n            border: none;\n            color: var(--green);\n            font-size: 18px;\n            cursor: pointer\n        }\n\n        .modal a.modal-email {\n            color: var(--cyan);\n            text-decoration: underline;\n            word-break: break-all\n        }\n\n        .modal .note {\n            color: var(--muted);\n            font-size: 13px;\n            margin-top: 8px\n        }\n\n        .site-footer {\n            background: var(--card);\n            border-top: 1px solid var(--glass);\n            color: var(--muted);\n            padding: 28px 0 18px;\n            margin-top: 28px\n        }\n\n        .footer-inner {\n            display: grid;\n            grid-template-columns: 1fr;\n            gap: 18px;\n            max-width: var(--maxw);\n            margin: 0 auto;\n            padding: 0 18px\n        }\n\n        @media(min-width:840px) {\n            .footer-inner {\n                grid-template-columns: 1.6fr 1fr 1fr 1fr;\n                gap: 32px;\n                align-items: start\n            }\n        }\n\n        .footer-col h5 {\n            color: var(--green);\n            margin: 0 0 12px;\n            font-size: 18px\n        }\n\n        .logo-footer {\n            max-width: 160px;\n            display: block;\n            margin-bottom: 14px\n        }\n\n        .footer-desc {\n            color: var(--muted);\n            max-width: 420px;\n            line-height: 1.6;\n            margin: 0 0 14px\n        }\n\n        .social-icons {\n            display: flex;\n            gap: 10px;\n            margin: 0\n        }\n\n        .social-icons a {\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            width: 36px;\n            height: 36px;\n            border-radius: 6px;\n            background: transparent;\n            border: 1px solid var(--accent-border);\n            color: var(--muted);\n            transition: transform .14s, box-shadow .14s, color .14s, background .14s\n        }\n\n        .social-icons a:hover,\n        .social-icons a:focus {\n            transform: translateY(-4px);\n            color: var(--cyan);\n            background: rgba(0, 234, 255, 0.04);\n            box-shadow: 0 8px 20px rgba(0, 234, 255, 0.04);\n            border-color: rgba(0, 234, 255, 0.08)\n        }\n\n        .modal-overlay {\n            display: none;\n            position: fixed;\n            inset: 0;\n            background: rgba(0, 0, 0, 0.65);\n            backdrop-filter: blur(4px);\n            z-index: 99999;\n            align-items: center;\n            justify-content: center\n        }\n\n        .modal-overlay.active {\n            display: flex\n        }\n\n        .modal-content {\n            width: 90%;\n            max-width: 1100px;\n            height: 80vh;\n            background: #fff;\n            border-radius: 10px;\n            position: relative;\n            overflow: hidden\n        }\n\n        .modal-content iframe {\n            width: 100%;\n            height: 100%;\n            border: 0\n        }\n\n        .modal-close {\n            position: absolute;\n            top: 10px;\n            right: 15px;\n            font-size: 28px;\n            background: transparent;\n            border: none;\n            cursor: pointer;\n            color: #333;\n            padding: 6px\n        }\n\n        .scroll-top {\n            position: fixed;\n            left: 14px;\n            bottom: 140px;\n            z-index: 10000;\n            display: flex;\n            align-items: center;\n            gap: 12px;\n            background: transparent;\n            border: 0;\n            cursor: pointer;\n            padding: 6px;\n            transform: rotate(-90deg);\n            transform-origin: left center;\n            color: var(--muted)\n        }\n\n        @media(max-width:640px) {\n            .scroll-top {\n                display: none\n            }\n        }\n\n        .visually-hidden {\n            position: absolute !important;\n            height: 1px;\n            width: 1px;\n            overflow: hidden;\n            clip: rect(1px, 1px, 1px, 1px);\n            white-space: nowrap\n        }\n\n        .skip {\n            position: absolute;\n            left: -999px\n        }\n\n        .skip:focus {\n            left: 10px;\n            top: 10px;\n            padding: 8px 10px;\n            background: #fff;\n            color: #000;\n            border-radius: 6px;\n            z-index: 10000\n        }\n\n        .empty-msg {\n            text-align: center;\n            color: var(--muted);\n            padding: 24px\n        }\n\n        @media(prefers-reduced-motion:reduce) {\n            * {\n                transition: none !important\n            }\n        }\n    " }} />
            <a className="skip" href="#jobsGrid">Skip to jobs</a>
            <header>
                <div className="container nav" role="banner">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', justifyContent: 'space-between' }}>
                        <div className="logo">CyberAries</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <button className="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="mobileNav" aria-label="Toggle menu">
                                <span className="bar top" />
                                <span className="bar middle" />
                                <span className="bar bottom" />
                                <span className="visually-hidden">Menu</span>
                            </button>
                            {/* desktop nav */}
                            <nav aria-label="Main menu" id="mainNav" style={{ display: 'none' }}>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/career" className="active" aria-current="page">Careers</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* mobile nav */}
                    <div id="mobileNav" className="mobile-nav" aria-hidden="true">
                        <nav aria-label="Mobile menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/career" className="active" aria-current="page">Careers</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="container" role="main">
                <div className="hero">
                    <h1><br />Join CyberAries — Your Next Challenge Awaits</h1>
                    <p className="sub">Full-time, internships and remote options. Filter by department, sort and search to find
                        roles.</p>
                </div>
                <div className="controls" role="region" aria-label="Job controls">
                    <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
                        <input id="searchInput" className="input" type="search" placeholder="Search roles (title, skill, location)" aria-label="Search roles" />
                    </div>
                    <div className="controls-row" aria-hidden="false">
                        <select id="deptFilter" className="select" aria-label="Filter by department">
                            <option value>All Departments</option>
                        </select>
                        <select id="sortSelect" className="select" aria-label="Sort jobs">
                            <option value>Sort: None</option>
                            <option value="title-asc">Title A → Z</option>
                            <option value="title-desc">Title Z → A</option>
                            <option value="exp-asc">Experience Low → High</option>
                            <option value="exp-desc">Experience High → Low</option>
                            <option value="location-asc">Location A → Z</option>
                        </select>
                        <button id="resetBtn" className="btn" title="Reset filters">Reset</button>
                    </div>
                </div>
                <div className="meta-row" aria-live="polite">
                    <div id="resultCount" className="visually-hidden">Showing <strong id="countNum">0</strong> roles</div>
                    <div id="visualCount">Showing <strong id="countVisual" style={{ color: 'var(--cyan)' }}>0</strong> roles</div>
                </div>
                <section aria-label="Open positions">
                    <ul id="jobsGrid" className="jobs-grid" role="list" aria-live="polite" tabIndex={-1} />
                    {/* load more */}
                    <div className="load-more-wrap" id="loadMoreWrap" aria-hidden="true">
                        <button id="loadMoreBtn" className="load-more-btn" aria-label="Load more jobs">Load more</button>
                    </div>
                </section>
            </main>
            {/* Apply modal */}
            <div id="modalBackdrop" className="modal-backdrop" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <div className="modal" role="document">
                    <button className="close" id="modalClose" aria-label="Close dialog">×</button>
                    <h3 id="modalTitle">Position title</h3>
                    <p id="modalSub" className="sub note">Send your resume to:</p>
                    <a id="modalMail" className="modal-email" href="#" target="_blank" rel="noopener noreferrer">info@cyberaries.com</a>
                    <p className="note">Email subject auto-fills with job title and reference ID. Attach your CV in the mail client.
                    </p>
                </div>
            </div>
            {/* Footer */}
            <footer className="site-footer" role="contentinfo">
                <div className="footer-inner">
                    <div className="footer-col footer-brand">
                        <img src="images/logo-white.webp" className="logo-footer" alt="CyberAries logo" />
                        <p className="footer-desc">At CyberAries Pvt. Ltd., we deliver professional, high-quality cybersecurity
                            solutions — proactive threat monitoring, advanced data protection, and incident response to help
                            preserve reputation and reduce risk.</p>
                        <div className="social-icons" aria-label="Social links">
                            <a className="social" href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" aria-hidden="true" /></a>
                            <a className="social" href="#" aria-label="X (Twitter)"><i className="fa-brands fa-x-twitter" aria-hidden="true" /></a>
                            <a className="social" href="#" aria-label="Facebook"><i className="fa-brands fa-facebook" aria-hidden="true" /></a>
                            <a className="social" href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true" /></a>
                            <a className="social" href="#" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" aria-hidden="true" /></a>
                            <a className="social" href="#" aria-label="Blogger"><i className="fa-brands fa-blogger" aria-hidden="true" /></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h5>Company</h5>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Our Services</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/career">Career</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h5>Our Services</h5>
                        <ul className="footer-links">
                            <li><a href="/service-single">Network Security</a></li>
                            <li><a href="/service-single">Data Encryption</a></li>
                            <li><a href="/service-single">Identity &amp; Access</a></li>
                            <li><a href="/service-single">Security Monitoring</a></li>
                            <li><a href="/service-single">Backup &amp; Recovery</a></li>
                            <li><a href="/service-single">Security Configuration</a></li>
                        </ul>
                    </div>
                    <div className="footer-col contact-col">
                        <h5>Contact Us</h5>
                        <div className="contact-item">
                            <div className="contact-title">Head Office</div>
                            <div className="contact-txt">Hiranandani Business Park, Powai, Mumbai - 400071</div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-title">Call Us</div>
                            <div className="contact-txt"><a href="tel:+918828495202">+91 8828495202</a></div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-title">Email Us</div>
                            <div className="contact-txt"><a href="mailto:info@cyberaries.com">info@cyberaries.com</a></div>
                        </div>
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{ __html: "\n        /* footer-bottom improvements */\n        .footer-bottom {\n            border-top: 1px solid rgba(255, 255, 255, 0.03);\n            margin-top: 28px;\n            padding: 18px 0;\n            background: linear-gradient(180deg, rgba(16, 22, 34, 0.6), rgba(10, 15, 26, 0.6));\n        }\n    \n        .footer-bottom-inner {\n            max-width: var(--maxw);\n            margin: 0 auto;\n            padding: 0 18px;\n            display: flex;\n            gap: 12px;\n            align-items: center;\n            justify-content: space-between;\n            flex-wrap: wrap;\n        }\n    \n        .footer-bottom .copyright {\n            color: var(--muted);\n            font-size: 14px;\n        }\n    \n        .footer-bottom .policy-links {\n            display: flex;\n            gap: 10px;\n            align-items: center;\n        }\n    \n        .policy-links a {\n            display: inline-flex;\n            align-items: center;\n            gap: 8px;\n            padding: 8px 12px;\n            border-radius: 10px;\n            background: transparent;\n            border: 1px solid rgba(255, 255, 255, 0.03);\n            color: var(--muted);\n            font-weight: 600;\n            text-decoration: none;\n            transition: transform 140ms var(--ease), background 140ms var(--ease), color 140ms var(--ease);\n        }\n    \n        .policy-links a:hover,\n        .policy-links a:focus {\n            transform: translateY(-3px);\n            background: rgba(0, 234, 255, 0.03);\n            color: var(--cyan);\n            outline: none;\n        }\n    \n        .policy-links a .fa-regular,\n        .policy-links a .fa-solid {\n            width: 18px;\n            text-align: center;\n            font-size: 14px;\n            color: inherit;\n        }\n    \n        /* small mobile stacking */\n        @media (max-width:520px) {\n            .footer-bottom-inner {\n                flex-direction: column;\n                align-items: flex-start;\n                gap: 8px;\n            }\n        }\n    \n        /* Modal tweaks (complements existing modal CSS) */\n        .modal-header {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            gap: 12px;\n            padding: 12px 16px;\n            border-bottom: 1px solid rgba(255, 255, 255, 0.02);\n            background: transparent;\n        }\n    \n        .modal-header h2 {\n            margin: 0;\n            font-size: 16px;\n            color: var(--cyan);\n            font-weight: 700;\n        }\n    \n        .iframe-skeleton {\n            height: 100%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background: linear-gradient(90deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.015) 50%, rgba(255, 255, 255, 0.01) 100%);\n            color: var(--muted);\n            font-size: 14px;\n        }\n    \n        /* ensure iframe-wrap from earlier exists */\n        .modal-content .iframe-wrap {\n            display: flex;\n            flex-direction: column;\n            height: calc(100% - 56px);\n        }\n    \n        /* minus header height */\n        .modal-content iframe {\n            border-radius: 8px;\n        }\n    \n        /* accessible focus ring for modal-close inside dark modal */\n        .modal-close {\n            border-radius: 8px;\n            padding: 6px 10px;\n            background: rgba(255, 255, 255, 0.03);\n            color: var(--muted);\n        }\n    \n        .modal-close:focus {\n            outline: 3px solid var(--focus);\n            color: var(--cyan);\n        }\n    " }} />
                <div className="footer-bottom">
                    <div className="footer-bottom-inner">
                        <div className="copyright" aria-hidden="false">
                            © <span id="year">2025</span> – CyberAries Pvt Ltd. All Rights Reserved.
                        </div>
                        <div className="policy-links" role="navigation" aria-label="Legal links">
                            {/* Terms */}
                            <a href="/Terms&Conditions" data-modal="termsModal" id="termsTrigger" aria-controls="termsModal" aria-haspopup="dialog">
                                <i className="fa-regular fa-file-lines" aria-hidden="true" />
                                <span>Terms &amp; Conditions</span>
                            </a>
                            {/* Privacy */}
                            <a href="/PrivacyPolicy" data-modal="privacyModal" id="privacyTrigger" aria-controls="privacyModal" aria-haspopup="dialog">
                                <i className="fa-regular fa-user-shield" aria-hidden="true" />
                                <span>Privacy Policy</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* TERMS modal */}
                <div id="termsModal" className="modal-overlay" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="termsTitle">
                    <div className="modal-content" role="document">
                        <div className="modal-header">
                            <h2 id="termsTitle">Terms &amp; Conditions</h2>
                            <button className="modal-close" aria-label="Close terms modal" title="Close">×</button>
                        </div>
                        <div className="iframe-wrap" aria-busy="true" aria-live="polite">
                            <iframe src="/Terms&Conditions" title="Terms and Conditions" id="termsIframe" loading="lazy" />
                        </div>
                    </div>
                </div>
                {/* PRIVACY modal */}
                <div id="privacyModal" className="modal-overlay" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="privacyTitle">
                    <div className="modal-content" role="document">
                        <div className="modal-header">
                            <h2 id="privacyTitle">Privacy Policy</h2>
                            <button className="modal-close" aria-label="Close privacy modal" title="Close">×</button>
                        </div>
                        <div className="iframe-wrap" aria-busy="true" aria-live="polite">
                            <iframe src="/PrivacyPolicy" title="Privacy Policy" id="privacyIframe" loading="lazy" />
                        </div>
                    </div>
                </div>
                <button id="scrollTopBtn" className="scroll-top" aria-label="Scroll to top" title="Scroll to top">
                    <span className="scroll-line" aria-hidden="true" style={{ width: 2, height: 44, background: 'var(--green)', borderRadius: 4, display: 'inline-block' }} />
                    <span className="scroll-text">Scroll to top</span>
                </button>
            </footer>
            <noscript>
                &lt;div style="background:#111827;color:var(--muted);padding:12px;text-align:center"&gt;
                JavaScript is disabled — basic job list is shown. Enable JavaScript for filtering and apply features.
                &lt;/div&gt;
            </noscript>
        </div>
    )
}

export default Career