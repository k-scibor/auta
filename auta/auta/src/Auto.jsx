class Auto {
    constructor(lakier = "szary", felgi = "stalowe", czujnikP = "false", klima = "false", nawigacja = "false") {
        this.lakier = lakier;
        this.felgi = felgi;
        this.czujnikP = czujnikP;
        this.klima = klima;
        this.nawigacja = nawigacja;
    }

    suma() {
        var CENA_BAZOWA = 75000;
        var CENA_LAKIER = 9000;
        var CENA_FELGI = 7000;
        var CENA_CZUJNIKI = 6500;
        var CENA_CLIMATRONIC = 8500;
        var CENA_NAWIGACJA = 5000;
        var suma = 75000;
        if (this.lakier != "szary") {
            suma += CENA_LAKIER;
        }
        if (this.felgi != "stalowe") {
            suma += CENA_FELGI;
        }
        if (this.czujnikP) {
            suma += CENA_CZUJNIKI;
        }
        if (this.klima) {
            suma += CENA_CLIMATRONIC;
        }
        if (this.nawigacja) {
            suma += CENA_NAWIGACJA;
        }
        return suma;
    }
    wycena() {

    }

    getL() { return this.lakier; }
    setL(l) { this.lakier = l; }
    getF() { return this.felgi; }
    setF(f) { this.felgi = f; }
    getC() { return this.czujnikP; }
    setC(c) { this.czujnikP = c; }
    getK() { return this.klima; }
    setK(k) { this.klima = k; }
    getN() { return this.nawigacja; }
    setN(n) { this.nawigacja = n; }
};
export default Auto