const checkModal = {
    email: function (text) {
        return (text.includes('@') && text.length > 5);
    },
    address: function (text) {
        return (text.length >= 6);
    },
    phone: function (text) {
        const pattern = /[0-9]{7,}/;
        return pattern.test(text);
    }
};

export default checkModal;