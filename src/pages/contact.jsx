import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import instalog from "../images/logo/socialmedialogos/icons8-instagram-logo-250.png";
import twitlog from "../images/logo/socialmedialogos/icons8-x-250.png";
import youtubelog from "../images/logo/socialmedialogos/icons8-youtube-250.png";
import facebooklog from "../images/logo/socialmedialogos/icons8-facebook-250.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-10 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {/* Contact Info */}
        <div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            Get in Touch
          </h3>
          <p className="text-gray-300 mt-2 text-lg">Feel free to reach out for collaborations or inquiries.</p>
          <div className="mt-4 space-y-3 text-lg">
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.1 }}>
              <FaPhoneAlt className="text-indigo-400" />
              <span className="font-semibold text-white">+91 98765 43210</span>
            </motion.div>
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.1 }}>
              <FaEnvelope className="text-indigo-400" />
              <span className="font-semibold text-white">contact@melwinclicks.com</span>
            </motion.div>
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.1 }}>
              <FaMapMarkerAlt className="text-indigo-400" />
              <span className="font-semibold text-white">Hyderabad, India</span>
            </motion.div>
          </div>
        </div>

        {/* Social Media Icons */}
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a href="https://www.instagram.com/melwin_clicks/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            <img src={instalog} alt="Instagram" className="w-10" />
          </motion.a>
          <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            <img src={twitlog} alt="Twitter" className="w-10" />
          </motion.a>
          <motion.a href="https://www.facebook.com/SudhakarMelwin" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            <img src={facebooklog} alt="Facebook" className="w-10" />
          </motion.a>
          <motion.a href="https://www.youtube.com/@melwinclicks6159" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            <img src={youtubelog} alt="YouTube" className="w-10" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div className="text-center mt-6 text-gray-400 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        © {new Date().getFullYear()} Melwi Clicks. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
