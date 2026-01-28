'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      {/* ================= BLUR STRIP ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-md" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-primary">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ================= FORM + MAP + ADDRESS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-2 border-primary rounded-3xl p-8 flex flex-col"
          >
            <h3 className="text-center text-accent-purple text-2xl font-extrabold mb-6">
              Message Us
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col flex-1">
              {['name', 'email', 'phone'].map((field) => (
                <div key={field} className="mb-4">
                  <label className="block font-bold mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    id={field}
                    type={
                      field === 'email'
                        ? 'email'
                        : field === 'phone'
                        ? 'tel'
                        : 'text'
                    }
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg
                               focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
              ))}

              <div className="mb-6">
                <label className="block font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg
                             focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-auto bg-primary text-white py-3 rounded-lg
                           hover:bg-primary-light transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* RIGHT: MAP + ADDRESS */}
          <div className="flex flex-col gap-6">

            {/* MAP */}
            <div className="border-2 border-primary rounded-3xl p-2">
              <iframe
                className="w-full h-[260px] md:h-[380px] rounded-2xl"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7359223404546!2d77.537312!3d12.924686999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f001940be75%3A0x356454d52487f7d0!2sTensorminds%20Product%20Design%20and%20Engineering%20Consultancy%20Services%20LLP!5e0!3m2!1sen!2sin!4v1754386058746!5m2!1sen!2sin"
              />
            </div>

            {/* ADDRESS */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-2 border-primary rounded-3xl p-6 text-center"
            >
              <h3 className="text-accent-purple text-2xl font-extrabold mb-4">
                Our Office
              </h3>
              <p className="text-lg leading-relaxed">
                Tensorminds Product Design and Engineering Consultancy Services LLP,
                #4B, 2nd Main, 12th Cross, Mookambikanagar, Hosakerehalli,
                BSK 3rd Stage, Bengaluru – 560085
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT HIGHLIGHT SECTION (FIXED) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-2 border-primary rounded-3xl p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT: IMAGE */}
            <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
 <div className="w-full rounded-2xl overflow-hidden">
  <img
    src="/Assets/icon.jpg"
    alt="Connect with Tensorminds"
    className="
      w-full
      h-auto
      max-h-[490px] lg:h-[490px]
      object-cover
    "
  />
</div>


</motion.div>


            {/* RIGHT: CONTACT BOXES */}
            <div className="flex flex-col gap-6">

              {/* CALL */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="border-2 border-primary rounded-2xl p-6 text-center"
              >
                <h4 className="font-extrabold text-2xl mb-2">Call Us</h4>
                <a href="tel:+919986302777" className="text-2xl font-bold text-primary">
                  +91 99863 02777
                </a>
                <p className="font-semibold mt-2">10:00 AM – 6:00 PM IST</p>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-primary rounded-2xl p-6 text-center"
              >
                <h4 className="font-extrabold text-2xl mb-2">Email Us</h4>
                <p className="text-xl font-bold text-primary">tensormindsllp@gmail.com</p>
                <p className="text-xl font-bold text-primary">projects@tensorminds.com</p>
              </motion.div>

              {/* SOCIAL */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="border-2 border-primary rounded-2xl p-6 text-center"
              >
                <h4 className="font-extrabold text-2xl mb-4">Connect with Us</h4>
                <div className="flex justify-center gap-8">
                  <Instagram size={40} />
                  <Twitter size={40} />
                  <Linkedin size={40} />
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
