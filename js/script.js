document.getElementById('triangle-btn').addEventListener('click', function () {
    const base = getInputValue('triangle-b');
    const height = getInputValue('triangle-h');

    if (!base || !height) {
        return;
    }
    setAreaCalculation('Triangle', 0.5 * base * height);
});

document.getElementById('rectangle-btn').addEventListener('click', function () {
    const width = getInputValue('rectangle-w');
    const height = getInputValue('rectangle-l');

    if (!width || !height) {
        return;
    }
    setAreaCalculation('Rectangle', width * height);
});

document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const base = getInputValue('parallelogram-b');
    const height = getInputValue('parallelogram-h');
    if (!base || !height) {
        return;
    }
    setAreaCalculation('Parallelogram', base * height);
});

document.getElementById('rhombus-btn').addEventListener('click', function () {
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');
    if (!d1 || !d2) {
        return;
    }
    setAreaCalculation('Rhombus', 0.5 * d1 * d2);
});

document.getElementById('pentagon-btn').addEventListener('click', function () {
    const base = getInputValue('pentagon-p');
    const height = getInputValue('pentagon-b');

    if (!base || !height) {
        return;
    }
    setAreaCalculation('Triangle', 0.5 * base * height);
});

document.getElementById('ellipse-btn').addEventListener('click', function () {
    const aAxis = getInputValue('ellipse-a');
    const bAxis = getInputValue('ellipse-b');

    if (!aAxis || !bAxis) {
        return;
    }
    setAreaCalculation('Ellipse', 3.14 * aAxis * bAxis);
});


// change background color randomly on mouse over
const shapeCards = document.getElementsByClassName('shape-card');
for(const shapeCard of shapeCards){
    shapeCard.addEventListener('mouseover',function(event){
        const letters = '0123456789ABCDEF'.split('');
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        shapeCard.style.backgroundColor = color;
    });
}

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