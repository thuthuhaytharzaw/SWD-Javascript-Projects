import { createProduct, productRender } from "./product.js";
import { addRecordQuantity, createRecord, deleteRecord, subRecordQuantity, updateRecord, updateRecordTotal } from "./record.js";
import { createForm, newProductCreateForm, productGroup, productSelect, recordTotal, rowGroup } from "./selectors.js";
import { products } from "./variables.js";

export const createFormHandler = (e) => {

    e.preventDefault();

    // console.log(productSelect.value);
    // console.log(inputQuantity.valueAsNumber);

    // data
    const formData = new FormData(createForm);
    const currentProductId = parseInt(formData.get('productSelect'));
    const currentProduct = products.find((el) => el.id === currentProductId);
    const currentQuantity = parseInt(formData.get('inputQuantity'));

    // console.log(currentProduct)

    // is exited row
    const isExitedRow = rowGroup.querySelector(`[row-product-id='${currentProductId}']`);
    if(isExitedRow){
        // const currentQuantityElement = isExitedRow.querySelector('.row-quantity');
        // const currentCost = isExitedRow.querySelector('.row-cost');
        // const currentPrice = isExitedRow.querySelector('.row-product-price');

        // currentQuantityElement.innerText = parseInt(currentQuantityElement.innerText) + currentQuantity;
        // currentCost.innerText = currentPrice.innerText * currentQuantityElement.innerText;
        updateRecord(isExitedRow.getAttribute('row-product-id'),currentQuantity)
    }else{
        // append row to table 
        rowGroup.append(createRecord(currentProduct,currentQuantity));

        // calculate total 
    }

    updateRecordTotal();
    createForm.reset();

    // first test because of function
    // const allRowCost = document.querySelectorAll('.row-cost');
    // let total = 0;

    // allRowCost.forEach((el) => (total += parseFloat(el.innerText)));
    // recordTotal.innerText = total;
    
}

export const rowGroupHandler = (event) => {
    if(event.target.classList.contains('row-del-btn')){
       deleteRecord(event);
    }else if (event.target.classList.contains('row-q-add')){
        // addRecordQuantity(event);
        updateRecord(event.target.closest('.row').getAttribute('row-product-id'),1);
    }else if (event.target.classList.contains('row-q-sub')){
        updateRecord(event.target.closest('.row').getAttribute('row-product-id'),-1);
    }
}

export const manageInventoryBtnHandler = () => {
    inventorySheet.classList.toggle('-translate-x-full')
}

export const newProductCreateFormHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(newProductCreateForm);
    const newProduct = {
        id : Date.now(),
        name : formData.get('new_product_name'),
        price : formData.get('new_product_price')
    }
 
    // first test 
    // productGroup.append(createProduct(newProduct))
    // productSelect.append(new Option(newProduct.name,newProduct.price));
    // products.push(newProduct);

    // second test 
    products.push(newProduct);
    productRender(products);

    newProductCreateForm.reset();

    console.log('submit')
}

export const printBtnHandler = (event) => {
    window.print();
}