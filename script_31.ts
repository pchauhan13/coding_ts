class AccessorsEmployee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(name: string) {
    this._fullName = name;
  }
}

let employee = new AccessorsEmployee();
employee.fullName = "Prashant Singh Chauhan";
if (employee.fullName) {
  console.log(employee.fullName);
}