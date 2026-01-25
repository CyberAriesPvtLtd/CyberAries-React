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

function Career() {
    useModals();
    return (
        <div>
            <meta charSet="utf-8" />
            <title>Careers — CyberAries</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="images/icon.webp" type="image/webp" sizes="16x16" />
            <meta name="description" content="CyberAries careers — open roles across Red Team, Cloud, AppSec, SOC and company functions." />
            
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossOrigin="anonymous" />
            
            <style dangerouslySetInnerHTML={{ __html: `
                :root {
                    --bg: #0a0f1a;
                    --card: #111827;
                    --muted: #9fb7c9;
                    --cyan: #00eaff;
                    --green: #00ffae;
                    --glass: rgba(0, 255, 170, 0.14);
                    --radius: 10px;
                    --gap: 18px;
                    --focus: rgba(0, 255, 170, 0.16);
                    --maxw: 1200px;
                    --accent-border: rgba(255, 255, 255, 0.03);
                    --ease: cubic-bezier(.2, .9, .2, 1);
                }
                * { box-sizing: border-box }
                html, body { height: 100%; margin: 0 }
                body {
                    min-height: 100vh;
                    background: var(--bg);
                    color: #cfe8fb;
                    font-family: "Inter", sans-serif;
                    line-height: 1.45;
                    font-size: clamp(14px, 1.6vw, 16px);
                }
                header {
                    position: sticky;
                    top: 0;
                    z-index: 60;
                    backdrop-filter: blur(10px);
                    background: rgba(0, 0, 0, 0.24);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                }
                .logo { color: var(--cyan); font-weight: 900; font-size: clamp(18px, 2.2vw, 22px) }
                .jobs-grid { display: grid; grid-template-columns: 1fr; gap: var(--gap); padding: 0; margin: 0 }
                @media(min-width:640px) { .jobs-grid { grid-template-columns: repeat(2, 1fr) } }
                @media(min-width:1024px) { .jobs-grid { grid-template-columns: repeat(3, 1fr) } }
                .site-footer { background: var(--card); border-top: 1px solid var(--glass); color: var(--muted); padding: 28px 0 18px; margin-top: 28px }
                .modal-backdrop { position: fixed; inset: 0; display: none; align-items: center; justify-content: center; background: rgba(0, 0, 0, 0.72); z-index: 9999 }
                .modal-backdrop.show { display: flex }
            ` }} />

            <a className="skip" href="#jobsGrid">Skip to jobs</a>
            
            <header>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px' }}>
                    <div className="logo">CyberAries</div>
                    <nav aria-label="Main menu">
                        <ul style={{ display: 'flex', gap: '14px', liststyle: 'none', margin: 0 }}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/career" style={{ color: 'var(--green)' }}>Careers</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="container" style={{ padding: '32px 18px' }}>
                <div className="hero" style={{ textAlign: 'center', marginBottom: '18px' }}>
                    <h1>Join CyberAries — Your Next Challenge Awaits</h1>
                    <p className="sub" style={{ color: 'var(--muted)' }}>Full-time, internships and remote options.</p>
                </div>

                <div className="controls" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                    <input className="form-control bg-dark text-light" type="search" placeholder="Search roles..." aria-label="Search roles" />
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <select className="form-select bg-dark text-light" aria-label="Filter by department">
                            <option value="">All Departments</option>
                        </select>
                        <button className="btn btn-outline-info">Reset</button>
                    </div>
                </div>

                <section aria-label="Open positions">
                    <ul id="jobsGrid" className="jobs-grid">
                        {/* Job content would go here */}
                    </ul>
                </section>
            </main>

            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="images/logo-white.webp" style={{ maxWidth: '160px' }} alt="CyberAries logo" />
                            <p>Delivering professional cybersecurity solutions.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact</h5>
                            <p>Mumbai, India<br />info@cyberaries.com</p>
                        </div>
                    </div>
                    <div className="text-center pt-4 border-top mt-4" style={{ fontSize: '14px' }}>
                        © 2026 – CyberAries Pvt Ltd. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Career;