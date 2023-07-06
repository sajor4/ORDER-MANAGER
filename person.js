class Person {

    constructor(name, surname, dob, gender) {
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.gender = gender;
    }

    get age(){
        const nowTimeStamp = new Date().getTime(); // millisecondi dal gennaio 1970 ad oggi
        const dobTimeStamp = this.dob.getTime(); //millesecondi dal gennaio 1970 alla data di nascita della person

        const deltaTimeStamp = nowTimeStamp - dobTimeStamp;
        const age = Math.floor(deltaTimeStamp / (1000 * 60 * 60 * 24 * 365));

        return age;
    }

    toString(){
        return 'Nome: ' + this.name + '\n' +
        'Cognome: ' + this.surname + '\n' +
        'Data di nascita: ' + this.dob + '\n' +
        'Età: ' + this.age + '\n' +
        'Genere: ' + this.gender + '\n';
    }
}