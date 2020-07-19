var WIDTH=525, //500
    MAGIC = 1.618; // 2(original) // 108(zen) // 1.618(golden ratio) // 11(lotus) // 3.1416

    preheader="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n",
    header="<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\""+WIDTH+"px\" height=\""+WIDTH+"px\" viewBox=\"0 0 "+WIDTH+" "+WIDTH+"\" enable-background=\"new 0 0 "+WIDTH+" "+WIDTH+"\" xml:space=\"preserve\">\n",
    footer="</svg>",
    REP=Math.floor((Math.random()*4)+MAGIC), 
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

    REP=Math.floor(Math.random()*3)+1;  // 1

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
	sir=Math.PI/(1<<(Math.floor(Math.random()*3)+3));
	if(colored)
	{
	    color=Math.floor(Math.random()*16777216).toString(16);
	}
	while(nas<2*Math.PI)
	{
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(nas))+","+(RAD+d1[i]*Math.sin(nas))+" C "+(RAD+d2[i]*Math.cos(nas+sir))+","+(RAD+d2[i]*Math.sin(nas+sir))+" "+(RAD+d3[i]*Math.cos(nas+sir))+","+(RAD+d3[i]*Math.sin(nas+sir))+" "+(RAD+d4[i]*Math.cos(nas))+" "+(RAD+d4[i]*Math.sin(nas))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"1.5708\" />\n"); // 2
	    nas+=sir;
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(nas+sir))+","+(RAD+d1[i]*Math.sin(nas+sir))+" C "+(RAD+d2[i]*Math.cos(nas))+","+(RAD+d2[i]*Math.sin(nas))+" "+(RAD+d3[i]*Math.cos(nas))+","+(RAD+d3[i]*Math.sin(nas))+" "+(RAD+d4[i]*Math.cos(nas+sir))+" "+(RAD+d4[i]*Math.sin(nas+sir))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"1.5708\" />\n"); // 2
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
