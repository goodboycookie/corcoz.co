<script lang="ts">
import { createEventDispatcher } from "svelte";

    let activated = false;

    export let specialParam;
    export let title;
    export let activatable = false;
    export let height = '125px';
    export let textcolor = 'snow';
    export let width = height;
    export let bg = 'blue';
    export let pX;
    export let pY;

    let addedParams = " ";
    if(specialParam !== undefined){
    
        addedParams = addedParams + specialParam;

    }

    const dispatch = createEventDispatcher();

    $: stylestring = `background-color: ${bg};  height: ${height}; width: ${height} `;
    $: mainstring = `top: ${activated ? 0 : pY}; 
                    left: ${activated ? 0 : pX}; 
                    height: ${height}; width: ${height};  
                    transition: ${activated ? '0.5s' : '0.3s' }; ${addedParams}`;
    
    function toggleActivate(param): any {
        console.log(param);
        dispatch("message", {type: param});
        if(activatable){
            if (param === 'screen'){
                activated = true;
                height = "100%";
            }
            if (param === 'button'){
                activated = false;
                height = width;
            }
        }
    }




</script>
 
<main class={"bub " + addedParams} style={mainstring}>
    <div style={stylestring}  class={activated ? "activated-bubble" : "deactivated-bubble"}>
        {#if activated}
            <div class="bubble-contents">
                <div on:click={()=>{toggleActivate('button')}} class="x-button">X</div>
                <slot>
                </slot>
            </div>
        {:else}
            <div on:click={()=>{toggleActivate('screen')}} class="bubble-contents">
                <div style="color:{textcolor};">{title}</div>
            </div>
        {/if}
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
            overflow: scroll;
            .bubble-contents{
                opacity: 1;
                animation-name: enter;
                animation-delay: 0;
                animation-duration: 1.2s;
                
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
            .bubble-contents{
                height: 100%; 
                width: 100%; 
                border-radius: 50%; 
                display: flex; 
                justify-content: center; 
                align-items: center;
                font-size: 1.5em;
                font-weight: 400;
                overflow:hidden;
                font-family: Fredoka One;
                transition: 0.2s;
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
    
    }
    


    

</style>