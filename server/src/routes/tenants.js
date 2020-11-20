const express = require('express');
const Tenant = require('../models/tenant_model');
const Address = require('../models/address_model');

const router = express.Router();

router.get('/',
    (req, res, next) => {
        Tenant.find()
            .then(tenants => res.json(tenants))
            .catch(err => next(err));
    }
);

router.get('/getbypid/:pid',
    (req, res, next) => {
        Tenant.find({ "public_id": req.params.pid})
            .then(tenant => res.json(tenant))
            .catch(err => next(err));
    }
);

router.put('/update/:pid', function (req, res, next) {
        var tenant = null;
        var address = null;
        Tenant.findOne({ public_id: req.params.pid })
        .then(tenant => {
            tenant.email = req.body.email;
            tenant.password = req.body.password;
            tenant.first_name = req.body.first_name;
            tenant.last_name = req.body.last_name;
            tenant.phone = req.body.phone;
            tenant.country = req.body.country;
            tenant.city = req.body.city;
            if(req.body.address_id == null) {
                tenant.address_id = null;
                console.log("Address null")
            }
            else{
                console.log("Finding address");
                Address.findOne({public_id: req.body.address_id})
                .then(address =>
                    {
                        if(address){
                            console.log("Address: " + address);
                            tenant.address_id = req.body.address_id;
                        }
                        else{
                            console.log("Address not found");
                        }

                        tenant.save()
                        .then(() => res.json('Tenant updated'))
                        .catch(err => next(err));
                        console.log(tenant);
                    }
                )
                .catch(err => next(err));
            }
        })
        .catch(err => next(err));
})
        

module.exports = router;