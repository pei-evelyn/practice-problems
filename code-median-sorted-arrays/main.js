const findMedianSortedArrays = (nums1, nums2) => {
    const newNums = nums1.concat(nums2).sort((a, b) => a - b);
    
    let median;

    if (newNums.length % 2 === 0) {
        const firstNumIndex = (newNums.length / 2) - 1;
        const secondNumIndex = newNums.length / 2;
        median = (newNums[firstNumIndex] + newNums[secondNumIndex]) / 2;
    } else {
        const middleNumIndex = Math.floor(newNums.length / 2);
        median = newNums[middleNumIndex];
    }

    return median;
};
