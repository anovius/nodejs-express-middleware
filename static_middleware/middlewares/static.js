const express = require('express');
const path = require('path');
const fs = require('fs');

function static(req, res, next){
    const {fileName} = req.params
    console.log(path.join(process.cwd()+'/static_files/'+fileName))
    if(fs.existsSync(path.join(process.cwd()+'/static_files/'+fileName))){
        res.sendFile(path.join(process.cwd()+'/static_files/'+fileName))
        next()
    }
    else{
        res.status(404).send({msg: 'file not found'})
        res.end()
    }
}

module.exports = static