// Javascript for detecting "bad" words
// Authors: Anton Minkov && Laney Deveson
// Date: 27/04/2021

//Function used to detect "bad" words based on a regex dictionary
function filterProfanity() {

  setInterval(function() {
    //Get all the fields that must be checked
    var elementsToCheck = document.getElementsByClassName("cell_check");
    var problemCounter = 0;

    for (var i = 0; i < parseInt(elementsToCheck.length); i++){
      var valueOfElement = "";
      var checkIfProfanity = "";

      //Use the regex expression to check the current field for profanities
      valueOfElement = String(elementsToCheck[i].innerHTML);
      checkIfProfanity = valueOfElement.match(/\b(nword|peepee|poopoo|poo|pp|dipshit|dumb|die|hoe|fak|4r5e|50yardcuntpunt|5h1t|5hit|a_s_s|a2m|a55|a55hole|adult|aeolus|ahole|amateur|anal|analimpaler|analleakage|analprobe|anilingus|anus|ar5e|areola|areole|arian|arrse|arse|arsehole|aryan|ass|assfuck|asshole|ass-fucker|assbang|assbanged|assbangs|asses|assfuck|assfucker|assfukka|assh0le|asshat|assho1e|asshole|assholes|assmaster|assmucus|assmunch|asswhole|asswipe|asswipes|autoerotic|azazel|azz|b!tch|b00bs|b17ch|b1tch|babe|babes|ballbag|ballsack|bang|bang(one's)box|bangbros|banger|bareback|barf|bastard|bastards|bawdy|beaner|beardedclam|beastial|beastiality|beatch|beater|beaver|beefcurtain|beer|beeyotch|bellend|beotch|bestial|bestiality|biatch|bigtits|bigtits|bimbo|bimbos|birdlock|bitch|bitchtit|bitched|bitcher|bitchers|bitches|bitchin|bitching|bitchy|bloody|blow|blowjob|blowme|blowmud|blowjob|blowjobs|bluewaffle|blumpkin|bod|bodily|boink|boiolas|bollock|bollocks|bollok|bone|boned|boner|boners|bong|boob|boobies|boobs|booby|booger|bookie|booobs|boooobs|booooobs|booooooobs|bootee|bootie|booty|booze|boozer|boozy|bosom|bosomy|bowel|bowels|bra|brassiere|breast|breasts|buceta|bugger|bukkake|bullshit|bullshit|bullshits|bullshitted|bullturds|bum|bung|bunnyfucker|bustaload|busty|butt|buttfuck|buttfuck|buttfuck|buttfucker|butthole|buttmuch|buttplug|c-0-c-k|c-o-c-k|c-u-n-t|c0ck|c0cksucker|caca|cahone|cameltoe|carpetmuncher|carpetmuncher|cawk|cervix|chinc|chincs|chink|choade|chode|chodes|chotabags|cipa|cl1t|climax|clit|clitlicker|clitoris|clitorus|clits|clitty|clittylitter|clusterfuck|cnut|cocain|cocaine|cock|cockpocket|cocksnot|cocksucker|cock-sucker|cockblock|cockface|cockhead|cockholster|cockknocker|cockmunch|cockmuncher|cocks|cocksmoker|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|coital|cok|cokmuncher|coksucka|commie|condom|coon|coons|copsomewood|corksucker|cornhole|corpwhore|cox|crabs|crack|cracker|crackwhore|crap|crappy|cum|cumchugger|cumdumpster|cumfreak|cumguzzler|cumdump|cummer|cummin|cumming|cums|cumshot|cumshots|cumslut|cumstain|cunilingus|cunillingus|cunnilingus|cunny|cunt|cunthair|cunt-struck|cuntbag|cuntface|cunthunter|cuntlick|cuntlick|cuntlicker|cuntlicker|cuntlicking|cunts|cuntsicle|cutrope|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d0ng|d0uch3|d0uche|d1ck|d1ld0|d1ldo|dago|dagos|dammit|damn|damned|damnit|dawgie-style|dick|dickhole|dickshy|dick-ish|dickbag|dickdipper|dickface|dickflipper|dickhead|dickheads|dickish|dickripper|dicksipper|dickweed|dickwhipper|dickzipper|diddle|dike|dildo|dildos|diligaf|dillweed|dimwit|dingle|dink|dinks|dipship|dirsa|dirtySanchez|dlck|dog-fucker|doggiestyle|doggie-style|doggiestyle|doggin|dogging|doggy-style|dong|donkeyribber|doofus|doosh|dopey|douch3|douche|douchebag|douchebags|douchey|drunk|duche|dumass|dumbass|dumbasses|dyke|dykes|eatadick|eathairpie|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|enlargement|erect|erection|erotic|essohbee|extacy|extasy|fuck|fucker|f_u_c_k|f-u-c-k|f4nny|facial|fack|fag|fagg|fagged|fagging|faggit|faggitt|faggot|faggs|fagot|fagots|fags|faig|faigt|fanny|fannybandit|fannyflaps|fannyfucker|fanyy|fart|fartknocker|fatass|fcuk|fcuker|fcuking|feck|fecker|felch|felcher|felching|fellate|fellatio|feltch|feltcher|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fisted|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|fisting|fisty|flange|flogthelog|floozy|foad|fondle|foobar|fook|fooker|foreskin|freex|frigg|frigga|fubar|fuck|fuck|fuckhole|fuckpuppet|fucktrophy|fuckyomama|fuck-ass|fuck-bitch|fuck-tard|fucka|fuckass|fucked|fucker|fuckers|fuckface|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fuckmeat|fucknugget|fucknut|fuckoff|fucks|fucktard|fucktoy|fuckup|fuckwad|fuckwhit|fuckwit|fudgepacker|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|fvck|fxck|g-spot|gae|gai|gang-bang|gangbang|gangbang|gangbanged|gangbangs|ganja|gassyass|gaysex|gey|gfy|ghay|ghey|gigolo|glans|goatse|god|goddamn|god-dam|god-damned|godamn|godamnit|goddam|goddammit|goddamn|goddamned|goldenshower|gonad|gonads|gook|gooks|gringo|gspot|gtfo|guido|h0m0|h0mo|hamflap|handjob|hardon|hardcoresex|he11|hebe|heeb|hell|hemp|heroin|herp|herpes|herpy|heshe|hitler|hiv|hoar|hoare|hobag|hoer|hom0|homey|homo|homoerotic|homoey|honky|hooch|hookah|hooker|hoor|hootch|hooter|hooters|hore|horniest|horny|hotsex|howtokill|howtomurdep|hump|humped|humping|hussy|hymen|inbred|incest|injun|j3rk0ff|jack-off|jackass|jackhole|jackoff|jap|japs|jerk|jerk-off|jerk0ff|jerked|jerkoff|jism|jiz|jizm|jizz|jizzed|junkie|junky|kawk|kike|kikes|kill|kinky|kinkyJesus|kkk|klan|knob|knobend|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kooch|kooches|kootch|kraut|kum|kummer|kumming|kums|kunilingus|kwif|kyke|l3itch|labia|lech|LEN|leper|lesbians|lesbo|lesbos|lez|lezbian|lezbians|lezbo|lezbos|lezzie|lezzies|lezzy|lmao|lmfao|loin|loins|lube|lust|lusting|lusty|m-fucking|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|mafugly|mams|masochist|massa|master-bate|masterb8|masterbat3|masterbate|masterbating|masterbation|masterbations|masturbate|masturbating|masturbation|maxi|menses|menstruate|menstruation|meth|mo-fo|mof0|mofo|molest|moolie|moron|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|motherfucker|motherfucker|motherfuck|motherfucka|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|mtherfucker|mthrfucker|mthrfucking|muff|muffpuff|muffdiver|murder|mutha|muthafecker|muthafuckaz|muthafucker|muthafuckker|muther|mutherfucker|mutherfucking|muthrfucking|n1gga|n1gger|nad|nads|naked|napalm|nappy|nazi|nazism|needthedick|negro|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|niggle|niglet|nimrod|ninny|nipple|nob|nobjokey|nobhead|nobjocky|nobjokey|nooky|numbnuts|nutbutter|nutsack|nympho|omg|opiate|opium|oral|orally|organ|orgasim|orgasims|orgasm|orgasmic|orgasms|orgies|orgy|ovary|ovum|ovums|p0rn|paddy|paki|pantie|panties|panty|pastie|pasty|pawn|pcp|pecker|pedo|pedophile|pedophilia|pedophiliac|pee|peepee|penetrate|penetration|penial|penile|penis|penisfucker|perversion|peyote|phalli|phallic|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pillowbiter|pimp|pimpis|pinko|piss|piss-off|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|pissoff|pms|polack|pollock|poon|poontang|poop|porn|porno|pornography|pornos|pot|potty|prick|pricks|prig|pron|prostitute|prude|pube|pubic|pubis|punkass|punky|puss|pusse|pussi|pussies|pussy|pussyfart|pussypalace|pussypounder|pussys|puto|queaf|queaf|queef|queer|queero|queers|quicky|quim|r-tard|racy|rape|raped|raper|rapist|raunch|rectal|rectum|rectus|reefer|reetard|reich|retard|retarded|revue|rimjaw|rimjob|rimming|ritard|rtard|rum|rump|rumprammer|ruski|shit|s_h_i_t|s-h-1-t|s-h-i-t|s-o-b|s0b|sadism|sadist|sandbar|sausagequeen|scag|scantily|schizo|schlong|screw|screwed|screwing|scroat|scrog|scrot|scrote|scrotum|scrud|scum|seaman|seamen|seduce|semen|sex|sexual|sh!t|sh1t|shag|shagger|shaggin|shagging|shamedame|shemale|shit|shitfucker|shitdick|shite|shiteater|shited|shitey|shitface|shitfuck|shitfull|shithead|shithole|shithouse|shiting|shitings|shits|shitt|shitted|shitter|shitters|shitting|shittings|shitty|shiz|sissy|skag|skank|slave|sleaze|sleazy|slope|slut|slutbucket|slutdumper|slutkiss|sluts|smegma|smut|smutty|snatch|sniper|snuff|sodom|son-of-a-bitch|souse|soused|spac|sperm|spic|spick|spik|spiks|spooge|spunk|steamy|stfu|stiffy|stoned|strip|stroke|stupid|suck|sucked|sucking|sumofabiatch|t1t|t1tt1e5|t1tties|tampon|tard|tawdry|teabagging|teat|teets|teez|terd|teste|testee|testes|testical|testicle|testis|thrust|thug|tinkle|tit|titwank|titfuck|titi|tits|titt|tittie5|tittiefucker|titties|titty|tittyfuck|tittyfucker|tittywank|titwank|toke|toots|tosser|tramp|transsexual|trashy|tubgirl|turd|tush|tw4t|twat|twathead|twats|twatty|twunt|twunter|ugly|undies|unwed|urinal|urine|uterus|uzi|v14gra|v1gra|vag|vagina|valium|viagra|virgin|vixen|vodka|vomit|voyeur|vulgar|vulva|w00se|wad|wang|wank|wanker|wanky|wazoo|wedgie|weed|weenie|weewee|weiner|weirdo|wench|wetback|wh0re|wh0reface|whitey|whiz|whoar|whoralicious|whore|whorealicious|whored|whoreface|whorehopper|whorehouse|whores|whoring|wigger|willies|willy|womb|woody|wop|wtf|x-rated|xrated|xxx|yeasty|yobbo|zoophile)\b/g);
      
      //Mark the field if any profanities are found
      if (checkIfProfanity != null) {
        if (checkIfProfanity.length>0){
          problemCounter += 1;
          elementsToCheck[i].style.backgroundColor = "red";
        }
      }
      else {
        elementsToCheck[i].style.backgroundColor = "#a0cce5";
      }
    }

    //Update the amount of problems detected
    counter_element = "Problems detected: " + String(problemCounter);
    document.getElementById("problem_counter").innerHTML = counter_element

    if (problemCounter > 0) {
      document.getElementById("problem_counter").style.color = "red"
    }
    else {
      document.getElementById("problem_counter").style.color = "green"
    }
  }, 250);  
}

