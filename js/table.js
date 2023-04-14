const filter = document.getElementById('filter');
setTable(data);

filter.addEventListener('keyup', filterItems);

function setTable(arr) {
    document.querySelector('#requests-table tbody').innerHTML = '';
    arr.forEach(function (item) {
        document.querySelector('#requests-table tbody').insertAdjacentHTML('beforeend', `
            <tr class="stroke">
                <td>${item.question}</td>
                <td>${item.answer}</td>
            </tr>
        `);
    });
}

function filterItems(e) {
    var searchedText = e.target.value.toLowerCase();
    var items = [...document.querySelectorAll('tr.stroke')];
    items.forEach(function(item){
        var itemText = item.innerText.split('\t').join(', ');
        if (itemText.indexOf(searchedText) != -1) {
            item.style.display= 'table-row';
        } else {
            item.style.display = 'none';
        }
    }); 
};

// function deleteItem(id) {
//     let ids = data.map(function (item, i) {
//         return data[i].id;
//     })
//     let index = ids.indexOf(id);

//     if (index !== -1) {
//         data.splice(index, 1);
//         localStorage.setItem('data', JSON.stringify(data));
//         location.reload();
//     }
// }
