
/**
 * 把实验室code转换成中文名
 * @param {*} num 
 * @returns String
 */
function mySwich(num) {
    switch (num) {

        case "1":
            return "国家脉冲强磁场科学中心";
        case "2":
            return "国家数字化设计与制造创新中心";
        case "3":
            return "精密重力测量研究中心";
        case "4":
            return "武汉国家光电研究中心";

        default:
            break;
    }
}






var url=decodeURI(window.location.href);
var lab_code=url.split('?')[1];
lab_code=lab_code.split('=')[1];
document.getElementById("lab_name").innerHTML=mySwich(lab_code);


var info = {
    name: undefined,
    number: undefined,
    phone: NaN,
    school: undefined,
    labCode:lab_code,
};//该对象存储了所有属性

function cls_1(obj)
{
    obj.value=obj.value=="请输入内容"?"":obj.value;
    document.getElementById('name_w').innerHTML='';
}
function cls_2(obj)
{
    obj.value=obj.value=="请输入内容"?"":obj.value;
    document.getElementById('ID_w').innerHTML='';
}
function cls_3(obj)
{
    obj.value=obj.value=="请输入内容"?"":obj.value;
    document.getElementById('school_w').innerHTML='';

}
function cls_4(obj)
{
    obj.value=obj.value=="请输入内容"?"":obj.value;
    document.getElementById('phone_w').innerHTML='';
}

function ini(obj)
{
    obj.value=obj.value==""?"请输入内容":obj.value;
}
function submit(name ,ID ,school ,phone)
{
    document.body.style.backgroundColor="#808080";
    document.getElementById("d_body").style.zIndex=5;
    document.getElementById("d_body").style.opacity=1;
    document.getElementById("d_head").style.zIndex=5;
    document.getElementById("d_head").style.opacity=1;
    document.getElementById("d_d").style.zIndex=5;
    document.getElementById("d_d").style.opacity=1;
    document.getElementById("d_t1").style.zIndex=5;
    document.getElementById("d_t1").style.opacity=1;
    document.getElementById("d_t2").style.zIndex=5;
    document.getElementById("d_t2").style.opacity=1;
    document.getElementById("d_t3").style.zIndex=5;
    document.getElementById("d_t3").style.opacity=1;
    document.getElementById("d_t4").style.zIndex=5;
    document.getElementById("d_t4").style.opacity=1;
    document.getElementById("button_1").style.zIndex=5;
    document.getElementById("button_1").style.opacity=1;
    document.getElementById("button_2").style.zIndex=5;
    document.getElementById("button_2").style.opacity=1;
    document.getElementById("main").style.opacity=0.4;
    document.getElementById("d_t1").innerHTML="姓名："+name;
    document.getElementById("d_t2").innerHTML="学号："+ID;
    document.getElementById("d_t3").innerHTML="学院："+school;
    document.getElementById("d_t4").innerHTML="手机："+phone;
}
function check()
{
    var flag=1;
    var temp;
    if(document.getElementById("name").value==""||document.getElementById("name").value=="请输入内容")
    {
        document.getElementById('name_w').innerHTML='不能为空';
        flag=0;
    }
    temp=document.getElementById("ID").value;
    if(temp.search(/u/)==0)
    {
        temp='U'+temp.slice(1);
    }
    else if(temp.search(/u/i)!=0&&temp.search(/x/i)!=0&&temp.search(/d/i)!=0)
    {
        temp='U'+temp;
    }

    if(temp.length!==10)
    {
        document.getElementById('ID_w').innerHTML='格式错误';
        flag=0;
    }
    if(document.getElementById("school").value==""||document.getElementById("school").value=="请输入内容")
    {
        document.getElementById('school_w').innerHTML='格式错误';
        flag=0;
    }
    if(document.getElementById("phone").value.length!==11)
    {
        document.getElementById('phone_w').innerHTML='格式错误';
        flag=0;
    }
    if(flag)
    {
        submit(document.getElementById("name").value,temp,document.getElementById("school").value,document.getElementById("phone").value);
    }
}
function exitdia()
{
    document.body.style.backgroundColor="#FFFFFF";
    document.getElementById("d_body").style.zIndex=-5;
    document.getElementById("d_body").style.opacity=0;
    document.getElementById("d_head").style.zIndex=-5;
    document.getElementById("d_head").style.opacity=0;
    document.getElementById("d_d").style.zIndex=-5;
    document.getElementById("d_d").style.opacity=0;
    document.getElementById("d_t1").style.zIndex=-5;
    document.getElementById("d_t1").style.opacity=0;
    document.getElementById("d_t2").style.zIndex=-5;
    document.getElementById("d_t2").style.opacity=0;
    document.getElementById("d_t3").style.zIndex=-5;
    document.getElementById("d_t3").style.opacity=0;
    document.getElementById("d_t4").style.zIndex=-5;
    document.getElementById("d_t4").style.opacity=0;
    document.getElementById("button_1").style.zIndex=-5;
    document.getElementById("button_1").style.opacity=0;
    document.getElementById("button_2").style.zIndex=-5;
    document.getElementById("button_2").style.opacity=0;
    document.getElementById("main").style.opacity=1;
}

function finalsubmit()
{
    var temp=document.getElementById("ID").value;
    if(temp.search(/u/)==0)
    {
        temp='U'+temp.slice(1);
    }
    else if(temp.search(/u/i)!=0&&temp.search(/x/i)!=0&&temp.search(/d/i)!=0)
    {
        temp='U'+temp;
    }
    info.name=document.getElementById("name").value;
    info.number=temp;
    info.school=document.getElementById("school").value;
    info.phone=Number(document.getElementById("phone").value);
    myfetchData("../pages/light.html?id=1");
}

/**
 * 递交数据
 * 
 */
async function myfetchData(url_pass) {
    
    try {
        let body =info;
        console.log(body)
        let response = await fetch("/upload.php", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json; charset=utf8"
            }
        });
        // let responseJson = await response.json();
        let responseJson = await response;
        console.log(responseJson);
        // if (responseJson.statusCode == 200) 
        if (responseJson.status == 200) {
            window.location.href=url_pass// 在这里写跳转
        } else {
            alert(responseJson.message);
        }
    } catch (error) {
        console.log(error);
    }
}
