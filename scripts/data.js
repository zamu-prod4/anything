// line breaks are replaced with single spaces, use <br> instead (not required before <ul> elements)
// for names, if they exist, make the text a link to them
const articles = {
    home: {
        title: "Welcome to the Rooms: Diverse wiki!",
        content: `
        "Rooms: Diverse is a community-formed fangame of Rooms by nicorocks5555, 
        founded by Henry and ported by Ƶamu. 
        It is the official sequel to Rooms: Re-Established. 
        This game has a deep history, going back to September of 2023. 
        We hope you enjoy your time here." <br>
        <br>
        "ROOMS: DIVERSE - REFABRICATED is a fangame of Rooms by nicorocks5555. 
        It is the revival of Rooms: Diverse, which was made back in Sep 16, 2023. <br>
        This game aims to home more sections than Rooms: Re-Established. 
        As of writing this (02/19/25), this game has 96 sections, including admin 
        sections, secret sections and joke sections. <br>
        Due to the inexplicably huge amount of sections and the small amount of 
        people playing their parts on the game, some sections may lack entities." <br>
        <br>
        <h3>Links</h3>
        <ul>
            <li><a href='https://www.roblox.com/games/18487528718/ROOMS-DIVERSE-REFABRICATED'>Rooms: Diverse Refabricated</a></li>
            <li><a href='https://www.roblox.com/games/14925584339/Old'>Rooms: Diverse</a></li>
        </ul>
        <br>
        <div class='tab-section'>
            <div class='tabs'>
                <button class='tab-button active' data-tab='entities'>Entities</button>
                <button class='tab-button' data-tab='sections'>Sections</button>
                <button class='tab-button' data-tab='modifiers'>Modifiers</button>
            </div>
            <div class='tab-content' id='tab-entities'>
                <ul>
                    <li>
                        <a href='?article=a5' to='a5' class='link'>A-5</a>
                    </li>
                    <li>
                        <a href='?article=a20' to='a20' class='link'>A-20</a>
                    </li>
                </ul>
            </div>
            <div class='tab-content hidden' id='tab-sections'>TBA</div>
            <div class='tab-content hidden' id='tab-modifiers'>TBA</div>
        </div>
        `
    },
    a5: {
        title: "A-5",
        image: "images/a5-open.png",
        caption: "A-5 with its mouth open.",
        content: `
        <h3>Appearence</h3>
        A-5 is a small black smile with plus icons for eyes. <br>
        A-5 occasionally opens its mouth to let out noise. <br>
        A-5 emits white plus symbol particles. <br>
        <br>
        <h3>Behaviour</h3>
        A-5 is a wanderer entity, which can move through walls and exit the sides of the rooms. <br>
        A-5 does not deal any damage in normal cases. 
        <ul>
            <li>
                With the > DISTANCING > smaller modifier active, upon getting within 10 studs of A-5, 
                it will begin to damage the player at a rate of 60 HP/sec.'
            </li>
            <li>
                A-5 doesn't have a jumpscare.
            </li>
        </ul>
        There is a 1 in 75 chance of A-5 to turn into <a href='?article=anegative5' to='anegative5' class='link'>A--5</a>. 
        <ul>
            <li>
                When the cAcophony5 smaller modifier is enabled, this increases to 1 in 10.
            </li>
        </ul>
        Upon spawning, A-5 will emit a reversed chime. <br>
        A-5 emits a static noise as ambience. 
        <ul>
            <li>
                This static noise gets higher pitched every time A-5 opens its mouth.
            </li>
        </ul>
        <br>
        <h3>Lore/Fun Facts</h3>
        "A-5 is originally a Russian-Vietnamese but he prefers using English." - Henry <br>
        "A-5 sometimes swears in Vietnamese or Russian when bored or angry." - Henry <br>
        "A-5 was a human. He was taken in by the entities (instead of killing him) 
        and he was put into a capsule. He was transformed into A-5. He was transformed 
        in a form of a baby since the entities wanted to show the humans' incompetence." - <s>Z</s>amu 
        <ul>
            <li>
                "fun fact: A-5 isn't a child, he's a grown adult" - Henry
            </li>
        </ul>
        A-5 is bullied a lot by <a href='?article=a20' to='a20' class='link'>A-20</a>
        <ul>
            <li>
                "It's either they got roasted or A-5 just don't gaf." - Henry
            </li>
            <li>
                "A-5's roasts is complete destruction" - Henry
            </li>
        </ul>
        <br>
        <br>
        <br>
        <ul class='quote'>
            <li>
                Next entity: <a href='?article=a20' to='a20' class='link'>A-20</a>
            </li>
        </ul>`,
    },
    anegative5: {
        title: "A--5",
        image: "images/anegative5.png",
        caption: "A--5.",
        content: `
        Not to be confused with AA-5. <br>
        <br>
        <h3>Appearence</h3>
        A--5 takes the appearence of <a href='?article=a5' to='a5' class='link'>A-5</a>, 
        except glitched. <br>
        Like its normal version, A--5 emits plus symbol particles, but multicolored. <br>
        A--5's mouth stays closed longer than it stays open. <br>
        <br>
        <h3>Behaviour</h3>
        A--5 is a wanderer entity, which can move through walls and exit the sides of the rooms, 
        much like its normal counterpart. <br>A--5 doesn't deal damage. <br>
        There is a 1 in 75 chance for <a href='?article=a5' to='a5' class='link'>A-5</a> 
        to turn into A--5. 
        <ul>
            <li>
                When the cAcophony5 smaller modifier is enabled, this increases to 1 in 10.
            </li>
        </ul>
        <br>
        Upon spawning, A--5 will emit a reversed chime, but lower in pitch than 
        <a href='?article=a5' to='a5' class='link'>A-5</a>. <br>
        A-5 emits very harsh static noise as ambience. 
        <ul>
            <li>
                This static noise gets higher pitched every time A--5 opens its mouth.
            </li>
        </ul>`,
    },
    a20: {
        title: "A-20",
        image: "images/a20-colored.png",
        caption: "An image of A-20 (colored like its ingame form)",
        content: `
        <h3>Appearence</h3>
        A-20 appears as a red colored face that has a primary frowning expression. 
        It features teeth alongside more rows of teeth behind the first row along with 
        eyeballs inside of the mouth. A-20 also has teeth in the bloody scratched like eyes. <br>
        <br>
        <h3>Behaviour</h3>
        A-20 is a rusher entity. <br>
        Starting from behind the lobby, A-20 travels ~200 studs/sec. <br>
        Once the player is in direct line of sight with A-20, the player instantly dies. 
        <ul>
            <li>
                Before the update changing this, once the player was within 55 studs of A-20, the player would've instantly died.
            </li>
        </ul>
        There is a 1 in 500 chance of A-20 to be replaced with A+20.
        <ul>
            <li>
                When the energyDrinkOverdose..[?] smaller modifier is enabled, this increases to 1 in 50.
            </li>
        </ul>
        <br>
        Upon spawning, A-20 will emit a buzzing sound followed by a lower pitched buzzing sound. <br>
        After around 9 seconds, A-20 will emit a harsh robotic screaming noise. <br>
        When A-20 is far away, it will emit a muffled robotic screaming noise. Once A-20 gets close 
        enough, the noise will become harsher. <br>
        <br>
        <h3>Lore/Fun Facts</h3>
        "When A-20 turns into A+20, the process is actually a replacement not a transformation." - Henry <br>
        "A-20 knows Expansive A-20" - Werx <br>
        "A-20 fears feeling/being weak and vulnerable." - Henry <br>
        "A-20 is a bully" - Henry <br>
        "A+20 and A-20 are nice to eachother, but bully others a lot, specifically they like 
        bullying <a href='?article=a5' to='a5' class='link'>A-5</a>" - Werx 
        <ul>
            <li>
                "Despite being roast a lot by him" - Henry
            </li>
        </ul>
        <br>
        <br>
        <br>
        <ul class='quote'>
            <li>
                Previous entity: <a href='?article=a5' to='a5' class='link'>A-5</a>
            </li>
        </ul>`,
    },
};
