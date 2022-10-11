fetch("https://enigmatic-bayou-56424.herokuapp.com/catfact").then(
  ((resultado) => resultado.json())).then(
  ((objetoDaResposta) => console.log(objetoDaResposta.fact)))
console.log("Esse console.log vai aparecer antes do console.log da sequência de promises acima");