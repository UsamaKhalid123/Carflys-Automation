import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Admin_order_View_IconButton =() => {

    cy.contains("8. Orders").click()
//search field
   cy.get('[placeholder="Search"]').type("5FNYF6H22MB016055")
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Direct Payment Paid")
    cy.contains("Direct Payment Paid").should("exist")
    cy.wait(2000)
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View Order").should("exist")
}
export const Admin_order_View_ModalCloseButton =() => {

    cy.contains("8. Orders").click()
//search field
   cy.get('[placeholder="Search"]').type("5FNYF6H22MB016055")
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Direct Payment Paid")
    cy.contains("Direct Payment Paid").should("exist")
    cy.wait(2000)
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View Order").should("exist")
    cy.get("button").contains("Close").click()
}
export const Admin_Search_Order_VinNO  =() => {

    cy.contains("8. Orders").click()
//search field
    cy.get('[placeholder="Search"]').type("5FNYF6H22MB016055")
    cy.contains("5FNYF6H22MB016055").should("exist")
    }
export const Admin_Search_Order_InValid_VinNO =() => {
        cy.contains("8. Orders").click()
    //search field
        cy.get('[placeholder="Search"]').type("1FMSK8FH8NH668090")
        cy.contains("There are no records to display").should("exist")
        }
export const Admin_Search_Order_VehicleName  =() => {
            cy.contains("8. Orders").click()
        //search field
            cy.get('[placeholder="Search"]').type("2021 Honda Pilot SE")
        //filters
            cy.get('[placeholder="Filter by Status"]').click()
               cy.contains("Direct Payment Paid").click
            cy.contains("2021 Honda Pilot SE").should("exist")
            }
export const Admin_Search_Order_CustomerName  =() => {
    cy.contains("8. Orders").click()
//search field
    cy.get('[placeholder="Search"]').type("Asad")
    cy.contains("Asad").should("exist")
}

export const Admin_order_Filter_BY_Status  =() => {

    cy.contains("8. Orders").click()
//search field
   cy.get('[placeholder="Search"]').type("5FNYF6H22MB016055")
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Direct Payment Paid")
    cy.contains("Direct Payment Paid").should("exist")
}

export const Admin_Order_ClearFilterButton  =() => {
    cy.contains("8. Orders").click()
//search field
    cy.get('[placeholder="Search"]').type("2021 Honda Pilot SE")
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Direct Payment Paid").click
    cy.contains("2021 Honda Pilot SE").should("exist")
   cy.get("button").contains("Clear Filters").click()
    }

export const Admin_Order_statusChanges  =() => {
        cy.contains("8. Orders").click()
    //search field
        cy.get('[placeholder="Search"]').type("2010 Honda Pilot Touring")
    //filters
        cy.get('[placeholder="Filter by Status"]').click()
           cy.contains("Down Payment Paid").click
        cy.contains("2010 Honda Pilot Touring").should("exist")
    /// down payment paid to shipped    
        cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
        cy.contains("Shipped").click()
        cy.contains("Status Updated Successfully").should("exist")
    //// shipped to delivered
        cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
        cy.contains("Delivered").click()
        cy.contains("Status Updated Successfully").should("exist")
    /// Delivered to completed
    cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
    cy.contains("Completed").click()
    cy.contains("Status Updated Successfully").should("exist")

        }


        
    