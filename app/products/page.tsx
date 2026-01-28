'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Embedded Product Design',
    subtitle: 'End-to-End Engineering',
    description:
      'We offer complete embedded product design services including system architecture, hardware design, firmware development, validation, and production support across multiple industries.',
    image: '/Assets/embbeded.jpg',
    imagePosition: 'right',
  },
  {
    id: 2,
    title: 'Hardware Design',
    subtitle: 'PCB & Electronics',
    description:
      'Our hardware design services cover schematic design, multi-layer PCB layout, signal integrity analysis, power optimization, EMI/EMC compliance, and prototype bring-up.',
    image: '/Assets/embbeded.jpg',
    imagePosition: 'left',
  },
  {
    id: 3,
    title: 'Firmware & Software',
    subtitle: 'Low-level to Application',
    description:
      'We develop robust firmware and software solutions including bare-metal, RTOS, Embedded Linux, drivers, middleware, and application-level software.',
    image: '/Assets/embbeded.jpg',
    imagePosition: 'right',
  },
  {
    id: 4,
    title: 'Mechanical Design',
    subtitle: 'Enclosures & Thermal',
    description:
      'Our mechanical design team delivers industrial design, enclosure modeling, thermal analysis, material selection, and DFM-ready designs for mass production.',
    image: '/Assets/embbeded.jpg',
    imagePosition: 'left',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* ================= PRODUCTS HEADER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-md" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-primary">
            Our Products
          </h1>
        </div>
      </section>

      {/* ================= PRODUCTS LIST ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {products.map((product) => (
          <div key={product.id} className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

              {/* IMAGE — FIRST IN JSX */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.4 }}
                className={`md:col-span-5 ${
                  product.imagePosition === 'left'
                    ? 'md:order-1'
                    : 'md:order-2'
                }`}
              >
                <div className="relative w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden border-2 border-primary">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              {/* TEXT — SECOND IN JSX */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ amount: 0.4 }}
                className={`md:col-span-7 ${
                  product.imagePosition === 'left'
                    ? 'md:order-2'
                    : 'md:order-1'
                }`}
              >
                <div className="border-2 border-primary rounded-3xl p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {product.title}
                  </h2>
                  <h3 className="text-lg md:text-xl text-gray-500 mb-4">
                    {product.subtitle}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {product.description}
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        ))}
      </section>
    </>
  );
}
