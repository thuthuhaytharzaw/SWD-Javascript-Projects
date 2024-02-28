import initialRender from "./core/intialRender.js";
import listener from "./core/listener.js";
import observer from "./core/observer.js";

class Invoice{
    init(){
        console.log("Invoice App Start");
        
        initialRender();

        listener();

        observer();
    }
}

export default  Invoice;