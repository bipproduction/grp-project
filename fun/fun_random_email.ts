import { firstRandomName } from './random_name/first_name';
import _ from "lodash";

let name = firstRandomName

export function generateRandomEmail(){
    const index = _.random(0, name.length -1)
    const random = name[index] + "@gmail.com"
    const hasil = random
    return hasil;
}
