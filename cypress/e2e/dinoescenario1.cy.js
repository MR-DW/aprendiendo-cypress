describe('Prueba login y agregar productos al carro', () => {
  it('agregar productos al carrito', () => {
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
       cy.visit('https://www.dinoonline.com.ar/super/home');
       
       cy.get('.navbar-mami > li').eq(11).click();

       cy.get('.dropdown-menu > .dropdown-submenu > ul > li').first().click({force:true}, {multiple: true});

       cy.get('a').click({force: true});

       cy.url().should('contains', 'https://www.dinoonline.com.ar/super/categoria/supermami-mascotas-alimentos-gatos/_/N-1uffbis');
       
       
   
   
 

  })
})



