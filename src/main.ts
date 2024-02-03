import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const user1 = new User();
const company1 = new Company();
const map = new Map("map");

console.log(user1);
console.log(company1);
console.log(map);

map.addMarker(user1);
map.addMarker(company1);
