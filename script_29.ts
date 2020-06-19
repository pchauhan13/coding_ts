class ProtectedConstructorPerson {
  protected name: string;
  protected constructor (theName: string) {
    this.name = theName;
  }
}

class ProtectedConstructorEmployee extends ProtectedConstructorPerson {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
}

let person = new ProtectedConstructorPerson("Prashant");