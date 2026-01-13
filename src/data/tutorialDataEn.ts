export interface TutorialSection {
    num: number;
    slug: string;
    title: string;
    chapterNum: number;
    duration?: string;
}

type TutorialSectionInput = Omit<TutorialSection, "num"> & { num?: number };

export const chaptersEn = [
    { num: 1, title: "Chapter 1: Theory and Basic Introduction", duration: "30 mins" },
    { num: 2, title: "Chapter 2: Hardware Configuration & Rapid Deployment", duration: "approx. 4h" },
    { num: 3, title: "Chapter 3: In-depth Learning: Sensors / Actuators / Automation / MQTT", duration: "approx. 4h" },
    { num: 4, title: "Chapter 4: Industrial / IoT Platforms & Comprehensive Case Studies", duration: "approx. 4h" },
];

export const tutorialSectionsDataEn: TutorialSectionInput[] = [
    // Chapter 1
    { slug: "01-introduction", title: "Course Introduction & Value Analysis", chapterNum: 1 },
    { slug: "02-automation-basics", title: "Core Concepts of Automation & IoT", chapterNum: 1 },
    { slug: "03-product-advantages", title: "Core Positioning & Advantages of IOTAutoMate Pro", chapterNum: 1 },
    { slug: "04-course-goals", title: "Course Goals & Skill Development", chapterNum: 1 },
    { slug: "05-learning-methods", title: "Learning Methods & Course Structure", chapterNum: 1 },
    // Chapter 2
    { slug: "06-hardware-selection", title: "Hardware Selection Guide for IOTAutoMate Pro", chapterNum: 2, duration: "15 mins" },
    { slug: "07-initial-setup", title: "First Power-on & App Connection Configuration", chapterNum: 2, duration: "20 mins" },
    { slug: "08-relay-control", title: "Relay / Switch Output Control Technology", chapterNum: 2, duration: "20 mins" },
    { slug: "09-pwm-control", title: "PWM (Pulse Width Modulation) Output Applications", chapterNum: 2, duration: "20 mins" },
    { slug: "10-time-control", title: "Time Control: Scheduled / Loop Timers", chapterNum: 2, duration: "10 mins" },
    { slug: "11-one-click", title: "\"One-click Execution\" Quick Start", chapterNum: 2, duration: "30 mins" },
    { slug: "12-input-sensors", title: "Digital / NPN / Frequency Signal Inputs & Temp/Humidity Sensors", chapterNum: 2, duration: "20 mins" },
    { slug: "13-tuya-app", title: "Using Tuya Smart APP", chapterNum: 2, duration: "30 mins" },
    { slug: "14-mqtt-bemfa", title: "MQTT Protocol Basics & Bemfa Cloud Demo", chapterNum: 2, duration: "20 mins" },
    { slug: "15-thingscloud", title: "Connecting to ThingsCloud Platform", chapterNum: 2, duration: "20 mins" },
    { slug: "16-auto-task-intro", title: "\"Auto Task\" Automation Quick Start", chapterNum: 2, duration: "30 mins" },
    { slug: "17-task-logs", title: "Viewing & Analyzing Task \"Run Logs\"", chapterNum: 2, duration: "10 mins" },
    { slug: "18-firmware-export", title: "Exporting & Importing Logic Firmware", chapterNum: 2, duration: "15 mins" },
    { slug: "19-mesh-network", title: "Mesh Wireless Networking Features", chapterNum: 2, duration: "20 mins" },
    { slug: "20-433mhz-rf", title: "433MHz RF Receiving & Transmitting", chapterNum: 2, duration: "15 mins" },
    { slug: "21-maintenance", title: "Device Maintenance & Upgrades (Reboot/Reset/OTA)", chapterNum: 2, duration: "10 mins" },
    { slug: "22-security", title: "Device Security & Permission Management", chapterNum: 2, duration: "10 mins" },
    { slug: "23-advanced-config", title: "Other Advanced Configuration Features", chapterNum: 2, duration: "10 mins" },
    // Chapter 3
    { slug: "24-analog-sensors", title: "Analog Sensor Access & Data Processing", chapterNum: 3, duration: "20 mins" },
    { slug: "25-rs485-modbus", title: "RS485 Modbus RTU / DS18B20 Bus Sensor Applications", chapterNum: 3, duration: "20 mins" },
    { slug: "26-task-execution", title: "Mechanism of \"One-click\" & \"Auto Task\" Explained", chapterNum: 3, duration: "20 mins" },
    { slug: "27-condition-logic", title: "In-depth Conditional Logic for \"Auto Task\"", chapterNum: 3, duration: "20 mins" },
    { slug: "28-iic-sensors", title: "Digital IIC Interface Sensor Extensions", chapterNum: 3, duration: "15 mins" },
    { slug: "29-pid-control", title: "PID Closed-loop Control Practice", chapterNum: 3, duration: "30 mins" },
    { slug: "30-stepper-motor", title: "Precise Stepper Motor Drive Control", chapterNum: 3, duration: "20 mins" },
    { slug: "31-servo-control", title: "Servo Angle & Position Control", chapterNum: 3, duration: "10 mins" },
    { slug: "32-pwm-dimming", title: "PWM Acceleration/Deceleration in Lighting", chapterNum: 3, duration: "10 mins" },
    { slug: "33-mqtt-format", title: "MQTT Data Format Details", chapterNum: 3, duration: "20 mins" },
    // Chapter 4
    { slug: "34-thingsboard", title: "Connecting to ThingsBoard IIoT Platform", chapterNum: 4, duration: "20 mins" },
    { slug: "35-home-assistant", title: "Connecting to Home Assistant Platform", chapterNum: 4, duration: "20 mins" },
    { slug: "36-emqx", title: "Connecting to EMQX IoT Message Broker", chapterNum: 4, duration: "20 mins" },
    { slug: "37-smart-meter", title: "Smart Meter Data Collection & Multi-channel Alerts", chapterNum: 4, duration: "15 mins" },
    { slug: "38-vfd-control", title: "VFD Remote Control & Data Collection", chapterNum: 4, duration: "20 mins" },
    { slug: "39-sensor-guide", title: "Selection Guide for Sensors & Actuators", chapterNum: 4, duration: "20 mins" },
    { slug: "40-smart-agriculture", title: "Smart Agriculture Application Case Study", chapterNum: 4, duration: "20 mins" },
    { slug: "41-smart-building", title: "Smart Building Application Case Study", chapterNum: 4, duration: "20 mins" },
    { slug: "42-device-upgrade", title: "Retrofitting Traditional Equipment for Intelligence", chapterNum: 4, duration: "15 mins" },
    { slug: "43-innovation-project", title: "Implementation of Innovative Smart Device Projects", chapterNum: 4, duration: "15 mins" }
];

export const tutorialSectionsEn: TutorialSection[] = tutorialSectionsDataEn.map(
    (section, index) => ({
        ...section,
        num: index + 1,
    }),
);
