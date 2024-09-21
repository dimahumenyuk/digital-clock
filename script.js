// Create with CodeOnly and Dima Humenyuk
setInterval(()=>{
    var d = new Date();
    var n = d.toLocaleTimeString();
    document.getElementById('id_clock').innerHTML = n;
}, 1000);
