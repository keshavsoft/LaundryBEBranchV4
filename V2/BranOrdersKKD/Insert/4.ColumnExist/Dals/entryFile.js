import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnItemInOrder,LocalCoumnCustomerData,LocalCoumnOrderData,LocalCoumnAddOn,LocalCoumnCheckOutData}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnItemInOrder,LocalCoumnCustomerData,LocalCoumnOrderData,LocalCoumnAddOn,LocalCoumnCheckOutData});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};