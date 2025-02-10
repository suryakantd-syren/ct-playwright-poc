Feature: Activity Definitions List

  @Validation
  Scenario: Activity List : Validate pagination actions in data Table
    Given I'm logged into the PEM2.0 Applcaition with user "Automation1"
    When User navigates to "Activity Listing" under "Activities" [App-Nav]
    Then Verify "Activity Definition" page is displayed [Page]["activity-list"]
    When User clicks on "forward" button in pagination bar in [Activity-Table]["activity-list"]
    Then User verifies page "2" is displayed in [Activity-Table]["activity-list"]
    When User clicks on "backward" button in pagination bar in [Activity-Table]["activity-list"]
    Then User verifies page "1" is displayed in [Activity-Table]["activity-list"]
    When User selects page "2" in [Activity-Table]["activity-list"]
    Then User verifies page "2" is displayed in [Activity-Table]["activity-list"]
    When User selects page size "10" in [Activity-Table]["activity-list"]
    Then User verifies page size "10" is displayed in [Activity-Table]["activity-list"]
    And User verifies total pages as "3" in [Activity-Table]["activity-list"]
    When User selects page size "5" in [Activity-Table]["activity-list"]
    Then User verifies page size "5" is displayed in [Activity-Table]["activity-list"]
    And User verifies total pages as "5" in [Activity-Table]["activity-list"]

  @Validation
  Scenario: Activity List : Validate actions are loaded as per state
    Given I'm logged into the PEM2.0 Applcaition with user "Automation1"
    When User navigates to "Activity Listing" under "Activities" [App-Nav]
    Then Verify "Activity Definition" page is displayed [Page]["activity-list"]
    Then User verifies "rollout" button is displayed at column 3 for row with "Final" state [Activity-Table]["activity-list"]
    Then User verifies "mark-as-final" button is displayed at column 3 for row with "Draft" state [Activity-Table]["activity-list"]
    Then User verifies "restore" button is displayed at column 3 for row with "Delete" state [Activity-Table]["activity-list"]


  @Sanity @Happy
  Scenario:Activity List - New Activity Page Functionality
    Given I'm logged into the PEM2.0 Applcaition with user "Automation1"
    When User navigates to "Activity Listing" under "Activities" [App-Nav]
    Then Verify "Activity Definition" page is displayed [Page]["activity-list"]
    When User clicks on "new" button in header [Activity-Table]
    Then User verifies "New Activity" is displayed [Page]

  @Sanity @Happy
  Scenario:Activity List - Rollout Functionality
    Given I'm logged into the PEM2.0 Applcaition with user "Automation1"
    When User navigates to "Activity Listing" under "Activities" [App-Nav]
    Then Verify "Activity Definition" page is displayed [Page]["activity-list"]
    Given User performs "rollout" operation on record with "Final" state from [Activity-Table]["activity-list"]
    Then User rollouts the Activity to Internal Users

  @Sanity @Happy
  Scenario:Activity List - Mark as Final Functionality
    Given I'm logged into the PEM2.0 Applcaition with user "Automation1"
    When User navigates to "Activity Listing" under "Activities" [App-Nav]
    Then Verify "Activity Definition" page is displayed [Page]["activity-list"]
    Given User performs "mark-as-final" operation on record with "Draft" state from [Activity-Table]["activity-list"]

  @Sanity @Happy
  Scenario:Activity List - Restore Functionality
    Given I'm logged into the PEM2.0 Applcaition with user "Automation1"
    When User navigates to "Activity Listing" under "Activities" [App-Nav]
    Then Verify "Activity Definition" page is displayed [Page]["activity-list"]
    Given User performs "restore" operation on record with "Delete" state from [Activity-Table]["activity-list"]