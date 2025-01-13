# Devis AI Model

Modèle d'IA pour la génération automatique de devis basé sur des constatations.

## Structure du Projet

```
src/
  ├── models/
  │   └── DevisAIPredictor.js    # Modèle d'IA principal
  ├── rules/
  │   ├── calculationRules.js    # Règles de calcul
  │   └── priceRules.js         # Prix standards
  └── templates/
      └── devisTemplate.js      # Templates pour les devis
```

## Règles Principales

1. Règles de préparation surface :
   - < 25% : Non repris dans le devis
   - 25-75% : Même quantité
   - > 75% : Surface totale - 25%

2. Prix Standards :
   - Préparation enduit : 15.95 €/M2
   - Lessivage : 15.64 €/M2
   - Peinture plafond : 25.17 €/M2
   - Peinture murs : 23.54 €/M2
   - Traitement fissure : 35.00 €/ML
   - Peinture tuyaux : 13.50 €/ML

3. Notes Techniques Standards :
   - Avertissements sur les fissures
   - Différences de teinte possibles
   - Conditions de manutention

## Installation

```bash
npm install
```

## Utilisation

```javascript
import DevisAIPredictor from './models/DevisAIPredictor';

const predictor = new DevisAIPredictor();
const devis = await predictor.generateDevis(constatation);
```
