function pow(a, b) {
    if(b === 0) return 1;

    return a * pow(a, b - 1);
    
}

console.log(pow(5, 3));