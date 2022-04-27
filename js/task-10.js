function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// let boxsize = 30;
// for (let i = 0; i <= quantity - 1; i++){
//         const createDiv = document.createElement('div');
//     createDiv.style.width =`${boxsize}px`;
//         createDiv.style.height =`${boxsize}px`;
//         createDiv.style.backgroundColor = getRandomHexColor();
//     array.push(createDiv);
//     boxsize += 10;
//   };
let boxSize = 30;
for (let i = 0; i < amount; i += 1) {
		markup.push(
			`<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
		);
		boxSize += 10;
	}