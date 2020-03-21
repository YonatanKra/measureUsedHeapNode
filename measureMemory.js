function logMemory() {
    console.log(`${process.memoryUsage().heapUsed / Math.pow(1000, 2)} MB`);
}


function measureMemory() {
    const arraySize = 25 * Math.pow(1000, 2);
    logMemory();
    (function() {
        const array1 = new Array(arraySize).fill(1);
        logMemory();
    })();
    logMemory();
    (function() {
        const array2 = new Array(arraySize).fill(1);
        logMemory();
    })();    
    setTimeout(logMemory, 1000);
    logMemory();
}

measureMemory();
