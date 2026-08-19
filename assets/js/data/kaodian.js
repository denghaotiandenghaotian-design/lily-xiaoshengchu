/* ===========================================================
   模块一数据源：考点库（人教版/统编版 五六年级 · 小升初）
   字段：id 学科 grade 单元 point freq basis types score diff mastery example
   考频依据编码（basis）见 KD_BASIS，界面自动展开为文字依据。
   =========================================================== */
window.KD_BASIS = {
  B1: '教材单元核心目标 + 各地小升初卷通用高频题位（台州本地真卷考频待用真题校准）',
  B2: '教材单元重点，各地小升初卷中等频次出现（待本地真卷核对）',
  B3: '教材列为要求但命题占比小；多作为拓展或选做（待核对）',
  B4: '毕业总复习常设专项/压轴题型，综合性强（依据教材整理与复习板块）'
};

window.KD_MASTERY = ['识记', '理解', '运用', '迁移'];

/* diff: 1-5 难度；score: 典型分值；min: 建议单块用时(分钟) */
window.KAODIAN = [
  /* ================= 数学 · 五年级上册 ================= */
  { id: 'MA-5A-U01-01', subject: '数学', grade: '5A', unit: '第1单元 小数乘法', point: '小数乘整数、小数乘小数的竖式计算与积的小数位数', freq: '高频', basis: 'B1', types: ['直接写出得数', '竖式计算', '递等式计算'], score: 4, diff: 2, mastery: '运用', min: 20, example: '计算：2.06×15 ； 0.85×0.4（说明积有几位小数）' },
  { id: 'MA-5A-U01-02', subject: '数学', grade: '5A', unit: '第1单元 小数乘法', point: '积的近似数（四舍五入到指定数位）与解决实际问题（钱数、用量）', freq: '高频', basis: 'B1', types: ['解决问题', '填空'], score: 5, diff: 3, mastery: '运用', min: 20, example: '每千克苹果 6.8 元，买 2.5 千克，应付多少元（结果保留一位小数）？' },
  { id: 'MA-5A-U01-03', subject: '数学', grade: '5A', unit: '第1单元 小数乘法', point: '整数乘法运算定律推广到小数（简便计算）', freq: '高频', basis: 'B1', types: ['简便计算', '递等式'], score: 4, diff: 3, mastery: '运用', min: 20, example: '简便计算：0.25×8.5×4 ； 1.02×99' },
  { id: 'MA-5A-U02-01', subject: '数学', grade: '5A', unit: '第2单元 位置', point: '用数对表示位置（先列后行）及在方格纸上按数对找点', freq: '中频', basis: 'B2', types: ['填空', '作图'], score: 3, diff: 2, mastery: '运用', min: 15, example: '小明坐在第 3 列第 4 行，用数对表示是（　，　）。' },
  { id: 'MA-5A-U03-01', subject: '数学', grade: '5A', unit: '第3单元 小数除法', point: '除数是整数/小数的除法竖式，商的小数点对齐与移位', freq: '高频', basis: 'B1', types: ['竖式计算', '直接写出得数'], score: 4, diff: 3, mastery: '运用', min: 25, example: '计算：7.65÷0.9 ； 2.4÷16' },
  { id: 'MA-5A-U03-02', subject: '数学', grade: '5A', unit: '第3单元 小数除法', point: '循环小数的意义与简便记法，商的近似数', freq: '中频', basis: 'B2', types: ['填空', '判断'], score: 3, diff: 2, mastery: '理解', min: 15, example: '把 4.6÷3 的商用循环小数简便记法表示，并保留两位小数。' },
  { id: 'MA-5A-U03-03', subject: '数学', grade: '5A', unit: '第3单元 小数除法', point: '解决问题：进一法与去尾法的选择', freq: '高频', basis: 'B1', types: ['解决问题'], score: 5, diff: 3, mastery: '迁移', min: 20, example: '2.5 千克香油分装小瓶，每瓶 0.4 千克，需要几个瓶子？（想清楚该用哪种取近似值方法）' },
  { id: 'MA-5A-U04-01', subject: '数学', grade: '5A', unit: '第4单元 可能性', point: '事件的确定性与不确定性，可能性大小的比较', freq: '低频', basis: 'B3', types: ['判断', '填空'], score: 2, diff: 1, mastery: '理解', min: 12, example: '袋中 5 个红球 1 个白球，任意摸一个，摸到哪种颜色的可能性大？' },
  { id: 'MA-5A-U05-01', subject: '数学', grade: '5A', unit: '第5单元 简易方程', point: '用字母表示数、表示数量关系与公式（如 a×b、2a）', freq: '中频', basis: 'B2', types: ['填空', '列式'], score: 3, diff: 2, mastery: '理解', min: 15, example: '一支笔 a 元，买 5 支花（　）元；正方形边长 a，周长是（　）。' },
  { id: 'MA-5A-U05-02', subject: '数学', grade: '5A', unit: '第5单元 简易方程', point: '方程的意义、等式性质与解方程（含 ax±b=c、a(x±b)=c）', freq: '高频', basis: 'B1', types: ['解方程', '递等式'], score: 5, diff: 3, mastery: '运用', min: 25, example: '解方程：3x+7.5=25.5 ； 2(x−4)=18' },
  { id: 'MA-5A-U05-03', subject: '数学', grade: '5A', unit: '第5单元 简易方程', point: '列方程解决实际问题（和倍、差倍、行程、总量关系）', freq: '高频', basis: 'B1', types: ['解决问题'], score: 6, diff: 4, mastery: '迁移', min: 30, example: '果园里桃树是梨树的 3 倍，两种树共 96 棵，梨树有多少棵？（列方程解）' },
  { id: 'MA-5A-U06-01', subject: '数学', grade: '5A', unit: '第6单元 多边形的面积', point: '平行四边形、三角形、梯形面积公式的推导与运用', freq: '高频', basis: 'B1', types: ['计算', '解决问题', '作图'], score: 6, diff: 3, mastery: '运用', min: 25, example: '梯形上底 4cm、下底 7cm、高 5cm，求面积；并说明公式为什么要除以 2。' },
  { id: 'MA-5A-U06-02', subject: '数学', grade: '5A', unit: '第6单元 多边形的面积', point: '组合图形面积（分割法、添补法）与等底等高的等积变形', freq: '高频', basis: 'B4', types: ['解决问题', '作图'], score: 6, diff: 4, mastery: '迁移', min: 30, example: '一块由长方形和三角形拼成的菜地，求它的面积（画出分割线并标注数据）。' },
  { id: 'MA-5A-U07-01', subject: '数学', grade: '5A', unit: '第7单元 数学广角—植树问题', point: '两端都栽/一端栽/两端不栽/封闭线路的间隔与棵数关系', freq: '中频', basis: 'B2', types: ['解决问题'], score: 5, diff: 3, mastery: '迁移', min: 20, example: '一条 100m 的小路一侧每隔 5m 栽一棵树，两端都栽，共栽多少棵？' },

  /* ================= 数学 · 五年级下册 ================= */
  { id: 'MA-5B-U01-01', subject: '数学', grade: '5B', unit: '第1单元 观察物体(三)', point: '根据三视图还原小正方体的摆法与个数判断', freq: '低频', basis: 'B3', types: ['作图', '选择'], score: 3, diff: 3, mastery: '理解', min: 15, example: '从正面、左面、上面看到的形状如图，最少需要几个小正方体？' },
  { id: 'MA-5B-U02-01', subject: '数学', grade: '5B', unit: '第2单元 因数与倍数', point: '因数、倍数的意义；2、3、5 的倍数特征；奇数偶数', freq: '高频', basis: 'B1', types: ['填空', '判断', '选择'], score: 4, diff: 2, mastery: '理解', min: 20, example: '在 24、45、90、111 中，同时是 2、3、5 的倍数的数是（　）。' },
  { id: 'MA-5B-U02-02', subject: '数学', grade: '5B', unit: '第2单元 因数与倍数', point: '质数与合数、分解质因数；最大公因数与最小公倍数', freq: '高频', basis: 'B1', types: ['填空', '解决问题'], score: 5, diff: 3, mastery: '运用', min: 25, example: '求 18 和 24 的最大公因数与最小公倍数，并说说你用的方法。' },
  { id: 'MA-5B-U03-01', subject: '数学', grade: '5B', unit: '第3单元 长方体和正方体', point: '长方体/正方体的特征、棱长总和与表面积计算', freq: '高频', basis: 'B1', types: ['计算', '解决问题'], score: 6, diff: 3, mastery: '运用', min: 25, example: '长 8dm、宽 5dm、高 4dm 的长方体木箱，做这个无盖木箱至少需要多少平方分米木板？' },
  { id: 'MA-5B-U03-02', subject: '数学', grade: '5B', unit: '第3单元 长方体和正方体', point: '体积与容积单位及换算（m³/dm³/cm³、L/mL）', freq: '高频', basis: 'B1', types: ['填空', '单位换算'], score: 4, diff: 3, mastery: '运用', min: 20, example: '3.5m³=（　）dm³ ； 2400mL=（　）L=（　）dm³' },
  { id: 'MA-5B-U03-03', subject: '数学', grade: '5B', unit: '第3单元 长方体和正方体', point: '体积计算与排水法求不规则物体体积', freq: '高频', basis: 'B4', types: ['解决问题'], score: 6, diff: 4, mastery: '迁移', min: 30, example: '长 20cm、宽 10cm 的容器中水面上升 3cm，放入的石块体积是多少？' },
  { id: 'MA-5B-U04-01', subject: '数学', grade: '5B', unit: '第4单元 分数的意义和性质', point: '分数的意义、分数与除法的关系、真分数与假分数互化', freq: '高频', basis: 'B1', types: ['填空', '选择'], score: 4, diff: 3, mastery: '理解', min: 20, example: '把 3 个饼平均分给 4 人，每人分得（　）个；把 7/3 化成带分数是（　）。' },
  { id: 'MA-5B-U04-02', subject: '数学', grade: '5B', unit: '第4单元 分数的意义和性质', point: '分数的基本性质、约分与通分，分数大小比较', freq: '高频', basis: 'B1', types: ['计算', '比较大小'], score: 4, diff: 3, mastery: '运用', min: 20, example: '把 18/24 约成最简分数；比较 5/8 与 7/12 的大小。' },
  { id: 'MA-5B-U04-03', subject: '数学', grade: '5B', unit: '第4单元 分数的意义和性质', point: '分数与小数的互化', freq: '中频', basis: 'B2', types: ['填空', '互化'], score: 3, diff: 2, mastery: '运用', min: 15, example: '0.375=（　）（最简分数）； 7/25=（　）（小数）' },
  { id: 'MA-5B-U05-01', subject: '数学', grade: '5B', unit: '第5单元 图形的运动(三)', point: '旋转的三要素（中心、方向、角度）与旋转作图', freq: '低频', basis: 'B3', types: ['作图', '填空'], score: 3, diff: 3, mastery: '运用', min: 15, example: '把三角形绕点 O 顺时针旋转 90°，画出旋转后的图形。' },
  { id: 'MA-5B-U06-01', subject: '数学', grade: '5B', unit: '第6单元 分数的加法和减法', point: '同分母、异分母分数加减法与分数加减混合运算', freq: '高频', basis: 'B1', types: ['计算', '简便计算'], score: 5, diff: 3, mastery: '运用', min: 25, example: '计算：5/6−1/4+2/3 ； 简便计算 3/7+5/9+4/7' },
  { id: 'MA-5B-U07-01', subject: '数学', grade: '5B', unit: '第7单元 折线统计图', point: '单式/复式折线统计图的绘制、读图与趋势描述预测', freq: '中频', basis: 'B2', types: ['作图', '统计分析'], score: 5, diff: 2, mastery: '运用', min: 20, example: '根据表中数据完成折线统计图，并说说气温变化趋势。' },
  { id: 'MA-5B-U08-01', subject: '数学', grade: '5B', unit: '第8单元 数学广角—找次品', point: '天平称量最优策略（平均分三份）', freq: '低频', basis: 'B3', types: ['解决问题'], score: 4, diff: 4, mastery: '迁移', min: 20, example: '9 个零件中有 1 个次品(轻)，用天平至少称几次一定能找出来？' },

  /* ================= 数学 · 六年级上册 ================= */
  { id: 'MA-6A-U01-01', subject: '数学', grade: '6A', unit: '第1单元 分数乘法', point: '分数乘整数/分数的计算与约分技巧', freq: '高频', basis: 'B1', types: ['计算', '直接写出得数'], score: 4, diff: 2, mastery: '运用', min: 20, example: '计算：7/8×4 ； 5/9×3/10' },
  { id: 'MA-6A-U01-02', subject: '数学', grade: '6A', unit: '第1单元 分数乘法', point: '求一个数的几分之几是多少（含连续求两次）', freq: '高频', basis: 'B1', types: ['解决问题'], score: 6, diff: 3, mastery: '运用', min: 25, example: '一本书 240 页，第一天看了全书的 1/4，第二天看了余下的 1/3，第二天看了多少页？' },
  { id: 'MA-6A-U01-03', subject: '数学', grade: '6A', unit: '第1单元 分数乘法', point: '倒数的意义与求法', freq: '中频', basis: 'B2', types: ['填空'], score: 2, diff: 1, mastery: '识记', min: 10, example: '0.25 的倒数是（　）；1 的倒数是（　）；0 有没有倒数？' },
  { id: 'MA-6A-U02-01', subject: '数学', grade: '6A', unit: '第2单元 位置与方向(二)', point: '用方向和距离确定位置、描述简单的行走路线', freq: '中频', basis: 'B2', types: ['填空', '作图'], score: 4, diff: 3, mastery: '运用', min: 20, example: '灯塔在轮船北偏东 30° 方向 5km 处，请在图上标出灯塔的位置。' },
  { id: 'MA-6A-U03-01', subject: '数学', grade: '6A', unit: '第3单元 分数除法', point: '分数除法的意义与计算（乘倒数）、分数四则混合运算', freq: '高频', basis: 'B1', types: ['计算', '解方程'], score: 5, diff: 3, mastery: '运用', min: 25, example: '计算：3/4÷2/5 ； 解方程 2/3x=8/9' },
  { id: 'MA-6A-U03-02', subject: '数学', grade: '6A', unit: '第3单元 分数除法', point: '已知一个数的几分之几是多少，求这个数（列方程或除法）', freq: '高频', basis: 'B1', types: ['解决问题'], score: 6, diff: 4, mastery: '迁移', min: 30, example: '小明体重 35kg，是爸爸体重的 1/2，爸爸体重多少千克？' },
  { id: 'MA-6A-U03-03', subject: '数学', grade: '6A', unit: '第3单元 分数除法', point: '工程问题（把总量看作单位「1」）', freq: '高频', basis: 'B4', types: ['解决问题'], score: 6, diff: 5, mastery: '迁移', min: 30, example: '一项工程甲队 12 天完成，乙队 15 天完成，两队合作几天完成？' },
  { id: 'MA-6A-U04-01', subject: '数学', grade: '6A', unit: '第4单元 比', point: '比的意义、比与分数除法的关系、化简比与求比值', freq: '高频', basis: 'B1', types: ['填空', '计算'], score: 4, diff: 3, mastery: '运用', min: 20, example: '化简比 0.6∶1.5 ； 求比值 3/4∶2/3' },
  { id: 'MA-6A-U04-02', subject: '数学', grade: '6A', unit: '第4单元 比', point: '按比分配解决问题（配制、分配、周长面积比）', freq: '高频', basis: 'B1', types: ['解决问题'], score: 6, diff: 4, mastery: '迁移', min: 30, example: '一种糖水糖与水的质量比是 1∶24，配制 500g 糖水需要糖多少克？' },
  { id: 'MA-6A-U05-01', subject: '数学', grade: '6A', unit: '第5单元 圆', point: '圆的特征、半径直径关系与圆周长计算（C=πd=2πr）', freq: '高频', basis: 'B1', types: ['计算', '解决问题'], score: 5, diff: 3, mastery: '运用', min: 25, example: '一个圆的半径 4cm，求周长；周长 18.84cm 的圆半径是多少？' },
  { id: 'MA-6A-U05-02', subject: '数学', grade: '6A', unit: '第5单元 圆', point: '圆面积公式推导与计算（S=πr²），环形面积', freq: '高频', basis: 'B1', types: ['计算', '解决问题'], score: 6, diff: 4, mastery: '运用', min: 25, example: '外圆半径 5cm、内圆半径 3cm 的环形，面积是多少平方厘米？' },
  { id: 'MA-6A-U05-03', subject: '数学', grade: '6A', unit: '第5单元 圆', point: '与圆有关的组合图形面积（含扇形、半圆、割补）', freq: '高频', basis: 'B4', types: ['解决问题', '作图'], score: 7, diff: 5, mastery: '迁移', min: 30, example: '正方形边长 4cm，其中画一个最大的圆，求阴影部分面积。' },
  { id: 'MA-6A-U06-01', subject: '数学', grade: '6A', unit: '第6单元 百分数(一)', point: '百分数的意义与分数、小数互化', freq: '高频', basis: 'B1', types: ['填空', '互化'], score: 4, diff: 2, mastery: '运用', min: 20, example: '0.85=（　）% ； 3/8=（　）% ； 120%=（　）（小数）' },
  { id: 'MA-6A-U06-02', subject: '数学', grade: '6A', unit: '第6单元 百分数(一)', point: '求一个数是另一个数的百分之几；求百分率（合格率、出芽率）', freq: '高频', basis: 'B1', types: ['解决问题'], score: 5, diff: 3, mastery: '运用', min: 25, example: '种子 500 粒，发芽 480 粒，发芽率是多少？' },
  { id: 'MA-6A-U07-01', subject: '数学', grade: '6A', unit: '第7单元 扇形统计图', point: '扇形统计图的读图、部分与整体关系、统计图选择', freq: '中频', basis: 'B2', types: ['统计分析', '选择'], score: 5, diff: 3, mastery: '运用', min: 20, example: '某班喜欢各科的人数占比如图，已知全班 40 人，喜欢数学的有多少人？' },
  { id: 'MA-6A-U08-01', subject: '数学', grade: '6A', unit: '第8单元 数学广角—数与形', point: '数形结合发现规律（连续奇数和、图形数列）', freq: '中频', basis: 'B4', types: ['找规律', '解决问题'], score: 5, diff: 4, mastery: '迁移', min: 20, example: '1+3+5+7+…+19=（　），你发现了什么规律？' },

  /* ================= 数学 · 六年级下册 ================= */
  { id: 'MA-6B-U01-01', subject: '数学', grade: '6B', unit: '第1单元 负数', point: '负数的意义、用正负数表示相反意义的量、数轴与大小比较', freq: '中频', basis: 'B2', types: ['填空', '比较大小'], score: 4, diff: 2, mastery: '理解', min: 20, example: '零下 3℃ 记作（　）℃；把 −2、0.5、−1/2、1 按从小到大排列。' },
  { id: 'MA-6B-U02-01', subject: '数学', grade: '6B', unit: '第2单元 百分数(二)', point: '折扣、成数问题', freq: '高频', basis: 'B1', types: ['解决问题'], score: 5, diff: 3, mastery: '运用', min: 25, example: '一件衣服原价 240 元，打八五折出售，现价多少元？' },
  { id: 'MA-6B-U02-02', subject: '数学', grade: '6B', unit: '第2单元 百分数(二)', point: '税率、利率（利息=本金×利率×时间）', freq: '中频', basis: 'B2', types: ['解决问题'], score: 5, diff: 3, mastery: '运用', min: 20, example: '存入 5000 元，年利率 2.75%，存 2 年到期利息多少元？' },
  { id: 'MA-6B-U02-03', subject: '数学', grade: '6B', unit: '第2单元 百分数(二)', point: '求比一个数多/少百分之几；百分数增减的还原问题', freq: '高频', basis: 'B4', types: ['解决问题'], score: 6, diff: 5, mastery: '迁移', min: 30, example: '某商品先涨价 20%，再降价 20%，现价与原价相比是多了还是少了？' },
  { id: 'MA-6B-U03-01', subject: '数学', grade: '6B', unit: '第3单元 圆柱与圆锥', point: '圆柱的侧面积、表面积计算与实际应用（无盖、通风管）', freq: '高频', basis: 'B1', types: ['计算', '解决问题'], score: 6, diff: 4, mastery: '运用', min: 30, example: '底面直径 6dm、高 10dm 的圆柱形水桶（无盖），至少需要多少平方分米铁皮？' },
  { id: 'MA-6B-U03-02', subject: '数学', grade: '6B', unit: '第3单元 圆柱与圆锥', point: '圆柱体积 V=Sh 与圆锥体积 V=1/3Sh 及等积变形', freq: '高频', basis: 'B1', types: ['计算', '解决问题'], score: 7, diff: 4, mastery: '迁移', min: 30, example: '等底等高的圆柱与圆锥，圆柱体积比圆锥体积多 20cm³，圆锥体积是多少？' },
  { id: 'MA-6B-U04-01', subject: '数学', grade: '6B', unit: '第4单元 比例', point: '比例的意义与基本性质、解比例', freq: '高频', basis: 'B1', types: ['解比例', '判断'], score: 4, diff: 3, mastery: '运用', min: 20, example: '解比例：x∶3=8∶6 ； 判断 0.5∶0.2 与 5∶2 能否组成比例。' },
  { id: 'MA-6B-U04-02', subject: '数学', grade: '6B', unit: '第4单元 比例', point: '正比例与反比例的意义、判断与图象', freq: '高频', basis: 'B1', types: ['判断', '填空', '解决问题'], score: 5, diff: 4, mastery: '理解', min: 25, example: '判断：路程一定，速度和时间成（　）比例；单价一定，总价和数量成（　）比例。' },
  { id: 'MA-6B-U04-03', subject: '数学', grade: '6B', unit: '第4单元 比例', point: '比例尺（图上距离∶实际距离）与放大缩小', freq: '高频', basis: 'B1', types: ['解决问题', '作图'], score: 5, diff: 4, mastery: '运用', min: 25, example: '在比例尺 1∶2000000 的地图上量得两地相距 3.5cm，实际相距多少千米？' },
  { id: 'MA-6B-U05-01', subject: '数学', grade: '6B', unit: '第5单元 数学广角—鸽巢问题', point: '抽屉原理的基本模型与最坏情况分析', freq: '中频', basis: 'B4', types: ['解决问题'], score: 5, diff: 4, mastery: '迁移', min: 20, example: '任意 13 人中，至少有几人的生日在同一个月？为什么？' },
  { id: 'MA-6B-U06-01', subject: '数学', grade: '6B', unit: '第6单元 整理和复习', point: '行程问题（相遇、追及、往返）综合', freq: '高频', basis: 'B4', types: ['解决问题'], score: 7, diff: 5, mastery: '迁移', min: 30, example: '甲乙两地相距 240km，两车同时相对开出，速度分别是 60km/h、40km/h，几小时相遇？' },
  { id: 'MA-6B-U06-02', subject: '数学', grade: '6B', unit: '第6单元 整理和复习', point: '数的运算综合：四则混合与简便运算（含小数分数百分数互混）', freq: '高频', basis: 'B4', types: ['递等式计算', '简便计算'], score: 8, diff: 4, mastery: '运用', min: 30, example: '简便计算：2.5×3.2×1.25 ； 7/9×15+7/9×3' },
  { id: 'MA-6B-U06-03', subject: '数学', grade: '6B', unit: '第6单元 整理和复习', point: '常见量与单位换算综合（长度/面积/体积/质量/时间/人民币）', freq: '高频', basis: 'B4', types: ['单位换算', '填空'], score: 5, diff: 3, mastery: '运用', min: 20, example: '2.05 吨=（　）吨（　）千克 ； 1 时 15 分=（　）时' },
  { id: 'MA-6B-U06-04', subject: '数学', grade: '6B', unit: '第6单元 整理和复习', point: '找规律与简单推理（数列、图形周期、逻辑推理）', freq: '中频', basis: 'B4', types: ['找规律', '推理'], score: 5, diff: 4, mastery: '迁移', min: 20, example: '按 ○○△□○○△□… 排列，第 35 个图形是什么？' },

  /* ================= 语文 · 五年级 ================= */
  { id: 'CH-5A-U04-01', subject: '语文', grade: '5A', unit: '第4单元 古诗三首', point: '《示儿》《题临安邸》《己亥杂诗》默写与爱国情感体会', freq: '高频', basis: 'B1', types: ['古诗默写', '诗句理解'], score: 4, diff: 2, mastery: '识记', min: 20, example: '默写：「王师北定中原日，＿＿＿＿＿＿。」并说说诗人的心愿。' },
  { id: 'CH-5A-U05-01', subject: '语文', grade: '5A', unit: '第5单元 说明文', point: '常见说明方法（举例子、列数字、作比较、打比方）辨识与作用分析', freq: '高频', basis: 'B1', types: ['阅读理解', '简答'], score: 5, diff: 3, mastery: '运用', min: 25, example: '「太阳会发光、会发热，是个大火球。」这句用了什么说明方法？有什么好处？' },
  { id: 'CH-5A-U07-01', subject: '语文', grade: '5A', unit: '第7单元 古诗词三首', point: '《山居秋暝》《枫桥夜泊》《长相思》默写与静态动态描写体会', freq: '高频', basis: 'B1', types: ['古诗默写', '赏析'], score: 4, diff: 3, mastery: '理解', min: 20, example: '「明月松间照，＿＿＿＿＿＿」写出了怎样的画面？属于动态还是静态描写？' },
  { id: 'CH-5A-U08-01', subject: '语文', grade: '5A', unit: '第8单元 古人谈读书', point: '文言短章朗读断句、常见实词（知、耻、厌、诲）与读书方法启示', freq: '中频', basis: 'B2', types: ['文言翻译', '简答'], score: 5, diff: 3, mastery: '理解', min: 25, example: '解释「敏而好学，不耻下问」中「耻」的意思，并翻译全句。' },
  { id: 'CH-5A-Z-01', subject: '语文', grade: '5A', unit: '专项·阅读', point: '提高阅读速度（抓关键词句、不回读）与提取关键信息', freq: '中频', basis: 'B2', types: ['阅读理解'], score: 4, diff: 2, mastery: '运用', min: 20, example: '用 3 分钟读完短文，说出文章讲了哪几件事。' },
  { id: 'CH-5B-U01-01', subject: '语文', grade: '5B', unit: '第1单元 古诗三首', point: '《四时田园杂兴(其三十一)》《稚子弄冰》《村晚》默写与童趣理解', freq: '高频', basis: 'B1', types: ['古诗默写', '诗句理解'], score: 4, diff: 2, mastery: '识记', min: 20, example: '默写《村晚》后两句，说说牧童给你什么印象。' },
  { id: 'CH-5B-U04-01', subject: '语文', grade: '5B', unit: '第4单元 古诗三首', point: '《从军行》《秋夜将晓出篱门迎凉有感》《闻官军收河南河北》默写与情感', freq: '高频', basis: 'B1', types: ['古诗默写', '赏析'], score: 4, diff: 3, mastery: '理解', min: 20, example: '「遗民泪尽胡尘里，＿＿＿＿＿＿」表达了诗人怎样的心情？' },
  { id: 'CH-5B-U05-01', subject: '语文', grade: '5B', unit: '第5单元 人物描写', point: '人物描写方法（动作、语言、神态、心理、外貌）与作用', freq: '高频', basis: 'B1', types: ['阅读理解', '仿写'], score: 6, diff: 3, mastery: '迁移', min: 25, example: '画出文中描写小嘎子动作的句子，说说体现了他什么特点。' },
  { id: 'CH-5B-U06-01', subject: '语文', grade: '5B', unit: '第6单元 文言文', point: '《自相矛盾》寓意与文言词句（誉、陷、弗、应）', freq: '中频', basis: 'B2', types: ['文言翻译', '简答'], score: 5, diff: 3, mastery: '理解', min: 25, example: '「其人弗能应也」中「弗」是什么意思？这则寓言告诉我们什么道理？' },
  { id: 'CH-5B-U08-01', subject: '语文', grade: '5B', unit: '第8单元 语言的艺术', point: '《杨氏之子》语言机智体会与文言断句', freq: '中频', basis: 'B2', types: ['文言翻译', '赏析'], score: 5, diff: 3, mastery: '理解', min: 20, example: '「未闻孔雀是夫子家禽」妙在哪里？请说出两点。' },

  /* ================= 语文 · 六年级 ================= */
  { id: 'CH-6A-U01-01', subject: '语文', grade: '6A', unit: '第1单元 古诗词三首', point: '《宿建德江》《六月二十七日望湖楼醉书》《西江月·夜行黄沙道中》默写与画面想象', freq: '高频', basis: 'B1', types: ['古诗默写', '赏析'], score: 4, diff: 3, mastery: '理解', min: 20, example: '「野旷天低树，＿＿＿＿＿＿」写出了诗人怎样的心情？' },
  { id: 'CH-6A-U02-01', subject: '语文', grade: '6A', unit: '第2单元 革命岁月', point: '点面结合的写法（群体场面＋个体特写）辨识与运用', freq: '中频', basis: 'B2', types: ['阅读理解', '习作片段'], score: 5, diff: 4, mastery: '迁移', min: 25, example: '仿照《狼牙山五壮士》，用点面结合写一段运动会场面（80 字左右）。' },
  { id: 'CH-6A-U03-01', subject: '语文', grade: '6A', unit: '第3单元 有目的地阅读', point: '根据阅读目的选择材料与方法（略读、跳读、提取信息）', freq: '中频', basis: 'B2', types: ['非连续性文本', '阅读理解'], score: 5, diff: 3, mastery: '运用', min: 20, example: '为了「学会玩竹节人」，你会重点读哪些段落？为什么？' },
  { id: 'CH-6A-U04-01', subject: '语文', grade: '6A', unit: '第4单元 小说', point: '小说三要素（人物、情节、环境）与环境描写的作用', freq: '高频', basis: 'B1', types: ['阅读理解', '简答'], score: 6, diff: 4, mastery: '迁移', min: 25, example: '《桥》中对雨水和洪水的描写有什么作用？（至少两点）' },
  { id: 'CH-6A-U05-01', subject: '语文', grade: '6A', unit: '第5单元 围绕中心意思写', point: '习作：确定中心，选取不同事例分层次表达', freq: '高频', basis: 'B1', types: ['习作'], score: 30, diff: 4, mastery: '迁移', min: 35, example: '以「暖」为题写一篇 450 字左右的记事作文，用两个事例表现中心。' },
  { id: 'CH-6A-U06-01', subject: '语文', grade: '6A', unit: '第6单元 古诗三首', point: '《浪淘沙(其一)》《江南春》《书湖阴先生壁》默写与写景手法', freq: '高频', basis: 'B1', types: ['古诗默写', '赏析'], score: 4, diff: 3, mastery: '识记', min: 20, example: '「一水护田将绿绕，＿＿＿＿＿＿」用了什么修辞手法？' },
  { id: 'CH-6A-U07-01', subject: '语文', grade: '6A', unit: '第7单元 文言文二则', point: '《伯牙鼓琴》《书戴嵩画牛》文言实词与知音、实践出真知主题', freq: '高频', basis: 'B1', types: ['文言翻译', '简答'], score: 6, diff: 4, mastery: '理解', min: 25, example: '翻译「巍巍乎若太山」，并说说锺子期为何被称为伯牙的「知音」。' },
  { id: 'CH-6B-U01-01', subject: '语文', grade: '6B', unit: '第1单元 古诗三首', point: '《寒食》《迢迢牵牛星》《十五夜望月》默写与民俗节日文化', freq: '高频', basis: 'B1', types: ['古诗默写', '文化常识'], score: 4, diff: 3, mastery: '识记', min: 20, example: '「今夜月明人尽望，＿＿＿＿＿＿」出自哪首诗？写的是哪个传统节日？' },
  { id: 'CH-6B-U04-01', subject: '语文', grade: '6B', unit: '第4单元 古诗三首', point: '《马诗》《石灰吟》《竹石》默写与托物言志手法', freq: '高频', basis: 'B1', types: ['古诗默写', '赏析'], score: 5, diff: 3, mastery: '理解', min: 20, example: '《竹石》借竹子表达了作者怎样的品格？这种写法叫什么？' },
  { id: 'CH-6B-U05-01', subject: '语文', grade: '6B', unit: '第5单元 文言文二则', point: '《学弈》《两小儿辩日》文言词句与专心致志、实证精神', freq: '高频', basis: 'B1', types: ['文言翻译', '简答'], score: 6, diff: 4, mastery: '理解', min: 25, example: '翻译「思援弓缴而射之」；《两小儿辩日》中孔子「不能决」说明了什么？' },
  { id: 'CH-6B-U02-01', subject: '语文', grade: '6B', unit: '第2单元 外国名著', point: '名著阅读（《鲁滨逊漂流记》《汤姆·索亚历险记》）情节与人物评价', freq: '中频', basis: 'B2', types: ['名著常识', '简答'], score: 5, diff: 3, mastery: '理解', min: 20, example: '鲁滨逊在荒岛上做了哪几件事？你从中看到他什么品质？' },

  /* ================= 语文 · 专项（毕业总复习） ================= */
  { id: 'CH-ZX-01', subject: '语文', grade: '6B', unit: '专项·字词', point: '易错字音（多音字、前后鼻音）与形近字辨析', freq: '高频', basis: 'B4', types: ['选择', '填空', '看拼音写词语'], score: 6, diff: 3, mastery: '识记', min: 20, example: '给加点字注音：「和睦」「勉强」「露出」；辨析「即」与「既」。' },
  { id: 'CH-ZX-02', subject: '语文', grade: '6B', unit: '专项·词语', point: '成语理解与运用（含近反义词、词语搭配）', freq: '高频', basis: 'B4', types: ['选择', '填空'], score: 6, diff: 3, mastery: '运用', min: 25, example: '选词填空：他做事＿＿＿（一丝不苟／一心一意），从不出错。' },
  { id: 'CH-ZX-03', subject: '语文', grade: '6B', unit: '专项·句子', point: '病句修改（成分残缺、搭配不当、语序、重复、前后矛盾）', freq: '高频', basis: 'B4', types: ['修改病句'], score: 5, diff: 4, mastery: '运用', min: 25, example: '修改：通过这次活动，使我明白了团结的重要性。' },
  { id: 'CH-ZX-04', subject: '语文', grade: '6B', unit: '专项·句子', point: '句式变换（陈述句↔反问句、直接↔间接引语、扩句缩句、被字把字句）', freq: '高频', basis: 'B4', types: ['句式变换'], score: 6, diff: 4, mastery: '运用', min: 25, example: '改为反问句：这么美的景色，我们应该珍惜。' },
  { id: 'CH-ZX-05', subject: '语文', grade: '6B', unit: '专项·句子', point: '修辞手法（比喻、拟人、排比、夸张、反问、设问）辨识与仿写', freq: '高频', basis: 'B4', types: ['选择', '仿写'], score: 5, diff: 3, mastery: '迁移', min: 25, example: '仿写拟人句：春风吹过，柳枝＿＿＿＿＿＿。' },
  { id: 'CH-ZX-06', subject: '语文', grade: '6B', unit: '专项·标点', point: '标点符号使用（引号、冒号、破折号、省略号、顿号与分号）', freq: '中频', basis: 'B4', types: ['加标点', '选择'], score: 4, diff: 3, mastery: '运用', min: 20, example: '给句子加标点：老师说 明天上午八点在校门口集合' },
  { id: 'CH-ZX-07', subject: '语文', grade: '6B', unit: '专项·阅读', point: '概括主要内容与段意（六要素法、题目扩展法）', freq: '高频', basis: 'B4', types: ['阅读理解', '简答'], score: 6, diff: 4, mastery: '迁移', min: 25, example: '用一句话概括本文主要内容（不超过 30 字）。' },
  { id: 'CH-ZX-08', subject: '语文', grade: '6B', unit: '专项·阅读', point: '体会思想感情与理解含义深刻的句子（联系上下文＋生活实际）', freq: '高频', basis: 'B4', types: ['阅读理解', '简答'], score: 6, diff: 4, mastery: '迁移', min: 30, example: '「他的背影渐渐模糊了」这句话你是怎么理解的？' },
  { id: 'CH-ZX-09', subject: '语文', grade: '6B', unit: '专项·阅读', point: '非连续性文本阅读（图表、说明书、通知的信息提取与推断）', freq: '中频', basis: 'B4', types: ['非连续性文本'], score: 5, diff: 3, mastery: '运用', min: 20, example: '根据公交时刻表，说明 7:20 出发能否在 8:00 前到校。' },
  { id: 'CH-ZX-10', subject: '语文', grade: '6B', unit: '专项·习作', point: '写人记事作文：选材真实、细节具体、首尾呼应', freq: '高频', basis: 'B4', types: ['习作'], score: 30, diff: 4, mastery: '迁移', min: 40, example: '以《难忘的一课》为题写一篇 500 字作文，要有一处细节描写。' },
  { id: 'CH-ZX-11', subject: '语文', grade: '6B', unit: '专项·习作', point: '应用文（书信、演讲稿、通知、发言稿）格式与语言得体', freq: '中频', basis: 'B4', types: ['应用文'], score: 8, diff: 3, mastery: '运用', min: 25, example: '为「毕业典礼」写一份 150 字的发言稿开头。' },
  { id: 'CH-ZX-12', subject: '语文', grade: '6B', unit: '专项·积累', point: '四大名著与文学常识（作者、人物、名句、歇后语、名言警句）', freq: '中频', basis: 'B4', types: ['填空', '连线', '选择'], score: 5, diff: 3, mastery: '识记', min: 20, example: '「三顾茅庐」出自（　），主要人物是（　）。' },
  { id: 'CH-ZX-13', subject: '语文', grade: '6B', unit: '专项·口语交际', point: '口语交际与情境表达（劝说、辩论、演讲、介绍）', freq: '低频', basis: 'B3', types: ['情境表达'], score: 4, diff: 3, mastery: '运用', min: 15, example: '同学沉迷手机游戏，你怎样劝说他？（说两点理由）' },

  /* ================= 英语 · 五年级（PEP） ================= */
  { id: 'EN-5A-U01-01', subject: '英语', grade: '5A', unit: 'Unit 1 What\'s he like?', point: '描述人物外貌与性格的形容词（kind, funny, strict, hard-working, helpful）', freq: '高频', basis: 'B1', types: ['选择', '填空', '看图写句'], score: 4, diff: 2, mastery: '运用', min: 20, example: 'Our new teacher is very ____ (和善的). She often helps us.' },
  { id: 'EN-5A-U01-02', subject: '英语', grade: '5A', unit: 'Unit 1 What\'s he like?', point: '句型 Who\'s your…? / What\'s he like? / Is he…? Yes, he is.', freq: '高频', basis: 'B1', types: ['问答配对', '句型转换'], score: 4, diff: 2, mastery: '运用', min: 20, example: '—____ your English teacher? —Mr Young. —What\'s he ____? —He\'s funny.' },
  { id: 'EN-5A-U02-01', subject: '英语', grade: '5A', unit: 'Unit 2 My week', point: '星期名称与频度表达（on Mondays）、What do you do on…?', freq: '高频', basis: 'B1', types: ['填空', '连词成句'], score: 4, diff: 2, mastery: '运用', min: 20, example: 'What do you do on ____ (星期六)? — I often read books.' },
  { id: 'EN-5A-U03-01', subject: '英语', grade: '5A', unit: 'Unit 3 What would you like?', point: '食物词汇与 What would you like? I\'d like… / What\'s your favourite food?', freq: '高频', basis: 'B1', types: ['情景对话', '选择'], score: 4, diff: 2, mastery: '运用', min: 20, example: '—What would you like to drink? —I\'d ____ some water, please.' },
  { id: 'EN-5A-U04-01', subject: '英语', grade: '5A', unit: 'Unit 4 What can you do?', point: '情态动词 can/can\'t 表能力与 Can you…? 的问答', freq: '高频', basis: 'B1', types: ['选择', '句型转换'], score: 4, diff: 2, mastery: '运用', min: 20, example: '—Can you play the pipa? —No, I ____. But I can dance.' },
  { id: 'EN-5A-U05-01', subject: '英语', grade: '5A', unit: 'Unit 5 There is a big bed', point: 'There be 句型（is/are）与方位介词 in/on/under/behind/beside/in front of', freq: '高频', basis: 'B1', types: ['填空', '看图写句', '改错'], score: 5, diff: 3, mastery: '运用', min: 25, example: 'There ____ (be) two photos and a clock on the wall.' },
  { id: 'EN-5A-U06-01', subject: '英语', grade: '5A', unit: 'Unit 6 In a nature park', point: '自然景物词汇与 there be 否定/疑问（Is there…? Are there any…?）', freq: '高频', basis: 'B1', types: ['句型转换', '问答'], score: 5, diff: 3, mastery: '运用', min: 20, example: '改一般疑问句：There are some tall buildings in the city.' },
  { id: 'EN-5B-U01-01', subject: '英语', grade: '5B', unit: 'Unit 1 My day', point: '日常作息动词短语与时间表达（at 6:30, in the morning）', freq: '高频', basis: 'B1', types: ['连线', '填空', '书面表达'], score: 5, diff: 2, mastery: '运用', min: 20, example: 'I usually get up ____ 6:30 ____ the morning.' },
  { id: 'EN-5B-U01-02', subject: '英语', grade: '5B', unit: 'Unit 1 My day', point: '一般现在时第三人称单数（动词加 s/es，does 的否定疑问）', freq: '高频', basis: 'B1', types: ['用适当形式填空', '改错'], score: 6, diff: 4, mastery: '运用', min: 30, example: 'My father ____ (watch) TV after dinner. He doesn\'t ____ (go) to bed late.' },
  { id: 'EN-5B-U02-01', subject: '英语', grade: '5B', unit: 'Unit 2 My favourite season', point: '四季与天气词汇；Which season do you like best? Why? Because…', freq: '高频', basis: 'B1', types: ['问答', '书面表达'], score: 5, diff: 3, mastery: '运用', min: 20, example: 'I like winter best ____ I can play with snow.' },
  { id: 'EN-5B-U03-01', subject: '英语', grade: '5B', unit: 'Unit 3 My school calendar', point: '月份与序数词、日期表达（When is…? It\'s in October. / on the 1st）', freq: '高频', basis: 'B1', types: ['填空', '选择'], score: 5, diff: 3, mastery: '运用', min: 25, example: 'My birthday is ____ (在) June. It\'s on the ____ (12) of June.' },
  { id: 'EN-5B-U05-01', subject: '英语', grade: '5B', unit: 'Unit 5 Whose dog is it?', point: '物主代词（my/mine, your/yours, his, hers）与 Whose…? 的问答', freq: '高频', basis: 'B1', types: ['选择', '填空'], score: 5, diff: 4, mastery: '运用', min: 25, example: '—Whose book is this? —It\'s ____ (她的). ____ (我的) is on the desk.' },
  { id: 'EN-5B-U05-02', subject: '英语', grade: '5B', unit: 'Unit 5 Whose dog is it?', point: '现在进行时（be + doing）的构成与用法', freq: '高频', basis: 'B1', types: ['用适当形式填空', '看图写句'], score: 6, diff: 4, mastery: '运用', min: 30, example: 'Look! The dog ____ (play) with a ball. The children ____ (run) on the grass.' },
  { id: 'EN-5B-U06-01', subject: '英语', grade: '5B', unit: 'Unit 6 Work quietly!', point: '祈使句与公共场所提示语（Keep quiet! / Don\'t…）', freq: '中频', basis: 'B2', types: ['选择', '情景匹配'], score: 4, diff: 2, mastery: '运用', min: 15, example: 'In the library: ____ talk loudly. (Don\'t / Doesn\'t)' },

  /* ================= 英语 · 六年级（PEP） ================= */
  { id: 'EN-6A-U01-01', subject: '英语', grade: '6A', unit: 'Unit 1 How can I get there?', point: '场所词汇与问路指路（Where is…? Turn left/right, go straight）', freq: '高频', basis: 'B1', types: ['情景对话', '看图填空'], score: 5, diff: 3, mastery: '运用', min: 20, example: '—How can I get to the hospital? —____ left at the bookstore.' },
  { id: 'EN-6A-U02-01', subject: '英语', grade: '6A', unit: 'Unit 2 Ways to go to school', point: '交通方式（by bus/on foot）与交通规则表达', freq: '高频', basis: 'B1', types: ['填空', '选择'], score: 4, diff: 2, mastery: '运用', min: 20, example: 'I go to school ____ foot, but my sister goes ____ bike.' },
  { id: 'EN-6A-U03-01', subject: '英语', grade: '6A', unit: 'Unit 3 My weekend plan', point: '一般将来时 be going to（含 What are you going to do? When/Where）', freq: '高频', basis: 'B1', types: ['用适当形式填空', '句型转换', '书面表达'], score: 6, diff: 4, mastery: '运用', min: 30, example: 'I ____ ____ ____ (打算去) visit my grandparents this weekend.' },
  { id: 'EN-6A-U04-01', subject: '英语', grade: '6A', unit: 'Unit 4 I have a pen pal', point: '爱好表达（动词 +ing）与 What are your hobbies? / He likes doing…', freq: '高频', basis: 'B1', types: ['填空', '书面表达'], score: 5, diff: 3, mastery: '运用', min: 25, example: 'My pen pal likes ____ (read) stories and ____ (swim).' },
  { id: 'EN-6A-U05-01', subject: '英语', grade: '6A', unit: 'Unit 5 What does he do?', point: '职业词汇与 What does he/she do? He is a…（三单提问）', freq: '高频', basis: 'B1', types: ['问答', '选择'], score: 5, diff: 3, mastery: '运用', min: 20, example: '—What ____ your mother do? —She ____ a nurse.' },
  { id: 'EN-6A-U06-01', subject: '英语', grade: '6A', unit: 'Unit 6 How do you feel?', point: '情绪形容词（angry, afraid, sad, worried）与建议句型 You should…', freq: '中频', basis: 'B2', types: ['情景匹配', '选择'], score: 4, diff: 3, mastery: '运用', min: 20, example: 'He is ____ (生气的). You should take a deep breath.' },
  { id: 'EN-6B-U01-01', subject: '英语', grade: '6B', unit: 'Unit 1 How tall are you?', point: '形容词比较级（-er / more, than）与 How tall/heavy/long…?', freq: '高频', basis: 'B1', types: ['用适当形式填空', '比较句'], score: 6, diff: 4, mastery: '运用', min: 30, example: 'I\'m 1.55m. You\'re 1.60m. You are ____ (tall) than me.' },
  { id: 'EN-6B-U02-01', subject: '英语', grade: '6B', unit: 'Unit 2 Last weekend', point: '一般过去时（规则动词 -ed 与 was/were）', freq: '高频', basis: 'B1', types: ['用适当形式填空', '改写句子'], score: 6, diff: 4, mastery: '运用', min: 30, example: 'Last weekend I ____ (wash) my clothes and ____ (be) very tired.' },
  { id: 'EN-6B-U03-01', subject: '英语', grade: '6B', unit: 'Unit 3 Where did you go?', point: '不规则动词过去式（went, saw, ate, took, rode）与 Did you…? 问答', freq: '高频', basis: 'B1', types: ['填空', '句型转换'], score: 6, diff: 5, mastery: '运用', min: 30, example: '—____ you ____ (go) to Hangzhou? —Yes, I did. I ____ (see) the West Lake.' },
  { id: 'EN-6B-U04-01', subject: '英语', grade: '6B', unit: 'Unit 4 Then and now', point: '今昔对比表达（used to / before…now…）与时态混用辨析', freq: '中频', basis: 'B2', types: ['选择', '书面表达'], score: 5, diff: 4, mastery: '迁移', min: 25, example: 'Before, I ____ (be) short. Now I ____ (be) tall.' },

  /* ================= 英语 · 专项（毕业总复习） ================= */
  { id: 'EN-ZX-01', subject: '英语', grade: '6B', unit: '专项·语法', point: '四种时态综合辨析（一般现在/现在进行/一般过去/一般将来）', freq: '高频', basis: 'B4', types: ['用适当形式填空', '选择'], score: 8, diff: 5, mastery: '迁移', min: 35, example: 'Look, she ____ (dance). She ____ (dance) every day and she ____ (dance) at the show tomorrow.' },
  { id: 'EN-ZX-02', subject: '英语', grade: '6B', unit: '专项·语法', point: '名词单复数与可数不可数（some/any/much/many/a lot of）', freq: '高频', basis: 'B4', types: ['填空', '改错'], score: 5, diff: 4, mastery: '运用', min: 25, example: 'There are three ____ (box) and some ____ (water) on the table.' },
  { id: 'EN-ZX-03', subject: '英语', grade: '6B', unit: '专项·语法', point: '人称代词、物主代词与反身代词的选用', freq: '高频', basis: 'B4', types: ['选择', '填空'], score: 5, diff: 4, mastery: '运用', min: 20, example: 'This is ____ (I) bag. Please give it to ____ (I).' },
  { id: 'EN-ZX-04', subject: '英语', grade: '6B', unit: '专项·语法', point: '特殊疑问词辨析（what/where/when/who/whose/why/how many/how much）', freq: '高频', basis: 'B4', types: ['对划线部分提问', '选择'], score: 6, diff: 4, mastery: '运用', min: 25, example: '对划线部分提问：He goes to school <u>by bus</u>.' },
  { id: 'EN-ZX-05', subject: '英语', grade: '6B', unit: '专项·阅读', point: '阅读理解（细节定位、主旨判断、词义猜测、判断正误）', freq: '高频', basis: 'B4', types: ['阅读理解', '判断正误'], score: 10, diff: 4, mastery: '迁移', min: 30, example: '读一篇 100 词的短文，完成 5 小题（先读题干，再回文定位）。' },
  { id: 'EN-ZX-06', subject: '英语', grade: '6B', unit: '专项·写作', point: '书面表达（我的一天/我的朋友/我的假期/我的计划，5 句以上）', freq: '高频', basis: 'B4', types: ['书面表达'], score: 10, diff: 4, mastery: '迁移', min: 30, example: '以 My Summer Holiday Plan 为题写 5-6 句话（用 be going to）。' },
  { id: 'EN-ZX-07', subject: '英语', grade: '6B', unit: '专项·语音', point: '字母组合发音与音标辨音（元音字母开闭音节、ea/oo/ir/ar 等）', freq: '中频', basis: 'B4', types: ['选出发音不同的一项'], score: 4, diff: 3, mastery: '识记', min: 15, example: '选出划线部分发音不同的一项：A. book B. food C. good' },
  { id: 'EN-ZX-08', subject: '英语', grade: '6B', unit: '专项·听力', point: '听力综合（听词辨音、听句选答、听对话选图、听短文判断）', freq: '高频', basis: 'B4', types: ['听力'], score: 20, diff: 3, mastery: '运用', min: 20, example: '见「听力训练」模块，按题型逐项过关。' },
  { id: 'EN-ZX-09', subject: '英语', grade: '6B', unit: '专项·口语', point: '口语面试（自我介绍、朗读、看图说话、话题问答）', freq: '中频', basis: 'B4', types: ['口语'], score: 10, diff: 3, mastery: '迁移', min: 20, example: '见「口语练习」模块，按主题包练习并自评。' }
];

/* 学科 → 单元清单（用于筛选下拉） */
window.KD_UNITS = (function () {
  var m = {};
  window.KAODIAN.forEach(function (k) {
    m[k.subject] = m[k.subject] || {};
    m[k.subject][k.grade] = m[k.subject][k.grade] || [];
    if (m[k.subject][k.grade].indexOf(k.unit) < 0) m[k.subject][k.grade].push(k.unit);
  });
  return m;
})();
