// The caller should depend on abstractions rather than concrete implementations
//   Dependency Injection is similar, but the support class (target class) is injected into the caller class' property via constructor

import { ExamStrategy, MultipleChoiceExam } from "./2-open-close";

//// Bad design
// @ts-ignore
class Student {
  private examStrategy: MultipleChoiceExam;

  public setExameStrategy(strategy: MultipleChoiceExam) {
    this.examStrategy = strategy;
  }

  public myStudyingStrategy() {
    if (this.examStrategy) {
      this.examStrategy.studying();
    }
  }
}

// problem: what if there is a new exam strategy? We have to modify the Student class

//// Improve1 : Student should depend on abstraction
class Student1 {
  private examStrategy: ExamStrategy;

  public setExameStrategy(strategy: ExamStrategy) {
    // now any exam strategy which implements ExamStrategy can be used
    this.examStrategy = strategy;
  }

  public myStudyingStrategy() {
    if (this.examStrategy) {
      this.examStrategy.studying();
    }
  }
}

//// Improve2 : Dependency Injection to ensure the support class is ready
class Student2 {
  private examStrategy: ExamStrategy;

  constructor(strategy: ExamStrategy) {
    this.examStrategy = strategy;
  }

  public myStudyingStrategy() {
    this.examStrategy.studying();
  }
}
