Feature: CC2.0 Login Flow

  @playwright
  Scenario: Validate CC Login
     Given I'm logged into the CC2.0 Applcaition with user "Automation01"
     Then I should see the CC2.0 Application