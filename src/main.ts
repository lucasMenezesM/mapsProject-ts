import { User } from "./User";
import { Company } from "./Company";

const user1 = new User();
const company1 = new Company();

console.log(user1);
console.log(company1);
console.log(user1.getLocation().lat, user1.getLocation().lng);
