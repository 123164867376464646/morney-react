let id = parseInt(window.localStorage.getItem('idMax') || '0');
const createId = () => {
	console.log('+1 了');
	id += 1;
	window.localStorage.setItem('idMax', JSON.stringify(id));
	return id;
 };
export {createId};