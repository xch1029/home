var days = [
  {
    date: '2018-10-08',
    time: '8:56',
    title: '国庆小结',
    content: `
      假期的时间总是飞快的啊，不论时间多长。好想继续着假期啊，可惜，早晨还是强忍着睡意，来上班了。
      国庆里，我和小倩去泡了温泉，玩了VR，看了电影“无双”，逛了森林摩尔。小倩自己去和发小会面了，
      我没有去，或者说是人家不想带上我。国庆在家睡了很多觉，也看了很多直播，学了点习，也玩了点游戏。
      从此刻起，忘记国庆，回归工作，回归正常的生活轨迹！
    `
  },
  {
    date: '2018-9-29',
    time: '8:26',
    title: '老丈人来了',
    content: `
      昨晚老丈人来南京了，然后我们集合了全家一起去吃多伦多海鲜自助，吃的很开心，尤其是那大猪蹄子，很不错。
      晚上，我被分配到了客厅的沙发上睡觉。让我经历了很多未曾经历的奇妙之事。如：小猫夜里玩的很凶，两只猫还会对峙发出很有
      挑衅的滋滋声，大猫的屎还能将我熏醒，小猫喜欢玩塑料袋，还喜欢用爪子扒沙发，这些在白天听起来很细微的声音，在夜间是如此的
      烦人。火车的瓜次瓜次的声音也是如此的清晰，再者，夜间为什么会有拖拉机的声音。冲马桶的声音。关门的声音。还有个很奇葩的事，清晨，
      我居然听到的鸡鸣，这TM谁在小区里养鸡啊，真是醉了，奇妙的一夜！
    `
  },
  {
    date: '2018-9-27',
    time: '10:50',
    title: '金融危机要来了',
    content: `
      今天显然还没到10月初，但是舅妈就向我要房租了，说没有钱交房贷了，他们的工资都没有发。我心一颤，中铁局啊，这是
      大公司啊，居然拖欠工资。舅妈说最长的时候，拖欠了半年。真是醉了。
      看来啊，这个社会上的钱真的都去房市里了啊，大家都成了房奴了。都是穷人。今天我在大街上看到的光鲜亮丽的小帅哥小姐姐，
      很可能只是个月光族啊。这个社会，真是看起来很有钱罢了！
    `
  },
  {
    date: '2018-9-25',
    time: '19:23',
    title: '加班的晚饭',
    content: `
      今天，经理请客吃饭，我们的经理挺有钱的，叫我们任性点，别点的太温柔。大家都点的热火朝天，我自己只点了蛋炒饭。
      没有别的意思，只是觉得，因为是被人请客，所以就很放纵的点菜的人，真是够了，这真的是中国社会的劣根性。占小便宜
      的人，普遍皆是，整个社会就是这样的存在。本人，愿做这一股清流，绝世而独立！
    `
  },
  {
    date: '2018-9-13',
    time: '15:58',
    title: 'git',
    content: `
                    最近沉迷于git的世界中啊，之前工作中用到git的地方挺少的，也就是下拉提交等，对git没有一个很好的认知。
                    这几天看了大量的git知识，越发觉得git真是个伟大的创造。工作流程太过精妙了。之前只会在可视化的工具中
                    使用git，现在很少用可视化工具了。感觉在命令行里敲git太jb爽了，还有这么点优越感呢！
                `
  },
  {
    date: '2018-9-13',
    time: '9:14',
    title: '早秋',
    content: `
                    或者已经是中秋了吧，清晨有点冷了，再加上下着小雨，更觉夏天不在。
                    早上不知道为什么眼睛有点小肿，希望不要是上次的麦粒肿。
                `
  },
  {
    date: '2018-9-10',
    time: '17:13',
    title: '明年买车',
    content: `
                    车的重要性对年轻人来说，应该不用我多说了吧？\n
                    2019年，车必须到手！
                `
  },
  {
    date: '2018-9-5',
    time: '9:10',
    title: 'The Second Anniversary',
    content: `
                    今天是个重要的日子哦，我和小倩相恋整两年啦。[/啤酒] [/啤酒] [/啤酒]
                `
  },
  {
    date: '2018-9-4',
    time: '9:00',
    title: '不易',
    content: `
                    这次吵架真的很不容易，以后都不敢随随便便吵架了，总结几个词吧，大难不死必有后福，三点半南京站，不忘初心，砥砺前行。
                `
  },
  {
    date: '2018-9-3',
    time: '23:00',
    title: '不堪一击',
    content: `
                    我的爱情，真的会如此不堪一击吗？
                `
  },
  {
    date: '2018-9-3',
    time: '22:53',
    title: '文档',
    content: `
                    只有看文档才能冷静，我不停的刷着github
                `
  },
  {
    date: '2018-9-3',
    time: '22:41',
    title: '现况',
    content: `
                    [冲动, 怒火]，怒火使人冲动，做出意想不到的事情！
                    
                `
  },
  {
    date: '2018-9-3',
    time: '22:37',
    title: '难受',
    content: `
                    为什么这么长时间的相处，我开始觉得自己不了解你更多了？
                    为什么我做的好多事情，总是能得到你的否定？
                    为什么？我如此不堪吗？还是我们不合适的地方开始凸显了？
                    互相腻了，不再珍惜对方了？
                `
  },
  {
    date: '2018-9-3',
    time: '22:26',
    title: '吵架',
    content: `
                    我做错了什么？感觉好累  :(
                `
  },
  {
    date: '2018-9-2',
    time: '14:10',
    title: '周日生活',
    content: `
                    昨天（周六），小倩陪我去医院洗牙，洗牙的过程对我来说是真的痛苦，20min难受的煎熬。中午去看望了下丈母娘，正好给她带了一双
                    adidas的运动鞋，阿姨试穿了下，很舒服。下午和小倩去南京国际博览会看了下南京国际14届软件展博会，比较失望，没有什么亮点。
                    今天，把漏水的水龙头修了一下，把马桶漏水的问题也解决了。下午打算和小倩去看‘碟中谍5’。
                    这就是生活的意义！真实！
                `
  },
  {
    date: '2018-8-10',
    time: '14:23',
    title: '知己难觅',
    content: `
                    技术上的知己真的好难找啊，之前在苏宁，是个挺大的前端组，认识了不少前端的小伙伴，但是后来，大家各奔东西后，基本就没有什么
                    联系了。张雷同志就挺好的，但是大家各自忙自己的事业去了，也是没有办法的事情。来到现在这个小公司后，更是感觉知己难觅啊，首先是
                    这里的人儿不怎么关注技术，在个就是前端现在就我一人。日常开发是有点无聊的，还没有可以聊聊的同事。是有点寂寞啊，想念在苏宁了，
                    人多，热闹！
                `
  },
  {
    date: '2018-5-7',
    time: '9:05',
    title: '一场事故',
    content: `
                    今天，周一，小雨，早上骑车有点快，路有点滑，途中有个老太太想过马路，我就刹车了。老太太不但没过马路，反而一脸恐慌。
                    来不及多想，‘碰！！！’，我被后面的电动车追尾了。我，迅雷不及掩耳之势，飞出自行车，左膝盖，右小腿，两个手掌，无一幸免。
                    具体细节不描述了，因为我要工作啦
                `
  },
  {
    date: '2018-4-27',
    time: '16:16',
    title: '自我迷失',
    content: `
                    最近自我迷失的严重，技术上的瓶颈期，挣钱不够多，工作上的烦心事，同事的离职。是自己迷失自我的主要原因。
                    什么样的生活是我想要的？这个问题其实是简单的，就是有大量的money，然后快乐的生活着。
                `
  },
  {
    date: '2018-4-26',
    time: '17:44',
    title: '人为了挣钱，付出的太多了',
    content: `
                    我将大部分的时间用来工作，赚取生活费。这到底是不是值得的呢？怎么样的生活才是我的追求？
                `
  },
  {
    date: '2018-4-24',
    time: '15:13',
    title: '最近都是996(2)',
    content: `
                    最近还是很忙，周边有的同事还是离职了，我也在想，人生的意思到底何在？
                `
  },
  {
    date: '2018-3-24',
    time: '17:06',
    title: '最近都是996',
    content: `
                    最近挺忙的，手上有个项目挺赶的，老板对之的期望也挺大的，再加上我是这个项目前端的框架设计，任务自然就多了点，加油
                `
  },
  {
    date: '2018-2-2',
    time: '14:18',
    title: '今年不在家过年',
    content: `
                    今年年前只有一天时间，前些时候我决定今年去小倩家送礼，但是又舍不得请假，
                    只能在小倩家过年。第一年不在家过年，有点伤感，那是少年时代的终结，自己
                    要成立另一个家庭了，小华再见，中华你好
                `
  },
  {
    date: '2018-1-15',
    time: '11:26',
    title: '真实',
    content: `
                    平时日，很多碌碌无为的忙碌让你感到充实，这其实并不是真实。----《无问西东》
                `
  },
  {
    date: '2018-1-11',
    time: '16:38',
    title: '身体有点不适啊，老哥',
    content: `
                    最近的一些状态，应该记录一下的，感冒，麦粒肿，唇干，溃疡，腰疼。呜呜呜
                `
  },
  {
    date: '2017-12-2',
    time: '15:48',
    title: '小黑',
    content: `
                    小黑啊，你让我难以释怀啊，我还没有好好和你玩呢，你的离开让我如此内疚与难过啊，你那么可爱，我却没来得及享受你的可爱
                `
  },
  {
    date: '2017-12-2',
    time: '11:27',
    title: '小黑你听见吗',
    content: `
                    小黑是我家的一条狗，六月初回老家出席好朋友小亮哥的婚礼，在家住了一晚。妈妈做了我们最爱吃的对虾，可美味了。我和小倩把虾肉吃了，
                    然后把虾头给小黑吃，小黑是一条很乖的狗狗，从来不挑食，但是虾头太大太尖锐了，小黑没有嚼碎就迫不及待的吃下去了，真是条贪吃的
                    狗狗呢，很可爱的一条。第二天早上，我们就出发去小亮哥的婚礼了，早上吃饭的时候，没有看到小黑，小黑还是条贪玩的狗狗，怎么不在我
                    们离开的时候，见我们一面啊，我心里还在埋怨小黑呢！今天才听姐姐说，小黑上次吃你们给的虾头，肠子被戳破了，死掉了。嗨，小黑。。
                    你是那么的可怜，那一夜你经历了怎样的痛苦呢？我的过失呀，害得你如此煎熬的失去生命，下次千万不要再做我的狗狗了，小黑呀，你听见了
                    吗？我好伤心啊，小黑，你在哪？
                `
  },
  {
    date: '2017-11-27',
    time: '8:54',
    title: '早上小倩在地铁里晕倒',
    content: `
                    因为赶时间，我们就跑了一段路，谁知道，地铁里的空气质量不太好，小倩出了很多虚汗，围巾也拿下了，衣服的拉链也拉下了，大约10s后，小倩
                    晕倒了。。。我蹲在地上，用手扇着她的脸：嗨，醒醒，嗨，醒醒。。。30s后，小倩苏醒了，我们在小市站下来休息了下，下次可不能这么赶着了。
                    还得加强身体的锻炼
                `
  },
  {
    date: '2017-11-26',
    time: '19:26',
    title: '这个周末，过的有点烦躁啊',
    content: `
                    在超市买菜的时候，居然和徐晓晓吵了一架。有失风度，这个周末有点不愉快，是风大的原因，还是明天就要星期一了，恩恩，早点过去吧
                `
  },
  {
    date: '2017-11-7',
    time: '10:19',
    title: '周末姐姐生了；小亮哥结婚了',
    content: `
                    这周末回家了一趟，姐姐生了个男孩。好兄弟小亮哥结婚了。岁月的流逝，你们能察觉吗
                `
  },
  {
    date: '2017-10-13',
    time: '22:09',
    title: '苏宁今天聚餐',
    content: `
                    天天都得加班哦，不说了，加油
                `
  },
  {
    date: '2017-10-8',
    time: '20:09',
    title: '国庆结束',
    content: `
                    今年的国庆八天小长假终于结束啦，不上班的日子总是美好与飞快的，但是那又能怎么办呢，总是抓不住啊。终于在国庆的时候见了小倩的妈妈，
                    哈哈哈！现在就是，调节生活节奏，开始新的生活，要为这个家，做更多担当啦！
                `
  },
  {
    date: '2017-9-25',
    time: '21:42',
    title: '在苏宁，要努力',
    content: `
                    苏宁总部的规模震撼到了我，中午的食堂就像是大学的学校一样，排了长长的队，加油，彩华
                `
  },
  {
    date: '2017-9-21',
    time: '15:52',
    title: '明天入驻苏宁',
    content: `
                    虽然没能入职苏宁，但是现在是以外包的形式进去的，希望在苏宁能提升自己的能力，这个平台对我来说还是
                    挺不错的，用的技术栈也是现在较新的，能和一些大牛在一起工作，还是很有挑战性的，那么下面我就要认真
                    了，我的目标就是能用技术打动苏宁的技术主管，然后能跳槽到苏宁，嗯！
                `
  },
  {
    date: '2017-9-5',
    time: '22:36',
    title: '育儿网面试未果',
    content: `
                    这个周末一直在准备育儿网的面试，面试前感觉信心满满的啊，肯定会过的，总计面试时间100mins，前部分都是
                    组长面试，问的问题也比较多，但是基本都答出来了，而且和他聊得还可以。但是到二面的时候，面试官是技术
                    主管，问的也都是些大方向的问题，像：PHP学多长时间可以开发啊，Object-C多久能学会呀，之类的。我被问蒙
                    了，老哥，我是来面试web前端的啊，你怎么问的都是非前端的东西，你要是不想要直接讲就行了啊，没必要这么
                    搞事情啊，哎，大专真是处处不待见啊。改进：让自己的技术更牛逼，拿出更好的作品，学得更广点，虽然只有
                    三点，但是好也不是容易的事情啊，告诉自己每天都不要松懈，加油，少年！
                `
  },
  {
    date: '2017-8-23',
    time: '21:36',
    title: '小倩倩想学前端，怎么办',
    content: `
                    她今天告诉我，她要学前端，叫我做她师傅，我答应了。
                `
  },
  {
    date: '2017-7-27',
    time: '9:35',
    title: '工作定下来了',
    content: `
                    昨天把工作定下来了，在集庆门大街，虽然挺远的，但是工作本身还不错，下面就是好好地工作，进一步提升自己，
                    承担点家里的房贷，好好爱家人，人嘛，为的就是生活。
                `
  },
  {
    date: '2017-7-22',
    time: '12:01',
    title: '和周烩家成为邻居',
    content: `
                    昨天听周烩讲，他家在县城的房子买了，就买在我家旁边。what？这个真的是太出乎意料了啊，在乡下就是邻居，在县
                    城还是邻居，这真是修来的缘分啊，反正真的真的很意外，我家901，他家902，这个世界有点可爱啊，讲道理。
                `
  },
  {
    date: '2017-7-15',
    time: '08:30',
    title: '告别上海，前往南京',
    content: `
                    来上海快两年了，上海的确不愧是中国的第一城市，什么都有。。。。。。不知道说些什么好，本来想说的话倒是挺多，
                    但是等到翘起键盘时，却什么也说不出来了。就这样吧，谢谢上海，谢谢诸位，有缘再会。然后就是南京，你好，我又
                    回来了，这次回来，我可是抱有很大自信的回来，不再是两年前的我了，我现在已经转行做IT了，不再是机械工了，你
                    准备好迎接一名优秀的前端工程师了吗？我来了
                `
  },
  {
    date: '2017-7-11',
    time: '20:05',
    title: '散伙饭',
    content: `
                    自从去年9月辞职以后，一直和张浩他们一起住，因为他们公司提供免费的住宿。然后我住的书房，小辛和方悦睡一张床，
                    所以真的很感激，他们牺牲的太多。然后就是这周小辛要被调去深圳，而我也要辞职，离开上海了。特意请他们吃了个饭，
                    都是在外打工，不容易，感谢陪伴与支持，兄弟们，来日方长。
                 `
  },
  {
    date: '2017-7-6',
    time: '20:14',
    title: '好久没有打球',
    content: `
                    自从入行IT后，自己知道自己很欠缺知识，所有每天下班回来后还得不断地学习，好久没有光顾篮球场了。自己其实也
                    知道自己的身体素质在下降，肌肉也变得松弛了，女友也埋怨我没有以前好用了。。。。。。但是，工作毕竟只是生活的一
                    部分，没有了身体，你说个鸡巴，身体毁了，你工作再出色，也不能持久。。。所有以后还是得多多运动，爱惜自己的身
                    体，今天我，又来到了篮球场，虽然没有了以前水平，但是那种挥汗和渴望胜利的心情，终于回来了，篮球场，我会再
                    次光顾。
                 `
  },
  {
    date: '2017-6-22',
    time: '21:42',
    title: '离开倒计时',
    content: `
                    终于还是要离开汉坤了，在汉坤真的是成长了很多啊，虽然是小公司，但是带我的组长却是很厉害，让我学到了很多东西，
                    但是还是女友更重要吧，，所以我选择去南京发展了，希望汉坤能越来越好，也希望自己能在南京找个好工作，长久地
                    发展下去，路漫漫其修远兮，吾将上下而求索。
                 `
  },
  {
    date: '2017-6-15',
    time: '20:53',
    title: '项目奖金',
    content: `
                    哈哈哈，今天终于发项目奖金了，也不枉我这8月来的辛苦耕耘，大家都知道的，在初创公司里要吃很多苦，受很多委屈，
                    也是一种成长吧，成长也疼的，大家知道就好。会议要结束，老板给我包了个红包，我是很高兴啦，很久之前组长就说这
                    事了，早就期待已久了捏。回家后第一件事就是拆红包，500元，哦，整整6个项目，哦，厉害了。
                 `
  },
  {
    date: '2017-6-13',
    time: '7:17',
    title: '从这里开始时',
    content: '小华的大事件，终于上线啦，记录每一次感动的瞬间，对老年的自己有个交代'
  }
];
var timeLine = document.querySelector('ul.timeline');  //时间线的wrapper，ul

var daysFormat = '';
for (var i = 0; i < days.length; i++) {
  var li =
    `
            <li>
                <time class="time" datetime="${days[i].date} ${days[i].time}">
                    <span>${days[i].date}</span><span>${days[i].time}</span>
                </time>
                <div class="label">
                    <h2>${days[i].title}</h2>
                    <p>${days[i].content}</p>
                </div>
            </li>
        `;
  daysFormat += li;
}
timeLine.innerHTML = daysFormat;
