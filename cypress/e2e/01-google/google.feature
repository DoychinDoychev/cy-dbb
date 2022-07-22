Feature: Google page

  Background:
    Given I open the google page

  # Scenario: displays google page
  #   Then I am on the google main page
    # And to-do item 1 is "Pay electric bill"
    # And to-do item 2 is "Walk the dog"

  Scenario: can search
    When I type "what is google?"
    Then search results are displayed
    And there is a result from "Wikipedia"

  # Scenario: can check off an item as completed
  #   When I mark to-do item "Pay electric bill" as complete
  #   Then to-do item "Pay electric bill" is checked