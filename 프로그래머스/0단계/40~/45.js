function solution(my_string) {
    var a = [];
    for(let i=0; i < my_string.length;i++){
        a.push(my_string.substr(i, my_string.length))
    } return a.sort()
}