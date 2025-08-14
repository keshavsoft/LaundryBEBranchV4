import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalFromDom = jFLocalCustomerNameInputId();
    let jVarLocalMobileNumber = jVarLocalFromDom.split(":")[1];
    let jVarLocalUserName = localStorage.getItem("UserName");

    KeysJson.body.inMobileNumber = jVarLocalMobileNumber;
    KeysJson.body.UserName = jVarLocalUserName;
    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalCustomerNameInputId = () => {
    let jVarLocalCustomerNameInputId = 'CustomerNameInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };