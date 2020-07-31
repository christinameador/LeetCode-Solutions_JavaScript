var defangIPaddr = function(address) {
    if (!address || address.length == 0) return "";
    let addressArray = address.split('.');
    let defangedAddress = addressArray.join('[.]');
    return defangedAddress;
};
