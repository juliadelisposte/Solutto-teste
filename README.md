# Desafio Front-end

Este é um projeto simples desenvolvido para um desafio de front-end. O objetivo é criar uma animação interativa onde avatares aparecem na tela e se movem para o topo da página, com uma animação de entrada que é acionada por um botão. O botão também é responsável por tocar um áudio após a animação ser completada.

## Funcionalidades

- **Animação de Avatares**: Vários avatares aparecem na tela, com animações de subida ou descida dependendo da largura da tela. Eles desaparecem após alguns segundos.
- **Áudio**: Um áudio é reproduzido após a animação ser concluída.
- **Botão de Repetição**: O botão "Repetir animação" aparece ao final da animação e permite reiniciar a animação.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3** (com animações e gradientes)
- **JavaScript** (com manipulação de DOM)
- **Áudio (MP3)**: Para adicionar a interatividade com o som.

## Como Usar

1. Clone o repositório:
    ```bash
    git clone https://github.com/juliadelisposte/Solutto-teste.git
    ```

2. Abra o arquivo `index.html` no seu navegador.

3. Clique no botão "Repetir animação" para visualizar a animação dos avatares e ouvir o áudio.

> **Nota Importante**: Alguns navegadores podem não permitir a reprodução automática de áudio na primeira vez que o fluxo ocorrer, devido a políticas de reprodução de mídia sem interação do usuário. No entanto, se você rodar este projeto no StackBlitz, o áudio será tocado normalmente, já que a plataforma permite a execução de áudios sem essas restrições.
