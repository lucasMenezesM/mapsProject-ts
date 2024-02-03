import { faker } from "@faker-js/faker";

export class Company {
  private name: string;
  private location: {
    lat: number;
    lng: number;
  };
  private phrase: string;
  private phoneNumber: string;

  constructor() {
    this.name = faker.company.name();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
    this.phrase = faker.company.catchPhrase();
    this.phoneNumber = faker.phone.number();
  }

  getName(): string {
    return this.name;
  }

  getLocation(): { lat: number; lng: number } {
    return this.location;
  }

  getPhrase(): string {
    return this.phrase;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }
}
