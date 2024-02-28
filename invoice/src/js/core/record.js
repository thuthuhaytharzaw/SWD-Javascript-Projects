import { rowGroup, rowTemplate } from "./selectors.js";

// let recordIndex = 1;


export const createRecord = ({id,name,price},quantity) => {

    const rowCost = price * quantity;

    const record = rowTemplate.content.cloneNode(true);
    console.log(record.querySelector('.row-no').innerText);
    // console.log(record.querySelector('.row-product-name').innerText = name)
    // console.log(record.querySelector('.row-product-price').innerText = price)
    // console.log(record.querySelector('.row-quantity').innerText = quantity)
    // console.log(record.querySelector('.row-cost').innerText = rowCost)
    // record.querySelector('.row-no').innerText = id;
    record.querySelector('.row').setAttribute('row-product-id',id);
    record.querySelector('.row-product-name').innerText = name;
    record.querySelector('.row-product-price').innerText = price;
    record.querySelector('.row-quantity').innerText = quantity;
    record.querySelector('.row-cost').innerText = rowCost;

    return record;

}

export const updateRecordTotal = () => {
    const allRowCost = document.querySelectorAll('.row-cost');
    // let total = 0;

    // allRowCost.forEach(({innerText}) => (total += parseFloat(innerText)));
    recordTotal.innerText = [...allRowCost].reduce((pv,{innerText}) => pv + parseFloat(innerText),0); // 0 is initial value of reduce
}

export const deleteRecord = (event) => {
    const row = event.target.closest('.row');
    if(confirm('Are you sure to delete row ?')){
        row.remove();
        updateRecordTotal();
    }
}

export const updateRecord = (productId,q) => {
    // const row = event.target.closest('.row');
    const row = document.querySelector(`[row-product-id='${productId}']`);
    const currentQuantity = row.querySelector('.row-quantity');
    const currentCost = row.querySelector('.row-cost');
    const currentPrice = row.querySelector('.row-product-price');
    
    if(q > 0 || currentQuantity.innerText > 1){
        currentQuantity.innerText = parseInt(currentQuantity.innerText) + q;
        currentCost.innerText = currentPrice.innerText * currentQuantity.innerText;
        updateRecordTotal();
    }
}

export const addRecordQuantity = (event) => {
    const row = event.target.closest('.row');
    const currentQuantity = row.querySelector('.row-quantity');
    const currentCost = row.querySelector('.row-cost');
    const currentPrice = row.querySelector('.row-product-price');

    currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;
    currentCost.innerText = currentPrice.innerText * currentQuantity.innerText;
    updateRecordTotal();
}

export const subRecordQuantity = (event) => {
    const row = event.target.closest('.row');
    const currentQuantity = row.querySelector('.row-quantity');
    const currentCost = row.querySelector('.row-cost');
    const currentPrice = row.querySelector('.row-product-price');

   if(currentQuantity.innerText > 1){
        currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
        currentCost.innerText = currentPrice.innerText * currentQuantity.innerText;
        updateRecordTotal();
   }else{
    deleteRecord(event);
   }
}

// document.querySelector

export const recordObserver = () => {

    const run = () => {
        // console.log('observer')
        updateRecordTotal();
    };

    const observerOption = {
        childList: true,
        subtree: true,
    };

    const observer = new MutationObserver(run);

    observer.observe(rowGroup,observerOption);

}