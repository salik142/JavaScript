let tds = document.querySelectorAll('td');
for (let i = 1; i <= tds.length; i++) {
  tds[i-1].innerText = i;
}

