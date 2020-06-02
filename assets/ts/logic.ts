document.querySelector('#doThingButton')?.addEventListener('click', doThing);


export function doThing(): void {
	const text = document.querySelector('#content')?.textContent;
	window.alert(text ?? 'nothing');
}
