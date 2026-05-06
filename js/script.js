// Array com os nomes dos dias da semana
const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

// Array com os meses para formatar a data
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

// Objeto contendo o seu horário baseado na imagem
const gradeDeAulas = {
    0: '<p class="text-success fw-bold text-center mt-3">Dia livre! Bom descanso.</p>', // Domingo
    1: `
        <div class="mb-3">
            <strong class="text-dark fs-5">Banco de Dados</strong><br>
            <span class="text-danger fw-bold">19:00 - 22:30</span><br>
            <span class="text-muted">📍 Lab. de Inf. 02 | 👨‍🏫 Prof. Lucas</span>
        </div>
    `, // Segunda
    2: `
        <div class="mb-3">
            <strong class="text-dark fs-5">Teorias do Currículo</strong><br>
            <span class="text-danger fw-bold">19:00 - 20:40</span><br>
            <span class="text-muted">📍 Sala 05C | 👩‍🏫 Profa. Luthiane</span>
        </div>
        <hr>
        <div class="mt-3">
            <strong class="text-dark fs-5">PeCC V</strong><br>
            <span class="text-danger fw-bold">20:50 - 22:30</span><br>
            <span class="text-muted">📍 Lab. de Inf. 04 | 👩‍🏫 Profa. Marcele</span>
        </div>
    `, // Terça
    3: `
        <div class="mb-3">
            <strong class="text-dark fs-5">Interface Homem-Computador</strong><br>
            <span class="text-danger fw-bold">19:00 - 20:40</span><br>
            <span class="text-muted">📍 Lab. de Inf. 04 | 👩‍🏫 Profa. Andréa</span>
        </div>
        <hr>
        <div class="mt-3">
            <strong class="text-dark fs-5">Educação de Jovens e Adultos</strong><br>
            <span class="text-danger fw-bold">20:50 - 22:30</span><br>
            <span class="text-muted">📍 Sala 05C | 👩‍🏫 Profa. Letícia</span>
        </div>
    `, // Quarta
    4: `
        <div class="mb-3">
            <strong class="text-dark fs-5">Programação Web I</strong><br>
            <span class="text-danger fw-bold">19:00 - 22:30</span><br>
            <span class="text-muted">📍 Lab. de Inf. 02 | 👨‍🏫 Prof. Juliano</span>
        </div>
    `, // Quinta
    5: `
        <div class="mb-3">
            <strong class="text-dark fs-5">Metodologia do Ens. da Comp II</strong><br>
            <span class="text-danger fw-bold">19:00 - 22:30</span><br>
            <span class="text-muted">📍 Sala 05C | 👩‍🏫 Profa. Andréa</span>
        </div>
    `, // Sexta
    6: '<p class="text-success fw-bold text-center mt-3">Dia livre! Bom descanso.</p>' // Sábado
};

// Lógica para pegar a data atual do navegador
const dataAtual = new Date();
const diaSemanaIndex = dataAtual.getDay(); // Retorna de 0 a 6
const diaMes = dataAtual.getDate();
const mesIndex = dataAtual.getMonth();

// Monta o texto bonito (ex: "Quarta-feira, 6 de Maio")
const textoDataFormatada = `${diasSemana[diaSemanaIndex]}, ${diaMes} de ${meses[mesIndex]}`;

// Injeta as informações no HTML
document.getElementById('texto-data').innerText = textoDataFormatada;
document.getElementById('lista-aulas').innerHTML = gradeDeAulas[diaSemanaIndex];