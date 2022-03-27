import { getCurrentDate } from "../helpers/dateHelper";

const todayDate = getCurrentDate( '/' );
let yesterdayDate = new Date();
yesterdayDate.setDate( todayDate.date.getDate() -1 );

const toDos = [
    {
        id: 123,
        creationDate: todayDate.date,
        dueDate: new Date(),
        description: 'Comprar comida para el perro',
        isDone: true
    },
    {
        id: 321,
        creationDate: todayDate.date,
        dueDate: new Date(),
        description: 'Llamar a papá',
        isDone: false
    },
    {
        id: 456,
        creationDate: todayDate.date,
        dueDate: yesterdayDate,
        description: 'Pagar las cuentas de la casa',
        isDone: false
    },
];

export const useFetch = () => {
    const getToDos = () => toDos;

    return {
        getToDos
    }
}
