describe('Prueba Login y Agregar 4 productos de una categoria con diferentes unidades al carro', () => {
  it('Escenario 3', () => {
    //Login
    cy.viewport('macbook-16');
    cy.visit('https://www.dinoonline.com.ar/super/home');
    cy.get('.btn-user-box').click();
    cy.url().should('contains', 'https://www.dinoonline.com.ar/super/login');
    cy.get('#login').click();
    cy.get('#login').type('matiasignacioruiz@gmail.com');
    cy.get('#password').type('talleres');
    cy.get('#form_login > .btn').click();
    cy.url().should('contains', 'https://www.dinoonline.com.ar/super/home');

    // Agregar productos al carrito de diferentes categorias
    
    //  cy.visit('https://www.dinoonline.com.ar/super/home');
    
    // Se dirige a categoria bebidas --> gaseosas --> pomelo.
    cy.get('.navbar-mami > li > .dropdown-menu > .dropdown-submenu > ul > li > [href="/super/categoria/supermami-bebidas-gaseosas-pomelo/_/N-1cdzn1x"]').click({force: true });
    
    // Añade 3 unidades de producto.
    cy.get('#prod3080058 > .action-control > #add-to-cart').click();
    cy.get('#prod3080058 > button').click({force:true});
    // cy.get('#prod3080058 .ico-mas').click({force: true });

    // // Añade 4 unidades de producto.
    // cy.get('#prod3080529 > .action-control > #add-to-cart').click();
    // cy.get('#prod3080529 > .ico-mas').click({force: true });
    // cy.get('#prod3080529 >.ico-mas').click({force: true });
    // cy.get('#prod3080529 >.ico-mas').click({force: true });

    // // Añade 2 unidades de producto.
    // cy.get('#prod3080060 > .action-control > #add-to-cart').click();
    // cy.get('#prod3080060 >.ico-mas').click({force: true });
   

    // cy.get('#prod3263587 > .action-control > #add-to-cart').click();
    // cy.get('#prod3263651 > .action-control > #add-to-cart').click();
    
    // cy.get('#prod3262027 > .action-control > #add-to-cart').click();

    // Categoria carrusel mas vendidos
    // cy.get('.navbar-mami > li > .dropdown-menu > .dropdown-submenu > ul > li > [href="/super/categoria/supermami-perfumeria-farmacia-apositos/_/N-m68245"]').click({ force: true });

    

  })
})