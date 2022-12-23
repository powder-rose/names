let username = document.querySelector('.name')
let lastName = document.querySelector('.last-name')
let patronymic = document.querySelector('.patronymic')
let btn = document.querySelector('.btn')
let result = document.querySelector('.result')

const getResult = () => {
    let name = username.value.trim().charAt(0).toUpperCase() + username.value.trim().slice(1).toLowerCase()
    let lname = lastName.value.trim().charAt(0).toUpperCase() + lastName.value.trim().slice(1).toLowerCase()
    let patr = patronymic.value.trim().charAt(0).toUpperCase() + patronymic.value.trim().slice(1).toLowerCase()

    result.innerHTML = `Фамилия: ${lname}, Имя: ${name}, Отчество: ${patr}`
}


