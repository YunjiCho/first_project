function printPyramid(height) {
  var output = ""; // 출력할 문자열을 저장할 변수

  for (var i = 1; i <= height; i++) {
    // 왼쪽에 출력되는 공백 개수 계산
    var leftSpaces = height - i;
    // 오른쪽에 출력되는 공백 개수 계산
    var rightSpaces = height - i;
    // 공백 문자열 추가
    for (var j = 1; j <= leftSpaces; j++) {
      output += " ";
    }
    // 별 문자열 추가
    for (var k = 1; k <= 2 * i - 1; k++) {
      output += "*";
    }
    // 오른쪽에 공백 문자열 추가
    for (var l = 1; l <= rightSpaces; l++) {
      output += " ";
    }
    // 한 줄 출력 후 개행 문자 추가
    output += "\n";
  }

  console.log(output);
}

// 함수 호출 예시
//printPyramid(5); // 높이가 5인 피라미드 출력
