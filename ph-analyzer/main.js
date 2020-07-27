function phAnalyzer(ph) {
    if (ph === 7) {
        return 'neutral';
    } else if (ph >= 0 && ph <=6) {
        return 'acidic';
    } else if (ph > 7 && ph <= 14) {
        return 'alkaline';
    } else {
        return 'invalid pH value';
    }
}
