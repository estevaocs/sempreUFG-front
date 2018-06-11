export class User {
    constructor(
        public id: number,
        public email: string,
        public password: string,
        public nome: string,
        public sobrenome: string,
        public profile: string,
    ){}
}