var box="NULL";//默认值为NULL
var kinds=1;//盒内的种类
function 展示盒()//显示出盒的图片
{
    if(document.getElementById("选盒").value=="NULL")
    alert("请先选择一个盒");
else
    {
        box=document.getElementById("选盒").value;//box全局变量，传递到开谷子函数，包括判断盒的种类
        if(box=="25三周年live吧唧")
    kinds=10;
else if(box=="初雪月光ep卡")
kinds=16;
else if(box=="魔女 bug ep卡")
kinds=16;
else if(box=="黑百合花前细闪")
kinds=7;
else if(box=="圣诞无限灰花后细闪")
kinds=8;
    document.getElementById("展示盒").src="art_pic/"+box+"/main.png";
    setTimeout(()=>{
        alert("选择成功，快去开包吧");
    },150);//延时执行弹窗，优化效果
    }
}
function 开谷子()
{
    if(box=="NULL")
    alert("你还没选盒，啥都开不出")
else
    {
        var random=Math.ceil(Math.random()*kinds);//random的数值用来给结果累加
    document.getElementById("开包区").src='art_pic/'+box+'/'+random+'.png'
    }
}