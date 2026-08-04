import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "./Contact.scss";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "venkat.selvan36@gmail.com",
    href: "venkat.selvan36@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 96774 64724",
    href: "+91 96774 64724",
  },

  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Navalur, Chennai, Tamil Nadu",
    href: "#",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/senthamizhselvan-v",
    href: "https://linkedin.com/in/senthamizhselvan-v",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/senthamizhselvanv",
    href: "https://github.com/senthamizhselvanv",
  },
];

const primaryContactCards = [
  contactInfo[0],
  contactInfo[1],
  contactInfo[3],
  contactInfo[4],
];

function Contact() {
  const [copiedLink, setCopiedLink] = useState("");

  const handleCopyLink = async (e, link) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(link);
      setCopiedLink(link);
      window.setTimeout(() => setCopiedLink(""), 1200);
    } catch (error) {
      console.error("Failed to copy link", error);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's <span className="highlight">Connect</span>
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </motion.p>
        </div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-card">
              <h3>Contact Information</h3>
              <p>Feel free to reach out through any of these channels.</p>

              <div className="info-list">
                {primaryContactCards.map((info) => {
                  const isCopyable =
                    info.label === "GitHub" || info.label === "LinkedIn";

                  return (
                    <motion.a
                      key={info.href}
                      href={info.href}
                      className={`info-item${copiedLink === info.href ? " copied" : ""}${isCopyable ? " copyable-item" : " static-item"}`}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      whileHover={{ y: -3, scale: 1.01 }}
                      onDoubleClick={(e) => {
                        if (isCopyable) {
                          handleCopyLink(e, info.href);
                        }
                      }}
                      onClick={(e) => {
                        if (!isCopyable) {
                          e.preventDefault();
                          e.stopPropagation();
                        }
                      }}
                    >
                      <div className="info-icon">
                        <info.icon />
                      </div>
                      <div className="info-content">
                        <span className="info-value">{info.value}</span>
                      </div>
                    </motion.a>
                  );
                })}

                <div className="info-item location-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <span className="info-label">Location</span>
                    <span className="info-value">Chennai, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-decoration">
              <div className="decoration-circle circle-1" />
              <div className="decoration-circle circle-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
