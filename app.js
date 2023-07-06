const order1 = new Order('Matite', 1.50, 20)
// abbiamo inserito su Order1 tutte le proprietà di cui ha bisogno (vederle su orders.js)

console.log(order1)
console.log(order1.totalPrice)
console.log(order1.toString())
// abbiamo loggato prima order1 come oggetto, poi il prezzo totale di order1 e infine il toString

const person1 = new Person('Damiano', 'Di Lionardo', new Date(1993, 4, 29), 'male');
// abbiamo inserito su person1 tutte le proprietà di cui ha bisogno (vederle su person.js)
console.log(person1);
const dob = new Date(1978, 2, 2);
const person2 = new Person('Andrea', 'Asioli', dob, 'male');
console.log(person2)

const client1 = new Client('Manuela', 'Cognome', new Date(1988, 5, 22), 'female', 'via Martini 56', [order1]);
console.log(client1);

const order2 = new Order('penne', 2.50, 100)
const ordersArray = [order1, order2];

const client2 = new Client('Cesare', 'Falzone', new Date(2003, 2, 4), 'male', 'via XX settembre 3', ordersArray)
console.log(client2)


const employee1 = new Employee('Ares', 'Fiumicelli', new Date(1993,2,5), 'male', 'cancelleria', [client1, client2])
console.log(employee1)

console.log(new Date().getTime()); 
// getTime ti da i millesecondi dal 1 gennaio 1970 a oggi

console.log(employee1.age)

console.log(employee1.toString())

console.log(client2.toString())

console.log(employee1.totalEarnigs())
