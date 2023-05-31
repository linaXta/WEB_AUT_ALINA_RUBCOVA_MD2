import BasePage from "../pageObjects/base.page";
class AppointmentHistoryPage {
  static validateNoAppointmentVisible() {
    cy.contains('No appointment').should('be.visible'); 
  }
}

export default AppointmentHistoryPage;