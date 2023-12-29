<script>

const changelogData = [
        {
            id: 0,
            date: "5 aug 18",
            altdate: 'the day i kicked it with nelly and rory in the back porch before an awesome party',
            message: "i buy the corcoz.co domain",
        },
        {
            id: 1,
            date: "18 sept 21",
            altdate: "18 sept 21",
            message: "i finally decide to do something with the domain; i find out its been expired and purchased by someone else. i hit them up and they try to sell it back to me for 3x the original price. ",
        },
        {
            id: 2,
            date: "20 sept 21",
            altdate: "20 sept 21",
            message: "corcozco goes live under a new domain name!",
        },
        {
            id: 3,
            date: "25 sept 21",
            altdate: "25 sept 21",
            message: "table the triple buttons idea (you'll see) for now. cleaned up the design and added foco and teevee",
        },
        {
            id: 4,
            date: "13 jan 22",
            altdate: 'the day i almost forgot to move my car',
            message: "rebuilt website in svelte. totally abandoned the three button design. removed sidebar altogether. added basic click and drag to main page.",
        },
        {
            id: 5,
            date: "14 jan 22",
            altdate: 'the day sick! came out lol',
            message: "i buy the corcoz.co domain again because i'm foolish. i can use both domains now.. but for what?",
        },
        {
            id: 6,
            date: "18 jan 22",
            altdate:  "18 jan 22",
            message: "ceevee different",
        },
        {
            id: 7,
            date: "19 jan 22",
            altdate: "19 jan 22",
            message: "changed layout of stuff. made git push in a long time",
        },
        {
            id: 8,
            date: "21 jan 22",
            altdate: 'the day i forgot to move my car',
            message: "fixed changelog",
        },
        {
            id: 9,
            date: "23 april 22",
            altdate: "the day i defribilated my pc",
            message: "i remembered this site existed and made minor changes",
        },
        {
            id: 10,
            date: "9 may 22",
            altdate: "the day some guy caught me in my car sucking chocolate out of a melted lindor truffle",
            message: "i fixed foco a lil and added sum new snaps",
        },
        {
            id: 11,
            date: "28 dec 23",
            altdate: "the day i forgot to move my car, again.",
            message: 'Today I made some small changes to a few bits of formatting in foco & changelog. Clearly this page still needs some work.\n\n The contents of this website are not the only things in the world that change. (Duh, I know.) \n\n But why dont I make note of those too?',
        }
    ]

    const enter = (num) =>{
        changelogData[Math.abs(num)].id = num * -1;
    }
    
</script>

<main>
    <div class="changelog-container">
        <h2>changelog</h2>
        {#each [...changelogData].reverse() as data} 
            <div class="changelog-data">
                <div on:mouseenter={enter(data.id)} on:mouseleave={enter(data.id)} id="date">{data.id >= 0 ? data.date : data.altdate}</div>
                <div  id="message">{data.message}</div>
            </div>
        {/each}
    </div>

</main>

<style type="text/scss">

    main{
        padding: 25px;
    }
    .changelog-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        color: #eee;
    }     
    .changelog-data{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        
        margin: 20px 0px;
        width: 80%;

        #date{
            font-size: 1.1em;
            font-style: bold;
            margin-bottom: 4px;
            color: #eee;
        }

        #message{
            border-radius: 4px;
            padding: 20px 10px;
            text-align: justify;
            background-color: #eee;
            color: black;
            text-shadow: 0 0 0 black;
            font-size: 0.8em;
            white-space: pre-line;
            font-family: 'Courier New', Courier, monospace;
        }

        #date:hover{
            color: yellow;
        }

    }

    @media screen and (max-width: 900px){
        .changelog-data{
            margin-top: 20px;
            flex-direction: column;
            justify-content: flex-start;
            #message{
                max-width: 95%;
            }
            #date{
                width: 95%;
                border-right: 0;
                text-align:right;
            }
            
        }
    }

@media screen and (max-width: 500px) {
.changelog-data{
    width: 95%;
}

}

</style>