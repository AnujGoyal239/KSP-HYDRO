import { useState } from 'react';
import { User, Mail, Phone, Briefcase, MessageSquare, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/useToast';
import { sendEmail, TEMPLATES } from '@/lib/emailjs';

const ApplicationFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { success, error } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const result = await sendEmail(data, TEMPLATES.CAREERS);
      if (result.success) {
        success(result.message);
        e.target.reset();
      }
    } catch (err) {
      error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 md:py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">How to Apply</h2>
          <div className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed space-y-1">
            <p>
              We are always open to connecting with individuals who are passionate about water engineering, sustainability, and execution excellence.
            </p>
            <p>
              If you believe your skills and mindset align with KSP Hydro, we&apos;d be happy to hear from you.
            </p>
          </div>
        </div>

        {/* Steps Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 max-w-3xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-start gap-4 p-6 bg-[#F0F7FF] rounded-lg border border-blue-100">
            <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
              1
            </div>
            <div>
              <h4 className="font-bold text-[#0F172A] text-base mb-1">Fill out the application form</h4>
              <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed">
                Complete the form below with your details and area of interest.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4 p-6 bg-[#F2FDF5] rounded-lg border border-green-100">
            <div className="w-7 h-7 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
              2
            </div>
            <div>
              <h4 className="font-bold text-[#0F172A] text-base mb-1">Email your resume</h4>
              <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed">
                Send your resume to: <span className="text-blue-600 font-medium">proposal@ksphydro.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Application Form Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Full Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1E293B]">Full Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="user_name"
                  required
                  disabled={isSubmitting}
                  placeholder="Enter your full name"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-[13px] text-gray-700 placeholder:text-gray-400 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1E293B]">Email Address <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    name="user_email"
                    required
                    disabled={isSubmitting}
                    placeholder="your.email@example.com"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-[13px] text-gray-700 placeholder:text-gray-400 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1E293B]">Phone Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    disabled={isSubmitting}
                    placeholder="+91 98765 43210"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-[13px] text-gray-700 placeholder:text-gray-400 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Area of Interest */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1E293B]">Area of Interest <span className="text-red-500">*</span></label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="interest"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. Design Engineering, Operations, Project Execution"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-[13px] text-gray-700 placeholder:text-gray-400 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1E293B]">Message <span className="text-red-500">*</span></label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-gray-400" />
                <textarea
                  name="message"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  placeholder="Tell us about your experience, skills, and why you'd like to join KSP Hydro..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-[13px] text-gray-700 placeholder:text-gray-400 resize-none disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1E5FFF] text-white py-3.5 rounded-md font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-3 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
                {isSubmitting ? 'Sending Application...' : 'Submit Application'}
              </button>
            </div>

            <p className="text-center text-[9px] text-gray-400 uppercase tracking-widest">
              * Required fields
            </p>
          </form>
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-500 text-[13px] mt-10 font-medium">
          Our team reviews every application and will reach out if there is a suitable opportunity.
        </p>
      </div>
    </section>
  );
};

export default ApplicationFormSection;
