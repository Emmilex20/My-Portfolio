import { useEffect, useState } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";

/* eslint-disable react/no-unescaped-entities */
const servicesData = [
  {
    title: "Web design",
    icon: "/images/icon-design.svg",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    title: "Web development",
    icon: "/images/icon-dev.svg",
    description: "High-quality development of sites at the professional level.",
  },
  {
    title: "Mobile apps",
    icon: "/images/icon-app.svg",
    description:
      "Professional development of applications for iOS and Android.",
  },
  {
    title: "Photography",
    icon: "/images/icon-photo.svg",
    description:
      "I make high-quality photos of any category at a professional level.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setTestimonials(data);
      });
  }, []);
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          I’m a passionate web developer with a strong focus on creating
          user-friendly, responsive, and visually appealing websites. My
          expertise lies in front-end development, UI/UX design, and modern web
          technologies.{" "}
        </p>

        <p>
          I enjoy transforming ideas into digital experiences that not only look
          great but also perform seamlessly across devices. Whether it's
          building dynamic web applications or crafting pixel-perfect designs,
          I’m committed to delivering high-quality code and innovative solutions
          that drive business success.
        </p>
      </section>

      {/* services */}
      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* Testimonials section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>

      {/* Clients logo section */}
      <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
                <a href="#" />
                <img src="/images/logo-1-color.png" alt="" />
            </li>
            <li className="clients-item">
                <a href="#" />
                <img src="/images/logo-2-color.png" alt="" />
            </li>
            <li className="clients-item">
                <a href="#" />
                <img src="/images/logo-3-color.png" alt="" />
            </li>
            <li className="clients-item">
                <a href="#" />
                <img src="/images/logo-4-color.png" alt="" />
            </li>
            <li className="clients-item">
                <a href="#" />
                <img src="/images/logo-5-color.png" alt="" />
            </li>
            <li className="clients-item">
                <a href="#" />
                <img src="/images/logo-6-color.png" alt="" />
            </li>
          </ul>
      </section>
    </div>
  );
};

export default About;
