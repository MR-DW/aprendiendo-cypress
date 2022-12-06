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

        // CAMBIAR SUCURSAL PARA RETIRO EN TIENDA
        cy.get('[href="/super/checkout/addressSuper.jsp"]').first().click({force: true});
        cy.url().should('contains', 'https://qa-test.dinoonline.com.ar/super/checkout/addressSuper.jsp');
        
        //SELECCION SUCURSAL
        cy.wait(2000);
        cy.get('.panel-footer-address .btn-success').eq(0).click();
        
        // MENU PRINCIPAL
        cy.url().should('contains', url + '/super/home');
        // cy.visit(url + '/super/home'); 

        // Busca categoría electro -> pequeños electrodomesticos.
         cy.get('[href="/super/categoria/supermami-electro-pequenos-electrodomesticos/_/N-wtvdtj"]').click({ force: true });

         // AÑADIR PRODUCTO AL CARRO --> LICUADORA DE MANO KEN BROWN KBM300.
         // ABRE PRODUCTO PARA VERLO 
         cy.get('#prod4183290 > .action-control > #add-to-cart').click();
         // AÑADE PRODUCTO AL CARRITO
         cy.get('#add-to-cart').click();

         // Busca categoría electro -> computacion.
         cy.get('[href="/super/categoria/supermami-electro-computacion/_/N-1mjvdju"]').click({ force: true });
         // AÑADIR PRODUCTO AL CARRO --> MOUSE GAMER GREENFOX GFM4000 NEGRO.
         // ABRE PRODUCTO PARA VERLO 
         cy.get('#prod7040316 > .action-control > #add-to-cart').click();
         // AÑADE PRODUCTO AL CARRITO
         cy.get('#add-to-cart').click();

         // Busca categoría almacen -> endulzantes -> azucar.
         cy.get('[href="/super/categoria/supermami-almacen-endulzantes-azucar/_/N-rlc6b5"]').click({ force: true });
         // AÑADIR PRODUCTO AL CARRO --> LICUADORA DE MANO KEN BROWN KBM300.
         // ABRE PRODUCTO PARA VERLO 
         cy.get('#prod2000060 > .action-control > #add-to-cart').click();

         // ABRIR CARRITO
         cy.get('.cartMenu > .dropdown-toggle').click();
         cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();

         //CHECKOUT
 
         // LISTADO DE PRODUCTOS
         cy.url().should('contains', url + '/super/carrito/');

    })
});