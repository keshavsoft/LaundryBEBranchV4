import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnItemInOrder,LocalCoumnCustomerData,LocalCoumnOrderData,LocalCoumnAddOn,LocalCoumnCheckOutData}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnItemInOrder,LocalCoumnCustomerData,LocalCoumnOrderData,LocalCoumnAddOn,LocalCoumnCheckOutData});

    return LocalFromDal;
};

export {
    postDefaultFunc
};