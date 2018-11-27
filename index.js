function DescobrirLente(){
    let GEEsq, GEDir, GCEsq, GCDir; // variaveis que vao conter as informações passadas pelo usuario
    let prime = false;
    let vision = false;

    GEEsq = document.getElementById("GEsq").value;
    GEDir = document.getElementById("GDir").value;
    GCEsq = document.getElementById("CEsq").value;
    GCDir = document.getElementById("CDir").value;

    if((GCEsq!=0) && (GCEsq >= -2))
    {
      if((GEEsq <= -3) || (GEEsq >= -10))
        prime = true;
    }
    else if((GCDir!=0) && (GCDir >= -2))
    {
      if((GEDir <= -3) || (GEDir >= -10))
        prime = true;
    }
    else if((GEEsq <= -3) && (GEEsq >= -12))
        prime = true;
    else if((GEDir <= -3) && (GEDir >= -10))
        prime = true;        
    else if(GCDir >= -5)
        vision = true;
    else if(GCEsq >= -5)
        vision = true;


    if(prime == true)
      document.getElementById("Result").value = "A lente ideal para seu caso é a Prime";
    else if(vision == true)
      document.getElementById("Result").value = "A lente ideal para seu caso é a Vision";
    else
      document.getElementById("Result").value = "Não há uma lente ideal para seu caso";
  // coloquei esse último caso pois o valor minimo do grau cilindricos é -6 e como nenhuma das duas lentes 
  // trata de quando o grau cilindricos é -6, então não sei qual das duas lentes mostrar como resultado para o usuário 
  // Mas os dois graus cilindricos terão que ser -6
  }