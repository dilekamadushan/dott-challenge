# Dileka Madushan

## Available Scripts

### `yarn install`

Install  all the dependencies

### `yarn start`
Transpile `Typescript` code into `Javascript` and start the application.

Sample Input
```angular2html
1
3 4
0001
0011
0110
```

### `yarn test`

Launches the unit tests.

Code is decomposed into testable functions to improve readability, modularity and testability

### `yarn lint:fix`
Analyzes the code for any linting issues with the help of `eslint`

### `yarn prettier-format`

Reformat the code to improve readability with `prettier`

## Testing
Unit testing has been performed on the algorithm to cover all most all the cases including edge cases.

## Linting and Code Quality

Code quality and readability is improved further with
the usage of libraries like `eslint`and `prettier`.
`Commit Hooks` have been set with `Husky` to maintain high quality code.
I also have added comments to make the code more readable and maintainable.

## Algorithm Explained:
- Traverse through the matrix and initiate every cell.
- Create an empty queue and populate it with white cells.
- Now do a BFS traversal of white cells using above created queue. 
- while traversing insert adjacent unvisited black cells. 
- Update the minimum distance as distance of current node +1
- Time Complexity: O(N*M).
- Space Complexity: O(M*N).

