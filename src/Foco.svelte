<script lang="ts">
// import App from "./App.svelte";
    let focogrid = './assets/focogrid.svg';
    let desktop00 = './assets/images/0/0.JPG';
    let desktop01 = './assets/images/0/1.JPG';
    let desktop02 = './assets/images/0/2.JPG';
    let desktop03 = './assets/images/0/3.JPG';
    let desktop04 = './assets/images/0/4.JPG';
    let desktop10 = './assets/images/1/0.JPG';
    let desktop11 = './assets/images/1/1.JPG';
    let desktop12 = './assets/images/1/2.JPG';
    let desktop13 = './assets/images/1/3.JPG';
    let desktop14 = './assets/images/1/4.JPG';
    let desktop15 = './assets/images/1/5.JPG';
    let desktop16 = './assets/images/1/6.JPG';
    let desktop17 = './assets/images/1/7.JPG';
    let desktop18 = './assets/images/1/8.JPG';
    let sneakpeek00 = './assets/images/2/0.png';
    let sneakpeak01 = './assets/images/2/1.JPG';
    let sneakpeak02 = './assets/images/2/2.jpg';
    let sneakpeak03 = './assets/images/2/3.JPG';
    let sneakpeak04 = './assets/images/2/4.JPG';
    let sneakpeak05 = './assets/images/2/5.jpg';
    let sneakpeak06 = './assets/images/2/6.JPG';
    let sneakpeak07 = './assets/images/2/7.JPG';
    let sneakpeak08 = './assets/images/2/8.JPG';
    let sneakpeak09 = './assets/images/2/9.JPG';
    let sneakpeak10 = './assets/images/2/10.JPG';
    let sneakpeak11 = './assets/images/2/11.jpg';
    let sneakpeak12 = './assets/images/2/12.jpg';

    import ImgFolder from './components/ImgFolder.svelte';

    let contentData = [
        {
            index: 0,
            title: 'cutting floor flashbacks',
            id: 'yahoo',
            desc: 'a couple cutting-floor flashbacks to 2019 or 20.. i cant remember. shot on broken olympus slr lol',
            imgs: [desktop00, desktop01, desktop02, desktop03, desktop04],
        },
        {
            index: 1,
            title: 'greencam cold cuts',
            id: 'kodakgreencam',
            desc: 'some select cold cuts from the clutches of a dead cam! proudly shot on a kodak eashyshare.',
            imgs: [desktop10, desktop11, desktop12, desktop13, desktop14, desktop15, desktop16, desktop17, desktop18],
        },
        {
            index: 2,
            title: 'baker dozen sneak peek',
            id: 'bakerdozen',
            desc: 'a brief sneak peak at an upcoming project... currently in the oven. 23.12.18',
            imgs: [sneakpeak01,sneakpeak02,sneakpeak03,sneakpeak04,sneakpeak05,sneakpeak06,sneakpeak07,sneakpeak08, sneakpeak09,sneakpeak10,sneakpeak11, sneakpeak12,],
        },

    ]
    let imglist = [];
    let currentimg;
    let folderdesc = "";
    let imgindex = 0;
    let left = "<--"
    let leftavail = false;
    let rightavail = false;

    const checkArrows = () =>{
        if(imgindex+1 < imglist.length){
            rightavail = true;
        }
        else{
            rightavail = false;
        }
        if (imgindex-1 >= 0){
            leftavail = true;
        }
        else{
            leftavail = false;
        }
    }

    function swapPics(folder) {
        imglist = folder.imgs;
        imgindex=0;
        folderdesc = folder.desc;
        currentimg = imglist[imgindex];
        checkArrows();
        
    }
    function leftClick() {
        if(leftavail){
        imgindex--;
        currentimg = imglist[imgindex];
        checkArrows();
        }
    }
    function rightClick() {
        if(rightavail){
        imgindex++;
        currentimg = imglist[imgindex];
        checkArrows();
        }
    }

</script>
<main class="content-box">
    
    {#if currentimg} <div class="image-box"><img alt="currentpic" height="100%" width="100%" src={currentimg} /></div>{/if}
    
    <div class="folder-wrapper">
        <div class="folders">
            {#each contentData as folder}
                <div on:click={()=>swapPics(folder)} class="folder-title">
                    {folder.title}
                </div>
            {/each}
        </div>
        <div class="row">
            <div on:click={leftClick}  id="left" class="arrow {leftavail ? '' : ' inaccessible'}">{leftavail ? left : "xxx"}</div>
            <div on:click={rightClick}  id="right" class="arrow {rightavail ? '' : ' inaccessible'}">{rightavail ? '-->' : "xxx"}</div>
        </div>
        <div class="row">
            <p class="folder-desc">
                {folderdesc}
            </p>
        </div>
    </div>
    
</main>
<style type="text/scss">
    .content-box{
        height: 100%;
        width: 100%;
        margin: 0;
        position: absolute;
        background-color:#61dafb;
        background-image: url("./assets/focogrid.svg");
        font-family: Roboto VCR_OSD_MONO_1;
        text-align: left;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .image-box{
            border: 5px solid snow;
            // min-width: 200px;
            // min-height: 300px;
            max-width: 60vw;
            max-height: 75vw;
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin-bottom: 60px;
            img{
                object-fit: contain;
            }

        }
        ::-webkit-scrollbar {
        width: 8px;
        height: 0px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        background: #61dafb; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: rgba(255, 250, 250, 0.8); 
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: snow; 
        }
    }
    .folder-wrapper{

        position: absolute;
        left: 20px;
        bottom: 20px;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        // align-items: center;
        width: 15vw;

        .folder-desc{
            // color: #61dafb;
            text-align: justify;
            // border: 1px solid white;
            // border-radius: 0px 0px 5px 5px;
            height: 40px;
            font-size: 0.6em;
            justify-content: flex-start;
            padding: 2px;
        }
        .folder-desc:hover{
            // color: snow;
        }
        .row{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            // align-items: flex-start;
            border: 1px solid white;
            padding: 3px;
        }

        .arrow{
            font-family: Roboto Mono;
            font-size: 24px;
            font-weight: 700;
            color: snow;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        .arrow:hover{
            color: orange;
            cursor: pointer;
        }
        .inaccessible:hover{
            color: red;
        }
            #right{

                border-left:1px solid white;
            }
            #left{

                border-right:1px solid white;
            }
        .folders{
            height: 40px;
            width: auto;
            // padding-right: 5px;
            // height: 100%;
            overflow: scroll;
            font-size: 0.8em;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            height: 80px;
            border: 1px solid white;
            // border-radius: 5px 5px 0px 0px;
    }

    .folder-title {
        font-family: Roboto Mono;
        color: snow;
        height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        overflow: hidden;
        padding: 0 0px 0 8px;
        font-size: 0.8em;
    }
    .folder-title:hover{
        color: #ffb941;
        text-shadow: snow;
        cursor: zoom-in;
    }
    }
</style>