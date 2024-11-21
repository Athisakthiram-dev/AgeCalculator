let inputBox=document.getElementById("input-box");
inputBox.max=new Date().toISOString().split("T")[0];
let result=document.getElementById("result");
function calculateAge(){
    let birthDate=new Date(inputBox.value);
    let today=new Date();
    let d1,m1,y1;
    y1=birthDate.getFullYear();
    m1=birthDate.getMonth()+1;
    d1=birthDate.getDate();
    let d2,m2,y2;
    y2=today.getFullYear();
    m2=today.getMonth()+1;
    d2=today.getDate();

    let d3,m3,y3;
    y3=y2-y1;
    if(m2>=m1){
        m3=m2-m1;
    }else{
        y3--;
        m3=12+m2-m1;
    }
    if(d2>=d1){
        d3=d2-d1;
    }else{
        m3--;
        d3=getTotalDays(y1,m1)+d2-d1;
    }
    if(m3<0){
        m3=11;
        y3--;
    }
   result.innerHTML=`You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
}
function getTotalDays(year,month){
    return new Date(year,month,0).getDate();
}