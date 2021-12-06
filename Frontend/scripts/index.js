var numberOrders = 0;

if (localStorage.getItem("numberOrdersOld")) {
    var newOrder = localStorage.getItem("numberOrdersOld");
} else {
    var newOrder = 0;
}

fetch("http://localhost:3000/orders", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        numberOrders = data.length;

        var dataReverse = data || [];
        document.querySelector(".orders .loading").remove();
        dataReverse.forEach((order) => {
            document.querySelector(".reverse").innerHTML += `
    <div class="order">
      <div class='orderCode'>${order.code}</div>
      <div class='dateCode'>${order.date}</div>
    </div>
      `;
        });
        document.querySelector(".orderQuantity").innerHTML += `
       Número de pedidos: ${numberOrders}           
      `;

        if (numberOrders != 0) {} else {
            {
                document.querySelector(".orderLess").innerHTML += 
        `
        Nenhum pedido expresso A ENVIAR no momento.

        `;
            }
        }
        handleNotifyNerOrder();
    })

    .catch(function (error) {
        console.log(error);
    });

setTimeout(() => {
    window.location.reload(true);
}, 180000);