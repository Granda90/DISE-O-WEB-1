/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload= function(){
    var b=document.getElementById("btn");
    b.onclick=myFunction2();
}



function myFunction2() {
    var hoy = new Date();
    dia = hoy.getDate();
    mes = hoy.getMonth();
    ano = hoy.getYear() + 1900;



    Idiv = "<div class='rojo'> fuera";
    Fdiv = "</div>";
    //este div no carga el style ya que el CSS habia sido corrido

    document.write(Idiv);
    document.write(dia);
    document.write(" / ");
    document.write(mes);
    document.write(" / ");
    document.write(ano);
    document.write(Fdiv)

}