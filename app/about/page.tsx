'use client';

import AccordionItem from '@/components/AccordionItem';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      {/* ================= ABOUT HEADER STRIP ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-md" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-center font-bold text-4xl md:text-5xl text-primary">
            About Us
          </h1>
        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <div className="mt-12 mb-10">
        <h2 className="text-center font-bold text-3xl md:text-4xl text-primary">
          Experience
        </h2>
      </div>

      {/* ================= ACCORDIONS ================= */}
      <div className="max-w-7xl mx-auto px-6 space-y-4">
       {/* Accordion 1: Hardware */}
      <AccordionItem title="Hardware">
        <h5 className="text-xl font-bold mb-2">CUSTOM BOARD DESIGN</h5>
        <ul className="list-disc pl-6 mb-4">
          <li>
            IoT for surveillance with camera, speaker, mic, temperature sensor, NB-IoT for wireless link, 
            Long Term Evolution (LTE 4G) software stack validation boards for UE (Mobile station) and eNodeB UE 
            (Base station), LIDAR application, AR-VR application, Robotics, PoE based IoT design.
          </li>
        </ul>

        <h5 className="text-xl font-bold mb-2">SVB / EVM / STARTER KITS DESIGN</h5>
        <ul className="list-disc pl-6 mb-4">
          <li>TI and On-Semi SoC based Silicon Validation Boards (SVB's).</li>
          <li>TI and On-Semi SoC based Evaluation modules (EVM's).</li>
          <li>TI SoC based Low-cost starter kit to kick start development.</li>
        </ul>

        <h5 className="text-xl font-bold mb-2">MODULES OR BOARD BASED DESIGN</h5>
        <ul className="list-disc pl-6">
          <li>
            NVidia Jetson Nano SOM Module, raspberry pi 4 model b, Beaglebone Black with AM3358, Arduino.
          </li>
        </ul>
      </AccordionItem>

       {/* Accordion 2: Software */}
      <AccordionItem title="Software">
        <p className="mb-3">
          Software / Firmware Team works very closely with hardware design teams for the low-level diagnostics and bring-up of the hardware.
        </p>
        <p className="mb-4">
          We have extensive platform knowledge of various Processor architectures. Experienced in porting system and application software to various target hardware platforms.
        </p>

        <h5 className="text-xl font-bold mb-2">WE PROVIDE BELOW SERVICES</h5>
        <ul className="list-disc pl-6">
          <li>Development of Board Support Packages to Middleware and Application Development for different hardware architectures and Embedded Linux, Free-RTOS.</li>
          <li>BSP Migration – To new OS/ newer OS versions</li>
          <li>BSP Migration – To newer platform versions</li>
          <li>Customization and Validation of existing BSP.</li>
          <li>Device driver development and testing.</li>
          <li>Integration of peripherals like audio, video, storage, connectivity, buses, wireless, UI and others around processors and SOC</li>
        </ul>
      </AccordionItem>

      {/* Accordion 3: Hardware Used */}
      <AccordionItem title="Hardware Used">
        <h5 className="text-xl font-bold mb-2">ANALOG AND DIGITAL SENSORS USED</h5>
        <ul className="list-disc pl-6 mb-4">
          <li>
            mmwave Radar (AWR6843, IWR1843), AD9361/64 RF Frontend ADC, CMOS Camera, Lidar, Time of Flight (ToF) sensor, 
            6DoF IMU sensor, Wi-Fi® and Bluetooth® modules, GPS/GPRS, SIM900/800, power modules etc.
          </li>
        </ul>

        <h5 className="text-xl font-bold mb-2">MICROCONTROLLER, PROCESSORS AND SOC'S</h5>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>SoC's</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>TI's: TCI6638K2K, TDA4VM and DRA829V processors, Sitara™ AM64xx, AM62xx, AM335x.</li>
              <li>Xilinx: Zynq 7045 FPGA, ARM926 based Custom SoC.</li>
              <li>Qualcomm: SXR2130P with 6GB LPDDR5 SDRAM (PoP).</li>
              <li>Microchip: PIC32MZ.</li>
              <li>NXP: i.MX 6ULL Single-Core Processor with Arm® Cortex®-A7 Core</li>
            </ul>
          </li>
          <li>
            <strong>FPGA's</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Xilinx: Virtex (XC2V3000-5FG676I), Spartan (XC6SLX100-3CSG484I)</li>
              <li>Lattice: (LFXP6C-4F256I) MCU:</li>
              <li>NXP LPC1769 Arm Cortex m3, Renesas R8C, RX64M.</li>
            </ul>
          </li>
          <li>
            <strong>Memories</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>DRAM: SDR-SDRAM, DDR3L, DDR4, DDR4L, LPDDR4.</li>
              <li>Parallel FLASH: NOR Flash, NAND Flash.</li>
              <li>Serial FLASH: NOR SPI Memory IC, QSPI NOR Flash, OSPI EEPROM, I2C board ID EEPROM, eMMC, micro SD Card.</li>
            </ul>
          </li>
          <li>
            <strong>Interfaces</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>MIPI: 6x5 D-PHY (Support MIPI CSI-2 and MIPI DSI-2), MIPI CSI-2, DSI, PCI: PCIe Gen3, PCIe Gen2.</li>
              <li>USB: USB2.0, USB3.0, USB3.1 Type C Interface, Thunderbolt3 (2 lane).</li>
              <li>ETHERNET PHY and MII: 10/100/1000 Gigabit Ethernet, RMII, RGMII, QSGMII, PoE.</li>
              <li>PARALLEL INTERFACE: 4x Parallel 24-bit Interface between FPGA's.</li>
              <li>SERIAL: UART-USB Bridge, RS232/485, SPI (4 CS), SDIO, CAN2.0/CAN-FD, I2C, MIL1553B, Spacewire (SPW), External AHB, JESD204B.</li>
              <li>DEBUG: ARM JTAG, Alpine JTAG.</li>
            </ul>
          </li>
          <li>
            <strong>Design Tools</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Schematic and PCB Design: Cadence OrCAD, Allegro, Altium, KiCad, Mentor Graphics Pads.</li>
              <li>CAM-DFM Tools: CAM350, Viewmate, GerbView.</li>
              <li>Simulation Tools: HyperLynx</li>
            </ul>
          </li>
        </ul>
      </AccordionItem>


      {/* Accordion 4: Our Expertise */}
      <AccordionItem title="Our Expertise">
        <ul className="list-disc pl-6 mb-4">
          <li>Programming Languages:- Embedded C, C++</li>
          <li>Scripting language:- Python, Shell/Bash scripting, Java Scripting.</li>
          <li>Software Build tool:- GNU Make, Cmake, Yocto, Buildroot.</li>
          <li>OS:- FreeRTOS, Linux, Micrium os-III, Windows.</li>
          <li>IDE:- Eclipse, IAR, CCS, e2 Studio, MPLab, MPLABX, STM32 Cube IDE, Visual Studio</li>
          <li>Version Control Tools:- Git, GitLab, GitHub, Gerrit and Bit Bucket.</li>
          <li>Utility:- GNU Make, u-Boot, Busybox.</li>
        </ul>

        <h5 className="text-xl font-bold mb-2">HARDWARE PLATFORMS WORKED ON</h5>
        <ul className="list-disc pl-6">
          <li>Texas Instruments: TCI6638K2K Multicore DSP+ARM KeyStone II SOC, OMAP3530, Sitara AM62x, Tiva C series (TM4C123x), AWR6843, IWR6843, AM263x, AM263P, AM335x, AWR2943.</li>
          <li>Xilinx: Zynq 7035/7045</li>
          <li>NXP: i.MX 6ULL.</li>
          <li>Microchip: PIC32MZ, AVR128DA48.</li>
          <li>Renesas: RX64M (R5F564MX)</li>
          <li>STMicroelectronics: STM32H753VIH6, STM32F407VET6, STM32F446Rx</li>
        </ul>
      </AccordionItem>

      {/* Accordion 6: Applications Worked On */}
      <AccordionItem title="Applications Worked On">
        <h5 className="text-xl font-bold mb-2">INDUSTRIAL</h5>
        <ul className="list-disc pl-6 mb-4">
          <li>BMC: Board management and controller as a system configurator for RF chipset in a nB-IoT link node Automotive</li>
          <li>Vehicle testing and firmware updating of the ECU over Ethernet: Automotive Diagnostics over Ethernet or Internet Protocol" (DoIP) as per ISO 13400 standard to run Unified Diagnostic Services – ISO 14229.</li>
          <li>Battery Management System (BMS) in EV chargers of Hybrid Vehicle Bike and Integration with existing ECU.</li>
          <li>Exhaust gas recirculation (EGR) valve controller</li>
        </ul>

        <h5 className="text-xl font-bold mb-2">CONSUMER</h5>
        <ul className="list-disc pl-6 mb-4">
          <li>IOT for agriculture: Featured with firmware update over Air, remote motor control and multiple sensor to get status of environment: temperature, moisture, rain, humidity, atmospheric pressure, solar radiation, Electrical conductivity(EC), pH, CMOS camera, etc..</li>
          <li>MMWAVE L-SDK: Development of drivers, middleware and OOB demos, Adding FreeRTOS and No-RTOS support and drivers on R4F and C67XX DSP core of IWR6843, AWR6843, and AWR6843 AOP.</li>
          <li>PoS: Point of sale device</li>
          <li>ZigBee based Energy Meter Reading Application.</li>
        </ul>

        <h5 className="text-xl font-bold mb-2">EMBEDDED LINUX EXPERTISE</h5>
        <ul className="list-disc pl-6 mb-3">
          <li>Creating Bootable package/distro/Yocto/image with the mainline Linux source.</li>
          <li>Board boot up with NAND, eMMC, SDCARD and NFS.</li>
          <li>U-Boot (Bootloader) configuration to support various boot options.</li>
          <li>DDR configuration.</li>
          <li>Kernel configuration to support different versions of hardware.</li>
          <li>Device tree updating/modifying.</li>
          <li>Linux host device set-up to flash binary into FPGA.</li>
          <li>User space interfaces.</li>
          <li>Application development.</li>
          <li>Flashing and hardware testing.</li>
        </ul>
        <p className="mb-4">
          RTOS / no-RTOS : BSP for custom board peripherals using HAL or LLD, Application development
        </p>

        <h5 className="text-xl font-bold mb-2">INTERFACES AND PROTOCOLS EXPOSURE</h5>
        <ul className="list-disc pl-6">
          <li>Bus Interface: CSI, DSI, UART, FDCAN, I2C, SPI, QSPI, OSPI, ENET.</li>
          <li>Protocols: UART, FDCAN, MCAN, Crypto, I2C, SPI, ADC, ModBus, QSPI, OSPI, ENET, DAC, RTC, PMIC, SNTP, MQTT, Internal memory.</li>
          <li>Communication peripherals: Bluetooth, Wifi, GSM, GPS, Modem, Ethernet, ZigBee. Axi DMA interface for PS-PL communication</li>
          <li>Displays: Graphical LCD (TFT, STN), Character LCD's Analog Displays, Seven Segment display.</li>
          <li>Audio Interfaces: I2S, PCM.</li>
          <li>Camera Interface: MIPI CSI-2, Digital CMOS Camera, VGA</li>
          <li>Memory devices: Flash (NAND, NOR), SDRAM (DDR2/3), CompactFlash, SD/MMC, eMMC.</li>
          <li>Analog Interface: ADC, DAC, one wire.</li>
          <li>File system: UBIFS, EXTx, vfat.</li>
        </ul>
      </AccordionItem>
      </div>

    {/* ================= OUR TEAM (FIXED SPACING) ================= */}
<section className="w-full py-16">
  <h2 className="text-center text-accent-purple text-3xl md:text-4xl font-extrabold mb-10">
    Our Team
  </h2>

  <div className="max-w-screen-2xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 items-start">

      {/* LEFT: TEAM CONTENT */}
      <div className="space-y-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-2 border-primary rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Hardware Team</h3>
          <p className="text-lg leading-relaxed">
            Our Hardware and PCB design team is well versed with the product
            design cycle including architecture, schematics, PCB layout,
            SI/PI simulation, thermal analysis, EMI/EMC and complete bring-up.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="border-2 border-primary rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Software Team</h3>
          <p className="text-lg leading-relaxed">
            Our Software team handles firmware, device drivers, BSPs,
            middleware and application development across Bare-metal,
            RTOS and Embedded Linux.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-2 border-primary rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Mechanical Team</h3>
          <p className="text-lg leading-relaxed">
            Our Mechanical and ID team designs product enclosures from
            concept to prototype including material selection, thermal
            flow analysis, DFM and production support.
          </p>
        </motion.div>

      </div>

      {/* RIGHT: IMAGE */}
      {/* RIGHT: IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="hidden lg:flex h-full"
>
  <div className="border-2 border-primary rounded-3xl p-2 h-full w-full">
    <img
      src="/assets/banner.jpg"
      alt="Our Team"
      className="rounded-2xl object-cover w-full h-full"
    />
  </div>
</motion.div>


    </div>
  </div>
</section>





     {/* ================= WHY CHOOSE TENSORMINDS ================= */}
<section className="max-w-7xl mx-auto px-6 py-16">

  {/* Heading outside outline */}
  <h2 className="text-center text-accent-purple text-3xl md:text-4xl font-extrabold mb-10">
    Why Choose TensorMinds
  </h2>

  <div className="border-2 border-primary rounded-3xl p-8 md:p-12">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div className="flex flex-col items-center gap-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Empowering Innovation Through Embedded Intelligence
        </h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium
                       hover:bg-primary-light transition-colors duration-200"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {
            title: 'Innovation-Driven',
            desc: 'Leveraging cutting-edge technologies for scalable embedded solutions.',
          },
          {
            title: 'Expert Team',
            desc: 'Highly experienced engineers in hardware-software integration.',
          },
          {
            title: 'Integrated Support',
            desc: 'End-to-end product lifecycle support from idea to deployment.',
          },
          {
            title: 'Customer-Centric',
            desc: 'Solutions tailored to your business goals and technical needs.',
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.4 }}
            className="border border-primary rounded-xl p-5 text-center"
          >
            <h4 className="font-bold text-xl mb-2">{item.title}</h4>
            <p className="text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </div>
</section>


    </>
  );
}
