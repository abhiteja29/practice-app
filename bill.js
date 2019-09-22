function bill() {
    const Tax=5.5;
    let GrandTotal=0.0;
    const Total=Number(document.getElementById("Total").value)
    const Rate=Number(document.getElementById("Rate").value)
    document.getElementById("GrandTotal").innerHTML=GrandTotal
    if(Total>0)
    {
        document.getElementById("Tip").innerHTML=Rate*Total/100
        GrandTotal=(Rate*Total/100)+Tax+Total
        console.log(Total)
        console.log(Rate)
        console.log(GrandTotal)
        document.getElementById("GrandTotal").innerHTML=GrandTotal
    }

}