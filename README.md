# Aura Horlogerie — Boutique Multimarcas de Alta Relojoaria

Projeto desenvolvido para a disciplina de **Desenvolvimento de Interfaces (2/2026)** — CEUB.

## Estrutura de Arquivos
- `index.html`: Estrutura semântica principal, navbar, animação SVG, carrossel, vitrines, modais e rodapé.
- `login.html`: Página dedicada para autenticação e cadastro de clientes com sincronização de tema.
- `style.css`: Estilização personalizada, variáveis CSS (Modo Claro/Escuro), responsividade e microinterações.
- `script.js`: Banco de dados de 20 relógios, lógica de busca/ordenação, carrinho, favoritos, animação de scroll e autenticação.

## Passo a Passo do Desenvolvimento
1. **Arquitetura e Identidade Visual:** Definição da paleta Creme (`#FFFDF2`), Preto (`#000000`) e Vinho (`#6B0F1A`) com validação de contraste WCAG AAA.
2. **Estruturação HTML5 + Bootstrap 5.3:** Criação da barra de navegação responsiva, carrossel de destaques, sistema de grid (`row` / `col-lg-3`), painéis laterais (`Offcanvas`) e janelas modais.
3. **Animação Interativa no Scroll:** Desenvolvimento de um relógio vetorial (SVG) dividido em 5 camadas independentes controladas via JavaScript (`getBoundingClientRect` e `Math.sin`) conforme a rolagem da página.
4. **Catálogo Dinâmico e Filtros:** Implementação de array com 20 produtos de marcas internacionais, renderização dinâmica via DOM, pesquisa textual em tempo real, filtro por categorias e ordenação por preço/nome.
5. **Gestão de Estado com `localStorage`:** Persistência de carrinho de compras, lista de desejos (favoritos), preferência de tema (claro/escuro), histórico de pedidos e sessão do usuário.
6. **Fluxo de Autenticação (`login.html`):** Criação da tela de login/cadastro e bloqueio inteligente no carrinho: caso o visitante tente comprar deslogado, o ID do produto é salvo em `pendingCartProductId` e adicionado automaticamente após o login.
7. **Versionamento:** Controle de versões realizado via Git e hospedado no GitHub.