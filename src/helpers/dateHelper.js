import moment from 'moment';
export const getCurrentDate = ( separator='' ) => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return {
        date: newDate,
        parsed: `${ date }${ separator }${ month < 10 ? `0${ month }`:`${ month }`}${ separator }${ year }`
    };
}

export const parseDate = ( date, separator = '' ) => {
    const _date = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${ _date }${ separator }${ month < 10 ? `0${ month }`:`${ month }`}${ separator }${ year }`;
}

export const isFirstDateMoreThanSecondDate = ( date1, date2 ) => {
    console.log( date1 );
    return date1.getTime() >= date2.getTime();
}