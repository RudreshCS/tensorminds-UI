'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
// Choose which animation you want to use:
import BrightEmbeddedBackground from './animations/BrightEmbeddedBackground';
// OR use this one instead:
// import EmbeddedCircuitBackground from './animations/EmbeddedCircuitBackground';

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <BrightEmbeddedBackground />
      {/* If you want the standard version instead, use: */}
      {/* <EmbeddedCircuitBackground /> */}
      
      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect around image */}
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-3xl"></div>
              <Image
                src="/assets/mind.jpg"
                alt="Tensorminds"
                width={480}
                height={480}
                className="relative rounded-3xl w-full max-w-md shadow-2xl shadow-blue-500/50"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              PRODUCT DESIGN AND ENGINEERING CONSULTANCY SERVICES LLP
            </h2>
            <p className="text-lg md:text-xl leading-relaxed lg:text-center text-blue-50 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Founded in 2020, Tensorminds Product Design and Engineering
              Consultancy Services LLP is evolving in the world of technological
              dominance with decades of embedded expertise.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}