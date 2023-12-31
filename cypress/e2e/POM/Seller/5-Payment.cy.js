
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const  Search_Payment_VinNo =() =>{
    cy.contains("5. Payments").click()
    // Search Field    
         cy.get('[placeholder="Search"]').type("5FNYF6H22MB016055")
    // Filters
         cy.get('[placeholder="Filter by Status"]').click()
            cy.contains("Success").click()
            cy.contains("5FNYF6H22MB016055").should("exist")

}
export const  Search_Payment_VehicleName =() =>{
    cy.contains("5. Payments").click()
    // Search Field    
         cy.get('[placeholder="Search"]').type("2021 Honda Pilot SE")
    // Filters
         cy.get('[placeholder="Filter by Status"]').click()
            cy.contains("Success").click()
            cy.contains("2021 Honda Pilot SE").should("exist") 
}

export const  Search_Payment_InValid_VinNo =() =>{
    cy.contains("5. Payments").click()
    // Search Field    
         cy.get('[placeholder="Search"]').type("1FMSLFFH8NGB68090")
            cy.contains("There are no records to display").should("exist")
}

export const  Filters_Payment =() =>{
    cy.contains("5. Payments").click()
    // Search Field    
         cy.get('[placeholder="Search"]').type("2021 Honda Pilot SE")
    // Filters
         cy.get('[placeholder="Filter by Status"]').click()
            cy.contains("Success").click()
            cy.contains("2021 Honda Pilot SE").should("exist") 
}
export const  ClearFilterButton_Payment_ =() =>{
     cy.contains("5. Payments").click()
     // Search Field    
          cy.get('[placeholder="Search"]').type("1FMSK8FH8NGB68090")
     // Filters
          cy.get('[placeholder="Filter by Status"]').click()
             cy.contains("Success").click()
             cy.get("button").contains("Clear Filters").click()
 }