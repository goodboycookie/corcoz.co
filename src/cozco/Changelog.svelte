<script>

    export const changelogData = [
        {
            id: 0,
            date: "5 aug 18",
            message: "i buy the corcoz.co domain",
        },
        {
            id: 1,
            date: "18 sept 21",
            message: "i finally decide to do something with the domain; i find out its been expired and purchased by someone else. i hit them up and they try to sell it back to me for 3x the original price. ",
        },
        {
            id: 2,
            date: "20 sept 21",
            message: "corcozco goes live under a new domain name!",
        },
        {
            id: 3,
            date: "25 sept 21",
            message: "table the triple buttons idea (you'll see) for now. cleaned up the design and added foco and teevee",
        },
        {
            id: 4,
            date: "13 jan 22",
            message: "rebuilt website in svelte. totally abandoned the three button design. removed sidebar altogether. added basic click and drag to main page.",
        },
        {
            id: 5,
            date: "14 jan 22",
            message: "i buy the corcoz.co domain again because i'm foolish. i can use both domains now.. but for what?",
        }
    ]
</script>

<main>
    {#each changelogData as data}
        <div class="changelog-data">
            <div id="date">{data.date}</div>
            <div id="message">{data.message}</div>
        </div>
    {/each}

</main>

<style type="text/scss">

    main{
        padding: 25px;
    }        
    .changelog-data{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
        #date{
            width: 18%;
            border-right: 1px solid black;
            text-align: right;
            padding-right: 2px
        }
        #message{
            max-width: 60%;
            padding-left: 2px;
            text-align: justify;
            // color: transparent;
            // text-shadow: 0 0 0 black;
        }
        div:hover{
            color: green;
        }

    }

</style>