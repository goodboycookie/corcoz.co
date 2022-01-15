<script lang="ts">
    let tv = './assets/realtv.png';
    let noise = './assets/channel.gif';
    let bigblock = './assets/bigblock.gif';
    let kaleidoscope = './assets/kaleidoscope.gif';

   const contentData = [
        {
            id: 0,
            title: "BIG BLOCK'S OFFICE",
            description: "A (still unfinished) game made with React. Join an office run by a big baby, Big Block! The narrative can still use some work, but Im proud of the UI and loop. Check it out!",
            img: bigblock,
            link: "https://goodboycookie.github.io/bigblocksoffice/",
            type: "game",
            year: 2020,
            
        },
        {
            id: 1,
            title: "SPACE KALEIDOSCOPE",
            description: "A fun little project made with p5.js -- Speed up time and see some pretty colors! \n I know its off-center...",
            img: kaleidoscope,
            link: "/kaleidoscope",
            type: "game",
            year: 2018,
            
        },
        
    ]
    let tvDisplay = contentData[0].img;
    let channel = 0;

function startGame() {
 let link = contentData[channel].link;
 window.open(link, '_blank');
}
function selectGame() {
    tvDisplay = noise;
    channel = (channel+1 >= contentData.length ? 0 : channel+1);
    const timeout = setTimeout(() => {
        tvDisplay = contentData[channel].img;
    }, 300);
    return ()=>clearTimeout(timeout);

}

</script>

<main class="content-box teevee-wrapper">
    <div class="title">{contentData[channel].title}</div>
    <div class="tv-box">
        <img alt='tv' class="tv-img" src={tv} />
        <img alt="tv content" class="tv-display" src={tvDisplay} />
    </div>
    <div id="description">{contentData[channel].description}</div>
    <span id="year">last edited: {contentData[channel].year}</span>

    <div class='buttons'>
        <div on:click={selectGame} class="button">
            <span id="select">SELECT</span>
        </div>
        <div on:click={startGame} class="button">
            <span id="select">START</span>
        </div>
    </div>
</main>

<style type="text/scss">
    .content-box{
        height: 100%;
        width: 100%;
        margin: 0;
        position: absolute;
        background-color: #6d326d;
        font-family: Roboto VCR_OSD_MONO_1;
        text-align: left;
    }
    .teevee-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title{
            font-family: VCR OSD Mono;
            color: #F5F5F5;
            font-size: 3vw;
            margin: 20px 0px;
        }
        .tv-box{
            height: 100%;
            background-color: #6d326d;
            align-items: center;
            justify-content: center;
            display: flex;
            align-self: center;
            height: 27vw;
            width: 36vw;
            position: relative;
            overflow: hidden;
            .tv-img{
                height: 100%;
                width: 100%;
                z-index: 2;
            }
            .tv-display{

                z-index: 1;
                height: 80%;
                width: 97%;
                position: absolute;
            }
        }

        #description{
            font-family: VCR OSD Mono;
            color: #F5F5F5;
            font-size: 1vw;
            margin: 20px 0px;
            text-align: center;
            max-width: 80%;
        }
        #year{
            font-family: Inconsolata;
            font-weight: 200;
            color: #F6F6F6;
        }
        .buttons{
            display:flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            .button{
                background-color: pink;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 70px;
                margin: 10px;
                padding: 5px 10px;
                border-radius: 5px;
                cursor: pointer;
            }
        }
        #select:hover{
            color: blue;
        }
    }
</style>
