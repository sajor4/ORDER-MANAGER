class Client extends Person {
    // client classe 'figlia' di 'person', quindi si fa extend e nel super mettiamo le proprietà che eredita da person
    constructor(name, surname, dob, gender, address, orders = []) {
        super(name, surname, dob, gender);
        this.address = address;
        this.orders = orders;
    }

    addOrder(order) {
        this.orders.push(order)
    }

    totalExpenses() {
        const totalExpenses = this.orders.reduce((a, c) => a + c.totalPrice, 0);
        // tra le parentesi mettiamo l'accumulator (che parte da zero) e il current (il totalPrice che prende dal get creato
        // su orders), a ogni giro si sommano e ritorna la somma finale 
        return totalExpenses;

        // si può fare anche con ciclo FOR

        //     let accumulator = 0;
        //     for (const order of this.orders) {
        //         accumulator += order.getTotalPrice();
        // }
        //     return accumulator;
    }

    toString(){
        return super.toString() + 
        'Indirizzo: ' + this.address + '\n' +
        'Ordini: ' + this.orders + '\n' +
        'Spesa totale: ' + this.totalExpenses().toFixed(2) + '€\n'
    }
}