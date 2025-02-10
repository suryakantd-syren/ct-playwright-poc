Feature: PEM2.0 Login Flow

  @playwright
  Scenario: Validate PM Login
     Given I'm logged into the PEM2.0 Applcaition with user "Automation01"
     Then I should see the PEM2.0 Application