# Supportive IDE Project - web IDE

This web-based simple Python IDE uses [SIDE-lib](https://github.com/Supportive-IDE/SIDE-lib) to detect indicators of programming misconceptions and display guidance.

## Setup
### Running locally

- Run `npm install` to install all dependencies
- Run `npm run dev` to start the local server. Open the address provided in your browser.

### Hosting your own version
- Open `vite.config.js` and replace the `base` URL with your own URL.
- Run `npm run build` to build the site. The output of the build can be found in the `docs` folder. 
- Put the contents of the `docs` folder on your server.

Note: This repo is setup to be hosted from a `docs` folder on GitHub pages. You can change the name of the build folder by modifiying `build.outDir` in `vite.config.js`.

## Code Samples
Below you will find code samples containing each of the misconception indicators that SIDE-lib (V2) currently provides feedback for.

To see how each indicator is handled, copy and paste the sample into the hosted [web IDE](https://supportive-ide.github.io/web-IDE/).

### AssignCompares
A single equals is used where a boolean expression is expected, e.g. in a conditional statement. This may be a typo or confusion between single and double equals operators.

```  
def hasTwoDigits(x): 
    a = str(x) 
    if len(a) = 2:
      return True
```

Code sample adapted from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### ColonAssigns
A colon is used between a variable name and a value. This may be a typo.

```
def greeting(name):
    msg: "Hello " + name
    return msg
```

### CompareMultipleValuesWithOr
A boolean expression has the form a == some_value or other_value, where other_value is non-boolean. There is likely a misunderstanding of the syntax of comparing multiple values.

```
def anyLowercase(s): 
    for i in s: 
        if s[i] == 'a' or 'b' or 'c' or 'd':
            return True
    return False
```

Code sample adapted from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### ComparisonWithBoolLiteral
A boolean expression contains "== True" or "== False". The programmer may believe that explicitly checking equality is always necessary in a boolean expression.

```
def castString(s, as_number): 
    as_number = bool(as_number)
    if as_number==True: 
        return int(s) 
    else:  
        return s
```
Code sample from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### ConditionalIsSequence
If statements with very similar conditional statements appear in a sequence. There may be a belief that subsequent if statements will only execute if the previous condition does not. The programmer may not be aware of the efficiency drawbacks of using sequential if statements where a multiway conditional would be more appropriate.

```
def nearestBusStop(street):
    if street % 8 == 0: 
		stop = street
	if street % 8 <= 4:
		stop = street
	if street % 8 > 4:
		stop = street +1 
	return stop
```
Code sample adapted from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### DeferredReturn
Code follows a return statement in a function. The programmer may not realise that a return statement causes the function to exit immediately.

```
def get_size(measurement): 
	if 35 <= measurement < 38:
		size = 'S'
	elif 38 <= measurement < 41:
		size = 'M'
	elif 41 <= measurement < 44:
		size = 'L'
	else:
		size = 'not available'
	return size
	print(size)
```

### ForLoopVarIsLocal and TargetInitialisedOutsideLoop
An iterating variable in a for loop overwrites a variable declared before the loop. 

```
score = [10, 12, 3]
i = 'L' 
 
for i in score: 
    if i>= 10: 
        i += 1 
        print(i)
```

### FunctionCallsNoParentheses and ParenthesesOnlyIfArgument
An undefined variable has the same name as a function. There may be a misunderstanding about how to call a function. Caution: functions in Python are first class objects, so it is possible that use of the function name without parentheses is intended and there is no misconception.

```
def anyLowercase(s): 
    for i in range s: 
        if i==s.lower(): 
            return True 
    return False 
```
Code sample from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### IterationRequiresTwoLoops
A while loop with an integer loop variable contains a nested for loop. The while loop variable is only modified in the nested for loop and is used to count items in the variable iterated in the for loop. The two nested loops could be replaced with a single for loop using enumerate() or range().

```
score = [10, 2, 3, 6, 15, 3]
total = 0

i = len(score) 
while i >= 0: 
    for num in score: 
        total += num 
        i -= 1

print(total)
```

### LocalVariablesAreGlobal
An undefined variable in document scope has the same name as a variable with function scope. This may indicate a misunderstanding of variable scope.

```
def oneToN(n): 
    for x in range(1, n+1): 
        print (x, end='') 

oneToN(n)
```

Code sample adapted from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### LoopCounter
A for loop target variable is modified in the loop and the modified variable is not used. This may indicate confusion over how loops use loop variables.

```
record = ["W", "L", "L", "W"]
score = [10, 3, 2, 6]
count = 0
for i in range(len(score)): 
    if record[i] == 'W' and score[i] == 1: 
        count += 1 
        i += 1 
```

### MapToBooleanWithIf
A conditional statement checks a boolean expression only to return or assign a value that matches the value of the boolean expression. The programmer may not realise that a boolean expression can be assigned or returned directly.

```
def hasTwoDigits(x): 
    a = str(x) 
    if len(a) == 2: 
        return True 
    else: 
        return False 
```
Code sample from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### MapToBooleanWithTernaryOperator
A ternary checks a boolean expression only to return or assign a value that matches the value of the boolean expression. The programmer may not realise that a boolean expression can be assigned or returned directly.

```
def hasTwoDigits(x): 
	return True if (x < 100) else False 
```
Code sample from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### ParameterMustBeAssignedInFunction
A user defined function has named parameter but the parameter value is overwritten in the function before it is used e.g. by prompting for command line input. This indicates potential misconceptions about the purpose or use of function parameters.

```
def qwe(s): 
    s = 'Hello World!' 
    return s
```
Code sample adapted from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### PrintSameAsReturn
A call to a function that prints but does not return (including the print() function) is assigned or passed, or a call to a function that prints before returning a value is not assigned or passed. There may be confusion about printing a value versus returning a value.

```
def oneToN(n): 
    for x in range(1, n+1): 
        print (x, end='') 
print (oneToN(5)) 
```
Code sample from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### ReturnCall	
Function return values are surrounded by parentheses. There may be a belief that return needs to be called like a function.

```
def firstAndLast(s): 
	return ('[all the stuff]' + '[extra stuff]') 
```
Code sample from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### ReturnWaitsForLoop
A return statement in a loop causes the loop to consistently exit on the first iteration. Typically due to a missing if statement, there may be an expectation that the loop implicitly knows when to return and when to continue.

```
def firstAndLast(s): 
	for n in range(0, len(s)-1) 
	    return n[0] + n[len(s)-1] 
```
Code sample from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### StringMethodsModifyTheString
A string method is called but the result is not saved or passed. There may be an assumption that string methods mutate the string.

```
lst = ["APPLES", "Oranges", "pears"]
for word in lst: 
    for letter in word: 
        letter.lower()
```

### TypeConversionModifiesArgument
A type conversion function (e.g. int(), float()) is called but the return value is not saved or used.

```
def oneToN(n): 
    number='' 
    for i in range(n+1): 
        str(i) 
        number+=i
```
Code sample from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### TypeMustBeSpecified
A value that is guaranteed to have a particular data type is passed to a type conversion function that returns the same data type. In the case of literals, there may be a belief that type must be specified as in strongly typed languages. In other cases, there may be a misunderstanding or lack of confidence in how Python dynamically determines type.

```
def createNumberBlock(n): 
    num = '' 
    for i in range(1,n+1): 
        num += '\n' 
        for j in range(i,i+n): 
            num += str(j) 
    return str(num)
```
Code sample from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### UnusedReturn
The result of a call to a function / method that returns a value is not used in some way.

```
def helloWorld(): 
    return 'Hello World!' 
helloWorld() 
```
Code sample from [CSEDM 2019 data challenge dataset](https://github.com/thomaswp/CSEDM2019-Data-Challenge).

### WhileSameAsIf
A while loop does not modify any of its loop variables and may also always exit during the first iteration. Where this behaviour is intentional, the while definition would be better replaced with an if statement. Where the loop does not exit, there is a risk of an infinite loop.

```
choice = input("Enter U for an uppercase palindrome, L for a lowercase palindrome:\n") 
while choice == "STOP": 
    print("It's stopped.") 
    exit() 
```
