import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnCheckOutData = LocalRequestBody.CheckOutData;
	let LocalCoumnAddOn = LocalRequestBody.AddOn;
	let LocalCoumnOrderData = LocalRequestBody.OrderData;
	let LocalCoumnCustomerData = LocalRequestBody.CustomerData;
	let LocalCoumnItemInOrder = LocalRequestBody.ItemInOrder;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnItemInOrder,LocalCoumnCustomerData,LocalCoumnOrderData,LocalCoumnAddOn,LocalCoumnCheckOutData});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};