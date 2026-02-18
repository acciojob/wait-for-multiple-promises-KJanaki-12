//your JS code here. If required.
let output = document.getElementById("output");

function createPromise() {
	let time = Math.random()*2+1;

	return new Promise((resolve) => {
      setTimeout(() => {
        resolve(time);
      }, time * 1000);
    });
}

const p1 = createPromise();
const p2 = createPromise();
const p3 = createPromise();

Promise.all([p1, p2, p3]).then((times) => {
	output.innerHTML="";

	let maxTime = Math.max(...times);
	times.forEach((time, index)=>{
		let row = document.createElement("tr");

		row.innerHTML = `
			<td>Promise ${index + 1}</td>
			<td>${time.toFixed(3)}</td>
		`;

		output.appendChild(row);
	});

	let totalRow = document.createElement("tr");

	totalRow.innerHTML = `
		<td><strong>Total</strong></td>
		<td>${maxTime}</td>
		
	`;
	output.appendChild(totalRow);
	
})

