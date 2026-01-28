'use client';

import Image from 'next/image';
import {
  Cpu,
  Layers,
  Camera,
  Wifi,
  Box,
  CircuitBoard,
} from 'lucide-react';

export default function HardwareSolutionsPage() {
  return (
    <>
      {/* ================= TOP BLUR DIV ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-md" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
            Hardware Design Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
            Custom board design, evaluation kits, and production-ready hardware
            platforms for IoT, industrial, automotive, and next-gen applications.
          </p>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {/* ================= CUSTOM BOARD DESIGN ================= */}
          <div className="border-2 border-primary rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="relative h-52">
              <Image
                src="/assets/iot.jpg"
                alt="Custom Board Design"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">
                Custom Board Design
              </h3>

              <ul className="space-y-4 text-gray-700 flex-1">
                <li className="flex gap-3">
                  <Camera className="text-primary shrink-0" />
                  IoT Surveillance (Camera, Mic, Speaker, Sensors)
                </li>
                <li className="flex gap-3">
                  <Wifi className="text-primary shrink-0" />
                  NB-IoT & LTE (4G) Wireless Designs
                </li>
                <li className="flex gap-3">
                  <Cpu className="text-primary shrink-0" />
                  UE & eNodeB Validation Boards
                </li>
                <li className="flex gap-3">
                  <Layers className="text-primary shrink-0" />
                  LIDAR, AR/VR & Robotics Applications
                </li>
                <li className="flex gap-3">
                  <CircuitBoard className="text-primary shrink-0" />
                  PoE-Based Industrial IoT Designs
                </li>
              </ul>
            </div>
          </div>

          {/* ================= SVB / EVM / STARTER KITS ================= */}
          <div className="border-2 border-primary rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="relative h-52">
              <Image
                src="/assets/iot.jpg"
                alt="SVB EVM Starter Kits"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">
                SVB / EVM / Starter Kits
              </h3>

              <ul className="space-y-4 text-gray-700 flex-1">
                <li className="flex gap-3">
                  <Box className="text-primary shrink-0" />
                  TI & On-Semi Silicon Validation Boards (SVBs)
                </li>
                <li className="flex gap-3">
                  <Layers className="text-primary shrink-0" />
                  TI & On-Semi Evaluation Modules (EVMs)
                </li>
                <li className="flex gap-3">
                  <Cpu className="text-primary shrink-0" />
                  Low-Cost TI SoC Starter Kits
                </li>
                <li className="flex gap-3">
                  <CircuitBoard className="text-primary shrink-0" />
                  Rapid Prototyping for Development Kickstart
                </li>
              </ul>
            </div>
          </div>

          {/* ================= MODULE / BOARD BASED DESIGN ================= */}
          <div className="border-2 border-primary rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="relative h-52">
              <Image
                src="/assets/iot.jpg"
                alt="Module Based Design"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">
                Module / Board-Based Design
              </h3>

              <ul className="space-y-4 text-gray-700 flex-1">
                <li className="flex gap-3">
                  <Cpu className="text-primary shrink-0" />
                  NVIDIA Jetson Nano SOM
                </li>
                <li className="flex gap-3">
                  <Layers className="text-primary shrink-0" />
                  Raspberry Pi 4 Model B
                </li>
                <li className="flex gap-3">
                  <CircuitBoard className="text-primary shrink-0" />
                  BeagleBone Black (AM3358)
                </li>
                <li className="flex gap-3">
                  <Cpu className="text-primary shrink-0" />
                  Arduino-Based Designs
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
