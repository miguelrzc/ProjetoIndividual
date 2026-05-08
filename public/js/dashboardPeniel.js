const dadosDevocionais = [1, 0, 1, 1, 2, 0, 1]; 
const temas = { labels: ['Sabedoria', 'Fé', 'Amor'], valores: [10, 5, 3] };

const ctxLinha = document.getElementById('graficoLinha').getContext('2d');
new Chart(ctxLinha, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [{
            label: 'Devocionais Feitos',
            data: dadosDevocionais,
            borderColor: '#16a085',
            backgroundColor: 'rgba(22, 160, 133, 0.2)',
            fill: true,
            tension: 0.3 
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
    }
});

const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
new Chart(ctxPizza, {
    type: 'doughnut',
    data: {
        labels: temas.labels,
        datasets: [{
            data: temas.valores,
            backgroundColor: ['#2c3e50', '#16a085', '#bdc3c7']
        }]
    }
});