let equipment = "";
let cart = [];
const btnAddDevice = document.getElementById("btnAddDevice");
const catalogue = document.getElementById("catalogue");

let loadEquipmentCard = () => {
   
    catalogue.innerHTML = " "
    for (let equipment of CATALOGUEEQUIPMENT) {
      let card = `<div id="equipmentCard" class="card">
                        <button id="equipmentFeatures" class="btn" type="button" data-toggle="modal" data-target="#featuresModal">
                            <img src="${equipment.image}">
                        </button>
                        <div class="card-body">
                            <h5 class="card-title">${equipment.name}</h5>
                            <p class="card-text font-weight-lighter">${equipment.brand}</p>
                            <h6 class="card-title">$ ${equipment.price}</h6>
                        </div>
                        <button id="btnAddDevice" type="button" class="btn btn-lg btn-pink px-4 card-footer" onclick="addDeviceToCart(${equipment.equipmentid})" value="Agregar data-id="1">Agregar</button>
                    </div>`

                    catalogue.innerHTML += card
      
    }
}

document.addEventListener("DOMContentLoaded", loadEquipmentCard) 



