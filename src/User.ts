import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class User implements Mappable {
  private firstName: string;
  private lastName: string;
  private sex: "female" | "male" | undefined;
  private phoneNumber: string;
  private location: Location;

  constructor() {
    this.sex = faker.person.sexType();
    this.firstName = faker.person.firstName(this.sex);
    this.lastName = faker.person.lastName();
    this.phoneNumber = faker.phone.number();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getName(): string {
    return `${this.getFirstName()} ${this.getLastName()}`;
  }

  getLocation(): Location {
    return this.location;
  }

  getSexType(): "female" | "male" | undefined {
    return this.sex;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getSummary(): string {
    return `
    <h1>Name: ${this.getName()}</h1>
    <h3>Phone: ${this.getPhoneNumber()}</h3>
  `;
  }
}

interface Location {
  lat: number;
  lng: number;
}
