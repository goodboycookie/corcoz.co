<script>


let optionslist=[
    "this site was handcoded with love <3 (with svelte)",
    "i'm nearly over the cold i have right now",
    "hawthorne forever... i guess",
    "this site was handcoded with love <3 (with svelte)",
    "if u, like, neeeed to hmu... axel@corcoz.co" 
];

let renderedText = optionslist[Math.floor(Math.random() * optionslist.length)];
// let renderedText = "what the flipp";

</script>

<main>
    <div style="text-wrap: wrap; text-align: center; padding: 5px 0px; color: white; height: 175px; display: flex; flex-direction: column; align-self: center; justify-content: center; align-items: center">{renderedText}</div>
</main>
