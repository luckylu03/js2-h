const n = parseFloat(prompt('Enter n'));

let sol = calcNumArr(n);

let secSol = calcNumWhile(n);

let thirdSol = calcNumRec(n);

alert('first method: ' + sol + ' second method: ' + secSol + ' third method: ' + thirdSol);

function calcNumArr (n) {
    
    let a = [0, 1, 1];
    
    for (let i = 3; i !== n+1; i++) {
        a[i] = a[i-1] + a[i-2];
    }
    return a[n];
}

function calcNumWhile(n) {
    
    let a=1, b=1, d=3;
    let c = a + b;
    n++;
    
    while (d !== n) {
        c = a + b;
        a = b;
        b = c;
        d+=1;
    }
    return c;
}

function calcNumRec (n) {
    
    let a=1, b=1, locn=3;
    let c= a + b;
    n++;
    return calcNumRec2 (a, b, c, locn, n);
}

function calcNumRec2 (a, b, c, locn, n) {
    for (locn; locn !== n; locn) {
        c = a + b;
        a = b;
        b = c;
        locn++;
        calcNumRec2(a, b, c, locn, n);
    }
    return c;
}