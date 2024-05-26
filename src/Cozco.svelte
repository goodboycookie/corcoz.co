<script lang="ts">
import { bubble } from 'svelte/internal';
import Bubble from './Bubble.svelte';
import Changelog from './components/Changelog.svelte';
import Ceevee from './Ceevee.svelte'
import Teevee from './Teevee.svelte';
import Foco from './Foco.svelte';
import About from './About.svelte';
// import bubbleData from './data/bubbleData';
// import Soundbubble from './cozco/Soundbubble.svelte';
import App from './App.svelte';
import Titlebar from './cozco/Titlebar.svelte';
// import { linkWithCredential } from 'firebase/auth';
// console.log(bub)

const sendAlert = () => {

    let optionslist=[
    "this site was handcoded with love <3 (with svelte)",
    "my fave song rn is good good things, the drain cover",
    "i have a cold right now",
    "hawthorne forever... i guess"
    ]
    alert(optionslist[Math.floor(Math.random() * optionslist.length)]);
}
const bigblock = () => {
    window.open("https://goodboycookie.github.io/bigblocksoffice/", "_blank");
}

const receiveMessage = (event) =>{
    console.log('message received');
    if(event.detail.type === 'screen'){
        movable = false;
    }
    else if(event.detail.type === 'button'){
        movable = true;
    }
    else if (event.detail.type === 'question-reveal'){
        console.log('revealed!');
    }
}

export const bubbleData = [

    {
        key: 0,
        color: ['#fffff0', '#f0f0f0'],
        title: '📝',
        component: Ceevee,
        pos: {x:-200, y: 100, radius: '100px'},
        function: receiveMessage,
    },
    {
        key: 1,
        color: ['#6d326d', 'snow'],
        title: '📺',
        component: Teevee,
        pos: {x: -80, y: 0, radius: '160px'},
        function: receiveMessage,
        params: ['desktop'],
    },
    {
        key: 2,
        color: ['#61dafb', 'white'],
        title: '🖼️',
        component: Foco,
        pos: {x: 45, y: -200, radius: '250px'},
        function: receiveMessage,
    },
    {
        key: 3,
        color: ['#6d326d', 'white'],
        title: '👔🧸',
        pos: {x: -110, y: -50, radius: '80px'},
        function: bigblock,
        params: ['noactivate'],
    },
    {
        key: 4,
        color: ['black'],
        title: '❔',
        component: About,
        pos: {x: -10, y: 175, radius: "75px"},
        function: sendAlert,
        params: ['noactivate'],
        activatedScreenSize: '50%',
    },
    {
        key: 5,
        color: ['green'],
        title: '♻️🪵',
        component: Changelog,
        pos: {x: 80, y: 80, radius: "180px"},
        function: receiveMessage,
        starterbubble: true,
    },
]


const pageBackgroundColor = "#ffffff";
    



    /////ONE DAY I WILL ADD SOME SOUND/MUSIC SHIT... ONE DAY...
    /////
    // let srcs = ["http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Crumble%20Sound.mp3", 
    //         "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"];
    // let audio;
    // let playCount = 0;
    // function playAudio(event) {
    //     audio = new Audio(srcs[playCount]);
    //     audio.play();
    //     audio.loop = false;
    //     playCount++;
    // }



// MOVEMENT RELATED SHIT
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
    //TODO: CHANGE THE MOBILE MOVEMENT LETTERS TO ICONS.
    //      THAT'S NOT IN THIS PART OF THE CODE, BUT 
    //      DO IT ANYWAY
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
    
    <div class="content-box" on:mousedown={clickDown} on:mouseup={clickUp} on:mousemove={handleMousemove} style="background-color: {pageBackgroundColor}; cursor: {clicked ? 'grabbing' : 'grab'}">
         
        <!-- <div style="top:{pY+400}px; left: {pX+250}px;" class="whats-new">What's new?a   </div> -->
        
        <div on:click={()=>{manualPush('right')}} class={movable ? "mobile button right" : "button-gone"}><div>🢂</div></div>
        <div on:click={()=>{manualPush('left')}} class={movable ? "mobile button left" : "button-gone"}><div>🢀</div></div>
        <div on:click={()=>{manualPush('down')}} class={movable ? "mobile button down" : "button-gone"}><div>🢃</div></div>
        <div on:click={()=>{manualPush('up')}} class={movable ? "mobile button up" : "button-gone"}><div>🢁</div></div>
        
        <div class={movable ? "translated-div" : "untranslated-div"}>
            <!-- TODO: ADD MORE SILLY STUFF LIKE THIS. ONLY PUBLISH IT WHEN THERE'S ENOUGH IN ALL DIRECTIONS.break.break. -->
            <!--       AND PUT IN SEPARATE COMPONENT. OBVIOUSLY.break.break.break. -->
            <!-- <div style="top:{pY-150}px; left:{pX-1550}px; text-align: center; width: 150px; height: 225px; border: 2px dashed blue" class="floater-text">
                your ad here!    $500
            </div> -->
            <div style="top:{pY-225}px; left:{pX-50}px; text-align: center; width: 225px; height: 150px;" class="floater-text mobile">
                i'm so sorry -- this website is much better on desktop..
            </div>
            <div style="top:{pY-100}px; left:{pX-200}px; text-align: center" class="floater-text"><Titlebar showSubtitle={true}></Titlebar></div>
            <!-- <div style="top:{pY-40}px; left:{pX-225}px; text-align: center; width: 225px; height: 150px;" class="floater-text">
                welcome to my website!
            </div> -->

            {#each bubbleData as bubble}
                <Bubble pX={pX + bubble.pos.x + 'px'} 
                        pY={pY + bubble.pos.y + 'px'} 
                        title={bubble.title} 
                        bubbleRadius={bubble.pos.radius}
                        on:message={bubble.function} 
                        textcolor={bubble.color[1]}
                        bg={bubble.color[0]}
                        specialParams={bubble.params}
                        activatedScreenSize={bubble.activatedScreenSize}>
                        
                        <svelte:component this={bubble.component} />
                </Bubble>
            {/each}
            
            <!-- <div style="top:{pY+50}px; left:{pX-350}px; text-align: center" class="floater-text">u r visitor #
                <img src="https://hitwebcounter.com/counter/counter.php?page=7926699&style=0014&nbdigits=5&type=ip&initCount=0" title="Free Counter" Alt="web counter"   border="0" />
            </div> -->
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