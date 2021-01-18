var c1 = "piedra";
var c2 = "papel";
var c3 = "tijera";


function game(user , lapto) {
  if (user === c1 && lapto === c1){
    return "tu:" + user +  "  él:" + lapto + "  = " + "tu Empate"
  } else if (user === c2 && lapto === c2 ) {
    return"tu:" + user +  "  él:" + lapto + "  = " + "tu Empate"
  }else if (user === c3 && lapto === c3 ) {
    return"tu:" + user +  "  él:" + lapto + "  = " + "tu Empate"
  }else if (user === c1 && lapto === c3 ) {
    return "tu:" + user +  "  él:" + lapto + "  = " + "tu Ganaste"
  } else if (user === c2 && lapto === c1) {
    return "tu:" + user +  "  él:" + lapto + "  = " + "tu Ganaste"
  }else if (user === c3 && lapto === c2) {
    return "tu:" + user + "  él:" + lapto + "  = " + " tu Ganaste"
  }else {
    return "tu:" + user +  "  él:" + lapto + "  = " + "tu Perdiste"
  }
}

console.log(game(c1,c2))