describe('Test factorial', () => {
    it('Gives the factorial of any number',function(){
        assert.equal(factorial(5),120, "should give factorial of 5 is 120")
    })

    it('Gives the factorial of 0',function(){
        assert.equal(factorial(0),1, "should give factorial of 0 is 1")
    })
});
