// Règles de calcul pour les prestations

class CalculationRules {
    /**
     * Calcule la quantité de préparation nécessaire selon les règles de surface
     * @param {number} surfaceTotale - Surface totale à traiter
     * @param {number} surfacePreparation - Surface initialement prévue pour préparation
     * @returns {number} - Surface finale à préparer
     */
    static calculatePreparationSurface(surfaceTotale, surfacePreparation) {
        const ratio = (surfacePreparation / surfaceTotale) * 100;
        
        if (ratio < 25) {
            return 0; // Non repris dans le devis
        } else if (ratio >= 25 && ratio <= 75) {
            return surfacePreparation; // Même quantité
        } else {
            return surfaceTotale * 0.75; // Surface totale - 25%
        }
    }

    /**
     * Calcule le montant des déchets
     * @param {number} totalHT - Montant total HT
     * @returns {number} - Montant des déchets
     */
    static calculateDechets(totalHT) {
        return totalHT * 0.01; // 1% du montant HT
    }
}

module.exports = CalculationRules;