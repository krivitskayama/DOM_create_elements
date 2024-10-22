const exist_element=document.querySelector("input");

exist_element.addEventListener("click",()=>{
    let new_element=document.createElement("div");
    new_element.innerHTML="new div";
    new_element.classList.add("new_style");
    exist_element.before(new_element);
    let new_element_close=document.createElement("input");
    new_element_close.type="button";
    new_element_close.value="X";
    new_element_close.addEventListener("click",()=>{
        new_element.remove();
    })
    new_element.append(new_element_close);
})