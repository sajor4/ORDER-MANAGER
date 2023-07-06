class Employee extends Person {

    constructor(name, surname, dob, gender, department, clients = []) {

        super(name, surname, dob, gender);
        this.department = department;
        this.clients = clients;


    }

    addClient(client){
        this.clients.push(client);
    }

    totalEarnigs(){
    const totalEarnigs = this.clients.reduce((a, c) => a + c.totalExpenses(), 0);
    // per ogni client aggiungi la sua spesa totale
    return totalEarnigs;
    }
}