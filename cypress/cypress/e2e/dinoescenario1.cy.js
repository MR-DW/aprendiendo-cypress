describe('Prueba Login y Agregar 3 productos distintos, de 3 categorias distintas al carro', () => {
  it('Escenario 1', () => {
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
    
    // Busca categoría alimentos para gatos
    cy.get('.navbar-mami > li > .dropdown-menu > .dropdown-submenu > ul > li >[href="/super/categoria/supermami-mascotas-alimentos-gatos/_/N-1uffbis"]').click({ force: true });
    
    // Añade producto de alimentos para gatos.
    cy.get('#prod2520403 > .action-control > #add-to-cart').click();

    //  cy.visit('https://www.dinoonline.com.ar/super/categoria/supermami-mascotas-alimentos-gatos/_/N-1uffbis');
    
    // Va a categoría limpieza
    cy.get('.navbar-mami > li > .dropdown-menu > .dropdown-submenu > ul > li > [href="/super/categoria/supermami-limpieza-embalajes-para-cocina-papel-manteca/_/N-1ydxdfk"]').click({ force: true });

    //  cy.get('.dropdown-menu > .dropdown-submenu').eq(5);
    //  cy.get('ul > li > [href="/super/categoria/supermami-limpieza-embalajes-para-cocina-papel-manteca/_/N-1ydxdfk"]').click({force:true});
    
    // Añade producto de categoría limpieza
    cy.get('#prod3020102 > .action-control > #add-to-cart').click();

    // se dirige a categoría perfumeria
    cy.get('.navbar-mami > li > .dropdown-menu > .dropdown-submenu > ul > li > [href="/super/categoria/supermami-perfumeria-farmacia-apositos/_/N-m68245"]').click({ force: true });

    // Añade producto de categoría perfumeria
    cy.get('#prod2921959 > .action-control > #add-to-cart').click();

  })
})



