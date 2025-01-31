# Unexpected NaN in JavaScript Function with Missing Parameters

This repository demonstrates a common yet subtle bug in JavaScript: functions with missing parameters returning NaN instead of throwing an error or handling missing parameters gracefully.

## Bug Description
The `foo` function is defined to add two numbers.  However, if either parameter is missing, it silently returns `NaN`. This behavior can be unexpected and lead to hard-to-debug issues in larger applications.

## Solution
The solution involves explicitly checking for the presence of parameters and providing default values or throwing an error if necessary. This improves the function's robustness and helps prevent unexpected `NaN` values.
