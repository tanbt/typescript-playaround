// clients should not be forced to implement interfaces they don't use
// similar to liskove but for interface level instead of class level

//// Bad design
interface Gradability {
  takeFinalExam: () => void;
  doThesis: () => void;
}

// @ts-ignore
class HighSchoolStudent implements Gradability {
  takeFinalExam() {}
  doThesis() {
    throw new Error("High school students don't do thesis");
  }
}

// problem: one interface contains too many do-able methods

//// Improve: split the interface, as interface supports multiple inheritance, each interface should have only one responsibility
interface FinalExam {
  takeFinalExam: () => void;
}
interface Thesis {
  doThesis: () => void;
}
// @ts-ignore
class HighSchoolStudent1 implements FinalExam {
  takeFinalExam() {}
}
