const cities = [];
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))