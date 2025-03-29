document.addEventListener("DOMContentLoaded", function () {
    var sidemenu = document.getElementById("sidemenu");

    window.openmenu = function () {
        sidemenu.style.right = "0";
    };

    window.closemenu = function () {
        sidemenu.style.right = "-200px";
    };

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzUKUsNKuaIlFD4O2ydiWvTbbDvt-D9WzPF2JZoSL5UxuS8ggyBBui31dmOtW-hBVf-Wg/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Your Message has been sent to the owner.";
                setTimeout(() => { msg.innerHTML = ""; }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    window.opentab = function (tabname) {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    };
});