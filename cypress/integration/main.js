/// <reference types="Cypress" />

describe("Navigate to Discord Explorer", () => {
    it("Opens up the local Snowpack Dev Server", () => {
        cy.visit("http://localhost:8080")
    })
})
describe("Channel loading works", () => {
    it("Clicks on a sidebar item and checks that messages appear", () => {
        cy.get(".sidebar").contains("mind-is-tree").click()
        cy.get(".message-card")
    })
})
