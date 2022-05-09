document.querySelector('#bid-form').addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.querySelector('#question').value;
    let answer = document.querySelector('#answer').value;
    //    debugger
    let ID;
    if (data.length > 0) {
        //если есть, то находим индекс последнего эл-та в массиве
        var lastIndex = data.length - 1;
        //получаем по этому индексу сам элемент, берем его id и увеличиваем на единицу, чтобы получить ID
        //для нового элемента (последний элемент в массиве будет иметь последний ID)
        ID = data[lastIndex].id + 1;
    } else {
        ID = 0;
    }
    let userData = {
        "id": ID,
        "question": name,
        "answer": answer
    }

    data.push(userData);
    localStorage.setItem('data', JSON.stringify(data));

    clearFields();
})