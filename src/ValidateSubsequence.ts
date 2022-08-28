export function validateSubsequence(arrayMain: Array<number>, arraySequence: Array<number>): boolean {
    let mainIndex = 0;
    let sequenceIndex = 0;
    while (mainIndex < arrayMain.length && sequenceIndex < arraySequence.length) {
        if (arrayMain[mainIndex] === arraySequence[sequenceIndex]) sequenceIndex++;
        mainIndex++;
    }

    return sequenceIndex === arraySequence.length;

}

export function vlidateSequenceArkadi(arrayMain: Array<number>, arraySequence: Array<number>): boolean {
    //   Arkadi Solution
    let sequenceEqualNumber = 0;
    for (let indexSequence = 0; indexSequence < arraySequence.length; indexSequence++) {
        for (let indexMain = 0; indexMain < arrayMain.length; indexMain++) {
            if (arraySequence[indexSequence] === arrayMain[indexMain]) {
                sequenceEqualNumber++;
            }
        }
    }
    return sequenceEqualNumber === arraySequence.length;

}
export function vlidateSequenceFatima(arrayMain: Array<number>, arraySequence: Array<number>): boolean {
    //   Fatima Solution 
    let sequenceEqualNumber = 0;

    arraySequence.forEach((mainValueTemp) => {
        arrayMain.forEach((sequenceValueTemp) => {
            if (mainValueTemp === sequenceValueTemp) sequenceEqualNumber++;
        })
    });

    return sequenceEqualNumber === arraySequence.length;

}



