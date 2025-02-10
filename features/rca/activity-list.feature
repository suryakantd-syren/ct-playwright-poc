Feature: RCA Model Definitions List

  @Validation
  Scenario: RCA Model List : Validate pagination actions in data Table
    Given I'm logged into the CC2.0 Applcaition with user "Automation1"
    When User navigates to "RCA Model Listing" under "Activities" [App-Nav]
    Then Verify "RCA Model Definition" page is displayed [Page]["rcamodel-list"]
    When User clicks on "forward" button in pagination bar in [RCAModel-Table]["rcamodel-list"]
    Then User verifies page "2" is displayed in [RCAModel-Table]["rcamodel-list"]
    When User clicks on "backward" button in pagination bar in [RCAModel-Table]["rcamodel-list"]
    Then User verifies page "1" is displayed in [RCAModel-Table]["rcamodel-list"]
    When User selects page "2" in [RCAModel-Table]["rcamodel-list"]
    Then User verifies page "2" is displayed in [RCAModel-Table]["rcamodel-list"]
    When User selects page size "10" in [RCAModel-Table]["rcamodel-list"]
    Then User verifies page size "10" is displayed in [RCAModel-Table]["rcamodel-list"]
    And User verifies total pages as "3" in [RCAModel-Table]["rcamodel-list"]
    When User selects page size "5" in [RCAModel-Table]["rcamodel-list"]
    Then User verifies page size "5" is displayed in [RCAModel-Table]["rcamodel-list"]
    And User verifies total pages as "5" in [RCAModel-Table]["rcamodel-list"]

  @Validation
  Scenario: RCA Model List : Validate actions are loaded as per state
    Given I'm logged into the CC2.0 Applcaition with user "Automation1"
    When User navigates to "RCA Model Listing" under "Activities" [App-Nav]
    Then Verify "RCA Model Definition" page is displayed [Page]["rcamodel-list"]
    Then User verifies "rollout" button is displayed at column 3 for row with "Final" state [RCAModel-Table]["rcamodel-list"]
    Then User verifies "mark-as-final" button is displayed at column 3 for row with "Draft" state [RCAModel-Table]["rcamodel-list"]
    Then User verifies "restore" button is displayed at column 3 for row with "Delete" state [RCAModel-Table]["rcamodel-list"]


  @Sanity @Happy
  Scenario:RCA Model List - New RCA Model Page Functionality
    Given I'm logged into the CC2.0 Applcaition with user "Automation1"
    When User navigates to "RCA Model Listing" under "Activities" [App-Nav]
    Then Verify "RCA Model Definition" page is displayed [Page]["rcamodel-list"]
    When User clicks on "new" button in header [RCAModel-Table]
    Then User verifies "New RCAModel" is displayed [Page]

  @Sanity @Happy
  Scenario:RCA Model List - Rollout Functionality
    Given I'm logged into the CC2.0 Applcaition with user "Automation1"
    When User navigates to "RCA Model Listing" under "Activities" [App-Nav]
    Then Verify "RCA Model Definition" page is displayed [Page]["rcamodel-list"]
    Given User performs "rollout" operation on record with "Final" state from [RCAModel-Table]["rcamodel-list"]
    Then User rollouts the RCA Model to Internal Users

  @Sanity @Happy
  Scenario:RCA Model List - Mark as Final Functionality
    Given I'm logged into the CC2.0 Applcaition with user "Automation1"
    When User navigates to "RCA Model Listing" under "Activities" [App-Nav]
    Then Verify "RCA Model Definition" page is displayed [Page]["rcamodel-list"]
    Given User performs "mark-as-final" operation on record with "Draft" state from [RCAModel-Table]["rcamodel-list"]

  @Sanity @Happy
  Scenario:RCA Model List - Restore Functionality
    Given I'm logged into the CC2.0 Applcaition with user "Automation1"
    When User navigates to "RCA Model Listing" under "Activities" [App-Nav]
    Then Verify "RCA Model Definition" page is displayed [Page]["rcamodel-list"]
    Given User performs "restore" operation on record with "Delete" state from [RCAModel-Table]["rcamodel-list"]