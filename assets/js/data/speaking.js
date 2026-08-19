/* ===========================================================
   模块五数据源：英语口语练习主题包（PEP 五六年级范围，不超纲）
   每个主题 = 4 个递进任务：朗读 → 句型替换 → 情景对话 → 自由表达
   =========================================================== */
window.SPEAK_RUBRIC = [
  { key: 'pron', name: '发音', desc: '单词读音准确，重音与语调自然（th/v/r 等音到位）' },
  { key: 'gram', name: '语法', desc: '时态、单复数、be 动词与人称一致' },
  { key: 'flu', name: '流利度', desc: '连贯少停顿，不逐字翻译，能自然接话' },
  { key: 'cont', name: '内容完整度', desc: '回答覆盖题目要点，句数达标并有细节' }
];

window.SPEAK_SCALE = {
  5: '很棒：几乎无错误，表达自然，还有拓展句',
  4: '良好：偶有小错误，不影响理解',
  3: '合格：能说清主要意思，错误较明显',
  2: '待提高：句子不完整，需要提示才能继续',
  1: '需重练：只能说出单词，无法成句'
};

window.SPEAKING = [
  {
    id: 'SP-01', title: '自我介绍 Self-introduction', level: '初级', mins: 12,
    unit: 'PEP 五上 Unit 1 / 毕业面试必考', link: ['EN-5A-U01-01', 'EN-5A-U01-02', 'EN-ZX-09'],
    goal: '30 秒内说清姓名、年级、外貌性格、爱好，并能自然结尾。',
    patterns: [
      ['Hello! My name is Lily.', '你好！我叫 Lily。'],
      ['I\'m twelve years old.', '我十二岁。'],
      ['I\'m a student of Grade Six.', '我是六年级学生。'],
      ['I\'m tall and thin. I have long hair.', '我又高又瘦，长头发。'],
      ['I\'m kind and hard-working.', '我很友善，也很勤奋。'],
      ['I like reading and swimming.', '我喜欢读书和游泳。'],
      ['My favourite subject is English.', '我最喜欢的科目是英语。'],
      ['Thank you! Nice to meet you.', '谢谢！很高兴认识你。']
    ],
    words: [['name', '名字'], ['grade', '年级'], ['favourite', '最喜爱的'], ['subject', '科目'], ['hobby', '爱好'],
      ['kind', '友善的'], ['hard-working', '勤奋的'], ['because', '因为']],
    dialog: [
      { who: 'T', en: 'Good morning. What\'s your name?', zh: '早上好。你叫什么名字？' },
      { who: 'S', en: 'Good morning. My name is Lily Deng.', zh: '早上好。我叫邓 Lily。' },
      { who: 'T', en: 'How old are you and which grade are you in?', zh: '你几岁了，读几年级？' },
      { who: 'S', en: 'I\'m twelve. I\'m in Grade Six.', zh: '我十二岁，读六年级。' },
      { who: 'T', en: 'What are your hobbies?', zh: '你有什么爱好？' },
      { who: 'S', en: 'I like reading and swimming. I often read stories on Sundays.', zh: '我喜欢读书和游泳，星期天常读故事书。' },
      { who: 'T', en: 'Thank you, Lily.', zh: '谢谢你，Lily。' },
      { who: 'S', en: 'Thank you! Nice to meet you.', zh: '谢谢！很高兴认识您。' }
    ],
    tasks: [
      { name: '① 朗读热身', mins: 3, goal: '把八个句型读顺，做到不停顿', text: 'Hello! My name is Lily. I\'m twelve years old. I\'m a student of Grade Six. I\'m tall and thin. I\'m kind and hard-working. I like reading and swimming. My favourite subject is English. Thank you!', steps: ['先听示范一遍', '跟读两遍', '独立读一遍并计时（目标 25-30 秒）'] },
      { name: '② 句型替换', mins: 3, goal: '换成自己的真实信息', text: 'My name is ____. I\'m ____ years old. I like ____ and ____. My favourite subject is ____.', steps: ['把横线换成自己的信息', '不看稿说三遍', '第三遍要加一句理由：…because it\'s interesting.'] },
      { name: '③ 情景对话', mins: 3, goal: '能接住老师追问', text: 'Q1: What\'s your name? Q2: How old are you? Q3: What are your hobbies? Q4: What\'s your favourite subject? Why?', steps: ['请家长扮演老师随机提问', '每题答 1-2 句，不要只答单词', '被问 Why 时用 because 接一句'] },
      { name: '④ 自由表达', mins: 3, goal: '连成 40 秒完整独白', text: '把前面的内容连起来说一段完整的自我介绍，结尾用 Thank you.', steps: ['一口气说完不停顿', '录音回听，圈出卡壳处', '再说一遍，把卡壳处补顺'] }
    ],
    pron: ['name /neɪm/ 的 a 读长音，不要读成「奶木」', 'thin 的 th 舌尖轻触上齿，不要读成 sin', 'twelve 的 v 咬下唇，不要读成 w', '句末 Thank you 语调下降，显得礼貌自然']
  },
  {
    id: 'SP-02', title: '学校生活 My School Life', level: '初级', mins: 12,
    unit: 'PEP 五上 Unit 2 / 五下 Unit 1', link: ['EN-5A-U02-01', 'EN-5B-U01-01', 'EN-5B-U01-02'],
    goal: '用一般现在时说清课程、时间与校园活动，注意第三人称单数。',
    patterns: [
      ['We have four classes in the morning.', '我们上午有四节课。'],
      ['I have Chinese, maths and English on Mondays.', '星期一我有语文、数学和英语课。'],
      ['My favourite class is PE, because it\'s fun.', '我最喜欢体育课，因为很有趣。'],
      ['Our English teacher is Miss Li. She is kind.', '我们的英语老师是李老师，她很和善。'],
      ['I often play basketball after school.', '放学后我常打篮球。'],
      ['We do morning exercises at 8:20.', '我们 8:20 做早操。']
    ],
    words: [['class', '课'], ['subject', '科目'], ['PE', '体育'], ['art', '美术'], ['music', '音乐'],
      ['playground', '操场'], ['library', '图书馆'], ['after school', '放学后']],
    dialog: [
      { who: 'A', en: 'What do you have on Wednesdays?', zh: '你星期三有什么课？' },
      { who: 'B', en: 'I have Chinese, maths, English and art.', zh: '我有语文、数学、英语和美术。' },
      { who: 'A', en: 'Which subject do you like best?', zh: '你最喜欢哪门课？' },
      { who: 'B', en: 'I like art best, because I can draw a lot of pictures.', zh: '我最喜欢美术，因为可以画很多画。' },
      { who: 'A', en: 'What do you do after school?', zh: '你放学后做什么？' },
      { who: 'B', en: 'I usually do my homework first, then I play ping-pong.', zh: '我通常先写作业，然后打乒乓球。' }
    ],
    tasks: [
      { name: '① 朗读热身', mins: 3, goal: '读准课程名与星期', text: 'On Mondays I have Chinese, maths, English and music. We have four classes in the morning and two in the afternoon. My favourite subject is PE.', steps: ['听示范', '跟读两遍', '注意 Mondays 词尾的 s 要发出来'] },
      { name: '② 句型替换', mins: 3, goal: '换星期和科目', text: 'On ____ I have ____, ____ and ____. My favourite subject is ____ because ____.', steps: ['按自己的课表说三个不同的星期', '每句都要带 because'] },
      { name: '③ 情景对话', mins: 3, goal: '与家长一问一答', text: 'Q1: What do you have on Fridays? Q2: Who is your English teacher? What\'s she like? Q3: What do you do after school?', steps: ['注意第 2 题要用 She is…（三单）', '每题至少两句'] },
      { name: '④ 自由表达', mins: 3, goal: '介绍一天的学校生活', text: 'Talk about your school day: 何时到校 → 上什么课 → 中午做什么 → 放学后做什么。', steps: ['用 first, then, after that 连接', '目标 6 句以上', '录音自评'] }
    ],
    pron: ['maths 结尾 ths 连读，别漏 s', 'library 三个音节 /ˈlaɪbrəri/', 'usually 中间是 /ʒ/ 音', '课程名列举时用升降调：Chinese↗, maths↗, and English↘']
  },
  {
    id: 'SP-03', title: '我的一天 My Day', level: '初级', mins: 12,
    unit: 'PEP 五下 Unit 1', link: ['EN-5B-U01-01', 'EN-5B-U01-02'],
    goal: '按时间顺序描述作息，正确使用 at / in 与三单形式。',
    patterns: [
      ['I get up at six thirty.', '我 6:30 起床。'],
      ['I have breakfast at seven.', '我 7 点吃早饭。'],
      ['I go to school at seven twenty.', '我 7:20 去上学。'],
      ['In the afternoon, I have three classes.', '下午我有三节课。'],
      ['I do my homework after dinner.', '晚饭后我做作业。'],
      ['My father usually watches TV in the evening.', '我爸爸晚上通常看电视。'],
      ['I go to bed at nine o\'clock.', '我 9 点上床睡觉。']
    ],
    words: [['get up', '起床'], ['breakfast', '早餐'], ['lunch', '午餐'], ['dinner', '晚餐'], ['homework', '作业'],
      ['evening', '晚上'], ['weekend', '周末'], ['usually', '通常']],
    dialog: [
      { who: 'A', en: 'When do you get up?', zh: '你什么时候起床？' },
      { who: 'B', en: 'I get up at six thirty. Then I have breakfast.', zh: '我 6:30 起床，然后吃早饭。' },
      { who: 'A', en: 'What do you do in the evening?', zh: '你晚上做什么？' },
      { who: 'B', en: 'I do my homework, and I read books before bed.', zh: '我做作业，睡前读书。' },
      { who: 'A', en: 'What about your mother?', zh: '你妈妈呢？' },
      { who: 'B', en: 'She often takes a walk after dinner.', zh: '她晚饭后常散步。' }
    ],
    tasks: [
      { name: '① 朗读热身', mins: 3, goal: '读准时间表达', text: 'I get up at six thirty. I have breakfast at seven. I go to school at seven twenty. I have four classes in the morning. I go to bed at nine.', steps: ['听示范', '跟读两遍', '注意时刻前用 at，上午/下午用 in the'] },
      { name: '② 句型替换', mins: 3, goal: '换成真实时间', text: 'I ____ at ____. Then I ____.', steps: ['按自己的作息说 5 句', '用 then / after that 连起来'] },
      { name: '③ 情景对话', mins: 3, goal: '练三单', text: 'Q1: When do you get up? Q2: What does your father do after dinner? Q3: What do you do on weekends?', steps: ['第 2 题动词一定加 s：watches / takes', '第 3 题至少说两件事'] },
      { name: '④ 自由表达', mins: 3, goal: '完整讲一天', text: 'Talk about your day from morning to night（6 句以上）。', steps: ['从 get up 讲到 go to bed', '中间加一句感受：I\'m a little tired, but I\'m happy.'] }
    ],
    pron: ['thirty /ˈθɜːti/ 别读成 dirty', 'breakfast 重音在第一个音节', 'usually /ˈjuːʒuəli/', '时间连读：at six thirty → /ət sɪks ˈθɜːti/']
  },
  {
    id: 'SP-04', title: '食物与点餐 Food & Ordering', level: '初级', mins: 12,
    unit: 'PEP 五上 Unit 3', link: ['EN-5A-U03-01'],
    goal: '会问会答 What would you like? 并能说出喜好与理由。',
    patterns: [
      ['What would you like to eat?', '你想吃什么？'],
      ['I\'d like a sandwich and some milk, please.', '我想要一个三明治和一些牛奶。'],
      ['What\'s your favourite food?', '你最喜欢的食物是什么？'],
      ['My favourite food is noodles. It\'s delicious.', '我最喜欢面条，很好吃。'],
      ['I don\'t like fish, because it smells strange.', '我不喜欢鱼，因为气味有点怪。'],
      ['Here you are. — Thank you.', '给你。——谢谢。']
    ],
    words: [['sandwich', '三明治'], ['noodles', '面条'], ['beef', '牛肉'], ['salad', '沙拉'], ['juice', '果汁'],
      ['delicious', '美味的'], ['healthy', '健康的'], ['sweet', '甜的']],
    dialog: [
      { who: 'A', en: 'Good evening. What would you like?', zh: '晚上好，您想要什么？' },
      { who: 'B', en: 'I\'d like some noodles and a salad, please.', zh: '我想要面条和一份沙拉。' },
      { who: 'A', en: 'What would you like to drink?', zh: '您想喝什么？' },
      { who: 'B', en: 'Apple juice, please. How much is it?', zh: '苹果汁，谢谢。多少钱？' },
      { who: 'A', en: 'Twenty-five yuan. Here you are.', zh: '二十五元。给您。' },
      { who: 'B', en: 'Thank you very much.', zh: '非常感谢。' }
    ],
    tasks: [
      { name: '① 朗读热身', mins: 3, goal: '读顺点餐句', text: 'What would you like to eat? I\'d like a sandwich and some milk, please. My favourite food is noodles. They are delicious.', steps: ['听示范', '跟读两遍', 'I\'d like 是 I would like 的缩写，读作 /aɪd/'] },
      { name: '② 句型替换', mins: 3, goal: '换食物与饮料', text: 'I\'d like ____ and ____, please. My favourite food is ____, because it\'s ____.', steps: ['换三组不同食物', '注意可数加 a/an，不可数用 some'] },
      { name: '③ 情景对话', mins: 4, goal: '模拟餐厅点餐', text: '家长当服务员，你当顾客，完成一次完整点餐（问候→点餐→饮料→付钱→道谢）。', steps: ['全程用英语', '至少 6 个回合', '记得用 please 和 thank you'] },
      { name: '④ 自由表达', mins: 2, goal: '说健康饮食', text: 'Talk about your favourite food and healthy eating（4 句以上）。', steps: ['说一种爱吃的和一种不爱吃的', '各加一个理由'] }
    ],
    pron: ['would like 连读成 /wʊd laɪk/', 'juice /dʒuːs/ 别读成 「朱斯」', 'delicious 重音在第二音节 /dɪˈlɪʃəs/', '礼貌句 please 语调要下降柔和']
  },
  {
    id: 'SP-05', title: '天气与季节 Weather & Seasons', level: '中级', mins: 12,
    unit: 'PEP 五下 Unit 2', link: ['EN-5B-U02-01'],
    goal: '描述天气、说出最喜欢的季节并给出两条理由。',
    patterns: [
      ['What\'s the weather like today?', '今天天气怎么样？'],
      ['It\'s sunny and warm.', '天气晴朗而温暖。'],
      ['Which season do you like best?', '你最喜欢哪个季节？'],
      ['I like autumn best, because it\'s cool and I can go hiking.', '我最喜欢秋天，因为凉爽，还能去远足。'],
      ['In summer, I can swim in the river.', '夏天我可以在河里游泳。'],
      ['It often rains in Taizhou in June.', '台州六月常下雨。']
    ],
    words: [['sunny', '晴朗的'], ['rainy', '下雨的'], ['windy', '有风的'], ['cool', '凉爽的'], ['hot', '炎热的'],
      ['season', '季节'], ['go hiking', '去远足'], ['make a snowman', '堆雪人']],
    dialog: [
      { who: 'A', en: 'What\'s the weather like in spring in Taizhou?', zh: '台州春天天气怎么样？' },
      { who: 'B', en: 'It\'s warm and rainy. Everything turns green.', zh: '温暖多雨，万物变绿。' },
      { who: 'A', en: 'Which season do you like best?', zh: '你最喜欢哪个季节？' },
      { who: 'B', en: 'I like autumn best. It\'s cool, and I can fly kites with my friends.', zh: '我最喜欢秋天，凉爽，还能和朋友放风筝。' },
      { who: 'A', en: 'Do you like summer?', zh: '你喜欢夏天吗？' },
      { who: 'B', en: 'A little. It\'s too hot, but I can eat ice cream.', zh: '有一点。太热了，但可以吃冰淇淋。' }
    ],
    tasks: [
      { name: '① 朗读热身', mins: 3, goal: '读准天气形容词', text: 'What\'s the weather like today? It\'s sunny and warm. I like autumn best, because it\'s cool and I can go hiking with my family.', steps: ['听示范', '跟读两遍', 'weather /ˈweðə/ 的 th 是浊音'] },
      { name: '② 句型替换', mins: 3, goal: '四季各说一句', text: 'In ____, it\'s ____. I can ____.', steps: ['春夏秋冬各说一句', '每句都要有能做的活动'] },
      { name: '③ 情景对话', mins: 3, goal: '天气问答', text: 'Q1: What\'s the weather like today? Q2: Which season do you like best? Why? Q3: What can you do in winter?', steps: ['第 2 题给两条理由，用 and 连接', '注意 because 后面是完整句子'] },
      { name: '④ 自由表达', mins: 3, goal: '介绍家乡四季', text: 'Talk about the four seasons in your hometown（5 句以上）。', steps: ['每季一句', '最后一句说最喜欢哪个季节'] }
    ],
    pron: ['weather 与 whether 同音，th 浊化', 'autumn 中的 n 不发音 /ˈɔːtəm/', 'because /bɪˈkɒz/ 重音在后', '并列形容词间稍作停顿：sunny↗ and warm↘']
  },
  {
    id: 'SP-06', title: '问路与地点 Asking the Way', level: '中级', mins: 13,
    unit: 'PEP 六上 Unit 1-2', link: ['EN-6A-U01-01', 'EN-6A-U02-01'],
    goal: '能问路、能指路，说清方位与交通方式。',
    patterns: [
      ['Excuse me, where is the bookstore?', '打扰一下，书店在哪里？'],
      ['It\'s near the hospital.', '它在医院附近。'],
      ['Go straight, then turn left at the traffic light.', '直走，然后在交通灯处左转。'],
      ['How can I get to the science museum?', '我怎么去科学博物馆？'],
      ['You can take the No. 5 bus.', '你可以坐 5 路公交车。'],
      ['It\'s about ten minutes\' walk.', '大约走十分钟。']
    ],
    words: [['bookstore', '书店'], ['hospital', '医院'], ['post office', '邮局'], ['cinema', '电影院'], ['crossing', '人行横道'],
      ['turn left', '左转'], ['go straight', '直走'], ['next to', '紧邻']],
    dialog: [
      { who: 'A', en: 'Excuse me, how can I get to the post office?', zh: '打扰一下，请问邮局怎么走？' },
      { who: 'B', en: 'Go straight for two minutes, then turn right at the crossing.', zh: '直走两分钟，然后在人行横道处右转。' },
      { who: 'A', en: 'Is it far from here?', zh: '离这儿远吗？' },
      { who: 'B', en: 'No, it\'s next to the bookstore. You can walk there.', zh: '不远，它紧邻书店，走过去就行。' },
      { who: 'A', en: 'Thank you so much!', zh: '太感谢了！' },
      { who: 'B', en: 'You\'re welcome.', zh: '不客气。' }
    ],
    tasks: [
      { name: '① 朗读热身', mins: 3, goal: '读顺指路句', text: 'Excuse me, where is the cinema? Go straight, then turn left at the traffic light. It\'s next to the bookstore. You can take the No. 12 bus.', steps: ['听示范', '跟读两遍', 'Excuse me 连读 /ɪkˈskjuːz mi/'] },
      { name: '② 句型替换', mins: 3, goal: '换地点与方向', text: 'Where is the ____? — Go straight and turn ____ at the ____. It\'s ____ the ____.', steps: ['换三个不同地点', '方位词至少用到 near / next to / behind'] },
      { name: '③ 情景对话', mins: 4, goal: '画地图对练', text: '在纸上画一张简易街区图（学校、医院、书店、公园），家长随机问路，你指路。', steps: ['先问 Excuse me', '指路给出两步以上', '结尾说 You\'re welcome'] },
      { name: '④ 自由表达', mins: 3, goal: '介绍上学路线', text: 'How do you go to school? Describe your way（5 句以上）。', steps: ['交通方式 + 经过哪些地方 + 用时', '用 first, then, finally'] }
    ],
    pron: ['Excuse me 的 x 读 /ks/', 'straight /streɪt/ 三个辅音连读要清晰', 'museum 重音在第二音节 /mjuːˈziːəm/', '指路时每个指令后短暂停顿，便于对方听清']
  },
  {
    id: 'SP-07', title: '周末计划 Weekend Plan', level: '中级', mins: 13,
    unit: 'PEP 六上 Unit 3', link: ['EN-6A-U03-01', 'EN-ZX-06'],
    goal: '用 be going to 说计划，能回答 when / where / what / who。',
    patterns: [
      ['What are you going to do this weekend?', '这个周末你打算做什么？'],
      ['I\'m going to visit my grandparents.', '我打算去看外祖父母。'],
      ['We are going to take a trip to Hangzhou.', '我们打算去杭州旅行。'],
      ['I\'m going to the bookstore tomorrow morning.', '我明天上午要去书店。'],
      ['Are you going to play football? — Yes, I am.', '你打算打足球吗？——是的。'],
      ['It\'s going to be a busy weekend.', '这将是个忙碌的周末。']
    ],
    words: [['this weekend', '这个周末'], ['tomorrow', '明天'], ['next week', '下周'], ['visit', '拜访'], ['take a trip', '去旅行'],
      ['buy a gift', '买礼物'], ['go swimming', '去游泳'], ['together', '一起']],
    dialog: [
      { who: 'A', en: 'What are you going to do this Saturday?', zh: '这周六你打算做什么？' },
      { who: 'B', en: 'I\'m going to finish my homework in the morning.', zh: '上午我打算写完作业。' },
      { who: 'A', en: 'And in the afternoon?', zh: '下午呢？' },
      { who: 'B', en: 'I\'m going to the park with my cousin. We are going to fly kites.', zh: '我要和表弟去公园，我们打算放风筝。' },
      { who: 'A', en: 'Sounds great! Are you going to read books on Sunday?', zh: '听起来不错！周日你打算读书吗？' },
      { who: 'B', en: 'Yes, I am. I\'m going to read an English story book.', zh: '是的，我打算读一本英语故事书。' }
    ],
    tasks: [
      { name: '① 朗读热身', mins: 3, goal: '把 be going to 读成一个整体', text: 'What are you going to do this weekend? I\'m going to visit my grandparents. We are going to take a trip to Hangzhou. It\'s going to be fun.', steps: ['听示范', '跟读两遍', 'going to 口语常连读为 /ˈɡəʊɪŋtə/'] },
      { name: '② 句型替换', mins: 3, goal: '换时间与活动', text: 'I\'m going to ____ ____ (时间). Then I\'m going to ____.', steps: ['说出周六上午/下午/晚上三个计划', '注意 am / is / are 不能漏'] },
      { name: '③ 情景对话', mins: 4, goal: '互相问计划', text: 'Q1: What are you going to do tomorrow? Q2: Where are you going? Q3: Who are you going with? Q4: When are you going?', steps: ['四个疑问词各答一句', '答完主动反问一句 What about you?'] },
      { name: '④ 自由表达', mins: 3, goal: '说暑假计划', text: 'Talk about your summer holiday plan（6 句以上，全部用 be going to）。', steps: ['至少 4 项活动', '结尾说期待：I think it will be great.'] }
    ],
    pron: ['going to 连读，别一个词一个词蹦', 'grandparents 重音在第一音节', 'weekend 两个音节都清楚 /ˈwiːkend/', '疑问句用升调，陈述句用降调']
  },
  {
    id: 'SP-08', title: '看图说话与话题问答 Picture Talk', level: '中级', mins: 15,
    unit: '毕业口语面试综合', link: ['EN-ZX-09', 'EN-6B-U02-01', 'EN-6B-U01-01'],
    goal: '面对一幅图或一个话题，能有条理地说 6 句以上。',
    patterns: [
      ['In the picture, I can see a park.', '图中我看到一个公园。'],
      ['There are some children playing football.', '有些孩子在踢足球。'],
      ['A girl is reading under the tree.', '一个女孩在树下读书。'],
      ['The weather is sunny and everyone looks happy.', '天气晴朗，每个人看起来都很开心。'],
      ['Last weekend, I went to the park with my family.', '上周末我和家人去了公园。'],
      ['I think spending time outside is good for us.', '我觉得户外活动对我们有好处。']
    ],
    words: [['in the picture', '在图中'], ['there are', '有（复数）'], ['under the tree', '在树下'], ['look happy', '看起来开心'],
      ['play football', '踢足球'], ['fly a kite', '放风筝'], ['take photos', '拍照'], ['I think', '我认为']],
    dialog: [
      { who: 'T', en: 'Look at the picture. What can you see?', zh: '看这幅图，你看到了什么？' },
      { who: 'S', en: 'I can see a park. There are many people in it.', zh: '我看到一个公园，里面有很多人。' },
      { who: 'T', en: 'What are the children doing?', zh: '孩子们在做什么？' },
      { who: 'S', en: 'Some boys are playing football, and a girl is flying a kite.', zh: '一些男孩在踢足球，一个女孩在放风筝。' },
      { who: 'T', en: 'Do you like going to the park? Why?', zh: '你喜欢去公园吗？为什么？' },
      { who: 'S', en: 'Yes, I do. Because I can play with my friends and get fresh air.', zh: '喜欢，因为可以和朋友玩，还能呼吸新鲜空气。' }
    ],
    tasks: [
      { name: '① 朗读热身', mins: 3, goal: '掌握看图三句式', text: 'In the picture, I can see a park. There are some children playing football. A girl is reading under the tree. The weather is sunny.', steps: ['听示范', '跟读两遍', '现在进行时 be + doing 别漏 be'] },
      { name: '② 句型替换', mins: 3, goal: '换场景（教室/家庭/超市）', text: 'In the picture, I can see ____. There are ____. A ____ is ____ing.', steps: ['任选一幅家里的照片描述', '至少用两次现在进行时'] },
      { name: '③ 情景对话', mins: 4, goal: '看图＋追问', text: 'Q1: What can you see? Q2: What are they doing? Q3: How\'s the weather? Q4: Do you like it? Why?', steps: ['先总说，再分说，最后表态', '第 4 题必须给理由'] },
      { name: '④ 自由表达', mins: 5, goal: '完整看图说话', text: '按「总—分—感受」说满 6 句：图中是什么地方 → 有哪些人/物 → 他们在做什么 → 天气如何 → 你的感受/相关经历。', steps: ['计时 1 分钟内说完', '录音回听，检查 be 动词与三单', '第二遍尝试加入一句过去式经历'] }
    ],
    pron: ['picture /ˈpɪktʃə/ 的 ct 别漏', 'children 不是 childrens', 'are playing 连读，重音在实义动词', '整体节奏：一句一停，别越说越快']
  }
];
