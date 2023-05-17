const formPerguntaChat = document.getElementById("form-pergunta-chat");
const OPENAI_API_KEY = "";

let btnPara = document.getElementById("btn-pergunta-para");
let btnSobre = document.getElementById("btn-pergunta-sobre");
let btnEstilo = document.getElementById("btn-pergunta-estilo");
let BtnRes = document.getElementById("btn-pergunta-chat");
let btnMoreRes = document.getElementById("btnMoreRes");
let btnMoreResAguardo = document.getElementById("btnMoreResAguardo");

let btnRespostaVoltar = document.getElementById("btnRespostaVoltar");

let btnVoltarPara = document.getElementById("btn-voltar-pergunta-para");
let cima = document.getElementById("cima");

let btnRes1 = document.getElementById("btn-res1");
let btnRes2 = document.getElementById("btn-res2");
let btnRes3 = document.getElementById("btn-res3");
let btnRes4 = document.getElementById("btn-res4");
let btnRes5 = document.getElementById("btn-res5");
let btnRes6 = document.getElementById("btn-res6");

let sobre = document.querySelector(".nome-sobre");
let para = document.querySelector(".nome-para");
let estilo = document.querySelector(".nome-estilo");
let aleatorio = document.querySelector(".aleatoriedade");
let res = document.querySelector(".resposta");

let resSobreP1 = document.querySelector(".divResposta01");
let resSobreP2 = document.querySelector(".divResposta02");
let resSobreP3 = document.querySelector(".divResposta03");
let resSobreP4 = document.querySelector(".divResposta04");
let resSobreP5 = document.querySelector(".divResposta05");
let resSobreP6 = document.querySelector(".divResposta06");

let MoreResSobreP1 = document.querySelector(".divResposta07");
let MoreResSobreP2 = document.querySelector(".divResposta08");
let MoreResSobreP3 = document.querySelector(".divResposta09");
let MoreResSobreP4 = document.querySelector(".divResposta010");
let MoreResSobreP5 = document.querySelector(".divResposta011");
let MoreResSobreP6 = document.querySelector(".divResposta012");

let moreContainerAPI = document.querySelector(".containerResposta");

let containerAPI = document.querySelector(".container");

let divRespostaMore = document.querySelector(".divRespostaMore");

let btnMore = document.getElementById("btn-pergunta-chatmore");

function voltarIndex(){
  window.location.href = "index.html";
}

function newName() {
  res.style.display = "none";
  para.style.display = "block";

  moreContainerAPI.style.display = "none";
  containerAPI.style.display = "block";

  btnRespostaVoltar.style.display = "none";
  cima.style.display = "none";

  divRespostaMore.style.display = "none";
  btnMoreRes.style.display = "none";
  btnMoreResAguardo.style.display = "block";

  let resApiDominio = document.getElementById("resApiDominio");
  let resApiDominio2 = document.getElementById("resApiDominio2");
  let resApiDominio3 = document.getElementById("resApiDominio3");
  let resApiDominio4 = document.getElementById("resApiDominio4");
  let resApiDominio5 = document.getElementById("resApiDominio5");
  let resApiDominio6 = document.getElementById("resApiDominio6");

  resApiDominio.innerHTML = "";
  resApiDominio2.innerHTML = "";
  resApiDominio3.innerHTML = "";
  resApiDominio4.innerHTML = "";
  resApiDominio5.innerHTML = "";
  resApiDominio6.innerHTML = "";

  let resSobreP1 = document.getElementById("sobre");
  let resSobreP2 = document.getElementById("sobre2");
  let resSobreP3 = document.getElementById("sobre3");
  let resSobreP4 = document.getElementById("sobre4");
  let resSobreP5 = document.getElementById("sobre5");
  let resSobreP6 = document.getElementById("sobre6");

  resSobreP1.innerHTML = "";
  resSobreP2.innerHTML = "";
  resSobreP3.innerHTML = "";
  resSobreP4.innerHTML = "";
  resSobreP5.innerHTML = "";
  resSobreP6.innerHTML = "";

  let resposta = document.getElementById("resposta");
  let resposta2 = document.getElementById("resposta2");
  let resposta3 = document.getElementById("resposta3");
  let resposta4 = document.getElementById("resposta4");
  let resposta5 = document.getElementById("resposta5");
  let resposta6 = document.getElementById("resposta6");

  resposta.innerHTML = "";
  resposta2.innerHTML = "";
  resposta3.innerHTML = "";
  resposta4.innerHTML = "";
  resposta5.innerHTML = "";
  resposta6.innerHTML = "";

  let respostaMore = document.getElementById("respostaMore");
  let respostaMore2 = document.getElementById("respostaMore2");
  let respostaMore3 = document.getElementById("respostaMore3");
  let respostaMore4 = document.getElementById("respostaMore4");
  let respostaMore5 = document.getElementById("respostaMore5");
  let respostaMore6 = document.getElementById("respostaMore6");

  respostaMore.innerHTML = "";
  respostaMore2.innerHTML = "";
  respostaMore3.innerHTML = "";
  respostaMore4.innerHTML = "";
  respostaMore5.innerHTML = "";
  respostaMore6.innerHTML = "";

  let btnresorigemMore = document.getElementById("btn-res-origemMore");
  let btnresorigemMore2 = document.getElementById("btn-res-origemMore");
  let btnresorigemMore3 = document.getElementById("btn-res-origemMore");
  let btnresorigemMore4 = document.getElementById("btn-res-origemMore");
  let btnresorigemMore5 = document.getElementById("btn-res-origemMore");
  let btnresorigemMore6 = document.getElementById("btn-res-origemMore");

  btnresorigemMore.innerHTML = "";
  btnresorigemMore2.innerHTML = "";
  btnresorigemMore3.innerHTML = "";
  btnresorigemMore4.innerHTML = "";
  btnresorigemMore5.innerHTML = "";
  btnresorigemMore6.innerHTML = "";

  let resApiDominioMore = document.getElementById("resApiDominioMore");
  let resApiDominioMore2 = document.getElementById("resApiDominioMore2");
  let resApiDominioMore3 = document.getElementById("resApiDominioMore3");
  let resApiDominioMore4 = document.getElementById("resApiDominioMore4");
  let resApiDominioMore5 = document.getElementById("resApiDominioMore5");
  let resApiDominioMore6 = document.getElementById("resApiDominioMore6");

  resApiDominioMore.innerHTML = "";
  resApiDominioMore2.innerHTML = "";
  resApiDominioMore3.innerHTML = "";
  resApiDominioMore4.innerHTML = "";
  resApiDominioMore5.innerHTML = "";
  resApiDominioMore6.innerHTML = "";
}

function voltarAPI() {
  aleatorio.style.display = "block";
  res.style.display = "none";

  moreContainerAPI.style.display = "none";
  containerAPI.style.display = "block";

  btnRespostaVoltar.style.display = "none";
  cima.style.display = "none";

  divRespostaMore.style.display = "none";
  btnMoreRes.style.display = "none";
  btnMoreResAguardo.style.display = "block";

  let resApiDominio = document.getElementById("resApiDominio");
  let resApiDominio2 = document.getElementById("resApiDominio2");
  let resApiDominio3 = document.getElementById("resApiDominio3");
  let resApiDominio4 = document.getElementById("resApiDominio4");
  let resApiDominio5 = document.getElementById("resApiDominio5");
  let resApiDominio6 = document.getElementById("resApiDominio6");

  resApiDominio.innerHTML = "";
  resApiDominio2.innerHTML = "";
  resApiDominio3.innerHTML = "";
  resApiDominio4.innerHTML = "";
  resApiDominio5.innerHTML = "";
  resApiDominio6.innerHTML = "";

  let resSobreP1 = document.getElementById("sobre");
  let resSobreP2 = document.getElementById("sobre2");
  let resSobreP3 = document.getElementById("sobre3");
  let resSobreP4 = document.getElementById("sobre4");
  let resSobreP5 = document.getElementById("sobre5");
  let resSobreP6 = document.getElementById("sobre6");

  resSobreP1.innerHTML = "";
  resSobreP2.innerHTML = "";
  resSobreP3.innerHTML = "";
  resSobreP4.innerHTML = "";
  resSobreP5.innerHTML = "";
  resSobreP6.innerHTML = "";

  let resposta = document.getElementById("resposta");
  let resposta2 = document.getElementById("resposta2");
  let resposta3 = document.getElementById("resposta3");
  let resposta4 = document.getElementById("resposta4");
  let resposta5 = document.getElementById("resposta5");
  let resposta6 = document.getElementById("resposta6");

  resposta.innerHTML = "";
  resposta2.innerHTML = "";
  resposta3.innerHTML = "";
  resposta4.innerHTML = "";
  resposta5.innerHTML = "";
  resposta6.innerHTML = "";

  let respostaMore = document.getElementById("respostaMore");
  let respostaMore2 = document.getElementById("respostaMore2");
  let respostaMore3 = document.getElementById("respostaMore3");
  let respostaMore4 = document.getElementById("respostaMore4");
  let respostaMore5 = document.getElementById("respostaMore5");
  let respostaMore6 = document.getElementById("respostaMore6");

  respostaMore.innerHTML = "";
  respostaMore2.innerHTML = "";
  respostaMore3.innerHTML = "";
  respostaMore4.innerHTML = "";
  respostaMore5.innerHTML = "";
  respostaMore6.innerHTML = "";

  let btnresorigemMore = document.getElementById("btn-res-origemMore");
  let btnresorigemMore2 = document.getElementById("btn-res-origemMore");
  let btnresorigemMore3 = document.getElementById("btn-res-origemMore");
  let btnresorigemMore4 = document.getElementById("btn-res-origemMore");
  let btnresorigemMore5 = document.getElementById("btn-res-origemMore");
  let btnresorigemMore6 = document.getElementById("btn-res-origemMore");

  btnresorigemMore.innerHTML = "";
  btnresorigemMore2.innerHTML = "";
  btnresorigemMore3.innerHTML = "";
  btnresorigemMore4.innerHTML = "";
  btnresorigemMore5.innerHTML = "";
  btnresorigemMore6.innerHTML = "";

  let resApiDominioMore = document.getElementById("resApiDominioMore");
  let resApiDominioMore2 = document.getElementById("resApiDominioMore2");
  let resApiDominioMore3 = document.getElementById("resApiDominioMore3");
  let resApiDominioMore4 = document.getElementById("resApiDominioMore4");
  let resApiDominioMore5 = document.getElementById("resApiDominioMore5");
  let resApiDominioMore6 = document.getElementById("resApiDominioMore6");

  resApiDominioMore.innerHTML = "";
  resApiDominioMore2.innerHTML = "";
  resApiDominioMore3.innerHTML = "";
  resApiDominioMore4.innerHTML = "";
  resApiDominioMore5.innerHTML = "";
  resApiDominioMore6.innerHTML = "";
}

function voltarAleatoriedade() {
  estilo.style.display = "block";
  aleatorio.style.display = "none";
}

function voltarSobre() {
  sobre.style.display = "none";
  para.style.display = "block";
}

function voltarEstilo() {
  estilo.style.display = "none";
  sobre.style.display = "block";
}

btnPara.addEventListener("click", function () {
  if (sobre.style.display === "block") {
  } else {
    sobre.style.display = "block";
    para.style.display = "none";
  }
});

btnSobre.addEventListener("click", function () {
  if (estilo.style.display === "block") {
  } else {
    estilo.style.display = "block";
    sobre.style.display = "none";

    document.getElementById("campo-descricao").value = "";
    document.getElementById("campo-palavra").value = "";
    document.getElementById("campo-cidade").value = "";
  }
});

btnEstilo.addEventListener("click", function () {
  if (aleatorio.style.display === "block") {
  } else {
    aleatorio.style.display = "block";
    estilo.style.display = "none";
  }
});

BtnRes.addEventListener("click", function () {
  if (res.style.display === "block") {
  } else {
    res.style.display = "block";
    aleatorio.style.display = "none";

    containerAPI.style.display = "none";
    moreContainerAPI.style.display = "block";

    btnRespostaVoltar.style.display = "block";
    cima.style.display = "block";

    setTimeout(function () {
      btnMoreRes.style.display = "block";
      btnMoreResAguardo.style.display = "none";
    }, 33000); // 32 segundos em milissegundos
  }
});

function origem1() {
  let btnResOrigem = document.getElementById("btn-res-origem");
  if (resSobreP1.style.display === "block") {
    btnResOrigem.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
    resSobreP1.style.display = "none";
  } else {
    resSobreP1.style.display = "block";

    btnResOrigem.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function origem2() {
  let btnResOrigem2 = document.getElementById("btn-res-origem2");
  if (resSobreP2.style.display === "block") {
    btnResOrigem2.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
    resSobreP2.style.display = "none";
  } else {
    resSobreP2.style.display = "block";
    btnResOrigem2.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function origem3() {
  let btnResOrigem3 = document.getElementById("btn-res-origem3");
  if (resSobreP3.style.display === "block") {
    resSobreP3.style.display = "none";
    btnResOrigem3.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
  } else {
    resSobreP3.style.display = "block";
    btnResOrigem3.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function origem4() {
  let btnResOrigem4 = document.getElementById("btn-res-origem4");
  if (resSobreP4.style.display === "block") {
    btnResOrigem4.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
    resSobreP4.style.display = "none";
  } else {
    resSobreP4.style.display = "block";
    btnResOrigem4.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function origem5() {
  let btnResOrigem5 = document.getElementById("btn-res-origem5");
  if (resSobreP5.style.display === "block") {
    resSobreP5.style.display = "none";
    btnResOrigem5.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
  } else {
    resSobreP5.style.display = "block";
    btnResOrigem5.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function origem6() {
  let btnResOrigem6 = document.getElementById("btn-res-origem6");
  if (resSobreP6.style.display === "block") {
    resSobreP6.style.display = "none";
    btnResOrigem6.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
  } else {
    resSobreP6.style.display = "block";
    btnResOrigem6.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function origemMore() {
  let btnResOrigemMore = document.getElementById("btn-res-origemMore");
  if (MoreResSobreP1.style.display === "block") {
    btnResOrigemMore.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
  } else {
    MoreResSobreP1.style.display = "block";
    btnResOrigemMore.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function origemMore2() {
  let btnResOrigemMore2 = document.getElementById("btn-res-origemMore2");
  if (MoreResSobreP2.style.display === "block") {
    btnResOrigemMore2.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
    MoreResSobreP2.style.display = "none";
  } else {
    MoreResSobreP2.style.display = "block";
    btnResOrigemMore2.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function origemMore3() {
  let btnResOrigemMore3 = document.getElementById("btn-res-origemMore3");
  if (MoreResSobreP3.style.display === "block") {
    MoreResSobreP3.style.display = "none";
    btnResOrigemMore3.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
  } else {
    MoreResSobreP3.style.display = "block";
    btnResOrigemMore3.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function origemMore4() {
  let btnResOrigemMore4 = document.getElementById("btn-res-origemMore4");
  if (MoreResSobreP4.style.display === "block") {
    MoreResSobreP4.style.display = "none";
    btnResOrigemMore4.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
  } else {
    MoreResSobreP4.style.display = "block";
    btnResOrigemMore4.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function origemMore5() {
  let btnResOrigemMore5 = document.getElementById("btn-res-origemMore5");
  if (MoreResSobreP5.style.display === "block") {
    MoreResSobreP5.style.display = "none";
    btnResOrigemMore5.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
  } else {
    MoreResSobreP5.style.display = "block";
    btnResOrigemMore5.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function origemMore6() {
  let btnResOrigemMore6 = document.getElementById("btn-res-origemMore6");
  if (MoreResSobreP6.style.display === "block") {
    MoreResSobreP6.style.display = "none";
    btnResOrigemMore6.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-right" style="color: #00CC66;"></i>`;
  } else {
    MoreResSobreP6.style.display = "block";
    btnResOrigemMore6.innerHTML = `Origem do nome <i class="fa-solid fa-chevron-left" style="color: #00CC66;"></i>`;
  }
}

function MoreRespostas() {
  if (divRespostaMore.style.display === "block") {
  } else {
    divRespostaMore.style.display = "block";
    btnMoreRes.style.display = "none";
  }
}

// Aguarda o carregamento completo da página antes de executar o script
window.addEventListener("load", () => {
  const respostaElements = [
    document.getElementById("resposta"),
    document.getElementById("resposta2"),
    document.getElementById("resposta3"),
    document.getElementById("resposta4"),
    document.getElementById("resposta5"),
    document.getElementById("resposta6"),
  ];

  const sobreElements = [
    document.getElementById("sobre"),
    document.getElementById("sobre2"),
    document.getElementById("sobre3"),
    document.getElementById("sobre4"),
    document.getElementById("sobre5"),
    document.getElementById("sobre6"),
  ];

  const respostaElementsMore = [
    document.getElementById("respostaMore"),
    document.getElementById("respostaMore2"),
    document.getElementById("respostaMore3"),
    document.getElementById("respostaMore4"),
    document.getElementById("respostaMore5"),
    document.getElementById("respostaMore6"),
  ];

  const sobreElementsMore = [
    document.getElementById("sobreMore"),
    document.getElementById("sobreMore2"),
    document.getElementById("sobreMore3"),
    document.getElementById("sobreMore4"),
    document.getElementById("sobreMore5"),
    document.getElementById("sobreMore6"),
  ];

  if (formPerguntaChat) {
    formPerguntaChat.addEventListener("submit", async (e) => {
      e.preventDefault();

      const pergunta = document.getElementById("campo-palavra").value;

      const descricao = document.getElementById("campo-descricao").value;

      const cidade = document.getElementById("campo-cidade").value;

      const responses = [];
      for (let i = 0; i < respostaElements.length; i++) {
        const respostaElement = respostaElements[i];

        // console.log(` selecionado ${pergunta}.`);
        // console.log(` selecionado a descrição ${descricao}.`);
        // console.log(` selecionado a localização ${cidade}.`);

        const usado = document.querySelector(
          'input[name="usado"]:checked'
        ).value;
        //   console.log(` selecionado ${usado}.`);

        const TipoResposta = document.querySelector(
          'input[name="TipoResposta"]:checked'
        ).value;
        //  console.log(` selecionado ${TipoResposta}.`);

        const estilo = document.querySelector(
          'input[name="estilo"]:checked'
        ).value;
        // console.log(` selecionado ${estilo}.`);

        let promptVariation = `Crie para mim um nome muito semelhante a "${pergunta}" a palavra não pode ter cido usada antes. comercial Exclusivo, memorável, simples, relevante, original e curto. Use ${estilo}. para ser usado como "${usado}". Com a seguinte descrição "${descricao}". o Lugar onde vai ser vendido "${cidade}". No maximo 8 caracteres. Mostre "${TipoResposta}". Crie uma palavra apenas`;

        try {
          const response = await fetch(
            "https://api.openai.com/v1/completions",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY,
              },
              body: JSON.stringify({
                model: "text-davinci-003",
                prompt: promptVariation,
                max_tokens: 8,
                temperature: 0.9,
              }),
            }
          );
          const data = await response.json();

          responses.push(data.choices[0].text);

          // respostaElement.innerHTML = data.choices[0].text;
          //console.log(`esta é a RES${data.choices[0].text}`)
          if (data.choices[0].text.includes(".")) {
            const respostaSemPonto = data.choices[0].text.replace(/\./g, "");
            respostaElement.innerHTML = respostaSemPonto;
          }
        } catch (error) {
         // console.log(error);
          //respostaElement.innerHTML = "Ocorreu um erro ao receber a resposta.";
        }
      }
      //pega o resultado

      let elemento = document.getElementById("resposta");
      let elemento2 = document.getElementById("resposta2");
      let elemento3 = document.getElementById("resposta3");
      let elemento4 = document.getElementById("resposta4");
      let elemento5 = document.getElementById("resposta5");
      let elemento6 = document.getElementById("resposta6");

      let resApiDominio = document.getElementById("resApiDominio");
      let resApiDominio2 = document.getElementById("resApiDominio2");
      let resApiDominio3 = document.getElementById("resApiDominio3");
      let resApiDominio4 = document.getElementById("resApiDominio4");
      let resApiDominio5 = document.getElementById("resApiDominio5");
      let resApiDominio6 = document.getElementById("resApiDominio6");

      let conteudo = elemento.innerText;
      let conteudo2 = elemento2.innerText;
      let conteudo3 = elemento3.innerText;
      let conteudo4 = elemento4.innerText;
      let conteudo5 = elemento5.innerText;
      let conteudo6 = elemento6.innerText;

      const apiUrl = `https://rdap.registro.br/domain/${conteudo}.com.br`;
      const apiUrl2 = `https://rdap.registro.br/domain/${conteudo2}.com.br`;
      const apiUrl3 = `https://rdap.registro.br/domain/${conteudo3}.com.br`;
      const apiUrl4 = `https://rdap.registro.br/domain/${conteudo4}.com.br`;
      const apiUrl5 = `https://rdap.registro.br/domain/${conteudo5}.com.br`;
      const apiUrl6 = `https://rdap.registro.br/domain/${conteudo6}.com.br`;

      const request = new XMLHttpRequest();
      const request2 = new XMLHttpRequest();
      const request3 = new XMLHttpRequest();
      const request4 = new XMLHttpRequest();
      const request5 = new XMLHttpRequest();
      const request6 = new XMLHttpRequest();

      request.open("GET", apiUrl, true);
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            // Domínio registrado
            resApiDominio.innerHTML = "";
          } else if (request.status === 404) {
            // Domínio não registrado
            resApiDominio.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudo}.com.br`;
          }
        }
      };
      request.send();

      request2.open("GET", apiUrl2, true);
      request2.onreadystatechange = function () {
        if (request2.readyState === 4) {
          if (request2.status === 200) {
            // Domínio registrado
            resApiDominio2.innerHTML = "";
          } else if (request2.status === 404) {
            // Domínio não registrado
            resApiDominio2.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudo2}.com.br`;
          }
        }
      };
      request2.send();

      request3.open("GET", apiUrl3, true);
      request3.onreadystatechange = function () {
        if (request3.readyState === 4) {
          if (request3.status === 200) {
            // Domínio registrado
            resApiDominio3.innerHTML = "";
          } else if (request3.status === 404) {
            // Domínio não registrado
            resApiDominio3.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudo3}.com.br`;
          }
        }
      };
      request3.send();

      request4.open("GET", apiUrl4, true);
      request4.onreadystatechange = function () {
        if (request4.readyState === 4) {
          if (request4.status === 200) {
            // Domínio registrado
            resApiDominio4.innerHTML = "";
          } else if (request4.status === 404) {
            // Domínio não registrado
            resApiDominio4.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudo4}.com.br`;
          }
        }
      };
      request4.send();

      request5.open("GET", apiUrl5, true);
      request5.onreadystatechange = function () {
        if (request5.readyState === 4) {
          if (request5.status === 200) {
            // Domínio registrado
            resApiDominio5.innerHTML = "";
          } else if (request5.status === 404) {
            // Domínio não registrado
            resApiDominio5.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudo5}.com.br`;
          }
        }
      };
      request5.send();

      request6.open("GET", apiUrl6, true);
      request6.onreadystatechange = function () {
        if (request6.readyState === 4) {
          if (request6.status === 200) {
            // Domínio registrado
            resApiDominio6.innerHTML = "";
          } else if (request6.status === 404) {
            // Domínio não registrado
            resApiDominio5.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudo6}.com.br`;
          }
        }
      };
      request6.send();

      //codigo do sobre

      const responsesSobre = [];
      for (let i = 0; i < sobreElements.length; i++) {
        const respostaElement = sobreElements[i];

        let promptVariation = ` Breve descrição de como você teve a ideia do nome "${responses[i]}" com no máximo 90 caracteres seja direto ao ponto`;

        try {
          const response = await fetch(
            "https://api.openai.com/v1/completions",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY,
              },
              body: JSON.stringify({
                model: "text-davinci-003",
                prompt: promptVariation,
                max_tokens: 50,
                temperature: 0.5,
              }),
            }
          );
          const data = await response.json();

          // responsesSobre.push(data.choices[0].text);
          respostaElement.innerHTML = data.choices[0].text;
        } catch (error) {
         // console.log(error);
          //respostaElement.innerHTML = "Ocorreu um erro ao receber a resposta.";
        }
      }

      //mais respostas

      const responsesMore = [];
      for (let i = 0; i < respostaElementsMore.length; i++) {
        const respostaElement = respostaElementsMore[i];

        //  console.log(` selecionado ${pergunta}.`);
        //  console.log(` selecionado a descrição ${descricao}.`);
        //  console.log(` selecionado a localização ${cidade}.`);

        const usado = document.querySelector(
          'input[name="usado"]:checked'
        ).value;
        //   console.log(` selecionado ${usado}.`);

        const TipoResposta = document.querySelector(
          'input[name="TipoResposta"]:checked'
        ).value;
        //     console.log(` selecionado ${TipoResposta}.`);

        const estilo = document.querySelector(
          'input[name="estilo"]:checked'
        ).value;
        //   console.log(` selecionado ${estilo}.`);

        let promptVariation = `Crie para mim um nome muito semelhante a "${pergunta}" a palavra não pode ter cido usada antes. comercial Exclusivo, memorável, simples, relevante, original e curto. Use ${estilo}. para ser usado como "${usado}". Com a seguinte descrição "${descricao}". o Lugar onde vai ser vendido "${cidade}. Mostre "${TipoResposta}. Crie uma palavra apenas"`;

        try {
          const response = await fetch(
            "https://api.openai.com/v1/completions",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY,
              },
              body: JSON.stringify({
                model: "text-davinci-003",
                prompt: promptVariation,
                max_tokens: 10,
                temperature: 0.9,
              }),
            }
          );
          const data = await response.json();

          responsesMore.push(data.choices[0].text);
          // responsesMore

          //  responsesMore.push(data.choices[0].text);
          // respostaElement.innerHTML = data.choices[0].text;

          if (data.choices[0].text.includes(".")) {
            const respostaSemPonto = data.choices[0].text.replace(/\./g, "");
            respostaElement.innerHTML = respostaSemPonto;
          }
        } catch (error) {
         // console.log(error);
          //respostaElement.innerHTML = "Ocorreu um erro ao receber a resposta.";
        }
      }

      //pega o resultado more

      let elementoMore = document.getElementById("respostaMore");
      let elementoMore2 = document.getElementById("respostaMore2");
      let elementoMore3 = document.getElementById("respostaMore3");
      let elementoMore4 = document.getElementById("respostaMore4");
      let elementoMore5 = document.getElementById("respostaMore5");
      let elementoMore6 = document.getElementById("respostaMore6");

      let resApiDominioMore = document.getElementById("resApiDominioMore");
      let resApiDominioMore2 = document.getElementById("resApiDominioMore2");
      let resApiDominioMore3 = document.getElementById("resApiDominioMore3");
      let resApiDominioMore4 = document.getElementById("resApiDominioMore4");
      let resApiDominioMore5 = document.getElementById("resApiDominioMore5");
      let resApiDominioMore6 = document.getElementById("resApiDominioMore6");

      let conteudoMore = elementoMore.innerText;
      let conteudoMore2 = elementoMore2.innerText;
      let conteudoMore3 = elementoMore3.innerText;
      let conteudoMore4 = elementoMore4.innerText;
      let conteudoMore5 = elementoMore5.innerText;
      let conteudoMore6 = elementoMore6.innerText;

      const apiUrlMore = `https://rdap.registro.br/domain/${conteudoMore}.com.br`;
      const apiUrlMore2 = `https://rdap.registro.br/domain/${conteudoMore2}.com.br`;
      const apiUrlMore3 = `https://rdap.registro.br/domain/${conteudoMore3}.com.br`;
      const apiUrlMore4 = `https://rdap.registro.br/domain/${conteudoMore4}.com.br`;
      const apiUrlMore5 = `https://rdap.registro.br/domain/${conteudoMore5}.com.br`;
      const apiUrlMore6 = `https://rdap.registro.br/domain/${conteudoMore6}.com.br`;

      const requestMore = new XMLHttpRequest();
      const requestMore2 = new XMLHttpRequest();
      const requestMore3 = new XMLHttpRequest();
      const requestMore4 = new XMLHttpRequest();
      const requestMore5 = new XMLHttpRequest();
      const requestMore6 = new XMLHttpRequest();

      requestMore.open("GET", apiUrlMore, true);
      requestMore.onreadystatechange = function () {
        if (requestMore.readyState === 4) {
          if (requestMore.status === 200) {
            // Domínio registrado
            resApiDominio.innerHTML = "";
          } else if (requestMore.status === 404) {
            // Domínio não registrado
            resApiDominioMore.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudoMore}.com.br`;
          }
        }
      };
      requestMore.send();

      requestMore2.open("GET", apiUrlMore2, true);
      requestMore2.onreadystatechange = function () {
        if (requestMore2.readyState === 4) {
          if (requestMore2.status === 200) {
            // Domínio registrado
            resApiDominio2.innerHTML = "";
          } else if (requestMore2.status === 404) {
            // Domínio não registrado
            resApiDominioMore2.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudoMore2}.com.br`;
          }
        }
      };
      requestMore2.send();

      requestMore3.open("GET", apiUrlMore3, true);
      requestMore3.onreadystatechange = function () {
        if (requestMore3.readyState === 4) {
          if (requestMore3.status === 200) {
            // Domínio registrado
            resApiDominio3.innerHTML = "";
          } else if (requestMore3.status === 404) {
            // Domínio não registrado
            resApiDominioMore3.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudoMore3}.com.br`;
          }
        }
      };
      requestMore3.send();

      requestMore4.open("GET", apiUrlMore4, true);
      requestMore4.onreadystatechange = function () {
        if (requestMore4.readyState === 4) {
          if (requestMore4.status === 200) {
            // Domínio registrado
            resApiDominio4.innerHTML = "";
          } else if (requestMore4.status === 404) {
            // Domínio não registrado
            resApiDominioMore4.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudoMore4}.com.br`;
          }
        }
      };
      requestMore4.send();

      requestMore5.open("GET", apiUrlMore5, true);
      requestMore5.onreadystatechange = function () {
        if (requestMore5.readyState === 4) {
          if (requestMore5.status === 200) {
            // Domínio registrado
            resApiDominio5.innerHTML = "";
          } else if (requestMore5.status === 404) {
            // Domínio não registrado
            resApiDominioMore5.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudoMore5}.com.br`;
          }
        }
      };
      requestMore5.send();

      requestMore6.open("GET", apiUrlMore6, true);
      requestMore6.onreadystatechange = function () {
        if (requestMore6.readyState === 4) {
          if (requestMore6.status === 200) {
            // Domínio registrado
            resApiDominio6.innerHTML = "";
          } else if (requestMore6.status === 404) {
            // Domínio não registrado
            resApiDominioMore6.innerHTML = `<i class="fa-solid fa-circle-check" style="color:  rgb(24, 168, 62);"></i> ${conteudoMore6}.com.br`;
          }
        }
      };
      requestMore6.send();

      //sobre more

      const responsesSobreMore = [];
      for (let i = 0; i < sobreElementsMore.length; i++) {
        const respostaElement = sobreElementsMore[i];

        let promptVariation = ` Breve descrição de como você teve a ideia do nome "${responsesMore[i]}" com no máximo 90 caracteres`;

       // console.log(`${responsesMore[i]}`);

        try {
          const response = await fetch(
            "https://api.openai.com/v1/completions",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY,
              },
              body: JSON.stringify({
                model: "text-davinci-003",
                prompt: promptVariation,
                max_tokens: 50,
                temperature: 0.5,
              }),
            }
          );
          const data = await response.json();

          responsesSobreMore.push(data.choices[0].text);
          respostaElement.innerHTML = data.choices[0].text;
        } catch (error) {
         // console.log(error);
          respostaElement.innerHTML = "Ocorreu um erro ao receber a resposta.";
        }
      }
    });
  }
});
``;
