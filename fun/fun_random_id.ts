import _ from "lodash";

export function generateRandomId() {
  var abjad = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const index = _.random(0, abjad.length - 1);
  const randomAb = abjad[index];
  const randomNum = Math.floor(Math.random() * 10000 - 100) + 10;
  const hasil = randomAb + randomNum + randomAb;
  return hasil;
}
