export const calculatePreparationSurface = (surfaceTotale, surfacePreparation) => {
    const ratio = (surfacePreparation / surfaceTotale) * 100;
    
    if (ratio < 25) {
        return 0;
    } else if (ratio >= 25 && ratio <= 75) {
        return surfacePreparation;
    } else {
        return surfaceTotale * 0.75;
    }
};

export const calculateDechets = (totalHT) => {
    return totalHT * 0.01;
};