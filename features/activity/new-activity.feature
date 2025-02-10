Feature: Activity Definition Create - Update

  Background:
    Given I'm logged into the PEM2.0 Applcaition with user "Automation1"
    When User navigates to "Definitions" under "Activities" [App-Nav]

  #  @current
  Scenario: Verify that user is able to create new activity
    When User clicks on "New" link in [Page]["activities-list"]
    Then User verifies "Workflow" is displayed as current breadscrumb on [Page]["new-activity"]
    Given User fill the definition details for new activity

    # For Partner Task
    Given User drags "PARTNER_TASK" block and fills details on definition tab
    Given User fill the exit validation for "PARTNER_TASK"
    Given User connects start node to "PARTNER_TASK" node and "PARTNER_TASK" node to end node

    # For Approval Task
    # Given User drags "APPROVAL_TASK" block and fills details on definition tab
    # Given User fill the exit validation for "APPROVAL_TASK"
    # Given User connects start node to "PARTNER_TASK" node and "APPROVAL_TASK" node to end node
    # Given User connects "PARTNER_TASK" node and "APPROVAL_TASK" node

    # # For Attribute Task
    # Given User drags "ATTRIBUTE_TASK" block and fills details on definition tab
    # Given User fill the exit validation for "ATTRIBUTE_TASK"
    # Given User connects start node to "ATTRIBUTE_TASK" node and "ATTRIBUTE_TASK" node to end node

    # # For Sponsor Task
    # Given User drags "SPONSOR_TASK" block and fills details on definition tab
    # Given User fill the exit validation for "SPONSOR_TASK"
    # Given User connects start node to "SPONSOR_TASK" node and "SPONSOR_TASK" node to end node

    # # For Custom
    # Given User drags "CUSTOM" block and fills details on definition tab
    # Given User fill the exit validation for "CUSTOM"
    # Given User connects start node to "CUSTOM" node and "CUSTOM" node to end node

    # # For System
    # Given User drags "SYSTEM" block and fills details on definition tab
    # Given User fill the exit validation for "SYSTEM"
    # Given User connects start node to "SYSTEM" node and "SYSTEM" node to end node

    # Activity save and list page
    Given User save the new activity
    Then User verifies activity list page after save completion


