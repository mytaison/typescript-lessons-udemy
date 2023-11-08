type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}
  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const day of holidays) {
        this.holidays.push(day);
      }
    }
  }
  public abstract printHolidays(): void;
}

// const Dept = new Department("CSE");

class ITDept extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("IT Department");
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(`Here is the list of holidays ${this.name}`);
    this.holidays.forEach((holiday, index) => {
      console.log(`${index + 1}. ${holiday.reason} : ${holiday.date} `);
    });
  }
}
class HRDept extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("HR Department");
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(`Here is the list of holidays ${this.name}`);
    this.holidays.forEach((holiday, index) => {
      console.log(`${index + 1}. ${holiday.reason} : ${holiday.date} `);
    });
  }
}

const ITHolidays: Holidays = [
  {
    date: new Date(2023, 12, 25),
    reason: "Christmas",
  },
  {
    date: new Date(2023, 4, 2),
    reason: "Eid ul Fitar",
  },
];

const HRHolidays: Holidays = [
  {
    date: new Date(2023, 4, 2),
    reason: "Eid ul Fitar",
  },
];

const ITDepartment: ITDept = new ITDept();
const HRDepartment: HRDept = new HRDept();

ITDepartment.addHolidays(ITHolidays);
HRDepartment.addHolidays(HRHolidays);
ITDepartment.printHolidays();
HRDepartment.printHolidays();

console.log(ITDepartment);
console.log(HRDepartment);
