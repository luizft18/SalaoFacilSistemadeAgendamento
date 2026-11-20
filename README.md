# Salão Fácil

Projeto funcional desenvolvido **exclusivamente para fins de demonstração**, simulando uma interface de agendamento do salão de festas do Edifício Residencial Parque Verde[cite: 1]. A aplicação conta com página principal de reserva, página de confirmação e página de contato, utilizando armazenamento local no navegador (`localStorage`) para simular a persistência e a disponibilidade de datas e horários sem dependência de backend.

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
 │    │    └── SF.png
 │    └── js/
 │         ├── script-confirmacao.js
 │         ├── script-contato.js
 │         └── script.js
 ├── confirmacao.html
 ├── contato.html
 └── pagina.html