// Pagina de auto testing
// 
// 1- Instalación Cypress en cmd --> en alguna carpeta
//  npm install cypress
// 
// 2- Abrir cypress 
// npx cypress open
// 
// 3- Se abre ventana con dos opciones 
// A- Testear componentes
// B- Testear E2E (de principio a fin) --> Por ahora seleccionamos esta opcion
// 
// 4- Test E2E:
// Continuar con la config
// Seleccionar navegador que utilizamos
// abre el navegador que seleccionamos con un menu especifico de cypress
// 
// 5- Instalar extención en chrome, que es un grabador de cypress --> cypress recorder
// permite grabar tus acciones en una pagina web y te escibe en codigo todas las acciones que realizaste.
// iniciar grabacion -->realizar las acciones correspondientes --> frenar grabacion --> copiar el codigo devuelto en VSC --> alli se puede modificar y editar el codigo de la prueba.
// 
// 6 - Creación de prueba:
// create new spect test
// crear un nuevo archivo para test --> asignarle nombre.cy.js
// te brinda un ejemplo de una prueba que visita una pagina. Esta pagina contiene la documentación oficial de cypress.
// abrir el archivo con VSC para editarlo
// guardar cambios. 
// Luego me va a aparecer el archivo editado en la ventana del cypres, allí ejecuto la prueba y me devuelve si pasó con éxito o no.
// Al margen izquierdo me devuelve los errores y detalles de la prueba.
// 
// 7- Navegacion en la prueba:
// se navega entre los elementos de html, con el uso de los tags, id, class.
// Se coloca primero el padre y luego se ingresa al hijo con el uso de >.
// Son los elementos del DOM y van de manera gerarquica.
// 
// 8- Código de la prueba:
// Todo el codigo de navegación de elementos, urls, etc. Van dentro de los parentesis de los metodos.
// cy. ---> Indica que es un comando de cypress.
// cy.metodo() ---> Hay diversos metodos para realizar acciones en la pag. x ej: get(obtiene los elementos por id,class o tag, tambien por atributos los mismos deben estar completos y entre corchetes por ejemplo [href="https//..."] o [name=nombre]), 
// visit(link al que va a realizar el test), url(link al que se redirije), viewport(tamaño de la patalla).
// cy.metodo().metodo() ---> los metodos pueden ir seguidos. x ej : .should(muestra el contenido, 'https://), 
// .click(hace click sobre los elementos seleccionados), .type(le indica el tipo de dato a insertar en un input), .first(selecciona el primer elemento en una lista de elementos)
// .clear(para borrar), eq(index) ---> permite ubicar un objeto por su posicion index,

// 9- Codigo de programacion de la prueba:
// Primero se coloca un describe que va a contener todos los casos de pruebas, cada it va a ser un caso de prueba. Dentro del it irá el codigo que realiza la prueba automatizada.

// describe('nombre test', () => {
//      it('nombre de caso de prueba', =()=>{
//          cy.visit('https:/');
//          
//      })
// })
// 
// 
// npx cypress run --spec "cypress/e2e/CPrueba35.cy.js"  ---> Comando para correr la prueba desde la terminal.
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
