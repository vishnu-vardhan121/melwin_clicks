import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import logo from "../images/logo/LOGO 4.png";
import instalog from "../images/logo/socialmedialogos/icons8-instagram-logo-250.png";
import twitlog from "../images/logo/socialmedialogos/icons8-x-250.png";
import youtubelog from "../images/logo/socialmedialogos/icons8-youtube-250.png";
import facebooklog from "../images/logo/socialmedialogos/icons8-facebook-250.png";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = () => {
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }

    const templateParams = { name, email, message };

    emailjs
      .send(
        "service_4pxlqof",
        "template_m79em8y",
        templateParams,
        "_tvFaE0qHkv3zrQBJ"
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          setTimeout(() => setStatus(""), 3000);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus({ type: "error", message: "Failed to send message. Try again." });
        }
      );
  };

  return (
    <footer className="bg-gray-950 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={logo} alt="logo" className="w-24 h-24 sm:w-36 sm:h-36" />
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-2 text-gray-400">Melwin Clicks</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/projects" className="hover:text-white">Projects</a></li>
              <li><a href="/about" className="hover:text-white">About me</a></li>
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-2 text-gray-400">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={twitlog}
                  alt="Twitter"
                  className="w-8 transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                />
              </a>
              <a href="https://www.instagram.com/melwin_clicks/" target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={instalog}
                  alt="Instagram"
                  className="w-8 transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                />
              </a>
              <a href="https://www.facebook.com/SudhakarMelwin" target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={facebooklog}
                  alt="Facebook"
                  className="w-8 transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                />
              </a>
              <a href="https://www.youtube.com/@melwinclicks6159" target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={youtubelog}
                  alt="YouTube"
                  className="w-8 transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                />
              </a>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="sm:col-span-2 lg:col-span-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h4 className="text-lg font-bold mb-2 text-gray-400">Message Me</h4>
            <div className="space-y-2">
              <motion.input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-gray-500"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-gray-500"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-gray-300 placeholder-gray-500 h-16 focus:ring-2 focus:ring-gray-500"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.button
                onClick={handleSendMessage}
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full"
                whileHover={{ scale: 1.1 }}
              >
                Send
              </motion.button>
              {status && (
                <p className={`mt-2 ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                  {status.message}
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Melwin Clicks | All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
