var faker = require('faker')
var cpf = require ('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11912340000',
            address: {
                postalcode: '04345020',
                street: 'Rua Tenente Ubirajara Monory',
                number: '136',
                details: 'apto 41',
                district: 'Jabaquara',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
        
}
