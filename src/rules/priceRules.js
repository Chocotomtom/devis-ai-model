// Définition des prix par zone pour COVEA
export const COVEA_PRICES = {
    ZONE_1: {
        // Prix à définir
        coefficient: 1.15 // +15% par rapport à la zone 3
    },
    ZONE_2: {
        // Prix à définir
        coefficient: 1.07 // +7% par rapport à la zone 3
    },
    ZONE_3: { // Prix de référence actuel
        preparation: {
            enduit: 15.95,
            lessivage: 15.64
        },
        peinture: {
            plafond: 25.17,
            murs: 23.54,
            tuyaux: 13.50
        },
        traitement: {
            fissure: 35.00
        },
        manutention: {
            luminaire: 30.00,
            armoire: 100.00,
            frigo: 50.00
        }
    }
};

// Fonction pour calculer le prix selon la zone
export const calculateZonePrice = (basePrice, zone) => {
    switch(zone) {
        case 'ZONE_1':
            return basePrice * COVEA_PRICES.ZONE_1.coefficient;
        case 'ZONE_2':
            return basePrice * COVEA_PRICES.ZONE_2.coefficient;
        case 'ZONE_3':
        default:
            return basePrice;
    }
};

// Fonction pour obtenir les prix d'une zone
export const getPricesForZone = (zone) => {
    const baseZone = COVEA_PRICES.ZONE_3;
    if (zone === 'ZONE_3') return baseZone;

    const coefficient = COVEA_PRICES[zone].coefficient;
    
    // Création d'une copie profonde avec les prix ajustés
    return {
        preparation: {
            enduit: baseZone.preparation.enduit * coefficient,
            lessivage: baseZone.preparation.lessivage * coefficient
        },
        peinture: {
            plafond: baseZone.peinture.plafond * coefficient,
            murs: baseZone.peinture.murs * coefficient,
            tuyaux: baseZone.peinture.tuyaux * coefficient
        },
        traitement: {
            fissure: baseZone.traitement.fissure * coefficient
        },
        manutention: {
            luminaire: baseZone.manutention.luminaire * coefficient,
            armoire: baseZone.manutention.armoire * coefficient,
            frigo: baseZone.manutention.frigo * coefficient
        }
    };
};