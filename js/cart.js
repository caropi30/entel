class Equipment {
    constructor(shoppingCart) {
        let cart = shoppingCart

        this.cartCalulation = () => {
            let total = 0
            for (let equipment of cart) {
                total += parseFloat(equipment.price)
            }
        

            return total
        }

        this.discountApply = () => {
            let amountWithDiscount = 0
            let amountWithoutDscount = this.cartCalulation()
            let r = DISCOUNT.find(d => d.amount == parseInt(cart.length))
            if (r == undefined) {
                console.log("No hay descuentos para tu equipo seleccionado")
            } else {
                amountWithDiscount = (amountWithoutDscount * parseFloat(r.factor))
            }

            return amountWithDiscount
        }
    } 
}