Feature: Validate calculator endpoint

Background: 
  Given set up the test environment details for execution

@only
Scenario: Verify whether the calculator endpoint is returning proper result based on operator and operands
Given trigger POST on calculator endpoint for the operator [operator] with the operands [operands]
When validating the response
Then the result should be return with expected value [result]

Examples:
| operator | operands | result |
| +        | 1,5      | 6.00   |
| -        | 5,1      | 4.00   |
| *        | 5,20     | 100.00 |
| /        | 20,5     | 4.00   | 
| sqr      | 9        | 3.00   |
| pwr      | 2,5      | 32.00  |
