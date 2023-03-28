const url = "https://jsonplaceholder.typicode.com/users"

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json()
//     })
//     .then((json) =>
//         console.log(json));

// // --> atas dan bawah merupakan function get mengambil dan menampilkan data
// async function fetchData() {
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }
// fetchData()

//--> berikut kodingan untuk post

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'apllication/json'
//     },
//     body: JSON.stringify({
//         name: 'Cocoba',
//         username: 'coba',
//         email: 'coba@gmail.com'
//     })
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json))


async function createData(url, data) {
    const response = await fetch(url, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(data),
    });
    return response.json();
}

const payload = {
    name: 'fitria',
    username: 'fitriaaja',
    email: 'fitnih@gmail.com'
}

createData('http://localhost:3000/data', payload)
    .then((data) => {
        console.log(data);
    })
