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
    cy.visit('https://qa-test.dinoonline.com.ar/super/categoria/supermami-limpieza-automotor-para-autos/_/N-7p712i');
    cy.get('#prod2811160 #add-to-cart').click();
    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
    cy.url().should('contains', url + '/super/carrito/');
    cy.get('.box-footer .btn-success').click();

    //checkout
    cy.get('.form-check > input').eq(0).click();
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);
    cy.get('.recuadro a').click();
    cy.get('.panel-footer-address .btn-success').eq(3).click();
    cy.get('.cartMenu > .dropdown-toggle').click();
    cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
    cy.url().should('contains', url + '/super/carrito/');
    cy.get('.box-footer .btn-success').click();
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.get('#idagenda').select(1);
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(2000);

    cy.get('.myAccountList .misTarjetas').eq(0).click();
    cy.wait(2000)
    cy.get('#plan').select(2);
    cy.get('#cvv').click();
    cy.get('#cvv').type('123');
    cy.wait(1000);
    cy.get('.cartStepper > .display-flex > .btn-success').click();
    cy.wait(5000);
    cy.get('.cartMiniTable .btn-success').click();
  })
})