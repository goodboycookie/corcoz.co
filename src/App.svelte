<script lang="ts">
  import Cozco from './Cozco.svelte';
  import Ceevee from './Ceevee.svelte';
  import Teevee from './Teevee.svelte';
  import Foco from './Foco.svelte';
  import Titlebar from './cozco/Titlebar.svelte';

  const options = [
    {key: 0, title: 'cozco', component: Cozco},
  ]

  let content = options[0];
  function tabClick(val: number): any {
		content = options[val];
    return content;
	}

</script>


	<main class="HomeWrapper">
		<div class ="MainSection">
			<!-- <div class ="sidebar">
        <div class="inside-bar">
          {#each options as option}
            <div on:click={()=>{tabClick(option.key)}}>{option.title}</div>
          {/each}
        </div>
      </div> -->
			<div class="Content">
				<svelte:component this={content.component} />
			</div>
		</div>
	</main>


<style type="text/scss">
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;700&family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap');
@font-face{
  font-family: 'VCR OSD Mono';
  src: local('VCR OSD Mono'), url(./fonts/VCR_OSD_MONO_1.001.ttf);
}



.HomeWrapper{
  height: 100vh;
  width: 100vw;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  background-color: black;
  cursor: none;

  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}



.MainSection{
  background-color: #1FA66C;
  border: 6px solid snow;
  border-radius: 50px;
  
  padding: 20px;
  margin: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 100%;
  overflow-y: auto;
  // cursor: default;
}

.Content{
  /* background-color:blueviolet; */
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 30px 30px 30px 30px;
  overflow: hidden;
}


@keyframes contentAppear {
  0% {opacity: 0;}
  70% {opacity: 0;}
  100% {opacity: 1;}
}

.HomeWrapper ::-webkit-scrollbar {
  display: none;
}







// .topbar{
//   background-color: #61dafb;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }


// .inside-bar{
//     display: flex;
//     height: 100%;
//     /* overflow: auto; */
//     width: 20vw;
//     font-size: 3em;
//     flex-direction: column;
//     border-radius: 30px 30px 30px 30px;
//     text-align: right;
//   }

// .inside-bar > div {
//     font-family: Arial Black;
//     font-style: italic;
//     margin: 0px 20px;
//     color: black;
//     transition: 0.3s;
// }

// .inside-bar>div:hover{
//     color: white;
//     cursor: pointer;
// }


@media screen and (max-width: 900px) {
  .MainSection{
    padding: 0px;
    border: none;
    // margin: 5px;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: -webkit-fill-available;
    overflow-y: auto;
  }
  .Content{
    display: flex;
    height: 100vh;
    width: 100%;
    position: relative;
    border-radius: 35px 35px 35px 35px;
    overflow: hidden;
  }
  // .sidebar{
  //   display: flex;
  //   flex-direction: row;
  //   font-family: Arial White;
  //   width: 100%;
  //   height:15%;
  //   overflow-y: auto;
  //   .inside-bar{
  //     display: flex;
  //   flex-direction: row;
  //   }
  // }
    

    .HomeWrapper{
      height: 100vh;
    }

}


@media screen and (max-width: 500px) {
  .HomeWrapper{
      height: 100vh;
    }
  .MainSection{
    padding: 5px;
    margin: 5px;

    height: 100%;

    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    overflow-y: auto;
  }

}

</style>