describe('Prueba Login y Agregar 4 productos de una categoria y 1 de carrusel de mas vendidos al carro', () => {
  it('Escenario 2', () => {
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
    
    // Se dirige a categoria frescos --> lacteos.
    cy.get('.navbar-mami > li > .dropdown-menu > .dropdown-submenu > ul > li >[href="/super/categoria/supermami-fresco-lacteos/_/N-77sm4g"]').click({ force: true });
    
    // Añade producto de alimentos frescos --> Lacteos.
    cy.get('#prod3263550 > .action-control > #add-to-cart').click();
    cy.get('#prod3263587 > .action-control > #add-to-cart').click();
    cy.get('#prod3263651 > .action-control > #add-to-cart').click();
    
    cy.get('#prod3262027 > .action-control > #add-to-cart').click();

    // Categoria carrusel mas vendidos
    // cy.get('.navbar-mami > li > .dropdown-menu > .dropdown-submenu > ul > li > [href="/super/categoria/supermami-perfumeria-farmacia-apositos/_/N-m68245"]').click({ force: true });

    

  })
})



