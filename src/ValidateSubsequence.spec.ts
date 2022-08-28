import { validateSubsequence, vlidateSequenceArkadi, vlidateSequenceFatima } from './ValidateSubsequence';

describe('Validate Subsequence', () => {
    // [5,1,22,25,6,-1,8,10], [1,6,-1,10] => True

    test("it shoud return True", () => {
        // given => act
        const numbers: Array<number> = [5, 1, 22, 25, 6, -1, 8, 10];

        // when => arrange
        const action_trigger_subsequence = validateSubsequence(numbers, [1, 6, -1, 10]);
        // when => arrange
        const action_trigger_subsequence_Arkadi = vlidateSequenceArkadi(numbers, [1, 6, -1, 10]);
        // when => arrange
        const action_trigger_subsequence_Fatima = vlidateSequenceFatima(numbers, [1, 6, -1, 10]);

        // then => assert
        expect(action_trigger_subsequence).toBe(true);
        expect(action_trigger_subsequence_Arkadi).toBe(true);
        expect(action_trigger_subsequence_Fatima).toBe(true);
    })


});