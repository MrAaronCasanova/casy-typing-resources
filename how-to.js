var start = document.getElementsByTagName('li');
var startArr = Array.from(start);
var selection = startArr.slice(24, 1312);
var selectionContent = selection.map(function (term) {
	return term.innerText;
});
function chunkArray(arr, len) {
  const chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }
  return chunkedArr;
}
var arrChunks = chunkArray(selectionContent, 100);

var arrToObj = arrChunks[].reduce(function(acc, cur, i) {
  acc[i] = cur;
  return acc;
}, {});

//https://stackoverflow.com/questions/10689475/how-to-view-extended-objects-arrays-in-chrome-console
JSON.stringify(arrChunks, null, '	');
