function jsonToHtml(jsonString) {
    let arr = JSON.parse(jsonString);
    let output = '<table>\n';
    let firstObj = arr[0];
    output += '<tr>';
    for (const key in firstObj) {
        output += `<th>${escape(key)}</th>`;
    }
    output += '</tr>\n';

    for (const obj of arr) {
        output += '<tr>';
        for (const key in obj) {
            output += `<td>${escape(obj[key].toString())}</td>`;
        }
        output += '</tr>\n'

    }
    output += '</table>';

    function escape(text) {
        return text.replace(/[<> &"]/g, (result) => {
            const map = {
                "<": '&lt;',
                ">": '&gt;',
                "&": '&amp;',
                " ": '&nbsp;',
                "\"": '&quot;'
            };

            if (map[result]) {
                return map[result];
            }

            return result;
        })
    }

    console.log(output);
    return output;
}
jsonToHtml(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);