var days = [
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