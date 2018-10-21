
Feature: DDySmall Login Page


  Scenario Outline: A user  login to the application


    Given  an open browser with http://localhost:3000/sign_in
    When user input <email> into Email field
    And user input <password> into Password field
    And user click  submit button
    Then user is redirected to http://localhost:3000
    And user click sign out button
    Then user close the  browser




Examples:
    |email | password|
    |maggy.pp@gmail.com|gosiap79|




