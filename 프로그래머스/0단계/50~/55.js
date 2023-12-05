function solution(start, end_num) {
    return Array.from(Array(start - end_num + 1), (_,i)=>start - i);
}