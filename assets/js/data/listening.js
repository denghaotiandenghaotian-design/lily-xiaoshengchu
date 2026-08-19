/* ===========================================================
   模块六数据源：英语听力训练（PEP 五六年级范围，不超纲）
   四种题型：听词辨音 / 听句选答 / 听对话选图 / 听短文判断
   共 16 份材料（每种 4 份），每份含朗读稿(audio/script)、题目(items)、答案、解析。
   单篇 80-120 词；语速建议 90-100 词/分（初学可放慢至 70）。
   朗读稿供家长/教师照读，或点击「播放录音」由网页 TTS 朗读。
   =========================================================== */
window.LISTEN_TYPES = ['听词辨音', '听句选答', '听对话选图', '听短文判断'];

window.LISTENING = [
  /* ================= 听词辨音（4 份） ================= */
  {
    id: 'LS-01', type: '听词辨音', title: '短元音 a /æ/ vs e /e/',
    grade: '5A', unit: 'PEP 五上 Unit 1', link: ['EN-5A-U01-01', 'EN-5A-U01-02'],
    speed: '约 80 词/分（可放慢至 65）',
    intro: '听录音，圈出你听到的单词。每词只读一遍。',
    items: [
      { audio: 'cap', q: '第1小题：你听到的是？', options: ['A. cap 帽子', 'B. cab 出租车'], answer: 'A', explain: 'cap 尾音是清辅音 /p/，cab 是浊辅音 /b/，注意嘴巴闭合感不同。' },
      { audio: 'bed', q: '第2小题：你听到的是？', options: ['A. bad 坏的', 'B. bed 床'], answer: 'B', explain: 'bed 发 /bed/，短元音 e 张口比 a 小；bad 发 /bæd/。' },
      { audio: 'map', q: '第3小题：你听到的是？', options: ['A. map 地图', 'B. mop 拖把'], answer: 'A', explain: 'map 中 a 发 /æ/，mop 中 o 发 /ɒ/，舌位一前一后。' },
      { audio: 'ten', q: '第4小题：你听到的是？', options: ['A. tan 晒黑', 'B. ten 十'], answer: 'B', explain: 'ten 发 /ten/，a 在 tan 中发 /æ/，e 在 ten 中发 /e/。' }
    ]
  },
  {
    id: 'LS-02', type: '听词辨音', title: '长元音 iː /iː/ vs 短元音 ɪ /ɪ/',
    grade: '5A', unit: 'PEP 五上 Unit 3', link: ['EN-5A-U03-01'],
    speed: '约 80 词/分',
    intro: '听录音，圈出你听到的单词。每词只读一遍。',
    items: [
      { audio: 'sheep', q: '第1小题：你听到的是？', options: ['A. sheep 绵羊', 'B. ship 轮船'], answer: 'A', explain: 'sheep 长元音 /iː/，ship 短元音 /ɪ/，声音长短不同。' },
      { audio: 'feet', q: '第2小题：你听到的是？', options: ['A. fit 适合', 'B. feet 脚'], answer: 'B', explain: 'feet 发 /fiːt/，fit 发 /fɪt/，注意长短。' },
      { audio: 'green', q: '第3小题：你听到的是？', options: ['A. green 绿色', 'B. grin 露齿笑'], answer: 'A', explain: 'green 长音 /iː/，grin 短音 /ɪ/。' },
      { audio: 'live', q: '第4小题：你听到的是？', options: ['A. leave 离开', 'B. live 居住'], answer: 'B', explain: 'live 短音 /lɪv/，leave 长音 /liːv/。' }
    ]
  },
  {
    id: 'LS-03', type: '听词辨音', title: '易混辅音 th /θ/ vs s /s/',
    grade: '5B', unit: 'PEP 五下 Unit 1', link: ['EN-5B-U01-01'],
    speed: '约 75 词/分（th 需放慢）',
    intro: '听录音，圈出你听到的单词。th 舌尖要轻触上齿。',
    items: [
      { audio: 'think', q: '第1小题：你听到的是？', options: ['A. think 想', 'B. sink 水槽'], answer: 'A', explain: 'think 开头是 /θ/（咬舌），sink 是 /s/（不咬舌）。' },
      { audio: 'mouth', q: '第2小题：你听到的是？', options: ['A. mouse 老鼠', 'B. mouth 嘴巴'], answer: 'B', explain: 'mouth 尾音 /θ/ 咬舌，mouse 尾音 /s/。' },
      { audio: 'three', q: '第3小题：你听到的是？', options: ['A. tree 树', 'B. three 三'], answer: 'B', explain: 'three 是 /θ/，tree 是 /tr/ 卷舌。' },
      { audio: 'south', q: '第4小题：你听到的是？', options: ['A. souse 腌', 'B. south 南方'], answer: 'B', explain: 'south 含 /θ/ 咬舌音，souse 是 /s/。' }
    ]
  },
  {
    id: 'LS-04', type: '听词辨音', title: '数字与序数词',
    grade: '6A', unit: 'PEP 六上 Unit 2', link: ['EN-6A-U02-01'],
    speed: '约 80 词/分',
    intro: '听录音，圈出你听到的数字或词。',
    items: [
      { audio: 'thirteen', q: '第1小题：你听到的是？', options: ['A. thirteen 13', 'B. thirty 30'], answer: 'A', explain: 'thirteen 重音在后，thirty 重音在前，注意尾音 /tiːn/ 与 /ti/。' },
      { audio: 'fourth', q: '第2小题：你听到的是？', options: ['A. forth 向前', 'B. fourth 第四'], answer: 'B', explain: 'fourth 是序数词，带 /θ/ 咬舌音。' },
      { audio: 'fifty', q: '第3小题：你听到的是？', options: ['A. fifteen 15', 'B. fifty 50'], answer: 'B', explain: 'fifty 重音在前、尾音 /ti/，fifteen 重音在后、尾音 /tiːn/。' },
      { audio: 'second', q: '第4小题：你听到的是？', options: ['A. second 第二', 'B. seven 七'], answer: 'A', explain: 'second 发 /ˈsekənd/，含鼻音 /nd/。' }
    ]
  },

  /* ================= 听句选答（4 份） ================= */
  {
    id: 'LS-05', type: '听句选答', title: '课程与星期问答',
    grade: '5A', unit: 'PEP 五上 Unit 2', link: ['EN-5A-U02-01', 'EN-5A-U02-02'],
    speed: '约 90 词/分',
    intro: '听句子，选出正确的答语。',
    items: [
      { audio: 'What do you have on Mondays?', q: '听句选答', options: ['A. I have maths and English.', 'B. I like apples.', 'C. It is Monday.'], answer: 'A', explain: '问星期一有什么课，应回答课程名称。' },
      { audio: 'Who is your English teacher?', q: '听句选答', options: ['A. I am twelve.', 'B. Miss Li.', 'C. In the classroom.'], answer: 'B', explain: 'who 问人，答语应说出人物。' },
      { audio: 'Do you like music?', q: '听句选答', options: ['A. Yes, I do.', 'B. No, I am not.', 'C. I like art.'], answer: 'A', explain: 'Do you…? 用 Yes/No + I do / I don\'t 回答。' }
    ]
  },
  {
    id: 'LS-06', type: '听句选答', title: '能力与请求',
    grade: '5B', unit: 'PEP 五下 Unit 4 / Unit 3', link: ['EN-5B-U04-01', 'EN-5B-U03-01'],
    speed: '约 90 词/分',
    intro: '听句子，选出正确的答语。',
    items: [
      { audio: 'Can you swim?', q: '听句选答', options: ['A. Yes, I can.', 'B. Yes, I do.', 'C. I like swimming.'], answer: 'A', explain: 'Can you…? 用 can / can\'t 回答。' },
      { audio: 'What can you do for the party?', q: '听句选答', options: ['A. I can sing.', 'B. I like singing.', 'C. I am a student.'], answer: 'A', explain: '问能为派对做什么，答语用 I can + 动词。' },
      { audio: 'Would you like some juice?', q: '听句选答', options: ['A. Yes, please.', 'B. I am thirsty.', 'C. It is juice.'], answer: 'A', explain: 'Would you like…? 接受用 Yes, please. 拒绝用 No, thanks.' }
    ]
  },
  {
    id: 'LS-07', type: '听句选答', title: '季节与天气',
    grade: '5B', unit: 'PEP 五下 Unit 2', link: ['EN-5B-U02-01'],
    speed: '约 90 词/分',
    intro: '听句子，选出正确的答语。',
    items: [
      { audio: 'Which season do you like best?', q: '听句选答', options: ['A. Spring.', 'B. It is warm.', 'C. I can swim.'], answer: 'A', explain: '问最喜欢哪个季节，直接答季节名。' },
      { audio: 'Why do you like summer?', q: '听句选答', options: ['A. Because I can eat ice cream.', 'B. It is summer.', 'C. I like it.'], answer: 'A', explain: 'Why 问原因，用 Because… 回答。' },
      { audio: 'What is the weather like today?', q: '听句选答', options: ['A. It is sunny and hot.', 'B. I like sunny days.', 'C. Today is Monday.'], answer: 'A', explain: '问天气怎样，答语描述天气。' }
    ]
  },
  {
    id: 'LS-08', type: '听句选答', title: '问路与方位',
    grade: '6A', unit: 'PEP 六上 Unit 1', link: ['EN-6A-U01-01'],
    speed: '约 90 词/分',
    intro: '听句子，选出正确的答语。',
    items: [
      { audio: 'Where is the museum shop?', q: '听句选答', options: ['A. It is near the door.', 'B. I go there by bus.', 'C. It is a shop.'], answer: 'A', explain: '问地点在哪，答语说明方位。' },
      { audio: 'How can I get to the park?', q: '听句选答', options: ['A. Turn left at the bookstore.', 'B. The park is big.', 'C. I go to the park.'], answer: 'A', explain: '问怎么到公园，答语给路线指引。' },
      { audio: 'Is there a cinema near here?', q: '听句选答', options: ['A. Yes, there is.', 'B. It is a cinema.', 'C. I see a film.'], answer: 'A', explain: 'Is there…? 用 Yes, there is. / No, there isn\'t. 回答。' }
    ]
  },

  /* ================= 听对话选图（4 份，用文字描述图片） ================= */
  {
    id: 'LS-09', type: '听对话选图', title: '购物场景',
    grade: '5B', unit: 'PEP 五下 Unit 6', link: ['EN-5B-U06-01'],
    speed: '约 90 词/分',
    intro: '听下面一段对话，根据描述选择正确答案。',
    audio: '— Can I help you? — Yes, I want a red dress. — Here you are. — How much is it? — It is fifty yuan. — OK, I will take it. Thank you!',
    items: [
      { q: '对话最可能发生的地方是？', options: ['A. 在服装店', 'B. 在学校', 'C. 在公园'], answer: 'A', explain: '出现了 dress、How much、take it，是服装购物场景。' },
      { q: '女孩想买的衣服是什么颜色？', options: ['A. 红色', 'B. 蓝色', 'C. 黄色'], answer: 'A', explain: '原文说 I want a red dress。' },
      { q: '这件衣服多少钱？', options: ['A. 40 元', 'B. 50 元', 'C. 60 元'], answer: 'B', explain: '原文 It is fifty yuan。' }
    ]
  },
  {
    id: 'LS-10', type: '听对话选图', title: '日常活动',
    grade: '5B', unit: 'PEP 五下 Unit 1', link: ['EN-5B-U01-01', 'EN-5B-U01-02'],
    speed: '约 90 词/分',
    intro: '听下面一段对话，根据描述选择正确答案。',
    audio: '— What do you do on the weekend? — I often clean my room and wash my clothes. Sometimes I cook with my mum. — That is nice! Do you watch TV? — No, I do not like TV.',
    items: [
      { q: '这个男孩周末经常做什么？', options: ['A. 看电视', 'B. 打扫房间、洗衣服', 'C. 踢足球'], answer: 'B', explain: '原文 I often clean my room and wash my clothes。' },
      { q: '他有时会做什么？', options: ['A. 和妈妈做饭', 'B. 看书', 'C. 去公园'], answer: 'A', explain: '原文 Sometimes I cook with my mum。' },
      { q: '他喜欢看电视吗？', options: ['A. 喜欢', 'B. 不喜欢', 'C. 没说'], answer: 'B', explain: '原文 No, I do not like TV。' }
    ]
  },
  {
    id: 'LS-11', type: '听对话选图', title: '食物与点餐',
    grade: '5A', unit: 'PEP 五上 Unit 3', link: ['EN-5A-U03-01'],
    speed: '约 85 词/分',
    intro: '听下面一段对话，根据描述选择正确答案。',
    audio: '— What would you like to eat? — I would like a sandwich and some salad. — What would you like to drink? — A cup of tea, please. — OK. Here you are.',
    items: [
      { q: '男孩想吃什么？', options: ['A. 三明治和沙拉', 'B. 汉堡和薯条', 'C. 面条'], answer: 'A', explain: '原文 I would like a sandwich and some salad。' },
      { q: '他想喝什么？', options: ['A. 牛奶', 'B. 茶', 'C. 果汁'], answer: 'B', explain: '原文 A cup of tea, please。' },
      { q: '这段对话可能在哪里？', options: ['A. 在餐厅点餐', 'B. 在教室', 'C. 在操场'], answer: 'A', explain: '出现 What would you like to eat / drink，是点餐场景。' }
    ]
  },
  {
    id: 'LS-12', type: '听对话选图', title: '学校设施',
    grade: '6A', unit: 'PEP 六上 Unit 1', link: ['EN-6A-U01-01'],
    speed: '约 90 词/分',
    intro: '听下面一段对话，根据描述选择正确答案。',
    audio: '— Where is the library? — It is behind the science museum. — Is it far? — No, it is near. You can go on foot. — Thank you!',
    items: [
      { q: '图书馆在哪里？', options: ['A. 在博物馆前面', 'B. 在博物馆后面', 'C. 在公园旁边'], answer: 'B', explain: '原文 It is behind the science museum。' },
      { q: '图书馆远不远？', options: ['A. 远', 'B. 不远', 'C. 不知道'], answer: 'B', explain: '原文 No, it is near。' },
      { q: '建议怎么去？', options: ['A. 坐公交', 'B. 走路', 'C. 骑车'], answer: 'B', explain: '原文 You can go on foot。' }
    ]
  },

  /* ================= 听短文判断（4 份） ================= */
  {
    id: 'LS-13', type: '听短文判断', title: '我的周末',
    grade: '6A', unit: 'PEP 六上 Unit 3', link: ['EN-6A-U03-02'],
    speed: '约 100 词/分',
    intro: '听短文，判断下列句子正(T)误(F)。',
    audio: 'My name is Tom. I had a busy weekend. On Saturday morning I did my homework. In the afternoon I played football with my friends. On Sunday I visited my grandparents. We ate delicious food together. I was tired but happy.',
    items: [
      { q: 'Tom 周六上午写了作业。', options: ['A. T', 'B. F'], answer: 'A', explain: '原文 On Saturday morning I did my homework。' },
      { q: 'Tom 周六下午看电视了。', options: ['A. T', 'B. F'], answer: 'B', explain: '原文说 played football，不是看电视。' },
      { q: 'Tom 周日去看了爷爷奶奶。', options: ['A. T', 'B. F'], answer: 'A', explain: '原文 On Sunday I visited my grandparents。' },
      { q: 'Tom 觉得很累但不开心。', options: ['A. T', 'B. F'], answer: 'B', explain: '原文 I was tired but happy，是开心的。' }
    ]
  },
  {
    id: 'LS-14', type: '听短文判断', title: 'My School',
    grade: '5B', unit: 'PEP 五下 Unit 1', link: ['EN-5B-U01-01'],
    speed: '约 100 词/分',
    intro: '听短文，判断下列句子正(T)误(F)。',
    audio: 'Welcome to my school. There are thirty classrooms. The library is on the second floor. We have a big playground. I often read books in the library. My favourite class is art. I draw pictures every week. I love my school.',
    items: [
      { q: '学校里有 30 间教室。', options: ['A. T', 'B. F'], answer: 'A', explain: '原文 There are thirty classrooms。' },
      { q: '图书馆在一楼。', options: ['A. T', 'B. F'], answer: 'B', explain: '原文说 on the second floor（二楼）。' },
      { q: '他最喜欢的课是美术。', options: ['A. T', 'B. F'], answer: 'A', explain: '原文 My favourite class is art。' },
      { q: '他每周都画画。', options: ['A. T', 'B. F'], answer: 'A', explain: '原文 I draw pictures every week。' }
    ]
  },
  {
    id: 'LS-15', type: '听短文判断', title: 'The Weather in Four Seasons',
    grade: '5B', unit: 'PEP 五下 Unit 2', link: ['EN-5B-U02-01'],
    speed: '约 100 词/分',
    intro: '听短文，判断下列句子正(T)误(F)。',
    audio: 'There are four seasons in a year. Spring is warm and windy. We can fly kites. Summer is hot. I can swim in the lake. Autumn is cool and golden. We pick apples. Winter is cold and white. I can make a snowman. I like them all.',
    items: [
      { q: '一年有四季。', options: ['A. T', 'B. F'], answer: 'A', explain: '原文 There are four seasons in a year。' },
      { q: '春天可以放风筝。', options: ['A. T', 'B. F'], answer: 'A', explain: '原文 Spring is warm and windy. We can fly kites。' },
      { q: '秋天去摘苹果。', options: ['A. T', 'B. F'], answer: 'A', explain: '原文 Autumn … We pick apples。' },
      { q: '冬天很热。', options: ['A. T', 'B. F'], answer: 'B', explain: '原文 Winter is cold and white，是冷的。' }
    ]
  },
  {
    id: 'LS-16', type: '听短文判断', title: 'A Healthy Life',
    grade: '6A', unit: 'PEP 六上 Unit 4', link: ['EN-6A-U04-01'],
    speed: '约 100 词/分',
    intro: '听短文，判断下列句子正(T)误(F)。',
    audio: 'I am Lucy. I have a healthy life. I get up early at six thirty. I eat an egg and drink milk for breakfast. I like vegetables and fruit. I do not eat too much sweet food. After school I play sports for one hour. I go to bed at nine. Good habits make me strong.',
    items: [
      { q: 'Lucy 早上 6:30 起床。', options: ['A. T', 'B. F'], answer: 'A', explain: '原文 I get up early at six thirty。' },
      { q: '她早餐吃鸡蛋喝牛奶。', options: ['A. T', 'B. F'], answer: 'A', explain: '原文 I eat an egg and drink milk for breakfast。' },
      { q: '她吃很多甜食。', options: ['A. T', 'B. F'], answer: 'B', explain: '原文 I do not eat too much sweet food。' },
      { q: '放学后她运动一小时。', options: ['A. T', 'B. F'], answer: 'A', explain: '原文 After school I play sports for one hour。' }
    ]
  }
];
