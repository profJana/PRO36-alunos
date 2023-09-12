class Form {
  constructor() {
    //criar o inpout para inserir o nome
    //criar o botão para jogar
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    //criar a classe css para o input
    //criar a classe css para o button
    this.greeting.class("greeting");
  }

  //função criada para quando quiser esconder os elementos
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //função que irá executar quando clicar no botão play
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      //esconde o input
      //esconde o botão
      var message = `
      Olá, ${this.input.value()}
      </br>espere o outro jogador entrar...`;
      this.greeting.html(message);
    });
  }

  //função que irá mostrar todo o formulário
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
