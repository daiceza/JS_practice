var answer = prompt('正の数と負の数を判定します');
if (answer === '' || isNaN(answer)) {
    alert('数値を入力してください');
} else if (answer >= 0) {
    alert('正の数');
} else {
    alert('負の数');
}
