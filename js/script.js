document.getElementById('calculate-triangle').addEventListener('click', function () {
    const base = getInputValue('triangle-b');
    const height = getInputValue('triangle-h');

    if (!base || !height) {
        return;
    }
    setAreaCalculation('Triangle', 0.5 * base * height);
});

document.getElementById('calculate-rectangle').addEventListener('click', function () {
    const width = getInputValue('rectangle-w');
    const height = getInputValue('rectangle-l');

    if (!width || !height) {
        return;
    }
    setAreaCalculation('Rectangle', width * height);
});

function getInputValue(id) {
    const value = parseFloat(document.getElementById(id).value);

    if (isNaN(value) || value < 0) {
        document.querySelector(`#${id}`).classList.add('border', 'border-red-700');
        document.querySelector(`#${id} + p`).classList.remove('hidden');
        return false;
    }

    return value;
}


let count = 1;
function setAreaCalculation(name, area) {
    area = area.toFixed(2);
    const row = document.createElement('tr');

    row.innerHTML =
        `<tr>
            <td>${count}.</td>
            <td class="px-2">${name}</td>
            <td class="pr-2">${area}cm<sup>2</sup></td>
            <td>
                <button class="text-white text-end px-4 py-1 bg-blue-600 rounded">Convert to m<sup>2</sup></button>
            </td>
        </tr>`
    document.getElementById('calculation-table').appendChild(row);
    count++;
}