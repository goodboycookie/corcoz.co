<script>


let optionslist=[
    "this site was handcoded with love <3 (with svelte)",
    "my fave song rn is good good things, the drain cover",
    "i have a cold right now",
    "hawthorne forever... i guess"

]
let renderedText = optionslist[Math.floor(Math.random() * optionslist.length)];
// let renderedText = "what the flipp";

</script>

<main>
    <div style="text-wrap: wrap; text-align: center; padding: 5px 0px; color: white; height: 175px; display: flex; flex-direction: column; align-self: center; justify-content: center; align-items: center">{renderedText}</div>
</main>