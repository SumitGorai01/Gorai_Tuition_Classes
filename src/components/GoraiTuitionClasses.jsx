import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Users,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  GraduationCap,
  MessageCircle,
  Quote,
} from "lucide-react";

import Logo from "../assets/logo2.png";
import Hero from "../assets/hero3.jpg";
import AmitPic from "../assets/ag-pic.jpg";
import SumitPic from "../assets/sg-pic.png";

export default function GoraiTuitionSite() {
  const courses = [
    {
      title: "In-Center Classes",
      level: "Class 1 - 10",
      bullets: [
        "Concept-driven lessons",
        "Problem solving practice",
        "Exam strategy",
      ],
      price: "₹600 / month",
      icon: <Calculator className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Home Tuition",
      level: "Class 1 - 10",
      bullets: [
        "Theory + practical approach",
        "CBSE & ICSE aligned",
        "Regular tests",
      ],
      price: "₹3,000 / month",
      icon: <FlaskConical className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: "Computer Class",
      level: "Class 1 - 12",
      bullets: [
        "Basic Computer Knowledge",
        "Programming Knowledge",
        "Web & App Development",
      ],
      price: "₹500 / month",
      icon: <BookOpen className="w-6 h-6 text-rose-600" />,
    },
  ];

  const faculty = [
    {
      name: "Mr. Amit Gorai",
      subject: "Mathematics & Science",
      exp: "8+ years experience",
      role: "Founder & CEO",
      img: AmitPic,
    },
    {
      name: "Mr. Sumit Gorai",
      subject: "Computer & Maths",
      exp: "4+ years experience",
      role: "Computer Trainer ",
      img: SumitPic,
    },
  ];

  const faqs = [
    {
      q: "Where is Gorai Tuition Classes located?",
      a: "We are located near Bargawan Namkum Ranchi — contact us for the exact address or directions.",
    },
    {
      q: "What are batch sizes?",
      a: "Small batches of 6-8 students to ensure individual attention.",
    },
    {
      q: "Do you offer demo classes?",
      a: "Yes — free demo class available before enrollment.",
    },
    {
      q: "Which subjects do you teach?",
      a: "We provide tuition for Mathematics, Science, English, Computer, Social Studies and more for school-level students.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            {/* Logo Image */}
            <img
              src={Logo} // <-- replace with your logo file path
              alt="Gorai Tuition Logo"
              className="w-12 h-12 rounded-full"
            />

            {/* Title & Tagline */}
            <div>
              <h1 className="text-lg font-semibold">Gorai Tuition Classes</h1>
              {/* <p className="text-xs text-gray-500">
                Focused coaching • Better scores • Confident students
              </p> */}
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6 text-md">
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a href="#courses" className="hover:text-indigo-600">
              Courses
            </a>
            <a href="#faculty" className="hover:text-indigo-600">
              Faculty
            </a>
            <a href="#schedule" className="hover:text-indigo-600">
              Schedule
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
            <a
              href="tel:+919693587599"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm shadow hover:shadow-lg hover:bg-indigo-700 transition inline-block"
            >
              Call Now
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 400\'><rect width=\'800\' height=\'400\' fill=\'%23eef2ff\'/></svg>')] bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Gorai Tuition Classes
            </h2>
            <p className="mt-4 text-gray-700 max-w-xl">
              Personalized tuition for school & board exams. Experienced
              teachers, small batches, modern teaching methods and regular
              assessments to track progress.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="px-5 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow hover:bg-indigo-700 transition"
              >
                Book a Free Demo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#courses"
                className="px-5 py-3 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition"
              >
                View Courses
              </motion.a>
            </div>

            {/* Highlights with Icons */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-600">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-white rounded-lg shadow-sm flex flex-col items-center"
              >
                <Users className="w-6 h-6 text-indigo-600 mb-1" />
                <div className="font-semibold">8 - 12</div>
                <div className="text-xs">Students / batch</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-white rounded-lg shadow-sm flex flex-col items-center"
              >
                <GraduationCap className="w-6 h-6 text-green-600 mb-1" />
                <div className="font-semibold">Experienced</div>
                <div className="text-xs">Faculty</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-white rounded-lg shadow-sm flex flex-col items-center"
              >
                <CheckCircle className="w-6 h-6 text-rose-600 mb-1" />
                <div className="font-semibold">Weekly</div>
                <div className="text-xs">Assessments</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-white rounded-lg shadow-sm flex flex-col items-center"
              >
                <Clock className="w-6 h-6 text-cyan-600 mb-1" />
                <div className="font-semibold">Flexible</div>
                <div className="text-xs">Timings</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="w-full rounded-2xl bg-white p-6 shadow-lg">
              {/* Animated Image */}
              <motion.img
                src={Hero}
                alt="Class Room"
                className="w-full h-70 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              {/* Timings */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="p-3 bg-indigo-50 rounded-md"
                >
                  <Clock className="w-4 h-4 text-indigo-600 mb-1" />
                  <div className="text-xs">Monday - Saturday</div>
                  <div className="font-medium">3:00 PM - 6:00 PM</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="p-3 bg-cyan-50 rounded-md"
                >
                  <Clock className="w-4 h-4 text-cyan-600 mb-1" />
                  <div className="text-xs">Saturday</div>
                  <div className="font-medium">Special For Test</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-white border-t py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">Our Courses</h3>
          <p className="text-gray-600 mt-2">
            Choose from a range of subject-focused and full-board packages.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <motion.div
                key={c.title}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl border shadow-sm bg-gradient-to-br from-white to-gray-50 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {c.icon}
                    <div>
                      <h4 className="text-lg font-semibold">{c.title}</h4>
                      <div className="text-xs text-gray-500">{c.level}</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">{c.price}</div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {c.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">
            What parents & students say
          </h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              "My daughter's marks improved within two months. The teachers are patient and thorough. — Priya R.",
              "Great doubt clearing sessions and regular tests helped me crack my school exams. — Rajiv S.",
              "Small batches mean individual attention — highly recommended. — Meera K.",
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white rounded-lg shadow-sm relative"
              >
                <Quote className="w-5 h-5 text-indigo-300 absolute -top-3 -left-3" />
                <p className="text-gray-700 text-sm">{t}</p>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h3 className="text-2xl font-semibold mb-6">FAQ</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <motion.details
              key={i}
              whileHover={{ scale: 1.01 }}
              className="p-4 bg-white rounded-lg shadow-sm cursor-pointer"
            >
              <summary className="font-medium flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" /> {f.q}
              </summary>
              <p className="mt-2 text-gray-600 text-sm">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* Faculty */}
      <section
        id="faculty"
        className="bg-gradient-to-r from-indigo-50 to-cyan-50 py-14"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-indigo-600" /> Meet Our
            Faculty
          </h3>
          <p className="text-gray-600 mt-2">
            Experienced, passionate and result-oriented teachers dedicated to
            student success.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {faculty.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition"
              >
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-indigo-100"
                />
                <h4 className="mt-4 text-lg font-semibold">{f.name}</h4>
                <p className="text-sm text-gray-600">{f.subject}</p>
                <p className="text-xs text-gray-500">{f.exp}</p>
                <p className="text-xs text-gray-500">{f.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t py-4">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Left Side: Map + Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Phone className="w-5 h-5 text-indigo-600" /> Get in touch
            </h3>
            <p className="text-gray-600">
              Send a message or call us to book a demo class.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-indigo-500" /> +91 9693587599
                <Mail className="w-4 h-4 text-indigo-500" />{" "}
                goraisumit01@gmail.com
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-500" /> Near Gorai Post
                Office, Gorai, Mumbai
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-600" /> Find us here
                </h4>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Gorai%2C+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition text-sm"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>

              <div className="rounded-lg overflow-hidden shadow">
                <iframe
                  title="Gorai Tuition Classes Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.6316859300364!2d85.38835097477903!3d23.319666805177064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e30078e891e9%3A0x8146093119c31dbf!2sGorai%20Tuition%20Classes!5e1!3m2!1sen!2sin!4v1757773449914!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <div>
              <label className="text-sm">Name</label>
              <input
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <input
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Mobile number"
              />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
                className="w-full mt-1 p-2 border rounded-md"
                rows={5}
                placeholder="How can we help?"
              />
            </div>
            <button
              type="button"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919693587599"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center z-50 animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-8 mt-2">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              {/* Logo Image */}
              <img
                src={Logo} // <-- replace with your logo file path
                alt="Gorai Tuition Logo"
                className="w-12 h-12 rounded-full"
              />

              {/* Title & Tagline */}
              <div>
                <h1 className="text-lg font-semibold">Gorai Tuition Classes</h1>
                <p className="text-sm text-gray-500">
                  Focused coaching • Better scores • Confident students
                </p>
              </div>
            </motion.div>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Gorai Tuition Classes. All rights
            reserved.
          </div>
          <div className="flex gap-4 text-sm text-gray-400">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>WhatsApp</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
