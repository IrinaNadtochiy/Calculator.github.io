send.addEventListener("click",fnc);
function fnc(){
    let val_p = p.value;
    let val_y = y.value;
    let val_v = v.value;

    let val_result = parseInt(val_p) * parseInt(val_y) / parseInt(val_v)
    result.innerHTML = val_result;
}