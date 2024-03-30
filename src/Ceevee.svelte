<script lang="ts">
    let clicked = 0;
    let attempts = 0;
    let linkIndex = 0;

    let mainText = generatePlacement();

    function generatePlacement(): string{
        let yAxis = ["top: ", "bottom: "];
        let xAxis = ["left: ", "right: "];

        const value = () => {return Math.floor(Math.random() * 40);}
        const direction = () =>{return Math.floor(Math.random()*2);}
        
        return yAxis[direction()] + value() + "%; " + xAxis[direction()] + value() + '%; ';
    }
    function textHover(): void{
        mainText = generatePlacement();
        attempts++;
    }
    function linkClick(): void{
        
        console.log(linkIndex);
    }
    const crimestopper = () => {
        window.open("https://youtu.be/sQR1eb1mMg8?t=1199", 'performance', 'width=800,height=500');
        window.open("https://www.dailybreeze.com/2012/02/08/former-hawthorne-mayor-larry-guidi-pleads-guilty-to-theft/", 'his end', 'top=500, left=1100,width=600,height=800');
        window.open("https://www.laweekly.com/for-hawthorne-mayor-larry-guidi-the-path-to-jail-is-through-his-stomach/", 'speculation', 'top=900,width=600,height=400');
    }
</script>

<main>
    <div class="content-box ceevee-wrapper">
        {#if clicked === 0}
            <div on:mouseenter={textHover} style={mainText} class="cvli">download resume</div>
            <div class="seeelvi" style={generatePlacement()} on:click={crimestopper}>crime-stopper</div>
            <!-- <div class="seeelvi" style={generatePlacement()} on:click={()=>{window.open('professional/film.html', '_blank')}}>film res</div> -->

        {/if}
        {#if clicked === 1}
            <div style={generatePlacement()} class="seeelvi"><a on:click={()=>linkClick()} rel="noreferrer" target ="_blank">here!</a></div>
        {/if}
    
    </div>

</main>


<style>
    .content-box{
        height: 100%;
        width: 100%;
        margin: 0;
        border-radius: 0 30px 30px 0px;
        position: absolute;
        cursor: default;
    }
    .ceevee-wrapper{
        background-color: #fffff0;
        font-family: Roboto VCR_OSD_MONO_1;
        text-align: left;
    }
    .cvli{
        font-size: 1vw;
        transition: 0.5s;
        position: absolute;
    }
    .seeelvi{
        font-size: 2vw;
        color: #fffff0;
        margin: auto;
        position: absolute;
    }
    .seeelvi:hover{
        color: red;
        cursor: zoom-in;
    }
    a:visited{
        color: red;
    }
    .cvli:hover{
        color: #fffff0;
        cursor: zoom-in;
    }


</style>