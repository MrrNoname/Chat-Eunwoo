const startDate = new Date('2023-03-04');
const today = new Date();
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("daysTogether").innerText = `${diffDays} days`;

// Move one heart to the right
document.getElementById("hearts2").innerText = '❤️❤️';
document.getElementById("hearts1").innerText = '❤️❤️';