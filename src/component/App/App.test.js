function sum(...arr) {
    return arr.reduce((acc, el) => acc + el);
}

describe('Тесты функции sum', () => {
    it('2+1', () => {
        expect(sum(2, 1)).toEqual(3);
    });
    it('6+1', () => {
        expect(sum(6, 1)).toEqual(7);
    });
    it('8+1', () => {
        expect(sum(8, 1)).toEqual(9);
    });
    it('10+1', () => {
        expect(sum(10, 1)).toEqual(11);
    });
});

function generatePassword() {
    return Math.random().toString(36).slice(-8);
}

describe('Method generatePassword', () => {
    let password;
    it('return a generated password of lower-case and length = 8',
        () => {
            password = generatePassword();
            expect(password).toMatch(/^[a-z0-9]{8}$/);
        });

});

