import * as tf from '@tensorflow/tfjs';

// Modèle pour l'extraction des informations des devis
class DevisModel {
  constructor() {
    this.model = this.buildModel();
  }

  buildModel() {
    const model = tf.sequential();
    
    // Couche d'entrée pour le texte
    model.add(tf.layers.embedding({
      inputDim: 10000, // Taille du vocabulaire
      outputDim: 128,
      inputLength: 500
    }));

    // Couches LSTM pour l'analyse du texte
    model.add(tf.layers.lstm({
      units: 64,
      returnSequences: true
    }));

    // Couches de classification pour les pièces
    model.add(tf.layers.dense({
      units: 32,
      activation: 'relu'
    }));

    // Sortie pour la classification des pièces et surfaces
    model.add(tf.layers.dense({
      units: 10, // Nombre de classes de pièces possibles
      activation: 'softmax'
    }));

    model.compile({
      optimizer: 'adam',
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });

    return model;
  }

  async train(data, labels, epochs = 10) {
    const history = await this.model.fit(data, labels, {
      epochs: epochs,
      validationSplit: 0.2,
      callbacks: {
        onEpochEnd: async (epoch, logs) => {
          console.log(`Epoch ${epoch + 1}: loss = ${logs.loss.toFixed(4)}`);
        }
      }
    });
    return history;
  }

  async predict(text) {
    // Prétraitement du texte
    const processedText = this.preprocessText(text);
    const prediction = await this.model.predict(processedText);
    return prediction;
  }

  preprocessText(text) {
    // Implémentation du prétraitement
    return tf.tensor2d([Array(500).fill(0)]); // Placeholder
  }
}

export default DevisModel;