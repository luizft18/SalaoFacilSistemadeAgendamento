//armazenamento dos dados:
const CHAVE_STORAGE = "salao_facil_reservas";

const form = document.querySelector("#agendamento form");
const inputData = document.getElementById("data-agendamento");

if (inputData) {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  inputData.min = `${ano}-${mes}-${dia}`;
};

const btnDiurno = document.getElementById("horario-agendamento-diurno");
const btnNoturno = document.getElementById("horario-agendamento-noturno");

let horarioSelecionado = "";

const inputHorario = document.createElement("input");
inputHorario.type = "hidden";
inputHorario.name = "horario";
inputHorario.id = "horario-selecionado";
form.appendChild(inputHorario);

function obterDataHojeISO() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  return '${ano}-{mes}-{dia}';
}

inputData.min = obterDataHojeISO();

function lerReservas() {
  const dados = localStorage.getItem(CHAVE_STORAGE);
  return dados ? JSON.parse(dados) : [];
}

function salvarReservas(lista) {
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
}

function atualizarDisponibilidadeHorarios() {
  const data = inputData.value;
  const reservas = lerReservas();

  const ocupadosNaData = reservas
  .filter ((r) => r.data === data)
  .map ((r) => r.horario);

  const diurnoOcupado = ocupadosNaData.includes("Diurno (10h — 16h)");
  const noturnoOcupado = ocupadosNaData.includes("Noturno (18h — 00h)");

  btnDiurno.disabled = diurnoOcupado;
  btnNoturno.disabled = noturnoOcupado;

  if ((horarioSelecionado === "Diurno (10h — 16h)" && diurnoOcupado) || horarioSelecionado === "Noturno (18h - 00h)" && noturnoOcupado) {
    horarioSelecionado = "";
    inputHorario.value = "";
    btnDiurno.classList.remove("selecionado");
    btnNoturno.classList.remove("selecionado");
  }
}

function selecionarHorario(valor, botaoAtivo) {
  if(botaoAtivo.disabled) return;

  horarioSelecionado = valor;
  inputHorario.value = valor;
  
  btnDiurno.classList.toggle("selecionado", botaoAtivo === btnDiurno);
  btnNoturno.classList.toggle("selecionado", botaoAtivo === btnNoturno);
}

btnDiurno.addEventListener("click", () => {
  selecionarHorario("Diurno (10h — 16h)", btnDiurno);
});

btnNoturno.addEventListener("click", () => {
  selecionarHorario("Noturno (18h — 00h)", btnNoturno);
});

inputData.addEventListener("change", () => {
  if (inputData.value && inputData.value < inputData.min) {
    alert("Escolha uma data a partir de hoje");
    inputData.value = ""
    return;
  }
  atualizarDisponibilidadeHorarios();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = inputData.value;
  const nome = document.getElementById("nome").value.trim();
  const apartamento = document.getElementById("apartamento").value.trim();
  const convidados = Number(document.getElementById("convidados").value);
  const tipo = document.getElementById("tipo").value;

  if (!data) {
    alert("Por favor, escolha uma data.");
    return;
  }

  if (data < inputData.min) {
    alert("Não é possível agendar em uma data passada.");
    return;
  }

  if (!horarioSelecionado) {
    alert("Por favor, escolha um horaário (Diurno ou Noturno).");
    return;
  }

  if(convidados < 10 || convidados > 80) {
    alert("O número de convidados deve ser entre 10 e 80.");
    return;
  }

  const reservas = lerReservas();
  const jaReservado = reservas.some((r) => r.data === data && r.horario === horarioSelecionado);

  if (jaReservado) {
    alert("Essa data e horário já foram reservados.");
    atualizarDisponibilidadeHorarios();
    return;
  }

  const novaReserva = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), data,
    horario: horarioSelecionado,
    nome,
    apartamento,
    convidados,
    tipo,
    criadoEm: new Date().toISOString()
  };

  reservas.push(novaReserva);
  salvarReservas(reservas);

  localStorage.setItem("salao_facil_ultima_reserva", JSON.stringify(novaReserva));

  form.reset();
  horarioSelecionado = "";
  inputHorario.value = "";
  btnDiurno.disabled = false;
  btnNoturno.disabled = false;
  btnDiurno.classList.remove("selecionado");
  btnNoturno.classList.remove("selecionado");

  // Redireciona para a página de confirmação definida no action do <form>
  const destinoConfirmacao = form.getAttribute("action") || "confirmacao.html";
  window.location.href = destinoConfirmacao;
});