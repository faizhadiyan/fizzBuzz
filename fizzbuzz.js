let fizbuz = function() {
    let saveinput = document.getElementById("number").value;

    function isInt(value) {
        return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
    }

    let output = 0;

    if (saveinput === "0" || !isInt(saveinput)) {
        document.getElementById("invalid").innerHTML = "invalid input";
    }

    else {
        if (saveinput%3 === 0 && saveinput%5=== 0) {
            output = "FizzBuzz";
        }
        else if (saveinput%3 === 0 || saveinput%5=== 0 && !(saveinput%3 === 0 && saveinput%5=== 0)) {
            if (saveinput%3 === 0) {
                output = "Fizz";
            }
            else if (saveinput%5 === 0) {
                output = "Buzz";
            }
        }
        else {
            output = saveinput;
        }

        console.log(output);
    
        const para = document.createElement("p");
        const node = document.createTextNode(output);
        para.appendChild(node);
    
        const element = document.getElementById("hasil");
        element.appendChild(para);
    }
    

}