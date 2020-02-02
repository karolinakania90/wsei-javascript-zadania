const form = document.querySelector("form");
const table = document.querySelector(".table.table-bordered tbody");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const t1 = document.querySelector("#team1");
    const t2 = document.querySelector("#team2");
    const p1 = document.querySelector("#points1");
    const p2 = document.querySelector("#points2");

    if (t1.value !== t2.value && p1.value >= 0 && p2.value >= 0) {
        let td1 = document.createElement("td");
        td1.innerText = t1.value;

        let td2 = document.createElement("td");
        td2.innerText = t2.value;

        let td3 = document.createElement("td");
        td3.innerText = p1.value + " - " + p2.value;

        let tr = document.createElement("tr");

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    }
})