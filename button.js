var sum=0;
var pro=4096;
var amulet=false;//おまもり 
var inter=false;//国際孵化
function g_obj(id)
{
    return document.getElementById(id);
}

// function Main()
// {
//     var tx=g_obj("result").value;
//     document.getElementById("result").innerText = tx;
//     sum=tx;
// }

function kc(e)
{
    //space
    if(e.keyCode==32)
    {
        Plus();
    }
}

//変更後
function play()
{
    printf();
    probability();

}
//確率計算
function probability()
{
    /*初期状態 1/4096 
    おまもり有:1/1365 
    国際孵化のみ:1/683 
    おまもり有,国際孵化:1/512
    */

   
   if(amulet && inter)
   pro=512;     //両方
   else if(amulet)
   pro=1365;   //おまもりのみ
   else if(inter)
   pro=683   //国際のみ
   else if(!amulet && !inter)
   pro=4096; //何もない



   var b=pro-1;
   var box=(b/ pro);
   var multipl=Math.pow(box,sum);
   var s= (1- multipl);

   s=Floor(s);//切り捨て

   var str="色違い確率:約"+s+"%\n出現確率:1/"+pro;

    g_obj("probability").innerText=str;
}
//切り捨て 10で第1 100で第2 1000で第3
function Floor(s)
{
    var p=0;
    p=(Math.round(s*100000.0)/100000.0);
    return p*10.0*10.0;
         //v.slice(0,-2) + "." + v.slice(-2);

}

//おまもりと国際孵化のフラグ
function Check()
{
    if(document.form1.amulet.checked)
    {
        amulet=true;
    }
    else
    {
        amulet=false;
    }

    if(document.form1.inter.checked)
    {
        inter=true;
    }
    else
    {
        inter=false;
    }
}


function printf()
{
    var p=sum;
    g_obj("result").textContent=p;
}

function Plus()
{
    //var click=g_obj("click");
    sum++;
}
function Minus()
{
    if(sum>0)
    sum--;
}

function Riset()
{
    sum=0;
}

// function Shortcuts(e)
// {
//     //↑38 ↓40 +107 -109
//     if(e.keyCode==38 || e.keyCode==107)
//     {
//         Plus();
//     }
//     else if(e.keyCode==40 || e.keyCode==109)
//     {
//         Minus();
//     }
// }
