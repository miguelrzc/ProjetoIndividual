const dadosDevocionais = [0, 1, 2, 3, 4, 5, 6];
const temas = {
  labels: ["Sabedoria", "Fé", "Amor", "Gratidão", "Promessas"],
  valores: [10, 5, 3, 3, 7],
};

const ctxLinha = document.getElementById("graficoLinha").getContext("2d");
new Chart(ctxLinha, {
  type: "line",
  data: {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
    datasets: [
      {
        label: "Devocionais Feitos",
        data: dadosDevocionais,
        borderColor: "#16a085",
        backgroundColor: "rgba(22, 160, 132, 0.77)",
        fill: true,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
  },
});

const ctxBarras = document.getElementById("graficoPizza").getContext("2d");

new Chart(ctxBarras, {
  type: "bar",
  data: {
    labels: temas.labels,
    datasets: [
      {
        label: "Total de Estudos",
        data: [3, 2, 5, 6, 2],
        backgroundColor: "#16a085",
        borderRadius: 5,
      },
    ],
  },
  options: {
    indexAxis: "x",
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { beginAtZero: true },
    },
  },
});

window.onload = function () {
  var idUsuario = sessionStorage.ID_USUARIO;

  if (idUsuario == undefined) {
    window.location = "Login.html";
  } else {
    document.querySelector("h1 span").innerHTML = sessionStorage.NOME_USUARIO;

    obterDadosGrafico(idUsuario);
  }
};

function obterDadosGrafico(idUsuario) {
  fetch(`/devocional/dashboard/${idUsuario}`, { cache: "no-store" })
    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then(function (respostaJson) {
          console.log(
            `Dados recebidos do banco: ${JSON.stringify(respostaJson)}`,
          );

          var vetorLabels = [];
          var vetorDados = [];
          for (var i = 0; i < respostaJson.length; i++) {
            var registro = respostaJson[i];

            vetorLabels.push(registro.categoria);
            vetorDados.push(registro.quantidade);
          }

          plotarGrafico(vetorLabels, vetorDados);
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function plotarGrafico(labelsGrafico, dadosGrafico) {
  const ctxBarras = document.getElementById("graficoPizza").getContext("2d");

  new Chart(ctxBarras, {
    type: "bar",
    data: {
      labels: labelsGrafico,
      datasets: [
        {
          label: "Total de Estudos",
          data: dadosGrafico,
          backgroundColor: "#16a085",
          borderRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 1 } },
      },
    },
  });
}
