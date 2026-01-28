'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      {/* ================= HERO SECTION (UNCHANGED STRUCTURE) ================= */}
      <section className="bg-secondary-gray">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-5/12 flex justify-center"
            >
              <Image
                src="/assets/mind.jpg"
                alt="Tensorminds"
                width={480}
                height={480}
                className="rounded-3xl w-full max-w-md"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-7/12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                PRODUCT DESIGN AND ENGINEERING CONSULTANCY SERVICES LLP
              </h2>
              <p className="text-lg md:text-xl leading-relaxed lg:text-center">
                Founded in 2020, Tensorminds Product Design and Engineering
                Consultancy Services LLP is evolving in the world of technological
                dominance with decades of embedded expertise.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-accent-purple text-3xl md:text-4xl font-extrabold">
            What We Do
          </h2>
          <p className="text-xl mt-3 font-medium">
            End-to-end engineering solutions across embedded domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Embedded Systems',
              desc: 'RTOS, Linux, firmware, BSPs, and embedded application development.',
              href: '/solutions/embedded',
            },
            {
              title: 'Hardware Design',
              desc: 'Custom boards, SVBs, EVMs, PoC, production-ready PCB designs.',
              href: '/solutions/hardware',
            },
            {
              title: 'Firmware & Software',
              desc: 'Application development, automation, cloud, and system integration.',
              href: '/solutions/firmware',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Link href={item.href}>
                <div className="cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:scale-[1.03] transition">
                  <Image
                    src="/assets/hardware.jpg"
                    alt={item.title}
                    width={400}
                    height={260}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-lg">{item.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

            {/* ================= MISSION & VISION ================= */}
<section className="bg-secondary-gray py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-center text-3xl md:text-4xl font-extrabold text-accent-purple mb-12">
      Mission And Vision
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        'We create and build an environment to solve real time problems with innovative practical solutions.',
        'We strive to be a strong and reliable partner for your successful product design development and deployment.',
        'We keep developing and using cutting edge technologies and work procedures for implementable solutions.',
      ].map((text, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}        // bottom → up
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ amount: 0.35 }}            // 👈 VISIBILITY BASED
          className="border-2 border-primary rounded-2xl p-8 flex items-center justify-center min-h-[180px] bg-white"
        >
          <p className="font-semibold text-center text-lg md:text-xl">
            {text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



     {/* ================= CTA ================= */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="border-2 border-primary rounded-3xl p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/iot.jpg"
            alt="CTA"
            width={520}
            height={420}
            className="rounded-2xl w-full"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Let’s Build Your Next Product
          </h2>

          <p className="text-xl mb-10 max-w-xl mx-auto">
            Partner with Tensorminds to convert your idea into a reliable,
            production-ready embedded solution.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/about"
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary hover:text-white transition"
            >
              Know More
            </Link>

            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-light transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  </div>
</section>

    </>
  );
}
