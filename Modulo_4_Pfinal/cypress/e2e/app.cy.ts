describe('Modulo 4 - Proyecto Final', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4201');
  });

  it('Test 1: Debe cargar la aplicación y mostrar el título', () => {
    cy.contains('Módulo 4 - Proyecto Final');
    cy.contains('Panel de Tracking');
    cy.contains('Mapa Interactivo');
  });

  it('Test 2: Debe registrar clicks en los botones de tracking', () => {
    // Hacer click en varios botones
    cy.contains('Botón Principal').click();
    cy.contains('Botón Secundario').click();
    cy.contains('Botón Info').click();
    
    // Verificar que los contadores se actualizan
    cy.contains('Total Clicks').parent().should('contain', '3');
  });

  it('Test 3: Debe funcionar el marker del mapa', () => {
    // Hacer click en el marker
    cy.contains('¡Haz click en este Marker!').click();
    
    // Verificar que aparece el alert (simulamos la verificación)
    cy.on('window:alert', (text) => {
      expect(text).to.contains('¡Marker clickeado!');
    });
  });
});
