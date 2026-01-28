'use client';

import Image from 'next/image';
import {
  Code,
  Layers,
  Settings,
  ShieldCheck,
  Cpu,
  Workflow,
  Cloud,
  Monitor,
} from 'lucide-react';

export default function FirmwareSolutionsPage() {
  return (
    <>
      {/* ================= TOP BLUR DIV ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-md" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
            Firmware & Software Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
            Strategy-led digital engineering, application development, industrial
            automation, and long-term support services.
          </p>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

          {/* ================= STRATEGY & UX ================= */}
          <div className="border-2 border-primary rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="relative h-52">
              <Image
                src="/assets/iot.jpg"
                alt="Strategy & UX"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">
                Strategy Consulting & UX Engineering
              </h3>

              <ul className="space-y-4 text-gray-700 flex-1">
                <li className="flex gap-3"><Workflow className="text-primary shrink-0" /> Feature Set Evaluation & Roadmap Development</li>
                <li className="flex gap-3"><Layers className="text-primary shrink-0" /> Platform Evaluation & Digital Assessment</li>
                <li className="flex gap-3"><Monitor className="text-primary shrink-0" /> UX Research & Design Thinking Workshops</li>
                <li className="flex gap-3"><Code className="text-primary shrink-0" /> Wireframes, UI/UX & Creative Design</li>
                <li className="flex gap-3"><Settings className="text-primary shrink-0" /> Prototyping & MVP Development</li>
              </ul>
            </div>
          </div>

          {/* ================= SOFTWARE / APPLICATION ================= */}
          <div className="border-2 border-primary rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="relative h-52">
              <Image
                src="/assets/iot.jpg"
                alt="Software Development"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">
                Software / Application Development
              </h3>

              <ul className="space-y-4 text-gray-700 flex-1">
                <li className="flex gap-3"><Code className="text-primary shrink-0" /> Web, ERP, Ecommerce & HRM Solutions</li>
                <li className="flex gap-3"><Monitor className="text-primary shrink-0" /> Mobile Apps (Native & Cross-Platform)</li>
                <li className="flex gap-3"><Cloud className="text-primary shrink-0" /> Cloud Solutions & Migration</li>
                <li className="flex gap-3"><Cpu className="text-primary shrink-0" /> AI/ML, System Integration & Data Migration</li>
                <li className="flex gap-3"><Settings className="text-primary shrink-0" /> Standalone Apps (Unix / Windows)</li>
              </ul>
            </div>
          </div>

          {/* ================= SUPPORT & MAINTENANCE ================= */}
          <div className="border-2 border-primary rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="relative h-52">
              <Image
                src="/assets/iot.jpg"
                alt="Support & Maintenance"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">
                Application Support & Maintenance
              </h3>

              <ul className="space-y-4 text-gray-700 flex-1">
                <li className="flex gap-3"><ShieldCheck className="text-primary shrink-0" /> L2 & L3 Support</li>
                <li className="flex gap-3"><Settings className="text-primary shrink-0" /> Maintenance & End-of-Life Support</li>
                <li className="flex gap-3"><Workflow className="text-primary shrink-0" /> Release, Patch & Sustenance Engineering</li>
                <li className="flex gap-3"><Cloud className="text-primary shrink-0" /> DevOps, Infrastructure & DB Support</li>
                <li className="flex gap-3"><Layers className="text-primary shrink-0" /> Customization, Enhancements & Upgrades</li>
              </ul>
            </div>
          </div>

          {/* ================= INDUSTRIAL AUTOMATION ================= */}
          <div className="border-2 border-primary rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="relative h-52">
              <Image
                src="/assets/iot.jpg"
                alt="Industrial Automation"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">
                Industrial Automation
              </h3>

              <ul className="space-y-4 text-gray-700 flex-1">
                <li className="flex gap-3"><Cpu className="text-primary shrink-0" /> PLC Programming</li>
                <li className="flex gap-3"><Layers className="text-primary shrink-0" /> LabVIEW Applications</li>
                <li className="flex gap-3"><Settings className="text-primary shrink-0" /> Control Systems Integration</li>
                <li className="flex gap-3"><Workflow className="text-primary shrink-0" /> Industrial Data & Process Automation</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
