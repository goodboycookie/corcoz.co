<script lang="ts">
// import App from "./App.svelte";
    let focogrid = './assets/focogrid.svg';
    let desktop00 = './assets/images/0/0.jpg';
    let desktop01 = './assets/images/0/1.jpg';
    let desktop02 = './assets/images/0/2.jpg';
    let desktop03 = './assets/images/0/3.jpg';
    let desktop04 = './assets/images/0/4.jpg';
    import ImgFolder from './components/ImgFolder.svelte';

    let contentData = [
        {
            index: 0,
            title: 'desktopphotoset00',
            id: 'yahoo',
            desc: 'lets explore',
            imgs: [desktop00, desktop01, desktop02, desktop03, desktop04],
        },

    ]
    let imglist = [];
    let currentimg;
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

    function swapPics(imgs) {
        imglist = imgs;
        imgindex=0;
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
    
    {#if currentimg} <div class="image-box"><img alt="image" height="100%" width="100%" src={currentimg} /></div>{/if}
    
    <div class="folder-wrapper">
        <div class="row">
            <div on:click={leftClick}  id="left" class="arrow {leftavail ? '' : ' inaccessible'}">{leftavail ? left : "xxx"}</div>
            <div class="folders">
                {#each contentData as folder}
                    <div on:click={()=>swapPics(folder.imgs)} class="folder-title">
                        {folder.title}
                    </div>
                {/each}
            </div>
        
        <div on:click={rightClick}  id="right" class="arrow {rightavail ? '' : ' inaccessible'}">{rightavail ? '-->' : "xxx"}</div>
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
            min-width: 200px;
            min-height: 300px;
            max-width: 450px;
            max-height: 450px;
            
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
        bottom: 15px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 40%;

        .row{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            border: 1px solid white;
            height: 20%;
            margin: 20px;
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
                cursor: e-resize;
                border-left:1px solid white;
            }
            #left{
                cursor: w-resize;
                border-right:1px solid white;
            }
        .folders{
            
            width: auto;
            padding-right: 5px;
            height: 100%;
            overflow: scroll;
    }

    .folder-title {
        font-family: Roboto Mono;
        color: snow;
    }
    .folder-title:hover{
        color: #ffb941;
        text-shadow: snow;
        cursor: zoom-in;
    }
    }
</style>