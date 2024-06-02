// Each class must have one, and only one, reason to change
// Each class must have one, and only one responsibility (how to define "responsibility": map to real-world business)

//// Bad design
// @ts-ignore
class Student {
  public study() {}
  public quitStudying() {}
  public eat() {}
  public buildSchool() {}
}

//// Improve 1: split the responsibility
// @ts-ignore
class Student1 {
  public study() {}
  public quitStudying() {}
  public eat() {}
}

class Constructor {
  public buildSchool() {}
}

//// Improve 2: make it more meaningful
class Human {
  constructor() {}
  public eat() {}
}

class Student2 extends Human {
  public study() {}
  public quitStudying() {}
}

class Constructor2 extends Human {
  public buildSchool() {}
}
