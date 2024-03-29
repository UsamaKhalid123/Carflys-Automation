 /// <reference types="cypress" />
import { backendURL } from "../../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000


export const TotalPayments_Button = () => {

    cy.contains("1. Dashboard").click()
    cy.wait(3000)
    cy.intercept('GET', `${backendURL}/payment`).as('Payment found Successfully');

    let totalpayment;
    let allsum = 0;

    cy.contains("Total Payments").next().invoke('text').then((text) => {
        
        totalpayment = parseFloat(text.replace(/\$|,/g, ''));
        cy.contains("Total Payments").parent().parent().parent().click({ force: true });
        cy.scrollTo("top")
        cy.wait(3000)
        //Successful
        cy.contains("Successful").next().invoke('text').then((text) => {

            const numericValue = parseFloat(text.replace(/\$|,/g, ''));
                const formattedValue = numericValue.toFixed(2);
                allsum += parseFloat(formattedValue);

            //Pending
            cy.contains("Pending").next().invoke('text').then((text) => {
                const numericValue = parseFloat(text.replace(/\$|,/g, ''));
                const formattedValue = numericValue.toFixed(2);
                
         
                allsum += parseFloat(formattedValue);
            });

                   //Refunded
                   cy.contains("Refunded").next().invoke('text').then((text) => {
                    const numericValue = parseFloat(text.replace(/\$|,/g, ''));
                    const formattedValue = numericValue.toFixed(2);
            
                allsum += parseFloat(formattedValue);

                       //Cancelled
                       cy.contains("Cancelled").next().invoke('text').then((text) => {
                        const numericValue = parseFloat(text.replace(/\$|,/g, ''));
                        const formattedValue = numericValue.toFixed(2);
                         
                allsum += parseFloat(formattedValue);

                        cy.log(totalpayment, allsum)
                        expect(totalpayment).to.equal(allsum)
                 });
              
             });
            });
        })
    cy.wait("@Payment found Successfully").its('response.statusCode').should('eq', 200);
}

export const stats_Pending_payment = () => {
    cy.viewport(1280, 720);

    let totalpending = 0;
    let totalPendingCount = 0;
    let isNextPageEnabled = true;

    cy.contains("1. Dashboard").click();
    cy.wait(3000)
    cy.contains("Total Payment").parent().parent().parent().click();

    cy.get('[placeholder="Filter by Status"]').click()
    cy.get(".mantine-Select-dropdown").contains("Pending").click()
    cy.wait(6000)

    cy.contains("Pending").next().invoke('text').then((text) => {
        totalpending = parseFloat(text.replace(/\$|,/g, ''));
    });

    function doRecursion() {
        cy.get('.rdt_TableCell[data-column-id="8"]').each((cell) => {
            cy.wrap(cell).find('div[data-tag="allowRowEvents"]').invoke('text').then((text) => {
                totalPendingCount += parseFloat(text.replace(/\$|,/g, ''));
            });
        });

        cy.get("#pagination-next-page").then((btn) => {
            isNextPageEnabled = !btn.attr("disabled");

            if (isNextPageEnabled) {
                cy.get("#pagination-next-page").click();
                cy.wait(5000);
                doRecursion();
            } else {

                cy.log(totalpending, totalPendingCount);
                expect(totalpending).to.equal(totalPendingCount);
            }
        });
    }
    // Start the recursion for the first page
    doRecursion();
}

export const stats_Successful_payment = () => {
    cy.viewport(1280, 720);

    let totalsuccess = 0;
    let totalSuccessCount = 0;
    let isNextPageEnabled = true;

    cy.contains("1. Dashboard").click();
    cy.wait(3000)
    cy.contains("Total Payment").parent().parent().parent().click();

    cy.get('[placeholder="Filter by Status"]').click()
    cy.get(".mantine-Select-dropdown").contains("Success").click()
    cy.wait(6000)

    cy.contains("Successful").next().invoke('text').then((text) => {
        totalsuccess = parseFloat(text.replace(/\$|,/g, ''));
    });

    function doRecursion() {
        cy.get('.rdt_TableCell[data-column-id="8"]').each((cell) => {
            cy.wrap(cell).find('div[data-tag="allowRowEvents"]').invoke('text').then((text) => {
                totalSuccessCount += parseFloat(text.replace(/\$|,/g, ''));
            });
        });

        cy.get("#pagination-next-page").then((btn) => {
            isNextPageEnabled = !btn.attr("disabled");

            if (isNextPageEnabled) {
                cy.get("#pagination-next-page").click();
                cy.wait(5000);
                doRecursion();
            } else {
                // Output the total after all pages are processed
                cy.log(totalsuccess , totalSuccessCount);

                // Compare the total revenue with the collected revenue
                expect(totalsuccess).to.equal(totalSuccessCount);
            }
        });
    }
    // Start the recursion for the first page
    doRecursion();
}

export const stats_Refunded_payment = () => {
    cy.viewport(1280, 720);

    let totalrefunded = 0;
    let totalRefundedCount = 0;
    let isNextPageEnabled = true;

    cy.contains("1. Dashboard").click();
    cy.wait(3000)
    cy.contains("Total Payment").parent().parent().parent().click();

    cy.get('[placeholder="Filter by Status"]').click()
    cy.get(".mantine-Select-dropdown").contains("Refunded").click()
    cy.wait(6000)

    cy.contains("Refunded").next().invoke('text').then((text) => {
        totalrefunded = parseFloat(text.replace(/\$|,/g, ''));
    });

    function doRecursion() {
        cy.get('.rdt_TableCell[data-column-id="8"]').each((cell) => {
            cy.wrap(cell).find('div[data-tag="allowRowEvents"]').invoke('text').then((text) => {
                totalRefundedCount += parseFloat(text.replace(/\$|,/g, ''));
            });
        });

        cy.get("#pagination-next-page").then((btn) => {
            isNextPageEnabled = !btn.attr("disabled");

            if (isNextPageEnabled) {
                cy.get("#pagination-next-page").click();
                cy.wait(5000);
                doRecursion();
            } else {
                // Output the total after all pages are processed
                cy.log(totalrefunded, totalRefundedCount);

                // Compare the total revenue with the collected revenue
                expect(totalrefunded).to.equal(totalRefundedCount);
            }
        });
    }
    // Start the recursion for the first page
    doRecursion();
}
export const stats_Cancelled_payment = () => {
    cy.viewport(1280, 720);

    let totalcancelled = 0;
    let totalCancelledCount = 0;
    let isNextPageEnabled = true;

    cy.contains("1. Dashboard").click();
    cy.wait(3000)
    cy.contains("Total Payment").parent().parent().parent().click();

    cy.get('[placeholder="Filter by Status"]').click()
    cy.get(".mantine-Select-dropdown").contains("Cancelled").click()

    cy.contains("Cancelled").next().invoke('text').then((text) => {
        totalcancelled = parseFloat(text.replace(/\$|,/g, ''));
    });

    function doRecursion() {
        cy.get('.rdt_TableCell[data-column-id="8"]').each((cell) => {
            cy.wrap(cell).find('div[data-tag="allowRowEvents"]').invoke('text').then((text) => {
                totalCancelledCount += parseFloat(text.replace(/\$|,/g, ''));
            });
        });

        cy.get("#pagination-next-page").then((btn) => {
            isNextPageEnabled = !btn.attr("disabled");

            if (isNextPageEnabled) {
                cy.get("#pagination-next-page").click();
                cy.wait(5000);
                doRecursion();
            } else {
                // Output the total after all pages are processed
                cy.log(totalcancelled, totalCancelledCount);

                // Compare the total revenue with the collected revenue
                expect(totalcancelled).to.equal(totalCancelledCount);
            }
        });
    }
    // Start the recursion for the first page
    doRecursion();
}






















