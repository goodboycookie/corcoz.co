<script>
import { loop_guard } from "svelte/internal";
import Bubble from "../Bubble.svelte";


export let pX;
export let pY;
export let bubblePosX = 200;
export let bubblePosY = 400;

let playCount = 0;


</script>


    

<Bubble pX={pX} pY={pY} on:message={playAudio} height="60px" canBeActivated={false}  title="ty4pu" bg="pink" /> 