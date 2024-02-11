let formInput = document.querySelector('.formInput');
let btn = document.querySelector('.btnSubmit');
let list = document.querySelector('.list');
let value;


let object = [
    {
        title: 'hello',
        complete: false
    },
    {
        title: 'hello',
        complete: true
    }
]

function render() {
    list.innerHTML = '';
    if(object.length === 0) {
        list.innerHTML = '<h3 class"h3">Нет записей</h3>'
    }
    for (let i = 0; i < object.length; i++) {
        list.insertAdjacentHTML('beforeend', createElement(object[i], i))
    }
}
render();


formInput.addEventListener('input', () => {
    value = formInput.value;
})
btn.addEventListener('click', () => {
    if (formInput.value.length === 0) {
        return
    }
    let newObject = {
        title: value,
        complete: false
    }
    object.push(newObject);
    render();

    
    formInput.value = ''
})
list.addEventListener('click', (event) => {
if(event.target.dataset.index){
    let index = Number(event.target.dataset.index);
    let typy = event.target.dataset.typy;
    if(typy === 'toggle') {
        object[index].complete = !object[index].complete
    } else if (typy === 'del') {
        object.splice(index, 1)
    }
    render()

}
})

function createElement(i, index) {
    return `
    <ul class="list list-group mb-4">
    <li class="note list-group-item">
        <span class="${i.complete ? 'text-decoration-line-through' : ''}">${i.title}</span>
        <div class="toDoBtns">
            <span class="btn btn-${i.complete ? 'warning' : 'success'}" data-index="${index}" data-typy="toggle">&check;</span>
            <span class="del btn btn-danger" data-index="${index}" data-typy="del">&times;</span>
        </div>
    </li>
    </ul>
    `
}




