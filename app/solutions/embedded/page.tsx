'use client';

import Image from 'next/image';
import {
  Cpu,
  Layers,
  ShieldCheck,
  Code,
  Settings,
  Terminal,
} from 'lucide-react';

export default function EmbeddedSolutionsPage() {
  return (
    <>
      {/* ================= TOP BLUR DIV ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-md" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
            Embedded Engineering Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
            End-to-end embedded, firmware, and hardware engineering services
            tailored for industrial, automotive, medical, and consumer products.
          </p>
        </div>
      </section>

      {/* ================= ENGINEERING CAPABILITIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* ================= BOARD DESIGN ================= */}
          <div className="border-2 border-primary rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="relative h-52">
              <Image
                src="/assets/iot.jpg"
                alt="Board Design"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">
                Board Design & Validation
              </h3>

              <ul className="space-y-4 text-gray-700 flex-1">
                <li className="flex gap-3">
                  <Cpu className="text-primary shrink-0" />
                  Schematics and PCB Layout Designing
                </li>
                <li className="flex gap-3">
                  <Layers className="text-primary shrink-0" />
                  Technical & BoM Cost Feasibility Analysis
                </li>
                <li className="flex gap-3">
                  <Settings className="text-primary shrink-0" />
                  Thermal Simulation & SI Analysis
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="text-primary shrink-0" />
                  Reliability Analysis (FMEA, MTBF)
                </li>
                <li className="flex gap-3">
                  <Cpu className="text-primary shrink-0" />
                  PCB Fabrication, Assembly & Bring-up
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="text-primary shrink-0" />
                  EMI / EMC & Regulatory Certifications
                </li>
                <li className="flex gap-3">
                  <Layers className="text-primary shrink-0" />
                  Production Handover & Support
                </li>
              </ul>
            </div>
          </div>

          {/* ================= EMBEDDED SOFTWARE ================= */}
          <div className="border-2 border-primary rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="relative h-52">
              <Image
                src="/assets/iot.jpg"
                alt="Embedded Software"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">
                Embedded Software Development
              </h3>

              <ul className="space-y-4 text-gray-700 flex-1">
                <li className="flex gap-3">
                  <Code className="text-primary shrink-0" />
                  Embedded Software on RTOS / Linux
                </li>
                <li className="flex gap-3">
                  <Layers className="text-primary shrink-0" />
                  Architecture Design & Embedded UI
                </li>
                <li className="flex gap-3">
                  <Terminal className="text-primary shrink-0" />
                  Assembly Level Programming
                </li>
                <li className="flex gap-3">
                  <Code className="text-primary shrink-0" />
                  C / Embedded C / C++
                </li>
                <li className="flex gap-3">
                  <Settings className="text-primary shrink-0" />
                  API & Custom Integrations
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="text-primary shrink-0" />
                  Manual Testing & Test Automation
                </li>
                <li className="flex gap-3">
                  <Cpu className="text-primary shrink-0" />
                  Performance Tuning & Maintenance
                </li>
              </ul>
            </div>
          </div>

          {/* ================= FIRMWARE ================= */}
          <div className="border-2 border-primary rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="relative h-52">
              <Image
                src="/assets/iot.jpg"
                alt="Firmware Development"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">
                Firmware Development
              </h3>

              <ul className="space-y-4 text-gray-700 flex-1">
                <li className="flex gap-3">
                  <Cpu className="text-primary shrink-0" />
                  BSP Development (ARM & x86)
                </li>
                <li className="flex gap-3">
                  <Terminal className="text-primary shrink-0" />
                  Bootloader & Device Drivers
                </li>
                <li className="flex gap-3">
                  <Code className="text-primary shrink-0" />
                  Baremetal Firmware Development
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="text-primary shrink-0" />
                  Firmware Validation (Manual & Automated)
                </li>
                <li className="flex gap-3">
                  <Layers className="text-primary shrink-0" />
                  OS Migration & Feature Enhancements
                </li>
                <li className="flex gap-3">
                  <Settings className="text-primary shrink-0" />
                  Protocol Stack Integration
                </li>
                <li className="flex gap-3">
                  <Cpu className="text-primary shrink-0" />
                  Production Testing (Manual & Automated)
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
