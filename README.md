Diretivas - componente sem template

## Escolhendo pré processador em um projeto existente

Alterando a extensão do css padrão

```jsx
ng set defaults.styleExt scss
ng set defaults.styleExt less
ng set defaults.styleExt styl

```

## ng lint, ng test, ng e2e

ng lint —> escaneia o código e encontra pequenos erros. No caso do CLI verifica se está de acordo com o Style Guide.

ng test —> executando esse comando, abre o browser com o Karma.

O Karma é uma ferramenta de testes que permite executar cada linha de código do teste em diferentes browsers.

![Captura de Tela 2021-10-25 às 07.10.27.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8afc0d36-a21c-4349-9ead-a0cb81a0bc13/Captura_de_Tela_2021-10-25_as_07.10.27.png)

ng e2e —> No diretório e2e serão realizados os testes end to end. (!!!)

## Estrutura do projeto

package.json —> projetos baseados no npm, pasta de arquivo com estrutura node.js. (npm install)

Cria todos os arquivos necessários para fazer o build da aplicação para produção. 

[ember-cli](https://www.notion.so/ember-cli-b3986504358442019f6f1cb1ca408a35)

![Captura de Tela 2021-10-26 às 06.17.56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8b21c6b4-e9ab-4437-b42b-193eaae99c77/Captura_de_Tela_2021-10-26_as_06.17.56.png)

main.ts → arquivo que faz o bootstrap da aplicação

index.ts → faz o export de todos os módulos

polyfills.ts → bibliotecas auxiliares para ajudar no projeto

## ESTRUTURA PACKAGE.JSON

### Dependencies x Devdependencies

1. Dependências necessárias para executar a aplicação (bibliotecas necessárias)
2. dep. necessárias para desenvolver/executar a aplicação (não necessárias após o build de produção).

## Gerando o build de dev

ng build → gera o build de desenvolvimento com três arquivos

index.html → somente com os imports

main.bundle.js → possui todo o código fonte da nossa aplicação (templates html e css)

polyfills → auxilia o browser a reinderizar o nosso código

## build de produção

ng build —prod → build final

gera os mesmos arquivos, porém os arquivos de main e polyfills serão minimizados.

**Obfusca e minifica o código JS da aplicação.**

css e html já minificados e incluídos em main.bundle.js

Diretivas → ***São formas de de passar instruções para o template html - ex. Loop for***

```jsx
<ul>
<li *ngFor="let curso of cursos">
{{ curso }}
</li>
</ul>
```

"Itere (repita) todos os **cursos**, ****e a cada iteração, atribua o valor do elemento atual a uma variável **curso.** 

Replique tb o elemento <li> com valor variável **curso** a cada iteração.

```jsx
//componentes tb são diretivas
template: 
<cursos-lista></cursos-lista>
```

"Crie um componente do Tipo (classe) especificado e renderize a view (template) desse componente nesse lugar.

### Dois tipos de diretivas - Estruturais e de atributos

1. interagem com a view e modificam a estrutura do DOM. Ex: ngFor / ngIf
2. Interagem com o elemento em que foram aplicadas. Ex.: ng-class / ng-style

## Diretiva ngIf

Mesmo comportamento do if no JS, porém não tem o else. Sendo assim precisamos negar a expressão. Ex:

```jsx
<div *ngIf="cursos.length > 0">
    Lista de cursos aqui</div>

<div *ngIf="cursos.length == 0">
    Não existem cursos para serem listados.
</div>
```

Tomar cuidado com o uso do ngIf, pois quando ele é falso ele destrói o elemento, fazer alteração na árvore DOM é muito custoso.

hidden é uma alternativa: (esconder)

```jsx
<h5>hidden como alternativa</h5>
<div [hidden]="!mostrarCursos">
    Lista de cursos aqui</div>

<div [hidden]="mostrarCursos">
    Não existem cursos para serem listados.
</div>
```

### Utilizar o hidden

recomendado para árvore de elementos pequenas.

**exceção** - é menos custoso caso o custo de criar a árvore de elementos seja grande.

### Utilizar o ngIf

recomendando para árvores de elementos grandes.

recomendado para projetos que necessitam de segurança

## ngSwitch e ngSwitchCase → forma de ter vários if`s e else`s.

Tipo o for no python.

```jsx
<div class="container" [ngSwitch]="aba">
    <p *ngSwitchCase="'mapa'">Modo Mapa ativado</p>
    <p *ngSwitchCase="'lista'">Modo Lista ativado</p>
    <p *ngSwitchDefault>Home</p> <!-- modo padrão -->

  </div>
```

## ngFor

permite itere um array através de um loop for → similar ao do JS

```jsx
for (let i = 0; i < cursos.length; i++) { //cada passada da iteração é inserido um indice
			let curso = cursos[i]; //variada local que recebe o elemento do indice i
}
```

## ngClass - diretiva de atributo

Utilizando com diretiva ngClass - component.ts

```jsx
export class DiretivaNgclassComponent implements OnInit {

  meuFavorito: boolean =false;

  constructor() { }

  ngOnInit(): void {

  }

  onClick(){
    this.meuFavorito = !this.meuFavorito
  }

}
```

Utilizando icons com property binding -html

/[https://ajuda.fastcommerce.com.br/como-utilizar-os-icones-do-bootstrap](https://ajuda.fastcommerce.com.br/como-utilizar-os-icones-do-bootstrap)

```jsx
<h1>
    <i class="glyphicon"
    [class.glyphicon-star-empty]="!meuFavorito"
    [class.glyphicon-star]="meuFavorito"
    (click)="onClick()"
    ></i>
</h1>
```

Utilizando com diretiva ngClass - html

```jsx
<h1>
    <i class="glyphicon"
    [ngClass]="{
        'glyphicon-star-empty':!meuFavorito,
        'glyphicon-star': meuFavorito 
    }"
    (click)="onClick()"
    ></i>
</h1>
```

## ngStyle - usado para estilos

Inserindo estilos com property binding:

```jsx
<h5>Styles com property binding (style binding)</h5>

<button
    [style.backgroundColor]="ativo ? 'blue' : 'gray'"
    [style.color]= "ativo ? 'white' : 'black'"
    [style.fontWeight] = "ativo ? 'bold': 'normal'"
    [style.fontSize] ="tamanhoFonte + 'px'"
    (click)="mudarAtivo()"
>

    Mudar atributo para 'ativo'
</button>
```

Inserido com ngStyle

```jsx
<h5>Styles com diretiva ngStyle</h5>

<button
[ngStyle]="{
    'backgroundcolor': ativo ? 'blue' : 'gray',
    'color': ativo ? 'white' : 'black',
    'fontWeight': ativo ? 'bold': 'normal',
    'fontSize': tamanhoFonte + 'px'
}"
(click)="mudarAtivo()"
>
Mudar atributo para 'ativo'
</button>
```

## Operador Elvis - navegação segura entre os objetos

```jsx
<p>Responsável: {{tarefa.responsavel != null ? tarefa.responsavel.nome : ""}}</p>
```

com operador elvis

```jsx
<p>Responsável: {{tarefa.responsavel?.nome}}</p> 
// o interrogação faz a lógica parecida com o código anterior.
// é diferente de nulo? Se sim segue...
```

***O ponto de interrogação faz a verificação se é null ou não***

## ng-content

Utilizado para projeção de conteúdo, permite passar qualquer conteúdo entre as tags de abertura e fechamento do componente criado.</div>
Ex. 

```jsx
<app-exemplo-ng-content>
    <div class="titulo">ng-content</div>
    <div class="corpo">Utilizado para projeção de conteúdo, permite passar qualquer conteúdo entre as tags de abertura e fechamento do componente criado.</div>

</app-exemplo-ng-content>
```

## Diretiva de atributo - ElementRef - referência de qualquer tag no HTML no DOM (referência do elemento).

```jsx
@Directive({
  selector: '[fundoAmarelo]'
})
```

Se eu quiser que a diretiva seja aplicada apenas em parágrafos, buttons.. add essa informação no seletor:

```jsx
@Directive({
  selector: 'p[fundoAmarelo]'
})
@Directive({
  selector: 'button[fundoAmarelo]'
})
```

Evitar o uso de elementRef pois pode trazer vulnerabilidades (ataques xxs). Utilizar o renderer como melhor prática.

## Renderer2 → renderizador, faz modificações no DOM.

```jsx
constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2 
      
    ) {
    //console.log(this.elementRef);
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color',
      'yellow')
   }

}
```
