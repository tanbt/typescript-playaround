// Child classes must be completely substitutable for their parent class.
// Protected|public methods and properties in the parent class should be meaningful and work for all child classes.

//// Bad design
// @ts-ignore
class Student {
  public doHomework() {}
  public takeFinalExam() {}
  public doThesis() {}
}
// @ts-ignore
class HighSchoolStudent extends Student {
  public doThesis() {
    throw new Error("High school students don't do thesis");
  }
}
class CollegeStudent extends Student {
  public takeFinalExam() {
    throw new Error("College students don't take final exam");
  }
}
// problem: HighSchoolStudent is not substitutable for Student as it throws error when calling a parent's method

//// Improve: move the methods close to the nearest context
// @ts-ignore
class Student1 {
  public doHomework() {}
}
class HighSchoolStudent1 extends Student1 {
  public takeFinalExam() {}
}
class CollegeStudent1 extends Student1 {
  public doThesis() {}
}
