var days = [
    {
        date: '2017-6-15',
        time: '720:53',
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