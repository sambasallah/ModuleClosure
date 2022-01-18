window.onload = function() {
    let rudyTimer = (function() {
        function printMsg() {
            alert("Rudy!");
        }
        
        return {
            timer: printMsg,
        }
    })();

    document.getElementById("clickMe").onclick = () => {
        setInterval(rudyTimer.timer,2000);
    }
}
