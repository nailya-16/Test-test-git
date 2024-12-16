(async () =>{
    const people = (await fetch('https://swapi.dev/api/people').then(res => res.json)).results;
});