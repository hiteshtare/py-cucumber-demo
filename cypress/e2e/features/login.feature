Feature: Login Feature

    This Feature is require for a user to login 

    Scenario: Success Login
    Given A user opens a login page
    When A user enters the user "Admin"
    When A user enters the password "admin123"
    When A user clicks on the login button
    Then A user will logged in  