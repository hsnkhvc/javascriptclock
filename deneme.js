let name = prompt("isminizi giriniz:")
let addname = document.querySelector("#myName")
addname.innerHTML += ` ${name}`.slice(0).toUpperCase()

window.onload = startTime;
    function startTime()
    {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        let d=today.getDay();
        var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

        h=checkTime(h);
        m=checkTime(m);
        s=checkTime(s);
        document.querySelector("#myClock").innerHTML=h+":"+m+":"+s;
        document.querySelector("#myClock").innerHTML += ` ${gunler[d]}`

        t=setTimeout('startTime()',1000);
    }

function checkTime(i)
    {
        if (i<10)
    {
        i="0" + i;
    }
        return i;
    }
