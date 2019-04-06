export function validateTable(tbobj) {
    var dom = "<table>";
    var valid = "class=\"valid-data\"";
    var invalid = "class=\"invalid-data\"";
    var isValid = false;
    for(var row = 0; row < tbobj.length; row++) {
        if(row === 0) {
            dom += "<thead><tr>";
            tbobj[row].forEach(rowelem => {
                dom += `<th ${valid}>${rowelem}</th>`;
            });
            dom += "</tr></thead><tbody>";
        }
        else {
            dom += "<tr>";
            tbobj[row].forEach(rowelem => {
                dom += `<td ${isNaN(rowelem)? invalid:valid}>${rowelem===null?0:rowelem}</td>`;
            });
            dom += "</tr>";
        }
    }
    dom += "</tbody></table>";
    return {table: dom, validStatus: isValid};
}
