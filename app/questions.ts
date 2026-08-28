export type Question = {
  id: string;
  category: string;
  page: number;
  type: 'single' | 'multiple';
  prompt: string;
  options: { key: string; text: string }[];
  correct: string[];
  answerText: string;
};

export const questions: Question[] = [
  {
    "id": "q001",
    "category": "舆情素养",
    "page": 2,
    "type": "single",
    "prompt": "把简单的网友吐槽、个别负面评论当成严重舆情，这种“不是舆情当舆情”的误区属于",
    "options": [
      {
        "key": "A",
        "text": "显微镜里看舆情"
      },
      {
        "key": "B",
        "text": "放大镜里看舆情"
      },
      {
        "key": "C",
        "text": "望远镜里看舆情"
      },
      {
        "key": "D",
        "text": "哈哈镜里看舆情"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "D. 哈哈镜里看舆情"
  },
  {
    "id": "q002",
    "category": "舆情素养",
    "page": 2,
    "type": "multiple",
    "prompt": "属于舆情复盘三大环节的有",
    "options": [
      {
        "key": "A",
        "text": "风险研判复盘"
      },
      {
        "key": "B",
        "text": "信息核查复盘"
      },
      {
        "key": "C",
        "text": "舆情处置复盘"
      },
      {
        "key": "D",
        "text": "员工绩效考核复盘"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 风险研判复盘；B. 信息核查复盘；C. 舆情处置复盘"
  },
  {
    "id": "q003",
    "category": "舆情素养",
    "page": 2,
    "type": "multiple",
    "prompt": "舆情事件结束后，需围绕哪几个环节进行复盘总结？",
    "options": [
      {
        "key": "A",
        "text": "信息核查"
      },
      {
        "key": "B",
        "text": "风险研判"
      },
      {
        "key": "C",
        "text": "舆情处置"
      },
      {
        "key": "D",
        "text": "责任追究"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 信息核查；B. 风险研判；C. 舆情处置"
  },
  {
    "id": "q004",
    "category": "用电检查",
    "page": 3,
    "type": "single",
    "prompt": "新《供电营业规则》将停电或限电原因消除后恢复供电的时间由三天压缩至多少？",
    "options": [
      {
        "key": "A",
        "text": "12小时"
      },
      {
        "key": "B",
        "text": "24小时"
      },
      {
        "key": "C",
        "text": "36小时"
      },
      {
        "key": "D",
        "text": "48小时"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 24小时"
  },
  {
    "id": "q005",
    "category": "用电检查",
    "page": 6,
    "type": "single",
    "prompt": "用电检查人员可以越级、超区开展检查工作",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q006",
    "category": "变电运行",
    "page": 11,
    "type": "single",
    "prompt": "下列哪项不属于变电站的主要功能？",
    "options": [
      {
        "key": "A",
        "text": "电压转换"
      },
      {
        "key": "B",
        "text": "电能分配"
      },
      {
        "key": "C",
        "text": "电能生产"
      },
      {
        "key": "D",
        "text": "系统保护"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "C. 电能生产"
  },
  {
    "id": "q007",
    "category": "变电运行",
    "page": 13,
    "type": "single",
    "prompt": "隔离开关（刀闸）没有灭弧装置，不能带负荷拉合",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "PDF原文判定：正确"
  },
  {
    "id": "q008",
    "category": "变电运行",
    "page": 13,
    "type": "single",
    "prompt": "雷雨过后检查防雷装置时，在线监测仪的泄漏电流应满足？",
    "options": [
      {
        "key": "A",
        "text": "小于1mA且大于0mA"
      },
      {
        "key": "B",
        "text": "大于1mA"
      },
      {
        "key": "C",
        "text": "等于0mA"
      },
      {
        "key": "D",
        "text": "无要求"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "A. 小于1mA且大于0mA"
  },
  {
    "id": "q009",
    "category": "变电运行",
    "page": 13,
    "type": "multiple",
    "prompt": "以下属于一次设备的是",
    "options": [
      {
        "key": "A",
        "text": "电容器"
      },
      {
        "key": "B",
        "text": "继电器"
      },
      {
        "key": "C",
        "text": "母线"
      },
      {
        "key": "D",
        "text": "避雷针"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "A. 电容器；C. 母线；D. 避雷针"
  },
  {
    "id": "q010",
    "category": "配电运行",
    "page": 16,
    "type": "single",
    "prompt": "“10kV属于高压”",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误（是中压）"
  },
  {
    "id": "q011",
    "category": "配电运行",
    "page": 16,
    "type": "multiple",
    "prompt": "以下属于高压的等级是：",
    "options": [
      {
        "key": "A",
        "text": "220kV"
      },
      {
        "key": "B",
        "text": "110kV"
      },
      {
        "key": "C",
        "text": "35kV"
      },
      {
        "key": "D",
        "text": "10kV"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 220kV；B. 110kV；C. 35kV"
  },
  {
    "id": "q012",
    "category": "配电运行",
    "page": 16,
    "type": "single",
    "prompt": "单辐射型配电网的设备利用率为？",
    "options": [
      {
        "key": "A",
        "text": "50%"
      },
      {
        "key": "B",
        "text": "67%"
      },
      {
        "key": "C",
        "text": "75%"
      },
      {
        "key": "D",
        "text": "100%"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "D. 100%"
  },
  {
    "id": "q013",
    "category": "配电运行",
    "page": 16,
    "type": "multiple",
    "prompt": "以下哪些接线方式能满足N-1安全准则？",
    "options": [
      {
        "key": "A",
        "text": "单环网型"
      },
      {
        "key": "B",
        "text": "双环网型"
      },
      {
        "key": "C",
        "text": "辐射型"
      },
      {
        "key": "D",
        "text": "三供一备型"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "A. 单环网型；B. 双环网型；D. 三供一备型"
  },
  {
    "id": "q014",
    "category": "配电运行",
    "page": 16,
    "type": "single",
    "prompt": "10kv配电网一般采用以配电变压器为中心的辐射型接线",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误（应该是低压配电网）"
  },
  {
    "id": "q015",
    "category": "配电运行",
    "page": 16,
    "type": "single",
    "prompt": "双环网型接线在满足N-1情况下设备利用率为75%",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "PDF原文判定：正确"
  },
  {
    "id": "q016",
    "category": "配电运行",
    "page": 16,
    "type": "multiple",
    "prompt": "满足N-1安全准则的有：",
    "options": [
      {
        "key": "A",
        "text": "单环网"
      },
      {
        "key": "B",
        "text": "双环网"
      },
      {
        "key": "C",
        "text": "两供一备"
      },
      {
        "key": "D",
        "text": "三供一备"
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerText": "A. 单环网；B. 双环网；C. 两供一备；D. 三供一备"
  },
  {
    "id": "q017",
    "category": "配电运行",
    "page": 17,
    "type": "multiple",
    "prompt": "10kV配电网中性点一般采用以下哪种接地方式？",
    "options": [
      {
        "key": "A",
        "text": "经小电阻接地"
      },
      {
        "key": "B",
        "text": "经消弧线圈接地"
      },
      {
        "key": "C",
        "text": "直接接地"
      },
      {
        "key": "D",
        "text": "以上都不是"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "answerText": "A. 经小电阻接地；B. 经消弧线圈接地"
  },
  {
    "id": "q018",
    "category": "配电运行",
    "page": 17,
    "type": "single",
    "prompt": "低压配电网中性点接地一般采用直接接地方式",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "PDF原文判定：正确"
  },
  {
    "id": "q019",
    "category": "配电运行",
    "page": 18,
    "type": "single",
    "prompt": "超过多少公里以上的输电线路需要进行导线换位？",
    "options": [
      {
        "key": "A",
        "text": "5km"
      },
      {
        "key": "B",
        "text": "10km"
      },
      {
        "key": "C",
        "text": "15km"
      },
      {
        "key": "D",
        "text": "20km"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 10km"
  },
  {
    "id": "q020",
    "category": "配电运行",
    "page": 18,
    "type": "multiple",
    "prompt": "耐张杆塔正常情况下主要承受什么荷载？",
    "options": [
      {
        "key": "A",
        "text": "不平衡张力"
      },
      {
        "key": "B",
        "text": "断线张力"
      },
      {
        "key": "C",
        "text": "垂直荷载和风荷载"
      },
      {
        "key": "D",
        "text": "一侧导线张力"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 不平衡张力；B. 断线张力；C. 垂直荷载和风荷载"
  },
  {
    "id": "q021",
    "category": "配电运行",
    "page": 18,
    "type": "single",
    "prompt": "导线是用于传导电流、输送电能的元件，通过什么固定在杆塔上？",
    "options": [
      {
        "key": "A",
        "text": "绝缘子"
      },
      {
        "key": "B",
        "text": "金具"
      },
      {
        "key": "C",
        "text": "横担"
      },
      {
        "key": "D",
        "text": "拉线"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "A. 绝缘子"
  },
  {
    "id": "q022",
    "category": "配电运行",
    "page": 18,
    "type": "single",
    "prompt": "加强型钢芯铝绞线（LGJJ）适用于什么地区？",
    "options": [
      {
        "key": "A",
        "text": "一般地区"
      },
      {
        "key": "B",
        "text": "重冰区和大跨越地段"
      },
      {
        "key": "C",
        "text": "城市密集区"
      },
      {
        "key": "D",
        "text": "低压线路"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 重冰区和大跨越地段"
  },
  {
    "id": "q023",
    "category": "配电运行",
    "page": 19,
    "type": "single",
    "prompt": "普通拉线一般不用于以下哪种杆塔？",
    "options": [
      {
        "key": "A",
        "text": "终端杆"
      },
      {
        "key": "B",
        "text": "转角杆"
      },
      {
        "key": "C",
        "text": "直线杆"
      },
      {
        "key": "D",
        "text": "耐张杆"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "C. 直线杆"
  },
  {
    "id": "q024",
    "category": "配电运行",
    "page": 19,
    "type": "single",
    "prompt": "中压配电网通常使用哪种绝缘电力电缆？",
    "options": [
      {
        "key": "A",
        "text": "油纸绝缘"
      },
      {
        "key": "B",
        "text": "交联聚乙烯绝缘"
      },
      {
        "key": "C",
        "text": "聚氯乙烯绝缘"
      },
      {
        "key": "D",
        "text": "橡胶绝缘"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 交联聚乙烯绝缘"
  },
  {
    "id": "q025",
    "category": "配电运行",
    "page": 19,
    "type": "single",
    "prompt": "电缆接头通常称为电缆终端头",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q026",
    "category": "配电运行",
    "page": 19,
    "type": "multiple",
    "prompt": "以下属于电缆线路优点的有？",
    "options": [
      {
        "key": "A",
        "text": "安全可靠"
      },
      {
        "key": "B",
        "text": "不占空间"
      },
      {
        "key": "C",
        "text": "造价低"
      },
      {
        "key": "D",
        "text": "不受外界影响"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "A. 安全可靠；B. 不占空间；D. 不受外界影响"
  },
  {
    "id": "q027",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "目前新安装的三相配电变压器不要求以下哪种型号？",
    "options": [
      {
        "key": "A",
        "text": "S11"
      },
      {
        "key": "B",
        "text": "S13"
      },
      {
        "key": "C",
        "text": "S7"
      },
      {
        "key": "D",
        "text": "SH15"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "C. S7"
  },
  {
    "id": "q028",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "配电系统中C相母排涂什么颜色？",
    "options": [
      {
        "key": "A",
        "text": "黑色"
      },
      {
        "key": "B",
        "text": "红色"
      },
      {
        "key": "C",
        "text": "绿色"
      },
      {
        "key": "D",
        "text": "黄色"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 红色"
  },
  {
    "id": "q029",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "隔离开关的主要特点是？",
    "options": [
      {
        "key": "A",
        "text": "有灭弧能力"
      },
      {
        "key": "B",
        "text": "无灭弧能力"
      },
      {
        "key": "C",
        "text": "能切断短路电流"
      },
      {
        "key": "D",
        "text": "能带负荷操作"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 无灭弧能力"
  },
  {
    "id": "q030",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "隔离开关可以带负荷电流分闸",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q031",
    "category": "配电运行",
    "page": 22,
    "type": "single",
    "prompt": "高压跌落式熔断器主要用于多少kV配电线路？",
    "options": [
      {
        "key": "A",
        "text": "0.4kV"
      },
      {
        "key": "B",
        "text": "10kV"
      },
      {
        "key": "C",
        "text": "35kV"
      },
      {
        "key": "D",
        "text": "110kV"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 10kV"
  },
  {
    "id": "q032",
    "category": "配电运行",
    "page": 22,
    "type": "multiple",
    "prompt": "以下关于负荷开关与断路器的区别说法正确的有？",
    "options": [
      {
        "key": "A",
        "text": "负荷开关主要开断负荷电流"
      },
      {
        "key": "B",
        "text": "断路器主要开断短路电流"
      },
      {
        "key": "C",
        "text": "负荷开关能切断短路电流"
      },
      {
        "key": "D",
        "text": "断路器有完善灭弧装置"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "A. 负荷开关主要开断负荷电流；B. 断路器主要开断短路电流；D. 断路器有完善灭弧装置"
  },
  {
    "id": "q033",
    "category": "配电运行",
    "page": 22,
    "type": "single",
    "prompt": "高压开关柜“五防”不包括以下哪项？",
    "options": [
      {
        "key": "A",
        "text": "防止误分误合断路器"
      },
      {
        "key": "B",
        "text": "防止带负荷分合隔离开关"
      },
      {
        "key": "C",
        "text": "防止过电压"
      },
      {
        "key": "D",
        "text": "防止误入带电间隔"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "C. 防止过电压"
  },
  {
    "id": "q034",
    "category": "配电运行",
    "page": 22,
    "type": "single",
    "prompt": "目前中压开关柜主要以微机防误闭锁装置为主",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q035",
    "category": "配电运行",
    "page": 22,
    "type": "single",
    "prompt": "电流互感器使用时二次侧不得短路",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q036",
    "category": "配电运行",
    "page": 22,
    "type": "multiple",
    "prompt": "配网自动化系统的通信通道主要有？",
    "options": [
      {
        "key": "A",
        "text": "光纤"
      },
      {
        "key": "B",
        "text": "载波"
      },
      {
        "key": "C",
        "text": "无线"
      },
      {
        "key": "D",
        "text": "电缆"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 光纤；B. 载波；C. 无线"
  },
  {
    "id": "q037",
    "category": "配电运行",
    "page": 22,
    "type": "multiple",
    "prompt": "故障指示器按实现功能可分为？",
    "options": [
      {
        "key": "A",
        "text": "就地型"
      },
      {
        "key": "B",
        "text": "远传型"
      },
      {
        "key": "C",
        "text": "智能型"
      },
      {
        "key": "D",
        "text": "自动型"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 就地型；B. 远传型；C. 智能型"
  },
  {
    "id": "q038",
    "category": "配电运行",
    "page": 22,
    "type": "single",
    "prompt": "配电自动化的核心是？",
    "options": [
      {
        "key": "A",
        "text": "一次网架"
      },
      {
        "key": "B",
        "text": "配电自动化系统"
      },
      {
        "key": "C",
        "text": "通信通道"
      },
      {
        "key": "D",
        "text": "终端设备"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 配电自动化系统"
  },
  {
    "id": "q039",
    "category": "新型电力系统",
    "page": 24,
    "type": "multiple",
    "prompt": "以下属于新兴颠覆性负荷类型的有？",
    "options": [
      {
        "key": "A",
        "text": "电动汽车充电负荷"
      },
      {
        "key": "B",
        "text": "数据中心负荷"
      },
      {
        "key": "C",
        "text": "氢能制备负荷"
      },
      {
        "key": "D",
        "text": "工业照明负荷"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 电动汽车充电负荷；B. 数据中心负荷；C. 氢能制备负荷"
  },
  {
    "id": "q040",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "以下哪项不是新型电力系统的主要特征？",
    "options": [
      {
        "key": "A",
        "text": "可靠"
      },
      {
        "key": "B",
        "text": "高效"
      },
      {
        "key": "C",
        "text": "集中"
      },
      {
        "key": "D",
        "text": "洁净"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "C. 集中"
  },
  {
    "id": "q041",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "中国承诺在哪一年实现碳达峰？",
    "options": [
      {
        "key": "A",
        "text": "2025年"
      },
      {
        "key": "B",
        "text": "2030年"
      },
      {
        "key": "C",
        "text": "2035年"
      },
      {
        "key": "D",
        "text": "2060年"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 2030年"
  },
  {
    "id": "q042",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "我国碳排放量全球第一，人均排放量也是全球第一",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q043",
    "category": "新型电力系统",
    "page": 26,
    "type": "multiple",
    "prompt": "新型电力系统发展面临的挑战包括哪些方面？",
    "options": [
      {
        "key": "A",
        "text": "电力供应方面"
      },
      {
        "key": "B",
        "text": "系统安全方面"
      },
      {
        "key": "C",
        "text": "电力成本方面"
      },
      {
        "key": "D",
        "text": "人力资源方面"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 电力供应方面；B. 系统安全方面；C. 电力成本方面"
  },
  {
    "id": "q044",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "风光电源的先天性“缺陷”主要指？",
    "options": [
      {
        "key": "A",
        "text": "发电成本高"
      },
      {
        "key": "B",
        "text": "间歇性和波动性"
      },
      {
        "key": "C",
        "text": "占地面积大"
      },
      {
        "key": "D",
        "text": "设备寿命短"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 间歇性和波动性"
  },
  {
    "id": "q045",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "风光发电因为来自大自然，所以其实际供电成本一定很低",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q046",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "预计2060年电力占终端用能比重达到多少？",
    "options": [
      {
        "key": "A",
        "text": "50%"
      },
      {
        "key": "B",
        "text": "60%"
      },
      {
        "key": "C",
        "text": "70%"
      },
      {
        "key": "D",
        "text": "80%"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "D. 80%"
  },
  {
    "id": "q047",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "2060年电源侧将完全淘汰火电，全部使用清洁能源",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q048",
    "category": "新型电力系统",
    "page": 27,
    "type": "multiple",
    "prompt": "数字电网与传统电网的区别体现在？",
    "options": [
      {
        "key": "A",
        "text": "预测能力"
      },
      {
        "key": "B",
        "text": "实时性"
      },
      {
        "key": "C",
        "text": "自愈能力"
      },
      {
        "key": "D",
        "text": "电压等级更高"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 预测能力；B. 实时性；C. 自愈能力"
  },
  {
    "id": "q049",
    "category": "新型电力系统",
    "page": 27,
    "type": "single",
    "prompt": "智能电网更侧重于基础设施建设，而数字电网更侧重于功能应用",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误（正好相反）"
  },
  {
    "id": "q050",
    "category": "新型电力系统",
    "page": 27,
    "type": "multiple",
    "prompt": "接入智能电网的新型负荷成员有哪些？",
    "options": [
      {
        "key": "A",
        "text": "电动汽车"
      },
      {
        "key": "B",
        "text": "空调负荷"
      },
      {
        "key": "C",
        "text": "智能电表"
      },
      {
        "key": "D",
        "text": "负荷调控点"
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerText": "A. 电动汽车；B. 空调负荷；C. 智能电表；D. 负荷调控点"
  },
  {
    "id": "q051",
    "category": "新型电力系统",
    "page": 27,
    "type": "multiple",
    "prompt": "新型电力系统关键技术有哪些？",
    "options": [
      {
        "key": "A",
        "text": "储能技术"
      },
      {
        "key": "B",
        "text": "电力电子技术"
      },
      {
        "key": "C",
        "text": "信息技术与通信技术"
      },
      {
        "key": "D",
        "text": "电压调控技术"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 储能技术；B. 电力电子技术；C. 信息技术与通信技术"
  },
  {
    "id": "q052",
    "category": "新型电力系统",
    "page": 27,
    "type": "single",
    "prompt": "微电网可以完全脱离大电网独立运行，不需要与大电网配合",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q053",
    "category": "新型电力系统",
    "page": 28,
    "type": "multiple",
    "prompt": "分布式电源的发展趋势包括？",
    "options": [
      {
        "key": "A",
        "text": "规模不断扩大"
      },
      {
        "key": "B",
        "text": "从用户侧光伏向分布式风电发展"
      },
      {
        "key": "C",
        "text": "向分布式生物质能发电发展"
      },
      {
        "key": "D",
        "text": "完全取代集中式电源"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 规模不断扩大；B. 从用户侧光伏向分布式风电发展；C. 向分布式生物质能发电发展"
  },
  {
    "id": "q054",
    "category": "新型电力系统",
    "page": 28,
    "type": "multiple",
    "prompt": "电力市场机制建设包括？",
    "options": [
      {
        "key": "A",
        "text": "电力现货市场"
      },
      {
        "key": "B",
        "text": "辅助服务市场"
      },
      {
        "key": "C",
        "text": "煤炭交易市场"
      },
      {
        "key": "D",
        "text": "碳交易市场"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "answerText": "A. 电力现货市场；B. 辅助服务市场"
  },
  {
    "id": "q055",
    "category": "数字化与人工智能",
    "page": 31,
    "type": "single",
    "prompt": "数字化与数智化的本质区别在于是否使用了AI技术",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q056",
    "category": "数字化与人工智能",
    "page": 31,
    "type": "single",
    "prompt": "数智化转型应该先完成数字化，再推进数智化，两者是串行关系",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q057",
    "category": "变电检修",
    "page": 59,
    "type": "multiple",
    "prompt": "关于检修类别包含关系，说法正确的有？",
    "options": [
      {
        "key": "A",
        "text": "A类包括所有B类项目"
      },
      {
        "key": "B",
        "text": "B类包含C类项目"
      },
      {
        "key": "C",
        "text": "C类包括所有B类项目"
      },
      {
        "key": "D",
        "text": "A类是整体停电检修"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "A. A类包括所有B类项目；B. B类包含C类项目；D. A类是整体停电检修"
  },
  {
    "id": "q058",
    "category": "变电检修",
    "page": 59,
    "type": "single",
    "prompt": "设备需要停电进行的整体检查、维修、更换、试验工作，属于哪类检修？",
    "options": [
      {
        "key": "A",
        "text": "A类"
      },
      {
        "key": "B",
        "text": "B1类"
      },
      {
        "key": "C",
        "text": "B2类"
      },
      {
        "key": "D",
        "text": "C类"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "A. A类"
  },
  {
    "id": "q059",
    "category": "变电检修",
    "page": 60,
    "type": "multiple",
    "prompt": "作业实施过程包括以下哪些环节？",
    "options": [
      {
        "key": "A",
        "text": "办理工作票"
      },
      {
        "key": "B",
        "text": "安全交底"
      },
      {
        "key": "C",
        "text": "作业实施"
      },
      {
        "key": "D",
        "text": "归档"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 办理工作票；B. 安全交底；C. 作业实施"
  },
  {
    "id": "q060",
    "category": "变电检修",
    "page": 60,
    "type": "single",
    "prompt": "高压断路器在电路发生短路故障时，能在多长时间内自动跳闸？",
    "options": [
      {
        "key": "A",
        "text": "几秒内"
      },
      {
        "key": "B",
        "text": "几十毫秒内"
      },
      {
        "key": "C",
        "text": "几分钟内"
      },
      {
        "key": "D",
        "text": "几十秒内"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 几十毫秒内"
  },
  {
    "id": "q061",
    "category": "变电检修",
    "page": 60,
    "type": "single",
    "prompt": "真空断路器因为体积小、灭弧能力强，是72.5kV及以上超高压输电网的核心设备",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q062",
    "category": "变电检修",
    "page": 61,
    "type": "single",
    "prompt": "隔离开关（刀闸）没有灭弧装置，不能带负荷拉合",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "PDF原文判定：正确"
  },
  {
    "id": "q063",
    "category": "变电检修",
    "page": 61,
    "type": "multiple",
    "prompt": "隔离开关的作用包括？",
    "options": [
      {
        "key": "A",
        "text": "隔离电源"
      },
      {
        "key": "B",
        "text": "倒换线路或母线"
      },
      {
        "key": "C",
        "text": "关合与开断小电流电路"
      },
      {
        "key": "D",
        "text": "切断短路电流"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 隔离电源；B. 倒换线路或母线；C. 关合与开断小电流电路"
  },
  {
    "id": "q064",
    "category": "变电检修",
    "page": 61,
    "type": "single",
    "prompt": "变压器原边和副边绕组之间有电的直接接触",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误（原、副边电气隔离）"
  },
  {
    "id": "q065",
    "category": "变电检修",
    "page": 62,
    "type": "single",
    "prompt": "电流互感器（CT）二次侧输出的标准电流通常是",
    "options": [
      {
        "key": "A",
        "text": "100V"
      },
      {
        "key": "B",
        "text": "220V"
      },
      {
        "key": "C",
        "text": "5A或1A"
      },
      {
        "key": "D",
        "text": "10A"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "C. 5A或1A"
  },
  {
    "id": "q066",
    "category": "变电检修",
    "page": 62,
    "type": "single",
    "prompt": "电压互感器二次侧的标准输出电压通常为？",
    "options": [
      {
        "key": "A",
        "text": "5V"
      },
      {
        "key": "B",
        "text": "24V"
      },
      {
        "key": "C",
        "text": "100V"
      },
      {
        "key": "D",
        "text": "220V"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "C. 100V"
  },
  {
    "id": "q067",
    "category": "招标采购",
    "page": 64,
    "type": "single",
    "prompt": "下列哪项不属于招标投标基本原则？",
    "options": [
      {
        "key": "A",
        "text": "公开"
      },
      {
        "key": "B",
        "text": "公平"
      },
      {
        "key": "C",
        "text": "效益优先"
      },
      {
        "key": "D",
        "text": "诚实信用"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "C. 效益优先"
  },
  {
    "id": "q068",
    "category": "招标采购",
    "page": 64,
    "type": "single",
    "prompt": "下列哪些情形可以不进行招标？",
    "options": [
      {
        "key": "A",
        "text": "需要采用不可替代的专利"
      },
      {
        "key": "B",
        "text": "涉及抢险救灾"
      },
      {
        "key": "C",
        "text": "项目金额低于50万"
      },
      {
        "key": "D",
        "text": "采购人依法能够自行建设"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "C. 项目金额低于50万"
  },
  {
    "id": "q069",
    "category": "招标采购",
    "page": 65,
    "type": "single",
    "prompt": "投标截止后投标人撤销投标文件的，招标人必须退还保证金",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q070",
    "category": "招标采购",
    "page": 65,
    "type": "multiple",
    "prompt": "下列哪些情形视为串通投标？",
    "options": [
      {
        "key": "A",
        "text": "投标文件由同一单位编制"
      },
      {
        "key": "B",
        "text": "投标保证金从同一账户转出"
      },
      {
        "key": "C",
        "text": "投标文件异常一致"
      },
      {
        "key": "D",
        "text": "投标人之间协商报价"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "A. 投标文件由同一单位编制；B. 投标保证金从同一账户转出；C. 投标文件异常一致"
  },
  {
    "id": "q071",
    "category": "招标采购",
    "page": 67,
    "type": "single",
    "prompt": "施工单项合同估算价在多少以上必须招标？",
    "options": [
      {
        "key": "A",
        "text": "100万"
      },
      {
        "key": "B",
        "text": "200万"
      },
      {
        "key": "C",
        "text": "300万"
      },
      {
        "key": "D",
        "text": "400万"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "D. 400万"
  },
  {
    "id": "q072",
    "category": "发电技术",
    "page": 70,
    "type": "single",
    "prompt": "在电力系统的组成环节中，利用变压设备进行电压升降转换的环节是",
    "options": [
      {
        "key": "A",
        "text": "输电"
      },
      {
        "key": "B",
        "text": "变电"
      },
      {
        "key": "C",
        "text": "配电"
      },
      {
        "key": "D",
        "text": "用电"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 变电"
  },
  {
    "id": "q073",
    "category": "发电技术",
    "page": 70,
    "type": "single",
    "prompt": "在所有常规发电方式中，燃煤火电的能量转换效率是最高的",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q074",
    "category": "发电技术",
    "page": 71,
    "type": "single",
    "prompt": "葛洲坝水电站属于哪种类型？",
    "options": [
      {
        "key": "A",
        "text": "坝后式"
      },
      {
        "key": "B",
        "text": "河床式"
      },
      {
        "key": "C",
        "text": "引水式"
      },
      {
        "key": "D",
        "text": "混合式"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 河床式"
  },
  {
    "id": "q075",
    "category": "发电技术",
    "page": 71,
    "type": "single",
    "prompt": "大型水电站的发电效率范围是？",
    "options": [
      {
        "key": "A",
        "text": "30~48%"
      },
      {
        "key": "B",
        "text": "50~63%"
      },
      {
        "key": "C",
        "text": "70~85%"
      },
      {
        "key": "D",
        "text": "80~90%"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "D. 80~90%"
  },
  {
    "id": "q076",
    "category": "发电技术",
    "page": 71,
    "type": "single",
    "prompt": "水轮机分为反击式和冲击式两大类",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "PDF原文判定：正确"
  },
  {
    "id": "q077",
    "category": "发电技术",
    "page": 71,
    "type": "single",
    "prompt": "核聚变是当前核电站的主要发电方式",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "PDF原文判定：错误"
  },
  {
    "id": "q078",
    "category": "发电技术",
    "page": 72,
    "type": "single",
    "prompt": "太阳能光伏发电的核心原理是？",
    "options": [
      {
        "key": "A",
        "text": "电磁感应"
      },
      {
        "key": "B",
        "text": "光生伏特效应"
      },
      {
        "key": "C",
        "text": "热电效应"
      },
      {
        "key": "D",
        "text": "压电效应"
      }
    ],
    "correct": [
      "B"
    ],
    "answerText": "B. 光生伏特效应"
  },
  {
    "id": "q079",
    "category": "发电技术",
    "page": 72,
    "type": "single",
    "prompt": "三种太阳能电池中转化效率最高的是？",
    "options": [
      {
        "key": "A",
        "text": "多晶硅"
      },
      {
        "key": "B",
        "text": "非晶态硅"
      },
      {
        "key": "C",
        "text": "单晶硅"
      },
      {
        "key": "D",
        "text": "钙钛矿"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "C. 单晶硅"
  },
  {
    "id": "q080",
    "category": "储能技术",
    "page": 72,
    "type": "multiple",
    "prompt": "下列哪些属于物理储能技术？",
    "options": [
      {
        "key": "A",
        "text": "抽水蓄能"
      },
      {
        "key": "B",
        "text": "压缩空气储能"
      },
      {
        "key": "C",
        "text": "锂离子电池"
      },
      {
        "key": "D",
        "text": "飞轮储能"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "A. 抽水蓄能；B. 压缩空气储能；D. 飞轮储能"
  },
  {
    "id": "kp001",
    "category": "舆情素养",
    "page": 1,
    "type": "single",
    "prompt": "舆情是指：",
    "options": [
      {
        "key": "A",
        "text": "在一定社会情境和传播环境中，公众围绕特定事件、议题或组织所形成的意见表达、情绪态度及其传播状态的综合体现"
      },
      {
        "key": "B",
        "text": "在一定社会情境和传播环境中，少数内部人员围绕特定事件、议题或组织所形成的意见表达、情绪态度及其传播状态的综合体现"
      },
      {
        "key": "C",
        "text": "在一定社会情境和传播环境中，公众围绕所有事件、议题或组织所形成的意见表达、情绪态度及其传播状态的综合体现"
      },
      {
        "key": "D",
        "text": "在一定社会情境和传播环境中，公众围绕特定事件、议题或组织所形成的意见表达、情绪态度及其传播状态的单一体现"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "舆情定义：在一定社会情境和传播环境中，公众围绕特定事件、议题或组织所形成的意见表达、情绪态度及其传播状态的综合体现。"
  },
  {
    "id": "kp002",
    "category": "舆情素养",
    "page": 1,
    "type": "multiple",
    "prompt": "AI时代的舆论特征是：",
    "options": [
      {
        "key": "A",
        "text": "事实先于观点"
      },
      {
        "key": "B",
        "text": "情感大于理性"
      },
      {
        "key": "C",
        "text": "理性大于情感"
      },
      {
        "key": "D",
        "text": "观点先于事实"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "answerText": "AI时代/“后真相时代”的舆论特征：观点先于事实，情感大于理性。现实世界的强者是网络舆论场的弱者。"
  },
  {
    "id": "kp003",
    "category": "舆情素养",
    "page": 1,
    "type": "multiple",
    "prompt": "国资央企面临的舆论环境包括：",
    "options": [
      {
        "key": "A",
        "text": "身处舆论场边缘，受关注度低"
      },
      {
        "key": "B",
        "text": "社会舆论容忍度高"
      },
      {
        "key": "C",
        "text": "身处舆论场中央，受关注度高"
      },
      {
        "key": "D",
        "text": "社会舆论容忍度低"
      }
    ],
    "correct": [
      "C",
      "D"
    ],
    "answerText": "国资央企面临的舆论环境：身处舆论场中央，受关注度高；社会舆论容忍度低；是自然人，更是企业人，要有谨慎言行的“被围观意识”。"
  },
  {
    "id": "kp004",
    "category": "舆情素养",
    "page": 1,
    "type": "multiple",
    "prompt": "四大层面舆论环境包括：",
    "options": [
      {
        "key": "A",
        "text": "国际环境"
      },
      {
        "key": "B",
        "text": "办公环境"
      },
      {
        "key": "C",
        "text": "国内环境"
      },
      {
        "key": "D",
        "text": "自然环境"
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "answerText": "四大层面舆论环境：国际环境、国内环境、媒体发展、国资央企。"
  },
  {
    "id": "kp005",
    "category": "舆情素养",
    "page": 1,
    "type": "single",
    "prompt": "下列哪项属于公司舆情六大高发节点？",
    "options": [
      {
        "key": "A",
        "text": "重要政治与社会活动期间"
      },
      {
        "key": "B",
        "text": "日常业务平稳期"
      },
      {
        "key": "C",
        "text": "舆情影响完全消退后"
      },
      {
        "key": "D",
        "text": "无公众关注的内部例行会议期间"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "重要政治与社会活动期间"
  },
  {
    "id": "kp006",
    "category": "舆情素养",
    "page": 1,
    "type": "single",
    "prompt": "下列哪项属于公司舆情六大高发节点？",
    "options": [
      {
        "key": "A",
        "text": "无公众关注的内部例行会议期间"
      },
      {
        "key": "B",
        "text": "舆情影响完全消退后"
      },
      {
        "key": "C",
        "text": "常规内部资料整理期"
      },
      {
        "key": "D",
        "text": "公司关键业务开展期"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "公司关键业务开展期"
  },
  {
    "id": "kp007",
    "category": "舆情素养",
    "page": 1,
    "type": "single",
    "prompt": "下列哪项属于公司舆情六大高发节点？",
    "options": [
      {
        "key": "A",
        "text": "常规内部资料整理期"
      },
      {
        "key": "B",
        "text": "日常业务平稳期"
      },
      {
        "key": "C",
        "text": "用电负荷集中增长期"
      },
      {
        "key": "D",
        "text": "无公众关注的内部例行会议期间"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "用电负荷集中增长期"
  },
  {
    "id": "kp008",
    "category": "舆情素养",
    "page": 1,
    "type": "single",
    "prompt": "下列哪项属于公司舆情六大高发节点？",
    "options": [
      {
        "key": "A",
        "text": "自然灾害期间"
      },
      {
        "key": "B",
        "text": "舆情影响完全消退后"
      },
      {
        "key": "C",
        "text": "常规内部资料整理期"
      },
      {
        "key": "D",
        "text": "日常业务平稳期"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "自然灾害期间"
  },
  {
    "id": "kp009",
    "category": "舆情素养",
    "page": 1,
    "type": "single",
    "prompt": "下列哪项属于公司舆情六大高发节点？",
    "options": [
      {
        "key": "A",
        "text": "岁末年初关键时段"
      },
      {
        "key": "B",
        "text": "日常业务平稳期"
      },
      {
        "key": "C",
        "text": "舆情影响完全消退后"
      },
      {
        "key": "D",
        "text": "无公众关注的内部例行会议期间"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "岁末年初关键时段"
  },
  {
    "id": "kp010",
    "category": "舆情素养",
    "page": 1,
    "type": "single",
    "prompt": "下列哪项属于公司舆情六大高发节点？",
    "options": [
      {
        "key": "A",
        "text": "无公众关注的内部例行会议期间"
      },
      {
        "key": "B",
        "text": "舆情影响完全消退后"
      },
      {
        "key": "C",
        "text": "常规内部资料整理期"
      },
      {
        "key": "D",
        "text": "节假日期间"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "节假日期间"
  },
  {
    "id": "kp011",
    "category": "舆情素养",
    "page": 1,
    "type": "single",
    "prompt": "党委书记对应的是：",
    "options": [
      {
        "key": "A",
        "text": "分管领域领导责任"
      },
      {
        "key": "B",
        "text": "声誉修复 + 复盘总结+固化经验"
      },
      {
        "key": "C",
        "text": "第一责任人"
      },
      {
        "key": "D",
        "text": "直接责任人"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "党委书记=第一责任人"
  },
  {
    "id": "kp012",
    "category": "舆情素养",
    "page": 1,
    "type": "single",
    "prompt": "党委副书记对应的是：",
    "options": [
      {
        "key": "A",
        "text": "直接责任人"
      },
      {
        "key": "B",
        "text": "分管领域领导责任"
      },
      {
        "key": "C",
        "text": "间接责任人"
      },
      {
        "key": "D",
        "text": "第一责任人"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "党委副书记=直接责任人"
  },
  {
    "id": "kp013",
    "category": "舆情素养",
    "page": 1,
    "type": "single",
    "prompt": "业务分管领导对应的是：",
    "options": [
      {
        "key": "A",
        "text": "分管领域领导责任"
      },
      {
        "key": "B",
        "text": "直接责任人"
      },
      {
        "key": "C",
        "text": "第一责任人"
      },
      {
        "key": "D",
        "text": "声誉修复 + 复盘总结+固化经验"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "业务分管领导=分管领域领导责任"
  },
  {
    "id": "kp014",
    "category": "舆情素养",
    "page": 1,
    "type": "single",
    "prompt": "业务部门职责是：",
    "options": [
      {
        "key": "A",
        "text": "分管领域领导责任"
      },
      {
        "key": "B",
        "text": "声誉修复 + 复盘总结+固化经验"
      },
      {
        "key": "C",
        "text": "直接责任人"
      },
      {
        "key": "D",
        "text": "\"管业务必须管业务领域舆情\"的主体责任"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "业务部门职责：\"管业务必须管业务领域舆情\"的主体责任"
  },
  {
    "id": "kp015",
    "category": "舆情素养",
    "page": 1,
    "type": "multiple",
    "prompt": "舆情事后处置三大模块包括：",
    "options": [
      {
        "key": "A",
        "text": "固化经验"
      },
      {
        "key": "B",
        "text": "删除舆情记录"
      },
      {
        "key": "C",
        "text": "声誉修复"
      },
      {
        "key": "D",
        "text": "复盘总结"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "舆情事后处置三大模块：声誉修复 + 复盘总结+固化经验。"
  },
  {
    "id": "kp016",
    "category": "舆情素养",
    "page": 1,
    "type": "multiple",
    "prompt": "声誉修复的做法是：",
    "options": [
      {
        "key": "A",
        "text": "精准回应关切"
      },
      {
        "key": "B",
        "text": "停止正面沟通"
      },
      {
        "key": "C",
        "text": "强化正面宣传"
      },
      {
        "key": "D",
        "text": "回避公众关切"
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "answerText": "精准回应关切强化正面宣传聚焦民生诉求，优化业务风险跟踪，防止舆情反弹"
  },
  {
    "id": "kp017",
    "category": "舆情素养",
    "page": 2,
    "type": "multiple",
    "prompt": "舆情处置工作包括：",
    "options": [
      {
        "key": "A",
        "text": "风险研判"
      },
      {
        "key": "B",
        "text": "信息核查"
      },
      {
        "key": "C",
        "text": "未经核实直接回应"
      },
      {
        "key": "D",
        "text": "延迟研判风险"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "answerText": "风险研判信息核查舆情处置"
  },
  {
    "id": "kp018",
    "category": "舆情素养",
    "page": 2,
    "type": "multiple",
    "prompt": "固化舆情工作经验的措施包括：",
    "options": [
      {
        "key": "A",
        "text": "停止案例复盘"
      },
      {
        "key": "B",
        "text": "经验共享"
      },
      {
        "key": "C",
        "text": "删除风险口径"
      },
      {
        "key": "D",
        "text": "制度更新"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "answerText": "制度更新”三库“更新（风险库、口径库、案例库）经验共享"
  },
  {
    "id": "kp019",
    "category": "舆情素养",
    "page": 2,
    "type": "single",
    "prompt": "个人类舆情的 4 个共性特征是：",
    "options": [
      {
        "key": "A",
        "text": "潜伏期、发展期、高潮期、消退期"
      },
      {
        "key": "B",
        "text": "把吐槽、简单爆料当成大舆情（陷入“不是舆情当舆情”误区）"
      },
      {
        "key": "C",
        "text": "传播速度快、传播范围广、与企业形象深度绑定、容易被放大歪曲"
      },
      {
        "key": "D",
        "text": "制度更新”三库“更新（风险库、口径库、案例库）经验共享"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "个人类舆情的 4 个共性特征：传播速度快、传播范围广、与企业形象深度绑定、容易被放大歪曲"
  },
  {
    "id": "kp020",
    "category": "舆情素养",
    "page": 2,
    "type": "single",
    "prompt": "舆情的传播规律分为四个阶段是：",
    "options": [
      {
        "key": "A",
        "text": "潜伏期、发展期、高潮期、消退期"
      },
      {
        "key": "B",
        "text": "盯着别人，风吹草动就担心波及自己"
      },
      {
        "key": "C",
        "text": "制度更新”三库“更新（风险库、口径库、案例库）经验共享"
      },
      {
        "key": "D",
        "text": "传播速度快、传播范围广、与企业形象深度绑定、容易被放大歪曲"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "舆情的传播规律分为四个阶段：潜伏期、发展期、高潮期、消退期。"
  },
  {
    "id": "kp021",
    "category": "舆情素养",
    "page": 2,
    "type": "single",
    "prompt": "哈哈镜里看舆情是：",
    "options": [
      {
        "key": "A",
        "text": "把吐槽、简单爆料当成大舆情（陷入“不是舆情当舆情”误区）"
      },
      {
        "key": "B",
        "text": "把小舆情→中舆情，中舆情→大舆情，放大风险感知，自我加压"
      },
      {
        "key": "C",
        "text": "盯着别人，风吹草动就担心波及自己"
      },
      {
        "key": "D",
        "text": "过度紧绷，没有舆情也要找舆情"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "哈哈镜里看舆情：把吐槽、简单爆料当成大舆情（陷入“不是舆情当舆情”误区）。"
  },
  {
    "id": "kp022",
    "category": "舆情素养",
    "page": 2,
    "type": "single",
    "prompt": "放大镜里看舆情是：",
    "options": [
      {
        "key": "A",
        "text": "中舆情，中舆情→把小舆情→大舆情，放大风险感知，自我加压"
      },
      {
        "key": "B",
        "text": "大舆情，放大风险感知，自我加压→中舆情，中舆情→把小舆情"
      },
      {
        "key": "C",
        "text": "把吐槽、简单爆料当成大舆情（陷入“不是舆情当舆情”误区）"
      },
      {
        "key": "D",
        "text": "把小舆情→中舆情，中舆情→大舆情，放大风险感知，自我加压"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "放大镜里看舆情：把小舆情→中舆情，中舆情→大舆情，放大风险感知，自我加压。"
  },
  {
    "id": "kp023",
    "category": "舆情素养",
    "page": 2,
    "type": "single",
    "prompt": "望远镜里看舆情是：",
    "options": [
      {
        "key": "A",
        "text": "把小舆情→中舆情，中舆情→大舆情，放大风险感知，自我加压"
      },
      {
        "key": "B",
        "text": "把吐槽、简单爆料当成大舆情（陷入“不是舆情当舆情”误区）"
      },
      {
        "key": "C",
        "text": "盯着别人，风吹草动就担心波及自己"
      },
      {
        "key": "D",
        "text": "过度紧绷，没有舆情也要找舆情"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "望远镜里看舆情：盯着别人，风吹草动就担心波及自己。"
  },
  {
    "id": "kp024",
    "category": "舆情素养",
    "page": 2,
    "type": "single",
    "prompt": "显微镜里看舆情是：",
    "options": [
      {
        "key": "A",
        "text": "过度紧绷，没有舆情也要找舆情"
      },
      {
        "key": "B",
        "text": "把吐槽、简单爆料当成大舆情（陷入“不是舆情当舆情”误区）"
      },
      {
        "key": "C",
        "text": "盯着别人，风吹草动就担心波及自己"
      },
      {
        "key": "D",
        "text": "把小舆情→中舆情，中舆情→大舆情，放大风险感知，自我加压"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "显微镜里看舆情：过度紧绷，没有舆情也要找舆情。"
  },
  {
    "id": "kp025",
    "category": "用电检查",
    "page": 3,
    "type": "single",
    "prompt": "《中华人民共和国电力法》的性质是：",
    "options": [
      {
        "key": "A",
        "text": "电力领域的基本法律"
      },
      {
        "key": "B",
        "text": "电力企业内部管理办法"
      },
      {
        "key": "C",
        "text": "地方供电服务指引"
      },
      {
        "key": "D",
        "text": "电力设备检修规程"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "概述：电力领域的基本法律"
  },
  {
    "id": "kp026",
    "category": "用电检查",
    "page": 3,
    "type": "single",
    "prompt": "电的商品属性是：",
    "options": [
      {
        "key": "A",
        "text": "安全用电、节约用电、计划用电"
      },
      {
        "key": "B",
        "text": "电力领域的基本法律"
      },
      {
        "key": "C",
        "text": "公司及下属供电企业"
      },
      {
        "key": "D",
        "text": "发、输、供、用同时完成"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "电的商品属性：发、输、供、用同时完成"
  },
  {
    "id": "kp027",
    "category": "用电检查",
    "page": 3,
    "type": "multiple",
    "prompt": "电力供应与使用应遵循的原则包括：",
    "options": [
      {
        "key": "A",
        "text": "计划用电"
      },
      {
        "key": "B",
        "text": "随意用电"
      },
      {
        "key": "C",
        "text": "安全用电"
      },
      {
        "key": "D",
        "text": "节约用电"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "供应使用原则：安全用电、节约用电、计划用电"
  },
  {
    "id": "kp028",
    "category": "用电检查",
    "page": 3,
    "type": "single",
    "prompt": "颁布情况是：",
    "options": [
      {
        "key": "A",
        "text": "1995年12月28日通过，1996年4月1日起施行，历经2009年、2015年、2018年三次修正。共十章七十五条"
      },
      {
        "key": "B",
        "text": "1990年12月28日通过，1996年4月1日起施行，历经2009年、2015年、2018年三次修正。共十章七十五条"
      },
      {
        "key": "C",
        "text": "2000年12月28日通过，1996年4月1日起施行，历经2009年、2015年、2018年三次修正。共十章七十五条"
      },
      {
        "key": "D",
        "text": "2005年12月28日通过，1996年4月1日起施行，历经2009年、2015年、2018年三次修正。共十章七十五条"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "颁布情况：1995年12月28日通过，1996年4月1日起施行，历经2009年、2015年、2018年三次修正。共十章七十五条。"
  },
  {
    "id": "kp029",
    "category": "用电检查",
    "page": 3,
    "type": "single",
    "prompt": "关于“新修订《供电营业规则》自2024年6月1日起施行”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "新修订《供电营业规则》自2024年6月1日起施行，共十章一百一十条"
      },
      {
        "key": "B",
        "text": "新修订《供电营业规则》自2029年6月1日起施行，共十章一百一十条"
      },
      {
        "key": "C",
        "text": "新修订《供电营业规则》自2034年6月1日起施行，共十章一百一十条"
      },
      {
        "key": "D",
        "text": "新修订《供电营业规则》自2019年6月1日起施行，共十章一百一十条"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "新修订《供电营业规则》自2024年6月1日起施行，共十章一百一十条。"
  },
  {
    "id": "kp030",
    "category": "用电检查",
    "page": 3,
    "type": "single",
    "prompt": "关于“2009年11月26日电监会令第27号发布”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "2019年11月26日电监会令第27号发布，2010年1月1日起施行，2024年1月4日修订"
      },
      {
        "key": "B",
        "text": "2014年11月26日电监会令第27号发布，2010年1月1日起施行，2024年1月4日修订"
      },
      {
        "key": "C",
        "text": "2004年11月26日电监会令第27号发布，2010年1月1日起施行，2024年1月4日修订"
      },
      {
        "key": "D",
        "text": "2009年11月26日电监会令第27号发布，2010年1月1日起施行，2024年1月4日修订"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "2009年11月26日电监会令第27号发布，2010年1月1日起施行，2024年1月4日修订。"
  },
  {
    "id": "kp031",
    "category": "用电检查",
    "page": 3,
    "type": "single",
    "prompt": "关于“《供电监管办法》核心内容”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "现场取证→费用追缴→中止供电→恢复送电"
      },
      {
        "key": "B",
        "text": "“政府主导、责任明确、分级管理、重点保障”"
      },
      {
        "key": "C",
        "text": "国家能源局履行全国供电监管和行政执法职能"
      },
      {
        "key": "D",
        "text": "2009年11月26日电监会令第27号发布，2010年1月1日起施行，2024年1月4日修订"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "国家能源局履行全国供电监管和行政执法职能。"
  },
  {
    "id": "kp032",
    "category": "用电检查",
    "page": 5,
    "type": "single",
    "prompt": "用电检查制度概述的目的是：",
    "options": [
      {
        "key": "A",
        "text": "维护供用电秩序、保障供电安全"
      },
      {
        "key": "B",
        "text": "安全用电、节约用电、计划用电"
      },
      {
        "key": "C",
        "text": "公司及下属供电企业"
      },
      {
        "key": "D",
        "text": "产权责任划分（“谁产权谁负责”）周期检查+专项检查结合隐患整改闭环管理"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "目的：维护供用电秩序、保障供电安全"
  },
  {
    "id": "kp033",
    "category": "用电检查",
    "page": 5,
    "type": "single",
    "prompt": "适用范围为：",
    "options": [
      {
        "key": "A",
        "text": "公司及下属供电企业"
      },
      {
        "key": "B",
        "text": "维护供用电秩序、保障供电安全"
      },
      {
        "key": "C",
        "text": "产权责任划分（“谁产权谁负责”）周期检查+专项检查结合隐患整改闭环管理"
      },
      {
        "key": "D",
        "text": "每年组织取证/复证"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "适用范围：公司及下属供电企业"
  },
  {
    "id": "kp034",
    "category": "用电检查",
    "page": 5,
    "type": "single",
    "prompt": "关于“产权责任划分”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "公司及下属供电企业"
      },
      {
        "key": "B",
        "text": "维护供用电秩序、保障供电安全"
      },
      {
        "key": "C",
        "text": "新修订《供电营业规则》自2024年6月1日起施行，共十章一百一十条"
      },
      {
        "key": "D",
        "text": "产权责任划分（“谁产权谁负责”）周期检查+专项检查结合隐患整改闭环管理"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "产权责任划分（“谁产权谁负责”）周期检查+专项检查结合隐患整改闭环管理"
  },
  {
    "id": "kp035",
    "category": "用电检查",
    "page": 6,
    "type": "single",
    "prompt": "隐患处理流程是：",
    "options": [
      {
        "key": "A",
        "text": "复查→整改建议→未整改→报备政府"
      },
      {
        "key": "B",
        "text": "维护供用电秩序、保障供电安全"
      },
      {
        "key": "C",
        "text": "整改建议→复查→未整改→报备政府"
      },
      {
        "key": "D",
        "text": "报备政府→未整改→复查→整改建议"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "隐患处理流程：整改建议→复查→未整改→报备政府"
  },
  {
    "id": "kp036",
    "category": "用电检查",
    "page": 6,
    "type": "single",
    "prompt": "处理措施是：",
    "options": [
      {
        "key": "A",
        "text": "现场取证→费用追缴→中止供电→恢复送电"
      },
      {
        "key": "B",
        "text": "国家能源局履行全国供电监管和行政执法职能"
      },
      {
        "key": "C",
        "text": "恢复送电→中止供电→费用追缴→现场取证"
      },
      {
        "key": "D",
        "text": "费用追缴→现场取证→中止供电→恢复送电"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "处理措施：现场取证→费用追缴→中止供电→恢复送电"
  },
  {
    "id": "kp037",
    "category": "用电检查",
    "page": 6,
    "type": "multiple",
    "prompt": "考试要求包括哪些内容？",
    "options": [
      {
        "key": "A",
        "text": "每年组织取证/复证"
      },
      {
        "key": "B",
        "text": "“一考双证”：通过班组考试直接认定"
      },
      {
        "key": "C",
        "text": "“一考双证”：通过班组考试间接认定"
      },
      {
        "key": "D",
        "text": "公司及下属供电企业"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "answerText": "考试要求：每年组织取证/复证；“一考双证”：通过班组考试直接认定"
  },
  {
    "id": "kp038",
    "category": "用电检查",
    "page": 7,
    "type": "single",
    "prompt": "重要客户管理原则是：",
    "options": [
      {
        "key": "A",
        "text": "现场取证→费用追缴→中止供电→恢复送电"
      },
      {
        "key": "B",
        "text": "特级、一级和二级"
      },
      {
        "key": "C",
        "text": "国家能源局履行全国供电监管和行政执法职能"
      },
      {
        "key": "D",
        "text": "“政府主导、责任明确、分级管理、重点保障”"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "重要客户管理原则：“政府主导、责任明确、分级管理、重点保障”。"
  },
  {
    "id": "kp039",
    "category": "用电检查",
    "page": 7,
    "type": "multiple",
    "prompt": "根据供电可靠性要求及中断供电危害程度，重要客户分为：",
    "options": [
      {
        "key": "A",
        "text": "二级"
      },
      {
        "key": "B",
        "text": "三级"
      },
      {
        "key": "C",
        "text": "特级"
      },
      {
        "key": "D",
        "text": "一级"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "根据供电可靠性要求及中断供电危害程度，将重要客户分为特级、一级和二级。"
  },
  {
    "id": "kp040",
    "category": "输电线路",
    "page": 8,
    "type": "single",
    "prompt": "关于“频率”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "交流电振荡频率，不同国家标准不同，我国为50Hz，反映有功功率平衡"
      },
      {
        "key": "B",
        "text": "交流电振荡频率，不同国家标准不同，我国为45Hz，反映有功功率平衡"
      },
      {
        "key": "C",
        "text": "交流电振荡频率，不同国家标准不同，我国为55Hz，反映有功功率平衡"
      },
      {
        "key": "D",
        "text": "交流电振荡频率，不同国家标准不同，我国为60Hz，反映有功功率平衡"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "频率是交流电振荡频率，不同国家标准不同，我国为50Hz，反映有功功率平衡。"
  },
  {
    "id": "kp041",
    "category": "输电线路",
    "page": 8,
    "type": "single",
    "prompt": "输电线路的组成和功能是：",
    "options": [
      {
        "key": "A",
        "text": "导线、避雷线、绝缘子、杆塔、金具、接地装置"
      },
      {
        "key": "B",
        "text": "交流电振荡频率，不同国家标准不同，我国为50Hz，反映有功功率平衡"
      },
      {
        "key": "C",
        "text": "承受张力，用于分段、终端、转角（P58）"
      },
      {
        "key": "D",
        "text": "增大导线的等效半径，减小电晕"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "输电线路的组成和功能：导线、避雷线、绝缘子、杆塔、金具、接地装置。"
  },
  {
    "id": "kp042",
    "category": "输电线路",
    "page": 9,
    "type": "single",
    "prompt": "关于“超高压输电通过提高电压、降低电流”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "超高压输电通过降低电压、降低电流，从而显著减少线路损耗，并提升远距离大容量输电的经济性"
      },
      {
        "key": "B",
        "text": "超低压输电通过提高电压、降低电流，从而显著减少线路损耗，并提升远距离大容量输电的经济性"
      },
      {
        "key": "C",
        "text": "增大导线的等效半径，减小电晕"
      },
      {
        "key": "D",
        "text": "超高压输电通过提高电压、降低电流，从而显著减少线路损耗，并提升远距离大容量输电的经济性"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "超高压输电通过提高电压、降低电流，从而显著减少线路损耗，并提升远距离大容量输电的经济性。"
  },
  {
    "id": "kp043",
    "category": "输电线路",
    "page": 9,
    "type": "single",
    "prompt": "分裂导线的作用是：",
    "options": [
      {
        "key": "A",
        "text": "增大导线电阻，增加线路损耗"
      },
      {
        "key": "B",
        "text": "减小输电容量，降低输电效率"
      },
      {
        "key": "C",
        "text": "增大导线的等效半径，减小电晕"
      },
      {
        "key": "D",
        "text": "减小导线的等效半径，增大电晕"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "分裂导线的作用：增大导线的等效半径，减小电晕。"
  },
  {
    "id": "kp044",
    "category": "输电线路",
    "page": 9,
    "type": "multiple",
    "prompt": "关于电压等级与分裂导线数的关系，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "分裂数越多，越能有效减少电晕损耗"
      },
      {
        "key": "B",
        "text": "电压等级越高通常采用越少分裂数"
      },
      {
        "key": "C",
        "text": "电压等级越高通常采用越多分裂数"
      },
      {
        "key": "D",
        "text": "分裂数越少，越能有效减少电晕损耗"
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "answerText": "电压等级与分裂导线数 （分裂数越多，越能有效减少电晕损耗、提升输电容量和效率，电压等级越高通常采用越多分裂数）"
  },
  {
    "id": "kp045",
    "category": "输电线路",
    "page": 9,
    "type": "single",
    "prompt": "单导线是：",
    "options": [
      {
        "key": "A",
        "text": "110kv及以下"
      },
      {
        "key": "B",
        "text": "160kv及以下"
      },
      {
        "key": "C",
        "text": "210kv及以下"
      },
      {
        "key": "D",
        "text": "60kv及以下"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "单导线： 110kv及以下"
  },
  {
    "id": "kp046",
    "category": "输电线路",
    "page": 9,
    "type": "single",
    "prompt": "双分裂是：",
    "options": [
      {
        "key": "A",
        "text": "320kv"
      },
      {
        "key": "B",
        "text": "270kv"
      },
      {
        "key": "C",
        "text": "170kv"
      },
      {
        "key": "D",
        "text": "220kv"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "双分裂： 220kv"
  },
  {
    "id": "kp047",
    "category": "输电线路",
    "page": 9,
    "type": "single",
    "prompt": "四分裂是：",
    "options": [
      {
        "key": "A",
        "text": "600kv"
      },
      {
        "key": "B",
        "text": "450kv"
      },
      {
        "key": "C",
        "text": "500kv"
      },
      {
        "key": "D",
        "text": "550kv"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "四分裂： 500kv"
  },
  {
    "id": "kp048",
    "category": "输电线路",
    "page": 9,
    "type": "single",
    "prompt": "六分裂是：",
    "options": [
      {
        "key": "A",
        "text": "800kv"
      },
      {
        "key": "B",
        "text": "750kv"
      },
      {
        "key": "C",
        "text": "850kv"
      },
      {
        "key": "D",
        "text": "900kv"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "六分裂： 800kv"
  },
  {
    "id": "kp049",
    "category": "输电线路",
    "page": 9,
    "type": "single",
    "prompt": "八分裂是：",
    "options": [
      {
        "key": "A",
        "text": "1000kv"
      },
      {
        "key": "B",
        "text": "1050kv"
      },
      {
        "key": "C",
        "text": "1100kv"
      },
      {
        "key": "D",
        "text": "950kv"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "八分裂： 1000kv"
  },
  {
    "id": "kp050",
    "category": "输电线路",
    "page": 9,
    "type": "single",
    "prompt": "关于“输电业务主要由电网规划与设计、输电线路建设、电力传输运行”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "输电业务次要由电网规划与设计、输电线路建设、电力传输运行管理、线路维护与管理、技术研究与创新等组成"
      },
      {
        "key": "B",
        "text": "输电业务主要由电网规划与设计、输电线路建设、电力传输停运管理、线路维护与管理、技术研究与创新等组成"
      },
      {
        "key": "C",
        "text": "超高压输电通过提高电压、降低电流，从而显著减少线路损耗，并提升远距离大容量输电的经济性"
      },
      {
        "key": "D",
        "text": "输电业务主要由电网规划与设计、输电线路建设、电力传输运行管理、线路维护与管理、技术研究与创新等组成"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "输电业务主要由电网规划与设计、输电线路建设、电力传输运行管理、线路维护与管理、技术研究与创新等组成。"
  },
  {
    "id": "kp051",
    "category": "输电线路",
    "page": 9,
    "type": "multiple",
    "prompt": "导地线的主要类型包括：",
    "options": [
      {
        "key": "A",
        "text": "木质绝缘地线"
      },
      {
        "key": "B",
        "text": "普通塑料绞线"
      },
      {
        "key": "C",
        "text": "金属导电地线（镀锌/镀铜钢丝，强度高、防腐好）"
      },
      {
        "key": "D",
        "text": "钢芯铝绞线（铝绞线+钢芯，强度高且导电良好，高压常用）"
      }
    ],
    "correct": [
      "C",
      "D"
    ],
    "answerText": "金属导电地线（镀锌/镀铜钢丝，强度高、防腐好）钢芯铝绞线（铝绞线+钢芯，强度高且导电良好，高压常用）"
  },
  {
    "id": "kp052",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "复合导地线的特点是：",
    "options": [
      {
        "key": "A",
        "text": "结构紧凑、轻质耐腐蚀"
      },
      {
        "key": "B",
        "text": "不能用于恶劣环境"
      },
      {
        "key": "C",
        "text": "结构松散且不耐腐蚀"
      },
      {
        "key": "D",
        "text": "只适用于室内环境"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "复合导地线（多种材料组合，结构紧凑、轻质耐腐蚀，适用于海边、沙漠等恶劣环境）"
  },
  {
    "id": "kp053",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "直线塔是：",
    "options": [
      {
        "key": "A",
        "text": "走直线"
      },
      {
        "key": "B",
        "text": "拐弯用"
      },
      {
        "key": "C",
        "text": "进变电站"
      },
      {
        "key": "D",
        "text": "承受张力，用于分段、终端、转角（P58）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "直线塔：走直线"
  },
  {
    "id": "kp054",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "耐张塔的用途是：",
    "options": [
      {
        "key": "A",
        "text": "仅用于站内照明"
      },
      {
        "key": "B",
        "text": "仅用于直线通过，不承受张力"
      },
      {
        "key": "C",
        "text": "用于测量线路电能"
      },
      {
        "key": "D",
        "text": "承受张力，用于分段、终端、转角（P58）"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "耐张塔：承受张力，用于分段、终端、转角（P58）"
  },
  {
    "id": "kp055",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "转角塔是：",
    "options": [
      {
        "key": "A",
        "text": "进变电站"
      },
      {
        "key": "B",
        "text": "承受张力，用于分段、终端、转角（P58）"
      },
      {
        "key": "C",
        "text": "拐弯用"
      },
      {
        "key": "D",
        "text": "走直线"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "转角塔：拐弯用"
  },
  {
    "id": "kp056",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "终端塔是：",
    "options": [
      {
        "key": "A",
        "text": "进变电站"
      },
      {
        "key": "B",
        "text": "承受张力，用于分段、终端、转角（P58）"
      },
      {
        "key": "C",
        "text": "拐弯用"
      },
      {
        "key": "D",
        "text": "走直线"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "终端塔：进变电站"
  },
  {
    "id": "kp057",
    "category": "输电线路",
    "page": 10,
    "type": "multiple",
    "prompt": "架空地线的核心功能包括：",
    "options": [
      {
        "key": "A",
        "text": "防雷"
      },
      {
        "key": "B",
        "text": "分流"
      },
      {
        "key": "C",
        "text": "电磁屏蔽"
      },
      {
        "key": "D",
        "text": "升高线路电压"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "架空地线核心功能：防雷、分流、耦合、电磁屏蔽和（OPGW）通信功能。"
  },
  {
    "id": "kp058",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "输电线路金具的五大功能是：",
    "options": [
      {
        "key": "A",
        "text": "测、控、保、调、通"
      },
      {
        "key": "B",
        "text": "发、输、变、配、用"
      },
      {
        "key": "C",
        "text": "升、降、储、送、售"
      },
      {
        "key": "D",
        "text": "悬、固、连、护、续"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "悬垂线夹（连接导线与绝缘子）耐张线夹（固定导线于耐张段）连接金具（连接绝缘子与其他部件）保护金具（减振、防闪络、防腐蚀）接续金具（导线之间的连接），分别承担“悬、固、连、护、续”五大功能，是保障线路机械强度和电气连接的关键"
  },
  {
    "id": "kp059",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "关于“玻璃绝缘子因表面处于压缩预应力状态”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "正常——定期全面查故障——事故后追因特殊——按需专项检"
      },
      {
        "key": "B",
        "text": "紧急（24h）、重大（7天）、一般（3个月）、其他"
      },
      {
        "key": "C",
        "text": "玻璃绝缘子因表面处于压缩预应力状态，一旦出现裂纹或电击穿便会自行破碎成小碎块（俗称“自爆”），便于零值检测，但需及时更换以防掉串。在运行中无需进行零值检测"
      },
      {
        "key": "D",
        "text": "玻璃绝缘子因表面处于压缩预应力状态，一旦出现裂纹或电击穿便会自行破碎成小碎块（俗称“自爆”），便于零值检测，但需及时更换以防掉串。在停运中无需进行零值检测"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "玻璃绝缘子因表面处于压缩预应力状态，一旦出现裂纹或电击穿便会自行破碎成小碎块（俗称“自爆”），便于零值检测，但需及时更换以防掉串。在运行中无需进行零值检测。"
  },
  {
    "id": "kp060",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "输电线路巡视类型是：",
    "options": [
      {
        "key": "A",
        "text": "正常、故障、特殊"
      },
      {
        "key": "B",
        "text": "保障线路机械强度和电气连接的关键"
      },
      {
        "key": "C",
        "text": "异常、故障、特殊"
      },
      {
        "key": "D",
        "text": "人工、无人机、在线监测"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "输电线路巡视类型：正常、故障、特殊。"
  },
  {
    "id": "kp061",
    "category": "输电线路",
    "page": 10,
    "type": "multiple",
    "prompt": "输电线路巡视类型与任务的对应关系，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "正常——定期全面查"
      },
      {
        "key": "B",
        "text": "故障——事故后追因"
      },
      {
        "key": "C",
        "text": "特殊——按需专项检"
      },
      {
        "key": "D",
        "text": "正常——事故后追因"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "正常——定期全面查故障——事故后追因特殊——按需专项检"
  },
  {
    "id": "kp062",
    "category": "输电线路",
    "page": 10,
    "type": "multiple",
    "prompt": "输电线路巡视方式包括：",
    "options": [
      {
        "key": "A",
        "text": "在线监测"
      },
      {
        "key": "B",
        "text": "无人机"
      },
      {
        "key": "C",
        "text": "停止巡视"
      },
      {
        "key": "D",
        "text": "人工"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "输电线路巡视方式：人工、无人机、在线监测。"
  },
  {
    "id": "kp063",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "在线监测巡视是：",
    "options": [
      {
        "key": "A",
        "text": "通过传感器、摄像头等设备对线路运行状态、环境变化进行定期、持续监控和检查，采集数据并分析潜在隐患"
      },
      {
        "key": "B",
        "text": "正常——定期全面查故障——事故后追因特殊——按需专项检"
      },
      {
        "key": "C",
        "text": "通过传感器、摄像头等设备对线路运行状态、环境变化进行实时、持续监控和检查，采集数据并分析潜在隐患"
      },
      {
        "key": "D",
        "text": "通过传感器、摄像头等设备对线路停运状态、环境变化进行实时、持续监控和检查，采集数据并分析潜在隐患"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "在线监测巡视：通过传感器、摄像头等设备对线路运行状态、环境变化进行实时、持续监控和检查，采集数据并分析潜在隐患。"
  },
  {
    "id": "kp064",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "输电线路缺陷类型是：",
    "options": [
      {
        "key": "A",
        "text": "紧急（24h）、重大（7天）、一般（3个月）、其他"
      },
      {
        "key": "B",
        "text": "紧急（19h）、重大（7天）、一般（3个月）、其他"
      },
      {
        "key": "C",
        "text": "紧急（29h）、重大（7天）、一般（3个月）、其他"
      },
      {
        "key": "D",
        "text": "紧急（34h）、重大（7天）、一般（3个月）、其他"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "输电线路缺陷类型：紧急（24h）、重大（7天）、一般（3个月）、其他。"
  },
  {
    "id": "kp065",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "关于“重合闸动作情况”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "重合成功、重合不成功和重合闸不动作。山火会导致重合闸成功率不高，甚至出现“重合闸成功后再次跳闸”的情况"
      },
      {
        "key": "B",
        "text": "正常——定期全面查故障——事故后追因特殊——按需专项检"
      },
      {
        "key": "C",
        "text": "紧急（24h）、重大（7天）、一般（3个月）、其他"
      },
      {
        "key": "D",
        "text": "红外测温、接地电阻测量、绝缘子检测、污秽检测"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "重合闸动作情况分为重合成功、重合不成功和重合闸不动作。山火会导致重合闸成功率不高，甚至出现“重合闸成功后再次跳闸”的情况。"
  },
  {
    "id": "kp066",
    "category": "输电线路",
    "page": 10,
    "type": "multiple",
    "prompt": "输电线路预试定检项目包括：",
    "options": [
      {
        "key": "A",
        "text": "绝缘子检测"
      },
      {
        "key": "B",
        "text": "接地电阻测量"
      },
      {
        "key": "C",
        "text": "调整用户电价"
      },
      {
        "key": "D",
        "text": "红外测温"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "预试定检包括：红外测温、接地电阻测量、绝缘子检测、污秽检测。"
  },
  {
    "id": "kp067",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "三极法是：",
    "options": [
      {
        "key": "A",
        "text": "使用钳形接地电阻测试仪，适用于有避雷线且多基杆塔避雷线直接接地的架空输电线路"
      },
      {
        "key": "B",
        "text": "正常——定期全面查故障——事故后追因特殊——按需专项检"
      },
      {
        "key": "C",
        "text": "由接地装置、电流极和电压极组成三个电极，普遍使用摇表检测"
      },
      {
        "key": "D",
        "text": "泄露电流最大幅值、泄露电流脉冲来表征绝缘子的污秽度，可以实现在线检测与报警"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "三极法：由接地装置、电流极和电压极组成三个电极，普遍使用摇表检测。"
  },
  {
    "id": "kp068",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "钳表法是：",
    "options": [
      {
        "key": "A",
        "text": "使用钳形接地电阻测试仪，适用于有避雷线且多基杆塔避雷线直接接地的架空输电线路"
      },
      {
        "key": "B",
        "text": "由接地装置、电流极和电压极组成三个电极，普遍使用摇表检测"
      },
      {
        "key": "C",
        "text": "使用钳形接地电阻测试仪，适用于有避雷线且多基杆塔避雷线间接接地的架空输电线路"
      },
      {
        "key": "D",
        "text": "泄露电流最大幅值、泄露电流脉冲来表征绝缘子的污秽度，可以实现在线检测与报警"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "钳表法：使用钳形接地电阻测试仪，适用于有避雷线且多基杆塔避雷线直接接地的架空输电线路。"
  },
  {
    "id": "kp069",
    "category": "输电线路",
    "page": 10,
    "type": "single",
    "prompt": "绝缘污秽检测是：",
    "options": [
      {
        "key": "A",
        "text": "泄露电流最大幅值、泄露电流脉冲来表征绝缘子的污秽度，可以实现在线检测与报警"
      },
      {
        "key": "B",
        "text": "泄露电流最大幅值、泄露电流脉冲来表征绝缘子的污秽度，不可以实现在线检测与报警"
      },
      {
        "key": "C",
        "text": "使用钳形接地电阻测试仪，适用于有避雷线且多基杆塔避雷线直接接地的架空输电线路"
      },
      {
        "key": "D",
        "text": "由接地装置、电流极和电压极组成三个电极，普遍使用摇表检测"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "绝缘污秽检测：泄露电流最大幅值、泄露电流脉冲来表征绝缘子的污秽度，可以实现在线检测与报警。"
  },
  {
    "id": "kp070",
    "category": "变电运行",
    "page": 11,
    "type": "single",
    "prompt": "变电作用是：",
    "options": [
      {
        "key": "A",
        "text": "变电运行、变电检修、电气试验、继保自动化、站用电源（5个）"
      },
      {
        "key": "B",
        "text": "次要承担电压转换、电能分配、系统保护及电网稳定等功能"
      },
      {
        "key": "C",
        "text": "灭弧介质通常为真空或SF6，可灭弧、切断短路电流"
      },
      {
        "key": "D",
        "text": "主要承担电压转换、电能分配、系统保护及电网稳定等功能"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "变电作用：主要承担电压转换、电能分配、系统保护及电网稳定等功能。"
  },
  {
    "id": "kp071",
    "category": "变电运行",
    "page": 11,
    "type": "single",
    "prompt": "变电专业是：",
    "options": [
      {
        "key": "A",
        "text": "变电运行、变电检修、电气试验、继保自动化、站用电源（7个）"
      },
      {
        "key": "B",
        "text": "变电运行、变电检修、电气试验、继保自动化、站用电源（8个）"
      },
      {
        "key": "C",
        "text": "变电运行、变电检修、电气试验、继保自动化、站用电源（5个）"
      },
      {
        "key": "D",
        "text": "变电运行、变电检修、电气试验、继保自动化、站用电源（6个）"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "变电专业：变电运行、变电检修、电气试验、继保自动化、站用电源（5个）"
  },
  {
    "id": "kp072",
    "category": "变电运行",
    "page": 11,
    "type": "single",
    "prompt": "变电站分类按功能是：",
    "options": [
      {
        "key": "A",
        "text": "升压变电站、降压变电站"
      },
      {
        "key": "B",
        "text": "可分为1000kV、750kV、500kV、220kV、110kV、10kV等"
      },
      {
        "key": "C",
        "text": "可分为直流变电站、交流变电站"
      },
      {
        "key": "D",
        "text": "感官观察（目视、耳听、鼻嗅、手触）及仪器检测（红外测温、局放检测）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "按功能：升压变电站、降压变电站"
  },
  {
    "id": "kp073",
    "category": "变电运行",
    "page": 11,
    "type": "single",
    "prompt": "变电站分类按电压等级为：",
    "options": [
      {
        "key": "A",
        "text": "可分为1000kV、750kV、500kV、220kV、110kV、10kV等"
      },
      {
        "key": "B",
        "text": "可分为1050kV、750kV、500kV、220kV、110kV、10kV等"
      },
      {
        "key": "C",
        "text": "可分为1100kV、750kV、500kV、220kV、110kV、10kV等"
      },
      {
        "key": "D",
        "text": "可分为950kV、750kV、500kV、220kV、110kV、10kV等"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "按电压等级：可分为1000kV、750kV、500kV、220kV、110kV、10kV等"
  },
  {
    "id": "kp074",
    "category": "变电运行",
    "page": 11,
    "type": "single",
    "prompt": "变电站分类按电压传输方式为：",
    "options": [
      {
        "key": "A",
        "text": "感官观察（目视、耳听、鼻嗅、手触）及仪器检测（红外测温、局放检测）"
      },
      {
        "key": "B",
        "text": "升压变电站、降压变电站"
      },
      {
        "key": "C",
        "text": "可分为1000kV、750kV、500kV、220kV、110kV、10kV等"
      },
      {
        "key": "D",
        "text": "可分为直流变电站、交流变电站"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "按电压传输方式：可分为直流变电站、交流变电站"
  },
  {
    "id": "kp075",
    "category": "变电运行",
    "page": 11,
    "type": "multiple",
    "prompt": "变电运行的业务包括：",
    "options": [
      {
        "key": "A",
        "text": "倒闸操作"
      },
      {
        "key": "B",
        "text": "电网规划设计"
      },
      {
        "key": "C",
        "text": "设备巡视"
      },
      {
        "key": "D",
        "text": "设备维护"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "变电运行七大业务：（一）设备巡视、（二）设备维护、（三）倒闸操作、（四）工作票办理、（五）事故处理、（六）设备验收、（七）变电运行专业8大特点"
  },
  {
    "id": "kp076",
    "category": "变电运行",
    "page": 11,
    "type": "single",
    "prompt": "设备巡视是：",
    "options": [
      {
        "key": "A",
        "text": "感官观察（目视、耳听、鼻嗅、手触）及仪器检测（红外测温、局放检测）"
      },
      {
        "key": "B",
        "text": "升压变电站、降压变电站"
      },
      {
        "key": "C",
        "text": "可分为1000kV、750kV、500kV、220kV、110kV、10kV等"
      },
      {
        "key": "D",
        "text": "可分为直流变电站、交流变电站"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "设备巡视：感官观察（目视、耳听、鼻嗅、手触）及仪器检测（红外测温、局放检测）"
  },
  {
    "id": "kp077",
    "category": "变电运行",
    "page": 12,
    "type": "multiple",
    "prompt": "变电站设备的三种类别包括：",
    "options": [
      {
        "key": "A",
        "text": "一次设备"
      },
      {
        "key": "B",
        "text": "二次设备"
      },
      {
        "key": "C",
        "text": "辅助设施"
      },
      {
        "key": "D",
        "text": "用电客户"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "变电站设备分为三类：一次设备直接参与电能传输分配，二次设备负责监测、控制、保护一次设备，辅助设施保障一二次设备正常运行。"
  },
  {
    "id": "kp078",
    "category": "变电运行",
    "page": 12,
    "type": "single",
    "prompt": "下列哪项属于“一次设备”？",
    "options": [
      {
        "key": "A",
        "text": "消防设施、防小动物设施"
      },
      {
        "key": "B",
        "text": "升压变电站、降压变电站"
      },
      {
        "key": "C",
        "text": "可分为直流变电站、交流变电站"
      },
      {
        "key": "D",
        "text": "母线(类似水管）"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "母线(类似水管）"
  },
  {
    "id": "kp079",
    "category": "变电运行",
    "page": 12,
    "type": "single",
    "prompt": "下列哪项属于“一次设备”？",
    "options": [
      {
        "key": "A",
        "text": "消防设施、防小动物设施"
      },
      {
        "key": "B",
        "text": "可分为直流变电站、交流变电站"
      },
      {
        "key": "C",
        "text": "主变压器（变换电压）"
      },
      {
        "key": "D",
        "text": "升压变电站、降压变电站"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "主变压器（变换电压）"
  },
  {
    "id": "kp080",
    "category": "变电运行",
    "page": 12,
    "type": "single",
    "prompt": "高压断路器（开关）是：",
    "options": [
      {
        "key": "A",
        "text": "灭弧介质通常为真空或SF6，可灭弧、切断短路电流"
      },
      {
        "key": "B",
        "text": "灭弧介质通常为真空或SF9，可灭弧、切断短路电流"
      },
      {
        "key": "C",
        "text": "灭弧介质通常为真空或SF7，可灭弧、切断短路电流"
      },
      {
        "key": "D",
        "text": "灭弧介质通常为真空或SF8，可灭弧、切断短路电流"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "高压断路器（开关）：灭弧介质通常为真空或SF6，可灭弧、切断短路电流"
  },
  {
    "id": "kp081",
    "category": "变电运行",
    "page": 12,
    "type": "single",
    "prompt": "刀闸（隔离开关）是：",
    "options": [
      {
        "key": "A",
        "text": "无灭弧装置，合闸时能承载正常及短路电流"
      },
      {
        "key": "B",
        "text": "无灭弧装置，合闸时能承载异常及短路电流"
      },
      {
        "key": "C",
        "text": "灭弧介质通常为真空或SF6，可灭弧、切断短路电流"
      },
      {
        "key": "D",
        "text": "电流互感器（不能开路）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "刀闸（隔离开关）：无灭弧装置，合闸时能承载正常及短路电流"
  },
  {
    "id": "kp082",
    "category": "变电运行",
    "page": 12,
    "type": "single",
    "prompt": "下列哪项属于“一次设备”？",
    "options": [
      {
        "key": "A",
        "text": "升压变电站、降压变电站"
      },
      {
        "key": "B",
        "text": "消防设施、防小动物设施"
      },
      {
        "key": "C",
        "text": "可分为直流变电站、交流变电站"
      },
      {
        "key": "D",
        "text": "电流互感器（不能开路）"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "电流互感器（不能开路）"
  },
  {
    "id": "kp083",
    "category": "变电运行",
    "page": 12,
    "type": "single",
    "prompt": "下列哪项属于“一次设备”？",
    "options": [
      {
        "key": "A",
        "text": "升压变电站、降压变电站"
      },
      {
        "key": "B",
        "text": "可分为直流变电站、交流变电站"
      },
      {
        "key": "C",
        "text": "电压互感器（不能短路）"
      },
      {
        "key": "D",
        "text": "消防设施、防小动物设施"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "电压互感器（不能短路）"
  },
  {
    "id": "kp084",
    "category": "变电运行",
    "page": 12,
    "type": "multiple",
    "prompt": "关于防雷装置，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "其核心作用是限制过电压"
      },
      {
        "key": "B",
        "text": "在额定电压下，相当于电源"
      },
      {
        "key": "C",
        "text": "在额定电压下，相当于绝缘体"
      },
      {
        "key": "D",
        "text": "其核心作用是升高过电压"
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "answerText": "防雷装置（避雷器与避雷针）：其核心作用是限制过电压；在额定电压下，相当于绝缘体"
  },
  {
    "id": "kp085",
    "category": "变电运行",
    "page": 12,
    "type": "single",
    "prompt": "下列哪项属于“一次设备”？",
    "options": [
      {
        "key": "A",
        "text": "电容器组（无功补偿）"
      },
      {
        "key": "B",
        "text": "消防设施、防小动物设施"
      },
      {
        "key": "C",
        "text": "升压变电站、降压变电站"
      },
      {
        "key": "D",
        "text": "可分为直流变电站、交流变电站"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电容器组（无功补偿）"
  },
  {
    "id": "kp086",
    "category": "变电运行",
    "page": 12,
    "type": "single",
    "prompt": "下列哪项属于“一次设备”？",
    "options": [
      {
        "key": "A",
        "text": "升压变电站、降压变电站"
      },
      {
        "key": "B",
        "text": "消防设施、防小动物设施"
      },
      {
        "key": "C",
        "text": "可分为直流变电站、交流变电站"
      },
      {
        "key": "D",
        "text": "电抗器（无功补偿）"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "电抗器（无功补偿）"
  },
  {
    "id": "kp087",
    "category": "变电运行",
    "page": 12,
    "type": "multiple",
    "prompt": "关于站用变，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "输出110V相电压和220V线电压"
      },
      {
        "key": "B",
        "text": "仅有油浸式一种"
      },
      {
        "key": "C",
        "text": "输出220V相电压和380V线电压"
      },
      {
        "key": "D",
        "text": "分为干式和油浸式"
      }
    ],
    "correct": [
      "C",
      "D"
    ],
    "answerText": "站用变（输出220V相电压和380V线电压,分为干式和油浸式）"
  },
  {
    "id": "kp088",
    "category": "变电运行",
    "page": 13,
    "type": "single",
    "prompt": "二次设备是：",
    "options": [
      {
        "key": "A",
        "text": "继电保护装置、安全自动装置、测控装置及监控系统（遥测、遥控、遥信、遥调）、直流系统"
      },
      {
        "key": "B",
        "text": "可分为1000kV、750kV、500kV、220kV、110kV、10kV等"
      },
      {
        "key": "C",
        "text": "通过自动化与信息化手段实现对一次设备的监测、控制、保护及通信"
      },
      {
        "key": "D",
        "text": "消防设施、防小动物设施"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "二次设备：继电保护装置、安全自动装置、测控装置及监控系统（遥测、遥控、遥信、遥调）、直流系统。"
  },
  {
    "id": "kp089",
    "category": "变电运行",
    "page": 13,
    "type": "single",
    "prompt": "二次设备核心功能是：",
    "options": [
      {
        "key": "A",
        "text": "通过自动化与信息化手段实现对一次设备的监测、控制、保护及通信"
      },
      {
        "key": "B",
        "text": "继电保护装置、安全自动装置、测控装置及监控系统（遥测、遥控、遥信、遥调）、直流系统"
      },
      {
        "key": "C",
        "text": "消防设施、防小动物设施"
      },
      {
        "key": "D",
        "text": "变电运行、变电检修、电气试验、继保自动化、站用电源（5个）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "二次设备核心功能：通过自动化与信息化手段实现对一次设备的监测、控制、保护及通信。"
  },
  {
    "id": "kp090",
    "category": "变电运行",
    "page": 13,
    "type": "single",
    "prompt": "辅助设施是：",
    "options": [
      {
        "key": "A",
        "text": "继电保护装置、安全自动装置、测控装置及监控系统（遥测、遥控、遥信、遥调）、直流系统"
      },
      {
        "key": "B",
        "text": "通过自动化与信息化手段实现对一次设备的监测、控制、保护及通信"
      },
      {
        "key": "C",
        "text": "其核心作用是限制过电压"
      },
      {
        "key": "D",
        "text": "消防设施、防小动物设施"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "辅助设施：消防设施、防小动物设施。"
  },
  {
    "id": "kp091",
    "category": "配电运行",
    "page": 15,
    "type": "single",
    "prompt": "直流是：",
    "options": [
      {
        "key": "A",
        "text": "±900kV、±500kV"
      },
      {
        "key": "B",
        "text": "±750kV、±500kV"
      },
      {
        "key": "C",
        "text": "±800kV、±500kV"
      },
      {
        "key": "D",
        "text": "±850kV、±500kV"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "直流：±800kV、±500kV"
  },
  {
    "id": "kp092",
    "category": "配电运行",
    "page": 15,
    "type": "single",
    "prompt": "高压是：",
    "options": [
      {
        "key": "A",
        "text": "500kV、220kV、110kV、35kV"
      },
      {
        "key": "B",
        "text": "450kV、220kV、110kV、35kV"
      },
      {
        "key": "C",
        "text": "550kV、220kV、110kV、35kV"
      },
      {
        "key": "D",
        "text": "600kV、220kV、110kV、35kV"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "高压：500kV、220kV、110kV、35kV"
  },
  {
    "id": "kp093",
    "category": "配电运行",
    "page": 16,
    "type": "single",
    "prompt": "中压是：",
    "options": [
      {
        "key": "A",
        "text": "10kV"
      },
      {
        "key": "B",
        "text": "15kV"
      },
      {
        "key": "C",
        "text": "20kV"
      },
      {
        "key": "D",
        "text": "5kV"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "中压：10kV"
  },
  {
    "id": "kp094",
    "category": "配电运行",
    "page": 16,
    "type": "single",
    "prompt": "低压是：",
    "options": [
      {
        "key": "A",
        "text": "480/220V"
      },
      {
        "key": "B",
        "text": "430/220V"
      },
      {
        "key": "C",
        "text": "330/220V"
      },
      {
        "key": "D",
        "text": "380/220V"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "低压：380/220V。"
  },
  {
    "id": "kp095",
    "category": "配电运行",
    "page": 16,
    "type": "multiple",
    "prompt": "10kV配电网的接线方式包括：",
    "options": [
      {
        "key": "A",
        "text": "n供一备型"
      },
      {
        "key": "B",
        "text": "无连接型"
      },
      {
        "key": "C",
        "text": "辐射型"
      },
      {
        "key": "D",
        "text": "环网型"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "10kv配电网：辐射型、环网型（单环网型和双环网型）、n供一备型和多分段n联络型"
  },
  {
    "id": "kp096",
    "category": "配电运行",
    "page": 16,
    "type": "single",
    "prompt": "低压配电网一般采用的接线方式是：",
    "options": [
      {
        "key": "A",
        "text": "以配电变压器为中心的辐射型接线"
      },
      {
        "key": "B",
        "text": "完全无联络接线"
      },
      {
        "key": "C",
        "text": "无配电变压器的环形接线"
      },
      {
        "key": "D",
        "text": "超高压双母线接线"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "低压配电网：一般采用以配电变压器为中心的辐射型接线。"
  },
  {
    "id": "kp097",
    "category": "配电运行",
    "page": 16,
    "type": "single",
    "prompt": "N-1安全准则是：",
    "options": [
      {
        "key": "A",
        "text": "正常运行方式下的电力系统中任一元件（如线路、发电机、变压器）无故障或因故障断开，电力系统应能保持稳定运行和正常供电"
      },
      {
        "key": "B",
        "text": "正常停运方式下的电力系统中任一元件（如线路、发电机、变压器）无故障或因故障断开，电力系统应能保持稳定运行和正常供电"
      },
      {
        "key": "C",
        "text": "异常运行方式下的电力系统中任一元件（如线路、发电机、变压器）无故障或因故障断开，电力系统应能保持稳定运行和正常供电"
      },
      {
        "key": "D",
        "text": "辐射型、环网型（单环网型和双环网型）、n供一备型和多分段n联络型"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "💡 N-1安全准则：正常运行方式下的电力系统中任一元件（如线路、发电机、变压器）无故障或因故障断开，电力系统应能保持稳定运行和正常供电"
  },
  {
    "id": "kp098",
    "category": "配电运行",
    "page": 17,
    "type": "single",
    "prompt": "关于“配电网的中性点”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "380/220V"
      },
      {
        "key": "B",
        "text": "±800kV、±500kV"
      },
      {
        "key": "C",
        "text": "10kV"
      },
      {
        "key": "D",
        "text": "星形连接的变压器中性点"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "配电网的中性点是指星形连接的变压器中性点"
  },
  {
    "id": "kp099",
    "category": "配电运行",
    "page": 17,
    "type": "multiple",
    "prompt": "常用的中性点接地方式包括：",
    "options": [
      {
        "key": "A",
        "text": "中性点经消弧线圈接地"
      },
      {
        "key": "B",
        "text": "中性点经大电容接地"
      },
      {
        "key": "C",
        "text": "中性点直接接地"
      },
      {
        "key": "D",
        "text": "中性点经小电阻接地"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "中性点直接接地中性点经小电阻接地中性点经消弧线圈接地10kV电网的中性点接地一般采用经小电阻接地或经消弧线圈接地方式低压配电网中性点接地一般采用直接接地方式。"
  },
  {
    "id": "kp100",
    "category": "配电运行",
    "page": 17,
    "type": "single",
    "prompt": "杆塔分类按材料是：",
    "options": [
      {
        "key": "A",
        "text": "钢筋混凝土杆（水泥杆）、铁塔（钢管杆）、木杆（已淘汰）"
      },
      {
        "key": "B",
        "text": "中压配网通常使用交联聚乙烯绝缘电力电缆(记住交联二字）"
      },
      {
        "key": "C",
        "text": "超过10km以上的输电线路要用换位杆进行导线换位，以减少电流电压不对称，限制对通信线路影响"
      },
      {
        "key": "D",
        "text": "终端杆、转角杆、分支杆、耐张杆（总之不适用于直线杆）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "按材料：钢筋混凝土杆（水泥杆）、铁塔（钢管杆）、木杆（已淘汰）"
  },
  {
    "id": "kp101",
    "category": "配电运行",
    "page": 17,
    "type": "single",
    "prompt": "耐张杆塔特点是：",
    "options": [
      {
        "key": "A",
        "text": "两侧导线通过耐张绝缘子串挂在杆塔两侧并通过引流线（跳线）连接。分为直线耐张、转角耐张、终端耐张"
      },
      {
        "key": "B",
        "text": "超过10km以上的输电线路要用换位杆进行导线换位，以减少电流电压不对称，限制对通信线路影响"
      },
      {
        "key": "C",
        "text": "钢筋混凝土杆（水泥杆）、铁塔（钢管杆）、木杆（已淘汰）"
      },
      {
        "key": "D",
        "text": "终端和接头电缆终端通常称为电缆终端头，即终端=终端头：按环境分户内终端和户外终端"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "耐张杆塔特点：两侧导线通过耐张绝缘子串挂在杆塔两侧并通过引流线（跳线）连接。分为直线耐张、转角耐张、终端耐张。"
  },
  {
    "id": "kp102",
    "category": "配电运行",
    "page": 17,
    "type": "single",
    "prompt": "换位塔是：",
    "options": [
      {
        "key": "A",
        "text": "超过20km以上的输电线路要用换位杆进行导线换位，以减少电流电压不对称，限制对通信线路影响"
      },
      {
        "key": "B",
        "text": "超过15km以上的输电线路要用换位杆进行导线换位，以减少电流电压不对称，限制对通信线路影响"
      },
      {
        "key": "C",
        "text": "超过5km以上的输电线路要用换位杆进行导线换位，以减少电流电压不对称，限制对通信线路影响"
      },
      {
        "key": "D",
        "text": "超过10km以上的输电线路要用换位杆进行导线换位，以减少电流电压不对称，限制对通信线路影响"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "换位塔：超过10km以上的输电线路要用换位杆进行导线换位，以减少电流电压不对称，限制对通信线路影响。"
  },
  {
    "id": "kp103",
    "category": "配电运行",
    "page": 18,
    "type": "single",
    "prompt": "导线作用是：",
    "options": [
      {
        "key": "A",
        "text": "普通、水平、弓形、人字、十字、V形、平拉线"
      },
      {
        "key": "B",
        "text": "平衡导线、避雷线的张力，保证杆塔稳定性"
      },
      {
        "key": "C",
        "text": "传导电流、输送电能，通过绝缘子固定在杆塔上"
      },
      {
        "key": "D",
        "text": "金具用于支持、固定和接续导线及绝缘子连接成串，亦用于保护导线和绝缘子"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "导线作用：传导电流、输送电能，通过绝缘子固定在杆塔上"
  },
  {
    "id": "kp104",
    "category": "配电运行",
    "page": 18,
    "type": "multiple",
    "prompt": "导线按外绝缘层分类包括：",
    "options": [
      {
        "key": "A",
        "text": "裸导线"
      },
      {
        "key": "B",
        "text": "液体导线"
      },
      {
        "key": "C",
        "text": "绝缘导线"
      },
      {
        "key": "D",
        "text": "木质导线"
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "answerText": "分类（按外绝缘层）：裸导线（中压线路）、绝缘导线（用于中压架空绝缘线路要增设避雷器）导线型号含义（要知道LGJ是钢芯铝绞线，L铝、G钢、J绞；JKLYJ =架空绝缘铝芯交联聚乙烯（常考“JK”代表架空））普通型和轻型钢芯铝绞线用于一般地区，加强型钢芯铝绞线用于重冰区和大跨越地段"
  },
  {
    "id": "kp105",
    "category": "配电运行",
    "page": 18,
    "type": "single",
    "prompt": "配电线路金具的作用是：",
    "options": [
      {
        "key": "A",
        "text": "支持、固定和接续导线及绝缘子连接成串"
      },
      {
        "key": "B",
        "text": "承担发电机调频"
      },
      {
        "key": "C",
        "text": "测量客户用电量"
      },
      {
        "key": "D",
        "text": "改变电网运行频率"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "金具用于支持、固定和接续导线及绝缘子连接成串，亦用于保护导线和绝缘子。"
  },
  {
    "id": "kp106",
    "category": "配电运行",
    "page": 18,
    "type": "single",
    "prompt": "拉线作用是：",
    "options": [
      {
        "key": "A",
        "text": "终端杆、转角杆、分支杆、耐张杆（总之不适用于直线杆）"
      },
      {
        "key": "B",
        "text": "普通、水平、弓形、人字、十字、V形、平拉线"
      },
      {
        "key": "C",
        "text": "直线杆"
      },
      {
        "key": "D",
        "text": "平衡导线、避雷线的张力，保证杆塔稳定性"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "拉线作用：平衡导线、避雷线的张力，保证杆塔稳定性。"
  },
  {
    "id": "kp107",
    "category": "配电运行",
    "page": 18,
    "type": "single",
    "prompt": "拉线类型是：",
    "options": [
      {
        "key": "A",
        "text": "终端杆、转角杆、分支杆、耐张杆（总之不适用于直线杆）"
      },
      {
        "key": "B",
        "text": "直线杆"
      },
      {
        "key": "C",
        "text": "普通、水平、弓形、人字、十字、V形、平拉线"
      },
      {
        "key": "D",
        "text": "平衡导线、避雷线的张力，保证杆塔稳定性"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "拉线类型：普通、水平、弓形、人字、十字、V形、平拉线。"
  },
  {
    "id": "kp108",
    "category": "配电运行",
    "page": 18,
    "type": "single",
    "prompt": "普通拉线是：",
    "options": [
      {
        "key": "A",
        "text": "终端杆、转角杆、分支杆、耐张杆（总之不适用于直线杆）"
      },
      {
        "key": "B",
        "text": "直线杆"
      },
      {
        "key": "C",
        "text": "普通、水平、弓形、人字、十字、V形、平拉线"
      },
      {
        "key": "D",
        "text": "平衡导线、避雷线的张力，保证杆塔稳定性"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "普通拉线：终端杆、转角杆、分支杆、耐张杆（总之不适用于直线杆）"
  },
  {
    "id": "kp109",
    "category": "配电运行",
    "page": 18,
    "type": "single",
    "prompt": "人字拉线是：",
    "options": [
      {
        "key": "A",
        "text": "直线杆"
      },
      {
        "key": "B",
        "text": "平衡导线、避雷线的张力，保证杆塔稳定性"
      },
      {
        "key": "C",
        "text": "普通、水平、弓形、人字、十字、V形、平拉线"
      },
      {
        "key": "D",
        "text": "终端杆、转角杆、分支杆、耐张杆（总之不适用于直线杆）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "人字拉线：直线杆"
  },
  {
    "id": "kp110",
    "category": "配电运行",
    "page": 19,
    "type": "multiple",
    "prompt": "电缆的基本结构包括：",
    "options": [
      {
        "key": "A",
        "text": "护套"
      },
      {
        "key": "B",
        "text": "绝缘层"
      },
      {
        "key": "C",
        "text": "叶轮"
      },
      {
        "key": "D",
        "text": "导体"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "基本结构：导体、绝缘层、护套三大部分，6kV以上电缆，导体和绝缘层外还有屏蔽层。"
  },
  {
    "id": "kp111",
    "category": "配电运行",
    "page": 19,
    "type": "single",
    "prompt": "关于“中压配网通常使用交联聚乙烯绝缘电力电缆”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "导体、绝缘层、护套三大部分，6kV以上电缆，导体和绝缘层外还有屏蔽层"
      },
      {
        "key": "B",
        "text": "终端和接头电缆终端通常称为电缆终端头，即终端=终端头：按环境分户内终端和户外终端"
      },
      {
        "key": "C",
        "text": "中压配网通常使用交联聚乙烯绝缘电力电缆(记住交联二字）"
      },
      {
        "key": "D",
        "text": "直埋敷设、排管敷设、沟道敷设敷设方法分为人力敷设和机械敷设"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "中压配网通常使用交联聚乙烯绝缘电力电缆(记住交联二字）"
  },
  {
    "id": "kp112",
    "category": "配电运行",
    "page": 19,
    "type": "multiple",
    "prompt": "关于电缆终端，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "电缆终端通常称为电缆终端头"
      },
      {
        "key": "B",
        "text": "电缆终端仅能安装在户内"
      },
      {
        "key": "C",
        "text": "按环境分户内终端和户外终端"
      },
      {
        "key": "D",
        "text": "电缆终端等同于中间头"
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "answerText": "电缆附件：终端和接头电缆终端通常称为电缆终端头，即终端=终端头：按环境分户内终端和户外终端"
  },
  {
    "id": "kp113",
    "category": "配电运行",
    "page": 19,
    "type": "single",
    "prompt": "电缆接头通常称为：",
    "options": [
      {
        "key": "A",
        "text": "电缆中间头"
      },
      {
        "key": "B",
        "text": "电缆终端头"
      },
      {
        "key": "C",
        "text": "电缆屏蔽头"
      },
      {
        "key": "D",
        "text": "电缆分支箱"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电缆接头通常称为电缆中间头，即接头=中间头"
  },
  {
    "id": "kp114",
    "category": "配电运行",
    "page": 19,
    "type": "multiple",
    "prompt": "电缆敷设方式包括：",
    "options": [
      {
        "key": "A",
        "text": "沟道敷设"
      },
      {
        "key": "B",
        "text": "排管敷设"
      },
      {
        "key": "C",
        "text": "架空裸线敷设"
      },
      {
        "key": "D",
        "text": "直埋敷设"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "电缆敷设方式：直埋敷设、排管敷设、沟道敷设敷设方法分为人力敷设和机械敷设"
  },
  {
    "id": "kp115",
    "category": "配电运行",
    "page": 19,
    "type": "single",
    "prompt": "电缆优缺点的优点是：",
    "options": [
      {
        "key": "A",
        "text": "电缆接头事故占电缆事故的70%，外力破坏（机械损伤）占30%"
      },
      {
        "key": "B",
        "text": "SCB系列（SCB10、SCB11等）"
      },
      {
        "key": "C",
        "text": "安全可靠，不占空间，外界影响小"
      },
      {
        "key": "D",
        "text": "造价高，不变分支，施工难度大"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "优点：安全可靠，不占空间，外界影响小"
  },
  {
    "id": "kp116",
    "category": "配电运行",
    "page": 19,
    "type": "single",
    "prompt": "电缆优缺点的缺点是：",
    "options": [
      {
        "key": "A",
        "text": "造价高，不变分支，施工难度大"
      },
      {
        "key": "B",
        "text": "SCB系列（SCB10、SCB11等）"
      },
      {
        "key": "C",
        "text": "安全可靠，不占空间，外界影响小"
      },
      {
        "key": "D",
        "text": "电缆接头事故占电缆事故的70%，外力破坏（机械损伤）占30%"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "缺点：造价高，不变分支，施工难度大"
  },
  {
    "id": "kp117",
    "category": "配电运行",
    "page": 19,
    "type": "single",
    "prompt": "电缆故障是：",
    "options": [
      {
        "key": "A",
        "text": "电缆接头事故占电缆事故的70%，外力破坏（机械损伤）占30%"
      },
      {
        "key": "B",
        "text": "电缆接头事故占电缆事故的75%，外力破坏（机械损伤）占30%"
      },
      {
        "key": "C",
        "text": "电缆接头事故占电缆事故的80%，外力破坏（机械损伤）占30%"
      },
      {
        "key": "D",
        "text": "电缆接头事故占电缆事故的65%，外力破坏（机械损伤）占30%"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电缆故障：电缆接头事故占电缆事故的70%，外力破坏（机械损伤）占30%。"
  },
  {
    "id": "kp118",
    "category": "配电运行",
    "page": 19,
    "type": "multiple",
    "prompt": "配电变压器按绝缘方式可分为：",
    "options": [
      {
        "key": "A",
        "text": "水浸式"
      },
      {
        "key": "B",
        "text": "油浸式"
      },
      {
        "key": "C",
        "text": "真空式"
      },
      {
        "key": "D",
        "text": "干式"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "answerText": "按绝缘方式分类：干式和油浸式（绝缘介质不同，油or空气）"
  },
  {
    "id": "kp119",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "油浸式新型号是：",
    "options": [
      {
        "key": "A",
        "text": "S21、S13、SH15（S7及以下为高损耗淘汰）"
      },
      {
        "key": "B",
        "text": "S6、S13、SH15（S7及以下为高损耗淘汰）"
      },
      {
        "key": "C",
        "text": "S11、S13、SH15（S7及以下为高损耗淘汰）"
      },
      {
        "key": "D",
        "text": "S16、S13、SH15（S7及以下为高损耗淘汰）"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "油浸式新型号：S11、S13、SH15（S7及以下为高损耗淘汰）"
  },
  {
    "id": "kp120",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "干式常用是：",
    "options": [
      {
        "key": "A",
        "text": "SCB系列（SCB10、SCB11等）"
      },
      {
        "key": "B",
        "text": "SCB系列（SCB5、SCB11等）"
      },
      {
        "key": "C",
        "text": "SCB系列（SCB15、SCB11等）"
      },
      {
        "key": "D",
        "text": "SCB系列（SCB20、SCB11等）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "干式常用：SCB系列（SCB10、SCB11等）"
  },
  {
    "id": "kp121",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "预装式变电站是：",
    "options": [
      {
        "key": "A",
        "text": "欧变"
      },
      {
        "key": "B",
        "text": "美变"
      },
      {
        "key": "C",
        "text": "相对于预装式变电站，组合式变电站占地更小"
      },
      {
        "key": "D",
        "text": "中间头"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "预装式变电站：欧变"
  },
  {
    "id": "kp122",
    "category": "配电运行",
    "page": 20,
    "type": "multiple",
    "prompt": "关于组合式变电站，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "欧变"
      },
      {
        "key": "B",
        "text": "相对于预装式变电站，组合式变电站占地更小"
      },
      {
        "key": "C",
        "text": "相对于预装式变电站，组合式变电站占地更大"
      },
      {
        "key": "D",
        "text": "美变"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "answerText": "组合式变电站：美变；相对于预装式变电站，组合式变电站占地更小。"
  },
  {
    "id": "kp123",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "相色标识是：",
    "options": [
      {
        "key": "A",
        "text": "电缆接头事故占电缆事故的70%，外力破坏（机械损伤）占30%"
      },
      {
        "key": "B",
        "text": "介于断路器和隔离开关之间的一种开关电器，具有简单灭弧装置"
      },
      {
        "key": "C",
        "text": "A相-黄色，B相-绿色，C相-红色，零线/中性线（N)-黑色"
      },
      {
        "key": "D",
        "text": "10kV配电线路分支线和配电变压器最常用的一种短路保护开关"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "相色标识：A相-黄色，B相-绿色，C相-红色，零线/中性线（N)-黑色。"
  },
  {
    "id": "kp124",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "隔离开关是指：",
    "options": [
      {
        "key": "A",
        "text": "隔离电源、倒闸操作、用以连通和切断小电流电路，无灭弧功能的开关器件。（不能切断短路电流，不能带负荷操作）"
      },
      {
        "key": "B",
        "text": "A相-黄色，B相-绿色，C相-红色，零线/中性线（N)-黑色"
      },
      {
        "key": "C",
        "text": "超过10km以上的输电线路要用换位杆进行导线换位，以减少电流电压不对称，限制对通信线路影响"
      },
      {
        "key": "D",
        "text": "终端和接头电缆终端通常称为电缆终端头，即终端=终端头：按环境分户内终端和户外终端"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "定义：隔离电源、倒闸操作、用以连通和切断小电流电路，无灭弧功能的开关器件。（不能切断短路电流，不能带负荷操作）"
  },
  {
    "id": "kp125",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "高压跌落式熔断器的用途是：",
    "options": [
      {
        "key": "A",
        "text": "10kV配电线路分支线和配电变压器最常用的一种短路保护开关"
      },
      {
        "key": "B",
        "text": "用于切换低压照明回路"
      },
      {
        "key": "C",
        "text": "用于测量线路有功电能"
      },
      {
        "key": "D",
        "text": "用于调整发电机频率"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "10kV配电线路分支线和配电变压器最常用的一种短路保护开关"
  },
  {
    "id": "kp126",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "高压负荷开关的特点是：",
    "options": [
      {
        "key": "A",
        "text": "可以替代电流互感器计量"
      },
      {
        "key": "B",
        "text": "没有任何灭弧装置"
      },
      {
        "key": "C",
        "text": "仅用于测量接地电阻"
      },
      {
        "key": "D",
        "text": "介于断路器和隔离开关之间的一种开关电器，具有简单灭弧装置"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "介于断路器和隔离开关之间的一种开关电器，具有简单灭弧装置。"
  },
  {
    "id": "kp127",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "关于“能切断额定负荷电流和一定的过载电流”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "能切断额定负荷电流和一定的过载电流，但不能切断短路电流。需要切断短路电流时依靠串接的高压熔断器。断路器不可以切断短路电流，有完整灭弧装置"
      },
      {
        "key": "B",
        "text": "能切断额定负荷电流和一定的过载电流，但不能切断短路电流。不需要切断短路电流时依靠串接的高压熔断器。断路器可以切断短路电流，有完整灭弧装置"
      },
      {
        "key": "C",
        "text": "能切断额定负荷电流和一定的过载电流，但不能切断短路电流。需要切断短路电流时依靠串接的高压熔断器。断路器可以切断短路电流，有完整灭弧装置"
      },
      {
        "key": "D",
        "text": "能切断额定负荷电流和一定的过载电流，但不能切断短路电流。需要切断短路电流时依靠串接的低压熔断器。断路器可以切断短路电流，有完整灭弧装置"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "能切断额定负荷电流和一定的过载电流，但不能切断短路电流。需要切断短路电流时依靠串接的高压熔断器。断路器可以切断短路电流，有完整灭弧装置。"
  },
  {
    "id": "kp128",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "高压开关柜“五防”要求包括：",
    "options": [
      {
        "key": "A",
        "text": "防止误分、误合断路器"
      },
      {
        "key": "B",
        "text": "允许人员进入带电间隔"
      },
      {
        "key": "C",
        "text": "允许带负荷操作隔离开关"
      },
      {
        "key": "D",
        "text": "允许带地线送电"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "防止误分、误合断路器"
  },
  {
    "id": "kp129",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "高压开关柜“五防”要求包括：",
    "options": [
      {
        "key": "A",
        "text": "防止带负荷分、合隔离开关"
      },
      {
        "key": "B",
        "text": "允许带负荷操作隔离开关"
      },
      {
        "key": "C",
        "text": "允许带地线送电"
      },
      {
        "key": "D",
        "text": "允许人员进入带电间隔"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "防止带负荷分、合隔离开关"
  },
  {
    "id": "kp130",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "高压开关柜“五防”要求包括：",
    "options": [
      {
        "key": "A",
        "text": "允许带地线送电"
      },
      {
        "key": "B",
        "text": "允许带负荷操作隔离开关"
      },
      {
        "key": "C",
        "text": "允许人员进入带电间隔"
      },
      {
        "key": "D",
        "text": "防止带电挂（合）接地线（接地开关）"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "防止带电挂（合）接地线（接地开关）"
  },
  {
    "id": "kp131",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "高压开关柜“五防”要求包括：",
    "options": [
      {
        "key": "A",
        "text": "允许带地线送电"
      },
      {
        "key": "B",
        "text": "允许人员进入带电间隔"
      },
      {
        "key": "C",
        "text": "防止带地线送电"
      },
      {
        "key": "D",
        "text": "允许带负荷操作隔离开关"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "防止带地线送电"
  },
  {
    "id": "kp132",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "高压开关柜“五防”要求包括：",
    "options": [
      {
        "key": "A",
        "text": "防止误入带电间隔"
      },
      {
        "key": "B",
        "text": "允许人员进入带电间隔"
      },
      {
        "key": "C",
        "text": "允许带负荷操作隔离开关"
      },
      {
        "key": "D",
        "text": "允许带地线送电"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "防止误入带电间隔"
  },
  {
    "id": "kp133",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "关于“高压开关柜五防装置”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "目前中压开关柜主要以机械联锁、机械程序锁为主"
      },
      {
        "key": "B",
        "text": "目前中压开关柜次要以机械联锁、机械程序锁为主"
      },
      {
        "key": "C",
        "text": "电流互感器（CT)和电压互感器(PT)的统称"
      },
      {
        "key": "D",
        "text": "防止带电挂（合）接地线（接地开关）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "目前中压开关柜主要以机械联锁、机械程序锁为主。"
  },
  {
    "id": "kp134",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "带电显示器是：",
    "options": [
      {
        "key": "A",
        "text": "防止带地线送电"
      },
      {
        "key": "B",
        "text": "显示停运电压"
      },
      {
        "key": "C",
        "text": "防止误入带电间隔"
      },
      {
        "key": "D",
        "text": "显示运行电压"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "带电显示器：显示运行电压。"
  },
  {
    "id": "kp135",
    "category": "配电运行",
    "page": 20,
    "type": "single",
    "prompt": "互感器是：",
    "options": [
      {
        "key": "A",
        "text": "防止带电挂（合）接地线（接地开关）"
      },
      {
        "key": "B",
        "text": "防止带负荷分、合隔离开关"
      },
      {
        "key": "C",
        "text": "电流互感器（CT)和电压互感器(PT)的统称"
      },
      {
        "key": "D",
        "text": "目前中压开关柜主要以机械联锁、机械程序锁为主"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "互感器：电流互感器（CT)和电压互感器(PT)的统称。"
  },
  {
    "id": "kp136",
    "category": "配电运行",
    "page": 20,
    "type": "multiple",
    "prompt": "关于互感器二次侧安全要求，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "电流互感器二次侧不得开路"
      },
      {
        "key": "B",
        "text": "电压互感器二次侧必须短路"
      },
      {
        "key": "C",
        "text": "电压互感器二次侧严禁短路"
      },
      {
        "key": "D",
        "text": "电流互感器二次侧必须开路"
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "answerText": "电流互感器二次侧不得开路！电压互感器二次侧严禁短路！电流互感器和电压互感器二次侧有一端子必须接地（防止一、二次绝缘击穿，高压串入二次侧）"
  },
  {
    "id": "kp137",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "电缆分接箱是：",
    "options": [
      {
        "key": "A",
        "text": "主要由电缆附件构成的开关设备"
      },
      {
        "key": "B",
        "text": "次要由电缆附件构成的开关设备"
      },
      {
        "key": "C",
        "text": "功能相同，电缆分接箱用于户外，开关柜用于户内"
      },
      {
        "key": "D",
        "text": "SCB系列（SCB10、SCB11等）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电缆分接箱：主要由电缆附件构成的开关设备。"
  },
  {
    "id": "kp138",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "与开关柜区别是：",
    "options": [
      {
        "key": "A",
        "text": "SCB系列（SCB10、SCB11等）"
      },
      {
        "key": "B",
        "text": "主要由电缆附件构成的开关设备"
      },
      {
        "key": "C",
        "text": "S11、S13、SH15（S7及以下为高损耗淘汰）"
      },
      {
        "key": "D",
        "text": "功能相同，电缆分接箱用于户外，开关柜用于户内"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "与开关柜区别：功能相同，电缆分接箱用于户外，开关柜用于户内。"
  },
  {
    "id": "kp139",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "避雷器的作用是：",
    "options": [
      {
        "key": "A",
        "text": "按安装位置分架空线路型和电缆型"
      },
      {
        "key": "B",
        "text": "按功能分就地型、远传型、智能型"
      },
      {
        "key": "C",
        "text": "限制过电压幅值，保护电气设备绝缘"
      },
      {
        "key": "D",
        "text": "氧化锌避雷器（目前常用）"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "作用：限制过电压幅值，保护电气设备绝缘。"
  },
  {
    "id": "kp140",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "关于“氧化锌避雷器”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "氧化锌避雷器（目前常用）"
      },
      {
        "key": "B",
        "text": "防止带负荷分、合隔离开关"
      },
      {
        "key": "C",
        "text": "限制过电压幅值，保护电气设备绝缘"
      },
      {
        "key": "D",
        "text": "主要由电缆附件构成的开关设备"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "氧化锌避雷器（目前常用）"
  },
  {
    "id": "kp141",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "配电自动化是指：",
    "options": [
      {
        "key": "A",
        "text": "以一次网架和设备为基础，综合运用计算机、自动控制、电子、通信技术，以配电自动化系统为核心，实现对配电网正常运行及事故情况下的监测、保护及控制"
      },
      {
        "key": "B",
        "text": "以一次网架和设备为基础，综合运用计算机、自动控制、电子、通信技术，以配电自动化系统为核心，实现对配电网正常停运及事故情况下的监测、保护及控制"
      },
      {
        "key": "C",
        "text": "以一次网架和设备为基础，综合运用计算机、自动控制、电子、通信技术，以配电自动化系统为核心，实现对配电网异常运行及事故情况下的监测、保护及控制"
      },
      {
        "key": "D",
        "text": "以一次网架和设备为基础，单一运用计算机、自动控制、电子、通信技术，以配电自动化系统为核心，实现对配电网正常运行及事故情况下的监测、保护及控制"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "定义：以一次网架和设备为基础，综合运用计算机、自动控制、电子、通信技术，以配电自动化系统为核心，实现对配电网正常运行及事故情况下的监测、保护及控制。"
  },
  {
    "id": "kp142",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "配电自动化的组成是：",
    "options": [
      {
        "key": "A",
        "text": "按功能分就地型、远传型、智能型"
      },
      {
        "key": "B",
        "text": "按安装位置分架空线路型和电缆型"
      },
      {
        "key": "C",
        "text": "馈线终端（FTU)、站所终端（DTU)、配变监测终端(TTU)"
      },
      {
        "key": "D",
        "text": "主站、子站、终端和配网通信通道（通信通道：光纤、载波、无线）"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "组成：主站、子站、终端和配网通信通道（通信通道：光纤、载波、无线）。"
  },
  {
    "id": "kp143",
    "category": "配电运行",
    "page": 21,
    "type": "multiple",
    "prompt": "故障指示器分类包括哪些内容？",
    "options": [
      {
        "key": "A",
        "text": "主站、子站、终端和配网通信通道（通信通道：光纤、载波、无线）"
      },
      {
        "key": "B",
        "text": "限制过电压幅值，保护电气设备绝缘"
      },
      {
        "key": "C",
        "text": "按安装位置分架空线路型和电缆型"
      },
      {
        "key": "D",
        "text": "按功能分就地型、远传型、智能型"
      }
    ],
    "correct": [
      "C",
      "D"
    ],
    "answerText": "故障指示器分类：按安装位置分架空线路型和电缆型；按功能分就地型、远传型、智能型。"
  },
  {
    "id": "kp144",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "配电自动化终端是指：",
    "options": [
      {
        "key": "A",
        "text": "安装在10kV及以上配电网的各种远方监测、控制单元的总称"
      },
      {
        "key": "B",
        "text": "安装在5kV及以上配电网的各种远方监测、控制单元的总称"
      },
      {
        "key": "C",
        "text": "安装在15kV及以上配电网的各种远方监测、控制单元的总称"
      },
      {
        "key": "D",
        "text": "安装在20kV及以上配电网的各种远方监测、控制单元的总称"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "定义：安装在10kV及以上配电网的各种远方监测、控制单元的总称"
  },
  {
    "id": "kp145",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "配电自动化终端的分类是：",
    "options": [
      {
        "key": "A",
        "text": "馈线终端（FTU)、站所终端（DTU)、配变监测终端(TTU)"
      },
      {
        "key": "B",
        "text": "安装在10kV及以上配电网的各种远方监测、控制单元的总称"
      },
      {
        "key": "C",
        "text": "主站、子站、终端和配网通信通道（通信通道：光纤、载波、无线）"
      },
      {
        "key": "D",
        "text": "作为继电保护、配网自动化终端的电源，以及开关电动操作电源"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "分类：馈线终端（FTU)、站所终端（DTU)、配变监测终端(TTU)"
  },
  {
    "id": "kp146",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "关于“作为继电保护、配网自动化终端的电源”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "接地体+接地线"
      },
      {
        "key": "B",
        "text": "按安装方式分直流电源屏（柜）和直流电源箱"
      },
      {
        "key": "C",
        "text": "安装在10kV及以上配电网的各种远方监测、控制单元的总称"
      },
      {
        "key": "D",
        "text": "作为继电保护、配网自动化终端的电源，以及开关电动操作电源"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "作为继电保护、配网自动化终端的电源，以及开关电动操作电源。"
  },
  {
    "id": "kp147",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "直流电源的分类是：",
    "options": [
      {
        "key": "A",
        "text": "接地体+接地线"
      },
      {
        "key": "B",
        "text": "功能相同，电缆分接箱用于户外，开关柜用于户内"
      },
      {
        "key": "C",
        "text": "按安装方式分直流电源屏（柜）和直流电源箱"
      },
      {
        "key": "D",
        "text": "作为继电保护、配网自动化终端的电源，以及开关电动操作电源"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "分类：按安装方式分直流电源屏（柜）和直流电源箱。"
  },
  {
    "id": "kp148",
    "category": "配电运行",
    "page": 21,
    "type": "single",
    "prompt": "接地装置是：",
    "options": [
      {
        "key": "A",
        "text": "接地体+接地线"
      },
      {
        "key": "B",
        "text": "防止带地线送电"
      },
      {
        "key": "C",
        "text": "按安装方式分直流电源屏（柜）和直流电源箱"
      },
      {
        "key": "D",
        "text": "作为继电保护、配网自动化终端的电源，以及开关电动操作电源"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "接地装置：接地体+接地线"
  },
  {
    "id": "kp149",
    "category": "新型电力系统",
    "page": 23,
    "type": "single",
    "prompt": "电力系统的运行特点是：",
    "options": [
      {
        "key": "A",
        "text": "同时、整体、快速、连续、随机（电的传播速度是光速，30万公里/秒）"
      },
      {
        "key": "B",
        "text": "同时、整体、快速、连续、随机（电的传播速度是光速，35万公里/秒）"
      },
      {
        "key": "C",
        "text": "同时、整体、快速、连续、随机（电的传播速度是光速，40万公里/秒）"
      },
      {
        "key": "D",
        "text": "同时、整体、快速、连续、随机（电的传播速度是光速，25万公里/秒）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电力系统的运行特点：同时、整体、快速、连续、随机（电的传播速度是光速，30万公里/秒）"
  },
  {
    "id": "kp150",
    "category": "新型电力系统",
    "page": 24,
    "type": "single",
    "prompt": "电力系统的构成（五大环节）是：",
    "options": [
      {
        "key": "A",
        "text": "输电→发电→变电→配电→用电"
      },
      {
        "key": "B",
        "text": "用电→配电→变电→输电→发电"
      },
      {
        "key": "C",
        "text": "发电-输电-配电-用户-分布式发电（用户侧也可发电）"
      },
      {
        "key": "D",
        "text": "发电 → 输电 → 变电 → 配电→ 用电"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "电力系统的构成（五大环节）：发电 → 输电 → 变电 → 配电→ 用电"
  },
  {
    "id": "kp151",
    "category": "新型电力系统",
    "page": 24,
    "type": "single",
    "prompt": "关于“2025总装机容量 相比 2020 提高60%”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "2035总装机容量 相比 2020 提高60%；全球占比 30%。风光领跑（40%）煤电转型（37.5%）"
      },
      {
        "key": "B",
        "text": "2020总装机容量 相比 2020 提高60%；全球占比 30%。风光领跑（40%）煤电转型（37.5%）"
      },
      {
        "key": "C",
        "text": "2025总装机容量 相比 2020 提高60%；全球占比 30%。风光领跑（40%）煤电转型（37.5%）"
      },
      {
        "key": "D",
        "text": "2030总装机容量 相比 2020 提高60%；全球占比 30%。风光领跑（40%）煤电转型（37.5%）"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "2025总装机容量 相比 2020 提高60%；全球占比 30%。风光领跑（40%）煤电转型（37.5%）"
  },
  {
    "id": "kp152",
    "category": "新型电力系统",
    "page": 24,
    "type": "single",
    "prompt": "关于“电力系统电源类型在碳中和目标与技术革命驱动下加速演变”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "电力系统电源类型在碳中和目标与技术革命驱动下加速演变，形成“基荷-调节-分布式”多元协同格局"
      },
      {
        "key": "B",
        "text": "发电 → 输电 → 变电 → 配电→ 用电"
      },
      {
        "key": "C",
        "text": "负荷与电源的属性匹配难以趋同（新能源发电高峰在午间，用电高峰在晚间）"
      },
      {
        "key": "D",
        "text": "发电-输电-配电-用户-分布式发电（用户侧也可发电）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电力系统电源类型在碳中和目标与技术革命驱动下加速演变，形成“基荷-调节-分布式”多元协同格局。"
  },
  {
    "id": "kp153",
    "category": "新型电力系统",
    "page": 24,
    "type": "single",
    "prompt": "负荷分类按电气特性是：",
    "options": [
      {
        "key": "A",
        "text": "阻性、感性、容性（典型设备与功率因数）"
      },
      {
        "key": "B",
        "text": "工业负荷、居民负荷、商业负荷、农业负荷"
      },
      {
        "key": "C",
        "text": "世界首个±800kV三端混合直流"
      },
      {
        "key": "D",
        "text": "电动汽车、数据中心、氢能制备"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "按电气特性：阻性、感性、容性（典型设备与功率因数）"
  },
  {
    "id": "kp154",
    "category": "新型电力系统",
    "page": 24,
    "type": "single",
    "prompt": "负荷分类按行业与用电场景分类是：",
    "options": [
      {
        "key": "A",
        "text": "世界首个±800kV三端混合直流"
      },
      {
        "key": "B",
        "text": "阻性、感性、容性（典型设备与功率因数）"
      },
      {
        "key": "C",
        "text": "电动汽车、数据中心、氢能制备"
      },
      {
        "key": "D",
        "text": "工业负荷、居民负荷、商业负荷、农业负荷"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "按行业与用电场景分类：工业负荷、居民负荷、商业负荷、农业负荷"
  },
  {
    "id": "kp155",
    "category": "新型电力系统",
    "page": 24,
    "type": "single",
    "prompt": "新兴负荷是：",
    "options": [
      {
        "key": "A",
        "text": "基荷、峰荷、腰荷、谷荷"
      },
      {
        "key": "B",
        "text": "工业负荷、居民负荷、商业负荷、农业负荷"
      },
      {
        "key": "C",
        "text": "电动汽车、数据中心、氢能制备"
      },
      {
        "key": "D",
        "text": "世界首个±800kV三端混合直流"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "新兴负荷：电动汽车、数据中心、氢能制备"
  },
  {
    "id": "kp156",
    "category": "新型电力系统",
    "page": 24,
    "type": "single",
    "prompt": "负荷分类按时间特性为：",
    "options": [
      {
        "key": "A",
        "text": "基荷、峰荷、腰荷、谷荷"
      },
      {
        "key": "B",
        "text": "高、大、远"
      },
      {
        "key": "C",
        "text": "电动汽车、数据中心、氢能制备"
      },
      {
        "key": "D",
        "text": "世界首个±800kV三端混合直流"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "按时间特性：基荷、峰荷、腰荷、谷荷"
  },
  {
    "id": "kp157",
    "category": "新型电力系统",
    "page": 24,
    "type": "single",
    "prompt": "昆柳龙直流工程是：",
    "options": [
      {
        "key": "A",
        "text": "世界首个±800kV三端混合直流"
      },
      {
        "key": "B",
        "text": "世界首个±850kV三端混合直流"
      },
      {
        "key": "C",
        "text": "世界首个±900kV三端混合直流"
      },
      {
        "key": "D",
        "text": "世界首个±750kV三端混合直流"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "昆柳龙直流工程：世界首个±800kV三端混合直流"
  },
  {
    "id": "kp158",
    "category": "新型电力系统",
    "page": 24,
    "type": "single",
    "prompt": "传统电力系统是：",
    "options": [
      {
        "key": "A",
        "text": "电动汽车、数据中心、氢能制备"
      },
      {
        "key": "B",
        "text": "基荷、峰荷、腰荷、谷荷"
      },
      {
        "key": "C",
        "text": "世界首个±800kV三端混合直流"
      },
      {
        "key": "D",
        "text": "高、大、远"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "传统电力系统：高、大、远"
  },
  {
    "id": "kp159",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "拓扑变化是：",
    "options": [
      {
        "key": "A",
        "text": "发电 → 输电 → 变电 → 配电→ 用电"
      },
      {
        "key": "B",
        "text": "电力占终端用能比重逐年提升，2060年达到80%"
      },
      {
        "key": "C",
        "text": "发电-输电-配电-用户-分布式发电（用户侧也可发电）"
      },
      {
        "key": "D",
        "text": "可靠、高效、充足、灵活、洁净"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "拓扑变化：发电-输电-配电-用户-分布式发电（用户侧也可发电）"
  },
  {
    "id": "kp160",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "主要特征是：",
    "options": [
      {
        "key": "A",
        "text": "可靠、高效、充足、灵活、洁净"
      },
      {
        "key": "B",
        "text": "电网调度控制技术需要适应性发展"
      },
      {
        "key": "C",
        "text": "发电-输电-配电-用户-分布式发电（用户侧也可发电）"
      },
      {
        "key": "D",
        "text": "经常性大面积停电的警示"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "主要特征：可靠、高效、充足、灵活、洁净"
  },
  {
    "id": "kp161",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "新型电力系统发展的原因包括：",
    "options": [
      {
        "key": "A",
        "text": "电力市场的推动"
      },
      {
        "key": "B",
        "text": "纸质流程数量增加"
      },
      {
        "key": "C",
        "text": "办公场所面积扩大"
      },
      {
        "key": "D",
        "text": "用户档案数量减少"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电力市场的推动"
  },
  {
    "id": "kp162",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "新型电力系统发展的原因包括：",
    "options": [
      {
        "key": "A",
        "text": "办公场所面积扩大"
      },
      {
        "key": "B",
        "text": "纸质流程数量增加"
      },
      {
        "key": "C",
        "text": "用户档案数量减少"
      },
      {
        "key": "D",
        "text": "经常性大面积停电的警示"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "经常性大面积停电的警示"
  },
  {
    "id": "kp163",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "新型电力系统发展的原因包括：",
    "options": [
      {
        "key": "A",
        "text": "办公场所面积扩大"
      },
      {
        "key": "B",
        "text": "用户档案数量减少"
      },
      {
        "key": "C",
        "text": "科技的推动"
      },
      {
        "key": "D",
        "text": "纸质流程数量增加"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "科技的推动。"
  },
  {
    "id": "kp164",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "我国实现碳达峰的目标年份是：",
    "options": [
      {
        "key": "A",
        "text": "2030年"
      },
      {
        "key": "B",
        "text": "2060年"
      },
      {
        "key": "C",
        "text": "2020年"
      },
      {
        "key": "D",
        "text": "2040年"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "2030年，碳达峰"
  },
  {
    "id": "kp165",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "我国实现碳中和的目标年份是：",
    "options": [
      {
        "key": "A",
        "text": "2060年"
      },
      {
        "key": "B",
        "text": "2030年"
      },
      {
        "key": "C",
        "text": "2040年"
      },
      {
        "key": "D",
        "text": "2050年"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "2060年，碳中和，预计清洁能源装机比例达80-90%。"
  },
  {
    "id": "kp166",
    "category": "新型电力系统",
    "page": 25,
    "type": "multiple",
    "prompt": "国际压力包括哪些内容？",
    "options": [
      {
        "key": "A",
        "text": "人均排放量是美国的55%"
      },
      {
        "key": "B",
        "text": "人均排放量是美国的50%"
      },
      {
        "key": "C",
        "text": "人均排放量是美国的60%"
      },
      {
        "key": "D",
        "text": "碳排放量全球第一"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "answerText": "国际压力：碳排放量全球第一；人均排放量是美国的50%。"
  },
  {
    "id": "kp167",
    "category": "新型电力系统",
    "page": 25,
    "type": "multiple",
    "prompt": "电力责任包括哪些内容？",
    "options": [
      {
        "key": "A",
        "text": "2017年为拐点（政策驱动）"
      },
      {
        "key": "B",
        "text": "2022年为拐点（政策驱动）"
      },
      {
        "key": "C",
        "text": "2012年为拐点（政策驱动）"
      },
      {
        "key": "D",
        "text": "2020年电力企业对碳排放控制起主导作用"
      }
    ],
    "correct": [
      "C",
      "D"
    ],
    "answerText": "电力责任：2012年为拐点（政策驱动）；2020年电力企业对碳排放控制起主导作用。"
  },
  {
    "id": "kp168",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "挑战一是：",
    "options": [
      {
        "key": "A",
        "text": "电力供应方面"
      },
      {
        "key": "B",
        "text": "电力成本方面"
      },
      {
        "key": "C",
        "text": "风光电源先天性“缺陷”（间歇性、波动性）"
      },
      {
        "key": "D",
        "text": "系统安全方面"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "挑战一：电力供应方面"
  },
  {
    "id": "kp169",
    "category": "新型电力系统",
    "page": 25,
    "type": "single",
    "prompt": "新型电力系统在电源方面面临的挑战是：",
    "options": [
      {
        "key": "A",
        "text": "风光电源先天性“缺陷”（间歇性、波动性）"
      },
      {
        "key": "B",
        "text": "风光电源完全连续且无波动"
      },
      {
        "key": "C",
        "text": "风光电源不受自然条件影响"
      },
      {
        "key": "D",
        "text": "风光电源可独立保证全部调频需求"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电源：风光电源先天性“缺陷”（间歇性、波动性）"
  },
  {
    "id": "kp170",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "新型电力系统在负荷方面面临的挑战是：",
    "options": [
      {
        "key": "A",
        "text": "负荷与电源无需进行时序匹配"
      },
      {
        "key": "B",
        "text": "新能源发电高峰与用电高峰始终完全重合"
      },
      {
        "key": "C",
        "text": "用电高峰固定在午间且永不变化"
      },
      {
        "key": "D",
        "text": "负荷与电源的属性匹配难以趋同"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "负荷：负荷与电源的属性匹配难以趋同（新能源发电高峰在午间，用电高峰在晚间）。"
  },
  {
    "id": "kp171",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "挑战二是：",
    "options": [
      {
        "key": "A",
        "text": "科技的推动"
      },
      {
        "key": "B",
        "text": "电力市场的推动"
      },
      {
        "key": "C",
        "text": "系统安全方面"
      },
      {
        "key": "D",
        "text": "电力成本方面"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "挑战二：系统安全方面"
  },
  {
    "id": "kp172",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "新型电力系统在系统安全方面面临的挑战是：",
    "options": [
      {
        "key": "A",
        "text": "系统的稳定性受到挑战"
      },
      {
        "key": "B",
        "text": "调度控制技术无需发展"
      },
      {
        "key": "C",
        "text": "系统稳定性不再需要关注"
      },
      {
        "key": "D",
        "text": "系统运行不受新能源影响"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "系统的稳定性受到挑战"
  },
  {
    "id": "kp173",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "新型电力系统对调度控制技术的要求是：",
    "options": [
      {
        "key": "A",
        "text": "电网调度控制技术需要适应性发展"
      },
      {
        "key": "B",
        "text": "电网调度控制技术无需调整"
      },
      {
        "key": "C",
        "text": "仅保留人工抄表技术"
      },
      {
        "key": "D",
        "text": "停止调度控制技术升级"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电网调度控制技术需要适应性发展。"
  },
  {
    "id": "kp174",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "挑战三是：",
    "options": [
      {
        "key": "A",
        "text": "科技的推动"
      },
      {
        "key": "B",
        "text": "系统安全方面"
      },
      {
        "key": "C",
        "text": "系统的稳定性受到挑战"
      },
      {
        "key": "D",
        "text": "电力成本方面"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "挑战三：电力成本方面"
  },
  {
    "id": "kp175",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "关于“表面上风光发电来自大自然”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "对煤炭的依赖逐年下降，2060年后更加平滑"
      },
      {
        "key": "B",
        "text": "“黑色”能源占比随2060年到来比例越发降低"
      },
      {
        "key": "C",
        "text": "表面上风光发电来自大自然，成本“很低”"
      },
      {
        "key": "D",
        "text": "替代率低，同样发电量所需装机容量增加"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "表面上风光发电来自大自然，成本“很低”"
  },
  {
    "id": "kp176",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "看不到的方面是：",
    "options": [
      {
        "key": "A",
        "text": "替代率低，同样发电量所需装机容量增加"
      },
      {
        "key": "B",
        "text": "对煤炭的依赖逐年下降，2060年后更加平滑"
      },
      {
        "key": "C",
        "text": "替代率低，同样发电量所需装机容量减少"
      },
      {
        "key": "D",
        "text": "表面上风光发电来自大自然，成本“很低”"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "看不到的方面：替代率低，同样发电量所需装机容量增加。"
  },
  {
    "id": "kp177",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "关于“对煤炭的依赖逐年下降”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "对煤炭的依赖逐年下降，2060年后更加平滑"
      },
      {
        "key": "B",
        "text": "对煤炭的依赖逐年下降，2065年后更加平滑"
      },
      {
        "key": "C",
        "text": "对煤炭的依赖逐年下降，2070年后更加平滑"
      },
      {
        "key": "D",
        "text": "对煤炭的依赖逐年下降，2055年后更加平滑"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "对煤炭的依赖逐年下降，2060年后更加平滑"
  },
  {
    "id": "kp178",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "未来40年“黑色”能源占比的变化趋势是：",
    "options": [
      {
        "key": "A",
        "text": "“黑色”能源占比保持不变"
      },
      {
        "key": "B",
        "text": "“黑色”能源占比持续上升"
      },
      {
        "key": "C",
        "text": "2060年后只保留“黑色”能源"
      },
      {
        "key": "D",
        "text": "“黑色”能源占比随2060年到来比例越发降低"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "“黑色”能源占比随2060年到来比例越发降低"
  },
  {
    "id": "kp179",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "关于“电力占终端用能比重逐年提升”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "电力占终端用能比重逐年提升，2070年达到80%"
      },
      {
        "key": "B",
        "text": "电力占终端用能比重逐年提升，2055年达到80%"
      },
      {
        "key": "C",
        "text": "电力占终端用能比重逐年提升，2060年达到80%"
      },
      {
        "key": "D",
        "text": "电力占终端用能比重逐年提升，2065年达到80%"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "电力占终端用能比重逐年提升，2060年达到80%"
  },
  {
    "id": "kp180",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "关于“2060年社会用电量可达15000TWh”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "2060年社会用电量可达15000TWh（15万亿千瓦时）"
      },
      {
        "key": "B",
        "text": "2055年社会用电量可达15000TWh（15万亿千瓦时）"
      },
      {
        "key": "C",
        "text": "2065年社会用电量可达15000TWh（15万亿千瓦时）"
      },
      {
        "key": "D",
        "text": "2070年社会用电量可达15000TWh（15万亿千瓦时）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "2060年社会用电量可达15000TWh（15万亿千瓦时）。"
  },
  {
    "id": "kp181",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "2060年电源结构是：",
    "options": [
      {
        "key": "A",
        "text": "以清洁能源为主（光、风、水电、核电），以火电为辅助调频功能"
      },
      {
        "key": "B",
        "text": "2060年社会用电量可达15000TWh（15万亿千瓦时）"
      },
      {
        "key": "C",
        "text": "电力占终端用能比重逐年提升，2060年达到80%"
      },
      {
        "key": "D",
        "text": "“黑色”能源占比随2060年到来比例越发降低"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "2060年电源结构：以清洁能源为主（光、风、水电、核电），以火电为辅助调频功能。"
  },
  {
    "id": "kp182",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "数字电网与新型电力系统的关系是：",
    "options": [
      {
        "key": "A",
        "text": "数字电网只用于纸质档案管理"
      },
      {
        "key": "B",
        "text": "数字电网与新型电力系统无关"
      },
      {
        "key": "C",
        "text": "数字电网会替代全部物理电网设备"
      },
      {
        "key": "D",
        "text": "数字电网是实现新型电力系统不可或缺的基石"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "数字化、智能化和协同化，数字电网是实现新型电力系统不可或缺的基石。"
  },
  {
    "id": "kp183",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "数字电网vs传统电网是：",
    "options": [
      {
        "key": "A",
        "text": "实现新型电力系统不可或缺的基石"
      },
      {
        "key": "B",
        "text": "逐步向“主干电网+中小型电网及微型电网”柔性互联形态发展"
      },
      {
        "key": "C",
        "text": "预测能力、实时性、自愈能力"
      },
      {
        "key": "D",
        "text": "预测能力、定期性、自愈能力"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "数字电网vs传统电网：预测能力、实时性、自愈能力"
  },
  {
    "id": "kp184",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "数字电网平台技术是：",
    "options": [
      {
        "key": "A",
        "text": "物联网、云计算、大数据、人工智能、区块链、5G/6G、数字孪生、智能传感与量测"
      },
      {
        "key": "B",
        "text": "物联网、云计算、大数据、人工智能、区块链、8G/6G、数字孪生、智能传感与量测"
      },
      {
        "key": "C",
        "text": "物联网、云计算、大数据、人工智能、区块链、6G/6G、数字孪生、智能传感与量测"
      },
      {
        "key": "D",
        "text": "物联网、云计算、大数据、人工智能、区块链、7G/6G、数字孪生、智能传感与量测"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "数字电网平台技术：物联网、云计算、大数据、人工智能、区块链、5G/6G、数字孪生、智能传感与量测。"
  },
  {
    "id": "kp185",
    "category": "新型电力系统",
    "page": 26,
    "type": "single",
    "prompt": "电网形态是：",
    "options": [
      {
        "key": "A",
        "text": "逐步向“主干电网+中小型电网及微型电网”柔性互联形态发展"
      },
      {
        "key": "B",
        "text": "物联网、云计算、大数据、人工智能、区块链、5G/6G、数字孪生、智能传感与量测"
      },
      {
        "key": "C",
        "text": "实现新型电力系统不可或缺的基石"
      },
      {
        "key": "D",
        "text": "预测能力、实时性、自愈能力"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电网形态：逐步向“主干电网+中小型电网及微型电网”柔性互联形态发展。"
  },
  {
    "id": "kp186",
    "category": "新型电力系统",
    "page": 27,
    "type": "single",
    "prompt": "智能电网的核心特征是：",
    "options": [
      {
        "key": "A",
        "text": "完全人工化"
      },
      {
        "key": "B",
        "text": "不可观测性"
      },
      {
        "key": "C",
        "text": "单向通信"
      },
      {
        "key": "D",
        "text": "自愈性"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "自愈性（核心特征）"
  },
  {
    "id": "kp187",
    "category": "新型电力系统",
    "page": 27,
    "type": "single",
    "prompt": "四大新型负荷成员是：",
    "options": [
      {
        "key": "A",
        "text": "负荷侧灵活响应的“开关”"
      },
      {
        "key": "B",
        "text": "配电网数字孪生的“细胞”"
      },
      {
        "key": "C",
        "text": "空调负荷、电动汽车、智能电表、负荷调控"
      },
      {
        "key": "D",
        "text": "海量数据基石（末梢神经元）"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "四大新型负荷成员：空调负荷、电动汽车、智能电表、负荷调控"
  },
  {
    "id": "kp188",
    "category": "新型电力系统",
    "page": 27,
    "type": "multiple",
    "prompt": "智能电表三大定位包括哪些内容？",
    "options": [
      {
        "key": "A",
        "text": "海量数据基石（末梢神经元）"
      },
      {
        "key": "B",
        "text": "自愈性（核心特征）"
      },
      {
        "key": "C",
        "text": "负荷侧灵活响应的“开关”"
      },
      {
        "key": "D",
        "text": "配电网数字孪生的“细胞”"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "智能电表三大定位：①海量数据基石（末梢神经元）；②负荷侧灵活响应的“开关”；③配电网数字孪生的“细胞”。"
  },
  {
    "id": "kp189",
    "category": "新型电力系统",
    "page": 27,
    "type": "single",
    "prompt": "三大关键技术是：",
    "options": [
      {
        "key": "A",
        "text": "储能技术、电力电子技术、信息技术与通信技术"
      },
      {
        "key": "B",
        "text": "(冷热电协同、提升消纳、源荷网储链接)"
      },
      {
        "key": "C",
        "text": "依托先进的特高压输电和智能电网技术"
      },
      {
        "key": "D",
        "text": "实现“源荷网储”设备广泛链接，全面感知系统运行状态"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "三大关键技术:储能技术、电力电子技术、信息技术与通信技术"
  },
  {
    "id": "kp190",
    "category": "新型电力系统",
    "page": 27,
    "type": "single",
    "prompt": "能源互联网是：",
    "options": [
      {
        "key": "A",
        "text": "(冷热电协同、提升消纳、源荷网储链接)"
      },
      {
        "key": "B",
        "text": "依托先进的特低压输电和智能电网技术"
      },
      {
        "key": "C",
        "text": "储能技术、电力电子技术、信息技术与通信技术"
      },
      {
        "key": "D",
        "text": "依托先进的特高压输电和智能电网技术"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "能源互联网：依托先进的特高压输电和智能电网技术"
  },
  {
    "id": "kp191",
    "category": "新型电力系统",
    "page": 27,
    "type": "multiple",
    "prompt": "能源互联网的三大优势包括：",
    "options": [
      {
        "key": "A",
        "text": "源荷网储链接"
      },
      {
        "key": "B",
        "text": "切断多能协同"
      },
      {
        "key": "C",
        "text": "冷热电协同"
      },
      {
        "key": "D",
        "text": "提升消纳"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "三大优势：(冷热电协同、提升消纳、源荷网储链接)"
  },
  {
    "id": "kp192",
    "category": "新型电力系统",
    "page": 27,
    "type": "single",
    "prompt": "关于“聚集分布式能源、储能、可控负荷”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "聚集分布式能源、储能、可控负荷，实现冷、热、电整体能源供应效益最大化"
      },
      {
        "key": "B",
        "text": "(冷热电协同、提升消纳、源荷网储链接)"
      },
      {
        "key": "C",
        "text": "实现“源荷网储”设备广泛链接，全面感知系统运行状态"
      },
      {
        "key": "D",
        "text": "储能技术、电力电子技术、信息技术与通信技术"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "聚集分布式能源、储能、可控负荷，实现冷、热、电整体能源供应效益最大化"
  },
  {
    "id": "kp193",
    "category": "新型电力系统",
    "page": 27,
    "type": "single",
    "prompt": "能源互联网的优势包括：",
    "options": [
      {
        "key": "A",
        "text": "提升新能源的消纳能力"
      },
      {
        "key": "B",
        "text": "降低新能源消纳能力"
      },
      {
        "key": "C",
        "text": "切断源荷网储联系"
      },
      {
        "key": "D",
        "text": "仅保留单一能源供应"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "提升新能源的消纳能力"
  },
  {
    "id": "kp194",
    "category": "新型电力系统",
    "page": 27,
    "type": "single",
    "prompt": "关于“实现“源荷网储”设备广泛链接”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "储能技术、电力电子技术、信息技术与通信技术"
      },
      {
        "key": "B",
        "text": "实现“源荷网储”设备广泛链接，全面感知系统停运状态"
      },
      {
        "key": "C",
        "text": "(冷热电协同、提升消纳、源荷网储链接)"
      },
      {
        "key": "D",
        "text": "实现“源荷网储”设备广泛链接，全面感知系统运行状态"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "实现“源荷网储”设备广泛链接，全面感知系统运行状态。"
  },
  {
    "id": "kp195",
    "category": "新型电力系统",
    "page": 28,
    "type": "single",
    "prompt": "市场机制与政策支持是：",
    "options": [
      {
        "key": "A",
        "text": "替代率低，同样发电量所需装机容量增加"
      },
      {
        "key": "B",
        "text": "表面上风光发电来自大自然，成本“很低”"
      },
      {
        "key": "C",
        "text": "包括电力现货市场+辅助服务市场"
      },
      {
        "key": "D",
        "text": "电网调度控制技术需要适应性发展"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "市场机制与政策支持：包括电力现货市场+辅助服务市场。"
  },
  {
    "id": "kp196",
    "category": "电力电缆",
    "page": 29,
    "type": "single",
    "prompt": "电力电缆中负责传输电流的核心部分是：",
    "options": [
      {
        "key": "A",
        "text": "导体"
      },
      {
        "key": "B",
        "text": "填充层"
      },
      {
        "key": "C",
        "text": "石墨层"
      },
      {
        "key": "D",
        "text": "外护套"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "核心是导体（传输电流）。"
  },
  {
    "id": "kp197",
    "category": "电力电缆",
    "page": 29,
    "type": "single",
    "prompt": "电力电缆中用于防止漏电的关键保护是：",
    "options": [
      {
        "key": "A",
        "text": "绝缘层"
      },
      {
        "key": "B",
        "text": "导体"
      },
      {
        "key": "C",
        "text": "填充层"
      },
      {
        "key": "D",
        "text": "石墨层"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "关键保护是绝缘层（防止漏电）。"
  },
  {
    "id": "kp198",
    "category": "电力电缆",
    "page": 29,
    "type": "single",
    "prompt": "中高压电缆必有三层共挤结构是：",
    "options": [
      {
        "key": "A",
        "text": "金属屏蔽层（限制电场，安全接地）"
      },
      {
        "key": "B",
        "text": "电力电缆的重要组成部分"
      },
      {
        "key": "C",
        "text": "绝缘层（防止漏电）"
      },
      {
        "key": "D",
        "text": "导体屏蔽、绝缘层、绝缘屏蔽"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "中高压电缆必有三层共挤结构：导体屏蔽、绝缘层、绝缘屏蔽。"
  },
  {
    "id": "kp199",
    "category": "电力电缆",
    "page": 29,
    "type": "single",
    "prompt": "电力电缆中用于限制电场并安全接地的安全屏障是：",
    "options": [
      {
        "key": "A",
        "text": "填充层"
      },
      {
        "key": "B",
        "text": "导体"
      },
      {
        "key": "C",
        "text": "金属屏蔽层"
      },
      {
        "key": "D",
        "text": "石墨层"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "安全屏障是金属屏蔽层（限制电场，安全接地）。"
  },
  {
    "id": "kp200",
    "category": "电力电缆",
    "page": 29,
    "type": "single",
    "prompt": "关于石墨层，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "石墨层不是电力电缆的重要组成部分"
      },
      {
        "key": "B",
        "text": "石墨层是电力电缆的金属屏蔽层"
      },
      {
        "key": "C",
        "text": "石墨层是电力电缆的核心导体"
      },
      {
        "key": "D",
        "text": "石墨层是电力电缆的主绝缘层"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "石墨层不是电力电缆的重要组成部分"
  },
  {
    "id": "kp201",
    "category": "电力电缆",
    "page": 29,
    "type": "single",
    "prompt": "关于“按绝缘材料分油纸绝缘和挤包绝缘”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "按绝缘材料分油纸绝缘和挤包绝缘（橡塑）两大类，挤包又分热塑性（PVC/PE/PP，适用中低压，工作温度≤70℃）和热固性（XLPE/EPR，适用高、中、低压，工作温度≤90℃）"
      },
      {
        "key": "B",
        "text": "按绝缘材料分油纸绝缘和挤包绝缘（橡塑）两大类，挤包又分热塑性（PVC/PE/PP，适用中低压，工作温度≤75℃）和热固性（XLPE/EPR，适用高、中、低压，工作温度≤90℃）"
      },
      {
        "key": "C",
        "text": "按绝缘材料分油纸绝缘和挤包绝缘（橡塑）两大类，挤包又分热塑性（PVC/PE/PP，适用中低压，工作温度≤80℃）和热固性（XLPE/EPR，适用高、中、低压，工作温度≤90℃）"
      },
      {
        "key": "D",
        "text": "按绝缘材料分油纸绝缘和挤包绝缘（橡塑）两大类，挤包又分热塑性（PVC/PE/PP，适用中低压，工作温度≤65℃）和热固性（XLPE/EPR，适用高、中、低压，工作温度≤90℃）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "按绝缘材料分油纸绝缘和挤包绝缘（橡塑）两大类，挤包又分热塑性（PVC/PE/PP，适用中低压，工作温度≤70℃）和热固性（XLPE/EPR，适用高、中、低压，工作温度≤90℃）。"
  },
  {
    "id": "kp202",
    "category": "电力电缆",
    "page": 29,
    "type": "multiple",
    "prompt": "挤包绝缘材料的温度对应关系正确的是：",
    "options": [
      {
        "key": "A",
        "text": "热塑90度（低压）"
      },
      {
        "key": "B",
        "text": "热固90度（高压）"
      },
      {
        "key": "C",
        "text": "热固70度（高压）"
      },
      {
        "key": "D",
        "text": "热塑70度（低压）"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "answerText": "（助记：油纸老传统，挤包分两类——热塑70度（低压），热固90度（高压））"
  },
  {
    "id": "kp203",
    "category": "电力电缆",
    "page": 29,
    "type": "single",
    "prompt": "电缆本体的作用是：",
    "options": [
      {
        "key": "A",
        "text": "只负责调度通信"
      },
      {
        "key": "B",
        "text": "不承担电能传输"
      },
      {
        "key": "C",
        "text": "负责传输电能和基本防护"
      },
      {
        "key": "D",
        "text": "只负责用户计费"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "电缆本体（导体、屏蔽、绝缘、护套）负责传输电能和基本防护"
  },
  {
    "id": "kp204",
    "category": "电力电缆",
    "page": 30,
    "type": "single",
    "prompt": "关于“电缆附件（终端头、中间接头）则负责连接和密封”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "整个电缆线路的“薄弱环节”，运行中约70%的故障发生在附件处，因此其绝缘密封质量至关重要"
      },
      {
        "key": "B",
        "text": "整个电缆线路的“薄弱环节”，运行中约65%的故障发生在附件处，因此其绝缘密封质量至关重要"
      },
      {
        "key": "C",
        "text": "整个电缆线路的“薄弱环节”，运行中约75%的故障发生在附件处，因此其绝缘密封质量至关重要"
      },
      {
        "key": "D",
        "text": "整个电缆线路的“薄弱环节”，运行中约80%的故障发生在附件处，因此其绝缘密封质量至关重要"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电缆附件（终端头、中间接头）则负责连接和密封，是整个电缆线路的“薄弱环节”，运行中约70%的故障发生在附件处，因此其绝缘密封质量至关重要。"
  },
  {
    "id": "kp205",
    "category": "电力电缆",
    "page": 30,
    "type": "multiple",
    "prompt": "电缆终端头的类型包括：",
    "options": [
      {
        "key": "A",
        "text": "户外"
      },
      {
        "key": "B",
        "text": "GIS"
      },
      {
        "key": "C",
        "text": "变压器"
      },
      {
        "key": "D",
        "text": "直通接头"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "电缆终端头：户外、GIS、变压器"
  },
  {
    "id": "kp206",
    "category": "电力电缆",
    "page": 30,
    "type": "multiple",
    "prompt": "电缆中间头的类型包括：",
    "options": [
      {
        "key": "A",
        "text": "户外终端"
      },
      {
        "key": "B",
        "text": "绝缘"
      },
      {
        "key": "C",
        "text": "GIS终端"
      },
      {
        "key": "D",
        "text": "直通"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "answerText": "电缆中间头：直通、绝缘。（10kv以下电压）"
  },
  {
    "id": "kp207",
    "category": "电力电缆",
    "page": 30,
    "type": "multiple",
    "prompt": "电缆巡视类型包括：",
    "options": [
      {
        "key": "A",
        "text": "智能"
      },
      {
        "key": "B",
        "text": "停止巡视"
      },
      {
        "key": "C",
        "text": "日常"
      },
      {
        "key": "D",
        "text": "特殊"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "日常、特殊、故障、夜间、智能（五类）【日常（常规检查）、特殊（异常天气/高负荷）、故障（事故后专项排查）、夜间（利用高峰负荷或发光现象）、智能（自动化在线监测）】"
  },
  {
    "id": "kp208",
    "category": "电力电缆",
    "page": 30,
    "type": "single",
    "prompt": "电缆缺陷是：",
    "options": [
      {
        "key": "A",
        "text": "紧急（24h）、重大（30天）、一般（3个月/年度）（三级）"
      },
      {
        "key": "B",
        "text": "紧急（19h）、重大（30天）、一般（3个月/年度）（三级）"
      },
      {
        "key": "C",
        "text": "紧急（29h）、重大（30天）、一般（3个月/年度）（三级）"
      },
      {
        "key": "D",
        "text": "紧急（34h）、重大（30天）、一般（3个月/年度）（三级）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电缆缺陷: 紧急（24h）、重大（30天）、一般（3个月/年度）（三级）"
  },
  {
    "id": "kp209",
    "category": "电力电缆",
    "page": 30,
    "type": "single",
    "prompt": "电缆检修按目的分类是：",
    "options": [
      {
        "key": "A",
        "text": "定期检修、状态检修、故障后检修、预防性检修"
      },
      {
        "key": "B",
        "text": "小修、大修、事故抢修、改进工程"
      },
      {
        "key": "C",
        "text": "中间过程验收和竣工验收"
      },
      {
        "key": "D",
        "text": "直通、绝缘。（10kv以下电压）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "按目的分类：定期检修、状态检修、故障后检修、预防性检修"
  },
  {
    "id": "kp210",
    "category": "电力电缆",
    "page": 30,
    "type": "single",
    "prompt": "电缆检修按工作规模和性质分类是：",
    "options": [
      {
        "key": "A",
        "text": "定期检修、状态检修、故障后检修、预防性检修"
      },
      {
        "key": "B",
        "text": "中间过程验收和竣工验收"
      },
      {
        "key": "C",
        "text": "直通、绝缘。（10kv以下电压）"
      },
      {
        "key": "D",
        "text": "小修、大修、事故抢修、改进工程"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "按工作规模和性质分类：小修、大修、事故抢修、改进工程"
  },
  {
    "id": "kp211",
    "category": "电力电缆",
    "page": 30,
    "type": "single",
    "prompt": "验收类型是：",
    "options": [
      {
        "key": "A",
        "text": "定期检修、状态检修、故障后检修、预防性检修"
      },
      {
        "key": "B",
        "text": "户外、GIS、变压器"
      },
      {
        "key": "C",
        "text": "中间过程验收和竣工验收"
      },
      {
        "key": "D",
        "text": "小修、大修、事故抢修、改进工程"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "验收类型：中间过程验收和竣工验收"
  },
  {
    "id": "kp212",
    "category": "数字化与人工智能",
    "page": 30,
    "type": "single",
    "prompt": "关于“2019年首次提出”数字电网“”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "2019年首次提出”数字电网“，2025年全面完成数字化转型，2026年开展数智化"
      },
      {
        "key": "B",
        "text": "2014年首次提出”数字电网“，2025年全面完成数字化转型，2026年开展数智化"
      },
      {
        "key": "C",
        "text": "2024年首次提出”数字电网“，2025年全面完成数字化转型，2026年开展数智化"
      },
      {
        "key": "D",
        "text": "2029年首次提出”数字电网“，2025年全面完成数字化转型，2026年开展数智化"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "2019年首次提出”数字电网“，2025年全面完成数字化转型，2026年开展数智化。"
  },
  {
    "id": "kp213",
    "category": "数字化与人工智能",
    "page": 30,
    "type": "single",
    "prompt": "数智化与数字化的本质区别在于：",
    "options": [
      {
        "key": "A",
        "text": "判断权的转移"
      },
      {
        "key": "B",
        "text": "只更换系统名称"
      },
      {
        "key": "C",
        "text": "只增加纸质流程"
      },
      {
        "key": "D",
        "text": "完全取消数据应用"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "数智化与数字化的本质区别在于判断权的转移。"
  },
  {
    "id": "kp214",
    "category": "数字化与人工智能",
    "page": 31,
    "type": "single",
    "prompt": "三大硬骨头是：",
    "options": [
      {
        "key": "A",
        "text": "只改名、不升级"
      },
      {
        "key": "B",
        "text": "转意识、转组织、转方法、转模式、转文化"
      },
      {
        "key": "C",
        "text": "只加AI，不换逻辑"
      },
      {
        "key": "D",
        "text": "能力断层、信任缺失、利益冲突"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "三大硬骨头：能力断层、信任缺失、利益冲突"
  },
  {
    "id": "kp215",
    "category": "数字化与人工智能",
    "page": 31,
    "type": "multiple",
    "prompt": "四大认知错位包括哪些内容？",
    "options": [
      {
        "key": "A",
        "text": "陷入串行思维误区"
      },
      {
        "key": "B",
        "text": "能力断层、信任缺失、利益冲突"
      },
      {
        "key": "C",
        "text": "只改名、不升级"
      },
      {
        "key": "D",
        "text": "只加AI，不换逻辑"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "四大认知错位：只改名、不升级；只加AI，不换逻辑；陷入串行思维误区；落入\"一把手工程\"。"
  },
  {
    "id": "kp216",
    "category": "数字化与人工智能",
    "page": 31,
    "type": "single",
    "prompt": "五转是：",
    "options": [
      {
        "key": "A",
        "text": "转意识、转组织、转方法、转模式、转文化"
      },
      {
        "key": "B",
        "text": "2基础+4位一体+2能力+1生态（基础设施+数据资产"
      },
      {
        "key": "C",
        "text": "三类赛马（算力赛马、算法赛马、场景揭榜挂帅）"
      },
      {
        "key": "D",
        "text": "能力断层、信任缺失、利益冲突"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "五转：转意识、转组织、转方法、转模式、转文化。"
  },
  {
    "id": "kp217",
    "category": "数字化与人工智能",
    "page": 31,
    "type": "single",
    "prompt": "九个基本认识是：",
    "options": [
      {
        "key": "A",
        "text": "（PPT43页）数字化转型的本质是一场涉及生产力与生产关系重构的系统性变革"
      },
      {
        "key": "B",
        "text": "（PPT48页）数字化转型的本质是一场涉及生产力与生产关系重构的系统性变革"
      },
      {
        "key": "C",
        "text": "（PPT53页）数字化转型的本质是一场涉及生产力与生产关系重构的系统性变革"
      },
      {
        "key": "D",
        "text": "（PPT38页）数字化转型的本质是一场涉及生产力与生产关系重构的系统性变革"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "九个基本认识：（PPT43页）数字化转型的本质是一场涉及生产力与生产关系重构的系统性变革。"
  },
  {
    "id": "kp218",
    "category": "数字化与人工智能",
    "page": 31,
    "type": "multiple",
    "prompt": "“2421”路径包括：",
    "options": [
      {
        "key": "A",
        "text": "融通创新+安全屏障"
      },
      {
        "key": "B",
        "text": "数字电网/服务/运营/产业"
      },
      {
        "key": "C",
        "text": "取消数字生态"
      },
      {
        "key": "D",
        "text": "基础设施+数据资产"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "2421路径：2基础+4位一体+2能力+1生态（基础设施+数据资产；数字电网/服务/运营/产业；融通创新+安全屏障；数字生态）"
  },
  {
    "id": "kp219",
    "category": "数字化与人工智能",
    "page": 31,
    "type": "single",
    "prompt": "数字电网输电巡视的三阶段顺序是：",
    "options": [
      {
        "key": "A",
        "text": "机巡→人巡→智巡"
      },
      {
        "key": "B",
        "text": "人巡→智巡→取消巡视"
      },
      {
        "key": "C",
        "text": "人巡→机巡(2-3倍)→智巡(4-5倍)"
      },
      {
        "key": "D",
        "text": "智巡→机巡→人巡"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "数字电网案例：输电巡视三阶段：人巡→机巡(2-3倍)→智巡(4-5倍)"
  },
  {
    "id": "kp220",
    "category": "数字化与人工智能",
    "page": 31,
    "type": "multiple",
    "prompt": "AI的四个要素包括：",
    "options": [
      {
        "key": "A",
        "text": "算力"
      },
      {
        "key": "B",
        "text": "纸质档案"
      },
      {
        "key": "C",
        "text": "数据"
      },
      {
        "key": "D",
        "text": "模型"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "AI四要素：算力/数据/模型/场景→发动机/燃料/大脑/舞台，人才是聚合枢纽。"
  },
  {
    "id": "kp221",
    "category": "数字化与人工智能",
    "page": 31,
    "type": "single",
    "prompt": "运营机制是：",
    "options": [
      {
        "key": "A",
        "text": "三类赛马（算力赛马、算法赛马、场景揭榜挂帅）"
      },
      {
        "key": "B",
        "text": "转意识、转组织、转方法、转模式、转文化"
      },
      {
        "key": "C",
        "text": "2基础+4位一体+2能力+1生态（基础设施+数据资产"
      },
      {
        "key": "D",
        "text": "数字电网/服务/运营/产业"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "运营机制：三类赛马（算力赛马、算法赛马、场景揭榜挂帅）"
  },
  {
    "id": "kp222",
    "category": "数字化与人工智能",
    "page": 31,
    "type": "single",
    "prompt": "关于“企业数字化转型成功率仅约20%”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "企业数字化转型成功率仅约30%（麦肯锡）；2021年我国数字化转型效果显著的企业只有16%"
      },
      {
        "key": "B",
        "text": "企业数字化转型成功率仅约25%（麦肯锡）；2021年我国数字化转型效果显著的企业只有16%"
      },
      {
        "key": "C",
        "text": "企业数字化转型成功率仅约15%（麦肯锡）；2021年我国数字化转型效果显著的企业只有16%"
      },
      {
        "key": "D",
        "text": "企业数字化转型成功率仅约20%（麦肯锡）；2021年我国数字化转型效果显著的企业只有16%"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "企业数字化转型成功率仅约20%（麦肯锡）；2021年我国数字化转型效果显著的企业只有16%。"
  },
  {
    "id": "kp223",
    "category": "客户服务",
    "page": 32,
    "type": "single",
    "prompt": "用户类别是：",
    "options": [
      {
        "key": "A",
        "text": "高可靠性客户、高价值客户、高需求客户、高风险客户"
      },
      {
        "key": "B",
        "text": "投诉（1个工作日）、咨询建议（1个工作日）等"
      },
      {
        "key": "C",
        "text": "公变客户、公线专变客户、专线专变客户"
      },
      {
        "key": "D",
        "text": "故障报修（24小时）、欠费复电（12小时）等"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "用户类别：公变客户、公线专变客户、专线专变客户"
  },
  {
    "id": "kp224",
    "category": "客户服务",
    "page": 33,
    "type": "single",
    "prompt": "用电类别是：",
    "options": [
      {
        "key": "A",
        "text": "如居民生活、商业、非工业、普通工业、大工业用电、农业生产、稻田排灌、其他用电等"
      },
      {
        "key": "B",
        "text": "客户诉求问题内转外不转，需要转办处置的及时记录并派发工单至责任单位，全过程跟进"
      },
      {
        "key": "C",
        "text": "受理1、答复供电方案10/20、审计审查3、中间检查2、竣工检验及装表6"
      },
      {
        "key": "D",
        "text": "特殊客户、投诉主体非供电部门、匿名工单、公司启动应急期间、近一年内已有首次投诉"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "用电类别：如居民生活、商业、非工业、普通工业、大工业用电、农业生产、稻田排灌、其他用电等。"
  },
  {
    "id": "kp225",
    "category": "客户服务",
    "page": 33,
    "type": "multiple",
    "prompt": "按电压等级划分，用户包括：",
    "options": [
      {
        "key": "A",
        "text": "低压用户"
      },
      {
        "key": "B",
        "text": "高压用户"
      },
      {
        "key": "C",
        "text": "机械用户"
      },
      {
        "key": "D",
        "text": "通信用户"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "answerText": "电压等级：低压用户、高压用户"
  },
  {
    "id": "kp226",
    "category": "客户服务",
    "page": 33,
    "type": "single",
    "prompt": "用户性质是：",
    "options": [
      {
        "key": "A",
        "text": "通过规范化流程，实现客户用电需求的受理、审查、实施及后续服务"
      },
      {
        "key": "B",
        "text": "指增加电表（原本已安装的不够用，需增大容量）"
      },
      {
        "key": "C",
        "text": "并网申请→接入系统资料审查→并网验收及运行"
      },
      {
        "key": "D",
        "text": "高可靠性客户、高价值客户、高需求客户、高风险客户"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "用户性质：高可靠性客户、高价值客户、高需求客户、高风险客户"
  },
  {
    "id": "kp227",
    "category": "客户服务",
    "page": 33,
    "type": "multiple",
    "prompt": "三户模型包括哪些内容？",
    "options": [
      {
        "key": "A",
        "text": "结算户承载结算关系"
      },
      {
        "key": "B",
        "text": "低压用户、高压用户"
      },
      {
        "key": "C",
        "text": "客户为统领对象"
      },
      {
        "key": "D",
        "text": "用电户承载业务关系"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "三户模型：客户为统领对象；用电户承载业务关系；结算户承载结算关系。"
  },
  {
    "id": "kp228",
    "category": "客户服务",
    "page": 34,
    "type": "single",
    "prompt": "客户服务的八大业务类型是：",
    "options": [
      {
        "key": "A",
        "text": "投诉、举报、意见、建议、业务办理、故障报修、咨询查询、表扬"
      },
      {
        "key": "B",
        "text": "业务办理、故障报修、咨询查询、表扬工单执行直派、直回高效流程，缩短服务链条"
      },
      {
        "key": "C",
        "text": "故障报修（24小时）、欠费复电（12小时）等"
      },
      {
        "key": "D",
        "text": "投诉（1个工作日）、咨询建议（1个工作日）等"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "客户服务的八大业务类型：投诉、举报、意见、建议、业务办理、故障报修、咨询查询、表扬。"
  },
  {
    "id": "kp229",
    "category": "客户服务",
    "page": 34,
    "type": "single",
    "prompt": "须审核的业务类型是：",
    "options": [
      {
        "key": "A",
        "text": "投诉、举报、意见、建议工单派发及回复须经过网级服务调度审核，保障诉求类工单数据质量"
      },
      {
        "key": "B",
        "text": "业务办理、故障报修、咨询查询、表扬工单执行直派、直回高效流程，缩短服务链条"
      },
      {
        "key": "C",
        "text": "投诉、举报、意见、建议、业务办理、故障报修、咨询查询、表扬"
      },
      {
        "key": "D",
        "text": "故障报修（24小时）、欠费复电（12小时）等"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "须审核的业务类型：投诉、举报、意见、建议工单派发及回复须经过网级服务调度审核，保障诉求类工单数据质量。"
  },
  {
    "id": "kp230",
    "category": "客户服务",
    "page": 34,
    "type": "single",
    "prompt": "可直派的业务类型是：",
    "options": [
      {
        "key": "A",
        "text": "投诉、举报、意见、建议、业务办理、故障报修、咨询查询、表扬"
      },
      {
        "key": "B",
        "text": "投诉、举报、意见、建议工单派发及回复须经过网级服务调度审核，保障诉求类工单数据质量"
      },
      {
        "key": "C",
        "text": "故障报修（24小时）、欠费复电（12小时）等"
      },
      {
        "key": "D",
        "text": "业务办理、故障报修、咨询查询、表扬工单执行直派、直回高效流程，缩短服务链条"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "可直派的业务类型：业务办理、故障报修、咨询查询、表扬工单执行直派、直回高效流程，缩短服务链条。"
  },
  {
    "id": "kp231",
    "category": "客户服务",
    "page": 34,
    "type": "single",
    "prompt": "业务处理时限为：",
    "options": [
      {
        "key": "A",
        "text": "故障报修（34小时）、欠费复电（12小时）等"
      },
      {
        "key": "B",
        "text": "故障报修（19小时）、欠费复电（12小时）等"
      },
      {
        "key": "C",
        "text": "故障报修（24小时）、欠费复电（12小时）等"
      },
      {
        "key": "D",
        "text": "故障报修（29小时）、欠费复电（12小时）等"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "业务处理时限：故障报修（24小时）、欠费复电（12小时）等"
  },
  {
    "id": "kp232",
    "category": "客户服务",
    "page": 34,
    "type": "single",
    "prompt": "处置反馈时限为：",
    "options": [
      {
        "key": "A",
        "text": "投诉（1个工作日）、咨询建议（1个工作日）等"
      },
      {
        "key": "B",
        "text": "投诉（4个工作日）、咨询建议（1个工作日）等"
      },
      {
        "key": "C",
        "text": "投诉（2个工作日）、咨询建议（1个工作日）等"
      },
      {
        "key": "D",
        "text": "投诉（3个工作日）、咨询建议（1个工作日）等"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "处置反馈时限：投诉（1个工作日）、咨询建议（1个工作日）等"
  },
  {
    "id": "kp233",
    "category": "客户服务",
    "page": 35,
    "type": "single",
    "prompt": "业务扩充（简称“业扩”）是指：",
    "options": [
      {
        "key": "A",
        "text": "是指为客户办理新装、增容、变更用电及相关业务手续的全过程管理"
      },
      {
        "key": "B",
        "text": "通过规范化流程，实现客户用电需求的受理、审查、实施及后续服务"
      },
      {
        "key": "C",
        "text": "投诉、举报、意见、建议、业务办理、故障报修、咨询查询、表扬"
      },
      {
        "key": "D",
        "text": "客户身份证明材料（如委托他人，需提供经办人身份材料、授权委托书）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "定义：是指为客户办理新装、增容、变更用电及相关业务手续的全过程管理。"
  },
  {
    "id": "kp234",
    "category": "客户服务",
    "page": 36,
    "type": "single",
    "prompt": "核心目标是：",
    "options": [
      {
        "key": "A",
        "text": "高可靠性客户、高价值客户、高需求客户、高风险客户"
      },
      {
        "key": "B",
        "text": "客户身份证明材料（如委托他人，需提供经办人身份材料、授权委托书）"
      },
      {
        "key": "C",
        "text": "指增加电表（原本已安装的不够用，需增大容量）"
      },
      {
        "key": "D",
        "text": "通过规范化流程，实现客户用电需求的受理、审查、实施及后续服务"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "核心目标：通过规范化流程，实现客户用电需求的受理、审查、实施及后续服务。"
  },
  {
    "id": "kp235",
    "category": "客户服务",
    "page": 36,
    "type": "single",
    "prompt": "业务类型是：",
    "options": [
      {
        "key": "A",
        "text": "无外线5、有外线15"
      },
      {
        "key": "B",
        "text": "低压用户、高压用户"
      },
      {
        "key": "C",
        "text": "新装、增容、业务变更"
      },
      {
        "key": "D",
        "text": "指新装电表（本来无电表）"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "业务类型：新装、增容、业务变更。"
  },
  {
    "id": "kp236",
    "category": "客户服务",
    "page": 36,
    "type": "single",
    "prompt": "新装是：",
    "options": [
      {
        "key": "A",
        "text": "指新装电表（本来无电表）"
      },
      {
        "key": "B",
        "text": "并网申请→并网验收及运行"
      },
      {
        "key": "C",
        "text": "新装、增容、业务变更"
      },
      {
        "key": "D",
        "text": "无外线5、有外线15"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "新装：指新装电表（本来无电表）"
  },
  {
    "id": "kp237",
    "category": "客户服务",
    "page": 36,
    "type": "single",
    "prompt": "增容是：",
    "options": [
      {
        "key": "A",
        "text": "指增加电表（原本已安装的不够用，需增大容量）"
      },
      {
        "key": "B",
        "text": "指减少电表（原本已安装的不够用，需增大容量）"
      },
      {
        "key": "C",
        "text": "并网申请→接入系统资料审查→并网验收及运行"
      },
      {
        "key": "D",
        "text": "高可靠性客户、高价值客户、高需求客户、高风险客户"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "增容：指增加电表（原本已安装的不够用，需增大容量）"
  },
  {
    "id": "kp238",
    "category": "客户服务",
    "page": 36,
    "type": "single",
    "prompt": "业务变更是：",
    "options": [
      {
        "key": "A",
        "text": "受理1、答复供电方案10/20、审计审查3、中间检查2、竣工检验及装表6"
      },
      {
        "key": "B",
        "text": "如居民生活、商业、非工业、普通工业、大工业用电、农业生产、稻田排灌、其他用电等"
      },
      {
        "key": "C",
        "text": "特殊客户、投诉主体非供电部门、匿名工单、公司启动应急期间、近一年内已有首次投诉"
      },
      {
        "key": "D",
        "text": "包括减容、减容恢复、暂停、暂停恢复、暂换、暂换恢复、暂拆、暂拆恢复、移表、更名过户、销户、改类、受电装置变更、临时用电延期、结算户变更、一般资料变更、分户、并户、合同变更"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "业务变更：包括减容、减容恢复、暂停、暂停恢复、暂换、暂换恢复、暂拆、暂拆恢复、移表、更名过户、销户、改类、受电装置变更、临时用电延期、结算户变更、一般资料变更、分户、并户、合同变更。"
  },
  {
    "id": "kp239",
    "category": "客户服务",
    "page": 36,
    "type": "multiple",
    "prompt": "委托他人办理业务时，客户身份证明材料还需包括：",
    "options": [
      {
        "key": "A",
        "text": "设备检修记录"
      },
      {
        "key": "B",
        "text": "线路巡视报告"
      },
      {
        "key": "C",
        "text": "经办人身份材料"
      },
      {
        "key": "D",
        "text": "授权委托书"
      }
    ],
    "correct": [
      "C",
      "D"
    ],
    "answerText": "客户身份证明材料（如委托他人，需提供经办人身份材料、授权委托书）"
  },
  {
    "id": "kp240",
    "category": "客户服务",
    "page": 36,
    "type": "single",
    "prompt": "物业权属证明材料是指：",
    "options": [
      {
        "key": "A",
        "text": "产权材料"
      },
      {
        "key": "B",
        "text": "线路巡视报告"
      },
      {
        "key": "C",
        "text": "设备缺陷记录"
      },
      {
        "key": "D",
        "text": "电网调度指令"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "物业权属证明材料（即产权材料）。"
  },
  {
    "id": "kp241",
    "category": "客户服务",
    "page": 36,
    "type": "multiple",
    "prompt": "办理改类业务时，关于受理材料的要求，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "仅需提供客户身份证明材料"
      },
      {
        "key": "B",
        "text": "无需提供用电地址物业权属证明书"
      },
      {
        "key": "C",
        "text": "必须提供用电地址物业权属证明书"
      },
      {
        "key": "D",
        "text": "无需提供客户身份证明材料"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "answerText": "注意：如果是办理改类业务，仅需提供客户身份证明材料（如委托他人，需提供经办人身份材料、授权委托书），无需提供用电地址物业权属证明书。"
  },
  {
    "id": "kp242",
    "category": "客户服务",
    "page": 36,
    "type": "single",
    "prompt": "低压时限要求为：",
    "options": [
      {
        "key": "A",
        "text": "无外线7、有外线15"
      },
      {
        "key": "B",
        "text": "无外线6、有外线15"
      },
      {
        "key": "C",
        "text": "无外线8、有外线15"
      },
      {
        "key": "D",
        "text": "无外线5、有外线15"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "低压时限要求：无外线5、有外线15"
  },
  {
    "id": "kp243",
    "category": "客户服务",
    "page": 36,
    "type": "single",
    "prompt": "高压时限要求为：",
    "options": [
      {
        "key": "A",
        "text": "受理3、答复供电方案10/20、审计审查3、中间检查2、竣工检验及装表6"
      },
      {
        "key": "B",
        "text": "受理4、答复供电方案10/20、审计审查3、中间检查2、竣工检验及装表6"
      },
      {
        "key": "C",
        "text": "受理1、答复供电方案10/20、审计审查3、中间检查2、竣工检验及装表6"
      },
      {
        "key": "D",
        "text": "受理2、答复供电方案10/20、审计审查3、中间检查2、竣工检验及装表6"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "高压时限要求：受理1、答复供电方案10/20、审计审查3、中间检查2、竣工检验及装表6。"
  },
  {
    "id": "kp244",
    "category": "客户服务",
    "page": 36,
    "type": "multiple",
    "prompt": "常见业扩业务包括：",
    "options": [
      {
        "key": "A",
        "text": "低压客户业扩办理"
      },
      {
        "key": "B",
        "text": "输电线路检修办理"
      },
      {
        "key": "C",
        "text": "高压客户业扩办理"
      },
      {
        "key": "D",
        "text": "新能源业务"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "常见业扩业务：低压客户业扩办理、高压客户业扩办理、新能源业务。"
  },
  {
    "id": "kp245",
    "category": "客户服务",
    "page": 36,
    "type": "single",
    "prompt": "常见业扩业务之一是：",
    "options": [
      {
        "key": "A",
        "text": "低压客户业扩办理"
      },
      {
        "key": "B",
        "text": "输电线路检修办理"
      },
      {
        "key": "C",
        "text": "主网事故调度办理"
      },
      {
        "key": "D",
        "text": "发电机组启停办理"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "低压客户业扩办理"
  },
  {
    "id": "kp246",
    "category": "客户服务",
    "page": 37,
    "type": "single",
    "prompt": "案例2（过户）对应的业扩业务是：",
    "options": [
      {
        "key": "A",
        "text": "主网事故调度"
      },
      {
        "key": "B",
        "text": "低压线路巡视"
      },
      {
        "key": "C",
        "text": "发电机组检修"
      },
      {
        "key": "D",
        "text": "高压客户业扩办理"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "高压客户业扩办理"
  },
  {
    "id": "kp247",
    "category": "客户服务",
    "page": 38,
    "type": "single",
    "prompt": "案例（新装用电）对应的业务是：",
    "options": [
      {
        "key": "A",
        "text": "变电站检修"
      },
      {
        "key": "B",
        "text": "主网事故调度"
      },
      {
        "key": "C",
        "text": "新能源业务"
      },
      {
        "key": "D",
        "text": "输电线路巡视"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "新能源业务"
  },
  {
    "id": "kp248",
    "category": "客户服务",
    "page": 38,
    "type": "single",
    "prompt": "220/380V居民分布式光伏发电项目是：",
    "options": [
      {
        "key": "A",
        "text": "并网申请→并网验收及运行"
      },
      {
        "key": "B",
        "text": "并网申请→接入系统资料审查→并网验收及运行"
      },
      {
        "key": "C",
        "text": "并网验收及运行→并网申请"
      },
      {
        "key": "D",
        "text": "并网申请→并网验收及停运"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "220/380V居民分布式光伏发电项目：并网申请→并网验收及运行"
  },
  {
    "id": "kp249",
    "category": "客户服务",
    "page": 38,
    "type": "single",
    "prompt": "220/380V非居民分布式光伏发电项目是：",
    "options": [
      {
        "key": "A",
        "text": "并网申请→接入系统资料审查→并网验收及运行"
      },
      {
        "key": "B",
        "text": "并网验收及运行→接入系统资料审查→并网申请"
      },
      {
        "key": "C",
        "text": "接入系统资料审查→并网申请→并网验收及运行"
      },
      {
        "key": "D",
        "text": "并网申请→接入系统资料审查→并网验收及停运"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "220/380V非居民分布式光伏发电项目：并网申请→接入系统资料审查→并网验收及运行"
  },
  {
    "id": "kp250",
    "category": "客户服务",
    "page": 38,
    "type": "single",
    "prompt": "10/20kV分布式光伏发电项目是：",
    "options": [
      {
        "key": "A",
        "text": "接入系统资料审查→并网申请→并网验收及运行"
      },
      {
        "key": "B",
        "text": "并网验收及运行→接入系统资料审查→并网申请"
      },
      {
        "key": "C",
        "text": "并网申请→接入系统资料审查→并网验收及停运"
      },
      {
        "key": "D",
        "text": "并网申请→接入系统资料审查→并网验收及运行"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "10/20kV分布式光伏发电项目：并网申请→接入系统资料审查→并网验收及运行"
  },
  {
    "id": "kp251",
    "category": "客户服务",
    "page": 40,
    "type": "multiple",
    "prompt": "12398能源监管热线投诉、举报处理办法的重要时间包括：",
    "options": [
      {
        "key": "A",
        "text": "2023年11月1日"
      },
      {
        "key": "B",
        "text": "2026年1月1日起正式执行"
      },
      {
        "key": "C",
        "text": "2024年11月1日"
      },
      {
        "key": "D",
        "text": "2025年1月1日起正式执行"
      }
    ],
    "correct": [
      "C",
      "D"
    ],
    "answerText": "2024年11月1日，国家能源局在网上公开发布《12398能源监管热线投诉处理办法》（以下简称“投诉办法”）和《12398能源监管热线举报处理办法》（以下简称“举报办法”），并于2025年1月1日起正式执行。该两个办法进一步规范了能源监管投诉、举报处理工作，及时响应公众诉求，提高服务质量。"
  },
  {
    "id": "kp252",
    "category": "客户服务",
    "page": 40,
    "type": "single",
    "prompt": "12398投诉办理流程特有的环节是：",
    "options": [
      {
        "key": "A",
        "text": "异议申诉环节"
      },
      {
        "key": "B",
        "text": "线路验收环节"
      },
      {
        "key": "C",
        "text": "设备检修环节"
      },
      {
        "key": "D",
        "text": "电价测算环节"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "12398投诉办理流程：尤其注意有其特有的异议申诉环节。"
  },
  {
    "id": "kp253",
    "category": "客户服务",
    "page": 40,
    "type": "single",
    "prompt": "能源企业投诉处理指标（4个）是：",
    "options": [
      {
        "key": "A",
        "text": "投诉事项及时办结率、投诉事项办理满意率、投诉申诉率、申诉有责率"
      },
      {
        "key": "B",
        "text": "尤其注意有其特有的异议申诉环节"
      },
      {
        "key": "C",
        "text": "业扩报装、欠费复电、电压质量、频繁停电、明确投诉、重复抱怨、重复投诉"
      },
      {
        "key": "D",
        "text": "安抚客户情绪→了解诉求原因→沟通解决方案→落实解决措施→诉求问题闭环"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "能源企业投诉处理指标（4个）：投诉事项及时办结率、投诉事项办理满意率、投诉申诉率、申诉有责率。"
  },
  {
    "id": "kp254",
    "category": "客户服务",
    "page": 40,
    "type": "single",
    "prompt": "“投诉下单”七大场景是：",
    "options": [
      {
        "key": "A",
        "text": "投诉事项及时办结率、投诉事项办理满意率、投诉申诉率、申诉有责率"
      },
      {
        "key": "B",
        "text": "安抚客户情绪→了解诉求原因→沟通解决方案→落实解决措施→诉求问题闭环"
      },
      {
        "key": "C",
        "text": "特殊客户、投诉主体非供电部门、匿名工单、公司启动应急期间、近一年内已有首次投诉"
      },
      {
        "key": "D",
        "text": "业扩报装、欠费复电、电压质量、频繁停电、明确投诉、重复抱怨、重复投诉"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "“投诉下单”七大场景：业扩报装、欠费复电、电压质量、频繁停电、明确投诉、重复抱怨、重复投诉。"
  },
  {
    "id": "kp255",
    "category": "客户服务",
    "page": 41,
    "type": "single",
    "prompt": "“不下投诉”五大场景是：",
    "options": [
      {
        "key": "A",
        "text": "安抚客户情绪→了解诉求原因→沟通解决方案→落实解决措施→诉求问题闭环"
      },
      {
        "key": "B",
        "text": "受理1、答复供电方案10/20、审计审查3、中间检查2、竣工检验及装表6"
      },
      {
        "key": "C",
        "text": "特殊客户、投诉主体非供电部门、匿名工单、公司启动应急期间、近一年内已有首次投诉"
      },
      {
        "key": "D",
        "text": "客户诉求问题内转外不转，需要转办处置的及时记录并派发工单至责任单位，全过程跟进"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "“不下投诉”五大场景：特殊客户、投诉主体非供电部门、匿名工单、公司启动应急期间、近一年内已有首次投诉。"
  },
  {
    "id": "kp256",
    "category": "客户服务",
    "page": 41,
    "type": "single",
    "prompt": "客户投诉举报处置“六步法”是：",
    "options": [
      {
        "key": "A",
        "text": "速联系、态度好、讲明白、马上办、给预期、常走访"
      },
      {
        "key": "B",
        "text": "指增加电表（原本已安装的不够用，需增大容量）"
      },
      {
        "key": "C",
        "text": "低压客户业扩办理、高压客户业扩办理、新能源业务"
      },
      {
        "key": "D",
        "text": "并网申请→接入系统资料审查→并网验收及运行"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "客户投诉举报处置“六步法”：速联系、态度好、讲明白、马上办、给预期、常走访。"
  },
  {
    "id": "kp257",
    "category": "客户服务",
    "page": 42,
    "type": "single",
    "prompt": "客户服务的流程是：",
    "options": [
      {
        "key": "A",
        "text": "安抚客户情绪→了解诉求原因→沟通解决方案→落实解决措施→诉求问题闭环"
      },
      {
        "key": "B",
        "text": "诉求问题闭环→落实解决措施→沟通解决方案→了解诉求原因→安抚客户情绪"
      },
      {
        "key": "C",
        "text": "了解诉求原因→安抚客户情绪→沟通解决方案→落实解决措施→诉求问题闭环"
      },
      {
        "key": "D",
        "text": "客户诉求问题内转外不转，需要转办处置的及时记录并派发工单至责任单位，全过程跟进"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "流程：安抚客户情绪→了解诉求原因→沟通解决方案→落实解决措施→诉求问题闭环。"
  },
  {
    "id": "kp258",
    "category": "客户服务",
    "page": 42,
    "type": "single",
    "prompt": "首问负责制是：",
    "options": [
      {
        "key": "A",
        "text": "特殊客户、投诉主体非供电部门、匿名工单、公司启动应急期间、近一年内已有首次投诉"
      },
      {
        "key": "B",
        "text": "客户诉求问题内转外不转，不需要转办处置的及时记录并派发工单至责任单位，全过程跟进"
      },
      {
        "key": "C",
        "text": "安抚客户情绪→了解诉求原因→沟通解决方案→落实解决措施→诉求问题闭环"
      },
      {
        "key": "D",
        "text": "客户诉求问题内转外不转，需要转办处置的及时记录并派发工单至责任单位，全过程跟进"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "首问负责制：客户诉求问题内转外不转，需要转办处置的及时记录并派发工单至责任单位，全过程跟进。"
  },
  {
    "id": "kp259",
    "category": "客户服务",
    "page": 42,
    "type": "single",
    "prompt": "信息保密是：",
    "options": [
      {
        "key": "A",
        "text": "快速响应、闭环管理、技术赋能"
      },
      {
        "key": "B",
        "text": "无外线5、有外线15"
      },
      {
        "key": "C",
        "text": "客户信息、工单信息"
      },
      {
        "key": "D",
        "text": "高压客户业扩办理"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "信息保密：客户信息、工单信息。"
  },
  {
    "id": "kp260",
    "category": "客户服务",
    "page": 42,
    "type": "single",
    "prompt": "客户诉求应对策略的三大核心原则是：",
    "options": [
      {
        "key": "A",
        "text": "快速响应、闭环管理、技术赋能"
      },
      {
        "key": "B",
        "text": "物业权属证明材料（即产权材料）"
      },
      {
        "key": "C",
        "text": "客户信息、工单信息"
      },
      {
        "key": "D",
        "text": "并网申请→并网验收及运行"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "客户诉求应对策略的三大核心原则：快速响应、闭环管理、技术赋能。"
  },
  {
    "id": "kp261",
    "category": "电能计量",
    "page": 44,
    "type": "single",
    "prompt": "计量专业五大核心业务板块是：",
    "options": [
      {
        "key": "A",
        "text": "营销技术、计量项目、计量物资、计量运行、营销安全"
      },
      {
        "key": "B",
        "text": "营销技术、计量项目、计量物资、计量停运、营销安全"
      },
      {
        "key": "C",
        "text": "计量检定、计量物资、计量项目、计量运行、营销安全"
      },
      {
        "key": "D",
        "text": "工器具准备→风险评估→安全施工→竣工验收"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "计量专业五大核心业务板块：营销技术、计量项目、计量物资、计量运行、营销安全。"
  },
  {
    "id": "kp262",
    "category": "电能计量",
    "page": 46,
    "type": "single",
    "prompt": "计量需要掌握的核心系统功能是：",
    "options": [
      {
        "key": "A",
        "text": "营销系统、计量自动化系统5、电网管理平台、计量生产管理平台、移动营销APP、施工管控平台"
      },
      {
        "key": "B",
        "text": "营销系统、计量自动化系统4、电网管理平台、计量生产管理平台、移动营销APP、施工管控平台"
      },
      {
        "key": "C",
        "text": "营销系统、计量自动化系统6、电网管理平台、计量生产管理平台、移动营销APP、施工管控平台"
      },
      {
        "key": "D",
        "text": "营销系统、计量自动化系统3.0、电网管理平台、计量生产管理平台、移动营销APP、施工管控平台"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "计量需要掌握的核心系统功能：营销系统、计量自动化系统3.0、电网管理平台、计量生产管理平台、移动营销APP、施工管控平台。"
  },
  {
    "id": "kp263",
    "category": "电能计量",
    "page": 46,
    "type": "single",
    "prompt": "计量五大类制度、标准、规程为：",
    "options": [
      {
        "key": "A",
        "text": "营销技术、计量项目、计量物资、计量运行、营销安全"
      },
      {
        "key": "B",
        "text": "工器具准备→风险评估→安全施工→竣工验收"
      },
      {
        "key": "C",
        "text": "计量检定、计量物资、计量项目、计量运行、营销安全"
      },
      {
        "key": "D",
        "text": "计量检定、计量物资、计量项目、计量停运、营销安全"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "计量五大类制度、标准、规程：计量检定、计量物资、计量项目、计量运行、营销安全。"
  },
  {
    "id": "kp264",
    "category": "电能计量",
    "page": 48,
    "type": "single",
    "prompt": "计量装置的分类是：",
    "options": [
      {
        "key": "A",
        "text": "运行中的电能计量装置按计量对象重要程度和管理需要分为五类（I类、II类、III类、IV类、V类）"
      },
      {
        "key": "B",
        "text": "运行中的电能计量装置按计量对象一般程度和管理需要分为五类（I类、II类、III类、IV类、V类）"
      },
      {
        "key": "C",
        "text": "停运中的电能计量装置按计量对象重要程度和管理需要分为五类（I类、II类、III类、IV类、V类）"
      },
      {
        "key": "D",
        "text": "运行中的电能计量装置按计量对象重要程度和管理不需要分为五类（I类、II类、III类、IV类、V类）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "计量装置的分类：运行中的电能计量装置按计量对象重要程度和管理需要分为五类（I类、II类、III类、IV类、V类）。"
  },
  {
    "id": "kp265",
    "category": "电能计量",
    "page": 49,
    "type": "multiple",
    "prompt": "电能计量三大设备品类包括：",
    "options": [
      {
        "key": "A",
        "text": "电能表"
      },
      {
        "key": "B",
        "text": "终端"
      },
      {
        "key": "C",
        "text": "互感器"
      },
      {
        "key": "D",
        "text": "发电机"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "三大设备品类及其安装使用特点：电能表、终端、互感器。"
  },
  {
    "id": "kp266",
    "category": "电能计量",
    "page": 49,
    "type": "single",
    "prompt": "电能表是：",
    "options": [
      {
        "key": "A",
        "text": "电能表、终端、互感器"
      },
      {
        "key": "B",
        "text": "和变压器类似，是用来变换电压的仪器。电压互感器可分为电磁式电压互感器和电容式电压互感器两种"
      },
      {
        "key": "C",
        "text": "分为电压互感器、电流互感器"
      },
      {
        "key": "D",
        "text": "分为机械式电能表、电子式电能表、智能电表；具体功能包括：计量功能、冻结功能、变量功能、时区时段设置、阶梯电价设置、事件记录、停电显示与抄表、预付费功能等"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "电能表：分为机械式电能表、电子式电能表、智能电表；具体功能包括：计量功能、冻结功能、变量功能、时区时段设置、阶梯电价设置、事件记录、停电显示与抄表、预付费功能等。"
  },
  {
    "id": "kp267",
    "category": "电能计量",
    "page": 49,
    "type": "single",
    "prompt": "互感器是：",
    "options": [
      {
        "key": "A",
        "text": "和变压器类似，是用来变换电压的仪器。电压互感器可分为电磁式电压互感器和电容式电压互感器两种"
      },
      {
        "key": "B",
        "text": "AI巡视、AI诊断、AI运维、AI日报"
      },
      {
        "key": "C",
        "text": "分为电压互感器、电流互感器"
      },
      {
        "key": "D",
        "text": "电能表、终端、互感器"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "互感器：分为电压互感器、电流互感器。"
  },
  {
    "id": "kp268",
    "category": "电能计量",
    "page": 49,
    "type": "single",
    "prompt": "电压互感器（PT或TV）的作用是：",
    "options": [
      {
        "key": "A",
        "text": "用来变换电压"
      },
      {
        "key": "B",
        "text": "用来测量接地电阻"
      },
      {
        "key": "C",
        "text": "用来切断短路电流"
      },
      {
        "key": "D",
        "text": "用来调节发电机转速"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电压互感器（Potential Transformer 简称 PT 或 TV）：和变压器类似，是用来变换电压的仪器。电压互感器可分为电磁式电压互感器和电容式电压互感器两种。"
  },
  {
    "id": "kp269",
    "category": "电能计量",
    "page": 50,
    "type": "single",
    "prompt": "电流互感器（CT或TA）的作用是：",
    "options": [
      {
        "key": "A",
        "text": "将一次侧大电流转换成二次侧小电流来测量"
      },
      {
        "key": "B",
        "text": "将高电压转换为100V"
      },
      {
        "key": "C",
        "text": "直接切断短路电流"
      },
      {
        "key": "D",
        "text": "将小电流转换为雷电流"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "电流互感器（Current Transformer 简称 CT 或 TA）：是依据电磁感应原理将一次侧大电流转换成二次侧小电流来测量的仪器。"
  },
  {
    "id": "kp270",
    "category": "电能计量",
    "page": 50,
    "type": "single",
    "prompt": "计量自动化终端是：",
    "options": [
      {
        "key": "A",
        "text": "是依据电磁感应原理将一次侧大电流转换成二次侧小电流来测量的仪器"
      },
      {
        "key": "B",
        "text": "分为厂站电能量采集终端、负荷管理终端、配变监测管理终端、低压电力用户分散抄表终端、智能融合终端"
      },
      {
        "key": "C",
        "text": "和变压器类似，是用来变换电压的仪器。电压互感器可分为电磁式电压互感器和电容式电压互感器两种"
      },
      {
        "key": "D",
        "text": "分为厂站电能量采集终端、负荷管理终端、配变监测管理终端、低压电力用户集中抄表终端、智能融合终端"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "计量自动化终端：分为厂站电能量采集终端、负荷管理终端、配变监测管理终端、低压电力用户集中抄表终端、智能融合终端。"
  },
  {
    "id": "kp271",
    "category": "电能计量",
    "page": 51,
    "type": "single",
    "prompt": "计量装置安装及验收全流程是：",
    "options": [
      {
        "key": "A",
        "text": "风险评估→工器具准备→安全施工→竣工验收"
      },
      {
        "key": "B",
        "text": "AI巡视、AI诊断、AI运维、AI日报"
      },
      {
        "key": "C",
        "text": "工器具准备→风险评估→安全施工→竣工验收"
      },
      {
        "key": "D",
        "text": "竣工验收→安全施工→风险评估→工器具准备"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "计量装置安装及验收全流程：工器具准备→风险评估→安全施工→竣工验收。"
  },
  {
    "id": "kp272",
    "category": "电能计量",
    "page": 51,
    "type": "single",
    "prompt": "新一代智能量测体系是：",
    "options": [
      {
        "key": "A",
        "text": "包括计量3.0系统与低压透明化，为各专业（生技、客服、规划、调度、线损）高质量发展赋能"
      },
      {
        "key": "B",
        "text": "包括计量6系统与低压透明化，为各专业（生技、客服、规划、调度、线损）高质量发展赋能"
      },
      {
        "key": "C",
        "text": "包括计量4系统与低压透明化，为各专业（生技、客服、规划、调度、线损）高质量发展赋能"
      },
      {
        "key": "D",
        "text": "包括计量5系统与低压透明化，为各专业（生技、客服、规划、调度、线损）高质量发展赋能"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "新一代智能量测体系：包括计量3.0系统与低压透明化，为各专业（生技、客服、规划、调度、线损）高质量发展赋能。"
  },
  {
    "id": "kp273",
    "category": "电能计量",
    "page": 51,
    "type": "single",
    "prompt": "计量AI指挥官的四大功能是：",
    "options": [
      {
        "key": "A",
        "text": "AI巡视、AI诊断、AI运维、AI日报"
      },
      {
        "key": "B",
        "text": "工器具准备→风险评估→安全施工→竣工验收"
      },
      {
        "key": "C",
        "text": "包括计量3.0系统与低压透明化，为各专业（生技、客服、规划、调度、线损）高质量发展赋能"
      },
      {
        "key": "D",
        "text": "分为电压互感器、电流互感器"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "计量AI指挥官的四大功能：AI巡视、AI诊断、AI运维、AI日报。"
  },
  {
    "id": "kp274",
    "category": "主网调度",
    "page": 51,
    "type": "single",
    "prompt": "电力调度是指：",
    "options": [
      {
        "key": "A",
        "text": "分南网总调、各省中调、各区地调、各区配调"
      },
      {
        "key": "B",
        "text": "电力调度是对所辖电网停运进行的组织、指挥、指导和协调"
      },
      {
        "key": "C",
        "text": "对所辖电网运行进行生产调度指挥、运行的管理和技术监督"
      },
      {
        "key": "D",
        "text": "电力调度是对所辖电网运行进行的组织、指挥、指导和协调"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "电力调度定义：电力调度是对所辖电网运行进行的组织、指挥、指导和协调。"
  },
  {
    "id": "kp275",
    "category": "主网调度",
    "page": 51,
    "type": "single",
    "prompt": "南网电力调度机构设置是：",
    "options": [
      {
        "key": "A",
        "text": "正常运行频率偏差不得超过±0.2Hz（联网省区）"
      },
      {
        "key": "B",
        "text": "对所辖电网运行进行生产调度指挥、运行的管理和技术监督"
      },
      {
        "key": "C",
        "text": "分南网总调、各省中调、各区地调、各区配调"
      },
      {
        "key": "D",
        "text": "电力调度是对所辖电网运行进行的组织、指挥、指导和协调"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "南网电力调度机构设置：分南网总调、各省中调、各区地调、各区配调。"
  },
  {
    "id": "kp276",
    "category": "主网调度",
    "page": 52,
    "type": "single",
    "prompt": "调度机构的职责范围为：",
    "options": [
      {
        "key": "A",
        "text": "对所辖电网运行进行生产调度指挥、运行的管理和技术监督"
      },
      {
        "key": "B",
        "text": "调度员是电网事故处理的指挥员，厂站必须严格执行调度指令"
      },
      {
        "key": "C",
        "text": "对所辖电网停运进行生产调度指挥、运行的管理和技术监督"
      },
      {
        "key": "D",
        "text": "电网调度运行与管理必须依法依规进行，违者依法依规查处"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "调度机构的职责范围：对所辖电网运行进行生产调度指挥、运行的管理和技术监督。"
  },
  {
    "id": "kp277",
    "category": "主网调度",
    "page": 52,
    "type": "single",
    "prompt": "调度机构的管理规则是：",
    "options": [
      {
        "key": "A",
        "text": "电网调度运行与管理必须依法依规进行，违者依法依规查处"
      },
      {
        "key": "B",
        "text": "电网调度停运与管理必须依法依规进行，违者依法依规查处"
      },
      {
        "key": "C",
        "text": "对所辖电网运行进行生产调度指挥、运行的管理和技术监督"
      },
      {
        "key": "D",
        "text": "调度员是电网事故处理的指挥员，厂站必须严格执行调度指令"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "调度机构的管理规则：电网调度运行与管理必须依法依规进行，违者依法依规查处。"
  },
  {
    "id": "kp278",
    "category": "主网调度",
    "page": 52,
    "type": "single",
    "prompt": "南网频率管理标准为：",
    "options": [
      {
        "key": "A",
        "text": "频率是电网稳定性的关键，南方电网频率标准为60Hz（±0.2Hz）"
      },
      {
        "key": "B",
        "text": "频率是电网稳定性的关键，南方电网频率标准为55Hz（±0.2Hz）"
      },
      {
        "key": "C",
        "text": "频率是电网稳定性的关键，南方电网频率标准为45Hz（±0.2Hz）"
      },
      {
        "key": "D",
        "text": "频率是电网稳定性的关键，南方电网频率标准为50Hz（±0.2Hz）"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "南网频率管理标准：频率是电网稳定性的关键，南方电网频率标准为50Hz（±0.2Hz）。"
  },
  {
    "id": "kp279",
    "category": "主网调度",
    "page": 52,
    "type": "single",
    "prompt": "关于“正常运行频率偏差不得超过±0.2Hz”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "正常运行频率偏差不得超过±2.2Hz（联网省区）"
      },
      {
        "key": "B",
        "text": "正常运行频率偏差不得超过±3.2Hz（联网省区）"
      },
      {
        "key": "C",
        "text": "正常运行频率偏差不得超过±0.2Hz（联网省区）"
      },
      {
        "key": "D",
        "text": "正常运行频率偏差不得超过±1.2Hz（联网省区）"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "正常运行频率偏差不得超过±0.2Hz（联网省区）"
  },
  {
    "id": "kp280",
    "category": "主网调度",
    "page": 52,
    "type": "single",
    "prompt": "关于“独立运行电网装机容量小于3000MW时”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "独立运行电网装机容量小于3000MW时，频率运行偏差正常不得超过±0.5Hz"
      },
      {
        "key": "B",
        "text": "独立运行电网装机容量小于2950MW时，频率运行偏差正常不得超过±0.5Hz"
      },
      {
        "key": "C",
        "text": "独立运行电网装机容量小于3050MW时，频率运行偏差正常不得超过±0.5Hz"
      },
      {
        "key": "D",
        "text": "独立运行电网装机容量小于3100MW时，频率运行偏差正常不得超过±0.5Hz"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "独立运行电网装机容量小于3000MW时，频率运行偏差正常不得超过±0.5Hz。"
  },
  {
    "id": "kp281",
    "category": "主网调度",
    "page": 53,
    "type": "single",
    "prompt": "南网电压无功管理基本原则为：",
    "options": [
      {
        "key": "A",
        "text": "分层分区、就地平衡"
      },
      {
        "key": "B",
        "text": "快速控制→稳定局面→恢复自愈"
      },
      {
        "key": "C",
        "text": "分南网总调、各省中调、各区地调、各区配调"
      },
      {
        "key": "D",
        "text": "应根据调度管辖范围的划分，实行统一调度，分级管理"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "南网电压无功管理基本原则：分层分区、就地平衡。"
  },
  {
    "id": "kp282",
    "category": "主网调度",
    "page": 53,
    "type": "single",
    "prompt": "电网运行操作管理是：",
    "options": [
      {
        "key": "A",
        "text": "正常运行频率偏差不得超过±0.2Hz（联网省区）"
      },
      {
        "key": "B",
        "text": "应根据调度管辖范围的划分，实行分散调度，分级管理"
      },
      {
        "key": "C",
        "text": "电网调度运行与管理必须依法依规进行，违者依法依规查处"
      },
      {
        "key": "D",
        "text": "应根据调度管辖范围的划分，实行统一调度，分级管理"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "电网运行操作管理：应根据调度管辖范围的划分，实行统一调度，分级管理。"
  },
  {
    "id": "kp283",
    "category": "主网调度",
    "page": 53,
    "type": "single",
    "prompt": "事故处理基本原则及顺序是：",
    "options": [
      {
        "key": "A",
        "text": "稳定局面→快速控制→恢复自愈"
      },
      {
        "key": "B",
        "text": "分层分区、就地平衡"
      },
      {
        "key": "C",
        "text": "快速控制→稳定局面→恢复自愈"
      },
      {
        "key": "D",
        "text": "恢复自愈→稳定局面→快速控制"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "事故处理基本原则及顺序：快速控制→稳定局面→恢复自愈。"
  },
  {
    "id": "kp284",
    "category": "主网调度",
    "page": 54,
    "type": "single",
    "prompt": "事故处理对调度员和厂站人员的要求是：",
    "options": [
      {
        "key": "A",
        "text": "调度员是电网事故处理的指挥员，厂站必须严格执行调度指令"
      },
      {
        "key": "B",
        "text": "应根据调度管辖范围的划分，实行统一调度，分级管理"
      },
      {
        "key": "C",
        "text": "电网调度运行与管理必须依法依规进行，违者依法依规查处"
      },
      {
        "key": "D",
        "text": "对所辖电网运行进行生产调度指挥、运行的管理和技术监督"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "事故处理对调度员和厂站人员的要求：调度员是电网事故处理的指挥员，厂站必须严格执行调度指令。"
  },
  {
    "id": "kp285",
    "category": "配网调度",
    "page": 55,
    "type": "single",
    "prompt": "“三公”调度原则是：",
    "options": [
      {
        "key": "A",
        "text": "按照有关规程、规定实施“公开、公平、公正”调度"
      },
      {
        "key": "B",
        "text": "按照有关规程、规定实施“封闭、公平、公正”调度"
      },
      {
        "key": "C",
        "text": "按照有关规程、规定实施“公开、失衡、公正”调度"
      },
      {
        "key": "D",
        "text": "直接操作、委托操作、配合操作、许可操作"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "“三公”调度原则：按照有关规程、规定实施“公开、公平、公正”调度。"
  },
  {
    "id": "kp286",
    "category": "配网调度",
    "page": 55,
    "type": "single",
    "prompt": "关于“设备四大状态”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "状态检修→带电作业→转供电→合并停电事件→停电时间定额→重大停电审查"
      },
      {
        "key": "B",
        "text": "停运状态（类比“热水器运行”）热备用状态（类比“热水器关开关”）冷备用状态（类比“热水器拔插头”）检修状态（类比“热水器维修及绑绝缘胶带”）"
      },
      {
        "key": "C",
        "text": "发电项目的运行状态可被实时监控，包括设备性能、环境参数、电力输出等关键数据"
      },
      {
        "key": "D",
        "text": "运行状态（类比“热水器运行”）热备用状态（类比“热水器关开关”）冷备用状态（类比“热水器拔插头”）检修状态（类比“热水器维修及绑绝缘胶带”）"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "运行状态（类比“热水器运行”）热备用状态（类比“热水器关开关”）冷备用状态（类比“热水器拔插头”）检修状态（类比“热水器维修及绑绝缘胶带”）"
  },
  {
    "id": "kp287",
    "category": "配网调度",
    "page": 56,
    "type": "single",
    "prompt": "解口是：",
    "options": [
      {
        "key": "A",
        "text": "直接操作、委托操作、配合操作、许可操作"
      },
      {
        "key": "B",
        "text": "按照有关规程、规定实施“公开、公平、公正”调度"
      },
      {
        "key": "C",
        "text": "通过拆除线路的电气连接，将无法通过设备操作实现隔离的待检修线路、设备与电源之间形成明显断开点，并有足够的安全距离；被解口侧视为与原线路没有物理连接，因检修工作需另行落实的安全措施由设备运维单位自行组织落实，工作结束后恢复与原线路连接前应自行解除"
      },
      {
        "key": "D",
        "text": "注意严禁约时停送电"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "解口：通过拆除线路的电气连接，将无法通过设备操作实现隔离的待检修线路、设备与电源之间形成明显断开点，并有足够的安全距离；被解口侧视为与原线路没有物理连接，因检修工作需另行落实的安全措施由设备运维单位自行组织落实，工作结束后恢复与原线路连接前应自行解除。"
  },
  {
    "id": "kp288",
    "category": "配网调度",
    "page": 56,
    "type": "single",
    "prompt": "操作模式是：",
    "options": [
      {
        "key": "A",
        "text": "直接操作、委托操作、配合操作、许可操作"
      },
      {
        "key": "B",
        "text": "可理解为“需要跨电网、打配合”"
      },
      {
        "key": "C",
        "text": "间接操作、委托操作、配合操作、许可操作"
      },
      {
        "key": "D",
        "text": "可理解为“A员工委托B员工进行操作”"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "操作模式：直接操作、委托操作、配合操作、许可操作。"
  },
  {
    "id": "kp289",
    "category": "配网调度",
    "page": 56,
    "type": "single",
    "prompt": "委托操作是：",
    "options": [
      {
        "key": "A",
        "text": "可理解为“A员工委托B员工进行操作”"
      },
      {
        "key": "B",
        "text": "直接操作、委托操作、配合操作、许可操作"
      },
      {
        "key": "C",
        "text": "可理解为“需要跨电网、打配合”"
      },
      {
        "key": "D",
        "text": "可理解为“供电所员工申请操作，调度机构同意开展作业“"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "委托操作：可理解为“A员工委托B员工进行操作”。"
  },
  {
    "id": "kp290",
    "category": "配网调度",
    "page": 56,
    "type": "single",
    "prompt": "配合操作是：",
    "options": [
      {
        "key": "A",
        "text": "可理解为“A员工委托B员工进行操作”"
      },
      {
        "key": "B",
        "text": "可理解为“不需要跨电网、打配合”"
      },
      {
        "key": "C",
        "text": "直接操作、委托操作、配合操作、许可操作"
      },
      {
        "key": "D",
        "text": "可理解为“需要跨电网、打配合”"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "配合操作：可理解为“需要跨电网、打配合”。"
  },
  {
    "id": "kp291",
    "category": "配网调度",
    "page": 56,
    "type": "single",
    "prompt": "许可操作是：",
    "options": [
      {
        "key": "A",
        "text": "可理解为“A员工委托B员工进行操作”"
      },
      {
        "key": "B",
        "text": "可理解为“需要跨电网、打配合”"
      },
      {
        "key": "C",
        "text": "可理解为“供电所员工申请操作，调度机构同意开展作业“"
      },
      {
        "key": "D",
        "text": "直接操作、委托操作、配合操作、许可操作"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "许可操作：可理解为“供电所员工申请操作，调度机构同意开展作业“。"
  },
  {
    "id": "kp292",
    "category": "配网调度",
    "page": 57,
    "type": "single",
    "prompt": "综合停电“六步法”是：",
    "options": [
      {
        "key": "A",
        "text": "状态检修→带电作业→转供电→合并停电事件→停电时间定额→重大停电审查"
      },
      {
        "key": "B",
        "text": "发电项目的运行状态可被实时监控，包括设备性能、环境参数、电力输出等关键数据"
      },
      {
        "key": "C",
        "text": "重大停电审查→停电时间定额→合并停电事件→转供电→带电作业→状态检修"
      },
      {
        "key": "D",
        "text": "带电作业→状态检修→转供电→合并停电事件→停电时间定额→重大停电审查"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "综合停电“六步法”：状态检修→带电作业→转供电→合并停电事件→停电时间定额→重大停电审查。"
  },
  {
    "id": "kp293",
    "category": "配网调度",
    "page": 57,
    "type": "single",
    "prompt": "调无业务联系基本原则是：",
    "options": [
      {
        "key": "A",
        "text": "调度用语→了解情况→核实状况→下令"
      },
      {
        "key": "B",
        "text": "下令→核实状况→了解情况→调度用语"
      },
      {
        "key": "C",
        "text": "了解情况→调度用语→核实状况→下令"
      },
      {
        "key": "D",
        "text": "首先说：“现在向你核实/确认”"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "调无业务联系基本原则：调度用语→了解情况→核实状况→下令。"
  },
  {
    "id": "kp294",
    "category": "配网调度",
    "page": 57,
    "type": "single",
    "prompt": "调度用语是：",
    "options": [
      {
        "key": "A",
        "text": "调度用语→了解情况→核实状况→下令"
      },
      {
        "key": "B",
        "text": "调度业务联系原则上应使用普通话：调度员下令必须使用普通话，工作负责人不可以不用普通话，但必须口齿清楚"
      },
      {
        "key": "C",
        "text": "首先说：“现在向你核实/确认”"
      },
      {
        "key": "D",
        "text": "调度业务联系原则上应使用普通话：调度员下令必须使用普通话，工作负责人可以不用普通话，但必须口齿清楚"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "调度用语：调度业务联系原则上应使用普通话：调度员下令必须使用普通话，工作负责人可以不用普通话，但必须口齿清楚。"
  },
  {
    "id": "kp295",
    "category": "配网调度",
    "page": 57,
    "type": "single",
    "prompt": "了解情况是：",
    "options": [
      {
        "key": "A",
        "text": "调度用语→了解情况→核实状况→下令"
      },
      {
        "key": "B",
        "text": "可理解为“需要跨电网、打配合”"
      },
      {
        "key": "C",
        "text": "首先说：“现在向你了解情况”"
      },
      {
        "key": "D",
        "text": "首先说：“现在向你核实/确认”"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "了解情况：首先说：“现在向你了解情况”"
  },
  {
    "id": "kp296",
    "category": "配网调度",
    "page": 57,
    "type": "single",
    "prompt": "核实状况是：",
    "options": [
      {
        "key": "A",
        "text": "首先说：“现在向你核实/确认”"
      },
      {
        "key": "B",
        "text": "可理解为“需要跨电网、打配合”"
      },
      {
        "key": "C",
        "text": "首先说：“现在向你了解情况”"
      },
      {
        "key": "D",
        "text": "调度用语→了解情况→核实状况→下令"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "核实状况：首先说：“现在向你核实/确认”"
  },
  {
    "id": "kp297",
    "category": "配网调度",
    "page": 58,
    "type": "single",
    "prompt": "下令是：",
    "options": [
      {
        "key": "A",
        "text": "使用调度操作票下达操作命令或口头下达调度命令时，首先说：“现在开始下令”。注意：应按照重要性程度分级下令"
      },
      {
        "key": "B",
        "text": "使用调度操作票下达操作命令或口头下达调度命令时，首先说：“现在开始下令”。注意：应按照一般性程度分级下令"
      },
      {
        "key": "C",
        "text": "注意严禁约时停送电"
      },
      {
        "key": "D",
        "text": "发电项目的运行状态可被实时监控，包括设备性能、环境参数、电力输出等关键数据"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "下令：使用调度操作票下达操作命令或口头下达调度命令时，首先说：“现在开始下令”。注意：应按照重要性程度分级下令。"
  },
  {
    "id": "kp298",
    "category": "配网调度",
    "page": 58,
    "type": "single",
    "prompt": "调度业务联系注意事项是：",
    "options": [
      {
        "key": "A",
        "text": "可观、可测、可调、可控"
      },
      {
        "key": "B",
        "text": "2025年1月1日起"
      },
      {
        "key": "C",
        "text": "首先说：“现在向你了解情况”"
      },
      {
        "key": "D",
        "text": "注意严禁约时停送电"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "调度业务联系注意事项：注意严禁约时停送电。"
  },
  {
    "id": "kp299",
    "category": "配网调度",
    "page": 58,
    "type": "single",
    "prompt": "分布式电源是指：",
    "options": [
      {
        "key": "A",
        "text": "分布式电源装置是指功率为数千瓦至60MW小型模块式的、与环境兼容的独立电源。是不直接与集中输电系统相连的35kV及以下电压等级的电源，主要包括发电设备和储能装置"
      },
      {
        "key": "B",
        "text": "分布式电源装置是指功率为数千瓦至45MW小型模块式的、与环境兼容的独立电源。是不直接与集中输电系统相连的35kV及以下电压等级的电源，主要包括发电设备和储能装置"
      },
      {
        "key": "C",
        "text": "分布式电源装置是指功率为数千瓦至50MW小型模块式的、与环境兼容的独立电源。是不直接与集中输电系统相连的35kV及以下电压等级的电源，主要包括发电设备和储能装置"
      },
      {
        "key": "D",
        "text": "分布式电源装置是指功率为数千瓦至55MW小型模块式的、与环境兼容的独立电源。是不直接与集中输电系统相连的35kV及以下电压等级的电源，主要包括发电设备和储能装置"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "分布式电源定义：分布式电源装置是指功率为数千瓦至50MW小型模块式的、与环境兼容的独立电源。是不直接与集中输电系统相连的35kV及以下电压等级的电源，主要包括发电设备和储能装置。"
  },
  {
    "id": "kp300",
    "category": "配网调度",
    "page": 58,
    "type": "single",
    "prompt": "《能源法》正式施行时间为：",
    "options": [
      {
        "key": "A",
        "text": "2025年1月1日起"
      },
      {
        "key": "B",
        "text": "2020年1月1日起"
      },
      {
        "key": "C",
        "text": "2030年1月1日起"
      },
      {
        "key": "D",
        "text": "2035年1月1日起"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "《能源法》正式施行时间：2025年1月1日起。"
  },
  {
    "id": "kp301",
    "category": "配网调度",
    "page": 58,
    "type": "single",
    "prompt": "关于“根据《中华人民共和国能源法》及相关规定，小型水电站”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "单站装机容量5万千瓦以下的水电工程"
      },
      {
        "key": "B",
        "text": "单站装机容量6万千瓦以下的水电工程"
      },
      {
        "key": "C",
        "text": "单站装机容量7万千瓦以下的水电工程"
      },
      {
        "key": "D",
        "text": "单站装机容量8万千瓦以下的水电工程"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "根据《中华人民共和国能源法》及相关规定，小型水电站是指单站装机容量5万千瓦以下的水电工程。"
  },
  {
    "id": "kp302",
    "category": "配网调度",
    "page": 58,
    "type": "single",
    "prompt": "分布式电源的“四可”要求是：",
    "options": [
      {
        "key": "A",
        "text": "单站装机容量5万千瓦以下的水电工程"
      },
      {
        "key": "B",
        "text": "2025年1月1日起"
      },
      {
        "key": "C",
        "text": "确保发电项目可被电网远程或自动化控制"
      },
      {
        "key": "D",
        "text": "可观、可测、可调、可控"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "分布式电源的“四可”要求：可观、可测、可调、可控。"
  },
  {
    "id": "kp303",
    "category": "配网调度",
    "page": 58,
    "type": "single",
    "prompt": "可观是：",
    "options": [
      {
        "key": "A",
        "text": "发电项目的运行状态可被定期监控，包括设备性能、环境参数、电力输出等关键数据"
      },
      {
        "key": "B",
        "text": "发电项目的运行状态可被实时监控，包括设备性能、环境参数、电力输出等辅助数据"
      },
      {
        "key": "C",
        "text": "发电项目的运行状态可被实时监控，包括设备性能、环境参数、电力输出等关键数据"
      },
      {
        "key": "D",
        "text": "发电项目的停运状态可被实时监控，包括设备性能、环境参数、电力输出等关键数据"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "可观：发电项目的运行状态可被实时监控，包括设备性能、环境参数、电力输出等关键数据。"
  },
  {
    "id": "kp304",
    "category": "配网调度",
    "page": 58,
    "type": "single",
    "prompt": "可测是：",
    "options": [
      {
        "key": "A",
        "text": "对发电功率、电压、电流等数据具备准确测量能力"
      },
      {
        "key": "B",
        "text": "单站装机容量5万千瓦以下的水电工程"
      },
      {
        "key": "C",
        "text": "可根据电网负荷需求调节电站的有功、无功功率输出"
      },
      {
        "key": "D",
        "text": "确保发电项目可被电网远程或自动化控制"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "可测：对发电功率、电压、电流等数据具备准确测量能力。"
  },
  {
    "id": "kp305",
    "category": "配网调度",
    "page": 58,
    "type": "single",
    "prompt": "可调是：",
    "options": [
      {
        "key": "A",
        "text": "可根据电网负荷需求调节电站的有功、无功功率输出"
      },
      {
        "key": "B",
        "text": "对发电功率、电压、电流等数据具备准确测量能力"
      },
      {
        "key": "C",
        "text": "确保发电项目可被电网远程或自动化控制"
      },
      {
        "key": "D",
        "text": "单站装机容量5万千瓦以下的水电工程"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "可调：可根据电网负荷需求调节电站的有功、无功功率输出。"
  },
  {
    "id": "kp306",
    "category": "配网调度",
    "page": 58,
    "type": "single",
    "prompt": "可控是：",
    "options": [
      {
        "key": "A",
        "text": "对发电功率、电压、电流等数据具备准确测量能力"
      },
      {
        "key": "B",
        "text": "单站装机容量5万千瓦以下的水电工程"
      },
      {
        "key": "C",
        "text": "可根据电网负荷需求调节电站的有功、无功功率输出"
      },
      {
        "key": "D",
        "text": "确保发电项目可被电网远程或自动化控制"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "可控：确保发电项目可被电网远程或自动化控制。"
  },
  {
    "id": "kp307",
    "category": "变电检修",
    "page": 59,
    "type": "multiple",
    "prompt": "A、B、C三类检修的层级包含关系是：",
    "options": [
      {
        "key": "A",
        "text": "B类包含所有A类项目"
      },
      {
        "key": "B",
        "text": "C类包含所有B类项目"
      },
      {
        "key": "C",
        "text": "A类包含所有B类项目（整体→局部）"
      },
      {
        "key": "D",
        "text": "B类包含所有C类项目（停电局部→不停电）"
      }
    ],
    "correct": [
      "C",
      "D"
    ],
    "answerText": "A类包含所有B类项目（整体→局部）B类包含所有C类项目（停电局部→不停电）"
  },
  {
    "id": "kp308",
    "category": "变电检修",
    "page": 59,
    "type": "single",
    "prompt": "A类检修是：",
    "options": [
      {
        "key": "A",
        "text": "停电进行的整体检查"
      },
      {
        "key": "B",
        "text": "不停电进行的检查。C1=一般巡维（日常巡视），C2=专业/动态巡维（特定条件）"
      },
      {
        "key": "C",
        "text": "所有B类项目（整体→局部）B类包含所有C类项目（停电局部→不停电）"
      },
      {
        "key": "D",
        "text": "停电进行的局部检查（B1)，或停电/不停电进行周期性的试验工作(B2)"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "A类检修：停电进行的整体检查"
  },
  {
    "id": "kp309",
    "category": "变电检修",
    "page": 59,
    "type": "single",
    "prompt": "B类检修是：",
    "options": [
      {
        "key": "A",
        "text": "停电进行的局部检查（B1)，或停电/不停电进行周期性的试验工作(B2)"
      },
      {
        "key": "B",
        "text": "停电进行的局部检查（B2)，或停电/不停电进行周期性的试验工作(B2)"
      },
      {
        "key": "C",
        "text": "停电进行的局部检查（B3)，或停电/不停电进行周期性的试验工作(B2)"
      },
      {
        "key": "D",
        "text": "停电进行的局部检查（B4)，或停电/不停电进行周期性的试验工作(B2)"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "B类检修：停电进行的局部检查（B1)，或停电/不停电进行周期性的试验工作(B2)"
  },
  {
    "id": "kp310",
    "category": "变电检修",
    "page": 59,
    "type": "single",
    "prompt": "C类检修是：",
    "options": [
      {
        "key": "A",
        "text": "不停电进行的检查。C3=一般巡维（日常巡视），C2=专业/动态巡维（特定条件）"
      },
      {
        "key": "B",
        "text": "不停电进行的检查。C2=一般巡维（日常巡视），C2=专业/动态巡维（特定条件）"
      },
      {
        "key": "C",
        "text": "不停电进行的检查。C4=一般巡维（日常巡视），C2=专业/动态巡维（特定条件）"
      },
      {
        "key": "D",
        "text": "不停电进行的检查。C1=一般巡维（日常巡视），C2=专业/动态巡维（特定条件）"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "C类检修：不停电进行的检查。C1=一般巡维（日常巡视），C2=专业/动态巡维（特定条件）"
  },
  {
    "id": "kp311",
    "category": "变电检修",
    "page": 60,
    "type": "single",
    "prompt": "下列哪项属于变电检修典型作业流程？",
    "options": [
      {
        "key": "A",
        "text": "客户投诉回访"
      },
      {
        "key": "B",
        "text": "发电计划申报"
      },
      {
        "key": "C",
        "text": "作业前准备"
      },
      {
        "key": "D",
        "text": "电价方案审批"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "作业前准备"
  },
  {
    "id": "kp312",
    "category": "变电检修",
    "page": 60,
    "type": "single",
    "prompt": "下列哪项属于变电检修典型作业流程？",
    "options": [
      {
        "key": "A",
        "text": "作业实施过程（工作票办理、安全交底、作业实施）"
      },
      {
        "key": "B",
        "text": "发电计划申报"
      },
      {
        "key": "C",
        "text": "电价方案审批"
      },
      {
        "key": "D",
        "text": "客户投诉回访"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "作业实施过程（工作票办理、安全交底、作业实施）"
  },
  {
    "id": "kp313",
    "category": "变电检修",
    "page": 60,
    "type": "single",
    "prompt": "下列哪项属于变电检修典型作业流程？",
    "options": [
      {
        "key": "A",
        "text": "归档、闭环"
      },
      {
        "key": "B",
        "text": "电价方案审批"
      },
      {
        "key": "C",
        "text": "客户投诉回访"
      },
      {
        "key": "D",
        "text": "发电计划申报"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "归档、闭环"
  },
  {
    "id": "kp314",
    "category": "变电检修",
    "page": 60,
    "type": "multiple",
    "prompt": "关于高压断路器，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "高压断路器没有灭弧装置"
      },
      {
        "key": "B",
        "text": "中压领域（10kV-40.5kV）绝对主力是真空断路器"
      },
      {
        "key": "C",
        "text": "中压领域绝对主力是隔离开关"
      },
      {
        "key": "D",
        "text": "高压/超高压主推SF6（六氟化硫）断路器"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "answerText": "具有灭弧装置，能够安全切断巨大的故障电流（短路电流），起到控制和保护作用。目前高压/超高压主推SF6（六氟化硫）断路器，其灭弧能力最强。中压领域（10kV-40.5kV）绝对主力是真空断路器。"
  },
  {
    "id": "kp315",
    "category": "变电检修",
    "page": 60,
    "type": "single",
    "prompt": "断路器跳闸时间通常为：",
    "options": [
      {
        "key": "A",
        "text": "几十分钟内"
      },
      {
        "key": "B",
        "text": "几小时内"
      },
      {
        "key": "C",
        "text": "几十毫秒内"
      },
      {
        "key": "D",
        "text": "几十秒内"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "断路器跳闸时间：几十毫秒内。"
  },
  {
    "id": "kp316",
    "category": "变电检修",
    "page": 60,
    "type": "multiple",
    "prompt": "断路器的四大结构包括：",
    "options": [
      {
        "key": "A",
        "text": "灭弧"
      },
      {
        "key": "B",
        "text": "客户计费"
      },
      {
        "key": "C",
        "text": "绝缘"
      },
      {
        "key": "D",
        "text": "操作机构"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "断路器四大结构：灭弧、绝缘、操作机构、导流。"
  },
  {
    "id": "kp317",
    "category": "变电检修",
    "page": 61,
    "type": "single",
    "prompt": "关于隔离开关，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "没有灭弧装置，绝对不能带正常负荷电流或短路电流操作"
      },
      {
        "key": "B",
        "text": "具有完整灭弧装置，可以切断短路电流"
      },
      {
        "key": "C",
        "text": "可以长期带负荷拉闸"
      },
      {
        "key": "D",
        "text": "主要用于切断巨大故障电流"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "没有灭弧装置，绝对不能带正常负荷电流或短路电流操作，否则会发生“带负荷拉刀闸”严重事故（飞弧）。"
  },
  {
    "id": "kp318",
    "category": "变电检修",
    "page": 61,
    "type": "multiple",
    "prompt": "隔离开关的主要作用包括：",
    "options": [
      {
        "key": "A",
        "text": "切断巨大短路电流"
      },
      {
        "key": "B",
        "text": "倒换线路和开断小电流"
      },
      {
        "key": "C",
        "text": "替代继电保护装置"
      },
      {
        "key": "D",
        "text": "隔离电源（形成明显断开点）"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "answerText": "其主要作用是隔离电源（形成明显断开点）、倒换线路和开断小电流。"
  },
  {
    "id": "kp319",
    "category": "变电检修",
    "page": 61,
    "type": "single",
    "prompt": "AIS是指：",
    "options": [
      {
        "key": "A",
        "text": "Oil Insulated Switchgear，油绝缘开关设备"
      },
      {
        "key": "B",
        "text": "Vacuum Metering System，真空计量系统"
      },
      {
        "key": "C",
        "text": "Air Insulated Switchgear，空气绝缘的敞开式开关设备"
      },
      {
        "key": "D",
        "text": "Gas Insulated Switchgear，气体绝缘金属封闭开关设备"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "AIS：Air Insulated Switchgear，空气绝缘的敞开式开关设备"
  },
  {
    "id": "kp320",
    "category": "变电检修",
    "page": 61,
    "type": "single",
    "prompt": "GIS是指：",
    "options": [
      {
        "key": "A",
        "text": "Gas Insulated Switchgear，气体绝缘金属封闭开关设备"
      },
      {
        "key": "B",
        "text": "General Information System，通用信息系统"
      },
      {
        "key": "C",
        "text": "Air Insulated Switchgear，空气绝缘的敞开式开关设备"
      },
      {
        "key": "D",
        "text": "Oil Insulated Switchgear，油绝缘开关设备"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "GIS：Gas Insulated Switchgear，气体绝缘金属封闭开关设备"
  },
  {
    "id": "kp321",
    "category": "变电检修",
    "page": 61,
    "type": "single",
    "prompt": "GIS组合电器是：",
    "options": [
      {
        "key": "A",
        "text": "将断路器、刀闸、互感器等封闭在金属壳内并充入SF6气体作为绝缘介质。具有小型化、可靠性高、安全性好、免受外界环境影响等特点"
      },
      {
        "key": "B",
        "text": "将断路器、刀闸、互感器等封闭在金属壳内并充入SF7气体作为绝缘介质。具有小型化、可靠性高、安全性好、免受外界环境影响等特点"
      },
      {
        "key": "C",
        "text": "将断路器、刀闸、互感器等封闭在金属壳内并充入SF8气体作为绝缘介质。具有小型化、可靠性高、安全性好、免受外界环境影响等特点"
      },
      {
        "key": "D",
        "text": "将断路器、刀闸、互感器等封闭在金属壳内并充入SF9气体作为绝缘介质。具有小型化、可靠性高、安全性好、免受外界环境影响等特点"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "GIS组合电器：将断路器、刀闸、互感器等封闭在金属壳内并充入SF6气体作为绝缘介质。具有小型化、可靠性高、安全性好、免受外界环境影响等特点。"
  },
  {
    "id": "kp322",
    "category": "变电检修",
    "page": 61,
    "type": "multiple",
    "prompt": "关于高压开关柜，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "不具备通断与保护功能"
      },
      {
        "key": "B",
        "text": "一般具备五防闭锁功能"
      },
      {
        "key": "C",
        "text": "只用于低压照明计费"
      },
      {
        "key": "D",
        "text": "用来接收、分配电能，实现通断、控制与保护"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "answerText": "用来接收、分配电能，实现通断、控制与保护，一般具备五防闭锁功能。额定电压3.6～40.5kV、工频50Hz。"
  },
  {
    "id": "kp323",
    "category": "变电检修",
    "page": 61,
    "type": "single",
    "prompt": "变压器的工作原理是：",
    "options": [
      {
        "key": "A",
        "text": "化学反应"
      },
      {
        "key": "B",
        "text": "机械传动"
      },
      {
        "key": "C",
        "text": "电磁感应"
      },
      {
        "key": "D",
        "text": "静电感应"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "工作原理：电磁感应（电生磁、磁场传导、磁生电）"
  },
  {
    "id": "kp324",
    "category": "变电检修",
    "page": 61,
    "type": "single",
    "prompt": "电压互感器（PT）的作用是：",
    "options": [
      {
        "key": "A",
        "text": "将高压按比例转换为标准的低电压（通常为100V），用于测量和保护"
      },
      {
        "key": "B",
        "text": "直接切断短路电流"
      },
      {
        "key": "C",
        "text": "将低压升至超高压用于输电"
      },
      {
        "key": "D",
        "text": "将大电流转换为5A用于计量"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "特殊的“降压变压器”，将高压按比例转换为标准的低电压（通常为100V），用于测量和保护"
  },
  {
    "id": "kp325",
    "category": "变电检修",
    "page": 61,
    "type": "single",
    "prompt": "电流互感器（CT）的作用是：",
    "options": [
      {
        "key": "A",
        "text": "将一次侧巨大的电流转换为标准的小电流（通常为5A或1A）"
      },
      {
        "key": "B",
        "text": "将高电压转换为100V"
      },
      {
        "key": "C",
        "text": "将小电流放大为短路电流"
      },
      {
        "key": "D",
        "text": "直接切断故障电流"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "将一次侧巨大的电流转换为标准的小电流（通常为5A或1A），用于计量和继电保护。起到电流变换和电气隔离的作用。"
  },
  {
    "id": "kp326",
    "category": "变电检修",
    "page": 61,
    "type": "multiple",
    "prompt": "电容器的核心作用包括：",
    "options": [
      {
        "key": "A",
        "text": "稳定母线电压"
      },
      {
        "key": "B",
        "text": "提高功率因数"
      },
      {
        "key": "C",
        "text": "切断短路电流"
      },
      {
        "key": "D",
        "text": "无功补偿"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "电容器：核心作用是无功补偿、提高功率因数、稳定母线电压。公式：C = Q/U。"
  },
  {
    "id": "kp327",
    "category": "变电检修",
    "page": 62,
    "type": "single",
    "prompt": "避雷器是：",
    "options": [
      {
        "key": "A",
        "text": "电路中的“安全泄压阀”，防雷电及瞬时高压。当前电网普遍使用氧化锌避雷器（无间隙）。异常电压下呈高阻态，过电压时瞬间呈低阻态泄放电流"
      },
      {
        "key": "B",
        "text": "隔离电源（形成明显断开点）、倒换线路和开断小电流"
      },
      {
        "key": "C",
        "text": "电路中的“安全泄压阀”，防雷电及瞬时高压。当前电网普遍使用氧化锌避雷器（无间隙）。正常电压下呈高阻态，过电压时瞬间呈低阻态泄放电流"
      },
      {
        "key": "D",
        "text": "电路中的“安全泄压阀”，防雷电及瞬时低压。当前电网普遍使用氧化锌避雷器（无间隙）。正常电压下呈高阻态，过电压时瞬间呈低阻态泄放电流"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "避雷器：电路中的“安全泄压阀”，防雷电及瞬时高压。当前电网普遍使用氧化锌避雷器（无间隙）。正常电压下呈高阻态，过电压时瞬间呈低阻态泄放电流。"
  },
  {
    "id": "kp328",
    "category": "招标采购",
    "page": 64,
    "type": "multiple",
    "prompt": "招标投标的基本原则包括：",
    "options": [
      {
        "key": "A",
        "text": "公开"
      },
      {
        "key": "B",
        "text": "暗箱操作"
      },
      {
        "key": "C",
        "text": "公平"
      },
      {
        "key": "D",
        "text": "公正"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "招标投标基本原则：公开、公平、公正、诚实信用"
  },
  {
    "id": "kp329",
    "category": "发电技术",
    "page": 70,
    "type": "multiple",
    "prompt": "电力系统五大环节包括：",
    "options": [
      {
        "key": "A",
        "text": "发"
      },
      {
        "key": "B",
        "text": "输"
      },
      {
        "key": "C",
        "text": "变"
      },
      {
        "key": "D",
        "text": "采"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "电力系统五大环节：发、输、变、配、用发电（能量转换）、输电（向负荷中心传输）、变电（电压升降转换）、配电（向用户分配）、用电。"
  },
  {
    "id": "kp330",
    "category": "发电技术",
    "page": 70,
    "type": "multiple",
    "prompt": "各类发电效率对比中，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "大型水电（20~30%，最低）"
      },
      {
        "key": "B",
        "text": "光伏（15~25%）"
      },
      {
        "key": "C",
        "text": "光伏（80~90%，最高）"
      },
      {
        "key": "D",
        "text": "大型水电（80~90%，最高）"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "answerText": "各类发电效率对比：大型水电（80~90%，最高） > 压缩空气储能（40~70%） > 燃煤火电（30~48%） > 燃气（30~40%）> 核电（30~35%） > 光伏（15~25%）。"
  },
  {
    "id": "kp331",
    "category": "发电技术",
    "page": 70,
    "type": "single",
    "prompt": "关于“风力发电的能量转化效率理论极限”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "风力发电的能量转化效率理论极限（贝茨）为 69.3%，实际通常在 35%~50%"
      },
      {
        "key": "B",
        "text": "风力发电的能量转化效率理论极限（贝茨）为 54.3%，实际通常在 35%~50%"
      },
      {
        "key": "C",
        "text": "风力发电的能量转化效率理论极限（贝茨）为 59.3%，实际通常在 35%~50%"
      },
      {
        "key": "D",
        "text": "风力发电的能量转化效率理论极限（贝茨）为 64.3%，实际通常在 35%~50%"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "风力发电的能量转化效率理论极限（贝茨）为 59.3%，实际通常在 35%~50%。"
  },
  {
    "id": "kp332",
    "category": "发电技术",
    "page": 70,
    "type": "multiple",
    "prompt": "关于我国电力装机结构，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "火电装机占比依然最高（约40-43%）"
      },
      {
        "key": "B",
        "text": "太阳能发电占比位居末位"
      },
      {
        "key": "C",
        "text": "太阳能发电占比位居第二"
      },
      {
        "key": "D",
        "text": "火电装机占比最低"
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "answerText": "我国电力装机结构（截至2024/2025数据）：火电装机占比依然最高（约40-43%），太阳能发电占比位居第二，风电和水电紧随其后。"
  },
  {
    "id": "kp333",
    "category": "发电技术",
    "page": 70,
    "type": "single",
    "prompt": "水力发电技术的原理是：",
    "options": [
      {
        "key": "A",
        "text": "将水的位能和动能转换为电能"
      },
      {
        "key": "B",
        "text": "反击式和冲击式"
      },
      {
        "key": "C",
        "text": "厂房在拦河大坝之后，大坝挡水，适用于中高水头（如三峡）"
      },
      {
        "key": "D",
        "text": "通过隧洞/渠道引水，适用于高水头、小流量（如锦屏二级）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "原理：将水的位能和动能转换为电能"
  },
  {
    "id": "kp334",
    "category": "发电技术",
    "page": 70,
    "type": "single",
    "prompt": "河床式是：",
    "options": [
      {
        "key": "A",
        "text": "通过隧洞/渠道引水，适用于高水头、小流量（如锦屏二级）"
      },
      {
        "key": "B",
        "text": "厂房在拦河大坝之后，大坝挡水，适用于中高水头（如三峡）"
      },
      {
        "key": "C",
        "text": "反击式和冲击式"
      },
      {
        "key": "D",
        "text": "厂房大坝在同一直线，厂房起挡水作用，适用于低水头（如葛洲坝）"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "河床式：厂房大坝在同一直线，厂房起挡水作用，适用于低水头（如葛洲坝）。"
  },
  {
    "id": "kp335",
    "category": "发电技术",
    "page": 70,
    "type": "single",
    "prompt": "坝后式是：",
    "options": [
      {
        "key": "A",
        "text": "厂房大坝在同一直线，厂房起挡水作用，适用于低水头（如葛洲坝）"
      },
      {
        "key": "B",
        "text": "反击式和冲击式"
      },
      {
        "key": "C",
        "text": "厂房在拦河大坝之后，大坝挡水，适用于中高水头（如三峡）"
      },
      {
        "key": "D",
        "text": "通过隧洞/渠道引水，适用于高水头、小流量（如锦屏二级）"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "坝后式：厂房在拦河大坝之后，大坝挡水，适用于中高水头（如三峡）。"
  },
  {
    "id": "kp336",
    "category": "发电技术",
    "page": 70,
    "type": "single",
    "prompt": "引水式是：",
    "options": [
      {
        "key": "A",
        "text": "通过隧洞/渠道引水，适用于高水头、小流量（如锦屏二级）"
      },
      {
        "key": "B",
        "text": "反击式和冲击式"
      },
      {
        "key": "C",
        "text": "厂房在拦河大坝之后，大坝挡水，适用于中高水头（如三峡）"
      },
      {
        "key": "D",
        "text": "厂房大坝在同一直线，厂房起挡水作用，适用于低水头（如葛洲坝）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "引水式：通过隧洞/渠道引水，适用于高水头、小流量（如锦屏二级）。"
  },
  {
    "id": "kp337",
    "category": "发电技术",
    "page": 70,
    "type": "single",
    "prompt": "水轮机分类是：",
    "options": [
      {
        "key": "A",
        "text": "反击式和冲击式"
      },
      {
        "key": "B",
        "text": "通过隧洞/渠道引水，适用于高水头、小流量（如锦屏二级）"
      },
      {
        "key": "C",
        "text": "厂房在拦河大坝之后，大坝挡水，适用于中高水头（如三峡）"
      },
      {
        "key": "D",
        "text": "厂房大坝在同一直线，厂房起挡水作用，适用于低水头（如葛洲坝）"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "水轮机分类：反击式和冲击式"
  },
  {
    "id": "kp338",
    "category": "发电技术",
    "page": 71,
    "type": "single",
    "prompt": "大型水电站效率通常为：",
    "options": [
      {
        "key": "A",
        "text": "40~50%"
      },
      {
        "key": "B",
        "text": "20~30%"
      },
      {
        "key": "C",
        "text": "60~70%"
      },
      {
        "key": "D",
        "text": "80~90%"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "大型水电站效率80~90%"
  },
  {
    "id": "kp339",
    "category": "发电技术",
    "page": 71,
    "type": "single",
    "prompt": "中小型水电站效率通常为：",
    "options": [
      {
        "key": "A",
        "text": "40~55%"
      },
      {
        "key": "B",
        "text": "90~100%"
      },
      {
        "key": "C",
        "text": "70~85%"
      },
      {
        "key": "D",
        "text": "20~35%"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "中小型水电站效率70~85%"
  },
  {
    "id": "kp340",
    "category": "发电技术",
    "page": 71,
    "type": "single",
    "prompt": "核能发电的原理是：",
    "options": [
      {
        "key": "A",
        "text": "核能转换为热能"
      },
      {
        "key": "B",
        "text": "大型水电站效率80~90%"
      },
      {
        "key": "C",
        "text": "核裂变（主要发电方式）、核聚变核电站效率30~35%"
      },
      {
        "key": "D",
        "text": "反击式和冲击式"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "原理：核能转换为热能"
  },
  {
    "id": "kp341",
    "category": "发电技术",
    "page": 71,
    "type": "multiple",
    "prompt": "核能利用形式包括：",
    "options": [
      {
        "key": "A",
        "text": "核裂变"
      },
      {
        "key": "B",
        "text": "核聚变"
      },
      {
        "key": "C",
        "text": "化学燃烧"
      },
      {
        "key": "D",
        "text": "机械摩擦"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "answerText": "形式：核裂变（主要发电方式）、核聚变核电站效率30~35%。"
  },
  {
    "id": "kp342",
    "category": "储能技术",
    "page": 72,
    "type": "single",
    "prompt": "储能对电力系统平衡约束的作用是：",
    "options": [
      {
        "key": "A",
        "text": "储能会把电量平衡改为瞬时电力平衡"
      },
      {
        "key": "B",
        "text": "储能会取消全部功率平衡约束"
      },
      {
        "key": "C",
        "text": "储能与系统平衡约束无关"
      },
      {
        "key": "D",
        "text": "储能可将电力平衡约束松弛为电量平衡约束"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "储能可将电力平衡约束松弛为电量平衡约束。"
  },
  {
    "id": "kp343",
    "category": "储能技术",
    "page": 72,
    "type": "single",
    "prompt": "抽水蓄能是指：",
    "options": [
      {
        "key": "A",
        "text": "以煤炭为唯一能量载体"
      },
      {
        "key": "B",
        "text": "不需要上下水库即可运行"
      },
      {
        "key": "C",
        "text": "以水为能量载体，通过抽水和放水实现能量存储和利用"
      },
      {
        "key": "D",
        "text": "低谷时放水发电，高峰时抽水储能"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "定义：以水为能量载体，通过抽水和放水实现能量存储和利用。低谷时抽水至上水库储能，高峰时放水发电。"
  },
  {
    "id": "kp344",
    "category": "储能技术",
    "page": 72,
    "type": "single",
    "prompt": "抽水蓄能的综合效率为：",
    "options": [
      {
        "key": "A",
        "text": "70-80%"
      },
      {
        "key": "B",
        "text": "90-100%"
      },
      {
        "key": "C",
        "text": "20-30%"
      },
      {
        "key": "D",
        "text": "40-50%"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "综合效率：70-80%"
  },
  {
    "id": "kp345",
    "category": "储能技术",
    "page": 72,
    "type": "single",
    "prompt": "抽水蓄能在储能技术中的地位是：",
    "options": [
      {
        "key": "A",
        "text": "目前技术最成熟、应用最广泛的大规模储能技术，在储能领域占据主导地位"
      },
      {
        "key": "B",
        "text": "尚未形成工程应用"
      },
      {
        "key": "C",
        "text": "仅适用于小型便携设备"
      },
      {
        "key": "D",
        "text": "已被全部储能技术淘汰"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "地位：目前技术最成熟、应用最广泛的大规模储能技术，在储能领域占据主导地位"
  },
  {
    "id": "kp346",
    "category": "储能技术",
    "page": 72,
    "type": "multiple",
    "prompt": "抽水蓄能的作用包括：",
    "options": [
      {
        "key": "A",
        "text": "黑启动"
      },
      {
        "key": "B",
        "text": "调频"
      },
      {
        "key": "C",
        "text": "提高燃煤消耗"
      },
      {
        "key": "D",
        "text": "削峰填谷"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "answerText": "五大作用：削峰填谷、调频、调压、事故备用、黑启动"
  },
  {
    "id": "kp347",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "single",
    "prompt": "物流是指：",
    "options": [
      {
        "key": "A",
        "text": "现代物流要关注需求计划、供应计划、库存计划衔接"
      },
      {
        "key": "B",
        "text": "供需适配、安全高效、内外联通、绿色智慧"
      },
      {
        "key": "C",
        "text": "根据实际需要，将运输、存储、装卸、搬运、包装、流通加工、配送、信息处理等基本功能有机结合，使物品从供应地向接收地进行实体流动的过程"
      },
      {
        "key": "D",
        "text": "根据实际不需要，将运输、存储、装卸、搬运、包装、流通加工、配送、信息处理等基本功能有机结合，使物品从供应地向接收地进行实体流动的过程"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "物流定义：根据实际需要，将运输、存储、装卸、搬运、包装、流通加工、配送、信息处理等基本功能有机结合，使物品从供应地向接收地进行实体流动的过程"
  },
  {
    "id": "kp348",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "multiple",
    "prompt": "各地区物流概念的对应关系正确的有：",
    "options": [
      {
        "key": "A",
        "text": "美国：企业物流"
      },
      {
        "key": "B",
        "text": "美国：无物流系统"
      },
      {
        "key": "C",
        "text": "日本：物流系统"
      },
      {
        "key": "D",
        "text": "欧盟：综合物流"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "美国：企业物流；日本：物流系统；欧盟：综合物流"
  },
  {
    "id": "kp349",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "multiple",
    "prompt": "现代物流的主要特征包括：",
    "options": [
      {
        "key": "A",
        "text": "供需适配"
      },
      {
        "key": "B",
        "text": "安全高效"
      },
      {
        "key": "C",
        "text": "绿色智慧"
      },
      {
        "key": "D",
        "text": "供需脱节"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "answerText": "十四五现代物流发展规划明确，现代物流发展发挥着先导性、基础性、战略性作用。现代物流的主要特征包括供需适配、安全高效、内外联通、绿色智慧"
  },
  {
    "id": "kp350",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "single",
    "prompt": "关于“供应链由成本效率和安全稳定并重”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "供需适配、安全高效、内外联通、绿色智慧"
      },
      {
        "key": "B",
        "text": "现代物流要关注需求计划、供应计划、库存计划衔接"
      },
      {
        "key": "C",
        "text": "层级扁平、调度集中、资源共享、内外协同"
      },
      {
        "key": "D",
        "text": "供应链由成本效率和安全稳定并重，向安全稳定优先、兼顾成本、效率转变（自主可控，风险评估，有序转移）"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "供应链由成本效率和安全稳定并重，向安全稳定优先、兼顾成本、效率转变（自主可控，风险评估，有序转移）"
  },
  {
    "id": "kp351",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "single",
    "prompt": "推动仓储区域化、物流市场化。供应链改革方向是：",
    "options": [
      {
        "key": "A",
        "text": "供需适配、安全高效、内外联通、绿色智慧"
      },
      {
        "key": "B",
        "text": "五星示范、五星、四星、三星、二星、一星"
      },
      {
        "key": "C",
        "text": "层级扁平、调度集中、资源共享、内外协同"
      },
      {
        "key": "D",
        "text": "层级扁平、调度分散、资源共享、内外协同"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "推动仓储区域化、物流市场化。供应链改革方向：层级扁平、调度集中、资源共享、内外协同"
  },
  {
    "id": "kp352",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "single",
    "prompt": "基础设施是：",
    "options": [
      {
        "key": "A",
        "text": "仓储网络"
      },
      {
        "key": "B",
        "text": "运力配送"
      },
      {
        "key": "C",
        "text": "物资储备"
      },
      {
        "key": "D",
        "text": "供需调配"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "基础设施：仓储网络"
  },
  {
    "id": "kp353",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "single",
    "prompt": "物质基础是：",
    "options": [
      {
        "key": "A",
        "text": "物资储备"
      },
      {
        "key": "B",
        "text": "仓储网络"
      },
      {
        "key": "C",
        "text": "供需调配"
      },
      {
        "key": "D",
        "text": "运力配送"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "物质基础：物资储备"
  },
  {
    "id": "kp354",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "single",
    "prompt": "核心引擎是：",
    "options": [
      {
        "key": "A",
        "text": "运力配送"
      },
      {
        "key": "B",
        "text": "物资储备"
      },
      {
        "key": "C",
        "text": "仓储网络"
      },
      {
        "key": "D",
        "text": "供需调配"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "核心引擎：供需调配"
  },
  {
    "id": "kp355",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "single",
    "prompt": "关键驱动是：",
    "options": [
      {
        "key": "A",
        "text": "物资储备"
      },
      {
        "key": "B",
        "text": "仓储网络"
      },
      {
        "key": "C",
        "text": "运力配送"
      },
      {
        "key": "D",
        "text": "供需调配"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "关键驱动：运力配送"
  },
  {
    "id": "kp356",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "single",
    "prompt": "新发力点是：",
    "options": [
      {
        "key": "A",
        "text": "逆向物资管理"
      },
      {
        "key": "B",
        "text": "物资储备"
      },
      {
        "key": "C",
        "text": "运力配送"
      },
      {
        "key": "D",
        "text": "供需调配"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "新发力点：逆向物资管理"
  },
  {
    "id": "kp357",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "single",
    "prompt": "关于“推行库存精益管理”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "推行库存精益管理，优化不同供应模式下库存控制策略，加强执行管控，源头降低公司库存水平，助力两金“压降”"
      },
      {
        "key": "B",
        "text": "现代物流要关注需求计划、供应计划、库存计划衔接"
      },
      {
        "key": "C",
        "text": "五星示范、五星、四星、三星、二星、一星"
      },
      {
        "key": "D",
        "text": "逆向物资管理"
      }
    ],
    "correct": [
      "A"
    ],
    "answerText": "推行库存精益管理，优化不同供应模式下库存控制策略，加强执行管控，源头降低公司库存水平，助力两金“压降”"
  },
  {
    "id": "kp358",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "single",
    "prompt": "关于“加强设备退役、再利用、处置等全过程管理”，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "五星示范、五星、四星、三星、二星、一星"
      },
      {
        "key": "B",
        "text": "现代物流要关注需求计划、供应计划、库存计划衔接"
      },
      {
        "key": "C",
        "text": "逆向物资管理"
      },
      {
        "key": "D",
        "text": "加强设备退役、再利用、处置等全过程管理，推动闲置物资、报废物资处置线上化，提升闲置物资再利用及报废物资处置效率、效益及规范水平"
      }
    ],
    "correct": [
      "D"
    ],
    "answerText": "加强设备退役、再利用、处置等全过程管理，推动闲置物资、报废物资处置线上化，提升闲置物资再利用及报废物资处置效率、效益及规范水平"
  },
  {
    "id": "kp359",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "single",
    "prompt": "供应链班组评价体系是：",
    "options": [
      {
        "key": "A",
        "text": "逆向物资管理"
      },
      {
        "key": "B",
        "text": "运力配送"
      },
      {
        "key": "C",
        "text": "五星示范、五星、四星、三星、二星、一星"
      },
      {
        "key": "D",
        "text": "现代物流要关注需求计划、供应计划、库存计划衔接"
      }
    ],
    "correct": [
      "C"
    ],
    "answerText": "供应链班组评价体系：五星示范、五星、四星、三星、二星、一星"
  },
  {
    "id": "kp360",
    "category": "供应链与现代物流",
    "page": 73,
    "type": "multiple",
    "prompt": "现代物流需要关注的计划衔接包括：",
    "options": [
      {
        "key": "A",
        "text": "需求计划"
      },
      {
        "key": "B",
        "text": "个人休假计划"
      },
      {
        "key": "C",
        "text": "供应计划"
      },
      {
        "key": "D",
        "text": "库存计划"
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "answerText": "现代物流要关注需求计划、供应计划、库存计划衔接。"
  }
];
