import * as tf from '@tensorflow/tfjs';

class DevisAIPredictor {
    constructor() {
        this.model = this.buildModel();
    }

    buildModel() {
        const model = tf.sequential();
        
        // Couche d'entrée
        model.add(tf.layers.embedding({
            inputDim: 10000,
            outputDim: 128,
            inputLength: 500
        }));

        // Couches LSTM
        model.add(tf.layers.lstm({
            units: 64,
            returnSequences: true
        }));

        // Couches de prédiction
        model.add(tf.layers.dense({
            units: 64,
            activation: 'relu'
        }));

        model.compile({
            optimizer: 'adam',
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });

        return model;
    }

    async train(constatations, devis) {
        const processedInput = this.preprocessConstatations(constatations);
        const processedOutput = this.preprocessDevis(devis);
        return await this.model.fit(processedInput, processedOutput, {
            epochs: 50,
            validationSplit: 0.2
        });
    }
}

export default DevisAIPredictor;