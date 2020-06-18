class ProtectedPerson {
  protected name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class ProtectedEmployee extends ProtectedPerson {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch(): string {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new ProtectedEmployee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);
