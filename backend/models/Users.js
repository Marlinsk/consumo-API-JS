const users = [
    { name: 'Adam Jensen', email: 'JensemDeusesx@outlook.com' },
    { name: 'Daniel Schneiderlin', email: 'DanielSlin@gmail.com' },
    { name: 'Heleanor Meeuwsen', email: 'HeleanorMeeuwsen@gmail.com' },
    { name: 'Lixton Von Hallmer', email: 'Hallmer@outlook.com' },
    { name: 'Markus Kollen', email: 'MarkusKollen@gmail.com' },
    { name: 'Matthijs Carvalho', email: 'MattCarvalho@outlook.com' },
    { name: 'Renato Gomes', email: 'RenatoGomes@gmail.com' }, 
    { name: 'Ricardo Rodrigues', email: 'RicaRodrix@outlook.com' },
    { name: 'Ricardo São Gabriel', email: 'Ricardo676@gmail.com' },
    { name: 'Vinicius Abrahams', email: 'ViniAbrahams@gmail.com' }
];

module.exports = {
    async index(req, res) {
        return res.json(users)
    }
} 