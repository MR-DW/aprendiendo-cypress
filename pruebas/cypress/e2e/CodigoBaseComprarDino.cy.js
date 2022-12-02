const url_prod = 'https://dinoonline.com.ar';
const url_qa = 'https://qa-test.dinoonline.com.ar';
const url = url_qa;

describe('Prueba de compra n1', () => {
  it('passes', () => {
    cy.viewport('macbook-16');

    //LOGIN
    cy.visit(url + '/super/home');
    cy.get('.btn-user-box').click();
    cy.url().should('contains', url +'/super/login');
    cy.get('#login').click();
    cy.get('#login').type('mpalaversich@rmcuantica.com');
    cy.get('#password').type('12345678');
    cy.wait(1000);
    cy.get('#form_login .btn').click();

    
    cy.wait(3000);
    cy.visit(url + '/super/home');
    // Busca categoría automotor -> neumatico 45.
    cy.get('[href="/super/categoria/supermami-automotor-neumaticos-tamano-45/_/N-dypy9f"]').click({ force: true });
    
    // AÑADIR PRODUCTO AL CARRO neumatico -> khumo.
    
    // ABRE PRODUCTO PARA VERLO
    cy.get('#prod3900264 > .action-control > #add-to-cart').click();
    
    // SELECCIONA METODO DE ENVIO O RETIRO EN TIENDA
    // ENVIO
    // cy.get('#inputEnvio').click({force: true}); 
    // RETIRO EN TIENDA
    // cy.get('#inputRetiro').click({ force: true }); 

    // AÑADE PRODUCTO AL CARRITO
    cy.get('#add-to-cart').click();

    //Vaciar el carrito
    cy.visit(url + '/super/home');
    cy.window().then(win => win.confirmarVaciarCarrito()) // vacia carrito
    cy.get('#actualizarCarroSuper').click();
    
    // ABRIR CARRITO
    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
    cy.url().should('contains', url + '/super/carrito/');
    cy.get('.box-footer .btn-success').click();

    //CHECKOUT

    // DATOS DE FACTURACION
    
    // CONSUMIDOR FINAL
    cy.get('.form-check > input').eq(0).click();
    
    // MONOTRIBUTISTA - RESPONSABLE INCRIPTO
    // cy.get('.form-check > input').eq(1).click();
    // INSERTAR CUIT
    // cy.get('.input-cuit').type('30716222175'); 
    // cy.get('.btn-danger').click();
    
    // BOTON SIGUIENTE
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);
    
    // METODO DE ENTREGA

    // RETIRO EN TIENDA 
    // CAMBIO DE SUCURSAL PARA RETIRO EN TIENDA
    // cy.get('.recuadro a').click();
    // cy.get('.panel-footer-address .btn-success').eq(5).click();
   
    // VUELVE A MENU PRINCIPAL Y ABRE CARRITO DE NUEVO PARA FINALIZAR COMPRA
    // cy.get('.cartMenu > .dropdown-toggle').click();
    // cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
   
    // PAGINA DE CARRITO PARA FINALIZAR COMPRA
    // cy.url().should('contains', url + '/super/carrito/');
    // cy.get('.box-footer .btn-success').click();
    
    //ENVIO A DOMICILIO

    // CAMBIO DE DOMICILIO PARA ENVIO
    cy.get('.recuadro a').first().click();
    cy.get('.nav-tabs > .solapa > a').eq(0).click({ force:true });
    cy.get('.panel-footer-address .btn-success').eq(1).click();

    // VUELVE A MENU PRINCIPAL Y ABRE CARRITO DE NUEVO PARA FINALIZAR COMPRA
    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
   
    // PAGINA DE CARRITO PARA FINALIZAR COMPRA
    cy.url().should('contains', url + '/super/carrito/');
    cy.get('.box-footer .btn-success').click();

    // CONSUMIDOR FINAL
    cy.get('.form-check > input').eq(0).click();
    // BOTON SIGUIENTE
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);

    // SELECCION DE EMPRESA DE TRANSPORTE
    cy.get('#idTransportista').select(1).should('have.value', '1: Object');

    // SELECCION FECHA DE ENTREGA
    cy.get('#idagenda').select(1).should('have.value', '1: Object');
    cy.get('.cartStepper > .display-flex > .btn-success').click();

    //No puedo continuar con la seleccion de tarjeta, ya que no figuran los planes para las dos tarjetas que me figuran VISA y MASTERCAR.
    
    // METODO DE PAGO

    // NUEVA TARJETA
    cy.get('[title="Nueva tarjeta"]').click();
    // TARJETA
    // VISA
    cy.get('#tarjeta').select(1).should('have.value', '13: Object');
    // VISA DEBITO
    cy.get('#tarjeta').select(1).should('have.value', '14: Object');
    // MASTERCARD
    cy.get('#tarjeta').select(1).should('have.value', '9: Object');
    // CABAL
    cy.get('#tarjeta').select(1).should('have.value', '5: Object');

    // SELECCION DE OTROS BANCOS
    cy.get('#banco').select(1).should('have.value', '3: Object');

    //DATOS NUEVA TARJETA
    // VISA NUMTARJETA
    cy.get('#nroTarjeta').click().type('4507990000004905');
    // VISA DEBITO
    cy.get('#nroTarjeta').click().type('4517721004856075');
    // MASTERCARD
    cy.get('#nroTarjeta').click().type('5299910010000015');
    // MASTERCARD
    cy.get('#nroTarjeta').click().type('5896570000000008');

    // FECHA VENCIMIENTO
    // MES
    cy.get('#cardExpirationMonth').select(1).should('have.value', '08');
    // AÑO
    cy.get('#cardExpirationYear').select(1).should('have.value', '9: 30');

    // CODIGO SEGURIDAD
    cy.get('#securityCode').click().type('123');

    // NOMBRE
    cy.get('#cardholderName').click().type('JUAN PEREZ');

    // DNI
    cy.get('#docType').select(1).should('have.value', 'DNI');

    // INTRODUCIR DNI
    cy.get('#docNumber').click().type('12345678');

    // GUARDAR TARJETA
    cy.get('#rememberCard').click()

     // BOTON SIGUIENTE
     cy.get('.cartStepper > .display-flex > .btn-success').click();
     cy.wait(2000);

      // PAGAR
    cy.get('.cartMiniTable .btn-success').click();
    cy.wait(5000);
    
    // SELECCION DE TARJETA GUARDADA
    
    // TARJETA VISA --> .eq(0)
    cy.get('.myAccountList .misTarjetas').eq(0).click();
    // TARJETA MASTERCARD --> .eq(1)
    // cy.get('.myAccountList .misTarjetas').eq(1).click();
    
    // CARGAR DATOS TARJETA
    cy.wait(2000)
    cy.get('#plan').select(0).should('have.value', '4: Object');
    cy.get('#cvv').click();
    cy.get('#cvv').type('123');
    cy.wait(1000);
    cy.get('.cartStepper > .display-flex > .btn-success').click();

    // PAGAR
    cy.get('.cartMiniTable .btn-success').click();
    cy.wait(5000);

    // PAGAR
    cy.wait(5000);
    cy.get("button.btn.btn-success.pull-right.ng-star-inserted").click();
    cy.wait(5000);

    // Tarjetas
    // visa
    // 4507990000004905
    // visa debito:
    // 4517721004856075
    // mastercard
    // 5299910010000015
    // cabal
    // 5896570000000008
    // vencimiento el 08/30 codigo de seguridad 123
  })
});