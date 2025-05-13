//función para recalcular fecha de acuerdo a la cantidad que se proporciona
export function recalculateDate(current_date, days) {
    var formatted_date;
    var new_date;
    //Capturamos la nueva fecha deseada tomando en cuenta la zona horaria actual
    new_date = new Date(current_date);
    new_date.setDate(new_date.getDate() + days);
    new_date.setHours(0, 0, 0, 0);
    //console.log('new date is ' + `${new_date}`)
  
    const month = String(new_date.getMonth() + 1).padStart(2, '0'); // Mes en formato 01-12
    const day = String(new_date.getDate()).padStart(2, '0');        // Día en formato 01-31
    const year = new_date.getFullYear();
    return formatted_date = `${month}/${day}/${year}`;
};