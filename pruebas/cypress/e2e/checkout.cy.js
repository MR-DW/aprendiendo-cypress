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
    cy.get('#login').type('matiasignacioruiz@gmail.com');
    cy.get('#password').type('talleres');
    cy.wait(1000);
    cy.get('#form_login .btn').click();

    //Carrito
    cy.wait(3000);
    cy.visit(url + '/super/home');
    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
    cy.url().should('contains', url + '/super/carrito/');

    //Checkout
    cy.get('.box-footer .btn-success').click();
    cy.get('.form-check > input').eq(0).click();
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);

    cy.get('.cartStepper > .display-flex > .btn-success').click();

    cy.wait(2000);

    cy.get('.myAccountList .misTarjetas').eq(0).click();
    cy.wait(2000)
    cy.get('#plan').select(1);
    cy.get('#cvv').click();
    cy.get('#cvv').type('123');
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(5000);
    cy.get('.cartMiniTable .btn-success').click();
  })
})

describe('Prueba de compra n2', () => {
  it('passes', () => {
    cy.viewport('macbook-16');

    //Login
    cy.visit(url + '/super/home');
    cy.get('.btn-user-box').click();
    cy.url().should('contains', url +'/super/login');
    cy.get('#login').click();
    cy.get('#login').type('dmora@rmcuantica.com');
    cy.get('#password').type('12345678');
    cy.wait(1000);
    cy.get('#form_login .btn').click();

    //Carrito
    cy.wait(3000);
    cy.visit(url + '/super/home');
    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
    cy.url().should('contains', url + '/super/carrito/');
    cy.get('.box-footer .btn-success').click();

    //Checkout - Cambio de sucursal
    cy.get('.ajuste > input').click();
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);
    cy.get('.recuadro a').click();
    cy.get('.panel-footer-address .btn-success').eq(2).click();

    //Checkout

    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
    cy.url().should('contains', url + '/super/carrito/');
    cy.get('.box-footer .btn-success').click();
    cy.get('.ajuste > input').click();
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);

    cy.get('#idagenda').select(1).should('have.value', '1: Object');
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000)
    cy.get('.myAccountList .misTarjetas').eq(0).click();
    cy.wait(2000)
    cy.get('#plan').select(1);
    cy.get('#cvv').click();
    cy.get('#cvv').type('123');
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);
    cy.get('.cartMiniTable .btn-success').click();
  })
})

describe('Prueba de compra n3', () => {
  it('passes', () => {
    cy.viewport('macbook-16');

    //Login
    cy.visit(url + '/super/home');
    cy.get('.btn-user-box').click();
    cy.url().should('contains', url +'/super/login');
    cy.get('#login').click();
    cy.get('#login').type('dmora@rmcuantica.com');
    cy.get('#password').type('12345678');
    cy.wait(1000);
    cy.get('#form_login .btn').click();

    //Carrito
    cy.visit()
    cy.wait(3000);
    cy.visit(url + '/super/home');
    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
    cy.url().should('contains', url + '/super/carrito/');
    cy.get('.box-footer .btn-success').click();

    //Checkout - Cambio de sucursal
    cy.get('.ajuste > input').click();
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);
    cy.get('.recuadro a').click();
    cy.get('.panel-footer-address .btn-success').eq(2).click();

    //Checkout
    cy.url().should('contains', 'https://qa-test.dinoonline.com.ar/super/categoria/supermami-limpieza-automotor-para-autos/_/N-7p712i');
    cy.get('#prod2811160 #add-to-cart').click();
    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
    cy.url().should('contains', url + '/super/carrito/');
    cy.get('.box-footer .btn-success').click();
    cy.get('.form-check > input').eq(1).click();
    cy.get('.facturacion input').type('30716222175');
    cy.get('.facturacion .btn-danger').click();
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);

    cy.get('#idagenda').select(1).should('have.value', '1: Object');
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000)
    cy.get('.myAccountList .misTarjetas').eq(0).click();
    cy.wait(2000)
    cy.get('#plan').select(1);
    cy.get('#cvv').click();
    cy.get('#cvv').type('123');
    cy.get('#divAutorizacionTercero #autorizaTercero').click();
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);
    cy.get('.cartMiniTable .btn-success').click();

    //Caso Numero 6
    cy.visit(url + '/super/home');
    cy.get('.btn-user-box').click();
    cy.url().should('contains', url +'/super/login');
    cy.get('#login').click();
    cy.get('#login').type('rrodriguez@rmcuantica.com');
    cy.get('#password').type('12345678');
    cy.wait(1000);
    cy.get('#form_login .btn').click();

    cy.wait(3000);
    cy.visit(url + '/super/home');
    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
    cy.url().should('contains', url + '/super/carrito/');
    cy.get('.box-footer .btn-success').click();
  })
})