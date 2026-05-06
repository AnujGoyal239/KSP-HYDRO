import { Link } from 'react-router-dom';

const ProductsCTASection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Primary Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0A1628] mb-4">
          Need Help Choosing the Right Product?
        </h2>

        {/* Subtext / Description */}
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-8">
          Our technical experts are ready to help you select the perfect solution for your requirements
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-block bg-white text-[#3B82F6] font-medium px-8 py-3 rounded-lg shadow-md border border-gray-100"
        >
          Request a Consultation
        </Link>
      </div>
    </section>
  );
};

export default ProductsCTASection;
