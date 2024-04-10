# App de Timer

Este projeto foi desenvolvido em HTML e CSS com javascript para uso no Desktop e teve um objetivo de criar um timer regressivo.

A ideia foi experimentar os conceitos de HTML e CSS.

O projeto está separado em um arquivo chamado index.html com interdependência com o caminho relativo para os arquivos `./css/styles.css` e `./js/methods.js`.

O ambiente de desenvolvimento usado foi o `NeoVim` com `NVChad`;

## Features:

- Selecionar a hora e o minuto;
- Selecionar e aplicar a imagem no fundo dinamicamente;
- Opção para start e stop;

*TO DO*:
- Adicionar uma notificação em audio quando o tempo acabar;
- Adicionar opções de temas e cores como menu;

## Execução:

Para execução do projeto, foi usado o `browser-sync` e pode ser instanciado pelo comando abaixo;

```bash
$ npx browser-sync start --server --files "*/*"
```

## Testes para ambiente externo:

Para os testes em ambiente externo, foi usado o proxy reverso chamado [localhost.run](https://localhost.run)

```bash
$ $ ssh -R 80:localhost:3000 nokey@localhost.run
```
