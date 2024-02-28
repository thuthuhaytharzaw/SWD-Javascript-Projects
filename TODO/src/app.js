const app = document.querySelector('#app');
const textInput = document.querySelector('#textInput');
const checkAll = document.querySelector('#checkAll');
const addBtn = document.querySelector('#addBtn');
const listGroup = document.querySelector('#listGroup');
const doneCount = document.querySelector('#doneCount');
const totalCount = document.querySelector('#totalCount');
const listTemplate = document.querySelector('#listTemplate');

const updateCounter = () => {
    totalCount.innerText = countListTotal();
    doneCount.innerText = countDoneListTotal();
}
const countListTotal = () => {
    return document.querySelectorAll('.list').length;
}
const countDoneListTotal = () => {
    return document.querySelectorAll('.list .list-check:checked').length;
}

const createList = (text) => {
    // third test
    const list = listTemplate.content.cloneNode(true);
    const listText = list.querySelector('.list-text'); 
    const listDelBtn = list.querySelector('.list-del-btn');
    const listEditBtn = list.querySelector('.list-edit-btn');
    const listCheckBox = list.querySelector('.list-check');

    listText.innerText = text;

    
    // first test
    // const list = document.createElement('div');
    // list.className = ' list group bg-white animate__animated animate__fadeInUp border border-zinc-700 p-3 mb-3 overflow-hidden';

    // list.innerHTML = `<div class="flex justify-between items-center">
    //                             <div class="flex items-center gap-3">
    //                                 <input type="checkbox" class="list-check accent-zinc-700 w-4 h-4">
    //                                 <label class='list-text' for="">${text}</label>
    //                             </div>
    //                             <div class="flex gap-2 duration-300 translate-x-[120%] group-hover:translate-x-0">
    //                                 <button class="list-edit-btn border active:scale-90 duration-200 border-zinc-700 p-2">
    //                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-zinc-700">
    //                                         <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
    //                                 </svg>
    //                                 </button>
    //                                 <button class="list-del-btn border active:scale-90 duration-200 border-zinc-700 p-2">
    //                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-zinc-700 pointer-events-none">          
    //                                         <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    //                                     </svg>
    //                                 </button>
    //                             </div>
    //                   </div>`;

    // const listDelBtn = list.querySelector('.list-del-btn');
    // const listEditBtn = list.querySelector('.list-edit-btn');
    // const listCheckBox = list.querySelector('.list-check');
    // const listText = list.querySelector('.list-text');

    listDelBtn.addEventListener('click',deleteList);
    // listCheckBox.addEventListener('change',chekList)
    listEditBtn.addEventListener('click',updateList);

    // first test
    // listEditBtn.addEventListener('click',() => {
    //     const input = document.createElement('input');
    //     input.className = 'border border-zinc-700 px-2 focus-visible:outline-none';
    //     input.value = listText.innerText;
    //     listText.after(input);
    //     input.focus();
    //     listText.classList.toggle('hidden');
    //     input.addEventListener('blur',()=>{
    //         listText.innerText = input.value;
    //         input.remove();
    //         listText.classList.toggle('hidden');
    //     });
    // });


    // first test
    // listDelBtn.addEventListener('click',() => {
    //     // if(confirm('Are u sure to delete ?')){
    //     //     list.remove();
    //     // };

    //     confirm("Are U sure to delete ?") && list.remove();
    //     updateCounter();
    //     // totalCount.innerText = parseInt(totalCount.innerText) - 1;

    // });
    // first test 
    // listCheckBox.addEventListener('click',() => {
    //     listText.classList.toggle('line-through');
    //     updateCounter();
    // });

    return list;

}

const handleCheckAll = () => {
    checkAll.removeEventListener('click', handleCheckAll);
    console.log('u click check all');
}

const addList = () => {
    console.log('add list fun');

    listGroup.append(createList(textInput.value));

    updateCounter();

    // totalCount.innerText = parseInt(totalCount.innerText) + 1;

    textInput.value = null;
};

const deleteList = (event) => {
    const list = event.target.closest('.list');
    if (confirm("Are U sure to Delete")){
        list.classList.remove("animate__fadeInUp");
        list.classList.add("animate__fadeOutDown");

        list.addEventListener('animationend', () => {
            // list.removeEventListener('animationend',removeList);
            list.remove();
            updateCounter();
        })

        //third test
        // list.addEventListener("animationend",removeList);
        // list.remove();
        // updateCounter();
    };
    // console.log(list)
    // console.log('u delete')
    // console.log(event.target.parentElement.parentElement.parentElement)
}

// const chekList = (e) => {
//     const listText = e.target.nextElementSibling;
//     listText.classList.toggle('line-through');
//     updateCounter();
//     // console.log(e.target);
// }

const updateList = (event) => {
    const list = event.target.closest('.list');
    const listText = list.querySelector('.list-text');
    const input = document.createElement('input');
    input.className = 'border border-zinc-700 px-2 focus-visible:outline-none';
    input.value = listText.innerText;
    listText.after(input);
    input.focus();

    listText.classList.toggle('hidden');
    input.addEventListener('blur',()=>{
                listText.innerText = input.value;
                input.remove();
                listText.classList.toggle('hidden');
            });
    console.log(event.target)
}

const listGroupHandler = (event) => {
    console.log(event.target);
    if (event.target.classList.contains('list-del-btn')){
        deleteList(event);
    }else if(event.target.classList.contains('list-edit-btn')){
        updateList(event);
    }
}

// addBtn.onclick = addList;
addBtn.addEventListener('click',addList);
// textInput.addEventListener('keyup', (event) => {
//     if(event.key === 'Enter'){
//         addList();
//     }
// });

textInput.addEventListener(
    'keyup',
    (event) => event.key === 'Enter' && addList()
);

listGroup.addEventListener('click',listGroupHandler);
// checkAll.addEventListener('click',handleCheckAll)