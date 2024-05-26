<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { bubble } from "svelte/internal";

    export let activated = false;
    export let specialParams = [];
    export let title;
    export let bubbleRadius;
    export let textcolor = 'snow';
    export let bg;
    export let pX;
    export let pY;
    export let activatedScreenSize = '100%';

    // let addedParams = " ";
    let width = bubbleRadius;
    let activatable = true;

    //STARTER PARAM SEARCH
    specialParams.forEach((item) => {
        switch(item){
            case 'noactivate':
                activatable = false;
                break;
            case 'startbubble':
                activated = true;
                bubbleRadius = '100%';
                break;
        }

     })


    const dispatch = createEventDispatcher();

    $: stylestring = `background-color: ${bg};  height: ${bubbleRadius}; width: ${bubbleRadius} `;
    $: mainstring = `top: ${activated ? 0 : pY}; 
                    left: ${activated ? 0 : pX}; 
                    height: ${bubbleRadius}; 
                    width: ${bubbleRadius};  
                    transition: ${activated ? '0.5s' : '0.3s' }`;


    function closeScreen(): any {
        dispatch("message", {type: 'button'});
        if (activatable && activated) {
            activated = false;
            bubbleRadius = width;
        }
    }

    function openScreen(amount): any {
        dispatch("message", {type: 'screen'});
        if(activatable && !activated){
            activated = true;
            bubbleRadius = amount;
        }
    }

    // function activate(): any {
    //     specialParams.forEach((item) => {

    //     })
    // }



</script>
 
<main class="bub" style={mainstring}>
    <div style={stylestring}  class={activated ? "activated-bubble" : "deactivated-bubble"}>
        <!-- {#if activated} -->
            <div class="bubble-contents">
                {#if activated}
                    <div on:click={()=>{closeScreen()}} class="x-button">X</div>
                    <slot />
                {:else}
                    <div on:click={()=>{openScreen(activatedScreenSize)}} class="deactivated-bubble">
                        <div style="color:{textcolor}">{title}</div>
                    </div>
                {/if}
            </div>
        <!-- {:else}
            <div on:click={()=>{toggleActivate('screen')}} class="bubble-contents">
                
            </div>
        {/if} -->
    </div>
</main>


<style type="text/scss">
    @keyframes enter {
        0%{ opacity: 0; }
        70%{ opacity: 0;}
        100%{opacity: 1;}
    }

    .bub{
        opacity: 1;
        animation-name: enter;
        animation-delay: 0.2s;
        animation-duration: 0.1s;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        .activated-bubble{
            transition: 0.9s;
            border-radius: 0;
            position: absolute;
            font-size: 20px;
            z-index: 15;
            cursor: default;
            border-radius: 25px;
            overflow: auto;
            .bubble-contents{
                opacity: 1;
                animation-name: enter;
                animation-delay: 0;
                animation-duration: 1.2s;
                overflow: auto;
                .x-button{ 
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                    background-color: rgba(255, 0, 0, 0.3);
                    position: absolute;
                    border: 1px solid #030303;
                    top: 15px;
                    left: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    z-index: 18;
                    transition: 0.1s;
                }
                .x-button:hover{
                    background-color: rgba(255, 0, 0, 1);
                }
            }
        }
        .deactivated-bubble{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            transition: 0.5s;
            height: 100%;
            width: 100%;
            .bubble-contents{
                height: 100%; 
                width: 100%; 
                border-radius: 50%; 
                display: flex; 
                justify-content: center; 
                align-items: center;
                // font-size: 1.3em;
                // border: 1px solid fuchsia;
                font-weight: 400;
                overflow:hidden;
                font-family: Fredoka One;
                transition: 0.2s;
                font-size: 1.5vw;
                
            }
            
            
        }
        .deactivated-bubble:hover{
            cursor: pointer;
            transform: scale(1.2);
            
        }
    }
    
    @media screen and (max-width: 900px) {
        .desktop{
            display: none;
            background-color: blue;
        }
        .deactivated-bubble{
            font-size: 24px;
        }
        .bub{
        opacity: 1;
        animation-name: enter;
        animation-delay: 0.2s;
        animation-duration: 0.1s;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        .activated-bubble{
            transition: 0.9s;
            border-radius: 0;
            position: absolute;
            font-size: 20px;
            z-index: 15;
            cursor: default;
            border-radius: 25px;
            overflow: auto;
            .bubble-contents{
                opacity: 1;
                animation-name: enter;
                animation-delay: 0;
                animation-duration: 1.2s;
                overflow: auto;
                .x-button{ 
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    background-color: rgba(255, 0, 0, 0.3);
                    position: absolute;
                    border: 1px solid #030303;
                    top: 15px;
                    left: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    z-index: 18;
                    transition: 0.1s;
                }
                .x-button:hover{
                    background-color: rgba(255, 0, 0, 1);
                }
            }
        }
        .deactivated-bubble{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            transition: 0.5s;
            height: 100%;
            width: 100%;
            .bubble-contents{
                height: 100%; 
                width: 100%; 
                border-radius: 50%; 
                display: flex; 
                justify-content: center; 
                align-items: center;
                // font-size: 1.3em;
                // border: 1px solid fuchsia;
                font-weight: 400;
                overflow:hidden;
                font-family: Fredoka One;
                transition: 0.2s;
                font-size: 1.5vw;
                
            }
            
            
        }
        .deactivated-bubble:hover{
            cursor: pointer;
            transform: scale(1.2);
            
        }
    }
    }
    


    

</style>