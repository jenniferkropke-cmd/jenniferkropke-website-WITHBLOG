import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FeaturedWorkSlider } from "../components/FeaturedWorkSlider";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export default function Home() {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-pink-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Jennifer Kropke
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Creative Direction | Digital Media | Design
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Crafting compelling visual stories through video production, web design, 
            social campaigns, and educational storytelling for organizations focused 
            on community, education, and servant leadership.
          </p>
        </div>
      </section>

      {/* Featured Work Slider */}
      <FeaturedWorkSlider />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-primary">About Jennifer</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I am a multimedia professional passionate about creating meaningful 
                digital experiences that connect organizations with their communities. 
                With expertise spanning video production, web design, and digital 
                strategy, I help mission-driven organizations tell their stories and 
                achieve their goals.
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-secondary">Core Skills:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Video Production & Editing (Premiere Pro, Final Cut Pro)</li>
                  <li>• Web Design & Development (WordPress, Wix, Custom Solutions)</li>
                  <li>• Social Media Strategy & Content Creation</li>
                  <li>• Graphic Design (Photoshop, Illustrator, Canva)</li>
                  <li>• Event Documentation & Live Streaming</li>
                  <li>• Multilingual Content Production</li>
                </ul>
              </div>
              <p className="text-gray-700 italic">
                <strong>Mission:</strong> To empower organizations making a difference 
                by delivering professional, creative solutions that amplify their 
                impact and engage their audiences.
              </p>
            </div>
            <div className="order-first md:order-last">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603400938371-d030ad03505b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MzM0ODc2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Video editing workspace"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-4">
            I WANT TO HEAR FROM YOU
          </h2>
          <p className="text-center text-gray-600 mb-12">Get In Touch</p>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit} name="homepage-contact" method="POST" data-netlify="true" className="space-y-6">
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="homepage-contact" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity font-medium shadow-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="text-center text-sm text-green-600 mt-4">Thank you for your message! I'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-sm text-red-600 mt-4">There was an error submitting your message. Please try again later.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}