var WIDTH = 535, //500
    ORIGINAL = 2,
    ZEN = 108,
    GOLDEN = 1.618,
    PI = 3.1416;
    LOTUS = 11,
    ONE = 1;
    LUCKY = 7;
    DAY = 24;
    // YANTRAS = 7;


    // NUM1 = GOLDEN;
    // NUM2 = PI; // 2(original) // 108(zen) // 1.618(golden ratio) // 11(lotus) //  3.1416 (PI)

    preheader="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n",
    header="<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\""+WIDTH+"px\" height=\""+WIDTH+"px\" viewBox=\"0 0 "+WIDTH+" "+WIDTH+"\" enable-background=\"new 0 0 "+WIDTH+" "+WIDTH+"\" xml:space=\"preserve\">\n",
    footer="</svg>",
    REP=Math.floor((Math.random()*4)+PI), //2
    colored=false,
    color="ffffff",
    d1=[],
    d2=[],
    d3=[],
    d4=[],
    RAD=WIDTH/2,
    container=document.getElementById("container"),
    mandala="";

function generate(){
    mandala=header;
    for(i=0; i<REP; ++i)
    {
	d1[i]=Math.random()*RAD;
	d2[i]=Math.random()*RAD;
	d3[i]=Math.random()*RAD;
	d4[i]=Math.random()*RAD;
    }

    d1.sort().reverse();
    d4.sort().reverse();

    for(i=0; i<REP; ++i)
    {
	var nas=0,
	    sir=Math.PI/(1<<(Math.floor(Math.random()*3)+2)); // 2
	if(colored)
	{
	    color=Math.floor(Math.random()*16180339).toString(16); // 16777216
	}
	while(nas<2*Math.PI)
	{
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(nas))+","+(RAD+d1[i]*Math.sin(nas))+" C "+(RAD+d2[i]*Math.cos(nas))+","+(RAD+d2[i]*Math.sin(nas))+" "+(RAD+d3[i]*Math.cos(nas+sir))+","+(RAD+d3[i]*Math.sin(nas+sir))+" "+(RAD+d4[i]*Math.cos(nas+sir))+" "+(RAD+d4[i]*Math.sin(nas+sir)) +" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"3.1416\" />\n"); // 2
	    nas+=sir;
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(nas+sir))+","+(RAD+d1[i]*Math.sin(nas+sir))+" C "+(RAD+d2[i]*Math.cos(nas+sir))+","+(RAD+d2[i]*Math.sin(nas+sir))+" "+(RAD+d3[i]*Math.cos(nas))+","+(RAD+d3[i]*Math.sin(nas))+" "+(RAD+d4[i]*Math.cos(nas))+" "+(RAD+d4[i]*Math.sin(nas))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"3.1416\" />\n"); // 2
	    nas+=sir;
	}
    }

    REP=Math.floor(Math.random()*3)+GOLDEN;  // 1

    for(i=0; i<REP; ++i)
    {
	d1[i]=Math.random()*RAD;
	d2[i]=Math.random()*RAD;
	d3[i]=Math.random()*RAD;
	d4[i]=Math.random()*RAD;
    }

    d1.sort().reverse();
    d2.sort().reverse();
    d3.sort().reverse();
    d4.sort().reverse();

    for(i=0; i<REP; ++i)
    {
	nas=0;
	sir=Math.PI/(1<<(Math.floor(Math.random()*3)+3)); //3
	if(colored)
	{
	    color=Math.floor(Math.random()*13578924 + 1.618).toString(16); //16777216
	}
	while(nas<2*Math.PI)
	{
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(nas))+","+(RAD+d1[i]*Math.sin(nas))+" C "+(RAD+d2[i]*Math.cos(nas+sir))+","+(RAD+d2[i]*Math.sin(nas+sir))+" "+(RAD+d3[i]*Math.cos(nas+sir))+","+(RAD+d3[i]*Math.sin(nas+sir))+" "+(RAD+d4[i]*Math.cos(nas))+" "+(RAD+d4[i]*Math.sin(nas))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"1.618\" />\n"); // 2
	    nas+=sir;
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(nas+sir))+","+(RAD+d1[i]*Math.sin(nas+sir))+" C "+(RAD+d2[i]*Math.cos(nas))+","+(RAD+d2[i]*Math.sin(nas))+" "+(RAD+d3[i]*Math.cos(nas))+","+(RAD+d3[i]*Math.sin(nas))+" "+(RAD+d4[i]*Math.cos(nas+sir))+" "+(RAD+d4[i]*Math.sin(nas+sir))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"1.618\" />\n"); // 2
        nas+=sir;
	}
    }

    mandala+=footer;
    container.innerHTML=mandala;
    var a=document.getElementById("download");
    a.href = window.URL.createObjectURL(new Blob([preheader+mandala], {type: 'image/svg'}));
    a.download = "mandala.svg";
}

function toggleColor()
{
    if(colored)
	colored=false;
    else
	colored=true;
    color="ffffff";
    generate();
}

generate();


document.addEventListener('contextmenu', event => event.preventDefault());

// Change background by time
var currentTime = new Date().getHours();
if ( 7 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.background = "#222";
    }
} else {
    if (document.body) {
        documetn.body.background = "https://i.gifer.com/Ir4.gif";
    }
}

// Clock
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


// ORIGINAL
// var WIDTH=500,
//     preheader="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n",
//     header="<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\""+WIDTH+"px\" height=\""+WIDTH+"px\" viewBox=\"0 0 "+WIDTH+" "+WIDTH+"\" enable-background=\"new 0 0 "+WIDTH+" "+WIDTH+"\" xml:space=\"preserve\">\n",
//     footer="</svg>",
//     REP=Math.floor(Math.random()*4)+2,
//     colored=false,
//     color="ffffff",
//     d1=[],
//     d2=[],
//     d3=[],
//     d4=[],
//     RAD=WIDTH/2,
//     container=document.getElementById("container"),
//     mandala="";

// function generate(){
//     mandala=header;
//     for(i=0; i<REP; ++i)
//     {
// 	d1[i]=Math.random()*RAD;
// 	d2[i]=Math.random()*RAD;
// 	d3[i]=Math.random()*RAD;
// 	d4[i]=Math.random()*RAD;
//     }

//     d1.sort().reverse();
//     d4.sort().reverse();

//     for(i=0; i<REP; ++i)
//     {
// 	var nas=0,
// 	    sir=Math.PI/(1<<(Math.floor(Math.random()*3)+2));
// 	if(colored)
// 	{
// 	    color=Math.floor(Math.random()*16777216).toString(16);
// 	}
// 	while(nas<2*Math.PI)
// 	{
// 	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(nas))+","+(RAD+d1[i]*Math.sin(nas))+" C "+(RAD+d2[i]*Math.cos(nas))+","+(RAD+d2[i]*Math.sin(nas))+" "+(RAD+d3[i]*Math.cos(nas+sir))+","+(RAD+d3[i]*Math.sin(nas+sir))+" "+(RAD+d4[i]*Math.cos(nas+sir))+" "+(RAD+d4[i]*Math.sin(nas+sir))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"2\" />\n");
// 	    nas+=sir;
// 	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(nas+sir))+","+(RAD+d1[i]*Math.sin(nas+sir))+" C "+(RAD+d2[i]*Math.cos(nas+sir))+","+(RAD+d2[i]*Math.sin(nas+sir))+" "+(RAD+d3[i]*Math.cos(nas))+","+(RAD+d3[i]*Math.sin(nas))+" "+(RAD+d4[i]*Math.cos(nas))+" "+(RAD+d4[i]*Math.sin(nas))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"2\" />\n");
// 	    nas+=sir;
// 	}
//     }

//     REP=Math.floor(Math.random()*3)+1;

//     for(i=0; i<REP; ++i)
//     {
// 	d1[i]=Math.random()*RAD;
// 	d2[i]=Math.random()*RAD;
// 	d3[i]=Math.random()*RAD;
// 	d4[i]=Math.random()*RAD;
//     }

//     d1.sort().reverse();
//     d2.sort().reverse();
//     d3.sort().reverse();
//     d4.sort().reverse();

//     for(i=0; i<REP; ++i)
//     {
// 	nas=0;
// 	sir=Math.PI/(1<<(Math.floor(Math.random()*3)+3));
// 	if(colored)
// 	{
// 	    color=Math.floor(Math.random()*16777216).toString(16);
// 	}
// 	while(nas<2*Math.PI)
// 	{
// 	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(nas))+","+(RAD+d1[i]*Math.sin(nas))+" C "+(RAD+d2[i]*Math.cos(nas+sir))+","+(RAD+d2[i]*Math.sin(nas+sir))+" "+(RAD+d3[i]*Math.cos(nas+sir))+","+(RAD+d3[i]*Math.sin(nas+sir))+" "+(RAD+d4[i]*Math.cos(nas))+" "+(RAD+d4[i]*Math.sin(nas))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"2\" />\n");
// 	    nas+=sir;
// 	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(nas+sir))+","+(RAD+d1[i]*Math.sin(nas+sir))+" C "+(RAD+d2[i]*Math.cos(nas))+","+(RAD+d2[i]*Math.sin(nas))+" "+(RAD+d3[i]*Math.cos(nas))+","+(RAD+d3[i]*Math.sin(nas))+" "+(RAD+d4[i]*Math.cos(nas+sir))+" "+(RAD+d4[i]*Math.sin(nas+sir))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"2\" />\n");
// 	    nas+=sir;
// 	}
//     }

//     mandala+=footer;
//     container.innerHTML=mandala;
//     var a=document.getElementById("download");
//     a.href = window.URL.createObjectURL(new Blob([preheader+mandala], {type: 'image/svg'}));
//     a.download = "mandala.svg";
// }

// function toggleColor()
// {
//     if(colored)
// 	colored=false;
//     else
// 	colored=true;
//     color="ffffff";
//     generate();
// }

// generate();
