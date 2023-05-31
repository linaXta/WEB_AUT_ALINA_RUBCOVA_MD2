import LoginPage from "../pageObjects/loginPage";
import MakeAppointmentPage from "../pageObjects/makeAppointmentPage";
import SidebarPage from "../pageObjects/sidebarPage";
import AppointmentHistoryPage from "../pageObjects/appointmentHistoryPage";
import BasePage from "../pageObjects/base.page";

describe('Healthcare page scenarios', () => {
    context('Make Appointment', () => {
        beforeEach(() => {
          BasePage.visit();
        });

        it('should make an appointment with the specified values', () => {
        // Click on "Make Appointment"
        cy.contains('Make Appointment').click();
    
        // Set username and password
        LoginPage.setUsername('John Doe');
        LoginPage.setPassword('ThisIsNotAPassword');
    
        // Click on "Login"
        LoginPage.clickLogin();
    
        // Set the values on the Make Appointment page
        MakeAppointmentPage.selectFacility('Seoul CURA Healthcare Center');
        MakeAppointmentPage.checkReadmission();
        MakeAppointmentPage.selectHealthcareProgram('Medicaid');

        //Datums
        MakeAppointmentPage.setDate('30/05/2023');

        // Click on a different element to close the calendar dropdown
        cy.get('body').click();
        
        MakeAppointmentPage.setComment('CURA Healthcare Service');
    
        // Click on "Book Appointment"
        MakeAppointmentPage.clickBookAppointment();
    
        // Validate the previously set values
        cy.contains('Seoul CURA Healthcare Center').should('exist');
        cy.contains('Apply for hospital readmission').should('exist');
        cy.contains('Medicaid').should('exist');
        cy.contains('30/05/2023').should('exist');
        cy.contains('CURA Healthcare Service').should('exist');
        });
        
        it('should display "No appointment" in the history', () => {

            // Click on "Make Appointment"
            cy.contains('Make Appointment').click();

            // Set username and password
            LoginPage.setUsername('John Doe');
            LoginPage.setPassword('ThisIsNotAPassword');

            // Click on "Login"
            LoginPage.clickLogin();

            // Click on the menu/stack/burger icon to open the sidebar
            SidebarPage.openSidebar();

            // Validate that the sidebar is active
            SidebarPage.validateSidebarActive();

            // Click on "History"
            SidebarPage.clickHistory();

            // Validate that "No appointment" is visible
            AppointmentHistoryPage.validateNoAppointmentVisible();
        });
    });
});
