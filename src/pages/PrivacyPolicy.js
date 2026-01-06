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


function PrivacyPolicy() {
  useModals();
  return (
    <div>
  <meta charSet="utf-8" />
  <title>Privacy Policy – CyberAries</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font-family: Arial, sans-serif;\n            line-height: 1.65;\n            padding: 30px;\n            max-width: 900px;\n            margin: auto;\n        }\n\n        h1,\n        h2,\n        h3 {\n            color: #0a2a43;\n        }\n\n        .note {\n            background: #fff7d1;\n            padding: 12px;\n            border-left: 4px solid #e2b100;\n            margin: 20px 0;\n        }\n    " }} />
  <h1>Privacy Policy</h1>
  <p><strong>Last Updated:</strong> DEC 2025</p>
  <div className="note">
    This Privacy Policy is drafted specifically for <strong>CyberAries</strong>, operating in India, and aligned
    with the Digital Personal Data Protection Act (DPDP Act, 2023). It details how we collect, use, and protect personal data
    in compliance with Indian regulations and best practices.
  </div>
  <h2>1. Introduction</h2>
  <p>
    CyberAries (“Company”, “we”, “our”, “us”) is a cybersecurity service provider based in India offering
    VAPT services, Penetration Testing, Incident Response, Cloud Security, SOC monitoring, Compliance consulting,
    and related digital security solutions.
  </p>
  <p>
    This Privacy Policy outlines how we collect, use, store, and safeguard Personal Data
    in accordance with the <strong>Digital Personal Data Protection Act (DPDP Act), 2023</strong> and applicable
    best practices.
  </p>
  <h2>2. Applicability</h2>
  <p>
    This policy applies to:
  </p>
  <ul>
    <li>Visitors of our website: <strong>www.cyberaries.com</strong></li>
    <li>Clients who engage our cybersecurity services</li>
    <li>Individuals contacting us via web forms, email, WhatsApp, or support channels</li>
    <li>Employees, vendors, trainees, and service partners</li>
  </ul>
  <h2>3. What Personal Data We Collect</h2>
  <h3>3.1 Data You Provide to Us</h3>
  <ul>
    <li>Name, Email, Phone number</li>
    <li>Company Name, Role/Designation</li>
    <li>Inquiry messages, project requirements</li>
    <li>Billing information (if services are purchased)</li>
    <li>Documents voluntarily shared for security audits</li>
  </ul>
  <h3>3.2 Data Collected Automatically</h3>
  <ul>
    <li>IP address</li>
    <li>Browser/device information</li>
    <li>Website analytics and user journey</li>
    <li>Cookies (functional &amp; analytics only)</li>
  </ul>
  <h3>3.3 Sensitive Personal Data</h3>
  <p>CyberAries does NOT request or process sensitive personal data unless required for compliance or legal purposes.
  </p>
  <h2>4. Purpose of Collecting Personal Data</h2>
  CyberAries processes personal data for:
  <ul>
    <li>Providing cybersecurity services (VAPT, PT, SOC monitoring, Cloud security assessments)</li>
    <li>Responding to inquiries &amp; support requests</li>
    <li>Improving website performance</li>
    <li>Compliance with legal/regulatory obligations (CERT-In, ISO 27001, etc.)</li>
    <li>Client onboarding, project execution, invoicing</li>
    <li>Security awareness communication</li>
  </ul>
  <h2>5. Lawful Basis Under DPDP Act (India)</h2>
  <p>We process data based on:</p>
  <ul>
    <li><strong>Consent</strong> – Provided through forms, contracts, or email communication</li>
    <li><strong>Legitimate Uses</strong> – Delivering cybersecurity services requested by you</li>
    <li><strong>Legal Compliance</strong> – CERT-In incident reporting, audit requirements, invoices</li>
  </ul>
  <h2>6. How We Use Cookies</h2>
  <ul>
    <li>Essential cookies – Required for site functionality</li>
    <li>Analytics cookies – To measure website usage (non-personally identifiable)</li>
    <li>No advertising/marketing cookies are used</li>
  </ul>
  <h2>7. Sharing of Personal Data</h2>
  We may share data with:
  <ul>
    <li>Internal CyberAries security teams</li>
    <li>Trusted service providers (cloud hosting, email delivery, analytics)</li>
    <li>Regulatory authorities (CERT-In or Government agencies when required)</li>
    <li>Partners performing audits under NDA</li>
  </ul>
  <p>
    We NEVER sell personal data.
  </p>
  <h2>8. Data Security Measures</h2>
  CyberAries implements:
  <ul>
    <li>Encryption at rest and in transit</li>
    <li>Role-based access control (RBAC)</li>
    <li>Multi-layer firewalls</li>
    <li>Secure DevOps practices</li>
    <li>Continuous security monitoring</li>
    <li>Regular penetration testing</li>
  </ul>
  <h2>9. Data Retention</h2>
  <p>Data is retained only as long as required for the purposes stated, or as required by Indian law.</p>
  <h2>10. Your Rights Under DPDP Act</h2>
  Users can request:
  <ul>
    <li>Access to their data</li>
    <li>Correction of inaccurate data</li>
    <li>Deletion of personal data</li>
    <li>Withdrawal of consent</li>
    <li>Grievance redressal</li>
  </ul>
  <h2>11. Children’s Data</h2>
  CyberAries does not knowingly collect data of children under 18.
  <h2>12. International Transfer of Data</h2>
  If required, data may be stored or processed outside India with adequate safeguards.
  <h2>13. Contact for Data Requests</h2>
  <strong>Data Protection Officer / Grievance Officer:</strong><br />
  CyberAries Security Solutions<br />
  Email: <a href="mailto:privacy@cyberaries.com">privacy@cyberaries.com</a><br />
  Location: Hiranandani Business Park, Powai, Mumbai - 400071 India
  <h2>14. Changes to this Privacy Policy</h2>
  We may update this policy from time to time and will reflect the updated date at the top.
</div>
  )
}

export default PrivacyPolicy;