const k = 3;
const num = [12, 30, 1, 8, 8, 6, 20, 7, 5, 10, 4, 1];
const links = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 5], [2, 10], [3, 0], [6, 1], [11, -1], [7, 4], [-1, -1], [-1, -1]];



function solution(k, num, links) {
    const tree = links.reduce((tree, v, i) => { // 트리만드는 식
        tree[i] = {
            cost: num[i], // 현재 노드의 비용
            l: v[0], // 현재 노드의 왼쪽 자식
            r: v[1], //  현재 노드의 오른쪽 자식
        };
        return tree;
    }, {});
 
    const n = num.length;
    const root = links.reduce((root, v) => { // 이 값은 아마도 그래프에서 가능한 간선의 수
        const [a, b] = v; // v라는 배열을 디스트럭처링하여 a와 b 변수에 할당
        if (a > 0) root -= a; // a가 양수이면 root에서 a를 뺍니다.
        if (b > 0) root -= b; // b가 양수이면 root에서 b를 뺍니다.
        return root; // 함수가 종료되면 계산된 root 값이 반환
    }, n * (n - 1) / 2); // 초기값으로 n * (n - 1) / 2이 사용
 
    const go = limit => {
        const callStack = [root]; // 초기값으로 root가 들어가 있음
        const returnValues = {
            "-1": { //초기값으로 -1이 설정되어 있습니다.
                cost: 0, // 초기값으로 0이 설정되어 있습니다.
                cnt: 0, // 초기값으로 0이 설정되어 있습니다.
            }
        };
        callStack.back = function () { return this[this.length - 1];}; // callStack 배열의 마지막 요소를 반환하는 역할을 합니다.
        while (callStack.length) { // 배열이 비어있지 않은 동안 무한 루프가 실행됩니다.
            const now = callStack.back() // 마지막 요소를 now로 가져온다
                , {cost, l, r} = tree[now] // 해당 노드의 cost, l, r 값을 추출하여 변수에 할당
                , lRes = returnValues[l]
                , rRes = returnValues[r];
 
            if (!lRes) {
                callStack.push(l);
                continue;
            } // lRes가 존재하지 않는다면(아직 방문하지 않은 노드라면) l을 callStack에 추가하고 반복문의 처음으로 돌아갑니다.
            if (!rRes) {
                callStack.push(r);
                continue;
            } // rRes가 존재하지 않는다면 r을 callStack에 추가하고 반복문의 처음으로 돌아갑니다.
            callStack.pop(); // 모두 방문되었다면 현재 노드를 callStack에서 제거
 
            returnValues[now] = { // 현재 노드의 returnValues를 계산하여 할당합니다.
                cost, // cost는 현재 노드의 tree에서 가져온 값
                cnt: returnValues[l].cnt + returnValues[r].cnt, // cnt는 왼쪽 자식과 오른쪽 자식의 cnt를 합친 값입니다.
            }
            const ret = returnValues[now]; // 계산된 returnValues를 ret 변수에 할당합니다.
 
            const underLimit = (...nodes) => {
                const sum = nodes.reduce((sum, v) => sum += v.cost, 0);
                return sum <= limit;
            } // 특정 노드들의 비용을 합산하여 제한값(limit) 이내인지 확인하는 함수를 정의합니다.
 
            if (underLimit(ret, lRes, rRes)) {
                ret.cost += lRes.cost + rRes.cost; //  노드들의 비용이 제한값 이내라면, 현재 노드의 cost에 왼쪽 자식과 오른쪽 자식의 cost를 더합니다.
            } else if (underLimit(ret, lRes) || underLimit(ret, rRes)) {
                ret.cost += Math.min(lRes.cost, rRes.cost);
                ret.cnt += 1; // 현재 노드의 cost에는 두 자식 중 비용이 적은 것을 더하고, cnt는 1 증가시킵니다.
            } else {
                ret.cnt += 2; // (두 자식의 비용이 제한값을 초과한다면), cnt에 2를 더합니다.
            }
        }
        return returnValues[root]; // 최종적으로 returnValues[root]를 반환합니다. 
    };
 
    const getAnswer = () => {
        let l = Math.max(...num), r = 11111 * n; // num 배열의 최대값으로 초기화되고, 변수 r은 11111 * n으로 초기화됩니다.
        let ans = r; // 초기값으로 r로 설정됩니다.
        while (l <= r) { // l이 r보다 작거나 같은 동안 무한 루프가 실행됩니다.
            const m = Math.floor((l + r) / 2); // 중간값 m을 계산합니다. l과 r의 중간값을 구한 후 내림하여 정수로 만듭니다.
 
            if (go(m).cnt <= k - 1) {
                r = m - 1; // 현재 중간값 m보다 1 작은 값으로 업데이트합니다.
                ans = Math.min(ans, m); // 현재 중간값 m과 기존 ans 값 중 작은 값으로 업데이트합니다.
            } else {
                l = m + 1; // 현재 중간값 m보다 1 큰 값으로 업데이트합니다.
            }
        }
        return ans; // 무한 루프가 종료되면 최종적인 ans 값을 반환합니다.
    };
 
    return getAnswer();
}

const result = solution(k, num, links);
console.log(result);