//función para recalcular fecha de acuerdo a la cantidad que se proporciona
function recalculateDate(current_date, days) {
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

function csvToJson(data) {
  var lines = data.split("\n");
  var result = [];
  var headers = lines[0].split(",");
  //console.log('headers: ' + `${headers}`)
  for(var i = 1; i < lines.length; i++) {
    var obj = {};
    var current_line = lines[i].split(",");
    for (var j = 0; j < headers.length; j++) {
      //console.log('headers[' + `${j}` + ']: ' + `${headers[j]}`)
      obj[headers[j].trim()] = current_line[j].replace(/\r?\n|\r/g, "");
    }
    result.push(obj);
  }
  //console.log(result);
  return result
}

function hexToRgb(hex) {
  // Remove the hash (#) at the start if present
  hex = hex.replace(/^#/, '');

  // Parse the r, g, b values from the hex string
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
}

module.exports = {recalculateDate, csvToJson, hexToRgb};