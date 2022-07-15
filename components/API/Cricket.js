const fetchApi=() => {
    fetch('https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international',{
        method: 'GET',
	    headers: {
            'X-RapidAPI-Key': 'c981ec28f8msha31db1f448a4ae6p1207ebjsne85f4cd569ad',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	    }
    })
	.then(response => response.json())
	.then(response => {})
	.catch(err => {});
}