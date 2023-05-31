import BasePage from "../pageObjects/base.page";

class SidebarPage {
  static openSidebar() {
    cy.get('.fa-bars').click(); 
  }

  static validateSidebarActive() {
    cy.get('#sidebar-wrapper.active').should('exist'); 
  }

  static clickHistory() {
    cy.contains('History').click(); 
  }
}

export default SidebarPage;