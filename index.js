const content = `
<div class="card" id="loader1">
<div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sint quibusdam velit sequi. Repellat, aspernatur, labore delectus nemo laudantium eligendi totam aliquid aliquam inventore, dolores hic. Incidunt dicta facere tempora.</p></div>
<div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sint quibusdam velit sequi. Repellat, aspernatur, labore delectus nemo laudantium eligendi totam aliquid aliquam inventore, dolores hic. Incidunt dicta facere tempora.</p></div>
<div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sint quibusdam velit sequi. Repellat, aspernatur, labore delectus nemo laudantium eligendi totam aliquid aliquam inventore, dolores hic. Incidunt dicta facere tempora.</p></div>
<div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sint quibusdam velit sequi. Repellat, aspernatur, labore delectus nemo laudantium eligendi totam aliquid aliquam inventore, dolores hic. Incidunt dicta facere tempora.</p></div>
<div>
`;

const contents = document.getElementById('loader1');

document.body.addEventListener('loadeddata', function(){
    return content;
});