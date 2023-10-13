describe('Test factorial', () => {
    it('Gives the factorial of 0', function(){
        assert.equal(factorial(0), 1, "should give factorial of 0 as 1");
    });

    it('Gives the factorial of 1', function(){
        assert.equal(factorial(1), 1, "should give factorial of 1 as 1");
    });

    it('Gives the factorial of a positive number', function(){
        assert.equal(factorial(5), 120, "should give factorial of 5 as 120");
        assert.equal(factorial(7), 5040, "should give factorial of 7 as 5040");
    });

    it('Handles edge cases for large numbers', function(){
        // In the factorial function, handle large numbers gracefully to avoid potential overflow.
        // Example handling:
        assert.equal(factorial(170), Infinity, "should give Infinity for large numbers");
    });

    it('Handles negative numbers or invalid inputs', function(){
        // In the factorial function, handle negative numbers or invalid inputs gracefully.
        // Example handling:
        assert.equal(factorial(-1), null, "should give null for negative numbers");
    });
});
