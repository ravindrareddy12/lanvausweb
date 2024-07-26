import React from 'react';

const services = [
  { id: 1, name: 'Website Development' },
  { id: 2, name: 'App Development' },
  { id: 3, name: 'SEO' },
  { id: 4, name: 'Digital Marketing' },
  { id: 5, name: 'Social Media Management' },
  { id: 6, name: 'Ad Management' },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100 text-center" id="services">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 w-80 transform transition-transform hover:scale-105" data-aos="fade-up">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="mt-2">Learn more about {service.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
