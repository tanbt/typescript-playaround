import path from "path";
import fs from "fs";
import { promises as fsAsync } from "fs";

class Student {
  constructor(private readonly _id: number, private _name: string) {}
  public get id() {
    return this._id;
  }
  public get name() {
    return this._name;
  }
  public set id(id: number) {
    // this._id = id;
    throw new Error("Cannot change id");
  }
  public set name(name: string) {
    this._name = name;
  }

  private static getFilePath(): string {
    const folderPath = path.join(__dirname, "data");
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    return path.join(__dirname, "data", "student.json");
  }

  public write() {
    const data = JSON.stringify(this);

    const filePath = Student.getFilePath();
    fs.writeFileSync(filePath, data);
    console.log("Data written to file: " + filePath);
  }

  public static async readFromFileAsync(path?: string): Promise<Student> {
    const filePath = Student.getFilePath();
    const data = await fsAsync.readFile(path || filePath, "utf-8");
    console.log("Read student from file:\n" + data);
    return JSON.parse(data);
  }
}

const student = new Student(1, "John");
student.name = "Jane";
// student.write();
const std2 = Student.readFromFileAsync();
