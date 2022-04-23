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

export const isFirstDateMoreThanSecondDate = ( date1 = new Date(), date2 = new Date() ) => {
    const firstDate = new Date( date1 );
    firstDate.setHours( 0, 0, 0, 0 )
    const secondDate = new Date( date2 );
    secondDate.setHours( 0, 0, 0, 0 )

    return ( firstDate >= secondDate);     
}