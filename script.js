let container = document.querySelector('#people');
let input = document.querySelector('#searchInput');

let data = [
    { name: "Pritam", src: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D'},
    { name: "Debargha", src: 'https://images.unsplash.com/photo-1685376104208-fc94af0786e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: "Sumit", src: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: "Riya", src: 'https://images.unsplash.com/photo-1656074166642-c1c22b309d9a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHJhdyUyMHBvcnRyYWl0fGVufDB8fDB8fHww'},
    { name: "Rizu", src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'},
    { name: "Pratik", src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: "Sundor", src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: "Mampa", src: 'https://images.unsplash.com/photo-1662990950755-9bd8aa28c18b?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: "Simran", src: 'https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D'},
    { name: "Sreya", src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D'},
];

let people = '';

data.forEach(element => {
    people += `<div id="person" class="flex flex-col justify-center items-center">
                    <img src="${element.src}" class="h-28 w-28 rounded-full object-cover shadow-lg"/>
                    <h4 class="font-medium">${element.name}</h4>
                </div>`
    container.innerHTML = people;
});


input.addEventListener('input', () => {
    var sorted = data.filter(element => {
    return element.name.startsWith(input.value);
    });

    let sortedPeople = '';

    sorted.forEach((element) => {
        sortedPeople += `<div id="person" class="flex flex-col justify-center items-center">
                            <img src="${element.src}" class="h-28 w-28 rounded-full object-cover shadow-lg"/>
                            <h4 class="font-medium">${element.name}</h4>
                        </div>`
        container.innerHTML = sortedPeople;
    });
});
