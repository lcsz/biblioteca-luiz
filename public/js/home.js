(function() {
    this.HomePlugin = function(args) {
        this.livros = [{"id": 1, "nome": "O Pequeno Principe"}];
    }

    // Metodos Públicos 
    HomePlugin.prototype.buscarLivros = function() {
        console.log("buscarLivros");
        getLivros();
    }


    // Metodos Privados
    function getLivros() {
        console.log("getLivros");
    }

}());
