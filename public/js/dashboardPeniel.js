const dadosDevocionais = [0, 1, 2, 3, 4, 5, 6]; 
const temas = { labels: ['Sabedoria', 'Fé', 'Amor','Gratidão', 'Promessas'], valores: [10, 5, 3, 3, 7] };

const ctxLinha = document.getElementById('graficoLinha').getContext('2d');
new Chart(ctxLinha, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [{
            label: 'Devocionais Feitos',
            data: dadosDevocionais,
            borderColor: '#16a085',
            backgroundColor: 'rgba(22, 160, 132, 0.77)',
            fill: true,
            tension: 0.3 
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
    }
});

const ctxBarras = document.getElementById('graficoPizza').getContext('2d'); 

new Chart(ctxBarras, {
    type: 'bar',
    data: {
        labels: temas.labels,
        datasets: [{
            label: 'Total de Estudos',
            data: [3, 2, 5, 6, 2],
            backgroundColor: '#16a085', 
            borderRadius: 5 
        }]
    },
    options: {
        indexAxis: 'x', 
        responsive: true,
        plugins: {
            legend: { display: false } 
        },
        scales: {
            x: { beginAtZero: true }
        }
    }
});