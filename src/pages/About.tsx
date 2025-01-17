import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* About Us Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At Veniegas Dental Care, we are dedicated to providing exceptional
            dental care in a welcoming and comfortable environment. With years
            of experience and a passion for enhancing smiles, we aim to improve
            your oral health and confidence. Our team is committed to delivering
            top-tier dental services with a personal touch.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#6A5B7B] mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We envision being the leading dental care provider, recognized for
            our commitment to excellence, innovation in dental treatments, and
            creating lasting relationships with our patients. Our goal is to
            transform the dental care experience and make quality oral
            healthcare accessible to all.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#6A5B7B] mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our mission is to provide personalized dental care to each patient,
            ensuring a comfortable and stress-free experience. We believe in the
            power of healthy smiles and aim to offer a variety of services to
            meet every patient's needs, from preventive care to cosmetic
            treatments.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#6A5B7B] mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Our dedicated team of dental professionals is here to ensure that
            you receive the highest level of care. With extensive experience and
            a commitment to patient satisfaction, our team works together to
            provide a holistic approach to your oral health.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Placeholder Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/assets/lead.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#6A5B7B]">
                Dr. Izzra Gwyn Veniegas
              </h3>
              <p className="text-gray-600">Lead Dentist</p>
            </div>
            {/* Placeholder Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/assets/bean.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#6A5B7B]">Dr. Bean</h3>
              <p className="text-gray-600">Dental Hygienist</p>
            </div>
            {/* Placeholder Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/assets/assistant.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#6A5B7B]">
                Dr. Mike Varshavski
              </h3>
              <p className="text-gray-600">Dental Assistant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#6A5B7B] mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            We offer a wide range of dental services, from routine cleanings to
            advanced cosmetic procedures. Our team is skilled in providing
            personalized treatments that cater to your specific needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#6A5B7B] mb-4">
                General Dentistry
              </h3>
              <p className="text-gray-600">
                Routine cleanings, exams, fillings, and more.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#6A5B7B] mb-4">
                Cosmetic Dentistry
              </h3>
              <p className="text-gray-600">
                Teeth whitening, veneers, bonding, and smile makeovers.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#6A5B7B] mb-4">
                Orthodontics
              </h3>
              <p className="text-gray-600">
                Braces and Invisalign treatments for a perfect smile.
              </p>
            </div>
          </div>
          <a
            href="/services"
            className="inline-block bg-[#8B7DA7] text-white px-8 py-3 rounded-full hover:bg-[#6A5B7B] transition"
          >
            View All Services
          </a>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#6A5B7B] mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Have any questions? We'd love to hear from you! Reach out to us
            through our contact page or give us a call to schedule an
            appointment.
          </p>
          <button className="bg-[#8B7DA7] text-white px-8 py-3 rounded-full hover:bg-[#6A5B7B] transition">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
