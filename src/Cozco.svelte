<script lang="ts">
import { bubble } from 'svelte/internal';
import Bubble from './Bubble.svelte';
import Changelog from './components/Changelog.svelte';
import Ceevee from './Ceevee.svelte'
import Teevee from './Teevee.svelte';
import Foco from './Foco.svelte';
import Soundbubble from './cozco/Soundbubble.svelte';
import App from './App.svelte';
import Titlebar from './cozco/Titlebar.svelte';
import { linkWithCredential } from 'firebase/auth';


const bigblock = () => {
    window.open("https://goodboycookie.github.io/bigblocksoffice/", "_blank");
}
const receiveMessage = (event) =>{
    if(event.detail.type === 'screen'){
        movable = false;
    }
    else if(event.detail.type === 'button'){
        movable = true;
    }
}
    
export const bubbleData = [
    {
        key: 0,
        color: ['green'],
        title: '♻️🪵',
        activate: true,
        component: Changelog,
        pos: {x: 80, y: 80, wdth: '180px'},
        function: receiveMessage,
    },
    {
        key: 1,
        color: ['#fffff0', '#f0f0f0'],
        title: '📝',
        activate: true,
        component: Ceevee,
        pos: {x:-200, y: 100, wdth: '100px'},
        function: receiveMessage,
    },
    {
        key: 2,
        color: ['#6d326d', 'snow'],
        title: '📺',
        activate: true,
        component: Teevee,
        pos: {x: -80, y: 0, wdth: '160px'},
        function: receiveMessage,
        param: 'desktop',
    },
    {
        key: 3,
        color: ['#61dafb', 'white'],
        title: '🖼️',
        activate: true,
        component: Foco,
        pos: {x: 45, y: -200, wdth: '250px'},
        function: receiveMessage,
    },
    {
        key: 4,
        color: ['#6d326d', 'white'],
        title: '👔🧸',
        activate: false,
        pos: {x: -110, y: -50, wdth: '60px'},
        function: bigblock,
    },
]


    const chosenColor = "#ffffff";
    


    let srcs = ["http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Crumble%20Sound.mp3", 
            "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"];
    let audio;
    let playCount = 0;
    function playAudio(event) {
        audio = new Audio(srcs[playCount]);
        audio.play();
        audio.loop = false;
        playCount++;
    }




    let m = { x: 0, y: 0 };
	let clicked = false;
	let pX = 0;
	let pY = 0;
	let startpX = pX;
	let startpY = pY;
    let movable = true;
    function clickDown() {
		m.x = window.event.clientX;
		m.y = window.event.clientY;
		startpY = pY;
		startpX = pX;
	 	clicked = true;
	}
    function clickUp() {
        clicked = false;
		m.x = 0;
		m.y = 0;
	}
	function handleMousemove(event) {
		if(clicked && movable){
            pY = startpY + event.clientY - m.y;
            pX = startpX + event.clientX - m.x;
		}
	}
    function manualPush(param){
        switch(param){
            case 'left':
                pX += 250;
                break;
            case 'right':
                pX -= 250;
                break;
            case 'up':
                pY += 250;
                break;
            case 'down':
                pY -= 250;
                break;
            default:
                pX = 0;
                pY = 0;
                break;
        }
    }


    


</script>

<main>
    
    <div class="content-box" on:mousedown={clickDown} on:mouseup={clickUp} on:mousemove={handleMousemove} style="background-color: {chosenColor}; cursor: {clicked ? 'grabbing' : 'grab'}">
        <div style="top:{pY-300}px; left:{pX}px; text-align: center" class="floater-text"><Titlebar></Titlebar></div> 
        <div on:click={()=>{manualPush('right')}} class={movable ? "mobile button right" : "button-gone"}><div>r</div></div>
        <div on:click={()=>{manualPush('left')}} class={movable ? "mobile button left" : "button-gone"}><div>l</div></div>
        <div on:click={()=>{manualPush('down')}} class={movable ? "mobile button down" : "button-gone"}><div>d</div></div>
        <div on:click={()=>{manualPush('up')}} class={movable ? "mobile button up" : "button-gone"}><div>u</div></div>
        <div class={movable ? "translated-div" : "untranslated-div"}>
            {#each bubbleData as bubble}
                <Bubble pX={pX + bubble.pos.x + 'px'} 
                        activatable={bubble.activate}
                        pY={pY + bubble.pos.y + 'px'} 
                        title={bubble.title} 
                        height={bubble.pos.wdth}
                        on:message={bubble.function}
                        textcolor={bubble.color[1]}
                        bg={bubble.color[0]}
                        specialParam={bubble.param}>
                        
                        <svelte:component this={bubble.component} />
                </Bubble>
            {/each}
            
            <div style="top:{pY+50}px; left:{pX-350}px; text-align: center" class="floater-text">u r visitor #
                <img src="https://hitwebcounter.com/counter/counter.php?page=7926699&style=0014&nbdigits=5&type=ip&initCount=0" title="Free Counter" Alt="web counter"   border="0" />
            </div>
            </div>
        </div>

</main>

<style type="text/scss">
    .content-box{
        height: 100%;
        width: 100%;
        

        position: absolute;
        overflow: hidden;
        cursor: grab;

        .translated-div{
            height: 100%;
            width: 100%;
            transform: translate(50%, 50%);
            transition: 0.4s;
        }
        .untranslated-div{
            height: 100%;
            width: 100%;
            transform: translate(0%, 0%);
            transition: 0.4s;
        }


        .floater-text{
            font-family: Roboto Mono;
            width: 200px;
            height: 200px;
            color: blue;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: absolute;
            transition: 0.3s;
            transform: translate(-50%, -50%);
        }
        .mobile{
            opacity: 0;
            display: none;
        }
        .button{
            border-radius: 15px;
            background-color: #61dafb44;
            
            position: absolute;
            border: 1px solid black;
            z-index: 1;
            div{
                position: absolute;
                display: inline-block;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                
               
            }
            
        }
        .button-gone{
            display: none;
        }
        .right{
        right: 10px;
        top: 50%;
        width: 3em;
        height: 3em;
        }
        .left{
        left: 10px;
        top: 50%;
        width: 3em;
        height: 3em;
        } .down{
        bottom: 10px;
        width: 3em;
        height: 3em;
        transform: translate(-50%, 0);
        left: 50%;
        }.up{
        top: 10px;
        transform: translate(-50%, 0);
        left: 50%;
        width: 3em;
        height: 3em;
        }
        
        

        @media screen and (max-width: 900px){
            .mobile{
                opacity: 1;
                display: block;
            }
        }
    }

</style>