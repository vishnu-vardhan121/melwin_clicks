import  { useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../images/logo/LOGO 4.png"
import instalog from "../images/logo/socialmedialogos/icons8-instagram-logo-250.png"
import twitlog from "../images/logo/socialmedialogos/icons8-x-250.png"
import youtubelog from "../images/logo/socialmedialogos/icons8-youtube-250.png"
import facebooklog from "../images/logo/socialmedialogos/icons8-facebook-250.png"
const Footer = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) {
      setStatus("Please enter a valid message.");
      return;
    }

    const templateParams = { message };

    emailjs
      .send(
        "service_4pxlqof", // Replace with your EmailJS service ID
        "template_m79em8y", // Replace with your EmailJS template ID
        templateParams,
        "_tvFaE0qHkv3zrQBJ" // Replace with your EmailJS public key
      )
      .then(
        (r) => {
          console.log(r.text);
          
          setStatus("Message sent successfully!");
          setTimeout(() => {
            setStatus("");
          }, 3000);
          setMessage("");
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <img src={logo} alt="logo" className="sm:w-28 w-16"/>
          {/* Legal Section */}
          <div>
            <h4 className="text-lg font-bold mb-2">Melwin Clicks</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/about" className="hover:underline">About me</a></li>
            </ul>
            </div>
          <div>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
          </div>
          {/* Message Me Section */}
          <div>
            <h4 className="text-lg font-bold mb-2">Message Me</h4>
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-600 rounded mb-2 bg-gray-800 text-white placeholder-gray-400"
            />
            <button
              onClick={handleSendMessage}
              className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
            {status && <p className="text-yellow-400 mt-2">{status}</p>}
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-sm">© Melwin Clicks</h1>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500"
              >
                <img src={twitlog} alt="twitter" className="w-8"/>
              </a>
              <a
                href="https://www.instagram.com/melwin_clicks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500"
              >
                <img src={instalog} alt="instagram" className="w-8"/>
              </a>
              <a
                href="https://www.facebook.com/SudhakarMelwin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500"
              >
                <img src={facebooklog} alt="email" className="w-8"/>
              </a>
              <a
                href="https://www.youtube.com/@melwinclicks6159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500"
              >
                <img src={youtubelog} alt="youtube" className="w-8"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
