public class MinStack {
    Stack<Integer> stack;
    Stack<Integer> minStack ;

    public MinStack(){
        this.stack = new Stack<>();
        this.minStack = new Stack<>();
    }

    public Integer push(Integer element){
        int result = stack.push(element);
        if(minStack.isEmpty() || minStack.peek() >= element){
            minStack.push(element);
        }
        return result;
    }

    public Integer pop(){
        int result = stack.pop();
        if(minStack.peek() == result){
            minStack.pop();
        }
        return result;
    }

    public Integer top(){
        return stack.peek();
    }
    public Integer getMin(){
        return minStack.peek();
    }
}
