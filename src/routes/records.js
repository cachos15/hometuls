const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database')

router.post('/', (req,res)=>{
    
    const {uuid,categoryA,categoryB,categoryC,subCategory,institutionName,comments,politicA,politicB,politicC,anonymus,name,email,phone,code_state,code_city,gender,ip_address,ip_info,date,image,staName,citName,citId,latitude,longitude,locInfo,countItems,fileRecords} = req.body;
    const query = `INSERT INTO records (uuid,categoryA,categoryB,categoryC,subCategory,institutionName,comments,politicA,politicB,politicC,anonymus,name,email,phone,code_state,code_city,gender,ip_address,ip_info,date,image,staName,citName,citId,latitude,longitude,locInfo,countItems,fileRecords) VALUES (@uuid,@categoryA,@categoryB,@categoryC,@subCategory,@institutionName,@comments,@politicA,@politicB,@politicC,@anonymus,@name,@email,@phone,@code_state,@code_city,@gender,@ip_address,@ip_info,@date,@image,@staName,@citName,@citId,@latitude,@longitude,@locInfo,@countItems,@fileRecords)`;
    mysqlConnection.query(query,[uuid,categoryA,categoryB,categoryC,subCategory,institutionName,comments,politicA,politicB,politicC,anonymus,name,email,phone,code_state,code_city,gender,ip_address,ip_info,date,image,staName,citName,citId,latitude,longitude,locInfo,countItems,fileRecords],(e,rows,fields)=>{
        if (!e){
            res.json({Status: 'Registro almacenado'})
        } else {
            console.log(e);
        }
    })
})

module.exports = router;