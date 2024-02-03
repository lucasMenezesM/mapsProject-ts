import { faker } from "@faker-js/faker";

export class User {
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

  getLocation(): Location {
    return this.location;
  }

  getSexType(): "female" | "male" | undefined {
    return this.sex;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }
}

interface Location {
  lat: number;
  lng: number;
}
