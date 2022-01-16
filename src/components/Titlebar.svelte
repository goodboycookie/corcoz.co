<script lang="ts">
  let channel = 0;
  let subtitle = "no one will see this mwahaha";
  let subtitleOpacity = 0;

	function titleHover(val?: number): void {
		switch(val){
		case 0:
			subtitle = "(cortez's)";
			break;
		case 1:
			subtitle = "(cozy)";
			break;
		case 2:
			subtitle = "(corner)";
			break;
		default:
			subtitleOpacity = 0;
      return;
		}
    subtitleOpacity = 1;
		
	}
</script>



<div class="title-wrapper">
    <div class="big-title">
        <div class="title" id="title-one" on:mouseenter={()=>{titleHover(0)}} on:mouseleave={()=>{titleHover()}}>
            cor
         </div>
        <div class="title" id="title-two" on:mouseenter={()=>{titleHover(1)}} on:mouseleave={()=>{titleHover()}}>
            coz
        </div>
        <div class="title" id="title-three" on:mouseenter={()=>{titleHover(2)}} on:mouseleave={()=>{titleHover()}}>
            co
        </div>
    </div>
    <div style="opacity: {subtitleOpacity}" class="subtitle">{subtitle}</div>
</div>


<style type="text/scss">
.title-wrapper{
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .big-title{
    text-align: center;
    color: white;
    font-size: 24px;
    font-family: Fredoka One;
    flex-direction: row;
    display: flex;
    align-items: baseline;
    justify-content: center;


    .title {
      text-align: center;
      font-size: 62px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-shadow: 3px 3px black;
      cursor: zoom-in;
    }
    #title-one{
    color: #E8A122;
    }
    #title-two{
      color: #22AFB6;
    }
    #title-three{
      color: #1FA66C;
    }
  }
  .subtitle{
    float: left;
    text-align: center;
    font-family: Fredoka One;
    font-size: 12px;
    color: black;
    font-weight: 500;
  }
}
</style>