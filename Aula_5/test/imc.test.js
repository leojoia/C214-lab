const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {
    it('Calculadora deve rodadr tranquilo', () => {
        const peso = 80; // 80 kg
        const altura = 180; // 180 cm
        const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
        const IMCCalculado = calcularIMC(peso, altura).toFixed(2);

        expect(IMCCalculado).to.equal(IMEsperado);
    });

    it('altura = 0, entrada inadequada', () => {
        const peso = 70; // 70 kg
        const altura = 0; // 0 cm

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('NaN');
    });

    it('peso = 0, entrada inadequada', () => {
        const peso = 0; // 0 kg
        const altura = 140; // 140 cm

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal(0);
    });

    it('peso = 0, altura = 0, entradas inadequadas', () => {
        const peso = 0; // 0 kg
        const altura = 0; // 0 cm

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('NaN');
    });


});