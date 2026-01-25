import React from "react";

function TermsAndConditions() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Terms &amp; Conditions – CyberAries</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            font-family: Arial, sans-serif;
            line-height: 1.65;
            padding: 30px;
            max-width: 900px;
            margin: auto;
          }
          h1, h2, h3 {
            color: #0a2a43;
          }
          .note {
            background: #fff7d1;
            padding: 12px;
            border-left: 4px solid #e2b100;
            margin: 20px 0;
          }
        `
      }} />

      <h1>Terms &amp; Conditions</h1>
      <p><strong>Effective Date:</strong> DEC 2025</p>

      <div className="note">
        This Terms &amp; Conditions page is custom-tailored for <strong>CyberAries</strong>, an Indian cybersecurity
        company. It outlines the rules and guidelines for using our website and services, ensuring compliance with Indian
        laws and industry best practices.
      </div>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using the CyberAries website or services, you agree to be bound by these Terms &amp; Conditions.</p>

      <h2>2. About CyberAries</h2>
      <p>CyberAries is an Indian cybersecurity service provider specializing in:</p>
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
      <p>You agree NOT to:</p>
      <ul>
        <li>Attack, probe, scan, or test our systems</li>
        <li>Upload malware, harmful scripts, or perform unauthorized penetration tests</li>
        <li>Violate Indian IT Act, CERT-In regulations, or DPDP Act</li>
      </ul>

      <h2>4. Client Responsibilities</h2>
      <p>Clients engaging CyberAries services agree to:</p>
      <ul>
        <li>Provide accurate information for security assessments</li>
        <li>Ensure systems tested belong to them or have explicit authorization</li>
        <li>Follow recommendations provided in audit reports</li>
        <li>Maintain legal compliance for their own operations</li>
      </ul>

      <h2>5. Service Delivery</h2>
      <p>All services (VAPT, PT, SOC, compliance audits, etc.):</p>
      <ul>
        <li>Are delivered based on approved contracts/SoWs</li>
        <li>Follow strict confidentiality and NDAs</li>
        <li>Are advisory in nature; final implementation is client responsibility</li>
      </ul>

      <h2>6. Confidentiality</h2>
      <p>CyberAries maintains strict confidentiality of:</p>
      <ul>
        <li>System architecture</li>
        <li>Credentials shared for testing</li>
        <li>Audit reports &amp; testing results</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>All content, dashboards, reports, methodology, and branding belong to CyberAries.</p>

      <h2>8. Payment &amp; Refund Policy</h2>
      <ul>
        <li>All invoices must be paid as per contract terms</li>
        <li>No refund once testing/audit work has begun</li>
        <li>Delayed payments may pause service delivery</li>
      </ul>

      <h2>9. Liability Limitations</h2>
      <p>CyberAries is NOT liable for:</p>
      <ul>
        <li>Client-side misconfigurations</li>
        <li>Data loss due to client negligence</li>
        <li>Third-party service failures</li>
        <li>Damages arising from misuse of VAPT findings</li>
      </ul>

      <h2>10. Indemnification</h2>
      <p>You agree to indemnify CyberAries from claims arising from misuse of:</p>
      <ul>
        <li>Reports</li>
        <li>Testing results</li>
        <li>Security recommendations</li>
      </ul>

      <h2>11. Third-Party Links</h2>
      <p>Our website may link to external sites. CyberAries is not responsible for their content or policies.</p>

      <h2>12. Governing Law</h2>
      <p>These Terms are governed by the laws of India. Disputes fall under the jurisdiction of <strong>Mumbai, India</strong> courts.</p>

      <h2>13. Contact Us</h2>
      <p>
        CyberAries Security Solutions<br />
        Email: <a href="mailto:legal@cyberaries.com">legal@cyberaries.com</a><br />
        Address: Hiranandani Business Park, Powai, Mumbai - 400071 India
      </p>
    </div>
  );
}

export default TermsAndConditions;