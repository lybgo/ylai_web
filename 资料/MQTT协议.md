<div align="center">

# 宜启智控Pro MQTT协议

</div>

# 上报数据格式：

```
{
    "devNameA":[{ //devNameA为具体设备名字，格式：yq_MainId_subId,其中yq为固定字符串，
                 //MainId:为16进制的宜启智控设备ID，subId:为16进制Mesh子设备ID，
                //如yq_123456_22222：表示MainId为123456的宜启智控的子设备ID为22222上报的数据。
        "o": [states,size], //states: UInt16 开关状态，一位代表一个输出的状态，0：关闭，1：开启, size:输出路数
        "p": [onoffs,inverses,p0,h0,pr0,hr0,...,pN,hN,prN,hrN], //PWM状态，onoffs: uint16 开关状态，一位一个输出的状态，0：关闭，1：开启; 
                //inverses,uint16 占空比反向，一位一个输出状态
                //p:Int16 占空比(放大100倍)，h:Int32 频率，pr:Int16占空比加减速速率，hr:Int32 频率加减速速率
        "i":[onoffs,pulse0,hz0,...,pulseN,hzN],//输入状态，onoffs: uint16，开关量开关状态，一位代表一个输入的状态，0：静默，1：激活，
                //pulse为输入脉冲计数值，hz为输入频率值。
        "t":[t1,t2,humidity],//Int16 t1:温度1 t2:温度2, humidity:湿度
        "a":[a1,a2,a3],//Int32 ADC1,2,3 映射后的值，并且放大了100倍
        "c":[c1,c2...c16],//Int32 计数器1~16
        "m":[size,idxs,dat1...datN],//其它mesh子设备通用数据，size:总共多少个mesh数据，idxs：此次上报的mesh数据索引，bit值为1的索引，上报的数据
        "r": rfValue,//uint32 收到RF433MHZ的遥控器信号，信号低4位为按钮值，高20位为遥控器ID
        "s": states,//uint32 设备状态，bit0:设备启动 bit1:蓝牙连接 bit2:蓝牙断开
        "mb":[states,size],//设备中配置RS485 modbus读取到的线圈或离散输入状态，states: UInt32 开关状态，一位代表一个输出的状态，0：关闭，1：开启, size:数量
        "mv":[val1,val2,...,valN],//设备中配置RS485 modbus读取到的保持或输入寄存器的值，valN:为读取到的第N个值
        "mp":[透传modbus命令回复数据],
        "v":[FrameworkVer,UserBinVer,DriverVer],//uint32 版本号，仅在设备上电后第一次连接MQTT成功时会上报，FrameworkVer：Framework框架固件版本号；UserBinVer：用户逻辑固件版本号；驱动固件：驱动版本号
    }],
    ...,
    "devNameN":[{...}],
}
```
# 下发控制命令
#### 下发控制数据格式(单个类型的控制命令)
```
{
    "device":"devName",//devName为具体设备名字，格式：yq_MainId_subId
    "data":{
        "id":1,//消息ID，自增
        "method":"",//控制方法名
        "params":{}，//控制参数
    }
}
```
#### 下发控制数据格式(多类型的控制命令)
```
{
    "device":"devName",//devName为具体设备名字，格式：yq_MainId_subId
    "data":[
        {
            "id":1,//消息ID，自增
            "method":"",//控制方法名
            "params":{}，//控制参数
        },
        {
            "id":1,//消息ID，自增
            "method":"",//控制方法名
            "params":{}，//控制参数
        },...
    ]
}
```
#### 开关控制

```
"method":"so",//set output 
"params":[value0,value1],//uint32 设置输出全部状态,value0为前16个开关，value1为16~32的开关。 2位对应一个输出，总共支持16个引脚，值代表含义：0：默认，1：关，2：开，3：切换; 
//如值为228，对应二进制为 11 10 01 00 
//则第一个开关 00 ，值为0，默认，不动作;
//  第二个开关 01 ，值为1，关，执行关闭动作;
//  第三个开关 10 ，值为2，开，执行打开动作;
//  第四个开关 11 ，值为3，切换，执行切换动作，即之前是开，则执行关，之前是关，则执行开;
//  其它开关都为0，默认不动作;
```

#### 计数器控制

```
"method":"sc",//set counter
"params":[idxA,typeA,valueA,...,idxN,typeN,valueN],//idx: 要设置的计数器索引值，范围：0~15
//type: 操作类型，0：设置，1：递增，2：递减
//value: int32 设定的值
//例如:计数器3当前值为100，"params":[2,1,10],则表示设置(2)计数器3 (1)递增 10。 执行完后计数器3的值为110。
```

#### 开关量输入的脉冲计数清零

```
"method":"cp",//clear pulse
"params":idx,//idx: 要清零的开关量输入索引值，int型
```

#### PWM控制

```
"method":"sp",//set pwm
"params":[idx,onoff,inverse,pwm,hz,pwmRate,hzRate],//idx: 指定控制PWM的索引， 
    //onoff:0关1开2切换，inverse:0正向1反向，
    //pwm:占空比，范围0~10000(实际值为0~100.00);
    //hz:频率，范围1~100000HZ; 
    //pwmRate:占空比增减速率，范围0~10000/s，其中0表示不进线性渐变
    //hzRate:频率增减速率，范围：0~100000HZ/s, 其中0表示不进行线性渐变。 
    //onoff，inverse，pwm，hz，pwmRate,hzRate设置为-1表示这些参数保持之前的值不变
```

#### 发送433Mhz遥控器信号

```
"method":"sr",//set RF
"params":[idx,rfValue],//idx: 指定遥控器的索引，范围:0~19,
//其中0~9为硬件遥控器1~9，10~19为学习到的遥控器，
//-1则表示rfValue包括了遥控器ID(高20位)和按钮值（低4位）， rfValue:遥控器按钮值，范围：0~15

```

#### 获取最新数据

```
"method":"gd",//get data
"params":dataType,//dataType: 想要获取的数据类型
//0：基本数据，包括：开关输出，开关量输入，PWM，温湿度，ADC，计数器 的数据。
//1:倒计时  TODO 以下类型暂没实现
//2:定时
//3:循环定时
//4:点动
//6：一键执行
//7:自动化任务
```

#### 任务的启用和禁用控制

```
"method":"se",//set Enable
"params":[id,enable],//id:要控制的任务ID，enable:0:禁用，1启用

```
#### 执行"一键执行"

```
"method":"ro",//run one
"params":id,//id:要执行的任务ID
```

#### 中止正在执行延时的任务

```
"method":"sd",//stop delay
"params":id,//id:要中止的任务ID

```
#### 设置/修改源来智能APP设备使用的密码

```
"method":"sk",//set key
"params":[admin,user],//admin：管理员权限密码，user:普通用户密码，若任意一个设置为0，则清除密码

```
#### 重启设备

```
"method":"rb",//reboot
"params":1,//

```
#### OTA/固件远程升级(Framework框架固件版本号大于82支持此命令)
##### 请谨慎操作，特别注意：1、升级成功后设备会自动重启，请确保升级时不会导致风险出现。2、请确保固件是正确稳定的，否则可能导致死机。3、升级过程中请保证升级的网络稳定，供电稳定。
```
"method":"ot",//ota
"params":[binType,url,wifiName,wifiPsw],//字符串数组
//binType：固件类型，"0"：Framework框架固件；"1"：用户逻辑固件；"2"：用户逻辑固件(永久)；"3"：驱动固件； 更新用户逻辑固件时，固件中必须包含MQTT的配置，否则更新后，不会连接到正确的MQTT服务器中，WIFI路由器信息同理
//url:固件文件url; 
//wifiName和wifiPsw：设备所在现场能连接到WIFI网络的名字和密码(要求2.4G频段的WIFI)
//可通过上报数据中的"v"字段确认升级是否成功；"v":[FrameworkVer,UserBinVer,DriverVer],//uint32 版本号，仅在设备上电后第一次连接MQTT成功时会上报，FrameworkVer：Framework框架固件版本号；UserBinVer：用户逻辑固件版本号；驱动固件：驱动版本号

```
