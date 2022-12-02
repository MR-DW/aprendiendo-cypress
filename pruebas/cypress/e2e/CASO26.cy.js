const url_prod = 'https://dinoonline.com.ar';
const url_qa = 'https://qa-test.dinoonline.com.ar';
const url = url_qa;

describe('Prueba de compra neumatico, con retiro en tienda alto verde, pago con tarjeta visa debito', () => {
    it('passes', () => {
        cy.viewport('macbook-16');

        //LOGIN
        cy.visit(url + '/super/home');
        cy.get('.btn-user-box').click();
        cy.url().should('contains', url + '/super/login');
        cy.get('#login').click();
        cy.get('#login').type('mpalaversich@rmcuantica.com');
        cy.get('#password').type('12345678');
        cy.wait(1000);
        cy.get('#form_login .btn').click();
        cy.wait(3000);

        // MENU PRINCIPAL
        cy.visit(url + '/super/home');

        // Busca categoría automotor -> neumatico 45.
        cy.get('[href="/super/categoria/supermami-automotor-neumaticos-tamano-45/_/N-dypy9f"]').click({ force: true });

        // AÑADIR PRODUCTO AL CARRO neumatico -> khumo.
        // ABRE PRODUCTO PARA VERLO
        cy.get('#prod3900264 > .action-control > #add-to-cart').click();

        // AÑADE PRODUCTO AL CARRITO
        cy.get('#add-to-cart').click();

        // ABRIR CARRITO
        cy.get('.cartMenu > .dropdown-toggle').click();
        cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();

        //CHECKOUT

        // LISTADO DE PRODUCTOS
        cy.url().should('contains', url + '/super/carrito/');
        cy.get('.box-footer .btn-success').click();

        // DATOS DE FACTURACION

        // CONSUMIDOR FINAL
        cy.get('.form-check > input').eq(0).click();

        // BOTON SIGUIENTE
        cy.get('.cartStepper > .display-flex > .btn-success').click();
        cy.wait(2000);

        // SELECCION FECHA DE ENTREGA
        cy.get('#idagenda').select(1).should('have.value', '1: Object');
        cy.get('.cartStepper > .display-flex > .btn-success').click();
        cy.wait(2000);

        // TARJETA VISA --> .eq(0)
        cy.get('.myAccountList .misTarjetas').eq(0).click();

        // CARGAR DATOS TARJETA
        cy.wait(2000)
        cy.get('#plan').select(1).should('have.value', '1: Object');
        cy.get('#cvv').click();
        cy.get('#cvv').type('123');
        cy.wait(1000);
        cy.get('.cartStepper > .display-flex > .btn-success').click();

        // PAGAR
        cy.wait(5000);
        cy.get("button.btn.btn-success.pull-right.ng-star-inserted").click();
        cy.wait(5000);
     

    })
});