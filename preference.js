
/*
Datos del pagador:
a) Nombre y Apellido: 
b) Email: ​ El email del test-user pagador entregado en este documento.
c) Código de área: 11
d) Teléfono: 22223333

Datos de la dirección del pagador:
a) Nombre de la calle: False
b) Número de la casa: 123
c) Código postal: 1111
*/

var preference = {
    items: [
        {
            id: "1234",
            title: "Dummy Item",
            description: "Dispositivo móvil de Tienda e-commerce",
            quantity: 1,
            unit_price: 10.0,
            external_reference: "enorrmann@gmail.com"
        }
    ],
    payer: {
        name: "Lalo",
        surname: "Landa",
        email: "test_user_63274575@testuser.com",
        phone: {
            area_code: "11",
            number: 22223333,
        },
        address: {
            street_name: "False",
            street_number: 123,
            zip_code: "1111"
        }
    },
    back_urls: {
        success: "https://enorrmann-mp-ecommerce-nodejs.herokuapp.com/success",
        pending: "https://enorrmann-mp-ecommerce-nodejs.herokuapp.com/pending",
        failure: "https://enorrmann-mp-ecommerce-nodejs.herokuapp.com/failure"
    },
    auto_return: "approved",
    notification_url: "https://enorrmann-mp-ecommerce-nodejs.herokuapp.com/notifications",
    payment_methods: {
        installments: 6,
        excluded_payment_types: [
            {
                id: "atm"
            }
        ],
        excluded_payment_methods: [
            {
                id: "amex"
            }
        ]

    }
};
module.exports = {
    preference: preference
}