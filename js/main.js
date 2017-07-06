var days = [
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
for(var i=0;i<days.length;i++){
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
    daysFormat+=li;
}
timeLine.innerHTML = daysFormat;