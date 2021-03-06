- TTD - test driven development
  - phases
    - red - start
      - write a test for the expected behavior
    - green - next
      - write the code for that test to pass
    - refactor - last
      - clean up your code (remove code duplication, etc...)
- assertions
  - expect
    - jest global, starts the assertion
    - expect argument
      - subject of the assertion
  - matcher
    - type of assertion
    - this match comes from Jest-DOM
    - matcher argument
      - refines matcher
  - examples:
    - `expect(linkElement).toBeInTheDocument();`
    - `expect(element.textContent).toBe('hello');`
    - `expect(elementsArray).toHaveLength(7);`
  - jest-dom
    - comes with create-react-app
    - `src/setupTests.js` imports it before each test, makes matchers available
    - DOM-based matchers
- Jest
  - React testing libary helps with
    - rendering components into virtual DOM
    - search virtual DOM
    - interacting with virtual DOM
  - needs a test runner
    - find tests, run them, make assertions
    - examples: Jest, mocha, jasmine, etc...
  - Jest
    - recommended by Testing Libary
    - comes with create-react-app
  - `npm test` runs an npm script that runs Jest in watch mode
- Jest Watch Mode
  - watch for changes in files since last commit
- how does Jest work?
  - global `test` method has two arguments:
    - string description
    - test function
  - test fails if error is thrown when running function
    - assertions throw errors when expectation fails
  - no error -> pass
  - empty test -> pass
  - error -> fails
- what does react testing libary do?
  - creates virtual DOM for testing
    - and methods for interacting with DOM
  - browser not needed for testing
- types of test
  - unit tests
    - tests one unit of code in isolation
      - example: react component
  - integration tests
    - how multiple units work together
  - functional tests
    - tests a particular function of software
    - behavior of function, not just one function
    - **encouraged by react-testing-library**
    - different mindset from unit testing
      - unit testing
        - isolated, mock dependencies, test internals
        - very easy to pinpoint failures
        - further from how users interact with software
        - more likely to break with refactoring
      - functional testing
        - include all relevant units, test behavior
        - close to how users interact with software
        - robust tests
        - more difficult to debug failing tests
  - acceptance / end-to-end tests (E2E)
    - use actual browser and server (Cypress, Selenium)
- TDD vs BDD
  - test driven development vs behavior driven development
  - test library encourages testing behavior over implementations
  - still TDD over BDD
    - BDD is very explicity defined
      - involves collaboration between lots of roles
        - developers, QA, business partners, etc...
      - defines proecss for different groups to interact
    - TDD for course since there is one developer
