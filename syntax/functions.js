const muvelet = (n1, n2, callback) => {const result = callback(n1, n2); return {result}}

function muveletLetrehoz(jel){
    switch (jel){
        case "+":
            return (n1, n2) => {return n1 + n2};
        case "*":
            return (n1, n2) => {return n1 * n2};
        case "-":
            return (n1, n2) => {return n1 - n2};
    }
}

export {muvelet, muveletLetrehoz}