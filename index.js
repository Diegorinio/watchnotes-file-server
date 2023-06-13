const fs = require('fs');
const express = require("express");
const path = require('path');
const process = require('process');
const app = express();
const router = express.Router();
const port = 8080;
const db = "database.json";
const localtunnel = require('localtunnel');
//
//(async ()=>{
//    const tunnel = await localtunnel({port: 8080, subdomain: 'watchnotes'});
//    tunnel.url;
//    console.log(`Site open at ${tunnel.url}`);
//    tunnel.on('closer', ()=>{
//        console.log('tunnel closed');
//    })
//})();
//
let host = process.argv.slice(2);
if(host.length<=0){
    host = "localhost";
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
    fs.readFile(db,'utf-8',(err, data)=>{
        if(err){res.send(err)}
        let data_parse = JSON.parse(data);
        res.render('index', {data: data_parse.notes});
    })
})

app.post('/addtodb', (req, res)=>{
    let _note_title = req.body.note_title.replace(/\s/g, '');
    let _note_content = req.body.note_content;
    let _subject = req.body.subject;
    let tojson = {subject:_subject,
    note_title:_note_title,note_content:_note_content};
    console.log(tojson);
    fs.readFile(db, 'utf-8',(err, data)=>{
        let datajson = JSON.parse(data);
        datajson.notes.push(tojson);
         fs.writeFile(db, JSON.stringify(datajson), 'utf-8', (err,res)=>{
            if(err){res(err)}
         });
    })
    res.redirect('/');
})

app.get('/notes', (req, res)=>{
    fs.readFile(db,'utf-8',(err, data)=>{
        if(err){res.send(err)}
        let data_parse = JSON.parse(data);
        res.json(data_parse);
    })
})

app.post('/delete', (req,res)=>{
    const del_id = req.body.note_id;
    console.log(del_id);
    fs.readFile(db, 'utf-8', (err, data)=>{
        if(err){res.send(err)}
        data_json = JSON.parse(data);
        data_json.notes.splice(del_id,1);
        fs.writeFile(db, JSON.stringify(data_json), 'utf-8', (err,res)=>{
            if(err){res(err)}
         });
         res.redirect('/');
    });
})
app.listen(port, ()=>{
    console.log(`Server is running on ${host}:${port}`);
    console.log(`Set http://${host}:${port}/note in your app`);
    console.log(`Go to http://${host}:${port} in your browser`);
})
