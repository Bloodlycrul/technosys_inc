import * as React from "react";

interface UserEmailProps {
  name: string;
  email: string;
  contactNumber: string;
  services: string[];
}

export const UserEmail: React.FC<Readonly<UserEmailProps>> = ({
  name,
  email,
  contactNumber,
  services,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#000000",
      color: "#ffffff",
      margin: 0,
      padding: "20px",
    }}
  >
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#1a1a1a",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1
        style={{
          color: "#ffffff",
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "20px",
        }}
      >
        Technosys Inc
      </h1>
      <div
        style={{
          background: "linear-gradient(to right, #8B5CF6, #3B82F6)",
          color: "#000000",
          padding: "10px",
          borderRadius: "20px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <p style={{ margin: 0, fontSize: "18px" }}>
          a full cycle agency for all digital & creative.
        </p>
      </div>
      <h2 style={{ color: "white", fontSize: "24px" }}>Welcome, {name}!</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
        We&#39;re excited to embark on this digital journey with you.
      </p>
      <div
        style={{
          backgroundColor: "#2a2a2a",
          padding: "15px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <p style={{ margin: "5px 0", color: "white" }}>
          <strong style={{ color: "white" }}>Email:</strong> {email}
        </p>
        <p style={{ margin: "5px 0", color: "white" }}>
          <strong>Contact Number:</strong> {contactNumber}
        </p>
      </div>
      <h3 style={{ color: "#8B5CF6", fontSize: "20px" }}>
        Services You&#39;re Interested In:
      </h3>
      <ul style={{ paddingLeft: "20px" }}>
        {services.map((service, index) => (
          <li key={index} style={{ marginBottom: "5px", fontSize: "16px" }}>
            {service}
          </li>
        ))}
      </ul>
      <p style={{ fontSize: "16px", lineHeight: "1.5", color: "white" }}>
        We&#39;ll be in touch soon to discuss how we can help elevate your
        digital presence.
      </p>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a
          href="https://technosysincor.com"
          style={{
            background: "linear-gradient(to right, #8B5CF6, #3B82F6)",
            color: "#ffffff",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "25px",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Let&#39;s Get Started
        </a>
      </div>
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          borderTop: "1px solid #333",
          paddingTop: "20px",
        }}
      >
        <p style={{ fontSize: "14px", color: "#888" }}>
          Technosys Inc - Innovating the Digital Landscape
        </p>
        <div style={{ marginTop: "10px" }}>
          <a
            href="https://facebook.com/technosysinc"
            style={{
              color: "#888",
              marginRight: "10px",
              textDecoration: "none",
            }}
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/technosysinc"
            style={{
              color: "#888",
              marginRight: "10px",
              textDecoration: "none",
            }}
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/company/technosysinc"
            style={{ color: "#888", textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default UserEmail;
