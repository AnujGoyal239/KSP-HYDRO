import { Link } from 'react-router-dom';

/**
 * ContactButton - Call-to-action button for contact page
 * Positioned on the right side of the navbar
 */
const ContactButton = () => {
  return (
    <Link
      to="/contact"
      className="hidden md:block px-6 py-2.5 bg-blue-600 text-white rounded-lg 
                 text-[15px] font-semibold hover:bg-blue-700 
                 transition-all shadow-md active:scale-95"
    >
      Contact
    </Link>
  );
};

export default ContactButton;
