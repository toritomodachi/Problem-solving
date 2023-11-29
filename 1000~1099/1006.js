const INF = 0x3f3f3f3f;
const nMax = 11111;

let n, w;
let p = new Array(nMax).fill(0).map(() => new Array(2).fill(0));
let d = new Array(nMax).fill(null).map(() => new Array(3).fill(null).map(() => new Array(4).fill(-1)));

let to = [[1, 2], [1, 2], [0], [1, 2]];

let cost = [
  [0, 1, 1],
  [1, 2, 2],
  [1, 2, 2],
  [0, 0, 0, 1],
];

function go(i, now1, now2, s1, s2) {
  if ((now1 === 2 && p[i][0] + p[i + 1][0] > w) || (now2 === 2 && p[i][1] + p[i + 1][1] > w) || (now1 === 3 && p[i][0] + p[i][1] > w))
    return INF;
  
  if (i === n - 1) {
    if ((now1 === 2 && s1 !== 0) || (now2 === 2 && s2 !== 0) || (now1 !== 2 && s1 === 0) || (now2 !== 2 && s2 === 0))
      return INF;

    return cost[now1][now2];
  }

  if (d[i][now1][now2] !== -1) return d[i][now1][now2];
  let ret = INF;

  for (let next1 of to[now1]) {
    for (let next2 of to[now2]) {
      ret = Math.min(ret, go(i + 1, next1, next2, s1, s2) + cost[now1][now2]);
    }
  }

  if (now1 !== 2 && now2 !== 2)
    ret = Math.min(ret, go(i + 1, 3, 3, s1, s2) + cost[now1][now2]);

  d[i][now1][now2] = ret;
  return ret;
}

function solveTestCases(testCases) {
  let caseIndex = 0;

  function processNextTestCase() {
    if (caseIndex >= testCases.length) {
      return;
    }

    const [n, w, ...values] = testCases[caseIndex];
    p = Array.from({ length: n + 1 }, (_, i) => [values[i], values[i + n]]);
    let ans = INF;

    for (let now1 of [0, 1, 2]) {
      for (let now2 of [0, 1, 2]) {
        d = new Array(nMax).fill(null).map(() => new Array(3).fill(null).map(() => new Array(4).fill(-1)));
        ans = Math.min(ans, go(0, now1, now2, now1, now2));
      }
    }

    d = new Array(nMax).fill(null).map(() => new Array(3).fill(null).map(() => new Array(4).fill(-1)));
    ans = Math.min(ans, go(0, 3, 3, 3, 3));
    console.log(ans);

    caseIndex++;
    processNextTestCase();
  }

  processNextTestCase();
}

const testCases = [
  [2, 3, 1, 2, 3, 4],
  // Add more test cases as needed
];

solveTestCases(testCases);
