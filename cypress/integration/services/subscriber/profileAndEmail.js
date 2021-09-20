import '@bahmutov/cy-api/support';


describe("QA Automation Task" , () => {
    let subscriberId = null;
    beforeEach(() => {
        cy.request(
        {
          url: '/login',
          method: 'POST',
          form: true,
          body: {
            username: Cypress.env('username'),
            password: Cypress.env('password')
          },
        }
        ).as('login') .then((response) => {
            // Add code to retrieve subscriberId
        });

        cy.get('@login')
            .its('status')
            .should('equal', 200)
       
    })
 
    it('Login validate', () => {
        cy.get('@login')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');        
    })

    it('Change Email', () => {  
        // Add code to call changeEmail and verify the result    
     });  
    
    it('Show Profile', () => {  
        // Add code to call showProfile and assert the result      
    });      
     
 });
