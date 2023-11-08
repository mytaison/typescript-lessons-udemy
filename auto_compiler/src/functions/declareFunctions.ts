function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`;
}
console.log(intro("Megamind", 12));
// Arrow funuction
const introduction = (name: string, age: number) => {
  console.log(`My name is ${name} and age is ${age}`);
};
introduction("Hasan", 30);
