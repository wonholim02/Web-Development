function startTime() {
  let now = new Date();

  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  sec = getting(sec);
  min = getting(min);

  document.getElementById('txt').innerHTML =
  hr + ":" + min + ":" + sec;
  let t = setTimeout(startTime, 500);

}

function getting(j) {
  if (j < 10) {j = "0" + j};
  return j;
}
