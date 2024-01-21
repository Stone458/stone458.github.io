var box="NULL";//默认值为NULL
var kinds=1;//盒内的种类
var inside=false;
function 展示盒()//显示出盒的图片
{
    if(document.getElementById("选盒").value=="NULL")
    alert("请先选择一个盒");
else
    {
        box=document.getElementById("选盒").value;//box全局变量，传递到开谷子函数，包括判断盒的种类
        if(box=="甜品天堂吧唧")
    kinds=8;
else if(box=="甜品天堂相卡")
kinds=16;
else if(box=="gigo杯垫")
kinds=16;
else if(box=="gigo拍立得")
kinds=8;
else if(box=="v2星挂1")
kinds=20;
else if(box=="v2星挂2")
kinds=20;
    document.getElementById("展示盒").src="art_pic/"+box+"/main.jpg";
    setTimeout(()=>{
        alert("选择成功，快去开包吧");
    },150);//延时执行弹窗，优化效果
    }
}
function 开谷子()
{
    if(box=="NULL")
    alert("你还没选盒，啥都开不出")
// else
//     {
//         if(inside==false)
//         {
//             var random=Math.ceil(Math.random()*kinds);//random的数值用来给结果累加
//             document.getElementById("结果").src='art_pic/'+box+'/'+random+'.png'
//             inside=true;
//         }
//     }
}
function new_goods()
{

    if(box=="NULL")
    {
        alert("你还没选盒，啥都开不出")
    }
    else
    {
        var random=Math.ceil(Math.random()*kinds);//random的数值用来给结果累加
        document.getElementById("结果").src='art_pic/'+box+'/'+random+'.png'
        inside=true;
        let package = document.getElementById('package');
        package.style.cssText = `left:auto`;
    }
}

