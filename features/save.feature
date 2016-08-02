Feature: Save data

  Scenario: User can save data successfully.
    Given I have visited Demo page
    When I fill name is "test name"
    And I fill quote is "this quote"
    And I submit to save data
    Then I see "test name" and "this quote" were input before