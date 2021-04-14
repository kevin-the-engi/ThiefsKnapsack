# Thief's Knapsack

### Introduction
A Thief has a knapsack that can hold X lbs of stolen goods
Each stolen good is worth a certain amount of cash, but
the stolen good also weighs a certain weight. This means that
the thief has to pick an optimal combination of items!
The Thief can't pick the same item twice.

What is the maximum worth of goods that the thief can steal?

### Approach
1. Determine the max weight the knapsack can hold.
2. Evaluate each item:
* Track the value it is worth
* Track the weight
3. Look for items that are the highest value first.
* Check if item weight is below bag weight
* If yes, then add into bag and calculate current total weight of items in bag
* If no, then move on to next item with next highest value
4. Repeat Step 3 until all items have been checked

Assuming the list of items is presented as an array:
1. Iterate through the array
* Place item in sack and calculate current weight and value
2. Iterate again from i + 1 onwards
* So for every outer iteration that represents current item, check with other items
* If item in inner iteration does not exceed max weight, add that item's value and weight to current totals
* Store final max value for current item if previous max value is lower
