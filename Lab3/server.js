const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port $(port)`)
});

const uri = 'mongodb+srv://cuonglmph51095:Lemanhcuong2005@cluster0.oskcp.mongodb.net/MD19304';

const mongoose = require('mongoose');

const phoneModel = require('./phoneModel')

app.get('/',  async (req,res) => {
    await mongoose.connect(uri)

    let phones = await phoneModel.find();

    console.log(phones);

    res.send(phones);
})


app.get('/add_phone', async (req, res) =>{
    await mongoose.connect(uri);

    let phone = {
        ten: 'Nokia 1280',
        hang: 'Nokia',
        namSX: 2012,
        gia: 500,
    }

    let kq = await phoneModel.create(phone);
    console.log(kq);

    let phones = await phoneModel.find();

    console.log(phones);

    res.send(phones);
})

app.get('/xoa/:id', async (req, res) => {
    await mongoose.connect(uri);

    let id = req.params.id;

    console.log(id);

    // xu li loi khi id ko dung
    await phoneModel.deleteOne({_id:id});

    res.redirect('../')

})

app.get('/update/:ten', async (req, res)=> {
    await mongoose.connect(uri);

    console.log('ket noi db thanh cong');

    let phoneName = req.params.ten;
    console.log(phoneName);

    let newPhoneName = phoneName + 'ban moi 2024 ';

    await phoneModel.updateOne({ten: phoneName}, {ten: newPhoneName});

    let phones = await phoneModel.find({});

    res.send(phones);
})