// describe("pow", function() {

//     it("2 raises to 3rd power is: 8", function() {
//       assert.equal(pow(2, 3), 8);
//     });

//     it("5 raises to 5rd power is: 25", function() {
//         assert.equal(pow(5, 2), 25);
//       });
  
//   });

  

  describe("deleteItem", function() {
      it("should delete an element from the array at the specified position", function() {
          // Arrange
          let data = [60, 30, 10, 67, 40];
  
          // Act
          deleteItem(data, 2); // Delete element at position 2 (value: 10)
  
          // Assert
          assert.deepEqual(data, [60, 30, 67, 40], "Array should have the element at position 2 removed.");
      });
  
      it("should handle deleting from an empty array without errors", function() {
          // Arrange
          let data = [];
  
          // Act
          deleteItem(data, 0);
  
          // Assert
          assert.deepEqual(data, [], "Array should remain empty.");
      });
  
      it("should handle deleting from an array with only one element", function() {
          // Arrange
          let data = [42];
  
          // Act
          deleteItem(data, 0);
  
          // Assert
          assert.deepEqual(data, [], "Array should be empty after deleting the only element.");
      });
  
      it("should handle deleting from an array at the last position", function() {
          // Arrange
          let data = [1, 2, 3, 4, 5];
  
          // Act
          deleteItem(data, 4); // Delete element at position 4 (value: 5)
  
          // Assert
          assert.deepEqual(data, [1, 2, 3, 4], "Array should have the element at the last position removed.");
      });
  });
  