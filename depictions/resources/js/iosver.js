function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
	else {
		return 0;
	}
}
ver = iOSversion();
if (ver[0] >= 8) {
	document.getElementById('version').innerHTML='<p style="color:green;"><strong>&#10003</strong> Your device is supported 😊 </p>';
}
else {
	document.getElementById('version').innerHTML='<p style="color:green;"><strong>&#10007</strong> Your device is not supported 😔 </p>';
}