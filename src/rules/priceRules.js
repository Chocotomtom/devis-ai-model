// Règles de prix standards
const standardPrices = {
    preparation: {
        enduit: 15.95,    // €/M2
        lessivage: 15.64  // €/M2
    },
    peinture: {
        plafond: 25.17,   // €/M2
        murs: 23.54,      // €/M2
        tuyaux: 13.50     // €/ML
    },
    traitement: {
        fissure: 35.00    // €/ML
    },
    manutention: {
        luminaire: 30.00,  // €/U
        armoire: 100.00,   // €/U
        frigo: 50.00      // €/U
    }
};

module.exports = standardPrices;