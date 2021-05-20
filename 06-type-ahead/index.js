const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

    const searchInput = document.querySelector('.search');
    const suggestion = document.querySelector('.suggestion');