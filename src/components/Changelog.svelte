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
    ]

    const enter = (num) =>{
        changelogData[Math.abs(num)].id = num * -1;
    }
    
</script>

<main>
    {#each [...changelogData].reverse() as data} 
        <div class="changelog-data">
            <div on:mouseenter={enter(data.id)} on:mouseleave={enter(data.id)} id="date">{data.id >= 0 ? data.date : data.altdate}</div>
            <div  id="message">{data.message}</div>
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
    // border: 1px solid brown;
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
            color: #dddddd;
            text-shadow: 0 0 0 black;
        }
        div:hover{
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

</style>