import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Let's Work Together</h1>
            <p className="text-lg text-gray-600">
              Tell me about your project and let's create something amazing together. 
              Fill out the form below and I'll get back to you within 24-48 hours.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-6">
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Contact Information Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-primary">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Your full name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      placeholder="Your organization name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-primary">Project Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a project type</option>
                      <option value="video">Video Production</option>
                      <option value="website">Website Design</option>
                      <option value="social">Social Media Content</option>
                      <option value="branding">Brand Identity</option>
                      <option value="event">Event Documentation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Please describe your project goals, vision, and any specific requirements..."
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2weeks">1-2 weeks</option>
                      <option value="1month">1 month</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a budget range</option>
                      <option value="under1k">Under $1,000</option>
                      <option value="1k-3k">$1,000 - $3,000</option>
                      <option value="3k-5k">$3,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="over10k">$10,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-secondary">Additional Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="additionalOption" className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about me?
                    </label>
                    <select
                      id="additionalOption"
                      name="additionalOption"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="referral">Referred by someone</option>
                      <option value="google">Found via Google</option>
                      <option value="social">Social Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preference" className="block text-sm font-medium text-gray-700 mb-2">
                      Communication Preference
                    </label>
                    <select
                      id="preference"
                      name="preference"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your preference</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity font-medium shadow-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-center text-sm text-gray-600">
                  Thank you for your inquiry! I'll review it and get back to you within 24-48 hours.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-center text-sm text-red-500">
                  There was an error submitting your inquiry. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
