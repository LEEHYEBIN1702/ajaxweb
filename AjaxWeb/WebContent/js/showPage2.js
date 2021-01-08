/**
 * showPage2.js
 */

function showPage() {
	let doc = xhtp.responseXML;
	let data = doc.getElementsByTagName('record')
	console.log(data);
	let tableTag = document.createElement('table');
	tableTag.setAttribute('border', '1');
	tableTag.setAttribute('id', 'tbl');

	//title tr
	//data tr => [배열]
	let headerTr = titleRow(data);
	let dataTr = contentRow(data);
	tableTag.appendChild(headerTr);
	for (let i = 0; i < dataTr.length; i++) {
		tableTag.appendChild(addBtn(dataTr[i], delFunc)); //기존 dataTr[i]에 delFunc을 추가로 매개변수로 받아서 addBtn이라는 펑션을 실행함.
	}
	document.getElementById('show').appendChild(tableTag);
}
function delFunc() {
	console.log(this);
	let id = this.parentNode.parentNode.childNodes[0].firstChild.nodeValue;
	this.parentNode.parentNode.remove();
	let req = new XMLHttpRequest();
	req.open('get', '../deleteEmp?empId=' + id);
	req.send();
	req.onload = function() {
		console.log(req.responseText);
	}
}
function addBtn(tr, callBackFunc) {
	// 버튼 추가 코드. 이벤트 등록
	let butn = document.createElement('button');
	butn.onclick = callBackFunc;
	butn.innerHTML = '삭제';
	let tdTag = document.createElement('td');
	tdTag.appendChild(butn);
	tr.appendChild(tdTag);
	return tr;
}

function titleRow(result) {
	console.log(result[0].childNodes[3].nodeName);
	let trTag = document.createElement('tr');
	for (let i = 0; i < result[0].childNodes.length; i++) {
		let tdTag = document.createElement('th');
		let textNode = document.createTextNode(result[0].childNodes[i].nodeName.toUpperCase());
		tdTag.appendChild(textNode);
		trTag.appendChild(tdTag);
	}

	return trTag;

}
function contentRow(result) {
	let trTags = [];
	for (let j = 0; j < result.length; j++) {
		let trTag = document.createElement('tr');
		let empId = result[j].childNodes[0].firstChild.nodeValue;
		trTag.setAttribute('id', 'emp_' + empId);
		let firstName = result[j].childNodes[1].firstChild.nodeValue;
		let lastName = result[j].childNodes[2].firstChild.nodeValue;
		let email = result[j].childNodes[3].firstChild.nodeValue;
		let jobId = result[j].childNodes[6].firstChild.nodeValue;

		trTag.onmouseover = function() {
			trTag.style.background = 'yellow';
		}
		trTag.onmouseout = function() {
			trTag.style.background = '';
		}
		trTag.onclick = function() {
			document.getElementById('eid').value = empId;
			document.getElementById('fName').value = firstName;
			document.getElementById('lName').value = lastName;
			document.getElementById('email').value = email;
			document.getElementById('jobId').value = jobId;
		}
		for (let i = 0; i < result[0].childNodes.length; i++) {
			let tdTag = document.createElement('td');
			let textNode = document.createTextNode(result[j].childNodes[i].firstChild.nodeValue);
			tdTag.appendChild(textNode);
			trTag.appendChild(tdTag);
		}

		trTags.push(trTag);
	}
	return trTags;

}