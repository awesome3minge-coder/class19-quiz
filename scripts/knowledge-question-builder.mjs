const OPTION_KEYS = ['A', 'B', 'C', 'D'];

const manualOverrides = {
  kp002: {
    prompt: 'AI时代的舆论特征是：',
    correctTexts: ['观点先于事实', '情感大于理性'],
    wrongTexts: ['事实先于观点', '理性大于情感'],
  },
  kp022: {
    prompt: '“放大镜里看舆情”是指：',
    correctTexts: ['把小舆情→中舆情，中舆情→大舆情，放大风险感知，自我加压'],
    wrongTexts: ['认为小舆情不会发展，无需研判', '只关注其他单位舆情，忽略自身风险', '没有舆情时主动制造舆情'],
  },
  kp031: {
    prompt: '《供电监管办法》明确的全国供电监管和行政执法主体是：',
    correctTexts: ['国家能源局履行全国供电监管和行政执法职能'],
    wrongTexts: ['国家发展改革委履行全部供电行政执法职能', '供电企业自行履行全国供电监管职能', '地方住建部门履行全国供电监管职能'],
  },
  kp059: {
    prompt: '玻璃绝缘子在运行中的零值检测要求是：',
    correctTexts: ['在运行中无需进行零值检测'],
    wrongTexts: ['运行中必须逐片开展零值检测', '自爆后无需及时更换', '玻璃绝缘子不会发生自爆'],
  },
  kp065: {
    prompt: '输电线路重合闸动作情况包括：',
    correctTexts: ['重合成功', '重合不成功', '重合闸不动作'],
    wrongTexts: ['重合闸持续振荡'],
  },
  kp088: {
    prompt: '下列哪些属于二次设备？',
    correctTexts: ['继电保护装置', '安全自动装置', '测控装置及监控系统'],
    wrongTexts: ['消防设施'],
  },
  kp111: {
    prompt: '中压配网通常采用的电力电缆是：',
    correctTexts: ['交联聚乙烯绝缘电力电缆'],
    wrongTexts: ['油浸纸绝缘通信电缆', '裸铝绞线', '普通塑料软线'],
  },
  kp140: {
    prompt: '目前配电网常用的避雷器是：',
    correctTexts: ['氧化锌避雷器'],
    wrongTexts: ['空气断路器', '电压互感器', '接地电阻表'],
  },
  kp152: {
    prompt: '碳中和目标与技术革命驱动下，电源类型演变形成的格局是：',
    correctTexts: ['“基荷-调节-分布式”多元协同格局'],
    wrongTexts: ['“单一基荷”独立格局', '“纯火电”集中格局', '“无调节电源”固定格局'],
  },
  kp168: {
    prompt: '新型电力系统面临的第一项挑战是：',
    correctTexts: ['电力供应方面'],
    wrongTexts: ['办公管理方面', '纸质档案方面', '人员考勤方面'],
  },
  kp189: {
    prompt: '能源互联网的三大关键技术是：',
    correctTexts: ['储能技术、电力电子技术、信息技术与通信技术'],
    wrongTexts: ['纸质档案技术、人工抄表技术、手工统计技术', '煤炭装卸技术、纸质审批技术、人工巡表技术', '单向供电技术、离线记录技术、人工报表技术'],
  },
  kp192: {
    prompt: '聚集分布式能源、储能和可控负荷的目的在于：',
    correctTexts: ['实现冷、热、电整体能源供应效益最大化'],
    wrongTexts: ['只提高单一电源装机容量', '切断冷、热、电之间的协同', '取消储能和可控负荷'],
  },
  kp194: {
    prompt: '能源互联网全面感知系统运行状态的基础是：',
    correctTexts: ['实现“源荷网储”设备广泛链接'],
    wrongTexts: ['切断电源与负荷的联系', '仅采集离线纸质记录', '停止储能设备接入'],
  },
  kp204: {
    prompt: '电缆附件在电缆线路中的薄弱程度及故障占比是：',
    correctTexts: ['整个电缆线路的“薄弱环节”，运行中约70%的故障发生在附件处'],
    wrongTexts: ['不是薄弱环节，运行中约10%的故障发生在附件处', '属于次要环节，运行中约30%的故障发生在附件处', '属于免维护环节，运行中不会在附件处发生故障'],
  },
  kp216: {
    prompt: '数智化落地“五转”包括：',
    correctTexts: ['转意识', '转组织', '转方法'],
    wrongTexts: ['转纸质'],
  },
  kp217: {
    prompt: '九个基本认识中，数字化转型的本质是：',
    correctTexts: ['数字化转型的本质是一场涉及生产力与生产关系重构的系统性变革'],
    wrongTexts: ['仅对现有系统进行改名', '只增加人工审批环节', '只更换办公终端设备'],
  },
  kp221: {
    prompt: '数智化转型的运营机制是：',
    correctTexts: ['三类赛马（算力赛马、算法赛马、场景揭榜挂帅）'],
    wrongTexts: ['只开展算力赛马', '取消算法赛马', '停止场景揭榜挂帅'],
  },
  kp286: {
    prompt: '设备四大状态包括：',
    correctTexts: ['运行状态', '热备用状态', '冷备用状态'],
    wrongTexts: ['报废状态'],
  },
  kp340: {
    prompt: '核能发电的能量转换过程首先是：',
    correctTexts: ['核能转换为热能'],
    wrongTexts: ['核能直接转换为机械能', '化学能转换为核能', '电能转换为核能'],
  },
  kp358: {
    prompt: '逆向物资全过程管理包括：',
    correctTexts: ['加强设备退役、再利用、处置等全过程管理'],
    wrongTexts: ['退役设备一律直接报废，不再评估再利用', '闲置物资只做线下登记，不开展线上处置', '报废物资不纳入处置效率和规范管理'],
  },
};

const promptOverrides = new Map(Object.entries({
  kp028: '《中华人民共和国电力法》的颁布、施行与修正情况是：',
  kp029: '新修订《供电营业规则》的施行时间和条文数量是：',
  kp030: '《供电监管办法》的发布、施行和修订时间是：',
  kp031: '《供电监管办法》明确的全国供电监管和行政执法主体是：',
  kp033: '用电检查制度的适用范围是：',
  kp034: '用电检查的产权责任划分与隐患闭环要求是：',
  kp036: '违约用电和窃电行为的处理措施是：',
  kp037: '用电检查人员的考试取证要求包括：',
  kp040: '电力系统频率的定义、我国标准及其反映的功率平衡关系是：',
  kp042: '超高压输电减少线路损耗的方式是：',
  kp050: '输电业务的主要组成是：',
  kp059: '玻璃绝缘子在运行中的零值检测要求是：',
  kp065: '输电线路重合闸动作情况包括：',
  kp098: '配电网中性点是指：',
  kp111: '中压配网通常采用的电力电缆是：',
  kp127: '高压负荷开关与断路器在开断电流能力上的区别是：',
  kp133: '中压开关柜五防装置目前主要采用：',
  kp137: '电缆分接箱的主要构成是：',
  kp140: '目前配电网常用的避雷器是：',
  kp146: '直流电源在配电自动化中的用途是：',
  kp151: '2025年总装机容量相较2020年的增幅、全球占比及风光和煤电占比分别是：',
  kp152: '碳中和目标与技术革命驱动下，电源类型演变形成的格局是：',
  kp160: '新型电力系统的主要特征是：',
  kp168: '新型电力系统面临的第一项挑战是：',
  kp171: '新型电力系统面临的第二项挑战是：',
  kp174: '新型电力系统面临的第三项挑战是：',
  kp175: '风光发电表面成本给人的直观印象是：',
  kp176: '风光发电成本中不易直接看到的方面是：',
  kp177: '未来对煤炭依赖的变化趋势是：',
  kp179: '2060年电力占终端用能比重预计达到：',
  kp180: '2060年全社会用电量预计达到：',
  kp189: '能源互联网的三大关键技术是：',
  kp192: '聚集分布式能源、储能和可控负荷的目的在于：',
  kp194: '能源互联网全面感知系统运行状态的基础是：',
  kp201: '按绝缘材料划分，电力电缆绝缘材料的分类和工作温度是：',
  kp204: '电缆附件在电缆线路中的薄弱程度及故障占比是：',
  kp212: '南方电网数字化、数智化建设的时间顺序是：',
  kp217: '九个基本认识中，数字化转型的本质是：',
  kp221: '数智化转型的运营机制是：',
  kp222: '企业数字化转型成功率及2021年我国转型成效显著企业占比分别是：',
  kp226: '客户按用户性质分类包括：',
  kp234: '业扩管理的核心目标是：',
  kp235: '业扩业务类型是：',
  kp267: '互感器按测量对象可分为：',
  kp279: '联网省区正常运行的频率偏差限值是：',
  kp280: '装机容量小于3000MW的独立运行电网，正常频率偏差限值是：',
  kp286: '设备四大状态包括：',
  kp301: '根据《中华人民共和国能源法》及相关规定，小型水电站的单站装机容量界限是：',
  kp331: '风力发电的贝茨理论效率极限及实际效率范围是：',
  kp350: '供应链发展侧重点的转变是：',
  kp352: '现代物流体系架构的基础设施是：',
  kp353: '现代物流体系架构的物质基础是：',
  kp354: '现代物流体系架构的核心引擎是：',
  kp355: '现代物流体系架构的关键驱动是：',
  kp356: '现代物流体系架构的新发力点是：',
  kp357: '库存精益管理的作用是：',
  kp358: '逆向物资全过程管理包括：',
}));

const manualOverridesByText = new Map([
  ['国资央企面临的舆论环境：身处舆论场中央，受关注度高；社会舆论容忍度低；是自然人，更是企业人，要有谨慎言行的“被围观意识”。', {
    prompt: '国资央企面临的舆论环境包括：',
    correctTexts: ['身处舆论场中央，受关注度高', '社会舆论容忍度低'],
    wrongTexts: ['身处舆论场边缘，受关注度低', '社会舆论容忍度高'],
  }],
  ['四大层面舆论环境：国际环境、国内环境、媒体发展、国资央企。', {
    prompt: '四大层面舆论环境包括：',
    correctTexts: ['国际环境', '国内环境'],
    wrongTexts: ['自然环境', '办公环境'],
  }],
  ['舆情事后处置三大模块：声誉修复 + 复盘总结+固化经验。', {
    prompt: '舆情事后处置三大模块包括：',
    correctTexts: ['声誉修复', '复盘总结', '固化经验'],
    wrongTexts: ['删除舆情记录'],
  }],
  ['风险研判信息核查舆情处置', {
    prompt: '舆情处置工作包括：',
    correctTexts: ['风险研判', '信息核查'],
    wrongTexts: ['未经核实直接回应', '延迟研判风险'],
  }],
  ['制度更新”三库“更新（风险库、口径库、案例库）经验共享', {
    prompt: '固化舆情工作经验的措施包括：',
    correctTexts: ['制度更新', '经验共享'],
    wrongTexts: ['停止案例复盘', '删除风险口径'],
  }],
  ['概述：电力领域的基本法律', {
    prompt: '《中华人民共和国电力法》的性质是：',
    correctTexts: ['电力领域的基本法律'],
    wrongTexts: ['电力企业内部管理办法', '地方供电服务指引', '电力设备检修规程'],
  }],
  ['供应使用原则：安全用电、节约用电、计划用电', {
    prompt: '电力供应与使用应遵循的原则包括：',
    correctTexts: ['安全用电', '节约用电', '计划用电'],
    wrongTexts: ['随意用电'],
  }],
  ['电压等级与分裂导线数 （分裂数越多，越能有效减少电晕损耗、提升输电容量和效率，电压等级越高通常采用越多分裂数）', {
    prompt: '关于电压等级与分裂导线数的关系，正确的是：',
    correctTexts: ['分裂数越多，越能有效减少电晕损耗', '电压等级越高通常采用越多分裂数'],
    wrongTexts: ['分裂数越少，越能有效减少电晕损耗', '电压等级越高通常采用越少分裂数'],
  }],
  ['架空地线核心功能：防雷、分流、耦合、电磁屏蔽和（OPGW）通信功能。', {
    prompt: '架空地线的核心功能包括：',
    correctTexts: ['防雷', '分流', '电磁屏蔽'],
    wrongTexts: ['升高线路电压'],
  }],
  ['输电线路巡视方式：人工、无人机、在线监测。', {
    prompt: '输电线路巡视方式包括：',
    correctTexts: ['人工', '无人机', '在线监测'],
    wrongTexts: ['停止巡视'],
  }],
  ['预试定检包括：红外测温、接地电阻测量、绝缘子检测、污秽检测。', {
    prompt: '输电线路预试定检项目包括：',
    correctTexts: ['红外测温', '接地电阻测量', '绝缘子检测'],
    wrongTexts: ['调整用户电价'],
  }],
  ['变电运行七大业务：（一）设备巡视、（二）设备维护、（三）倒闸操作、（四）工作票办理、（五）事故处理、（六）设备验收、（七）变电运行专业8大特点', {
    prompt: '变电运行的业务包括：',
    correctTexts: ['设备巡视', '设备维护', '倒闸操作'],
    wrongTexts: ['电网规划设计'],
  }],
  ['变电站设备分为三类：一次设备直接参与电能传输分配，二次设备负责监测、控制、保护一次设备，辅助设施保障一二次设备正常运行。', {
    prompt: '变电站设备的三种类别包括：',
    correctTexts: ['一次设备', '二次设备', '辅助设施'],
    wrongTexts: ['用电客户'],
  }],
  ['站用变（输出220V相电压和380V线电压,分为干式和油浸式）', {
    prompt: '关于站用变，正确的是：',
    correctTexts: ['输出220V相电压和380V线电压', '分为干式和油浸式'],
    wrongTexts: ['输出110V相电压和220V线电压', '仅有油浸式一种'],
  }],
  ['中性点直接接地中性点经小电阻接地中性点经消弧线圈接地10kV电网的中性点接地一般采用经小电阻接地或经消弧线圈接地方式低压配电网中性点接地一般采用直接接地方式。', {
    prompt: '常用的中性点接地方式包括：',
    correctTexts: ['中性点直接接地', '中性点经小电阻接地', '中性点经消弧线圈接地'],
    wrongTexts: ['中性点经大电容接地'],
  }],
  ['电缆敷设方式：直埋敷设、排管敷设、沟道敷设敷设方法分为人力敷设和机械敷设', {
    prompt: '电缆敷设方式包括：',
    correctTexts: ['直埋敷设', '排管敷设', '沟道敷设'],
    wrongTexts: ['架空裸线敷设'],
  }],
  ['按绝缘方式分类：干式和油浸式（绝缘介质不同，油or空气）', {
    prompt: '配电变压器按绝缘方式可分为：',
    correctTexts: ['干式', '油浸式'],
    wrongTexts: ['水浸式', '真空式'],
  }],
  ['注意：如果是办理改类业务，仅需提供客户身份证明材料（如委托他人，需提供经办人身份材料、授权委托书），无需提供用电地址物业权属证明书。', {
    prompt: '办理改类业务时，关于受理材料的要求，正确的是：',
    correctTexts: ['仅需提供客户身份证明材料', '无需提供用电地址物业权属证明书'],
    wrongTexts: ['必须提供用电地址物业权属证明书', '无需提供客户身份证明材料'],
  }],
  ['常见业扩业务：低压客户业扩办理、高压客户业扩办理、新能源业务。', {
    prompt: '常见业扩业务包括：',
    correctTexts: ['低压客户业扩办理', '高压客户业扩办理', '新能源业务'],
    wrongTexts: ['输电线路检修办理'],
  }],
  ['分裂导线的作用：增大导线的等效半径，减小电晕。', {
    prompt: '分裂导线的作用是：',
    correctTexts: ['增大导线的等效半径，减小电晕'],
    wrongTexts: ['减小导线的等效半径，增大电晕', '增大导线电阻，增加线路损耗', '减小输电容量，降低输电效率'],
  }],
  ['金属导电地线（镀锌/镀铜钢丝，强度高、防腐好）钢芯铝绞线（铝绞线+钢芯，强度高且导电良好，高压常用）', {
    prompt: '导地线的主要类型包括：',
    correctTexts: ['金属导电地线（镀锌/镀铜钢丝，强度高、防腐好）', '钢芯铝绞线（铝绞线+钢芯，强度高且导电良好，高压常用）'],
    wrongTexts: ['木质绝缘地线', '普通塑料绞线'],
  }],
  ['耐张塔：承受张力，用于分段、终端、转角（P58）', {
    prompt: '耐张塔的用途是：',
    correctTexts: ['承受张力，用于分段、终端、转角（P58）'],
    wrongTexts: ['仅用于直线通过，不承受张力', '仅用于站内照明', '用于测量线路电能'],
  }],
  ['悬垂线夹（连接导线与绝缘子）耐张线夹（固定导线于耐张段）连接金具（连接绝缘子与其他部件）保护金具（减振、防闪络、防腐蚀）接续金具（导线之间的连接），分别承担“悬、固、连、护、续”五大功能，是保障线路机械强度和电气连接的关键', {
    prompt: '输电线路金具的五大功能是：',
    correctTexts: ['悬、固、连、护、续'],
    wrongTexts: ['发、输、变、配、用', '测、控、保、调、通', '升、降、储、送、售'],
  }],
  ['正常——定期全面查故障——事故后追因特殊——按需专项检', {
    prompt: '输电线路巡视类型与任务的对应关系，正确的是：',
    correctTexts: ['正常——定期全面查', '故障——事故后追因', '特殊——按需专项检'],
    wrongTexts: ['正常——事故后追因'],
  }],
  ['电压等级：低压用户、高压用户', {
    prompt: '按电压等级划分，用户包括：',
    correctTexts: ['低压用户', '高压用户'],
    wrongTexts: ['机械用户', '通信用户'],
  }],
  ['石墨层不是电力电缆的重要组成部分', {
    prompt: '关于石墨层，正确的是：',
    correctTexts: ['石墨层不是电力电缆的重要组成部分'],
    wrongTexts: ['石墨层是电力电缆的核心导体', '石墨层是电力电缆的主绝缘层', '石墨层是电力电缆的金属屏蔽层'],
  }],
  ['数字化、智能化和协同化，数字电网是实现新型电力系统不可或缺的基石。', {
    prompt: '数字电网与新型电力系统的关系是：',
    correctTexts: ['数字电网是实现新型电力系统不可或缺的基石'],
    wrongTexts: ['数字电网与新型电力系统无关', '数字电网只用于纸质档案管理', '数字电网会替代全部物理电网设备'],
  }],
  ['系统的稳定性受到挑战', {
    prompt: '新型电力系统在系统安全方面面临的挑战是：',
    correctTexts: ['系统的稳定性受到挑战'],
    wrongTexts: ['系统稳定性不再需要关注', '系统运行不受新能源影响', '调度控制技术无需发展'],
  }],
  ['电网调度控制技术需要适应性发展。', {
    prompt: '新型电力系统对调度控制技术的要求是：',
    correctTexts: ['电网调度控制技术需要适应性发展'],
    wrongTexts: ['电网调度控制技术无需调整', '仅保留人工抄表技术', '停止调度控制技术升级'],
  }],
  ['提升新能源的消纳能力', {
    prompt: '能源互联网的优势包括：',
    correctTexts: ['提升新能源的消纳能力'],
    wrongTexts: ['降低新能源消纳能力', '切断源荷网储联系', '仅保留单一能源供应'],
  }],
  ['核心是导体（传输电流）。', {
    prompt: '电力电缆中负责传输电流的核心部分是：',
    correctTexts: ['导体'],
    wrongTexts: ['石墨层', '外护套', '填充层'],
  }],
  ['关键保护是绝缘层（防止漏电）。', {
    prompt: '电力电缆中用于防止漏电的关键保护是：',
    correctTexts: ['绝缘层'],
    wrongTexts: ['导体', '填充层', '石墨层'],
  }],
  ['A类包含所有B类项目（整体→局部）B类包含所有C类项目（停电局部→不停电）', {
    prompt: 'A、B、C三类检修的层级包含关系是：',
    correctTexts: ['A类包含所有B类项目（整体→局部）', 'B类包含所有C类项目（停电局部→不停电）'],
    wrongTexts: ['B类包含所有A类项目', 'C类包含所有B类项目'],
  }],
  ['具有灭弧装置，能够安全切断巨大的故障电流（短路电流），起到控制和保护作用。目前高压/超高压主推SF6（六氟化硫）断路器，其灭弧能力最强。中压领域（10kV-40.5kV）绝对主力是真空断路器。', {
    prompt: '关于高压断路器，正确的是：',
    correctTexts: ['高压/超高压主推SF6（六氟化硫）断路器', '中压领域（10kV-40.5kV）绝对主力是真空断路器'],
    wrongTexts: ['高压断路器没有灭弧装置', '中压领域绝对主力是隔离开关'],
  }],
  ['断路器跳闸时间：几十毫秒内。', {
    prompt: '断路器跳闸时间通常为：',
    correctTexts: ['几十毫秒内'],
    wrongTexts: ['几十秒内', '几十分钟内', '几小时内'],
  }],
  ['没有灭弧装置，绝对不能带正常负荷电流或短路电流操作，否则会发生“带负荷拉刀闸”严重事故（飞弧）。', {
    prompt: '关于隔离开关，正确的是：',
    correctTexts: ['没有灭弧装置，绝对不能带正常负荷电流或短路电流操作'],
    wrongTexts: ['具有完整灭弧装置，可以切断短路电流', '可以长期带负荷拉闸', '主要用于切断巨大故障电流'],
  }],
  ['其主要作用是隔离电源（形成明显断开点）、倒换线路和开断小电流。', {
    prompt: '隔离开关的主要作用包括：',
    correctTexts: ['隔离电源（形成明显断开点）', '倒换线路和开断小电流'],
    wrongTexts: ['切断巨大短路电流', '替代继电保护装置'],
  }],
  ['工作原理：电磁感应（电生磁、磁场传导、磁生电）', {
    prompt: '变压器的工作原理是：',
    correctTexts: ['电磁感应'],
    wrongTexts: ['静电感应', '化学反应', '机械传动'],
  }],
  ['特殊的“降压变压器”，将高压按比例转换为标准的低电压（通常为100V），用于测量和保护', {
    prompt: '电压互感器（PT）的作用是：',
    correctTexts: ['将高压按比例转换为标准的低电压（通常为100V），用于测量和保护'],
    wrongTexts: ['将低压升至超高压用于输电', '将大电流转换为5A用于计量', '直接切断短路电流'],
  }],
  ['将一次侧巨大的电流转换为标准的小电流（通常为5A或1A），用于计量和继电保护。起到电流变换和电气隔离的作用。', {
    prompt: '电流互感器（CT）的作用是：',
    correctTexts: ['将一次侧巨大的电流转换为标准的小电流（通常为5A或1A）'],
    wrongTexts: ['将高电压转换为100V', '将小电流放大为短路电流', '直接切断故障电流'],
  }],
  ['招标投标基本原则：公开、公平、公正、诚实信用', {
    prompt: '招标投标的基本原则包括：',
    correctTexts: ['公开', '公平', '公正'],
    wrongTexts: ['暗箱操作'],
  }],
  ['电力系统五大环节：发、输、变、配、用发电（能量转换）、输电（向负荷中心传输）、变电（电压升降转换）、配电（向用户分配）、用电。', {
    prompt: '电力系统五大环节包括：',
    correctTexts: ['发', '输', '变'],
    wrongTexts: ['采'],
  }],
  ['我国电力装机结构（截至2024/2025数据）：火电装机占比依然最高（约40-43%），太阳能发电占比位居第二，风电和水电紧随其后。', {
    prompt: '关于我国电力装机结构，正确的是：',
    correctTexts: ['火电装机占比依然最高（约40-43%）', '太阳能发电占比位居第二'],
    wrongTexts: ['火电装机占比最低', '太阳能发电占比位居末位'],
  }],
  ['形式：核裂变（主要发电方式）、核聚变核电站效率30~35%。', {
    prompt: '核能利用形式包括：',
    correctTexts: ['核裂变', '核聚变'],
    wrongTexts: ['化学燃烧', '机械摩擦'],
  }],
  ['储能可将电力平衡约束松弛为电量平衡约束。', {
    prompt: '储能对电力系统平衡约束的作用是：',
    correctTexts: ['储能可将电力平衡约束松弛为电量平衡约束'],
    wrongTexts: ['储能会取消全部功率平衡约束', '储能会把电量平衡改为瞬时电力平衡', '储能与系统平衡约束无关'],
  }],
  ['定义：以水为能量载体，通过抽水和放水实现能量存储和利用。低谷时抽水至上水库储能，高峰时放水发电。', {
    prompt: '抽水蓄能是指：',
    correctTexts: ['以水为能量载体，通过抽水和放水实现能量存储和利用'],
    wrongTexts: ['低谷时放水发电，高峰时抽水储能', '以煤炭为唯一能量载体', '不需要上下水库即可运行'],
  }],
  ['综合效率：70-80%', {
    prompt: '抽水蓄能的综合效率为：',
    correctTexts: ['70-80%'],
    wrongTexts: ['20-30%', '40-50%', '90-100%'],
  }],
  ['地位：目前技术最成熟、应用最广泛的大规模储能技术，在储能领域占据主导地位', {
    prompt: '抽水蓄能在储能技术中的地位是：',
    correctTexts: ['目前技术最成熟、应用最广泛的大规模储能技术，在储能领域占据主导地位'],
    wrongTexts: ['尚未形成工程应用', '仅适用于小型便携设备', '已被全部储能技术淘汰'],
  }],
  ['五大作用：削峰填谷、调频、调压、事故备用、黑启动', {
    prompt: '抽水蓄能的作用包括：',
    correctTexts: ['削峰填谷', '调频', '黑启动'],
    wrongTexts: ['提高燃煤消耗'],
  }],
  ['美国：企业物流；日本：物流系统；欧盟：综合物流', {
    prompt: '各地区物流概念的对应关系正确的有：',
    correctTexts: ['美国：企业物流', '日本：物流系统', '欧盟：综合物流'],
    wrongTexts: ['美国：无物流系统'],
  }],
  ['十四五现代物流发展规划明确，现代物流发展发挥着先导性、基础性、战略性作用。现代物流的主要特征包括供需适配、安全高效、内外联通、绿色智慧', {
    prompt: '现代物流的主要特征包括：',
    correctTexts: ['供需适配', '安全高效', '绿色智慧'],
    wrongTexts: ['供需脱节'],
  }],
  ['精准回应关切强化正面宣传聚焦民生诉求，优化业务风险跟踪，防止舆情反弹', {
    prompt: '声誉修复的做法是：',
    correctTexts: ['精准回应关切', '强化正面宣传'],
    wrongTexts: ['回避公众关切', '停止正面沟通'],
  }],
  ['根据供电可靠性要求及中断供电危害程度，将重要客户分为特级、一级和二级。', {
    prompt: '根据供电可靠性要求及中断供电危害程度，重要客户分为：',
    correctTexts: ['特级', '一级', '二级'],
    wrongTexts: ['三级'],
  }],
  ['复合导地线（多种材料组合，结构紧凑、轻质耐腐蚀，适用于海边、沙漠等恶劣环境）', {
    prompt: '复合导地线的特点是：',
    correctTexts: ['结构紧凑、轻质耐腐蚀'],
    wrongTexts: ['结构松散且不耐腐蚀', '只适用于室内环境', '不能用于恶劣环境'],
  }],
  ['分类（按外绝缘层）：裸导线（中压线路）、绝缘导线（用于中压架空绝缘线路要增设避雷器）导线型号含义（要知道LGJ是钢芯铝绞线，L铝、G钢、J绞；JKLYJ =架空绝缘铝芯交联聚乙烯（常考“JK”代表架空））普通型和轻型钢芯铝绞线用于一般地区，加强型钢芯铝绞线用于重冰区和大跨越地段', {
    prompt: '导线按外绝缘层分类包括：',
    correctTexts: ['裸导线', '绝缘导线'],
    wrongTexts: ['木质导线', '液体导线'],
  }],
  ['10kV配电线路分支线和配电变压器最常用的一种短路保护开关', {
    prompt: '高压跌落式熔断器的用途是：',
    correctTexts: ['10kV配电线路分支线和配电变压器最常用的一种短路保护开关'],
    wrongTexts: ['用于切换低压照明回路', '用于测量线路有功电能', '用于调整发电机频率'],
  }],
  ['介于断路器和隔离开关之间的一种开关电器，具有简单灭弧装置。', {
    prompt: '高压负荷开关的特点是：',
    correctTexts: ['介于断路器和隔离开关之间的一种开关电器，具有简单灭弧装置'],
    wrongTexts: ['没有任何灭弧装置', '可以替代电流互感器计量', '仅用于测量接地电阻'],
  }],
  ['电流互感器二次侧不得开路！电压互感器二次侧严禁短路！电流互感器和电压互感器二次侧有一端子必须接地（防止一、二次绝缘击穿，高压串入二次侧）', {
    prompt: '关于互感器二次侧安全要求，正确的是：',
    correctTexts: ['电流互感器二次侧不得开路', '电压互感器二次侧严禁短路'],
    wrongTexts: ['电流互感器二次侧必须开路', '电压互感器二次侧必须短路'],
  }],
  ['2012年为拐点（政策驱动）；2020年电力企业对碳排放控制起主导作用。', {
    prompt: '电力行业碳排放控制的重要时间节点包括：',
    correctTexts: ['2012年为拐点（政策驱动）', '2020年电力企业对碳排放控制起主导作用'],
    wrongTexts: ['2010年电力企业退出碳排放控制', '2030年取消碳排放控制'],
  }],
  ['2030年，碳达峰', {
    prompt: '我国实现碳达峰的目标年份是：',
    correctTexts: ['2030年'],
    wrongTexts: ['2020年', '2040年', '2060年'],
  }],
  ['2060年，碳中和，预计清洁能源装机比例达80-90%。', {
    prompt: '我国实现碳中和的目标年份是：',
    correctTexts: ['2060年'],
    wrongTexts: ['2030年', '2040年', '2050年'],
  }],
  ['“黑色”能源占比随2060年到来比例越发降低', {
    prompt: '未来40年“黑色”能源占比的变化趋势是：',
    correctTexts: ['“黑色”能源占比随2060年到来比例越发降低'],
    wrongTexts: ['“黑色”能源占比持续上升', '“黑色”能源占比保持不变', '2060年后只保留“黑色”能源'],
  }],
  ['自愈性（核心特征）', {
    prompt: '智能电网的核心特征是：',
    correctTexts: ['自愈性'],
    wrongTexts: ['不可观测性', '完全人工化', '单向通信'],
  }],
  ['安全屏障是金属屏蔽层（限制电场，安全接地）。', {
    prompt: '电力电缆中用于限制电场并安全接地的安全屏障是：',
    correctTexts: ['金属屏蔽层'],
    wrongTexts: ['石墨层', '填充层', '导体'],
  }],
  ['（助记：油纸老传统，挤包分两类——热塑70度（低压），热固90度（高压））', {
    prompt: '挤包绝缘材料的温度对应关系正确的是：',
    correctTexts: ['热塑70度（低压）', '热固90度（高压）'],
    wrongTexts: ['热塑90度（低压）', '热固70度（高压）'],
  }],
  ['电缆本体（导体、屏蔽、绝缘、护套）负责传输电能和基本防护', {
    prompt: '电缆本体的作用是：',
    correctTexts: ['负责传输电能和基本防护'],
    wrongTexts: ['只负责用户计费', '只负责调度通信', '不承担电能传输'],
  }],
  ['日常、特殊、故障、夜间、智能（五类）【日常（常规检查）、特殊（异常天气/高负荷）、故障（事故后专项排查）、夜间（利用高峰负荷或发光现象）、智能（自动化在线监测）】', {
    prompt: '电缆巡视类型包括：',
    correctTexts: ['日常', '特殊', '智能'],
    wrongTexts: ['停止巡视'],
  }],
  ['数智化与数字化的本质区别在于判断权的转移。', {
    prompt: '数智化与数字化的本质区别在于：',
    correctTexts: ['判断权的转移'],
    wrongTexts: ['只更换系统名称', '只增加纸质流程', '完全取消数据应用'],
  }],
  ['客户身份证明材料（如委托他人，需提供经办人身份材料、授权委托书）', {
    prompt: '委托他人办理业务时，客户身份证明材料还需包括：',
    correctTexts: ['经办人身份材料', '授权委托书'],
    wrongTexts: ['设备检修记录', '线路巡视报告'],
  }],
  ['物业权属证明材料（即产权材料）。', {
    prompt: '物业权属证明材料是指：',
    correctTexts: ['产权材料'],
    wrongTexts: ['设备缺陷记录', '电网调度指令', '线路巡视报告'],
  }],
  ['用来接收、分配电能，实现通断、控制与保护，一般具备五防闭锁功能。额定电压3.6～40.5kV、工频50Hz。', {
    prompt: '关于高压开关柜，正确的是：',
    correctTexts: ['用来接收、分配电能，实现通断、控制与保护', '一般具备五防闭锁功能'],
    wrongTexts: ['不具备通断与保护功能', '只用于低压照明计费'],
  }],
  ['各类发电效率对比：大型水电（80~90%，最高） > 压缩空气储能（40~70%） > 燃煤火电（30~48%） > 燃气（30~40%）> 核电（30~35%） > 光伏（15~25%）。', {
    prompt: '各类发电效率对比中，正确的是：',
    correctTexts: ['大型水电（80~90%，最高）', '光伏（15~25%）'],
    wrongTexts: ['大型水电（20~30%，最低）', '光伏（80~90%，最高）'],
  }],
  ['大型水电站效率80~90%', {
    prompt: '大型水电站效率通常为：',
    correctTexts: ['80~90%'],
    wrongTexts: ['20~30%', '40~50%', '60~70%'],
  }],
  ['中小型水电站效率70~85%', {
    prompt: '中小型水电站效率通常为：',
    correctTexts: ['70~85%'],
    wrongTexts: ['20~35%', '40~55%', '90~100%'],
  }],
  ['现代物流要关注需求计划、供应计划、库存计划衔接。', {
    prompt: '现代物流需要关注的计划衔接包括：',
    correctTexts: ['需求计划', '供应计划', '库存计划'],
    wrongTexts: ['个人休假计划'],
  }],
  ['防雷装置（避雷器与避雷针）：其核心作用是限制过电压；在额定电压下，相当于绝缘体', {
    prompt: '关于防雷装置，正确的是：',
    correctTexts: ['其核心作用是限制过电压', '在额定电压下，相当于绝缘体'],
    wrongTexts: ['其核心作用是升高过电压', '在额定电压下，相当于电源'],
  }],
  ['10kv配电网：辐射型、环网型（单环网型和双环网型）、n供一备型和多分段n联络型', {
    prompt: '10kV配电网的接线方式包括：',
    correctTexts: ['辐射型', '环网型', 'n供一备型'],
    wrongTexts: ['无连接型'],
  }],
  ['低压配电网：一般采用以配电变压器为中心的辐射型接线。', {
    prompt: '低压配电网一般采用的接线方式是：',
    correctTexts: ['以配电变压器为中心的辐射型接线'],
    wrongTexts: ['无配电变压器的环形接线', '超高压双母线接线', '完全无联络接线'],
  }],
  ['金具用于支持、固定和接续导线及绝缘子连接成串，亦用于保护导线和绝缘子。', {
    prompt: '配电线路金具的作用是：',
    correctTexts: ['支持、固定和接续导线及绝缘子连接成串'],
    wrongTexts: ['承担发电机调频', '测量客户用电量', '改变电网运行频率'],
  }],
  ['基本结构：导体、绝缘层、护套三大部分，6kV以上电缆，导体和绝缘层外还有屏蔽层。', {
    prompt: '电缆的基本结构包括：',
    correctTexts: ['导体', '绝缘层', '护套'],
    wrongTexts: ['叶轮'],
  }],
  ['电缆附件：终端和接头电缆终端通常称为电缆终端头，即终端=终端头：按环境分户内终端和户外终端', {
    prompt: '关于电缆终端，正确的是：',
    correctTexts: ['电缆终端通常称为电缆终端头', '按环境分户内终端和户外终端'],
    wrongTexts: ['电缆终端等同于中间头', '电缆终端仅能安装在户内'],
  }],
  ['电缆接头通常称为电缆中间头，即接头=中间头', {
    prompt: '电缆接头通常称为：',
    correctTexts: ['电缆中间头'],
    wrongTexts: ['电缆终端头', '电缆屏蔽头', '电缆分支箱'],
  }],
  ['组合式变电站：美变；相对于预装式变电站，组合式变电站占地更小。', {
    prompt: '关于组合式变电站，正确的是：',
    correctTexts: ['美变', '相对于预装式变电站，组合式变电站占地更小'],
    wrongTexts: ['欧变', '相对于预装式变电站，组合式变电站占地更大'],
  }],
  ['电源：风光电源先天性“缺陷”（间歇性、波动性）', {
    prompt: '新型电力系统在电源方面面临的挑战是：',
    correctTexts: ['风光电源先天性“缺陷”（间歇性、波动性）'],
    wrongTexts: ['风光电源完全连续且无波动', '风光电源不受自然条件影响', '风光电源可独立保证全部调频需求'],
  }],
  ['负荷：负荷与电源的属性匹配难以趋同（新能源发电高峰在午间，用电高峰在晚间）。', {
    prompt: '新型电力系统在负荷方面面临的挑战是：',
    correctTexts: ['负荷与电源的属性匹配难以趋同'],
    wrongTexts: ['新能源发电高峰与用电高峰始终完全重合', '负荷与电源无需进行时序匹配', '用电高峰固定在午间且永不变化'],
  }],
  ['三大优势：(冷热电协同、提升消纳、源荷网储链接)', {
    prompt: '能源互联网的三大优势包括：',
    correctTexts: ['冷热电协同', '提升消纳', '源荷网储链接'],
    wrongTexts: ['切断多能协同'],
  }],
  ['电缆终端头：户外、GIS、变压器', {
    prompt: '电缆终端头的类型包括：',
    correctTexts: ['户外', 'GIS', '变压器'],
    wrongTexts: ['直通接头'],
  }],
  ['电缆中间头：直通、绝缘。（10kv以下电压）', {
    prompt: '电缆中间头的类型包括：',
    correctTexts: ['直通', '绝缘'],
    wrongTexts: ['户外终端', 'GIS终端'],
  }],
  ['2421路径：2基础+4位一体+2能力+1生态（基础设施+数据资产；数字电网/服务/运营/产业；融通创新+安全屏障；数字生态）', {
    prompt: '“2421”路径包括：',
    correctTexts: ['基础设施+数据资产', '数字电网/服务/运营/产业', '融通创新+安全屏障'],
    wrongTexts: ['取消数字生态'],
  }],
  ['数字电网案例：输电巡视三阶段：人巡→机巡(2-3倍)→智巡(4-5倍)', {
    prompt: '数字电网输电巡视的三阶段顺序是：',
    correctTexts: ['人巡→机巡(2-3倍)→智巡(4-5倍)'],
    wrongTexts: ['智巡→机巡→人巡', '机巡→人巡→智巡', '人巡→智巡→取消巡视'],
  }],
  ['AI四要素：算力/数据/模型/场景→发动机/燃料/大脑/舞台，人才是聚合枢纽。', {
    prompt: 'AI的四个要素包括：',
    correctTexts: ['算力', '数据', '模型'],
    wrongTexts: ['纸质档案'],
  }],
  ['低压客户业扩办理', {
    prompt: '常见业扩业务之一是：',
    correctTexts: ['低压客户业扩办理'],
    wrongTexts: ['输电线路检修办理', '主网事故调度办理', '发电机组启停办理'],
  }],
  ['高压客户业扩办理', {
    prompt: '案例2（过户）对应的业扩业务是：',
    correctTexts: ['高压客户业扩办理'],
    wrongTexts: ['低压线路巡视', '主网事故调度', '发电机组检修'],
  }],
  ['新能源业务', {
    prompt: '案例（新装用电）对应的业务是：',
    correctTexts: ['新能源业务'],
    wrongTexts: ['输电线路巡视', '变电站检修', '主网事故调度'],
  }],
  ['2024年11月1日，国家能源局在网上公开发布《12398能源监管热线投诉处理办法》（以下简称“投诉办法”）和《12398能源监管热线举报处理办法》（以下简称“举报办法”），并于2025年1月1日起正式执行。该两个办法进一步规范了能源监管投诉、举报处理工作，及时响应公众诉求，提高服务质量。', {
    prompt: '12398能源监管热线投诉、举报处理办法的重要时间包括：',
    correctTexts: ['2024年11月1日', '2025年1月1日起正式执行'],
    wrongTexts: ['2023年11月1日', '2026年1月1日起正式执行'],
  }],
  ['12398投诉办理流程：尤其注意有其特有的异议申诉环节。', {
    prompt: '12398投诉办理流程特有的环节是：',
    correctTexts: ['异议申诉环节'],
    wrongTexts: ['设备检修环节', '电价测算环节', '线路验收环节'],
  }],
  ['三大设备品类及其安装使用特点：电能表、终端、互感器。', {
    prompt: '电能计量三大设备品类包括：',
    correctTexts: ['电能表', '终端', '互感器'],
    wrongTexts: ['发电机'],
  }],
  ['电压互感器（Potential Transformer 简称 PT 或 TV）：和变压器类似，是用来变换电压的仪器。电压互感器可分为电磁式电压互感器和电容式电压互感器两种。', {
    prompt: '电压互感器（PT或TV）的作用是：',
    correctTexts: ['用来变换电压'],
    wrongTexts: ['用来切断短路电流', '用来调节发电机转速', '用来测量接地电阻'],
  }],
  ['电流互感器（Current Transformer 简称 CT 或 TA）：是依据电磁感应原理将一次侧大电流转换成二次侧小电流来测量的仪器。', {
    prompt: '电流互感器（CT或TA）的作用是：',
    correctTexts: ['将一次侧大电流转换成二次侧小电流来测量'],
    wrongTexts: ['将高电压转换为100V', '直接切断短路电流', '将小电流转换为雷电流'],
  }],
  ['断路器四大结构：灭弧、绝缘、操作机构、导流。', {
    prompt: '断路器的四大结构包括：',
    correctTexts: ['灭弧', '绝缘', '操作机构'],
    wrongTexts: ['客户计费'],
  }],
  ['AIS：Air Insulated Switchgear，空气绝缘的敞开式开关设备', {
    prompt: 'AIS是指：',
    correctTexts: ['Air Insulated Switchgear，空气绝缘的敞开式开关设备'],
    wrongTexts: ['Gas Insulated Switchgear，气体绝缘金属封闭开关设备', 'Oil Insulated Switchgear，油绝缘开关设备', 'Vacuum Metering System，真空计量系统'],
  }],
  ['GIS：Gas Insulated Switchgear，气体绝缘金属封闭开关设备', {
    prompt: 'GIS是指：',
    correctTexts: ['Gas Insulated Switchgear，气体绝缘金属封闭开关设备'],
    wrongTexts: ['Air Insulated Switchgear，空气绝缘的敞开式开关设备', 'Oil Insulated Switchgear，油绝缘开关设备', 'General Information System，通用信息系统'],
  }],
  ['电容器：核心作用是无功补偿、提高功率因数、稳定母线电压。公式：C = Q/U。', {
    prompt: '电容器的核心作用包括：',
    correctTexts: ['无功补偿', '提高功率因数', '稳定母线电压'],
    wrongTexts: ['切断短路电流'],
  }],
]);

function cleanFragment(value) {
  return value
    .trim()
    .replace(/^[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮]\s*/, '')
    .replace(/^[（(]?\d+[）).、]\s*/, '')
    .replace(/^[；;，,、+]+|[；;，,、]+$/g, '')
    .trim();
}

function withoutTerminal(value) {
  return value.trim().replace(/[。；;，,：:]$/g, '').trim();
}

function tidyOptionText(value) {
  let result = value
    .replace(/\(/g, '（')
    .replace(/\)/g, '）')
    .replace(/（P\d+）/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  const directionalQuoteCount = (result.match(/[“”]/g) ?? []).length;
  if (directionalQuoteCount % 2 === 0 && directionalQuoteCount > 0) {
    let opening = true;
    result = result.replace(/[“”]/g, () => {
      const quote = opening ? '“' : '”';
      opening = !opening;
      return quote;
    });
  }
  return result;
}

function splitFirst(value, pattern) {
  const match = value.match(pattern);
  if (!match || match.index === undefined) return null;
  const separatorIndex = match.index;
  return [value.slice(0, separatorIndex), value.slice(separatorIndex + match[0].length)];
}

function splitExactList(value) {
  const firstSentence = value.split('。')[0].trim();
  const candidates = [
    /[；;]/,
    /[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮]/,
  ];

  for (const separator of candidates) {
    const parts = firstSentence.split(separator).map(cleanFragment).filter(Boolean);
    if (
      parts.length >= 2
      && parts.length <= 12
      && parts.every((part) => part.length <= 42)
    ) {
      return parts;
    }
  }
  return [];
}

function contextualTopic(point, topic) {
  const cleanedTopic = withoutTerminal(topic);
  if (!/^(?:定义|原理|作用|功能|分类|类型|形式|组成|目的|特点|优点|缺点|核心原则|流程|概述|按.+)$/.test(cleanedTopic)) {
    return cleanedTopic;
  }
  const context = point.group || point.section || point.category;
  if (cleanedTopic === '定义') return `${context}的定义`;
  if (cleanedTopic === '原理') return `${context}的原理`;
  if (/^按/.test(cleanedTopic)) return `${context}${cleanedTopic}`;
  return `${context}的${cleanedTopic}`;
}

function stemForTopic(topic, multiple) {
  const value = withoutTerminal(topic);
  if (/定义$/.test(value)) return `${value.replace(/的?定义$/, '')}是指：`;
  if (/原理$/.test(value)) return `${value}是：`;
  if (/时间|年份|日期|标准|范围|比例|效率|上限|时限|偏差|电压|电流|频率/.test(value) && !multiple) {
    return `${value}为：`;
  }
  if (multiple) {
    if (/包括$|包含$|有$/.test(value)) return `${value}哪些内容？`;
    return `${value}包括哪些内容？`;
  }
  if (/包括$|包含$/.test(value)) return `${value}：`;
  if (/是$|为$/.test(value)) return `${value}：`;
  return `${value}是：`;
}

function parsePoint(point) {
  const text = withoutTerminal(point.text).replace(/^💡\s*/, '');
  const colon = splitFirst(text, /[：:]/);
  if (colon) {
    if ((colon[0].match(/（/g) || []).length > (colon[0].match(/）/g) || []).length) {
      return {
        mode: 'statement',
        prompt: `关于“${text.split(/[，。；;]/)[0].slice(0, 28)}”，下列说法正确的是：`,
        correctTexts: [text],
      };
    }
    const topic = contextualTopic(point, colon[0]);
    const detail = withoutTerminal(colon[1]);
    const list = splitExactList(detail);
    const correctTexts = list.length >= 2 ? list.slice(0, 3) : [detail];
    return {
      mode: 'topic',
      prompt: stemForTopic(topic, correctTexts.length > 1),
      correctTexts,
    };
  }

  const equality = splitFirst(text, /\s*=\s*/);
  if (equality && equality[0].trim() && equality[1].trim()) {
    return {
      mode: 'mapping',
      prompt: `${withoutTerminal(equality[0])}对应的是：`,
      correctTexts: [withoutTerminal(equality[1])],
    };
  }

  const relationPatterns = [
    /(.{2,42}?)(?:可分为|分为)(.+)/,
    /(.{2,42}?)(?:包括|包含)(.+)/,
    /(.{2,42}?)(?:是指|是)(.+)/,
  ];
  for (const pattern of relationPatterns) {
    const match = text.match(pattern);
    if (!match) continue;
    const subject = withoutTerminal(match[1]);
    const detail = withoutTerminal(match[2]);
    return {
      mode: 'relation',
      prompt: `关于“${subject}”，下列说法正确的是：`,
      correctTexts: [detail],
    };
  }

  const membershipGroups = /^(?:公司舆情六大高发节点|一次设备|典型作业流程三阶段)$/;
  if (text.length <= 42 && membershipGroups.test(point.group)) {
    return {
      mode: 'membership',
      prompt: `下列哪项属于“${point.group}”？`,
      correctTexts: [text],
    };
  }

  const subject = text
    .split(/[，。；;]/)[0]
    .replace(/[（(].*$/, '')
    .slice(0, 28)
    .trim();
  const staleGroup = /^(?:金具主要类型包括)$/;
  const context = point.group && !staleGroup.test(point.group)
    ? point.group
    : point.section && point.section !== point.category
      ? point.section
      : point.category;
  const prompt = subject && subject !== text && subject.length >= 6
    ? `关于“${subject}”，下列说法正确的是：`
    : `关于“${context}”，下列说法正确的是：`;
  return {
    mode: 'statement',
    prompt,
    correctTexts: [text],
  };
}

function replaceOnce(value, from, to) {
  const index = value.indexOf(from);
  if (index < 0) return null;
  return `${value.slice(0, index)}${to}${value.slice(index + from.length)}`;
}

function mutateComparison(value) {
  const match = value.match(/^(.{1,24}?)(先于|晚于|早于|大于|小于|高于|低于|多于|少于)(.{1,24})$/);
  if (!match) return null;
  return `${match[3]}${match[2]}${match[1]}`;
}

function mutateNumber(value, variant) {
  const match = value.match(/\d+(?:\.\d+)?/);
  if (!match) return null;
  const original = Number(match[0]);
  if (!Number.isFinite(original)) return null;
  let replacement;
  if (original >= 1900 && original <= 2100) replacement = original + (variant === 0 ? 5 : variant === 1 ? 10 : -5);
  else if (original >= 100) replacement = Math.max(1, original + (variant === 0 ? 50 : variant === 1 ? 100 : -50));
  else if (original >= 10) replacement = Math.max(1, original + (variant === 0 ? 5 : variant === 1 ? 10 : -5));
  else replacement = Math.max(1, original + variant + 1);
  return `${value.slice(0, match.index)}${replacement}${value.slice(match.index + match[0].length)}`;
}

function mutateSequence(value, variant) {
  if (!value.includes('→')) return null;
  const parts = value.split('→').map((part) => part.trim()).filter(Boolean);
  if (parts.length < 2) return null;
  if (variant % 2 === 0) return [...parts].reverse().join('→');
  const copy = [...parts];
  [copy[0], copy[1]] = [copy[1], copy[0]];
  return copy.join('→');
}

const SEMANTIC_REPLACEMENTS = [
    ['公开', '封闭'],
    ['公平', '失衡'],
    ['高压', '低压'],
    ['直接', '间接'],
    ['增加', '减少'],
    ['提高', '降低'],
    ['上升', '下降'],
    ['运行', '停运'],
    ['正常', '异常'],
    ['可以', '不可以'],
    ['能够', '不能'],
    ['需要', '不需要'],
    ['公众', '少数内部人员'],
    ['特定', '所有'],
    ['综合', '单一'],
    ['实时', '定期'],
    ['主动', '被动'],
    ['统一', '分散'],
    ['主要', '次要'],
    ['重要', '一般'],
    ['关键', '辅助'],
    ['集中', '分散'],
    ['自然灾害', '日常平稳运行'],
    ['岁末年初', '年中常态'],
    ['节假日', '普通工作日'],
    ['政治与社会活动', '内部例行活动'],
    ['党委书记', '普通员工'],
    ['党委副书记', '外部媒体人员'],
    ['分管领导', '临时访客'],
    ['国际环境', '自然环境'],
    ['国内环境', '办公环境'],
  ];

function syntheticWrongCandidates(value) {
  const result = [];
  const add = (candidate) => {
    if (candidate && candidate !== value && !result.includes(candidate)) result.push(candidate);
  };
  add(mutateComparison(value));
  for (let variant = 0; variant < 3; variant += 1) add(mutateNumber(value, variant));
  for (let variant = 0; variant < 2; variant += 1) add(mutateSequence(value, variant));
  for (const [from, to] of SEMANTIC_REPLACEMENTS) {
    add(replaceOnce(value, from, to));
  }
  return result;
}

function candidateFragments(point) {
  const parsed = parsePoint(point);
  return parsed.correctTexts
    .map(withoutTerminal)
    .filter((value) => value.length >= 2 && value.length <= 46);
}

function fallbackDistractors(point, index, points, excluded, needed, allowSameGroup) {
  const result = [];
  const addCandidate = (candidatePoint) => {
    if (!candidatePoint || candidatePoint.text === point.text) return;
    const sameContext = candidatePoint.category === point.category
      && candidatePoint.section === point.section
      && candidatePoint.group === point.group;
    if (sameContext && !allowSameGroup) return;
    for (const candidate of candidateFragments(candidatePoint)) {
      if (excluded.has(candidate) || result.includes(candidate)) continue;
      result.push(candidate);
      if (result.length === needed) return;
    }
  };

  const targetLength = candidateFragments(point)[0]?.length ?? point.text.length;
  const ranked = points
    .map((candidatePoint, candidateIndex) => {
      const fragmentLength = candidateFragments(candidatePoint)[0]?.length ?? candidatePoint.text.length;
      const categoryScore = candidatePoint.category === point.category ? 1000 : 0;
      const sectionScore = candidatePoint.section === point.section ? 220 : 0;
      const groupScore = allowSameGroup && candidatePoint.group && candidatePoint.group === point.group ? 900 : 0;
      const distancePenalty = Math.min(Math.abs(candidateIndex - index), 120);
      const lengthPenalty = Math.min(Math.abs(fragmentLength - targetLength) * 3, 180);
      return { candidatePoint, score: categoryScore + sectionScore + groupScore - distancePenalty - lengthPenalty };
    })
    .sort((left, right) => right.score - left.score);

  for (const { candidatePoint } of ranked) {
    addCandidate(candidatePoint);
    if (result.length === needed) return result;
  }
  return result;
}

function shuffleOptions(correctTexts, wrongTexts, seed) {
  const entries = [
    ...correctTexts.map((text) => ({ text, correct: true })),
    ...wrongTexts.map((text) => ({ text, correct: false })),
  ];
  const shift = seed % entries.length;
  const rotated = [...entries.slice(shift), ...entries.slice(0, shift)];
  if (seed % 2 === 1) [rotated[0], rotated[1]] = [rotated[1], rotated[0]];
  return rotated;
}

function groupOverride(point, index) {
  const context = point.group || point.section;
  if (context === '公司舆情六大高发节点') {
    const bank = ['日常业务平稳期', '舆情影响完全消退后', '无公众关注的内部例行会议期间', '常规内部资料整理期'];
    return {
      prompt: '下列哪项属于公司舆情六大高发节点？',
      correctTexts: [point.text],
      wrongTexts: [bank[index % bank.length], bank[(index + 1) % bank.length], bank[(index + 2) % bank.length]],
    };
  }
  if (context === '典型作业流程三阶段') {
    return {
      prompt: '下列哪项属于变电检修典型作业流程？',
      correctTexts: [point.text],
      wrongTexts: ['电价方案审批', '客户投诉回访', '发电计划申报'],
    };
  }
  if (context === '新型电力系统发展三大原因') {
    return {
      prompt: '新型电力系统发展的原因包括：',
      correctTexts: [point.text],
      wrongTexts: ['纸质流程数量增加', '办公场所面积扩大', '用户档案数量减少'],
    };
  }
  if (context === '高压开关柜五防装置' && /^防止/.test(point.text)) {
    return {
      prompt: '高压开关柜“五防”要求包括：',
      correctTexts: [point.text],
      wrongTexts: ['允许带负荷操作隔离开关', '允许带地线送电', '允许人员进入带电间隔'],
    };
  }
  if (context === '常见业扩业务介绍' && /^(?:低压客户业扩办理|高压客户业扩办理|新能源业务)$/.test(point.text)) {
    return {
      prompt: '常见业扩业务包括：',
      correctTexts: [point.text],
      wrongTexts: ['设备检修票办理', '电网事故调度', '输电线路巡视'],
    };
  }
  return null;
}

export function buildExamQuestion(point, index, points) {
  const id = `kp${String(index + 1).padStart(3, '0')}`;
  const override = manualOverrides[id] ?? manualOverridesByText.get(point.text) ?? groupOverride(point, index);
  const parsed = override ? { mode: 'manual', ...override } : parsePoint(point);
  const correctTexts = [...new Set(parsed.correctTexts.map(withoutTerminal).filter(Boolean))].slice(0, 3);
  if (!correctTexts.length) throw new Error(`${id} has no correct option text`);

  const neededWrong = 4 - correctTexts.length;
  const excluded = new Set(correctTexts);
  const wrongTexts = [];
  for (const candidate of override?.wrongTexts ?? []) {
    if (wrongTexts.length === neededWrong) break;
    if (!excluded.has(candidate) && !wrongTexts.includes(candidate) && !point.text.includes(candidate)) {
      wrongTexts.push(candidate);
    }
  }
  for (const source of correctTexts) {
    for (const candidate of syntheticWrongCandidates(source)) {
      if (wrongTexts.length === neededWrong) break;
      if (!candidate || excluded.has(candidate) || wrongTexts.includes(candidate)) continue;
      if (point.text.includes(candidate)) continue;
      wrongTexts.push(candidate);
    }
    if (wrongTexts.length === neededWrong) break;
  }
  if (wrongTexts.length < neededWrong) {
    wrongTexts.push(...fallbackDistractors(
      point,
      index,
      points,
      new Set([...excluded, ...wrongTexts]),
      neededWrong - wrongTexts.length,
      parsed.mode !== 'membership',
    ));
  }
  if (wrongTexts.length !== neededWrong) {
    throw new Error(`${id} could not build ${neededWrong} unique distractors`);
  }

  const entries = shuffleOptions(correctTexts, wrongTexts, index);
  return {
    id,
    category: point.category,
    page: point.page,
    type: correctTexts.length > 1 ? 'multiple' : 'single',
    prompt: promptOverrides.get(id) ?? parsed.prompt,
    options: entries.map((entry, optionIndex) => ({ key: OPTION_KEYS[optionIndex], text: tidyOptionText(entry.text) })),
    correct: entries.flatMap((entry, optionIndex) => entry.correct ? [OPTION_KEYS[optionIndex]] : []),
    answerText: point.text,
  };
}

export function isGenericKnowledgePrompt(prompt) {
  return /资料原文|知识板块|关于“[^”]+”，以下哪项与/.test(prompt);
}
