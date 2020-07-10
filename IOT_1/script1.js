function fetchData() {
    fetch('http://91.121.88.38:3000/api/people')
        .then(response => {
            if (!response.ok) {
                throw Error("Nope");
            }
            return response.json();
        })

        .then(data => {
            const html = data.map(user => {

                for (const dataKey in data) {
                    return `<div class="user">
                                <p> Nom : ${user.name}</p>
                                <p> Age : ${user.age}</p>
                                 <p> Voitures : </p>
                                       <ul>
                                            <li>${user.cars}</li>
                                       </ul>
                             </div>
                            <hr>`;
                }
            })
                .join("");
            document.querySelector(".list1").insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.log(error);
        })
}

fetchData();

