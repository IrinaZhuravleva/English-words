document.querySelector('#bid-form').addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.querySelector('#question').value;
    let answer = document.querySelector('#answer').value;

    let ID;
    if (data.length > 0) {
        var lastIndex = data.length - 1;
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