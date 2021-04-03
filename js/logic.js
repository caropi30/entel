let equipment = "";
let cart = [];
const btnAddDevice = document.getElementById("btnAddDevice");
const catalogue = document.getElementById("catalogue");

let loadEquipmentCard = () => {
    debugger
    catalogue.innerHTML = " "
    for (let equipment of CATALOGUEEQUIPMENT) {
     /*   let card = `<div id="equipmentCard" class="card shadow-sm">
                        <button id="equipmentFeatures" class="btn" type="button" data-toggle="modal" data-target="#featuresModal">
                            <img src="${equipment.image}">
                        </button>
                        <div class="card-body">
                            <h5 class="card-title">${equipment.name}</h5>
                            <p class="card-text font-weight-lighter">${equipment.brand}</p>
                            <h6 class="card-title">$ ${equipment.price}</h6>
                        </div>
                        <button id="btnAddDevice" type="button" class="btn btn-lg btn-pink px-4 card-footer" onclick="addDeviceToCart(${equipment.equipmentid})" value="Agregar">Agregar</button>
                    </div>`

                    catalogue.innerHTML += card*/
        debugger
        $(this.#equipmentCard).append(`<div class="card shadow-sm">
                                        <button id="equipmentFeatures" class="btn" type="button" data-toggle="modal" data-target="#featuresModal">
                                            <img src="${equipment.image}">
                                        </button>
                                        <div class="card-body">
                                            <h5 class="card-title">${equipment.name}</h5>
                                            <p class="card-text font-weight-lighter">${equipment.brand}</p>
                                            <h6 class="card-title">$ ${equipment.price}</h6>
                                        </div>
                                        <button id="btnAddDevice" type="button" class="btn btn-lg btn-pink px-4 card-footer" onclick="addDeviceToCart(${equipment.equipmentid})" value="Agregar">Agregar</button>
                                    </div>`)

                    $('#catalogue').html('')
    }
}

//document.addEventListener("DOMContentLoaded", loadEquipmentCard) 

$(document).on("DOMContentLoaded", loadEquipmentCard)

/*let addDeviceToCart = (id) => {
    let r = CATALOGUEEQUIPMENT.find(c => c.equipmentid == id)
    cart.push(r)

    cartRefresh();
    itemsCartSave();
}
*/

