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


function TermsAndConditions() {
  useModals();
  return (
    <div>
  <meta charSet="utf-8" />
  <title>Terms &amp; Conditions – CyberAries</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font-family: Arial, sans-serif;\n            line-height: 1.65;\n            padding: 30px;\n            max-width: 900px;\n            margin: auto;\n        }\n\n        h1,\n        h2,\n        h3 {\n            color: #0a2a43;\n        }\n\n        .note {\n            background: #fff7d1;\n            padding: 12px;\n            border-left: 4px solid #e2b100;\n            margin: 20px 0;\n        }\n    " }} />
  <h1>Terms &amp; Conditions</h1>
  <p><strong>Effective Date:</strong> DEC 2025</p>
  <div className="note">
    This Terms &amp; Conditions page is custom-tailored for <strong>CyberAries</strong>, an Indian cybersecurity
    company. It outlines the rules and guidelines for using our website and services, ensuring compliance with Indian
    laws and industry best practices.
  </div>
  <h2>1. Acceptance of Terms</h2>
  By accessing or using the CyberAries website or services, you agree to be bound by these Terms &amp; Conditions.
  <h2>2. About CyberAries</h2>
  CyberAries is an Indian cybersecurity service provider specializing in:
  <ul>
    <li>VAPT (Vulnerability Assessment &amp; Penetration Testing)</li>
    <li>Network &amp; Application Penetration Testing</li>
    <li>Cloud Security Assessments</li>
    <li>SOC Monitoring</li>
    <li>Incident Response</li>
    <li>Governance, Risk &amp; Compliance</li>
    <li>Security Awareness Training</li>
    <li>Cybersecurity Consulting</li>
  </ul>
  <h2>3. Use of Our Website</h2>
  You agree NOT to:
  <ul>
    <li>Attack, probe, scan, or test our systems</li>
    <li>Upload malware, harmful scripts, or perform unauthorized penetration tests</li>
    <li>Violate Indian IT Act, CERT-In regulations, or DPDP Act</li>
  </ul>
  <h2>4. Client Responsibilities</h2>
  Clients engaging CyberAries services agree to:
  <ul>
    <li>Provide accurate information for security assessments</li>
    <li>Ensure systems tested belong to them or have explicit authorization</li>
    <li>Follow recommendations provided in audit reports</li>
    <li>Maintain legal compliance for their own operations</li>
  </ul>
  <h2>5. Service Delivery</h2>
  All services (VAPT, PT, SOC, compliance audits, etc.):
  <ul>
    <li>Are delivered based on approved contracts/SoWs</li>
    <li>Follow strict confidentiality and NDAs</li>
    <li>Are advisory in nature; final implementation is client responsibility</li>
  </ul>
  <h2>6. Confidentiality</h2>
  CyberAries maintains strict confidentiality of:
  <ul>
    <li>System architecture</li>
    <li>Credentials shared for testing</li>
    <li>Audit reports &amp; testing results</li>
  </ul>
  <h2>7. Intellectual Property</h2>
  All content, dashboards, reports, methodology, and branding belong to CyberAries.
  <h2>8. Payment &amp; Refund Policy</h2>
  <ul>
    <li>All invoices must be paid as per contract terms</li>
    <li>No refund once testing/audit work has begun</li>
    <li>Delayed payments may pause service delivery</li>
  </ul>
  <h2>9. Liability Limitations</h2>
  CyberAries is NOT liable for:
  <ul>
    <li>Client-side misconfigurations</li>
    <li>Data loss due to client negligence</li>
    <li>Third-party service failures</li>
    <li>Damages arising from misuse of VAPT findings</li>
  </ul>
  <h2>10. Indemnification</h2>
  You agree to indemnify CyberAries from claims arising from misuse of:
  <ul>
    <li>Reports</li>
    <li>Testing results</li>
    <li>Security recommendations</li>
  </ul>
  <h2>11. Third-Party Links</h2>
  Our website may link to external sites. CyberAries is not responsible for their content or policies.
  <h2>12. Governing Law</h2>
  These Terms are governed by the laws of India.
  Disputes fall under the jurisdiction of **[Insert City], India** courts.
  <h2>13. Contact Us</h2>
  CyberAries Security Solutions
  Email: <a href="mailto:legal@cyberaries.com">legal@cyberaries.com</a><br />
  Address: Hiranandani Business Park, Powai, Mumbai - 400071 India
</div>
  )
}

export default TermsAndConditions;