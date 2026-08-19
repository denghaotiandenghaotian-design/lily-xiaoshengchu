/* ===========================================================
   模考真题数据源 exams.js
   - 模拟题 10 套：数学 4 / 语文 3 / 英语 3
   - 真题 5 套（台州地区小升初代表性汇编）：数学 2 / 语文 2 / 英语 1
   说明：真题卷为依据台州地区小升初近年公开题型与难度规律整理的
   「代表性汇编卷」，用于模拟训练，非官方原卷；请以本地真卷/校考为准。
   题型：choice(选择) cloze(完形) 为客观题（自动判分）；
        fill(填空) calc(计算) solve(应用) read(阅读) write(写作) 为主观题（对照解析自评）
   =========================================================== */

window.EXAM_KINDS = ['模拟', '真题'];

window.EXAMS = [

  /* ===================== 数学模拟（一）数与代数 ===================== */
  {
    id: 'MOCK-MA-01', kind: '模拟', subject: '数学', title: '数学模拟（一）· 数与代数',
    duration: 90, totalScore: 100, focus: '分数·小数·百分数·比例·方程',
    parts: [
      { name: '一、选择题（每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '小数化分数', stem: '0.375 化成分数是（ ）。', options: ['A. 3/8', 'B. 3/5', 'C. 5/8', 'D. 7/8'], answer: 'A', explain: '0.375 = 375/1000 = 3/8。' },
        { no: 2, type: 'choice', score: 4, focus: '小数比较', stem: '下面各数中，最小的是（ ）。', options: ['A. 0.66', 'B. 2/3', 'C. 0.6', 'D. 0.67'], answer: 'C', explain: '2/3≈0.667，0.6＜0.66＜0.667＜0.67，最小是 0.6。' },
        { no: 3, type: 'choice', score: 4, focus: '倒数', stem: '一个数除以 1/4，等于这个数（ ）。', options: ['A. 乘 4', 'B. 乘 1/4', 'C. 加 4', 'D. 减 1/4'], answer: 'A', explain: '除以一个分数等于乘它的倒数：÷1/4 = ×4。' },
        { no: 4, type: 'choice', score: 4, focus: '分数乘法', stem: '甲数是 24，乙数是甲的 3/4，乙数是（ ）。', options: ['A. 18', 'B. 20', 'C. 16', 'D. 32'], answer: 'A', explain: '24 × 3/4 = 18。' },
        { no: 5, type: 'choice', score: 4, focus: '正反比例', stem: '下面成反比例关系的是（ ）。', options: ['A. 速度一定，路程与时间', 'B. 路程一定，速度与时间', 'C. 单价一定，总价与数量', 'D. 正方形边长与面积'], answer: 'B', explain: '乘积一定才成反比例：路程=速度×时间，路程一定时速度与时间乘积不变，成反比例。' }
      ]},
      { name: '二、填空题（每题 4 分）', questions: [
        { no: 6, type: 'fill', score: 4, focus: '百分数与折扣', stem: '3/4 =（ ）% =（ ）折。', answer: '75；七五', explain: '3/4=0.75=75%=七五折。' },
        { no: 7, type: 'fill', score: 4, focus: '单位换算', stem: '0.8 吨 =（ ）千克。', answer: '800', explain: '1 吨=1000 千克，0.8×1000=800。' },
        { no: 8, type: 'fill', score: 4, focus: '分数意义', stem: '把 3 米长的绳子平均分成 5 段，每段长（ ）米，每段占全长的（ ）。', answer: '3/5（或0.6）；1/5', explain: '每段长 3÷5=3/5 米；把全长看作单位“1”，1÷5=1/5。' },
        { no: 9, type: 'fill', score: 4, focus: '数的组成', stem: '一个数由 5 个亿、3 个千万、4 个千组成，写作（ ），省略亿位后面的尾数约是（ ）亿。', answer: '530004000；5', explain: '5亿+3千万+4千=530004000；千万位是3，四舍五入约5亿。' },
        { no: 10, type: 'fill', score: 4, focus: '圆柱体积', stem: '圆柱底面半径 2cm、高 5cm，体积约是（ ）cm³（π取3.14）。', answer: '62.8（或20π）', explain: 'V=πr²h=3.14×4×5=62.8。' }
      ]},
      { name: '三、计算题（每题 5 分）', questions: [
        { no: 11, type: 'calc', score: 5, focus: '简便运算', stem: '计算：3.6×2.5 + 6.4×2.5', answer: '25', explain: '提取公因数：2.5×(3.6+6.4)=2.5×10=25。' },
        { no: 12, type: 'calc', score: 5, focus: '分数加减', stem: '计算：7/8 - 3/5 + 1/4', answer: '21/40', explain: '通分：35/40 - 24/40 + 10/40 = 21/40。' },
        { no: 13, type: 'calc', score: 5, focus: '解方程', stem: '解方程：2x - 7 = 11', answer: 'x = 9', explain: '2x = 18，x = 9。' }
      ]},
      { name: '四、应用题（每题 8 分）', questions: [
        { no: 14, type: 'solve', score: 8, focus: '相遇问题', stem: '甲、乙两地相距 240km，客车每小时行 60km，货车每小时行 40km，两车同时从两地相向而行，几小时相遇？', answer: '2.4 小时', explain: '速度和 60+40=100km/h，240÷100=2.4 小时。' },
        { no: 15, type: 'solve', score: 8, focus: '工程问题', stem: '一项工程，甲单独做 10 天完成，乙单独做 15 天完成，两人合作几天完成？', answer: '6 天', explain: '效率和 1/10+1/15=1/6，合作 1÷(1/6)=6 天。' },
        { no: 16, type: 'solve', score: 8, focus: '折扣与涨价', stem: '一件商品原价 200 元，先打八折，再涨价 10%，现价是多少元？', answer: '176 元', explain: '八折后 200×0.8=160 元；再涨 10%：160×1.1=176 元。' }
      ]}
    ]
  },

  /* ===================== 数学模拟（二）分数·百分数·比例 ===================== */
  {
    id: 'MOCK-MA-02', kind: '模拟', subject: '数学', title: '数学模拟（二）· 分数·百分数·比例',
    duration: 90, totalScore: 100, focus: '百分数·比·折扣·利润率',
    parts: [
      { name: '一、选择题（每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '含糖率', stem: '把 20 克糖放入 80 克水中，含糖率是（ ）。', options: ['A. 20%', 'B. 25%', 'C. 80%', 'D. 16.7%'], answer: 'A', explain: '含糖率=糖÷(糖+水)=20÷100=20%。' },
        { no: 2, type: 'choice', score: 4, focus: '比与百分数', stem: '甲:乙=3:4，甲是乙的（ ）。', options: ['A. 75%', 'B. 133%', 'C. 25%', 'D. 43%'], answer: 'A', explain: '甲÷乙=3÷4=0.75=75%。' },
        { no: 3, type: 'choice', score: 4, focus: '已知现求原', stem: '一个数增加 20% 后是 120，原数是（ ）。', options: ['A. 96', 'B. 100', 'C. 144', 'D. 24'], answer: 'B', explain: '原数×1.2=120，原数=120÷1.2=100。' },
        { no: 4, type: 'choice', score: 4, focus: '化简比', stem: '下面比可以化简的是（ ）。', options: ['A. 2:3', 'B. 0.5:0.25', 'C. 1:1', 'D. 4:5'], answer: 'B', explain: '0.5:0.25=50:25=2:1，可化简。' },
        { no: 5, type: 'choice', score: 4, focus: '分数乘法', stem: '40 的 3/5 是（ ）。', options: ['A. 24', 'B. 20', 'C. 30', 'D. 16'], answer: 'A', explain: '40×3/5=24。' }
      ]},
      { name: '二、填空题（每题 4 分）', questions: [
        { no: 6, type: 'fill', score: 4, focus: '小数百分数互化', stem: '0.45 =（ ）% =（ ）/20。', answer: '45；9', explain: '0.45=45%，0.45×20=9，即 9/20。' },
        { no: 7, type: 'fill', score: 4, focus: '化简比', stem: '某班男生 22 人、女生 18 人，男生人数:女生人数 =（ ）:（ ）。', answer: '11；9', explain: '22:18 同除以 2 得 11:9。' },
        { no: 8, type: 'fill', score: 4, focus: '折扣', stem: '打八五折就是按原价的（ ）% 出售。', answer: '85', explain: '八五折=85%。' },
        { no: 9, type: 'fill', score: 4, focus: '利润率', stem: '一件衣服进价 80 元，售价 100 元，利润率约是（ ）%。', answer: '25', explain: '利润率=(售价-进价)÷进价=(100-80)÷80=25%。' },
        { no: 10, type: 'fill', score: 4, focus: '比的基本性质', stem: '3/4 : 1/2 =（ ）: 1。', answer: '1.5（或 3:2）', explain: '(3/4)÷(1/2)=3/2=1.5，即 1.5:1。' }
      ]},
      { name: '三、计算与解方程（每题 5 分）', questions: [
        { no: 11, type: 'calc', score: 5, focus: '分数加法', stem: '计算：1/2 + 1/3', answer: '5/6', explain: '通分：3/6+2/6=5/6。' },
        { no: 12, type: 'calc', score: 5, focus: '化简比', stem: '化简比：0.36 : 0.6', answer: '3:5', explain: '同乘100得36:60，再同除以12得3:5。' },
        { no: 13, type: 'calc', score: 5, focus: '解方程', stem: '解方程：x + 1/4 x = 20', answer: 'x = 16', explain: '5/4 x = 20，x = 20×4/5 = 16。' }
      ]},
      { name: '四、应用题（每题 8 分）', questions: [
        { no: 14, type: 'solve', score: 8, focus: '百分数应用', stem: '修一条路，已经修了 60%，还剩 240 米没有修。这条路全长多少米？', answer: '600 米', explain: '还剩 40% 对应 240 米，全长=240÷40%=600 米。' },
        { no: 15, type: 'solve', score: 8, focus: '折扣应用', stem: '小明买一本书打七五折后比原价省了 12 元，这本书原价多少元？', answer: '48 元', explain: '省下 25% 对应 12 元，原价=12÷(1-0.75)=12÷0.25=48 元。' }
      ]}
    ]
  },

  /* ===================== 数学模拟（三）几何·图形与测量 ===================== */
  {
    id: 'MOCK-MA-03', kind: '模拟', subject: '数学', title: '数学模拟（三）· 几何·图形与测量',
    duration: 90, totalScore: 100, focus: '圆·长方体·圆柱·比例尺',
    parts: [
      { name: '一、选择题（每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '圆周长', stem: '圆的周长公式是 C =（ ）。', options: ['A. πd', 'B. 2πr²', 'C. πr', 'D. πd²'], answer: 'A', explain: '圆周长 C=πd=2πr。' },
        { no: 2, type: 'choice', score: 4, focus: '圆面积', stem: '半径 3cm 的圆，面积是（ ）。', options: ['A. 9π cm²', 'B. 6π cm²', 'C. 3π cm²', 'D. 18π cm²'], answer: 'A', explain: 'S=πr²=π×9=9π cm²。' },
        { no: 3, type: 'choice', score: 4, focus: '正方体表面积', stem: '正方体棱长 2cm，表面积是（ ）cm²。', options: ['A. 24', 'B. 8', 'C. 48', 'D. 12'], answer: 'A', explain: '一个面 2×2=4，6 个面共 24。' },
        { no: 4, type: 'choice', score: 4, focus: '三角形面积', stem: '三角形面积 =（ ）。', options: ['A. 底×高', 'B. 底×高÷2', 'C. (底+高)×2', 'D. 底×2'], answer: 'B', explain: '三角形面积=底×高÷2。' },
        { no: 5, type: 'choice', score: 4, focus: '平行四边形面积', stem: '平行四边形底 5cm、高 4cm，面积是（ ）cm²。', options: ['A. 20', 'B. 9', 'C. 10', 'D. 18'], answer: 'A', explain: '面积=底×高=5×4=20。' }
      ]},
      { name: '二、填空题（每题 4 分）', questions: [
        { no: 6, type: 'fill', score: 4, focus: '长方形周长面积', stem: '长方形长 8cm、宽 5cm，周长（ ）cm，面积（ ）cm²。', answer: '26；40', explain: '周长=2×(8+5)=26；面积=8×5=40。' },
        { no: 7, type: 'fill', score: 4, focus: '圆面积变化', stem: '圆的半径扩大 2 倍，面积扩大（ ）倍。', answer: '4', explain: '面积与半径平方成正比，2²=4。' },
        { no: 8, type: 'fill', score: 4, focus: '圆柱侧面积', stem: '圆柱侧面积 = 底面周长 ×（ ）。', answer: '高', explain: '侧面积=底面周长×高。' },
        { no: 9, type: 'fill', score: 4, focus: '比例尺', stem: '在比例尺 1:2000 的图上，一条路长 5cm，实际长（ ）m。', answer: '100', explain: '5×2000=10000cm=100m。' },
        { no: 10, type: 'fill', score: 4, focus: '圆锥体积', stem: '圆锥体积 = 1/3 × 底面积 ×（ ）。', answer: '高', explain: 'V锥=1/3×底面积×高。' }
      ]},
      { name: '三、计算与操作（每题 6 分）', questions: [
        { no: 11, type: 'calc', score: 6, focus: '梯形面积', stem: '梯形上底 4cm、下底 6cm、高 5cm，面积是多少？', answer: '25 cm²', explain: '(4+6)×5÷2=25。' },
        { no: 12, type: 'calc', score: 6, focus: '半圆周长', stem: '半圆半径 4cm，半圆周长是多少（π取3.14）？', answer: '20.56 cm（或4π+8）', explain: '半圆周长=半圆弧+直径=πr+2r=4π+8≈20.56。' },
        { no: 13, type: 'calc', score: 6, focus: '长方体', stem: '长方体长 5cm、宽 4cm、高 3cm，体积和表面积各是多少？', answer: '体积 60cm³，表面积 94cm²', explain: '体积=5×4×3=60；表面积=2×(20+15+12)=94。' }
      ]},
      { name: '四、应用题（每题 9 分）', questions: [
        { no: 14, type: 'solve', score: 9, focus: '圆周长', stem: '圆形花坛半径 5m，小明绕花坛走一圈，大约走了多少米（π取3.14）？', answer: '31.4 m', explain: 'C=2πr=2×3.14×5=31.4 米。' },
        { no: 15, type: 'solve', score: 9, focus: '铺砖问题', stem: '用边长 2dm 的方砖铺一间 60m² 的房间地面，需要多少块砖？', answer: '1500 块', explain: '60m²=6000dm²，每块砖 2×2=4dm²，6000÷4=1500 块。' }
      ]}
    ]
  },

  /* ===================== 数学模拟（四）应用题综合 ===================== */
  {
    id: 'MOCK-MA-04', kind: '模拟', subject: '数学', title: '数学模拟（四）· 应用题综合',
    duration: 90, totalScore: 100, focus: '行程·工程·浓度·利润·植树·比例',
    parts: [
      { name: '一、选择题（每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '相遇问题', stem: '甲、乙相距 300km，甲速 50km/h、乙速 70km/h 相向而行，相遇需（ ）小时。', options: ['A. 2', 'B. 2.5', 'C. 3', 'D. 6'], answer: 'B', explain: '300÷(50+70)=300÷120=2.5 小时。' },
        { no: 2, type: 'choice', score: 4, focus: '追及问题', stem: '甲先走 2 小时（速度 5km/h），乙以 15km/h 去追，需要（ ）小时追上。', options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], answer: 'A', explain: '追及路程=2×5=10km，速度差=15-5=10，10÷10=1 小时。' },
        { no: 3, type: 'choice', score: 4, focus: '工程问题', stem: '一项工程甲 12 天、乙 18 天完成，合作需（ ）天。', options: ['A. 6', 'B. 7.2', 'C. 8', 'D. 10'], answer: 'B', explain: '效率和 1/12+1/18=5/36，合作 1÷(5/36)=7.2 天。' },
        { no: 4, type: 'choice', score: 4, focus: '浓度', stem: '100g 盐水中含盐 20g，含盐率是（ ）。', options: ['A. 20%', 'B. 80%', 'C. 25%', 'D. 16.7%'], answer: 'A', explain: '20÷100=20%。' },
        { no: 5, type: 'choice', score: 4, focus: '利润率', stem: '成本 50 元，标价 80 元打九折售出，利润率是（ ）。', options: ['A. 44%', 'B. 60%', 'C. 37.5%', 'D. 30%'], answer: 'A', explain: '售价=80×0.9=72，利润=22，利润率=22÷50=44%。' }
      ]},
      { name: '二、填空题（每题 4 分）', questions: [
        { no: 6, type: 'fill', score: 4, focus: '植树（两端栽）', stem: '路长 100m，每隔 5m 栽一棵（两端都栽），共栽（ ）棵。', answer: '21', explain: '100÷5+1=21 棵。' },
        { no: 7, type: 'fill', score: 4, focus: '植树（环形）', stem: '圆形花坛周长 60m，每隔 6m 栽一棵，共栽（ ）棵。', answer: '10', explain: '环形：60÷6=10 棵。' },
        { no: 8, type: 'fill', score: 4, focus: '按比例分配', stem: '360 元按 2:3:4 分给甲、乙、丙，甲得（ ）元。', answer: '80', explain: '360×2/9=80。' },
        { no: 9, type: 'fill', score: 4, focus: '已知部分求整体', stem: '一个数的 1/3 是 12，这个数是（ ）。', answer: '36', explain: '12÷(1/3)=36。' },
        { no: 10, type: 'fill', score: 4, focus: '平均数', stem: '三个数的平均数是 15，这三个数的和是（ ）。', answer: '45', explain: '15×3=45。' }
      ]},
      { name: '三、应用题（每题 8 分）', questions: [
        { no: 11, type: 'solve', score: 8, focus: '折扣', stem: '一件商品原价 120 元，现价 90 元，打了几折？', answer: '七五折（或75%）', explain: '90÷120=0.75=七五折。' },
        { no: 12, type: 'solve', score: 8, focus: '比例尺', stem: '实际距离 4km，在比例尺 1:50000 的图上应画多少厘米？', answer: '8 cm', explain: '4km=400000cm，400000÷50000=8cm。' },
        { no: 13, type: 'solve', score: 8, focus: '分数应用', stem: '一袋米 40kg，吃了 1/4，还剩多少千克？', answer: '30 kg', explain: '剩 40×(1-1/4)=40×3/4=30kg。' },
        { no: 14, type: 'solve', score: 8, focus: '百分率', stem: '播种 200 粒种子，发芽 190 粒，发芽率是多少？', answer: '95%', explain: '190÷200×100%=95%。' },
        { no: 15, type: 'solve', score: 8, focus: '和倍问题', stem: '甲、乙存款共 800 元，甲是乙的 3/5，乙存款多少元？', answer: '500 元', explain: '乙为单位“1”，共 1+3/5=8/5，乙=800÷(8/5)=500 元。' }
      ]}
    ]
  },

  /* ===================== 语文模拟（一）基础·积累与运用 ===================== */
  {
    id: 'MOCK-CN-01', kind: '模拟', subject: '语文', title: '语文模拟（一）· 基础·积累与运用',
    duration: 80, totalScore: 100, focus: '字音·字形·成语·古诗文默写',
    parts: [
      { name: '一、选择题（每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '字音', stem: '下列加点字注音完全正确的一组是（ ）。', options: ['A. 提供(gōng) 勉强(qiǎng)', 'B. 参差(chà) 记载(zài)', 'C. 栖息(xī) 倔强(juè)', 'D. 模样(mó) 处理(chù)'], answer: 'A', explain: 'B 参差cī、记载zǎi；C 栖息qī、倔强jiàng；D 模样mú、处理chǔ。A 正确。' },
        { no: 2, type: 'choice', score: 4, focus: '字形', stem: '下列词语中没有错别字的是（ ）。', options: ['A. 再接再励', 'B. 专心致志', 'C. 穿流不息', 'D. 迫不急待'], answer: 'B', explain: 'A 应为再接再厉；C 应为川流不息；D 应为迫不及待。' },
        { no: 3, type: 'choice', score: 4, focus: '成语运用', stem: '下列句子中成语使用不当的是（ ）。', options: ['A. 他孜孜不倦地学习', 'B. 这现象大家早已司空见惯', 'C. 同学们津津有味地听讲', 'D. 他处心积虑地为班级服务'], answer: 'D', explain: '“处心积虑”含贬义，指费尽心思做坏事，用于“为班级服务”不当。' },
        { no: 4, type: 'choice', score: 4, focus: '古诗积累', stem: '“少壮不努力”的下一句是（ ）。', options: ['A. 老大徒伤悲', 'B. 万事成蹉跎', 'C. 岁月不待人', 'D. 一日难再晨'], answer: 'A', explain: '出自《长歌行》：少壮不努力，老大徒伤悲。' },
        { no: 5, type: 'choice', score: 4, focus: '文学常识', stem: '《匆匆》的作者是（ ）。', options: ['A. 朱自清', 'B. 老舍', 'C. 鲁迅', 'D. 巴金'], answer: 'A', explain: '《匆匆》是朱自清的散文名篇。' }
      ]},
      { name: '二、填空题（每题 5 分）', questions: [
        { no: 6, type: 'fill', score: 5, focus: '古诗默写', stem: '默写：随风潜入夜，______。（杜甫《春夜喜雨》）', answer: '润物细无声', explain: '原句：随风潜入夜，润物细无声。' },
        { no: 7, type: 'fill', score: 5, focus: '古诗默写', stem: '默写：______，不肯过江东。（李清照《夏日绝句》）', answer: '至今思项羽', explain: '原句：至今思项羽，不肯过江东。' },
        { no: 8, type: 'fill', score: 5, focus: '成语积累', stem: '成语补充：______而不舍；______耳盗铃。', answer: '锲；掩', explain: '锲而不舍；掩耳盗铃。' },
        { no: 9, type: 'fill', score: 5, focus: '文言出处', stem: '《学弈》《两小儿辩日》都出自《______》。', answer: '孟子（或列子）', explain: '《学弈》出自《孟子·告子上》；《两小儿辩日》出自《列子·汤问》。' },
        { no: 10, type: 'fill', score: 5, focus: '文言词义', stem: '“孰为汝多知乎”中“知”通“______”，意思是______。', answer: '智；智慧', explain: '“知”通“智”，聪明、智慧。' }
      ]},
      { name: '三、阅读理解（12 分）', questions: [
        { no: 11, type: 'read', score: 4, focus: '修辞手法', stem: '读句：“小草从土里探出头来，好奇地打量着春天。”这句话用了什么修辞手法？这样写有什么好处？', answer: '拟人。把小草当作人来写，生动形象地写出春天小草萌发的可爱姿态。', explain: '“探出头”“打量”是人的动作，属拟人，使描写更生动。' },
        { no: 12, type: 'read', score: 4, focus: '内容理解', stem: '这段话描写的是哪个季节？从哪些词语可以看出来？', answer: '春天。从“小草探出头”“春天”等词语可以看出。', explain: '直接点明“春天”，并以小草萌发为特征。' },
        { no: 13, type: 'read', score: 4, focus: '开放表达', stem: '你喜欢文中的哪个词语或句子？说说你的理由。（开放题）', answer: '示例：喜欢“探出头”，用词活泼，把小草写活了。', explain: '开放题，言之成理即可。' }
      ]},
      { name: '四、习作（28 分）', questions: [
        { no: 14, type: 'write', score: 28, focus: '写人作文', stem: '以《我的好朋友》为题写一篇不少于 400 字的记叙文，注意通过具体事例写出人物的特点。', answer: '（略，按记叙文评分：中心明确、事例具体、语句通顺、书写工整）', explain: '评分要点：①有具体事例；②写出朋友特点；③条理清楚、语言通顺；④不少于400字。' }
      ]}
    ]
  },

  /* ===================== 语文模拟（二）阅读·理解 ===================== */
  {
    id: 'MOCK-CN-02', kind: '模拟', subject: '语文', title: '语文模拟（二）· 阅读·理解',
    duration: 80, totalScore: 100, focus: '现代文阅读·提取信息·体会情感',
    parts: [
      { name: '一、基础（每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '标点', stem: '下列句子标点使用正确的是（ ）。', options: ['A. 他说：“今天去图书馆。”', 'B. 他说：“今天去图书馆”。', 'C. 他说“今天去图书馆。”', 'D. 他说：今天去图书馆。'], answer: 'A', explain: '提示语在前，冒号引号正确，句末点号在引号内。' },
        { no: 2, type: 'choice', score: 4, focus: '词语搭配', stem: '下列搭配不当的是（ ）。', options: ['A. 改进方法', 'B. 改善生活', 'C. 增加水平', 'D. 提高效率'], answer: 'C', explain: '应是“提高水平”，“增加”多与数量搭配。' },
        { no: 3, type: 'fill', score: 4, focus: '古诗默写', stem: '“海内存知己，______。”（王勃《送杜少府之任蜀州》）', answer: '天涯若比邻', explain: '原句：海内存知己，天涯若比邻。' }
      ]},
      { name: '二、阅读理解（共 40 分）', questions: [
        { no: 4, type: 'read', score: 8, focus: '概括内容', stem: '阅读下面短文，说说短文主要讲了一件什么事。\n[短文] 放学路上，天下起雨。我没带伞，正发愁，同桌小林把伞递给我，自己跑进雨里。第二天他感冒了，我却平安到家。', answer: '下雨天同桌把伞让给“我”，自己淋雨感冒，表现了同学间的友爱。', explain: '抓住人物、事件、结果概括即可。' },
        { no: 5, type: 'read', score: 8, focus: '提取信息', stem: '从文中找出表现小林善良的一个细节，抄写下来。', answer: '“同桌小林把伞递给我，自己跑进雨里。”', explain: '细节体现他把方便让给别人、自己吃苦。' },
        { no: 6, type: 'read', score: 8, focus: '体会情感', stem: '“我”当时的心情可能是怎样的？为什么？', answer: '感动、愧疚。因为小林把伞让给“我”却自己淋雨感冒。', explain: '结合情节体会人物心理，言之成理即可。' },
        { no: 7, type: 'read', score: 8, focus: '联系生活', stem: '你身边有没有类似“让伞”的事？简单写一写。', answer: '（开放）示例：有一次我忘带文具，同学借我用。', explain: '开放题，能举出互助事例即可。' },
        { no: 8, type: 'read', score: 8, focus: '词句赏析', stem: '“自己跑进雨里”中“跑”字好在哪里？', answer: '“跑”字写出小林毫不犹豫、怕“我”等急，体现他急人所急。', explain: '从用词体会人物品质。' }
      ]},
      { name: '三、习作（40 分）', questions: [
        { no: 9, type: 'write', score: 40, focus: '记事作文', stem: '以《一件让我感动的事》为题写一篇不少于 450 字的作文，把事情的经过写清楚，写出自己的感受。', answer: '（略，按记叙文评分）', explain: '评分要点：事情完整、有细节、有真实感受、语句通顺、书写工整。' }
      ]}
    ]
  },

  /* ===================== 语文模拟（三）综合 ===================== */
  {
    id: 'MOCK-CN-03', kind: '模拟', subject: '语文', title: '语文模拟（三）· 综合训练',
    duration: 90, totalScore: 100, focus: '基础+阅读+作文 综合',
    parts: [
      { name: '一、积累与运用（每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '字音', stem: '“载歌载舞”中“载”的读音是（ ）。', options: ['A. zǎi', 'B. zài', 'C. zāi', 'D. cái'], answer: 'B', explain: '“载”表示“又、且”时读 zài，如载歌载舞。' },
        { no: 2, type: 'choice', score: 4, focus: '成语', stem: '下列不是描写人物品质的成语是（ ）。', options: ['A. 舍己为人', 'B. 锲而不舍', 'C. 守株待兔', 'D. 诚实守信'], answer: 'C', explain: '“守株待兔”讽刺不知变通，不是褒义品质词。' },
        { no: 3, type: 'fill', score: 4, focus: '古诗', stem: '“千门万户曈曈日，______。”（王安石《元日》）', answer: '总把新桃换旧符', explain: '原句写春节换桃符的习俗。' },
        { no: 4, type: 'fill', score: 4, focus: '名言', stem: '“读书须用意，______”出自《增广贤文》。', answer: '一字值千金', explain: '劝人读书要用心。' }
      ]},
      { name: '二、阅读理解（共 36 分）', questions: [
        { no: 5, type: 'read', score: 9, focus: '说明方法', stem: '读句：“鲸的舌头重得像一头大象。”这句话用了什么说明方法？', answer: '作比较（或打比方）。把鲸舌头和象比较，突出其重。', explain: '用熟悉事物作比，使说明更形象。' },
        { no: 6, type: 'read', score: 9, focus: '信息提取', stem: '阅读短文，用一句话概括作者的观点。（短文略）', answer: '（依所给短文概括，抓住中心句）', explain: '找中心句或自己归纳。' },
        { no: 7, type: 'read', score: 9, focus: '词义理解', stem: '联系上下文，说说“左右为难”在文中的意思。', answer: '指处在两难境地，不知如何选择。', explain: '结合语境解释。' },
        { no: 8, type: 'read', score: 9, focus: '开放表达', stem: '读了短文，你有什么启发？写一两句。', answer: '（开放）示例：做事要多为别人着想。', explain: '言之成理即可。' }
      ]},
      { name: '三、习作（44 分）', questions: [
        { no: 9, type: 'write', score: 44, focus: '想象作文', stem: '以《假如我有一双翅膀》为题写一篇想象作文，不少于 400 字。', answer: '（略）', explain: '评分要点：想象合理、内容具体、有真情实感、语句通顺。' }
      ]}
    ]
  },

  /* ===================== 英语模拟（一）语音·词汇·语法 ===================== */
  {
    id: 'MOCK-EN-01', kind: '模拟', subject: '英语', title: '英语模拟（一）· 语音·词汇·语法',
    duration: 60, totalScore: 100, focus: '发音辨析·时态·句型',
    parts: [
      { name: '一、语音（找出划线部分发音不同的一项，每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '元音 a', stem: 'A. n[a]me  B. b[a]g  C. c[a]t  D. h[a]t', options: ['A. name', 'B. bag', 'C. cat', 'D. hat'], answer: 'A', explain: 'name 中 a 发 /eɪ/，其余发 /æ/。' },
        { no: 2, type: 'choice', score: 4, focus: '元音 i', stem: 'A. b[i]ke  B. k[i]te  C. f[i]sh  D. l[i]ke', options: ['A. bike', 'B. kite', 'C. fish', 'D. like'], answer: 'C', explain: 'fish 中 i 发 /ɪ/，其余发 /aɪ/。' },
        { no: 3, type: 'choice', score: 4, focus: '元音 oo', stem: 'A. b[oo]k  B. f[oo]d  C. g[oo]d  D. l[oo]k', options: ['A. book', 'B. food', 'C. good', 'D. look'], answer: 'B', explain: 'food 中 oo 发 /uː/，其余发 /ʊ/。' },
        { no: 4, type: 'choice', score: 4, focus: '元音 ea', stem: 'A. t[ea]cher  B. br[ea]d  C. sw[ea]ter  D. h[ea]d', options: ['A. teacher', 'B. bread', 'C. sweater', 'D. head'], answer: 'A', explain: 'teacher 中 ea 发 /iː/，其余发 /e/。' },
        { no: 5, type: 'choice', score: 4, focus: '辅音 ch', stem: 'A. [ch]air  B. s[ch]ool  C. [Ch]ina  D. wat[ch]', options: ['A. chair', 'B. school', 'C. China', 'D. watch'], answer: 'B', explain: 'school 中 ch 发 /k/，其余发 /tʃ/。' }
      ]},
      { name: '二、词汇与语法（每题 4 分）', questions: [
        { no: 6, type: 'choice', score: 4, focus: '过去式', stem: 'I ___ to school yesterday.', options: ['A. go', 'B. went', 'C. going', 'D. goes'], answer: 'B', explain: 'yesterday 用一般过去时，go 的过去式 went。' },
        { no: 7, type: 'choice', score: 4, focus: '三单', stem: 'She ___ English every morning.', options: ['A. read', 'B. reads', 'C. reading', 'D. readed'], answer: 'B', explain: 'every morning 用一般现在时，三单 reads。' },
        { no: 8, type: 'choice', score: 4, focus: 'there be', stem: 'There ___ some milk in the glass.', options: ['A. is', 'B. are', 'C. am', 'D. be'], answer: 'A', explain: 'milk 不可数，用 is。' },
        { no: 9, type: 'choice', score: 4, focus: '疑问词', stem: '___ is the weather today?', options: ['A. What', 'B. How', 'C. Which', 'D. Where'], answer: 'B', explain: '问天气用 How is the weather? / What is the weather like?' },
        { no: 10, type: 'choice', score: 4, focus: '介词', stem: 'My birthday is ___ May.', options: ['A. in', 'B. on', 'C. at', 'D. of'], answer: 'A', explain: '月份前用 in。' },
        { no: 11, type: 'choice', score: 4, focus: '比较级', stem: 'He is ___ than me.', options: ['A. tall', 'B. taller', 'C. tallest', 'D. more tall'], answer: 'B', explain: 'than 用比较级 taller。' },
        { no: 12, type: 'choice', score: 4, focus: '名词复数', stem: 'How many ___ do you have?', options: ['A. apple', 'B. apples', 'C. apple’s', 'D. an apple'], answer: 'B', explain: 'how many 后接可数复数 apples。' },
        { no: 13, type: 'choice', score: 4, focus: '名词性物主代词', stem: 'The book is ___.', options: ['A. your', 'B. yours', 'C. you', 'D. you’re'], answer: 'B', explain: '空格后无名词，用名词性物主代词 yours。' }
      ]},
      { name: '三、按要求写词（每题 3 分）', questions: [
        { no: 14, type: 'fill', score: 3, focus: '过去式', stem: 'write（过去式）→ ______', answer: 'wrote', explain: 'write 是不规则动词，过去式 wrote。' },
        { no: 15, type: 'fill', score: 3, focus: '宾格', stem: 'they（宾格）→ ______', answer: 'them', explain: 'they 的宾格是 them。' },
        { no: 16, type: 'fill', score: 3, focus: '比较级', stem: 'big（比较级）→ ______', answer: 'bigger', explain: '重读闭音节双写尾字母加-er：bigger。' }
      ]},
      { name: '四、阅读与写作（18 分）', questions: [
        { no: 17, type: 'read', score: 8, focus: '阅读理解', stem: '阅读：Tom is ten. He likes playing football. He goes to school by bike. 判断：Tom goes to school on foot.（T/F）', answer: 'F', explain: '文中 by bike，不是 on foot，故为 False。' },
        { no: 18, type: 'write', score: 10, focus: '小写作', stem: '以 “My Weekend” 为题写不少于 5 句话的英语小短文。', answer: '（略，评分：时态正确、句子通顺、不少于5句）', explain: '可用一般现在时描写周末活动。' }
      ]}
    ]
  },

  /* ===================== 英语模拟（二）语法·完形·阅读 ===================== */
  {
    id: 'MOCK-EN-02', kind: '模拟', subject: '英语', title: '英语模拟（二）· 语法·完形·阅读',
    duration: 60, totalScore: 100, focus: '完形填空·阅读理解',
    parts: [
      { name: '一、语法选择（每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '时态', stem: 'Look! The boy ___ a kite.', options: ['A. fly', 'B. flies', 'C. is flying', 'D. flew'], answer: 'C', explain: 'Look! 提示现在进行时，is flying。' },
        { no: 2, type: 'choice', score: 4, focus: '情态动词', stem: '___ I have some water, please?', options: ['A. Can', 'B. Am', 'C. Do', 'D. Did'], answer: 'A', explain: '请求用 Can I...?' },
        { no: 3, type: 'choice', score: 4, focus: '代词', stem: 'Help ___ (you / yourself / your).', options: ['A. you', 'B. yourself', 'C. your', 'D. yours'], answer: 'B', explain: 'Help yourself. 是固定用语“请自便”。' },
        { no: 4, type: 'choice', score: 4, focus: '介词', stem: 'We often play football ___ Sunday.', options: ['A. in', 'B. on', 'C. at', 'D. of'], answer: 'B', explain: '具体星期前用 on。' },
        { no: 5, type: 'choice', score: 4, focus: '最高级', stem: 'Which is ___ , the sun, the moon or the earth?', options: ['A. big', 'B. bigger', 'C. biggest', 'D. the biggest'], answer: 'D', explain: '三者比较用最高级，且最高级前加 the。' }
      ]},
      { name: '二、完形填空（每题 5 分）', questions: [
        { no: 6, type: 'cloze', score: 5, focus: '完形·语境', stem: 'I ___ (get) up at 7:00 every day.', options: ['A. get', 'B. gets', 'C. got', 'D. getting'], answer: 'A', explain: 'every day 用一般现在时，主语 I 用 get。' },
        { no: 7, type: 'cloze', score: 5, focus: '完形·名词', stem: 'I have a glass of ___ for breakfast.', options: ['A. milks', 'B. milk', 'C. breads', 'D. book'], answer: 'B', explain: 'milk 不可数，a glass of milk 一杯牛奶。' },
        { no: 8, type: 'cloze', score: 5, focus: '完形·动词', stem: 'After breakfast, I ___ to school.', options: ['A. walk', 'B. walks', 'C. walking', 'D. walked'], answer: 'A', explain: '主语 I 一般现在时用 walk。' },
        { no: 9, type: 'cloze', score: 5, focus: '完形·介词', stem: 'School starts ___ 8:00.', options: ['A. in', 'B. on', 'C. at', 'D. of'], answer: 'C', explain: '具体时刻前用 at。' },
        { no: 10, type: 'cloze', score: 5, focus: '完形·形容词', stem: 'I love my school because it is ___ .', options: ['A. beautiful', 'B. beautifully', 'C. beauty', 'D. more beautiful'], answer: 'A', explain: 'be 动词后接形容词 beautiful。' }
      ]},
      { name: '三、阅读理解（每题 6 分）', questions: [
        { no: 11, type: 'read', score: 6, focus: '细节理解', stem: '阅读：Lucy is from London. She likes reading. Her favourite book is about animals. 选择：Where is Lucy from?', options: ['A. New York', 'B. London', 'C. Paris', 'D. Tokyo'], answer: 'B', explain: '文中 “Lucy is from London.”' },
        { no: 12, type: 'read', score: 6, focus: '推理判断', stem: 'What does Lucy like?', options: ['A. Swimming', 'B. Reading', 'C. Singing', 'D. Drawing'], answer: 'B', explain: '文中 “She likes reading.”' },
        { no: 13, type: 'read', score: 6, focus: '主旨', stem: 'Her favourite book is about ______.', options: ['A. food', 'B. animals', 'C. sports', 'D. music'], answer: 'B', explain: '文中 “about animals”。' }
      ]},
      { name: '四、写作（22 分）', questions: [
        { no: 14, type: 'write', score: 22, focus: '话题作文', stem: '以 “My School” 为题写一篇不少于 6 句话的英语短文，介绍你的学校和喜欢的活动。', answer: '（略）', explain: '评分：内容完整、语句通顺、语法基本正确。' }
      ]}
    ]
  },

  /* ===================== 英语模拟（三）综合 ===================== */
  {
    id: 'MOCK-EN-03', kind: '模拟', subject: '英语', title: '英语模拟（三）· 阅读与写作综合',
    duration: 60, totalScore: 100, focus: '阅读两篇+写作',
    parts: [
      { name: '一、词汇语法（每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '时态', stem: 'We ___ a picnic next Sunday.', options: ['A. have', 'B. has', 'C. will have', 'D. had'], answer: 'C', explain: 'next Sunday 用一般将来时 will have。' },
        { no: 2, type: 'choice', score: 4, focus: '形容词', stem: 'The film is very ___ .', options: ['A. interest', 'B. interested', 'C. interesting', 'D. interests'], answer: 'C', explain: '修饰物用 interesting（令人感兴趣的）。' },
        { no: 3, type: 'choice', score: 4, focus: '量词', stem: 'There is ___ water in the bottle.', options: ['A. many', 'B. much', 'C. a few', 'D. an'], answer: 'B', explain: 'water 不可数，用 much。' },
        { no: 4, type: 'choice', score: 4, focus: '祈使句', stem: '___ quiet, please. The baby is sleeping.', options: ['A. Is', 'B. Be', 'C. Are', 'D. Were'], answer: 'B', explain: '祈使句用动词原形 Be。' },
        { no: 5, type: 'fill', score: 4, focus: '复数', stem: 'child（复数）→ ______', answer: 'children', explain: 'child 是不规则名词，复数为 children。' }
      ]},
      { name: '二、阅读理解（每题 6 分）', questions: [
        { no: 6, type: 'read', score: 6, focus: '阅读A·细节', stem: '阅读A：It is spring. The trees turn green. Birds sing in the sky. 选择：What season is it?', options: ['A. Spring', 'B. Summer', 'C. Autumn', 'D. Winter'], answer: 'A', explain: '文中 “It is spring.”' },
        { no: 7, type: 'read', score: 6, focus: '阅读A·细节', stem: 'What do birds do?', options: ['A. Swim', 'B. Sing', 'C. Sleep', 'D. Run'], answer: 'B', explain: '文中 “Birds sing in the sky.”' },
        { no: 8, type: 'read', score: 6, focus: '阅读B·判断', stem: '阅读B：My father is a doctor. He works in a hospital. He helps sick people. 判断：My father is a teacher.（T/F）', answer: 'F', explain: '文中说 father is a doctor，不是 teacher，故 False。' },
        { no: 9, type: 'read', score: 6, focus: '阅读B·细节', stem: 'Where does he work?', options: ['A. School', 'B. Hospital', 'C. Farm', 'D. Shop'], answer: 'B', explain: '文中 “He works in a hospital.”' }
      ]},
      { name: '三、写作（44 分）', questions: [
        { no: 10, type: 'write', score: 44, focus: '看图/话题作文', stem: '以 “My Family” 为题写一篇不少于 8 句话的英语短文，介绍家庭成员及他们的爱好。', answer: '（略）', explain: '评分：家庭成员清楚、爱好具体、语句通顺。' }
      ]}
    ]
  },

  /* ===================== 真题 数学（2024·代表性汇编） ===================== */
  {
    id: 'REAL-MA-2024', kind: '真题', subject: '数学', title: '台州小升初数学真题（2024·代表性汇编）',
    duration: 90, totalScore: 100, focus: '综合·数与代数·图形·应用',
    note: '本卷为依据台州地区小升初近年公开题型与难度规律整理的代表性汇编卷，供模拟训练，非官方原卷。',
    parts: [
      { name: '一、选择题（每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '倍数', stem: '下面既是 2 的倍数又是 3 的倍数的是（ ）。', options: ['A. 12', 'B. 14', 'C. 15', 'D. 22'], answer: 'A', explain: '12÷2=6，12÷3=4，同时是 2、3 的倍数。' },
        { no: 2, type: 'choice', score: 4, focus: '单位换算', stem: '2.05 公顷 =（ ）平方米。', options: ['A. 205', 'B. 2050', 'C. 20500', 'D. 205000'], answer: 'C', explain: '1 公顷=10000 平方米，2.05×10000=20500。' },
        { no: 3, type: 'choice', score: 4, focus: '三角形内角', stem: '一个三角形三个角的度数比是 1:2:3，它是（ ）三角形。', options: ['A. 锐角', 'B. 直角', 'C. 钝角', 'D. 等腰'], answer: 'B', explain: '最大角=180×3/6=90°，是直角三角形。' },
        { no: 4, type: 'choice', score: 4, focus: '比例尺', stem: '比例尺 1:3000000，图上 3cm 表示实际（ ）km。', options: ['A. 9', 'B. 90', 'C. 900', 'D. 30'], answer: 'B', explain: '3×3000000=9000000cm=90km。' },
        { no: 5, type: 'choice', score: 4, focus: '带余除法', stem: 'a ÷ b = 5 …… 3，b 最小是 4，这时 a 最小是（ ）。', options: ['A. 20', 'B. 23', 'C. 24', 'D. 27'], answer: 'B', explain: '余数 3 说明 b＞3，最小 b=4；a=4×5+3=23。' }
      ]},
      { name: '二、填空题（每题 4 分）', questions: [
        { no: 6, type: 'fill', score: 4, focus: '约数个数', stem: '2024 的约数有（ ）个。', answer: '16', explain: '2024=2³×11×23，约数个数=(3+1)(1+1)(1+1)=16。' },
        { no: 7, type: 'fill', score: 4, focus: '钟面角', stem: '3:00 时，时针与分针的夹角是（ ）°。', answer: '90', explain: '3 时整，分针指12、时针指3，夹角 90°。' },
        { no: 8, type: 'fill', score: 4, focus: '小数分数互化', stem: '0.25 = 1/（ ） =（ ）%。', answer: '4；25', explain: '0.25=1/4=25%。' },
        { no: 9, type: 'fill', score: 4, focus: '立体图形', stem: '把一个正方体切成 8 个相同的小正方体，表面积变为原来的（ ）倍。', answer: '2', explain: '原表面积 6a²；8 个小正方体总表面积 8×6(a/2)²=12a²，扩大 2 倍。' },
        { no: 10, type: 'fill', score: 4, focus: '圆柱侧面积', stem: '圆柱高 10cm，底面周长 18.84cm，侧面积是（ ）cm²。', answer: '188.4', explain: '侧面积=底面周长×高=18.84×10=188.4。' }
      ]},
      { name: '三、计算（每题 6 分）', questions: [
        { no: 11, type: 'calc', score: 6, focus: '简便运算', stem: '计算：4.8×7.5 + 5.2×7.5', answer: '75', explain: '7.5×(4.8+5.2)=7.5×10=75。' },
        { no: 12, type: 'calc', score: 6, focus: '分数连减', stem: '计算：1 - 3/7 - 2/7', answer: '2/7', explain: '1 - 5/7 = 2/7。' },
        { no: 13, type: 'calc', score: 6, focus: '解比例', stem: '解比例：x / 4 = 3 / 6', answer: 'x = 2', explain: '交叉相乘 6x=12，x=2。' }
      ]},
      { name: '四、应用题（每题 8 分）', questions: [
        { no: 14, type: 'solve', score: 8, focus: '和倍问题', stem: '商店运来苹果和梨共 480kg，苹果的重量是梨的 3 倍。梨有多少千克？', answer: '120 kg', explain: '梨为单位“1”，共 1+3=4 份，480÷4=120kg。' },
        { no: 15, type: 'solve', score: 8, focus: '工程问题', stem: '一项工程，甲单独做 8 天完成，乙单独做 12 天完成，两人合作几天完成？', answer: '4.8 天', explain: '效率和 1/8+1/12=5/24，合作 1÷(5/24)=24/5=4.8 天。' }
      ]}
    ]
  },

  /* ===================== 真题 数学（2025·代表性汇编） ===================== */
  {
    id: 'REAL-MA-2025', kind: '真题', subject: '数学', title: '台州小升初数学真题（2025·代表性汇编）',
    duration: 90, totalScore: 100, focus: '综合·分数·比例·浓度·行程',
    note: '本卷为依据台州地区小升初近年公开题型与难度规律整理的代表性汇编卷，供模拟训练，非官方原卷。',
    parts: [
      { name: '一、选择题（每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '小数化分数', stem: '0.6 化成分数，最简形式是（ ）。', options: ['A. 6/10', 'B. 3/5', 'C. 60/100', 'D. 12/20'], answer: 'B', explain: '0.6=6/10=3/5（最简）。' },
        { no: 2, type: 'choice', score: 4, focus: '正比例关系', stem: '下面成正比例关系的是（ ）。', options: ['A. 互为倒数两数', 'B. 正方形周长与边长', 'C. 圆面积与半径', 'D. 身高与体重'], answer: 'B', explain: '周长÷边长=4（一定），成正比例；A 成反比例。' },
        { no: 3, type: 'choice', score: 4, focus: '四舍五入', stem: '一个两位小数四舍五入后是 3.0，这个数最大是（ ）。', options: ['A. 3.04', 'B. 3.05', 'C. 2.99', 'D. 3.49'], answer: 'A', explain: '“四舍”得 3.0 的最大是 3.04。' },
        { no: 4, type: 'choice', score: 4, focus: '分数性质', stem: '5/8 的分子加上 10（变 15，即乘 3），要使分数大小不变，分母应加上（ ）。', options: ['A. 16', 'B. 10', 'C. 24', 'D. 8'], answer: 'A', explain: '分母也应乘 3：8×3=24，加 24-8=16。' },
        { no: 5, type: 'choice', score: 4, focus: '倒数', stem: '3/7 的倒数是（ ）。', options: ['A. 7/3', 'B. 3/7', 'C. 1', 'D. 0'], answer: 'A', explain: '乘积为 1 的两个数互为倒数，3/7 的倒数是 7/3。' }
      ]},
      { name: '二、填空题（每题 4 分）', questions: [
        { no: 6, type: 'fill', score: 4, focus: '化简比', stem: '1 吨 : 250 千克 =（ ）:（ ）。', answer: '4；1', explain: '1 吨=1000kg，1000:250=4:1。' },
        { no: 7, type: 'fill', score: 4, focus: '百分率', stem: '产品合格率 98%，生产 200 件，合格的有（ ）件。', answer: '196', explain: '200×98%=196。' },
        { no: 8, type: 'fill', score: 4, focus: '速度', stem: '小明 1/3 小时走了 2km，他的速度是（ ）km/h。', answer: '6', explain: '2÷(1/3)=6km/h。' },
        { no: 9, type: 'fill', score: 4, focus: '圆柱圆锥', stem: '一个圆柱和一个圆锥等底等高，圆柱体积 90cm³，圆锥体积是（ ）cm³。', answer: '30', explain: '等底等高圆锥体积是圆柱的 1/3，90÷3=30。' },
        { no: 10, type: 'fill', score: 4, focus: '比的基本性质', stem: '甲:乙=2:5，乙比甲多（ ）%。', answer: '150', explain: '乙比甲多(5-2)/2=3/2=150%。' }
      ]},
      { name: '三、计算（每题 6 分）', questions: [
        { no: 11, type: 'calc', score: 6, focus: '小数乘法', stem: '计算：12.5 × 3.2', answer: '40', explain: '12.5×8×0.4=100×0.4=40。' },
        { no: 12, type: 'calc', score: 6, focus: '乘法分配律', stem: '计算：(1/3 + 1/4) × 12', answer: '7', explain: '12/3 + 12/4 = 4 + 3 = 7。' },
        { no: 13, type: 'calc', score: 6, focus: '解方程', stem: '解方程：3x - 9 = 6', answer: 'x = 5', explain: '3x=15，x=5。' }
      ]},
      { name: '四、应用题（每题 8 分）', questions: [
        { no: 14, type: 'solve', score: 8, focus: '浓度问题', stem: '含盐 10% 的盐水 200g，加入多少克盐后含盐率变为 20%？', answer: '25 g', explain: '原盐 20g。设加 x 克： (20+x)/(200+x)=0.2 → 20+x=40+0.2x → 0.8x=20 → x=25。' },
        { no: 15, type: 'solve', score: 8, focus: '追及问题', stem: 'A、B 相距 180km。甲从 A 以 40km/h 先出发 2 小时，乙从 A 以 50km/h 同向去追，几小时追上？', answer: '8 小时', explain: '甲先走 40×2=80km；速度差 10km/h；80÷10=8 小时。' },
        { no: 16, type: 'solve', score: 8, focus: '分数应用', stem: '一本书 240 页，小明已经看了全书的 5/8，还剩多少页没看？', answer: '90 页', explain: '剩 240×(1-5/8)=240×3/8=90 页。' }
      ]}
    ]
  },

  /* ===================== 真题 语文（2024·代表性汇编） ===================== */
  {
    id: 'REAL-CN-2024', kind: '真题', subject: '语文', title: '台州小升初语文真题（2024·代表性汇编）',
    duration: 90, totalScore: 100, focus: '基础+阅读+习作',
    note: '本卷为依据台州地区小升初近年公开题型与难度规律整理的代表性汇编卷，供模拟训练，非官方原卷。',
    parts: [
      { name: '一、积累与运用（每题 5 分）', questions: [
        { no: 1, type: 'choice', score: 5, focus: '字音', stem: '下列加点字读音全部正确的一组是（ ）。', options: ['A. 倔强(jiàng) 载入(zài)', 'B. 勉强(qiáng) 参差(cī)', 'C. 模(mó)样 处(chǔ)理', 'D. 提供(gòng) 血(xuě)液'], answer: 'A', explain: 'B 勉强qiǎng；C 模样mú；D 提供gōng、血xuè（口语xuě）。A 正确。' },
        { no: 2, type: 'choice', score: 5, focus: '字形', stem: '下列词语书写完全正确的是（ ）。', options: ['A. 阴谋鬼计', 'B. 抑扬顿挫', 'C. 谈笑风声', 'D. 再接再励'], answer: 'B', explain: 'A 应为诡计；C 应为谈笑风生；D 应为再接再厉。' },
        { no: 3, type: 'choice', score: 5, focus: '诗句作者', stem: '“粉骨碎身浑不怕，要留清白在人间”出自（ ）。', options: ['A. 于谦《石灰吟》', 'B. 陆游《示儿》', 'C. 王冕《墨梅》', 'D. 杜甫《春望》'], answer: 'A', explain: '出自明代于谦的《石灰吟》。' },
        { no: 4, type: 'fill', score: 5, focus: '古诗默写', stem: '“随风潜入夜，______。”', answer: '润物细无声', explain: '杜甫《春夜喜雨》。' },
        { no: 5, type: 'fill', score: 5, focus: '成语', stem: '把成语补充完整：______ 学步；______ 充数。', answer: '邯郸；滥竽', explain: '邯郸学步；滥竽充数。' }
      ]},
      { name: '二、阅读理解（共 40 分）', questions: [
        { no: 6, type: 'read', score: 10, focus: '概括段意', stem: '阅读：[短文] 蜜蜂酿蜜要采成百上千朵花，往返数十次，才能酿出一丁点蜜。它从不知疲倦，把甜美留给别人。\n请用一句话概括蜜蜂的特点。', answer: '蜜蜂勤劳、无私奉献，把甜美留给别人。', explain: '抓住“勤劳”“奉献”概括。' },
        { no: 7, type: 'read', score: 10, focus: '词语理解', stem: '“不知疲倦”在文中的意思是什么？', answer: '形容蜜蜂一直劳作，不觉得累。', explain: '联系语境解释。' },
        { no: 8, type: 'read', score: 10, focus: '写法体会', stem: '这段话借蜜蜂赞美了哪种人？', answer: '赞美了像蜜蜂一样勤劳、默默奉献的人。', explain: '借物喻人。' },
        { no: 9, type: 'read', score: 10, focus: '开放表达', stem: '你愿意做一只“小蜜蜂”吗？为什么？', answer: '（开放）示例：愿意，因为劳动和奉献让人快乐。', explain: '言之成理即可。' }
      ]},
      { name: '三、习作（35 分）', questions: [
        { no: 10, type: 'write', score: 35, focus: '话题作文', stem: '以《我学会了______》为题（先把题目补充完整，如“做饭”“骑自行车”），写一篇不少于 450 字的作文，写清学习的过程和感受。', answer: '（略）', explain: '评分：补充恰当、过程具体、有真实感受、语句通顺。' }
      ]}
    ]
  },

  /* ===================== 真题 语文（2023·代表性汇编） ===================== */
  {
    id: 'REAL-CN-2023', kind: '真题', subject: '语文', title: '台州小升初语文真题（2023·代表性汇编）',
    duration: 90, totalScore: 100, focus: '基础+阅读+习作',
    note: '本卷为依据台州地区小升初近年公开题型与难度规律整理的代表性汇编卷，供模拟训练，非官方原卷。',
    parts: [
      { name: '一、积累与运用（每题 5 分）', questions: [
        { no: 1, type: 'choice', score: 5, focus: '成语运用', stem: '下列句子中成语使用正确的是（ ）。', options: ['A. 同学们栩栩如生地听老师讲课', 'B. 他做事情一丝不苟', 'C. 这场雨络绎不绝地下着', 'D. 小明处心积虑帮同学'], answer: 'B', explain: 'A 栩栩如生形容艺术形象；C 络绎不绝形容人车往来；D 处心积虑贬义。B 正确。' },
        { no: 2, type: 'choice', score: 5, focus: '文学常识', stem: '《西游记》的作者是（ ）。', options: ['A. 罗贯中', 'B. 施耐庵', 'C. 吴承恩', 'D. 曹雪芹'], answer: 'C', explain: '《西游记》作者吴承恩。' },
        { no: 3, type: 'fill', score: 5, focus: '古诗', stem: '“稻花香里说丰年，______。”（辛弃疾《西江月》）', answer: '听取蛙声一片', explain: '写夏夜乡村景象。' },
        { no: 4, type: 'fill', score: 5, focus: '名言', stem: '“良药苦口利于病，______。”', answer: '忠言逆耳利于行', explain: '劝人接受批评。' },
        { no: 5, type: 'fill', score: 5, focus: '文言字词', stem: '“为是其智弗若与”中“为”的意思是______。', answer: '因为', explain: '“为”通“谓”，这里意为“因为”。' }
      ]},
      { name: '二、阅读理解（共 40 分）', questions: [
        { no: 6, type: 'read', score: 10, focus: '内容理解', stem: '阅读：[短文] 老爷爷每天清晨扫街道，从不留名。一个雪天，他滑倒受伤，仍先把积雪扫开。\n短文赞扬了老爷爷什么品质？', answer: '赞扬了老爷爷默默奉献、爱岗敬业、为他人着想的品质。', explain: '结合事例归纳。' },
        { no: 7, type: 'read', score: 10, focus: '细节提取', stem: '从文中找一个表现老爷爷负责任的句子抄下来。', answer: '“仍先把积雪扫开。”', explain: '细节体现责任心。' },
        { no: 8, type: 'read', score: 10, focus: '情感体会', stem: '读后你有什么感受？', answer: '（开放）示例：平凡人也能发光，我们要尊重劳动者。', explain: '言之成理即可。' },
        { no: 9, type: 'read', score: 10, focus: '开放性', stem: '你身边有像老爷爷一样的人吗？简单写写。', answer: '（开放）示例：小区保洁阿姨每天准时打扫。', explain: '能举出例子即可。' }
      ]},
      { name: '三、习作（35 分）', questions: [
        { no: 10, type: 'write', score: 35, focus: '写人作文', stem: '以《值得我尊敬的人》为题写一篇不少于 450 字的作文，通过具体事例写出他（她）值得尊敬的地方。', answer: '（略）', explain: '评分：事例具体、突出品质、语句通顺。' }
      ]}
    ]
  },

  /* ===================== 真题 英语（2025·代表性汇编） ===================== */
  {
    id: 'REAL-EN-2025', kind: '真题', subject: '英语', title: '台州小升初英语真题（2025·代表性汇编）',
    duration: 60, totalScore: 100, focus: '语音+词汇+完形+阅读+写作',
    note: '本卷为依据台州地区小升初近年公开题型与难度规律整理的代表性汇编卷，供模拟训练，非官方原卷。',
    parts: [
      { name: '一、语音（找出发音不同的一项，每题 4 分）', questions: [
        { no: 1, type: 'choice', score: 4, focus: '元音 e', stem: 'A. r[e]d  B. m[e]  C. h[e]  D. sh[e]', options: ['A. red', 'B. me', 'C. he', 'D. she'], answer: 'A', explain: 'red 中 e 发 /e/，其余（me/he/she）发 /iː/，不同项是 red。' }
      ]},
      { name: '二、词汇与语法（每题 4 分）', questions: [
        { no: 2, type: 'choice', score: 4, focus: '时态', stem: 'Listen! The girls ___ a song.', options: ['A. sing', 'B. sings', 'C. are singing', 'D. sang'], answer: 'C', explain: 'Listen! 用现在进行时 are singing。' },
        { no: 3, type: 'choice', score: 4, focus: '比较级', stem: 'This box is ___ than that one.', options: ['A. heavy', 'B. heavier', 'C. heaviest', 'D. more heavy'], answer: 'B', explain: 'than 用比较级 heavier。' },
        { no: 4, type: 'choice', score: 4, focus: '疑问词', stem: '___ do you go to school? By bike.', options: ['A. What', 'B. How', 'C. Where', 'D. When'], answer: 'B', explain: '答语是交通方式，用 How 提问。' },
        { no: 5, type: 'choice', score: 4, focus: '介词', stem: 'I usually get up ___ 6:30.', options: ['A. in', 'B. on', 'C. at', 'D. for'], answer: 'C', explain: '具体时刻前用 at。' },
        { no: 6, type: 'fill', score: 4, focus: '过去式', stem: 'go（过去式）→ ______', answer: 'went', explain: 'go 是不规则动词，过去式 went。' },
        { no: 7, type: 'fill', score: 4, focus: '复数', stem: 'tomato（复数）→ ______', answer: 'tomatoes', explain: '以 o 结尾有生命意义的名词加 -es：tomatoes。' }
      ]},
      { name: '三、完形填空（每题 5 分）', questions: [
        { no: 8, type: 'cloze', score: 5, focus: '完形·动词', stem: 'My mother ___ (cook) dinner every evening.', options: ['A. cook', 'B. cooks', 'C. cooked', 'D. cooking'], answer: 'B', explain: 'every evening 用三单 cooks。' },
        { no: 9, type: 'cloze', score: 5, focus: '完形·名词', stem: 'She buys some ___ (vegetable) in the market.', options: ['A. vegetable', 'B. vegetables', 'C. vegetablse', 'D. a vegetable'], answer: 'B', explain: 'some 后接可数复数 vegetables。' },
        { no: 10, type: 'cloze', score: 5, focus: '完形·介词', stem: 'We eat dinner ___ seven o’clock.', options: ['A. in', 'B. on', 'C. at', 'D. of'], answer: 'C', explain: '具体时刻前用 at。' }
      ]},
      { name: '四、阅读理解（每题 6 分）', questions: [
        { no: 11, type: 'read', score: 6, focus: '阅读·细节', stem: '阅读：Ben is eleven. He likes football and reading. His father is a teacher. 选择：How old is Ben?', options: ['A. Ten', 'B. Eleven', 'C. Twelve', 'D. Thirteen'], answer: 'B', explain: '文中 “Ben is eleven.”' },
        { no: 12, type: 'read', score: 6, focus: '阅读·细节', stem: 'What does Ben like?', options: ['A. Football and reading', 'B. Swimming', 'C. Drawing', 'D. Music'], answer: 'A', explain: '文中 “likes football and reading”。' },
        { no: 13, type: 'read', score: 6, focus: '阅读·推断', stem: 'What is Ben’s father?', options: ['A. A doctor', 'B. A teacher', 'C. A driver', 'D. A farmer'], answer: 'B', explain: '文中 “His father is a teacher.”' }
      ]},
      { name: '五、写作（18 分）', questions: [
        { no: 14, type: 'write', score: 18, focus: '话题作文', stem: '以 “My Mother” 为题写一篇不少于 6 句话的英语短文，介绍妈妈的外貌、职业和爱好。', answer: '（略）', explain: '评分：内容完整、语句通顺、语法基本正确。' }
      ]}
    ]
  }

];
