    const targetDiv = document.getElementById("third");
    function openNav() {
        document.getElementById("mySidenav").style.width = "300px";
        targetDiv.style.display = "none";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    // 




    function showMenu() {

        if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
        } else {
            targetDiv.style.display = "block";
        }
    }