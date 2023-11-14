let open_modal = document.querySelectorAll('.open');
let close_modal = document.getElementById('close');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { 
                modal.classList.add('modal_vis'); 
        modal.classList.remove('rem'); 
        body.classList.add('body_block'); 
    };
}
close_modal.onclick = function() { 
    modal.classList.add('rem'); 
        window.setTimeout(function() {
        modal.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); 
    }, 500)
}