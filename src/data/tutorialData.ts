// 教程章节数据
// 所有43个章节的内容,从教程大纲HTML提取

export interface TutorialSection {
    num: number;
    slug: string;
    title: string;
    chapterNum: number;
    duration?: string;
}

// 原始数据类型:num 可选,由后续根据索引统一生成
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
        chapterNum: 1
    },
    {
        slug: "02-automation-basics",
        title: "自动化控制与物联网核心概念解析",
        chapterNum: 1
    },
    {
        slug: "03-product-advantages",
        title: "宜启智控Pro的核心定位与优势",
        chapterNum: 1
    },
    {
        slug: "04-course-goals",
        title: "课程目标与能力培养",
        chapterNum: 1
    },
    {
        slug: "05-learning-methods",
        title: "学习方法与课程结构",
        chapterNum: 1
    },
    // 第二章 硬件配置与快速部署
    {
        slug: "06-hardware-selection",
        title: "宜启智控Pro硬件型号选型指南",
        chapterNum: 2,
        duration: "15分钟"
    },
    {
        slug: "07-initial-setup",
        title: "设备首次上电与APP连接配置",
        chapterNum: 2,
        duration: "20分钟"
    },
    {
        slug: "08-relay-control",
        title: "继电器/开关输出控制技术",
        chapterNum: 2,
        duration: "20分钟"
    },
    {
        slug: "09-pwm-control",
        title: "PWM脉冲宽度调制输出应用",
        chapterNum: 2,
        duration: "20分钟"
    },
    {
        slug: "10-time-control",
        title: "时间控制:定时/循环定时等功能",
        chapterNum: 2,
        duration: "10分钟"
    },
    {
        slug: "11-one-click",
        title: "\"一键执行\"快速入门",
        chapterNum: 2,
        duration: "30分钟"
    },
    {
        slug: "12-input-sensors",
        title: "开关量/NPN/频率 信号输入与温湿度传感器接入",
        chapterNum: 2,
        duration: "20分钟"
    },
    {
        slug: "13-tuya-app",
        title: "涂鸦智能APP的使用",
        chapterNum: 2,
        duration: "30分钟"
    },
    {
        slug: "14-mqtt-bemfa",
        title: "MQTT协议基础与巴法云演示接入",
        chapterNum: 2,
        duration: "20分钟"
    },
    {
        slug: "15-thingscloud",
        title: "接入ThingsCloud云平台",
        chapterNum: 2,
        duration: "20分钟"
    },
    {
        slug: "16-auto-task-intro",
        title: "\"自动任务\"自动化控制快速入门",
        chapterNum: 2,
        duration: "30分钟"
    },
    {
        slug: "17-task-logs",
        title: "任务的\"运行日志\"查看与分析",
        chapterNum: 2,
        duration: "10分钟"
    },
    {
        slug: "18-firmware-export",
        title: "逻辑固件的导出与导入管理",
        chapterNum: 2,
        duration: "15分钟"
    },
    {
        slug: "19-mesh-network",
        title: "Mesh无线网络组网功能",
        chapterNum: 2,
        duration: "20分钟"
    },
    {
        slug: "20-433mhz-rf",
        title: "433MHz无线射频接收与发射",
        chapterNum: 2,
        duration: "15分钟"
    },
    {
        slug: "21-maintenance",
        title: "设备维护与升级(重启/重置/OTA)",
        chapterNum: 2,
        duration: "10分钟"
    },
    {
        slug: "22-security",
        title: "设备安全与权限管理",
        chapterNum: 2,
        duration: "10分钟"
    },
    {
        slug: "23-advanced-config",
        title: "其它高级功能配置",
        chapterNum: 2,
        duration: "10分钟"
    },
    // 第三章 深入学习传感器/受控设备/自动化/MQTT
    {
        slug: "24-analog-sensors",
        title: "模拟量传感器接入与数据处理",
        chapterNum: 3,
        duration: "20分钟"
    },
    {
        slug: "25-rs485-modbus",
        title: "RS485 Modbus RTU/DS18B20总线传感器应用",
        chapterNum: 3,
        duration: "20分钟"
    },
    {
        slug: "26-task-execution",
        title: "\"一键执行\"与\"自动任务\"的任务执行机制详解",
        chapterNum: 3,
        duration: "20分钟"
    },
    {
        slug: "27-condition-logic",
        title: "\"自动任务\"的条件逻辑配置深入",
        chapterNum: 3,
        duration: "20分钟"
    },
    {
        slug: "28-iic-sensors",
        title: "IIC数字接口传感器扩展应用",
        chapterNum: 3,
        duration: "15分钟"
    },
    {
        slug: "29-pid-control",
        title: "PID闭环控制功能实战",
        chapterNum: 3,
        duration: "30分钟"
    },
    {
        slug: "30-stepper-motor",
        title: "步进电机精确驱动控制",
        chapterNum: 3,
        duration: "20分钟"
    },
    {
        slug: "31-servo-control",
        title: "舵机角度与位置控制",
        chapterNum: 3,
        duration: "10分钟"
    },
    {
        slug: "32-pwm-dimming",
        title: "PWM脉冲加减速功能在照明中的应用",
        chapterNum: 3,
        duration: "10分钟"
    },
    {
        slug: "33-mqtt-format",
        title: "MQTT协议数据格式详解",
        chapterNum: 3,
        duration: "20分钟"
    },
    // 第四章 工业/物联网平台与综合应用案例
    {
        slug: "34-thingsboard",
        title: "接入ThingsBoard工业物联网平台",
        chapterNum: 4,
        duration: "20分钟"
    },
    {
        slug: "35-home-assistant",
        title: "接入Home Assistant智能家居平台",
        chapterNum: 4,
        duration: "20分钟"
    },
    {
        slug: "36-emqx",
        title: "接入EMQX物联网消息平台",
        chapterNum: 4,
        duration: "20分钟"
    },
    {
        slug: "37-smart-meter",
        title: "智能电表数据采集与多渠道报警系统",
        chapterNum: 4,
        duration: "15分钟"
    },
    {
        slug: "38-vfd-control",
        title: "变频器远程控制与数据采集",
        chapterNum: 4,
        duration: "20分钟"
    },
    {
        slug: "39-sensor-guide",
        title: "常用传感器与执行设备选型指南",
        chapterNum: 4,
        duration: "20分钟"
    },
    {
        slug: "40-smart-agriculture",
        title: "智慧农业应用场景案例实战",
        chapterNum: 4,
        duration: "20分钟"
    },
    {
        slug: "41-smart-building",
        title: "智慧楼宇应用场景案例实战",
        chapterNum: 4,
        duration: "20分钟"
    },
    {
        slug: "42-device-upgrade",
        title: "传统设备快速智能化升级改造案例",
        chapterNum: 4,
        duration: "15分钟"
    },
    {
        slug: "43-innovation-project",
        title: "创新型智能设备项目落地与实践",
        chapterNum: 4,
        duration: "15分钟"
    }
];

// 对外导出:根据数组索引统一生成连续的 num
export const tutorialSections: TutorialSection[] = tutorialSectionsData.map(
    (section, index) => ({
        ...section,
        num: index + 1,
    }),
);

// 辅助函数:根据slug获取章节
export function getSectionBySlug(slug: string): TutorialSection | undefined {
    return tutorialSections.find(s => s.slug === slug);
}

// 辅助函数:获取上一节
export function getPrevSection(currentSlug: string): TutorialSection | undefined {
    const currentIndex = tutorialSections.findIndex(s => s.slug === currentSlug);
    if (currentIndex > 0) {
        return tutorialSections[currentIndex - 1];
    }
    return undefined;
}

// 辅助函数:获取下一节
export function getNextSection(currentSlug: string): TutorialSection | undefined {
    const currentIndex = tutorialSections.findIndex(s => s.slug === currentSlug);
    if (currentIndex >= 0 && currentIndex < tutorialSections.length - 1) {
        return tutorialSections[currentIndex + 1];
    }
    return undefined;
}

// 辅助函数:获取所有slug用于静态生成
export function getAllSlugs(): string[] {
    return tutorialSections.map(s => s.slug);
}

// 辅助函数:根据章节编号获取章节信息
export function getChapterByNum(chapterNum: number) {
    return chapters.find(c => c.num === chapterNum);
}
