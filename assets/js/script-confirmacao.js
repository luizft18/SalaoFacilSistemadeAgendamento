const bruto = localStorage.getItem("salao_facil_ultima_reserva");
const resumoEl = document.getElementById("resumo-reserva");

if (bruto) {
const reserva = JSON.parse(bruto);
resumoEl.innerHTML = `
    <p><strong>Responsável:</strong> ${reserva.nome}</p>
    <p><strong>Apartamento:</strong> ${reserva.apartamento}</p>
    <p><strong>Data:</strong> ${reserva.data}</p>
    <p><strong>Horário:</strong> ${reserva.horario}</p>
    <p><strong>Tipo de evento:</strong> ${reserva.tipo}</p>
    <p><strong>Convidados:</strong> ${reserva.convidados}</p>
`;
}
