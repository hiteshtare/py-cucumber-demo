Feature: Login Feature

    This Feature is require for a user to login 

    Background:
        Given A web browser is at the HR login page
    
    Scenario: Validation Message
    Given A user clicks on login button without any entering any credentials
    Then Validation check is executed 

    Scenario: Success Login
    Given A user enters the user "Admin" and password "admin123" and click on login button
    Then A user will logged in  

    Scenario: Login Failed 
    Given A user enters the invalid user "AdminPY" and password "admin123" and click on login button
    Then User login will fail  