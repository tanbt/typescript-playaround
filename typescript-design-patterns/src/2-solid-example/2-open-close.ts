// Software entities like classes, modules and functions should be open for extension but closed for modifications.
// Symptoms: too many if/else statements, switch cases, etc that cause the class to be modified frequently

//// Bad design
class StudentExamStrategy {
  constructor(private examType: string) {}

  public studying() {
    if (this.examType === "multiple-choice") {
      console.log("Pray for luck");
    } else if (this.examType === "oral") {
      console.log("Brush teeth");
    }
  }
}

const main = () => {
  //// Problem: if we want to add new exam type, we have to modify the class
  const strategy = new StudentExamStrategy("multiple-choice");
  strategy.studying();
};

//// Improve: separate the logic into different entities
export interface ExamStrategy {
  studying(): void;
}
export class MultipleChoiceExam implements ExamStrategy {
  studying() {
    console.log("Pray for luck");
  }
}
export class OralExam implements ExamStrategy {
  studying() {
    console.log("Brush teeth");
  }
}

const main1 = () => {
  //// Benefit: if we want to add new exam type, we just modify the caller, not the existing classes
  const strategy = new MultipleChoiceExam();
  strategy.studying();
};
