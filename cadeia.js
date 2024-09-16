import conn from './conn.js '

const Schema = conn.Schema

const prisioneiroSchema = new Schema ({
    nome : {
        type: Schema.Types.String,
        required: true
    },
})

const celaSchema = new Schema ({
    altura: {
        type: Schema.Types.Number,
        required: true
    },
    comprimento: {
        type: Schema.Types.Number,
        required: true
    },
    largura: {
        type: Schema.Types.Number,
        required: true
    },
    prisioneiro: [prisioneiroSchema]
})

const cadeiaSchema = new Schema ({
    postalCode: {
        type: Schema.Types.String,
        required: true
    },
    tipo: {
        type: Schema.Types.String,
        enum: ['MUNICIPAL', 'ESTADUAL', 'FEDERAL'],
        default: 'MUNICIPAL'
    },
    cela: [celaSchema]
})

const Cadeia = conn.model('Cadeia', cadeiaSchema);

Cadeia.create({
    postalCode: '88833311',
    tipo: 'FEDERAL',
    cela: [
        {
            altura: 2,
            comprimento: 5,
            largura: 5,
            prisioneiro: [
            {
                nome: 'John Peterson'
            },
            {
                nome: 'Prisioneiro 2'
            },
            {
                nome: 'Prisioneiro 3'
            }
            ]
        }
    ]
})

export default Cadeia;