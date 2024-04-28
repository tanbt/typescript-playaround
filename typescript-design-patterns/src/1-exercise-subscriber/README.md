# Exercise 1: State management

Practice: create a unique store to manage the app's state
* the store can have a flexible number of states
* the store emits events when a state changes
* a subscriber can subscribe to one state of the store, and react to changes of that state
* state is immutable (every change creates a deep-cloned new state)
* the store can be undo to its previous state
* the store can be undo to a state at a specific time

# Solution
## ideas
create a singleton store class
  * maybe support persisting/reading the store data to/from disk
use index signature to store new states
support adding/removing actions/reducers
support adding subscriber