let employees = [
    {
        id: 1,
        firstName: "Robert",
        lastName: "Muldoon",
        occupation: "Gamekeeper"
    },
    {
        id: 2,
        firstName: "Henry",
        lastName: "Wu",
        occupation: "Genetisist"
    },
    {
        id: 3,
        firstName: "Ray",
        lastName: "Arnold",
        occupation: "Park administrator"
    },
    {
        id: 4,
        firstName: "Dennis",
        lastName: "Nedry",
        occupation: "System administrator"
    }
];

function createAnyElement (name, attributes) {
    let element = document.createElement(name);
    for (let key in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}

function aboutTableCreate(data) {
    let targetTable = document.querySelector("#about-table tbody");
    for (let row in data) {
        let tr = createAnyElement("tr");
        for (let key in data[row]) {
            let td = createAnyElement("td");
            td.innerHTML = data[row][key];
            tr.appendChild(td);
        }
        targetTable.appendChild(tr);
    }
}