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

    ]
    let imglist = [];
    let currentimg;
    let folderdesc = "choose something already!";
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
        <div class="row">
            <div on:click={leftClick}  id="left" class="arrow {leftavail ? '' : ' inaccessible'}">{leftavail ? left : "xxx"}</div>
            <div class="folders">
                {#each contentData as folder}
                    <div on:click={()=>swapPics(folder)} class="folder-title">
                        {folder.title}
                    </div>
                {/each}
            </div>
        
        <div on:click={rightClick}  id="right" class="arrow {rightavail ? '' : ' inaccessible'}">{rightavail ? '-->' : "xxx"}</div>
        </div>
        <p class="folder-desc">
            {folderdesc}
        </p>
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
            max-width: 65vw;
            max-height: 65vh;
            
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
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .folder-desc{
            color: #61dafb;
            text-align: center;
        }
        .folder-desc:hover{
            color: snow;
        }
        .row{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            border: 1px solid white;
            border-radius: 5px;
            height: 35px;
            padding: 3px;
        }

        .arrow{
            font-family: Roboto Mono;
            font-size: 24px;
            font-weight: 700;
            color: snow;
            
        }
        .arrow:hover{
            color: orange;
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
            
            width: auto;
            // padding-right: 5px;
            // height: 100%;
            overflow: scroll;
            height: 100%;
    }

    .folder-title {
        font-family: Roboto Mono;
        color: snow;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0 2px;
    }
    .folder-title:hover{
        color: #ffb941;
        text-shadow: snow;
        cursor: zoom-in;
    }
    }
</style>