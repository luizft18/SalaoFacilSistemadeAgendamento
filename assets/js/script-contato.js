document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formulario_contato form");
  const caixaTexto = document.querySelector("#caixa-texto");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (caixaTexto) {
      caixaTexto.value = "";
    }

    alert("Mensagem enviada com sucesso! Você receberá uma resposta pelo seu e-mail.");
  });
});