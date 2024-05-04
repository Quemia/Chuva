# Página de Trabalho
Na parte de html/scss/ts preparamos um [protótipo de alta fidelidade no figma](https://www.figma.com/proto/0D27YdXU8ibf0AhsBC2OEm/Chuva---Exerc%C3%ADcio-Frontend?page-id=0%3A1&type=design&node-id=1-123&viewport=404%2C346%2C0.24&t=qF57GDZnZJyE7F7q-1&scaling=scale-down&starting-point-node-id=1%3A123&show-proto-sidebar=1&mode=design) de uma tela para você implementar o HTML + CSS. Você pode fazer em CSS puro, utilizar pré-processadores CSS (SASS, LESS, etc), ou mesmo utilizar um framework (Bootstrap, Foundation, Ant, etc), utilize a ferramenta que você se sentir melhor e que lhe traga o melhor resultado.)

![Screenshot Figma](https://github.com/chuva-inc/exercicios-2023/raw/master/ts/src/assets/figma.jpg)
-> [Link para o Protótipo](https://www.figma.com/proto/0D27YdXU8ibf0AhsBC2OEm/Chuva---Exerc%C3%ADcio-Frontend?page-id=0%3A1&type=design&node-id=1-123&viewport=404%2C346%2C0.24&t=qF57GDZnZJyE7F7q-1&scaling=scale-down&starting-point-node-id=1%3A123&show-proto-sidebar=1&mode=design)

-> [Link para o Editável](https://www.figma.com/file/0D27YdXU8ibf0AhsBC2OEm/Chuva---Exerc%C3%ADcio-Frontend?type=design&node-id=0%3A1&mode=design&t=yAHAJDpJya32qSBU-1)


### Como rodar

Dependências:

* Node/npm
* Cypress

Rode o seguinte comando para instalar o ambiente:

```
npm install
```

Para rodar os testes, rode o seguinte comando:

```
npm run test
```


Para rodar desenvolver, rode os seguintes comandos:

Para ligar o ambiente
```
ng serve
```

Para rodar a UI de testes
```
npx cypress open --env type=base
```

### Resultados do cypress
![Screenshot_20240501_185325](https://github.com/Quemia/Chuva/assets/55935949/00246f0a-d5dc-44a3-a33a-dad4eef196b8)
![Screenshot_20240501_185342](https://github.com/Quemia/Chuva/assets/55935949/07aadf0c-3a0f-4a72-a315-040a35b9812f)




### Dicas de resolução

Pra facilitar sua vida, nosso repositório já vem com pronto pra consumo, e mesmo que você não for familiar com o Angular ou Typescript, dá pra só colocar o html e o scss nos arquivos corretos, e vai funcionar (inclusive os testes automatizados vão passar).

Não esqueca de commitar os screenshots que o cypress gera, utilizaremos eles na correção do exercício.



