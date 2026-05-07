const ctxLinha = document.getElementById('graficoLinha').getContext('2d');
const graficoLinha = new Chart(ctxLinha, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']