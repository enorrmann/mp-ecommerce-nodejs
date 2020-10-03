var express = require('express');
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
var preference = require('./preference.js').preference;

/*******************  */

const config = require('./config.js');
if (!config.MP_ACCESS_TOKEN) {
    console.log("WARNING !! NO HAY MP_ACCESS_TOKEN");
}

const ACCESS_TOKEN = config.MP_ACCESS_TOKEN;


// SDK de Mercado Pago
const mercadopago = require('mercadopago');

// Agrega credenciales
mercadopago.configure({
    access_token: ACCESS_TOKEN,
    integrator_id: 'dev_24c65fb163bf11ea96500242ac130004'
});

let createPreference = function (preference) {
    return new Promise(function (resolve, reject) {
        mercadopago.preferences.create(preference).then(function (response) {
            // Este valor reemplazará el string "<%= global.id %>" en tu HTML
            global.id = response.body.id;
            console.log(response);
            resolve(
                {
                    id: response.body.id,
                    init_point: response.body.init_point,
                    notification_url: response.body.notification_url,
                    sandbox_init_point: response.body.sandbox_init_point,
                    init_point: response.body.init_point
                }

            );
        }).catch(function (error) {
            console.log("error")
            console.log(error)
            reject(error);
        });
    });
};

/*************/
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/detail', function (req, res) {
    res.render('detail', req.query);
});

/*
https://www.tusitio.com/success.php?collection_id=[PAYMENT_ID]&collection_status=approved&external_reference=[EXTERNAL_REFERENCE]&payment_type=credit_card&preference_id=[PREFERENCE_ID]&site_id=[SITE_ID]&processing_mode=aggregator&merchant_account_id=null
*/ 
app.get('/success', function (req, res) {
    res.render('mensaje', req.query);
});
app.get('/pending', function (req, res) {
    res.render('mensaje', req.query);
});
app.get('/failure', function (req, res) {
    res.render('mensaje', req.query);
});


app.post('/buy', function (req, res) {
    console.log("buyyyyyyyyy");
    console.log(req.body);
    preference.items[0].title = req.body.prodId;
    preference.items[0].unit_price = parseFloat(req.body.price);

    //res.send(JSON.stringify(preference));
    //deberás redireccionar al usuario al “​ init_point​ ” productivo
    // que obtendrás de nuestra API de preferencias (no utilizar “sandbox_init_point”).
    createPreference(preference).then(
        function (response) {
            res.send(response);
        }, function (err) {
            res.send(err);
        });
});


app.use(express.static('assets'));

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(process.env.PORT || 3000)
