import React from "react";

interface AdminNotificationTemplateProps {
  name: string;
  email: string;
  contactNumber: string;
  services: string[];
}

export const AdminEmailTemplate: React.FC<
  Readonly<AdminNotificationTemplateProps>
> = ({ name, email, contactNumber, services }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
    >
      <header
        style={{
          textAlign: "center" as const,
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            margin: "0",
            fontSize: "36px",
            fontWeight: "bold",
            letterSpacing: "-0.025em",
          }}
        >
          Technosys Inc
        </h1>
        <div
          style={{
            background: "linear-gradient(to right, #8b5cf6, #3b82f6)",
            color: "#000000",
            borderRadius: "9999px",
            padding: "8px 16px",
            display: "inline-block",
            marginTop: "10px",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Admin Notification: New Inquiry
          </p>
        </div>
      </header>

      <main
        style={{
          backgroundColor: "#111827",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              color: "#a78bfa",
              fontSize: "24px",
              fontWeight: "bold",
              margin: "0",
            }}
          >
            New Client Inquiry
          </h2>
          <span
            style={{
              fontSize: "14px",
              color: "#9ca3af",
            }}
          >
            Received: {new Date().toLocaleString()}
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          {[
            { label: "Name", value: name },
            { label: "Email", value: email },
            { label: "Contact Number", value: contactNumber },
            { label: "Services Interested In", value: services },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1f2937",
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#9ca3af",
                  marginBottom: "4px",
                }}
              >
                {item.label}
              </p>
              {Array.isArray(item.value) ? (
                <ul
                  style={{
                    margin: "0",
                    paddingLeft: "20px",
                    fontSize: "16px",
                  }}
                >
                  {item.value.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              ) : (
                <p
                  style={{
                    fontSize: "16px",
                    margin: "0",
                  }}
                >
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundColor: "#1f2937",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <h3
            style={{
              margin: "0 0 10px",
              color: "#a78bfa",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Action Items:
          </h3>
          <ul
            style={{
              margin: "0",
              paddingLeft: "20px",
              color: "#d1d5db",
            }}
          >
            <li>Assign a team member to handle this inquiry</li>
            <li>Prepare a tailored proposal based on the services requested</li>
            <li>Schedule an initial consultation call within 24 hours</li>
            <li>Update the CRM with the new lead information</li>
          </ul>
        </div>
      </main>

      <footer
        style={{
          marginTop: "20px",
          textAlign: "center" as const,
          fontSize: "14px",
          color: "#9ca3af",
          borderTop: "1px solid #374151",
          paddingTop: "20px",
        }}
      >
        <div>
          <p style={{ margin: "0" }}>Technosys Inc Admin Portal</p>
          <p style={{ margin: "4px 0" }}>Automated Notification System</p>
        </div>
        <p style={{ marginTop: "10px" }}>For internal use only</p>
      </footer>
    </div>
  );
};
