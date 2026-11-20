# Salão Fácil

Projeto funcional desenvolvido **exclusivamente para fins de demonstração**, simulando uma interface de agendamento do salão de festas do Edifício Residencial Parque Verde. A aplicação conta com página principal de reserva, página de confirmação e página de contato, utilizando armazenamento local no navegador (`localStorage`) para simular a persistência e a disponibilidade de datas e horários sem dependência de backend.

> **Aviso:** Este projeto tem caráter demonstrativo e educacional. Os dados de agendamento são armazenados localmente no navegador do usuário, sem integração com banco de dados real ou envio de reservas entre diferentes dispositivos.

---

## Tecnologias Utilizadas

* **HTML5:** Estrutura semântica das páginas (`pagina.html`, `confirmacao.html` e `contato.html`);
* **CSS3:** Estilização do layout, tipografia, componentes, estados visuais e recursos de acessibilidade (como `.sr-only` e feedback de seleção de turno);
* **JavaScript (Vanilla JS):** Controle de interatividade, validação de campos, bloqueio de datas passadas, verificação de disponibilidade e persistência simulada via `localStorage`.

---

## Ferramentas de Apoio

* **Visual Studio Code (VS Code):** Editor de código utilizado no desenvolvimento e organização do projeto;
* **Google Gemini:** Ferramenta de inteligência artificial utilizada para revisão de código e apoio técnico;
* **Adobe Photoshop:** Utilizado para edição e tratamento das imagens do projeto (`salao_de_festas.png` e `SF.png`).

---

## Instruções de Uso das Páginas

1. pagina.html (Agendamento)

* Acesse a página inicial para conferir as informações sobre o espaço na seção Sobre.

* Na seção Agendamento:

* Escolha a data desejada no campo de calendário.

* Clique sobre um dos turnos disponíveis (Diurno ou Noturno). O botão ficará destacado em verde escuro.

* Preencha o nome do responsável, apartamento, estimativa de convidados (entre 10 e 80) e o tipo de evento.

* Clique em Confirmar reserva para submeter o agendamento e ser direcionado para a tela de confirmação.

2. contato.html (Fale Conosco / Portaria)

* Utilize o card de Informações de Contato para consultar os telefones diretos da portaria e WhatsApp.

* Para enviar uma mensagem formal:

* Preencha os campos de Nome, E-mail e Telefone.

* Digite sua mensagem no campo amplo de texto.

* Ao clicar em Enviar mensagem, um alerta será exibido confirmando o envio e os campos do formulário serão limpos automaticamente.

3. confirmacao.html (Resumo da Reserva)

* Exibe a mensagem de sucesso e os dados detalhados da sua solicitação.

* Utilize os botões centralizados no final do card para navegar:

* Entre em contato conosco: abre a página de suporte (contato.html).

* Voltar para o início: retorna à página principal (pagina.html).

---

## Como Rodar o Projeto Localmente

Basta clonar o repositório e abrir o arquivo pagina.html (ou index.html) em qualquer navegador moderno ou utilizando a extensão Live Server do VS Code.

---

## Estrutura do Projeto

```text
Site/
 ├── assets/
 │    ├── css/
 │    │    ├── style-confirmacao.css
 │    │    ├── style-contato.css
 │    │    └── style.css
 │    ├── img/
 │    │    ├── salao_de_festas.png
 │    │    ├── salao_de_festas_2.png
 │    │    ├── salao_de_festas_3.png
 │    │    ├── salao_de_festas_4.png
 │    │    └── SF.png
 │    └── js/
 │         ├── script-confirmacao.js
 │         ├── script-contato.js
 │         └── script.js
 ├── confirmacao.html
 ├── contato.html
 └── pagina.html
