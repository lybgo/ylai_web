// 教程章节数据
// 所有43个章节的内容，从教程大纲HTML提取

export interface TutorialSection {
    num: number;
    slug: string;
    title: string;
    chapter: string;
    chapterNum: number;
    duration?: string;
    description: string;
    points: string[];
}

// 原始数据类型：num 可选，由后续根据索引统一生成
type TutorialSectionInput = Omit<TutorialSection, "num"> & { num?: number };

export const chapters = [
    { num: 1, title: "第一章 理论与基础导论", duration: "30分钟" },
    { num: 2, title: "第二章 硬件配置与快速部署", duration: "约4小时" },
    { num: 3, title: "第三章 深入学习传感器/受控设备/自动化/MQTT", duration: "约4小时" },
    { num: 4, title: "第四章 工业/物联网平台与综合应用案例", duration: "约4小时" },
];

const tutorialSectionsData: TutorialSectionInput[] = [
    // 第一章 理论与基础导论
    {

        slug: "01-introduction",
        title: "课程导论与价值分析",
        chapter: "第一章 理论与基础导论",
        chapterNum: 1,
        description: "建立对宜启智控Pro核心价值的认识，理解课程的必要性和独特性。",
        points: [
            "课程价值定位：自动化控制和物联网应用的门槛消除（无需编程）",
            "宜启智控的经济性与普适性：阐述其平民化价格优势，以及在智慧农业、楼宇、工厂等各行各业的广泛应用场景",
            "高职院校教学与实训便利性：作为教学演示套件，如何促进控制技术与物联网应用的融合教学",
            "课程定位：兼具职业技能提升与《宜启智控Pro使用说明教程》的实用双重属性"
        ]
    },
    {

        slug: "02-automation-basics",
        title: "自动化控制与物联网核心概念解析",
        chapter: "第一章 理论与基础导论",
        chapterNum: 1,
        description: "掌握自动化控制与物联网的基本概念，为后续的实践操作奠定理论基础。",
        points: [
            "自动化控制基础：简单介绍开环控制、闭环控制及自动化系统的基本组成（传感器、控制器、执行器）",
            "传统控制实现方式对比：通过PLC、开发板、单片机实现自动化控制的优缺点概述",
            "物联网（IoT）基础：介绍物联网三层架构（感知层、网络层、应用层）及其核心作用",
            "传统物联网开发的技术栈：了解嵌入式编程、网络通信（TCP/UDP）、服务器/云平台开发、移动APP开发等传统学习内容的难度与耗时"
        ]
    },
    {

        slug: "03-product-advantages",
        title: "宜启智控Pro的核心定位与优势",
        chapter: "第一章 理论与基础导论",
        chapterNum: 1,
        description: "理解宜启智控Pro在功能、操作、部署上的核心优势。",
        points: [
            "宜启智控Pro的产品定位：\"一个智能物联网自动化万能控制器\"",
            "对比传统PLC/单片机的核心优势：无需编程、APP快速配置逻辑、自带物联网通信能力",
            "核心能力概览：强大的I/O兼容性（支持市场上95%的传感器）、丰富的通信接口（WiFi/4G、RS485、IIC、433MHz）"
        ]
    },
    {

        slug: "04-course-goals",
        title: "课程目标与能力培养",
        chapter: "第一章 理论与基础导论",
        chapterNum: 1,
        description: "明确学习本课程后能达成的具体技能目标和工程能力。",
        points: [
            "技能目标：快速掌握自动化控制和物联网应用的配置与部署技能",
            "传感器应用能力：掌握常用的数字量、模拟量、总线传感器（如温湿度、光照度、水位、DS18B20）的种类、型号及正确接线",
            "执行控制能力：掌握常用受控设备（如继电器、交流接触器、步进电机、电磁阀）的使用与控制方法",
            "综合项目能力：掌握创造智能设备、实现智慧项目或工程（如智慧农业系统）的整体解决方案能力",
            "实践技能：掌握基本的电工安全知识、电路接线规范与故障排查技能"
        ]
    },
    {

        slug: "05-learning-methods",
        title: "学习方法与课程结构",
        chapter: "第一章 理论与基础导论",
        chapterNum: 1,
        description: "引导学员以实践为主的学习方式，了解课程的进度安排和后续资源。",
        points: [
            "实践先行：强调\"实践是提升能力的最快方法\"，要求学员配备演示套件，同步跟进操作",
            "教学载体：确认本课程以\"宜启智控Pro演示板\"为核心实训平台",
            "学习时间规划：课程视频总时长（约13小时），目标实现\"一天速成\"的学习效率",
            "拓展资源：介绍本视频账号的其它相关视频教程，鼓励持续学习",
            "课程大纲概览：简要介绍本大纲结构和主要内容板块（快速入门、深入学习、应用案例）"
        ]
    },
    // 第二章 硬件配置与快速部署
    {

        slug: "06-hardware-selection",
        title: "宜启智控Pro硬件型号选型指南",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "15分钟",
        description: "了解宜启智控Pro硬件型号选型指南，为以后项目正确选择宜启智控Pro的硬件型号作准备。",
        points: [
            "输入输出I/O点数型号：根据项目需求选择合适的继电器路数、PWM路数、开关量输入路数等（如6+4路）",
            "网络通信方式：WiFi版、4G、BLE版等的选择与适用场景",
            "供电电压选择：标准USB 5V/DC 5V供电、宽电压版（DC 7V~36V）或交流220V版",
            "选配功能模块：RS485总线功能和433MHz无线射频模块的选配考量",
            "输出类型配置：PWM输出口的可选配类型（如0-10V/0-20mA模拟量输出）"
        ]
    },
    {

        slug: "07-initial-setup",
        title: "设备首次上电与APP连接配置",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "20分钟",
        description: "完成设备的初始化配置，确保设备与手机APP的可靠连接。",
        points: [
            "供电与基础接线：演示供电输入端接线、5V/3V辅助电源输出接口的使用与限制",
            "移动端应用准备：\"源来智能APP\"的下载、安装、注册与登录",
            "APP权限与连接：蓝牙权限、网络权限等注意事项，蓝牙/Wi-Fi模式下的设备查找与添加",
            "设备指示灯状态解读：运行灯、网络灯、蓝牙灯的正常及异常状态含义",
            "手控界面的基础操作：APP内对继电器、PWM等进行手动开关和参数调节"
        ]
    },
    {

        slug: "08-relay-control",
        title: "继电器/开关输出控制技术",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "20分钟",
        description: "掌握继电器输出的电气特性、安全接线规范及大功率负载的控制方法。",
        points: [
            "继电器工作原理与功能：介绍继电器（Relay）的结构、作用，以及能控制的常见设备类型（照明、水泵、电磁阀等）",
            "继电器电气参数：最大阻性负载（如AC220V 9A / DC30V 9A）、感性负载的差异与选择",
            "继电器接线规范：演示常开（NO）、常闭（NC）、公共端（COM）的接线方式，注意高低压分离",
            "大功率设备控制：介绍继电器容量不足时，如何通过外部交流接触器实现对大功率负载（如三相电机、大功率加热棒）的安全控制",
            "交流接触器接线：演示宜启智控继电器驱动交流接触器线圈的接线方法"
        ]
    },
    {

        slug: "09-pwm-control",
        title: "PWM脉冲宽度调制输出应用",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "20分钟",
        description: "掌握PWM输出的配置和应用，实现对灯光亮度、电机速度等的平滑调节。",
        points: [
            "PWM工作原理：解释脉冲宽度调制（PWM）的原理及其在控制中的作用",
            "PWM的电气参数：NMOS输出类型、最大开关负载（DC36V 10A）和PWM负载（DC36V 8A）的限制",
            "作为开关使用：当占空比设为0或100%时，作为普通开关输出的使用",
            "调光应用实战：通过调节占空比（Duty Cycle）实现LED灯的无级调光",
            "高级控制功能预告：介绍频率、脉冲数、加减速速率等高级参数及其在电机控制中的应用"
        ]
    },
    {

        slug: "10-time-control",
        title: "时间控制：定时/循环定时等功能",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "10分钟",
        description: "掌握设备内部时钟的管理和各种基于时间控制的应用配置。",
        points: [
            "设备校时方式：蓝牙校时、网络自动校时（NTP）的实现机制",
            "定时功能：设置单次定时、每日定时、每周定时的开关操作",
            "循环定时功能：设置周期性的工作/休息模式（如工作10分钟，停止5分钟）",
            "倒计时功能：设定设备延时开启或延时关闭的配置",
            "点动功能：实现设备短暂开启后自动关闭的功能配置"
        ]
    },
    {

        slug: "11-one-click",
        title: "\"一键执行\"快速入门",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "30分钟",
        description: "掌握\"一键执行\"任务的创建、编辑和调用，实现多设备协同控制。",
        points: [
            "\"一键执行\"概念：解释其作为手动触发或自动化任务调用的复合操作集",
            "创建\"一键执行\"任务：配置多路输出（继电器、PWM）的联动操作",
            "虚拟开关绑定：将\"一键执行\"任务绑定到APP界面的虚拟开关上，实现快捷操作",
            "计数器概念：什么是计数器、断电保存（掉电保持）功能的作用",
            "计数器的使用与引用：介绍计数器的加(+)、减(-)操作，以及如何在\"一键执行\"任务中引用计数器的值"
        ]
    },
    {

        slug: "12-input-sensors",
        title: "开关量/NPN/频率 信号输入与温湿度传感器接入",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "20分钟",
        description: "掌握数字量输入的类型、接线方式，并学会接入常用数字量传感器。",
        points: [
            "开关量信号：介绍无源开关量（干接点）和有源开关量（湿接点）的特性",
            "开关量传感器接线：以水位传感器（浮球开关）、行程开关为例，演示无源/有源接线",
            "NPN（集电极开路）信号：介绍NPN型输出传感器（如光电开关）的接线方法",
            "脉冲/频率输入：解释如何接入脉冲输出的流量计或频率信号，进行计数或频率检测",
            "IIC数字通信接口：演示IIC接口的硬件接入（SCL/SDA/GND/3V），接入IIC温湿度传感器（如SHT30）",
            "输入参数状态查看：在APP中查看开关状态、频率值、温湿度等数据"
        ]
    },
    {

        slug: "13-tuya-app",
        title: "涂鸦智能APP的使用",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "30分钟",
        description: "掌握将设备接入主流云平台（涂鸦）的方法，并使用其远程控制和自动化功能。",
        points: [
            "涂鸦平台介绍：涂鸦智能平台的市场地位与功能概览",
            "下载与安装：\"涂鸦智能APP\"的下载与设备添加流程（WIFI/4G）",
            "远程控制与数据查看：通过涂鸦APP实现远程手控操作和设备参数（继电器状态、传感器值）的查看",
            "平台内计数器配置：在涂鸦云端对宜启智控的计数器进行配置和管理",
            "云端\"一键执行\"与\"智能场景\"：调用宜启智控的一键执行任务，并利用涂鸦的智能场景实现更复杂的跨设备联动",
            "高级报警功能：配置短信、电话报警服务，实现关键状态的及时通知",
            "用户与设备管理：设备分享给其他用户、设备分组管理、解除涂鸦账号绑定流程"
        ]
    },
    {

        slug: "14-mqtt-bemfa",
        title: "MQTT协议基础与巴法云演示接入",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "20分钟",
        description: "了解MQTT协议原理，掌握宜启智控如何通过MQTT与云端进行数据交互。",
        points: [
            "MQTT协议原理：什么是MQTT，发布/订阅（Publish/Subscribe）模式、QoS等级",
            "支持平台与私有服务器：介绍设备支持对接主流MQTT Broker（如阿里云、腾讯云、Emqx）和私有服务器",
            "巴法云演示接入：以巴法云为例，演示MQTT连接参数（Broker地址、ClientID、用户名、密码）的配置",
            "云数据上报配置：配置传感器数据（温湿度、模拟量、计数器）的主动上报周期和格式",
            "宜启智控MQTT数据格式：初步介绍设备上报数据（JSON格式）和接收控制指令的格式"
        ]
    },
    {

        slug: "15-thingscloud",
        title: "接入ThingsCloud云平台",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "20分钟",
        description: "掌握专业物联网云平台（ThingsCloud）的接入和数据可视化看板的构建。",
        points: [
            "ThingsCloud平台介绍：平台特点、费用模式及优势",
            "接入流程：在ThingsCloud创建产品、设备，获取MQTT或HTTP连接信息，并在宜启智控APP内配置",
            "看板（Dashboard）的使用：创建数据仪表盘，对传感器数据进行实时可视化展示",
            "小程序的使用：了解ThingsCloud小程序，实现移动端远程监控",
            "预告：提及ThingsBoard, Home Assistant等平台的深入学习将在后续章节进行"
        ]
    },
    {

        slug: "16-auto-task-intro",
        title: "\"自动任务\"自动化控制快速入门",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "30分钟",
        description: "掌握基于传感器输入和逻辑判断的自动化任务（If-Then）的快速创建。",
        points: [
            "\"自动任务\"概念：解释其作为条件驱动的自动化控制逻辑",
            "水位条件示例：配置\"当水位传感器输入为低时，打开水泵继电器\"的简单逻辑",
            "温度条件示例：配置\"当温度高于阈值时，打开排风扇\"的温控逻辑",
            "计数器条件示例：配置\"当计数器达到设定值时（如累计脉冲数），执行某一动作\"的逻辑",
            "任务的启用与禁用管理"
        ]
    },
    {

        slug: "17-task-logs",
        title: "任务的\"运行日志\"查看与分析",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "10分钟",
        description: "掌握通过查看运行日志，对自动化任务的执行情况进行监控和BUG排查。",
        points: [
            "日志查看入口：在APP中进入运行日志界面",
            "日志内容解读：理解日志记录的任务触发时间、条件状态、执行结果",
            "故障排查方法：通过日志定位自动化任务不执行的原因"
        ]
    },
    {

        slug: "18-firmware-export",
        title: "逻辑固件的导出与导入管理",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "15分钟",
        description: "掌握设备配置的备份、迁移和批量部署方法。",
        points: [
            "导出功能：导出当前设备的全部自动化配置逻辑（包括一键执行、自动任务、继电器名称等）",
            "导入功能：通过文件选择导入已保存的逻辑配置",
            "微信分享导入：通过微信或其它社交应用分享配置文件的快捷导入方法",
            "预告：提及MQTT指令导入、OTA固件导入等高级导入方式将在后续课程深入讲解"
        ]
    },
    {

        slug: "19-mesh-network",
        title: "Mesh无线网络组网功能",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "20分钟",
        description: "掌握利用Mesh功能实现多设备协同控制和扩大通信范围的组网技术。",
        points: [
            "Mesh网络原理：什么是Mesh网络，特点（自组网、自愈合）和适用场景",
            "通信距离与中继：讲解Mesh设备的有效通信距离和中继机制",
            "添加子设备：演示如何将子设备加入到主设备的Mesh网络中",
            "主控与联动：配置主设备控制子设备的继电器、PWM等输出",
            "跨设备自动化控制：利用子设备采集的传感器数据作为条件，触发主设备或网络内其他设备的自动化控制"
        ]
    },
    {

        slug: "20-433mhz-rf",
        title: "433MHz无线射频接收与发射",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "15分钟",
        description: "掌握433MHz无线遥控器的匹配、学习和信号发送技术。",
        points: [
            "433MHz无线接收：什么是433MHz接收，应用场景（无线遥控、门磁、烟感）",
            "匹配遥控器：演示如何将433MHz无线遥控器与设备进行匹配",
            "遥控器作为条件：配置\"当按下遥控器某一按键时，执行自动化控制任务\"",
            "433MHz无线发射：什么是433MHz发射，学习功能的作用",
            "学习外部遥控器：演示如何学习现有遥控器的信号，实现信号的克隆和发射",
            "发射遥控器信号：通过自动化任务或一键执行功能，实现远程发射已学习的遥控器信号"
        ]
    },
    {

        slug: "21-maintenance",
        title: "设备维护与升级（重启/重置/OTA）",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "10分钟",
        description: "掌握设备的日常维护、故障处理和固件升级方法。",
        points: [
            "设备重启：演示APP内软重启和硬重启（断电重启）操作",
            "设备重置：恢复出厂设置的流程，清除所有配置数据和网络连接信息",
            "OTA固件在线升级：通过网络（Over The Air）进行设备固件升级的操作流程"
        ]
    },
    {

        slug: "22-security",
        title: "设备安全与权限管理",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "10分钟",
        description: "了解设备安全的重要性，掌握手机绑定和密码设置的流程。",
        points: [
            "手机绑定设备：实现设备与特定手机账号的绑定，防止被非授权用户连接与控制",
            "设置登录密码：设置APP连接设备时所需的登录密码，进一步提高本地连接的安全性"
        ]
    },
    {

        slug: "23-advanced-config",
        title: "其它高级功能配置",
        chapter: "第二章 硬件配置与快速部署",
        chapterNum: 2,
        duration: "10分钟",
        description: "掌握设备的重命名、断电记忆、APP返回行为等实用配置。",
        points: [
            "重命名：对设备、输入、输出进行个性化名称设置",
            "断电记忆：配置继电器/PWM输出的上电状态，如保持断电前状态或统一置为关闭",
            "禁用APP返回：配置APP返回键的行为，避免误操作退出控制界面"
        ]
    },
    // 第三章 深入学习传感器/受控设备/自动化/MQTT
    {

        slug: "24-analog-sensors",
        title: "模拟量传感器接入与数据处理",
        chapter: "第三章 深入学习传感器/受控设备/自动化/MQTT",
        chapterNum: 3,
        duration: "20分钟",
        description: "掌握模拟量传感器（电流、电压）的接线、量程转换和自动化应用。",
        points: [
            "模拟量概念：什么是模拟量信号，与数字量信号的区别",
            "4-20mA电流信号传感器：接线方式（二线制、三线制）、4mA和20mA对应的物理量程设置",
            "0-10V电压信号传感器：接线方式、0V和10V对应的物理量程设置",
            "自定义ADC（模数转换）：介绍如何接入0-1.5V或其他定制电压信号，以及分压电阻的使用（如10KΩ和1.5KΩ）",
            "模拟量数据在自动化控制中的应用"
        ]
    },
    {

        slug: "25-rs485-modbus",
        title: "RS485 Modbus RTU/DS18B20总线传感器应用",
        chapter: "第三章 深入学习传感器/受控设备/自动化/MQTT",
        chapterNum: 3,
        duration: "20分钟",
        description: "掌握Modbus RTU协议的配置（作为主机）和数据读写操作。",
        points: [
            "RS485 Modbus RTU基础：什么是RS485、Modbus协议，主从机工作模式",
            "作为RS485主机：宜启智控作为主机的性能和配置界面",
            "Modbus数据读取：配置从机地址、功能码（如读取保持寄存器03H）、起始地址、寄存器数量",
            "Modbus数据写入：配置功能码（如写入单寄存器06H），实现对变频器等设备的控制",
            "总线传感器应用：DS18B20单总线温度传感器的接线与数据读取（若未选配485功能）",
            "总线数据作为条件：利用Modbus读取的温湿度、电表数据作为自动化控制的条件"
        ]
    },
    {

        slug: "26-task-execution",
        title: "\"一键执行\"与\"自动任务\"的任务执行机制详解",
        chapter: "第三章 深入学习传感器/受控设备/自动化/MQTT",
        chapterNum: 3,
        duration: "20分钟",
        description: "熟悉掌握可执行任务项，以便进行复杂的逻辑任务配置。",
        points: [
            "任务的串行与并行执行：详解任务列表中各步骤的执行顺序和时间关系",
            "延时与循环引用：详细讲解延时操作、延时引用的使用场景和配置方法",
            "任务的中止与恢复",
            "优先级与冲突解决机制"
        ]
    },
    {

        slug: "27-condition-logic",
        title: "\"自动任务\"的条件逻辑配置深入",
        chapter: "第三章 深入学习传感器/受控设备/自动化/MQTT",
        chapterNum: 3,
        duration: "20分钟",
        description: "掌握复杂的条件判断、多条件组合和高级逻辑运算的配置。",
        points: [
            "复合条件配置：掌握AND、OR逻辑关系的组合使用，实现\"满足A且满足B时触发\"",
            "时间段条件：配置\"在某一时间段内\"或\"在日出/日落时间\"触发任务",
            "循环条件：配置\"在一定时间间隔内重复执行\"的循环任务",
            "状态保持条件：配置\"某条件持续满足一段时间后\"才触发任务"
        ]
    },
    {

        slug: "28-iic-sensors",
        title: "IIC数字接口传感器扩展应用",
        chapter: "第三章 深入学习传感器/受控设备/自动化/MQTT",
        chapterNum: 3,
        duration: "15分钟",
        description: "掌握IIC数字接口传感器（温湿度/光照度）的接线和数据读取配置。",
        points: [
            "IIC接口协议详解：介绍IIC（Inter-Integrated Circuit）通信协议，主从设备模式",
            "温湿度传感器：接线与自动化应用",
            "光照度传感器：配置光照度值的自动化应用"
        ]
    },
    {

        slug: "29-pid-control",
        title: "PID闭环控制功能实战",
        chapter: "第三章 深入学习传感器/受控设备/自动化/MQTT",
        chapterNum: 3,
        duration: "30分钟",
        description: "掌握PID功能的基本配置，实现对温度、液位等参数的精确、稳定控制。",
        points: [
            "PID控制原理：介绍比例（P）、积分（I）、微分（D）的基本作用，以及闭环控制的优势",
            "PID参数配置：设定值（SV）、比例系数（Kp）、积分时间（Ti）、微分时间（Td）的调节",
            "负载与执行器关联：将PID输出关联到PWM输出，控制加热棒或比例阀"
        ]
    },
    {

        slug: "30-stepper-motor",
        title: "步进电机精确驱动控制",
        chapter: "第三章 深入学习传感器/受控设备/自动化/MQTT",
        chapterNum: 3,
        duration: "20分钟",
        description: "掌握利用PWM/脉冲输出控制步进电机的转速、方向和位移。",
        points: [
            "步进电机原理：步进电机的工作原理和驱动器（如脉冲/方向信号）要求",
            "脉冲信号输出配置：配置宜启智控的PWM输出为脉冲信号模式",
            "脉冲数控制位移：通过设置脉冲数量，实现步进电机的精确位置控制（如电动窗帘）"
        ]
    },
    {

        slug: "31-servo-control",
        title: "舵机角度与位置控制",
        chapter: "第三章 深入学习传感器/受控设备/自动化/MQTT",
        chapterNum: 3,
        duration: "10分钟",
        description: "掌握利用PWM输出控制舵机的角度和位置。",
        points: [
            "舵机原理：舵机的结构、工作原理和所需的控制信号（PWM占空比/脉冲宽度）",
            "PWM占空比与角度对应关系配置",
            "舵机在自动化中的应用：配合传感器实现云台、机械臂等功能"
        ]
    },
    {

        slug: "32-pwm-dimming",
        title: "PWM脉冲加减速功能在照明中的应用",
        chapter: "第三章 深入学习传感器/受控设备/自动化/MQTT",
        chapterNum: 3,
        duration: "10分钟",
        description: "掌握PWM的缓启缓停功能，实现平滑、舒适的照明控制效果。",
        points: [
            "加减速功能原理：介绍PWM占空比/频率的加减速速率配置",
            "调光中的缓启缓停：配置PWM占空比加减速速率，模拟日出日落的效果"
        ]
    },
    {

        slug: "33-mqtt-format",
        title: "MQTT协议数据格式详解",
        chapter: "第三章 深入学习传感器/受控设备/自动化/MQTT",
        chapterNum: 3,
        duration: "20分钟",
        description: "深入理解设备上报与接收控制命令的完整MQTT协议格式。",
        points: [
            "MQTT协议命令集：详细解析宜启智控的MQTT控制命令格式（如JSON结构、method、params）",
            "控制指令详解：继电器控制（setOut）、PWM控制（setPWM）、任务执行（ro）等指令的参数解析",
            "上报数据格式解析：详细解析设备上报JSON数据结构（如o开关状态、p PWM状态、i输入状态、adc模拟量、cnt计数器）",
            "平台对接实践：结合具体平台演示如何发送控制指令和解析上报数据"
        ]
    },
    // 第四章 工业/物联网平台与综合应用案例
    {

        slug: "34-thingsboard",
        title: "接入ThingsBoard工业物联网平台",
        chapter: "第四章 工业/物联网平台与综合应用案例",
        chapterNum: 4,
        duration: "20分钟",
        description: "掌握接入ThingsBoard物联网平台的应用，实现设备数据的远程监控和控制。",
        points: [
            "ThingsBoard介绍：平台特点、价格",
            "2分钟快速接入：介绍如何在2分钟内完成设备接入ThingsBoard物联网平台",
            "看板及自定义应用：利用ThingsBoard的看板功能和自定义应用，实现设备数据的可视化和远程控制"
        ]
    },
    {

        slug: "35-home-assistant",
        title: "接入Home Assistant智能家居平台",
        chapter: "第四章 工业/物联网平台与综合应用案例",
        chapterNum: 4,
        duration: "20分钟",
        description: "掌握宜启智控接入智能家居生态（HA）的配置。",
        points: [
            "Home Assistant介绍：开放源代码、本地控制、智能家居生态整合能力",
            "MQTT Discovery配置：利用HA的MQTT自动发现功能快速集成宜启智控",
            "自动化与脚本：在HA中配置基于宜启智控状态的自动化"
        ]
    },
    {

        slug: "36-emqx",
        title: "接入EMQX物联网消息平台",
        chapter: "第四章 工业/物联网平台与综合应用案例",
        chapterNum: 4,
        duration: "20分钟",
        description: "掌握接入专业级MQTT Broker（EMQX）进行大规模设备管理和系统集成。",
        points: [
            "EMQX介绍：专业的分布式MQTT消息服务器，高性能、高可靠性",
            "EMQX连接配置与认证：配置连接参数、用户认证与授权",
            "MQTT 主题配置及收发：配置MQTT主题，实现设备数据的订阅与发布"
        ]
    },
    {

        slug: "37-smart-meter",
        title: "智能电表数据采集与多渠道报警系统",
        chapter: "第四章 工业/物联网平台与综合应用案例",
        chapterNum: 4,
        duration: "15分钟",
        description: "掌握RS485设备的集成，并构建基于云端和短信的多渠道报警系统。",
        points: [
            "智能电表接入：通过RS485接口接入Modbus协议的智能电表，读取瞬时功率、电量等数据",
            "数据解析与存储",
            "短信和电话报警配置：利用涂鸦或ThingsCloud的报警功能，配置阈值超限时的短信/电话通知"
        ]
    },
    {

        slug: "38-vfd-control",
        title: "变频器远程控制与数据采集",
        chapter: "第四章 工业/物联网平台与综合应用案例",
        chapterNum: 4,
        duration: "20分钟",
        description: "掌握通过宜启智控的RS485接口对工业变频器进行远程启停、调速和状态监控。",
        points: [
            "变频器 Modbus 地址：查找常用变频器的Modbus通信地址和参数寄存器",
            "RS485写入控制：配置Modbus写入指令，远程控制变频器的启停（RUN/STOP）和频率设定",
            "RS485数据读取：读取变频器的运行状态、输出频率、故障代码",
            "数据可视化与远程控制：利用ThingsBoard或Home Assistant实现数据的可视化和远程控制"
        ]
    },
    {

        slug: "39-sensor-guide",
        title: "常用传感器与执行设备选型指南",
        chapter: "第四章 工业/物联网平台与综合应用案例",
        chapterNum: 4,
        duration: "20分钟",
        description: "掌握常用传感器与执行设备，了解其工作原理和应用。",
        points: [
            "常用传感器介绍：土壤温湿度、PH值、溶解氧、浊度、光电开关、人体传感器、水位、气象站等",
            "常用受控设备的介绍：电磁阀、排气扇、电动卷帘门、三相电机、固态继电器等"
        ]
    },
    {

        slug: "40-smart-agriculture",
        title: "智慧农业应用场景案例实战",
        chapter: "第四章 工业/物联网平台与综合应用案例",
        chapterNum: 4,
        duration: "20分钟",
        description: "结合实际场景，综合运用所学知识搭建完整的自动化与物联网项目。",
        points: [
            "智慧灌溉系统：基于土壤湿度、时控、天气预报的自动灌溉任务配置",
            "环境温控系统：基于温湿度、光照度传感器的排风、遮阳、补光系统",
            "水产养殖：基于液位、溶解氧传感器的自动增氧、换水任务配置"
        ]
    },
    {

        slug: "41-smart-building",
        title: "智慧楼宇应用场景案例实战",
        chapter: "第四章 工业/物联网平台与综合应用案例",
        chapterNum: 4,
        duration: "20分钟",
        description: "结合实际楼宇场景，综合运用所学知识搭建完整的自动化与物联网项目。",
        points: [
            "楼宇照明控制：基于人体的感应照明、时段照明和亮度调节",
            "设备监控：利用Modbus RTU监控生产线设备的运行状态和能耗",
            "消防与安防联动：接入烟雾、门磁等传感器，实现报警联动控制"
        ]
    },
    {

        slug: "42-device-upgrade",
        title: "传统设备快速智能化升级改造案例",
        chapter: "第四章 工业/物联网平台与综合应用案例",
        chapterNum: 4,
        duration: "15分钟",
        description: "智能鱼池过滤设备升级改造案例讲解。",
        points: [
            "案例背景：传统鱼池过滤设备的痛点和智能化需求",
            "改造方案：使用宜启智控进行智能化升级的具体步骤",
            "效果展示：改造后的远程监控、自动化控制功能演示"
        ]
    },
    {

        slug: "43-innovation-project",
        title: "创新型智能设备项目落地与实践",
        chapter: "第四章 工业/物联网平台与综合应用案例",
        chapterNum: 4,
        duration: "15分钟",
        description: "智能宠物洗澡共享设备案例讲解。",
        points: [
            "项目创意与可行性分析",
            "软硬件选型与方案设计",
            "项目演示与成果展示"
        ]
    }
];

// 对外导出：根据数组索引统一生成连续的 num
export const tutorialSections: TutorialSection[] = tutorialSectionsData.map(
    (section, index) => ({
        ...section,
        num: index + 1,
    }),
);

// 辅助函数：根据slug获取章节
export function getSectionBySlug(slug: string): TutorialSection | undefined {
    return tutorialSections.find(s => s.slug === slug);
}

// 辅助函数：获取上一节
export function getPrevSection(currentSlug: string): TutorialSection | undefined {
    const currentIndex = tutorialSections.findIndex(s => s.slug === currentSlug);
    if (currentIndex > 0) {
        return tutorialSections[currentIndex - 1];
    }
    return undefined;
}

// 辅助函数：获取下一节
export function getNextSection(currentSlug: string): TutorialSection | undefined {
    const currentIndex = tutorialSections.findIndex(s => s.slug === currentSlug);
    if (currentIndex >= 0 && currentIndex < tutorialSections.length - 1) {
        return tutorialSections[currentIndex + 1];
    }
    return undefined;
}

// 辅助函数：获取所有slug用于静态生成
export function getAllSlugs(): string[] {
    return tutorialSections.map(s => s.slug);
}
