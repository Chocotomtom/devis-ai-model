// Règles de structure des devis
const structureRules = {
    /**
     * Structure hiérarchique standard pour les devis
     */
    hierarchy: {
        type: 'numbered',
        pattern: 'X.Y', // X = numéro pièce, Y = numéro catégorie
        maxDepth: 2
    },

    /**
     * Format standard des prestations
     */
    prestationFormat: {
        columns: [
            'description',
            'quantité',
            'unité',
            'prix_unitaire',
            'montant',
            'code_operation'
        ],
        alignment: {
            description: 'left',
            others: 'right'
        }
    },

    /**
     * Unités standardisées
     */
    units: {
        M2: 'Mètre Carré',
        ML: 'Mètre Linéaire',
        U: 'Unité',
        FFT: 'Forfait'
    },

    /**
     * Notes techniques standards
     */
    standardNotes: {
        fissures: 'Nous ne pourrons garantir dans le temps la bonne tenue des reprises des fissures pouvant être d\'origine structurelle.',
        peinture: 'Une différence de teinte peut être perceptible entre la surface conservée et la surface traitée.',
        manutention: 'L\'assuré nous ayant déclaré être dans l\'incapacité de le faire lui-même.',
        validite: 'Validité de 1 mois à compter de la date du devis.'
    },

    /**
     * Sections obligatoires du devis
     */
    mandatorySections: [
        'Avertissements initiaux',
        'Corps du devis',
        'Récapitulatif financier',
        'Notes techniques',
        'Conditions de validité'
    ]
};

module.exports = structureRules;