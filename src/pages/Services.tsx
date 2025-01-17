import Header from "../components/Header";
import Footer from "../components/Footer";

interface Service {
  name: string;
  description: string;
  imgUrl: string;
}

const Services = () => {
  const services: Service[] = [
    {
      name: "Orthodontics",
      description:
        "Corrects alignment of teeth and jaws to improve bite and appearance.",
      imgUrl: "assets/orthodontics-image.jpg",
    },
    {
      name: "Prosthodontics",
      description:
        "Restores and replaces missing teeth with crowns, bridges, and dentures.",
      imgUrl: "path/to/prosthodontics-image.jpg",
    },
    {
      name: "Dental Consultation",
      description:
        "A complete examination to diagnose oral health issues and treatment options.",
      imgUrl: "path/to/dental-consultation-image.jpg",
    },
    {
      name: "Dental Cleaning",
      description:
        "Professional cleaning to remove plaque, tartar, and prevent gum disease.",
      imgUrl: "path/to/dental-cleaning-image.jpg",
    },
    {
      name: "Fillings",
      description:
        "Restore cavities with durable materials to prevent further damage to teeth.",
      imgUrl: "path/to/fillings-image.jpg",
    },
    {
      name: "Crowns and Bridges",
      description:
        "Restorations that cover or replace damaged or missing teeth for a natural look.",
      imgUrl: "path/to/crowns-bridges-image.jpg",
    },
    {
      name: "Cosmetic Dentistry",
      description:
        "Enhance your smile with treatments like veneers, bonding, and reshaping.",
      imgUrl: "path/to/cosmetic-dentistry-image.jpg",
    },
    {
      name: "Teeth Whitening",
      description:
        "Professional treatments to brighten your smile and remove stains.",
      imgUrl: "path/to/teeth-whitening-image.jpg",
    },
    {
      name: "Oral Surgery",
      description:
        "Surgical procedures to address issues like impacted teeth or jaw problems.",
      imgUrl: "path/to/oral-surgery-image.jpg",
    },
  ];

  const defaultImgUrl = "/assets/kanye-avatar.jpg";

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = defaultImgUrl;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-[#6A5B7B]">
            Our Services
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            We offer a wide range of dental services to meet all of your oral
            health needs. Whether you need preventive care or more advanced
            treatments, our team is here to provide the best care possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#f4f1f8] p-8 rounded-[30px_30px_200px] shadow-md border border-[#e0d0f8] hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col">
                  <div className="w-full mb-4">
                    <img
                      src={service.imgUrl || defaultImgUrl}
                      alt={service.name}
                      onError={handleImageError}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#6A5B7B] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
