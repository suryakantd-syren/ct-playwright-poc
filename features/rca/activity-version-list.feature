Feature: RCA Model Versions List

  @Validation
  Scenario: RCA Model Version List : Validate pagination actions in data Table
    Given I'm logged into the CC2.0 Applcaition with user "Automation1"
    When User navigates to "RCA Model Listing" under "Activities" [App-Nav]
    Then Verify "RCA Model Definition" page is displayed [Page]["activities-version-list"]
    When User open version drawer by click of version history icon
    When User clicks on "forward" button in pagination bar in [RCAModel-Table]["activities-version-list"]
    Then User verifies page "2" is displayed in [RCAModel-Table]["activities-version-list"]
    When User clicks on "backward" button in pagination bar in [RCAModel-Table]["activities-version-list"]
    Then User verifies page "1" is displayed in [RCAModel-Table]["activities-version-list"]
    When User selects page "2" in [RCAModel-Table]["activities-version-list"]
    Then User verifies page "2" is displayed in [RCAModel-Table]["activities-version-list"]
    When User selects page size "10" in [RCAModel-Table]["activities-version-list"]
    Then User verifies page size "10" is displayed in [RCAModel-Table]["activities-version-list"]
    And User verifies total pages as "3" in [RCAModel-Table]["activities-version-list"]
    When User selects page size "5" in [RCAModel-Table]["activities-version-list"]
    Then User verifies page size "5" is displayed in [RCAModel-Table]["activities-version-list"]
    And User verifies total pages as "5" in [RCAModel-Table]["activities-version-list"]


  @Validation
  Scenario: RCA Model Version List : Validate actions are loaded as per state
    Given I'm logged into the CC2.0 Applcaition with user "Automation1"
    When User navigates to "RCA Model Listing" under "Activities" [App-Nav]
    Then Verify "RCA Model Definition" page is displayed [Page]["activities-version-list"]
    When User open version drawer by click of version history icon
    Then User verifies "rollout" button is displayed at column 2 for row with "Final" state [RCAModel-Table]["activities-version-list"]
    Then User verifies "mark-as-final" button is displayed at column 2 for row with "Draft" state [RCAModel-Table]["activities-version-list"]
    Then User verifies "restore" button is displayed at column 2 for row with "Delete" state [RCAModel-Table]["activities-version-list"]


  @Sanity @Happy
  Scenario:RCA Model List - Rollout Functionality
    Given I'm logged into the CC2.0 Applcaition with user "Automation1"
    When User navigates to "RCA Model Listing" under "Activities" [App-Nav]
    Then Verify "RCA Model Definition" page is displayed [Page]["activities-version-list"]
    When User open version drawer by click of version history icon
    Given User performs "rollout" operation on record with "Final" state from [RCAModel-Table]["activities-version-list"]
    Then User rollouts the RCA Model to Internal Users

  @Sanity @Happy
  Scenario:RCA Model List - Mark as Final Functionality
    Given I'm logged into the CC2.0 Applcaition with user "Automation1"
    When User navigates to "RCA Model Listing" under "Activities" [App-Nav]
    Then Verify "RCA Model Definition" page is displayed [Page]["activities-version-list"]
    When User open version drawer by click of version history icon
    Given User performs "mark-as-final" operation on record with "Draft" state from [RCAModel-Table]["activities-version-list"]

  @Sanity @Happy
  Scenario:RCA Model List - Restore Functionality
    Given I'm logged into the CC2.0 Applcaition with user "Automation1"
    When User navigates to "RCA Model Listing" under "Activities" [App-Nav]
    Then Verify "RCA Model Definition" page is displayed [Page]["activities-version-list"]
    When User open version drawer by click of version history icon
    Given User performs "restore" operation on record with "Delete" state from [RCAModel-Table]["activities-version-list"]

# #   @current
#   Scenario: Validate RCA Model Version Drawer
#     Then Verify RCAModel version list default page "1" is displayed in [Page]["activities-version-list"]
#     Then Verify RCAModel version list pagination with default page "1" is displayed in [Page]["activities-list"]
#     Then Verify RCAModel version list perpage rows are displayed in [Page]["activities-list"]


# #   @current
#   Scenario: Validate Rollout Functionality
#     Then Verify version current status is Final and Rollout Button is enable
#     Then Verify version Rollout functionality

# #   @current
#   Scenario: Validate Mark as Final Functionality
#     Then Verify version current status is Draft and Mark as final Button is enable
#     Then Verify version Mark as final functionality

# #   @current
#   Scenario: Validate Restore RCA Model Functionality
#     Then Verify version current status is Delete and Restore Button is enable
#     Then Verify version Restore functionality

# #   @current
#   Scenario: Validate user is able to see RCA Model details in view mode
#     Then Verify activities version list to view the RCAModel in [Page]["activities-list"]

# #   @current
#   Scenario: Validate user is able to see RCA Model detail page is edit mode
#     Then Verify activities version list to edit the RCAModel in [Page]["activities-list"]