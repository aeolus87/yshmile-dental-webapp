import { Calendar, Star, Shield, Heart, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import HeroCarousel from "../components/HeroCarousel";

import { Icon } from "@iconify/react";
import { Service } from "../types";

const HomePage = () => {

    
  const services: Service[] = [
    {
      icon: <Icon icon="mdi:tooth-outline" width={40} height={40} />,
      title: "General Dentistry",
      description: "Comprehensive dental care for your entire family",
    },
    {
      icon: <Star size={40} />,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our aesthetic treatments",
    },
    {
      icon: <Shield size={40} />,
      title: "Preventive Care",
      description: "Maintain your oral health with regular checkups",
    },
    {
      icon: <Heart size={40} />,
      title: "Emergency Care",
      description: "24/7 emergency dental services when you need them",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "The best dental care I have ever experienced! Professional, courteous, and friendly staff made me feel like family... would highly recommend to anyone!",
    },
    {
      name: "Jane Smith",
      feedback:
        "Wonderful experience with this clinic! They explained everything in detail and ensured my comfort throughout. Highly skilled team!",
    },
    {
      name: "Mark Johnson",
      feedback:
        "The staff is amazing! I’ve never felt more relaxed during a dental procedure. Highly recommend this place for anyone looking for a top-notch dentist!",
    },
    {
      name: "Emily Davis",
      feedback:
        "I had a fantastic experience! The team is so welcoming, and the dental treatments are of the highest quality. I will definitely be returning.",
    },
    {
      name: "Michael Brown",
      feedback:
        "A truly excellent clinic! The staff made me feel at ease, and the whole experience was incredibly professional. Highly recommend for anyone looking for top-tier dental care.",
    },
    {
      name: "Sarah Lee",
      feedback:
        "The service is amazing, and the staff is so friendly. They took great care of me, and I felt extremely comfortable throughout the whole process. Highly recommend!",
    },
    {
      name: "David Wilson",
      feedback:
        "I've been to a lot of dental clinics, but this one really stands out. They offer exceptional service, and I always leave feeling confident about my dental health.",
    },
    {
      name: "Laura Thomas",
      feedback:
        "What an amazing team! They are so accommodating and explain everything in detail. I felt completely at ease during my visit. Definitely recommend this clinic to anyone.",
    },
  ];

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer:
        "It is recommended to visit the dentist every six months for a routine checkup and cleaning to maintain optimal oral health.",
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer free consultations for all new clients.",
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer:
        "If you experience severe pain, bleeding, or a broken tooth, contact our clinic immediately for emergency care.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F3F1F6] to-white py-20">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl lg:ml-20 ml-0">
            <h1 className="text-5xl font-bold mb-6 leading-tight text-[#6A5B7B]">
              Your Perfect Smile Starts Here
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Experience exceptional dental care with our team of experienced
              professionals. We're committed to giving you the confident smile
              you deserve.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#8B7DA7] text-white px-8 py-3 rounded-full hover:bg-[#6A5B7B] transition-colors flex items-center gap-2">
                Book Now <Calendar size={20} />
              </button>
              <button className="border border-[#8B7DA7] text-[#8B7DA7] px-8 py-3 rounded-full hover:bg-[#F3F1F6] transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <HeroCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6A5B7B]">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-[30px_30px_200px] bg-white border-2 border-[#F3F1F6] hover:border-[#8B7DA7] hover:shadow-lg transition-all duration-300"
              >
                <div className="text-[#8B7DA7] mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#6A5B7B]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-[#8B7DA7] flex items-center justify-center gap-1 mx-auto hover:text-[#6A5B7B] group">
                  Learn More{" "}
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="Testimonials">
        <Testimonials testimonials={testimonials} />
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6A5B7B]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 lg:p-24">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <h3 className="text-lg font-semibold text-[#6A5B7B] mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/faq"
              className="inline-block bg-[#8B7DA7] text-white px-8 py-3 rounded-full hover:bg-[#6A5B7B] transition"
            >
              See More FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F3F1F6]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6A5B7B]">
            Contact Us
          </h2>
          <form className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3"
                rows={4}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="bg-[#8B7DA7] text-white px-6 py-3 rounded-full hover:bg-[#6A5B7B] transition-colors">
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
