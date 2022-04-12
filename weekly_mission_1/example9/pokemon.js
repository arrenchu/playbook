class pokemon {
    constructor(name) {
      // this es una variable para referenciar el valor del contexto local de esta clase
      this.name = name // Estás variables se le conocen como atributos
    }
  
    // método
    // this.name es la variable que se guarda en el contexto local
    // message es una variable que se le pasa al ejecutar este método

   // exports.info = (message) => {
   //     console.log(`info: ${message}`)
  //    }

    sayHello() {
      console.log(`mi pokemon ${this.name} te saluda`)
    }
  
    sayMessage(message) {
        console.log(`mi pokemon ${this.name} dice ${message}`)
    }
  }
  
  // Esta clase se exporta en este módulo
  module.exports = pokemon