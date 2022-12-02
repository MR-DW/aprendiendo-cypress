const url_prod = 'https://dinoonline.com.ar';
const url_qa = 'https://qa-test.dinoonline.com.ar';
const url = url_qa;

describe('Prueba de compra n1', () => {
  it('passes', () => {
    cy.viewport('macbook-16');

    //Login
    cy.visit(url + '/super/home');
    cy.get('.btn-user-box').click();
    cy.url().should('contains', url +'/super/login');
    cy.get('#login').click();
    cy.get('#login').type('mpalaversich@rmcuantica.com');
    cy.get('#password').type('12345678');
    cy.wait(1000);
    cy.get('#form_login .btn').click();

    //Carrito
    cy.wait(3000);
    cy.visit(url + '/super/home');
    // Busca categoría alimentos para gatos
    cy.get('[href="/super/categoria/supermami-automotor-neumaticos-tamano-45/_/N-dypy9f"]').click({ force: true });
    
    // Añade producto de tv.
    cy.get('#prod3900264 > .action-control > #add-to-cart').click();
    cy.get('#add-to-cart').click();
    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
    cy.url().should('contains', url + '/super/carrito/');
    cy.get('.box-footer .btn-success').click();

    //checkout
    // Selecciona monotributista
    cy.get('.form-check > input').eq(1).click();
    // Inserta cuit
    cy.get('.input-cuit').type('30716222175'); 
    cy.get('.btn-danger').click();
    // Metodo de entrega
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);
    // Cambio de sucursal para retiro
    cy.get('.recuadro a').click();
    cy.get('.panel-footer-address .btn-success').eq(5).click();
    // Vuelve a menu principal y abre carrito de nuevo para finalizar compra
    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
    // Pagina de carrito para finalizar compra
    cy.url().should('contains', url + '/super/carrito/');
    cy.get('.box-footer .btn-success').click();
    //Datos Facturacion 
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    // Metodo de entrega
    // Dia de entrega
   cy.get('#idagenda').select(1).should('have.value', '1: Object');
    // continuar
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);
    // Seleccion de tarjeta
    cy.get('.myAccountList .misTarjetas').eq(0).click();
    // Cargar datos tarjeta
    cy.wait(2000)
    cy.get('#plan').select(2);
    cy.get('#cvv').click();
    cy.get('#cvv').type('123');
    cy.wait(1000);
    // boton siguiente
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    // Resumen de cuenta
    // Pagar
//  cy.get('.cartMiniTable .btn-success').click();
//  cy.wait(5000);
  })
});




//     cy.wait(2000)
//     cy.get('#plan').select(2);
//     cy.get('#cvv').click();
//     cy.get('#cvv').type('123');
//     cy.wait(1000);
//     

