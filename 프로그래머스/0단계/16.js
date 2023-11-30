function solution(a, b) {
    const fir = String(a) + String(b);
    const sec = 2*a*b;
    
    return fir >= sec ? Number(fir) : sec;
}