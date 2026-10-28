 function ClickMe1(){
//     console.log(document.getElementById("txtSample").value);

    let txtValue1=document.getElementById("textSample").value;
    let num01 = parseInt(txtValue1);
    let txtValue2=document.getElementById("textSample2").value;
    let num02 = parseInt(txtValue2);

    let add = num01 + num02;
    document.getElementById("lblSection").innerHTML="<h1>"+add+"</h1>";

}

function ClickMe2(){

    let txtValue1=document.getElementById("textSample").value;
    let num01 = parseInt(txtValue1);//to convert int
    let txtValue2=document.getElementById("textSample2").value;
    let num02 = parseInt(txtValue2);

    let sub = num01 - num02;
    document.getElementById("lblSection").innerHTML="<h1>" + sub + "</h1>";
}

function ClickMe3(){

    let txtValue1=document.getElementById("textSample").value;
    let num01 = parseInt(txtValue1);
    let txtValue2=document.getElementById("textSample2").value;
    let num02 = parseInt(txtValue2);

    let mul = num01 * num02;
    document.getElementById("lblSection").innerHTML="<h1>" + mul + "</h1>";
}

