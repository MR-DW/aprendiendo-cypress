cy.get('#prod2520403 #add-to-cart .fa').click();
       cy.get('.open .center-block').click();
       cy.url().should('contains', 'https://www.dinoonline.com.ar/super/categoria/supermami-automotor-accesorios-automotor/_/N-1ilenhc');
       cy.get('#prod2740266 #add-to-cart').click();
       cy.get('.open .center-block').click();
       cy.url().should('contains', 'https://www.dinoonline.com.ar/super/categoria/supermami-bebidas-jugos-naturales/_/N-1urm0j7');
       cy.get('.action-control:nth-child(8) > #add-to-cart .fa').click();
       cy.get('.open .center-block').click();
       cy.get('li:nth-child(7) .center-block').click();
       cy.get('.open .center-block').click();
       cy.url().should('contains', 'https://www.dinoonline.com.ar/super/categoria/supermami-perfumeria-farmacia/_/N-17z52xs');
       cy.get('#prod2670254 #add-to-cart').click();
       cy.url().should('contains', 'https://www.dinoonline.com.ar/super/carrito/');