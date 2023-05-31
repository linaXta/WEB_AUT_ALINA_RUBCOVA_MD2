import BasePage from "../pageObjects/base.page";

class MakeAppointmentPage {
  static selectFacility(facilityName) {
    cy.get('#combo_facility').select(facilityName); 
  }

  static checkReadmission() {
    cy.get('#chk_hospotal_readmission').check();
  }

  static selectHealthcareProgram(programName) {
    cy.get('#radio_program_' + programName.toLowerCase()).check(); 
  }

  static setDate(date) {
    cy.get('#txt_visit_date').type(date); 
  }

  static setComment(comment) {
    cy.get('#txt_comment').type(comment); 
  }

  static clickBookAppointment() {
    cy.get('#btn-book-appointment').click(); 
  }
}

export default MakeAppointmentPage;