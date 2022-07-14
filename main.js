class Computadora {
    constructor(marca,modelo,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

class carrito {
    constructor(total){
        this.laptop = []
        this.total = total
    }
agregarAlCarrito (computadora){
    this.computadora.push(laptop)
    this.total += laptop.precio
    }
MostrarCarrito(){
    this.laptop.forEach(listado => {
        console.log(listado);
      });
   }

}

let modelo
let marca
let seguir = true


const laptop = new Computadora ("HP","ENVY","2.699.500")
const laptop2 = new Computadora ("HP","PAVILION","2.789.000")
const laptop3 = new Computadora ("HP","INTETL COREi7","3.520.555")
const laptop4 = new Computadora ("Apple","Macbook Air","2.888.555")
const laptop5 = new Computadora ("Apple","MacbookPro","4.355.000")
const laptop6 = new Computadora ("Apple","MacbookPro14","5.244.440")
const laptop7 = new Computadora ("Lenovo","IdeaPad","1.874.000")
const laptop8 = new Computadora ("Lenovo","V-serie","1.800.880")
const laptop9 = new Computadora ("Lenovo","E41-55","1.289.000")
const carrito = new carrito (0);


// Alert , para seguir comprando//
do {
while (seguir){
    marca = prompt("Ingrese la marca de la computadora.(Hp,Apple,Lenovo)").toLowerCase();
    while ((marca != "Hp") && (marca != "Apple") && (marca !="Lenovo"));
    alert ("Error ingrese una marca valida")
    marca = prompt("Ingrese la marca de la Laptop; (Hp,Apple,Lenovo)").toLowerCase();
} 



//switch para que usuario seleccion Marca y luego Modelo//

switch (marca) {
    case "Hp":
        modelo = prompt("Elije el modelo. ENVY,PAVILION,INTETL COREi7").toLowerCase();
        while ((modelo != "ENVY") && (modelo =!"PAVILION") && (modelo =! "INTETL COREi7")){

            alert ("error ingrese un modelo valido")
            modelo = prompt("Elije el modelo del producto. HP454,HP6666,Hp585").toLowerCase();
            }

            switch(modelo){
                case "ENVY":
                    alert("Usted eligió  HP ENVY (Precio: $2.699.500)")
                    carrito.agregarAlCarro(laptop)
                break;
                case "PAVILION":
                    alert("Usted eligió HP PAVILION (Precio: $2.789.000)")
                    carrito.agregarAlCarro(laptop2)  
                break;
                case "INTETL COREi7":
                    alert("Usted eligió HP INTETL COREi7 (Precio: $3.520.555)")
                    carrito.agregarAlCarro(laptop3)
                break;
            }

            break;
            case "Apple":
                modelo = prompt("Elija el modelo del producto. Macbook Air, MacbookPro, MacbookPro14").toLowerCase()
                while ((modelo != "Macbook Air") && (modelo != "MacbookPro") && (modelo != "MacbookPro14")){
                    alert ("Error ingrese un modelo valido")
                    modelo = prompt("Elija el modelo del producto. Macbook Air, MacbookPro, MacbookPro14").toLowerCase()
                }
                switch(modelo){
                    case "Macbook Air":
                        alert("Usted eligió Apple Macbook Air (Precio: $2.888.555)")
                        carrito.agregarAlCarro(laptop4)
                    break;
                    case "MacbookPro":
                        alert("Usted eligió Apple MacbookPro (Precio: $4.355.000)")
                        carrito.agregarAlCarro(laptop5)
                    break;
                    case "MacbookPro14":
                        alert("Usted eligió Apple MacbookPro14 (Precio: $5.244.440)")
                        carrito.agregarAlCarro(laptop6)
                    break;
                }

                break;
                case "Lenovo":
                    modelo = prompt("Elija el modelo del producto. IdeaPad, V-serie, E41-55").toLowerCase()
                    while ((modelo != "IdeaPad") && (modelo != "V-serie") && (modelo != "E41-55")){
                        alert ("Error ingrese un modelo valido")
                        modelo = prompt("Elija el modelo del producto. IdeaPad, V-serie, E41-55").toLowerCase()
                    }
                    switch(modelo){
                        case ("IdeaPad"):
                            alert("Usted eligió Lenovo IdeaPad (Precio: $1.874.000)")
                            carrito.agregarAlCarro(laptop7)
                        break;
                        case ("V-serie"):
                            alert("Usted eligió Lenovo V-serie (Precio: $1.800.880)")
                            carrito.agregarAlCarro(laptop8)
                        break;
                        case ("E41-55"):
                            alert("Usted eligió Lenovo E41-55 (Precio: $1.289.000)")
                            carrito.agregarAlCarro(laptop9)
                        break;
                    }
                break;
               
        }

            let opcion = prompt("¿Desea seguir comprando? Si/No").toLowerCase()
            if (opcion == "no"){
                seguir = false;
                
            }
        

             
        
        
        alert(`Ver consola para ver la lista de productos`)
        carrito.MostrarCarrito()
        alert(`El total de su compra es de: ${carrito.total}`)

            

            











