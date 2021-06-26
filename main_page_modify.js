function listentime(){
    const d=  new Date();
    const h = d.getHours();
    switch(true){
        case(0<=h && h<6):{
            document.getElementById("time").innerHTML = "It's already midnight!";
            break;
        }
        case(6<=h && h<12):{
            document.getElementById("time").innerHTML = "Good Morning!";
            break;
        }
        case(12<=h && h<18):{
            document.getElementById("time").innerHTML = "Good Afternoon!";
            break;
        }
        case(18<=h && h<24):{
            document.getElementById("time").innerHTML = "Good evening!";
            break;
        }
    }
}