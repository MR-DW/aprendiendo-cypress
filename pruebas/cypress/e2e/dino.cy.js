describe('Prueba login y agregar productos al carro', () => {
  it('passes', () => {

    //Login
      cy.viewport('macbook-16');
      cy.visit('https://www.dinoonline.com.ar/super/home');
      cy.get('.btn-user-box').click();
      cy.url().should('contains', 'https://www.dinoonline.com.ar/super/login');
      cy.get('#login').click();
      cy.get('#login').type('rrodriguez@rmcuantica.com');
      cy.get('#password').type('12345678');
      cy.get('#form_login > .btn').click();
      cy.url().should('contains', 'https://www.dinoonline.com.ar/super/home');

      //Agregar productos de categoria Aceites al carro
      cy.visit('https://www.dinoonline.com.ar/super/home');
      cy.get('.navbar-mami > li > .dropdown-menu > .dropdown-submenu > a').first().click({force: true});
      cy.url().should('contains', 'https://www.dinoonline.com.ar/super/categoria/supermami-almacen-aceites-vinagres-y-acetos/_/N-o0x515');
      cy.get('#prod2320426 > .action-control > #add-to-cart').click();
      cy.get('#prod2320094 > .action-control > #add-to-cart').click();
      cy.get('#prod2320212 #add-to-cart').click();
      cy.get('.cartMenu > .dropdown-toggle').click();
      cy.get('.miniCartFooter > .btn-sm.btn-danger').eq(1).click();
      cy.url().should('contains', 'https://www.dinoonline.com.ar/super/carrito/');

  })
})