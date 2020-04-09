"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function range(start, end, step) {
    if (step === void 0) { step = 1; }
    // Test that the first 3 arguments are finite numbers.
    // Using Array.prototype.every() and Number.isFinite().
    var allNumbers = [start, end, step].every(Number.isFinite);
    // Throw an error if any of the first 3 arguments is not a finite number.
    if (!allNumbers) {
        throw new TypeError("range() expects only finite numbers as arguments.");
    }
    // Ensure the step is always a positive number.
    if (step <= 0) {
        throw new Error("step must be a number greater than 0.");
    }
    // When the start number is greater than the end number,
    // modify the step for decrementing instead of incrementing.
    if (start > end) {
        step = -step;
    }
    // Determine the length of the array to be returned.
    // The length is incremented by 1 after Math.floor().
    // This ensures that the end number is listed if it falls within the range.
    var length = Math.floor(Math.abs((end - start) / step)) + 1;
    // Fill up a new array with the range numbers
    // using Array.from() with a mapping function.
    // Finally, return the new array.
    return Array.from(Array(length), function (x, index) { return start + index * step; });
}
exports.default = range;
