import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class Company implements Mappable {
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

  getSummary(): string {
    return `
      <h1>Name: ${this.getName()}</h1>
      <h3>Phone: ${this.getPhoneNumber()}</h3>
      <h4>Catchprahse: ${this.getPhrase()}</h4>
    `;
  }
}
