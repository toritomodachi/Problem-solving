function solution(a, b) {
    const fir = String(a) + String(b);
    const sec = String(b) + String(a);
    
    return fir >= sec ? Number(fir) : Number(sec);
}