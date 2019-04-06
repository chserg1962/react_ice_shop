var write = document.querySelector(".btn_write");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".popup_close");
var user_name = popup.querySelector("[name=your_name]");

write.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup_show");
    user_name.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup_show");
    popup.classList.remove("popup_error");
});

