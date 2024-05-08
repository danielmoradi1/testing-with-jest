const stack = require("../src/stack");

// Tömmer stacken innan varje test
beforeEach(() => {
  stack.clear(); 
});

// Testar om peek på en tom stack returnerar undefined
test("peek on empty stack returns undefined", () => {
expect(stack.peek()).toBeUndefined();
});

// Testar om peek på stack med 1 element returnerar elementet
    test("peek on stack with one element returns that element", () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
    });

    // Testar om peek på stack med 2+ element returnerar det översta
    test("peek on stack with two or more elements returns the top element", () => {
    stack.push(1);
    stack.push("hello");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
    });


    // Testar om pop på tom stack returnerar undefined
    test("pop on empty stack returns undefined", () => {
    expect(stack.pop()).toBeUndefined();
    });

    // Testar om pop på stack med 1 element returnerar elementet och nästa pop returnerar undefined
    test("pop on stack with one element returns that element", () => {
    stack.push("hello");
    expect(stack.pop()).toBeDefined();
    expect(stack.pop()).toBeUndefined(); 
});
