var meuGraficoBarras;
var meuGraficoLinha;

window.onload = function () {
  let idUsuario = sessionStorage.ID_USUARIO;

  if (idUsuario == undefined) {
    window.location = "../Login.html";
  } else {
    document.querySelector("h1 span").innerHTML = sessionStorage.NOME_USUARIO;

    obterDadosGrafico(idUsuario);
    obterCards(idUsuario);
    obterTodosDevocionais(idUsuario);
  }
};

function plotarGraficoLinha(labelsGrafico, dadosGrafico, maiorValor, menorValor, maiorData, menorData) {
  let ctxLinha = document.getElementById("grafico-linha").getContext("2d");
  let coresDosPontos = [];
  let textosDosPontos = [];
  let subtituloGrafico = "Sem registros para comparar";

  if (maiorValor == menorValor && maiorValor > 0) {
    subtituloGrafico = "Maior e menor dia: " + maiorData + " - " + maiorValor;
  } else if (maiorValor > 0) {
    subtituloGrafico =
      "Mais registros: " +
      maiorData +
      " (" +
      maiorValor +
      ") | Menos registros: " +
      menorData +
      " (" +
      menorValor +
      ")";
  }

  for (let i = 0; i < dadosGrafico.length; i++) {
    if (dadosGrafico[i] == maiorValor && maiorValor != menorValor) {
      coresDosPontos.push("#27ae60");
      textosDosPontos.push("Dia com mais registros");
    } else if (dadosGrafico[i] == menorValor && maiorValor != menorValor) {
      coresDosPontos.push("#e74c3c");
      textosDosPontos.push("Dia com menos registros");
    } else {
      coresDosPontos.push("#16a085");
      textosDosPontos.push("Devocionais no dia");
    }
  }

  if (meuGraficoLinha) {
    meuGraficoLinha.destroy();
  }

  meuGraficoLinha = new Chart(ctxLinha, {
    type: "line",
    data: {
      labels: labelsGrafico,
      datasets: [
        {
          label: "Devocionais por data",
          data: dadosGrafico,
          borderColor: "#16a085",
          backgroundColor: "rgba(22, 160, 132, 0.18)",
          pointBackgroundColor: coresDosPontos,
          pointBorderColor: coresDosPontos,
          fill: true,
          tension: 0.3,
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        subtitle: {
          display: true,
          text: subtituloGrafico,
          color: "#7f8c8d",
          font: {
            size: 13,
          },
          padding: {
            bottom: 12,
          },
        },
        tooltip: {
          callbacks: {
            title: function (contexto) {
              return "Data: " + contexto[0].label;
            },
            label: function (contexto) {
              let indice = contexto.dataIndex;
              return textosDosPontos[indice] + ": " + contexto.parsed.y;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 },
        },
      },
    },
  });
}

function montarDadosProgresso(registros) {
  let devocionaisPorData = {};

  for (let i = 0; i < registros.length; i++) {
    let data = registros[i].data_formatada;

    if (devocionaisPorData[data] == undefined) {
      devocionaisPorData[data] = 0;
    }

    devocionaisPorData[data]++;
  }

  let labels = Object.keys(devocionaisPorData).sort(function (dataA, dataB) {
    return converterDataParaOrdenacao(dataA) - converterDataParaOrdenacao(dataB);
  });
  let dadosGrafico = [];
  let maiorValor = 0;
  let menorValor = 0;
  let maiorData = "";
  let menorData = "";

  for (let i = 0; i < labels.length; i++) {
    let quantidadeDia = devocionaisPorData[labels[i]];

    dadosGrafico.push(quantidadeDia);

    if (i == 0 || quantidadeDia > maiorValor) {
      maiorValor = quantidadeDia;
      maiorData = labels[i];
    }

    if (i == 0 || quantidadeDia < menorValor) {
      menorValor = quantidadeDia;
      menorData = labels[i];
    }
  }

  if (labels.length == 0) {
    return {
      labels: ["Sem registros"],
      dados: [0],
      maiorValor: 0,
      menorValor: 0,
      maiorData: "",
      menorData: "",
    };
  }

  return {
    labels: labels,
    dados: dadosGrafico,
    maiorValor: maiorValor,
    menorValor: menorValor,
    maiorData: maiorData,
    menorData: menorData,
  };
}

function converterDataParaOrdenacao(dataFormatada) {
  let partes = dataFormatada.split("/");
  let dia = Number(partes[0]);
  let mes = Number(partes[1]) - 1;
  let ano = Number(partes[2]);

  return new Date(ano, mes, dia);
}

function obterDadosGrafico(idUsuario) {
  fetch(`/devocional/dashboard/${idUsuario}`, { cache: "no-store" }).then(
    function (resposta) {
      if (resposta.ok) {
        resposta.json().then(function (respostaJson) {
          let vetorLabels = [
            "Fé",
            "Gratidão",
            "Oração",
            "Amor",
            "Sabedoria",
            "Propósito",
          ];
          let vetorDados = [0, 0, 0, 0, 0, 0];

          for (let i = 0; i < respostaJson.length; i++) {
            let registro = respostaJson[i];

            if (registro.categoria == "Fé") {
              vetorDados[0] = registro.quantidade;
            } else if (registro.categoria == "Gratidão") {
              vetorDados[1] = registro.quantidade;
            } else if (registro.categoria == "Oração") {
              vetorDados[2] = registro.quantidade;
            } else if (registro.categoria == "Amor") {
              vetorDados[3] = registro.quantidade;
            } else if (registro.categoria == "Sabedoria") {
              vetorDados[4] = registro.quantidade;
            } else if (registro.categoria == "Propósito") {
              vetorDados[5] = registro.quantidade;
            }
          }

          plotarGraficoBarras(vetorLabels, vetorDados);
        });
      }
    },
  );
}

function plotarGraficoBarras(labelsGrafico, dadosGrafico) {
  let ctxBarras = document.getElementById("grafico-barras").getContext("2d");

  if (meuGraficoBarras) {
    meuGraficoBarras.destroy();
  }

  meuGraficoBarras = new Chart(ctxBarras, {
    type: "bar",
    data: {
      labels: labelsGrafico,
      datasets: [
        {
          label: "Total de estudos",
          data: dadosGrafico,
          backgroundColor: "#16a085",
          borderRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
    },
  });
}

function obterCards(idUsuario) {
  fetch(`/devocional/cards/${idUsuario}`, { cache: "no-store" }).then(
    function (resposta) {
      if (resposta.ok) {
        resposta.json().then(function (respostaJson) {
          let dados = respostaJson[0];

          let metaTotal = 20;
          if (dados && dados.meta_total) {
            metaTotal = dados.meta_total;
          }

          let totalFeitos = 0;
          if (dados && dados.totalDevocionais) {
            totalFeitos = dados.totalDevocionais;
          }

          let porcentagem = 0;
          if (metaTotal > 0) {
            porcentagem = Math.round((totalFeitos / metaTotal) * 100);
          }

          document.getElementById("txt_meta").innerHTML = metaTotal;
          document.getElementById("txt_realizados").innerHTML = totalFeitos;
          document.getElementById("txt_porcentagem").innerHTML =
            porcentagem + "%";
          document.getElementById("select_meta").value = metaTotal;

          atualizarStatus(porcentagem);
        });
      }
    },
  );
}

function atualizarCardsTemporarios() {
  let metaSelecionada = Number(document.getElementById("select_meta").value);
  let totalFeitos = Number(document.getElementById("txt_realizados").innerText);
  let novaPorcentagem = 0;

  if (metaSelecionada > 0) {
    novaPorcentagem = Math.round((totalFeitos / metaSelecionada) * 100);
  }

  document.getElementById("txt_meta").innerHTML = metaSelecionada;
  document.getElementById("txt_porcentagem").innerHTML = novaPorcentagem + "%";

  atualizarStatus(novaPorcentagem);
}

function obterTodosDevocionais(idUsuario) {
  fetch(`/devocional/lista-completa/${idUsuario}`, { cache: "no-store" }).then(
    function (resposta) {
      if (resposta.ok) {
        resposta.json().then(function (respostaJson) {
          let lista = document.getElementById("lista_todos_devocionais");
          lista.innerHTML = "";

          for (let i = 0; i < respostaJson.length; i++) {
            let registro = respostaJson[i];
            lista.innerHTML += `
<div class="linha-devocional">
<span class="col-data" style="color: var(--texto-leve);">${registro.data_formatada}</span>
<span class="col-passagem">"${registro.versiculo_texto}"</span>
<span class="col-reflexao">${registro.reflexao}</span>
<span class="col-categoria"><span class="tag-categoria">${registro.categoria}</span></span>
</div>
`;
          }

          let progresso = montarDadosProgresso(respostaJson);
          plotarGraficoLinha(
            progresso.labels,
            progresso.dados,
            progresso.maiorValor,
            progresso.menorValor,
            progresso.maiorData,
            progresso.menorData,
          );
        });
      } else if (resposta.status == 204) {
        let progresso = montarDadosProgresso([]);
        plotarGraficoLinha(
          progresso.labels,
          progresso.dados,
          progresso.maiorValor,
          progresso.menorValor,
          progresso.maiorData,
          progresso.menorData,
        );
      }
    },
  );
}

function atualizarStatus(porcentagem) {
  const elStatus = document.getElementById("txt_status");

  if (porcentagem < 50) {
    elStatus.innerHTML = "Abaixo da meta!";
    elStatus.style.color = "#e74c3c";
  } else if (porcentagem <= 70) {
    elStatus.innerHTML = "Continue se esforçando";
    elStatus.style.color = "#f39c12";
  } else if (porcentagem < 100) {
    elStatus.innerHTML = "Falta pouco para bater a meta";
    elStatus.style.color = "#f39c12";
  } else if (porcentagem == 100) {
    elStatus.innerHTML = "Meta atingida! Parabéns!";
    elStatus.style.color = "#27ae60";
  } else {
    elStatus.innerHTML = "Aumente a meta!";
    elStatus.style.color = "#27ae60";
  }
}
