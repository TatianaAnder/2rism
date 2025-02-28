

document.addEventListener('DOMContentLoaded', function(){
    const destination = document.getElementById('location');

    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        destination.innerHTML = '<option value="">Explore nearby destinations</option>';

        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.cca2;
            option.textContent = country.name.common;
            destination.appendChild(option);
        });

        new Choices(destination, {
            searchEnabled: true,
            itemSelectText: '',
            allowHTML: true,
        });
    })
    .catch(error => {
        console.log('Error in getting data from API:', error);
    });
});


