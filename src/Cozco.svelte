<script lang="ts">
import { bubble } from 'svelte/internal';
import Bubble from './Bubble.svelte';
import Changelog from './cozco/Changelog.svelte';
import Ceevee from './Ceevee.svelte'
import Teevee from './Teevee.svelte';
import Foco from './Foco.svelte';
import Soundbubble from './cozco/Soundbubble.svelte';
import App from './App.svelte';
import Titlebar from './components/Titlebar.svelte';


    const chosenColor = "#ffffff";

    const receiveMessage = (event) =>{
        if(event.detail.type === 'screen'){
            console.log('no');
            movable = false;
        }
        else if(event.detail.type === 'button'){
            console.log('si');
            movable = true;
        }
    }

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

    export const bubbleData = [
        {
            key: 0,
            color: ['green'],
            title: 'changelog',
            activate: true,
            component: Changelog,
            pos: {x: 50, y: 100, wdth: '180px'},
            function: receiveMessage,
        },
        {
            key: 1,
            color: ['#fffff0', '#f0f0f0'],
            title: 'ceevee',
            activate: true,
            component: Ceevee,
            pos: {x:-150, y: 100, wdth: '100px'},
            function: receiveMessage,
        },
        {
            key: 1,
            color: ['#6d326d', 'snow'],
            title: 'teevee',
            activate: true,
            component: Teevee,
            pos: {x: -80, y: 0, wdth: '100px'},
            function: receiveMessage,
            param: 'desktop',
        },
        {
            key: 1,
            color: ['#61dafb', 'white'],
            title: 'foco',
            activate: true,
            component: Foco,
            pos: {x: 20, y: -200, wdth: '250px'},
            function: receiveMessage,
        },
    ]


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

	function clickUp() {
        clicked = false;
		m.x = 0;
		m.y = 0;
	}
    


</script>

<main>
    
    <div class="content-box" on:mousedown={clickDown} on:mouseup={clickUp} on:mousemove={handleMousemove} style="background-color: {chosenColor}; cursor: {clicked ? 'grabbing' : 'grab'}">
        <div on:click={()=>{manualPush('right')}} class="mobile button right"><div>r</div></div>
        <div on:click={()=>{manualPush('left')}} class="mobile button left"><div>l</div></div>
        <div on:click={()=>{manualPush('down')}} class="mobile button down"><div>d</div></div>
        <div on:click={()=>{manualPush('up')}} class="mobile button up"><div>u</div></div>
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
        <div style="top:{pY-300}px; left:{pX}px; text-align: center" class="floater-text"><Titlebar></Titlebar></div>
        <div style="top:{pY+50}px; left:{pX-350}px; text-align: center" class="floater-text">u r visitor #
            <img src="https://hitwebcounter.com/counter/counter.php?page=7926699&style=0014&nbdigits=5&type=ip&initCount=0" title="Free Counter" Alt="web counter"   border="0" /></div>
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
            z-index: 4;
            div{
                position: absolute;
                display: inline-block;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                
               
            }
            
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