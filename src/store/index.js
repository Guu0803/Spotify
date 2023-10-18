import { createStore } from 'vuex'

export default createStore({
  state: {
    playlistMixIndie: [
      {
        name: 'Dead Boys',
        artist: 'Sam Fender',
        album: 'Hypersonic Missiles',
        albumCover: require('@/assets/hypersonic-album.png'),
        duration: "3:23",
        about: {
          cover: require('@/assets/sobre-fender.png'),
          listeners: '3.545.784',
          info: "If Sam Fender  debut album, 2019  'Hypersonic Missiles', introduced a smart, street-wise British songwriter with a penchant for euphoric, hard-hitting guitar anthems, it was 2021  peerless 'Seventeen Going Under' that sent the Newcastle artist stratospheric. "
        },
        added: new Date('2022-05-08'),
      },
      {
        name: 'Wonderful Life - edit',
        artist: 'Two Door Cinema Club',
        album: 'Wonderful Life',
        albumCover: require('@/assets/wonderful-album.png'),
        duration: "3:06",
        about: {
          cover: require('@/assets/sobre-two-door.png'),
          listeners: '7.863.683',
          info: "Mixing guitar-driven, post-punk hooks with dancey, electronic polish, Northern Ireland's Two Door Cinema Club first gained attention with 2010's Tourist History and singles like 'Something Good Can Work' and 'Undercover Martyn.' The record hit number one on the Irish independent albums chart, and landed on the BBC Sound of 2010 Poll."
        },
        added: new Date('2022-07-16'),
      },
      {
        name: 'Fire That Burns',
        artist: 'Circa Waves',
        album: 'Different Creatures',
        albumCover: require('@/assets/different-album.png'),
        duration: "3:50",
        about: {
          cover: require('@/assets/sobre-circa.png'),
          listeners: '1.234.457',
          info: "Known for their nervy, melodic indie rock, Britain's Circa Waves first gained buzz in the 2010s with hooky singles like 'Get Away' and 'Stuck in My' Teeth."
        },
        added: new Date('2023-10-13'),

      },
      {
        name: 'Come Around',
        artist: 'Corella',
        album: 'Come Around',
        albumCover: require('@/assets/come-around-album.png'),
        duration: "3:14",
        about: {
          cover: require('@/assets/sobre-corella.png'),
          listeners: '444.830',
          info: " 'Corella set the tone and the bar very high' - BBC Radio 1. Widescreen indie blessed with emphatic ambition, the results speak for themselves - Clash Magazine"
        },
        added: new Date('2021-01-04'),
      },
      {
        name: 'Amsterdam',
        artist: 'Nothing But Thieves',
        album: 'Broken Machine (Deluxe)',
        albumCover: require('@/assets/broken-album.png'),
        duration: "4:32",
        about: {
          cover: require('@/assets/sobre-nothing.png'),
          listeners: '5.990.403',
          info: 'Hailing from Southend-on-Sea in Essex, England, Nothing But Thieves make passionate guitar-based rock that balances indie artfulness with a pop sensibility'
        },
        added: new Date('2021-08-13'),
      }
    ],
    playlistMusicasCurtidas: [
      {
        name: 'Lights Down',
        artist: 'Luna Bay',
        album: 'Lights Down',
        albumCover: require('@/assets/lights-down-album.png'),
        duration: "3:08",
        about: {
          cover: require('@/assets/sobre-luna-bay.png'),
          listeners: '53.884',
          info: "Luna Bay released their first, self titled, EP in November 2019 surrounding a headline UK Tour. The indie-rock quartet later finished 2019 with a sold out headline show at London's Scala'"
        },
        added: new Date('2023-10-06'),
      },
      {
        name: 'Do You Have a Name',
        artist: 'Glass Caves',
        album: 'Do You Have a Name',
        albumCover: require('@/assets/have-a-name.png'),
        duration: "3:30",
        about: {
          cover: require('@/assets/sobre-glass.png'),
          listeners: '38.177',
          info: 'Yorkshire puds x'
        },
        added: new Date('2023-10-07'),
      },
      {
        name: "Don't Take The Money",
        artist: 'Bleachers',
        album: 'Gone Now',
        albumCover: require('@/assets/gone-now-album.png'),
        duration: "3:35",
        about: {
          cover: require('@/assets/sobre-bleachers.png'),
          listeners: '4.766.160',
          info: 'new jersey'
        },
        added: new Date('2023-10-08')
      },
      {
        name: 'Static',
        artist: 'Ryan McMullan',
        album: 'Static',
        albumCover: require('@/assets/static-album.png'),
        duration: "3:07",
        about: {
          cover: require('@/assets/sobre-ryan.png'),
          listeners: '874.836',
          info: "Ryan McMullan s voice is in a class of its own; clear and powerful, soul-stirring and soaring over the captivating melodies that he crafts. Its no wonder that he is now being recognised as one of Northern Ireland biggest and brightest talents."
        },
        added: new Date('2021-12-30')
      },
      {
        name: 'Sure Enough',
        artist: 'Two Door Cinema Club',
        album: 'Sure Enough',
        albumCover: require('@/assets/sure-enough.png'),
        duration: "2:51",
        about: {
          cover: require('@/assets/sobre-two-door.png'),
          listeners: '7.863.683',
          info: "Mixing guitar-driven, post-punk hooks with dancey, electronic polish, Northern Ireland's Two Door Cinema Club first gained attention with 2010's Tourist History and singles like 'Something Good Can Work' and 'Undercover Martyn.' The record hit number one on the Irish independent albums chart, and landed on the BBC Sound of 2010 Poll."
        },
        added: new Date('2021-11-15')
      },
    ],
    playlistIndieVibration: [
      {
        name: 'Hypersonic Missiles',
        artist: 'Sam Fender',
        album: 'Hypersonic Missiles',
        albumCover: require('@/assets/hypersonic-album.png'),
        duration: "3:57",
        about: {
          cover: require('@/assets/sobre-fender.png'),
          listeners: '3.545.784',
          info: "If Sam Fender  debut album, 2019  'Hypersonic Missiles', introduced a smart, street-wise British songwriter with a penchant for euphoric, hard-hitting guitar anthems, it was 2021  peerless 'Seventeen Going Under' that sent the Newcastle artist stratospheric. "
        },
        added: new Date('2022-05-03'),
      },
      {
        name: 'What You Know',
        artist: 'Two Door Cinema Club',
        album: 'Tourist History',
        albumCover: require('@/assets/tourist-album.png'),
        duration: "3:11",
        about: {
          cover: require('@/assets/sobre-two-door.png'),
          listeners: '7.863.683',
          info: "Mixing guitar-driven, post-punk hooks with dancey, electronic polish, Northern Ireland's Two Door Cinema Club first gained attention with 2010's Tourist History and singles like 'Something Good Can Work' and 'Undercover Martyn.' The record hit number one on the Irish independent albums chart, and landed on the BBC Sound of 2010 Poll."
        },
        added: new Date('2019-07-09'),
      },
      {
        name: 'Oceans',
        artist: 'The Blue Stones',
        album: 'Hidden Gems',
        albumCover: require('@/assets/hidden-gems-album.png'),
        duration: "5:09",
        about: {
          cover: require('@/assets/sobre-blue.png'),
          listeners: '818.657',
          info: "Since bursting onto the scene with their acclaimed debut album Black Holes, The Blue Stones have delivered a crowd-thrilling live show that defies the laws of physics, generating an impossibly massive sound from its two members alone."
        },
        added: new Date('2019-05-09'),
      },
      {
        name: 'Friday Fighting',
        artist: 'Sam Fender',
        album: 'Friday Fighting',
        albumCover: require('@/assets/friday-album.png'),
        duration: "3:10",
        about: {
          cover: require('@/assets/sobre-fender.png'),
          listeners: '3.545.784',
          info: "If Sam Fender  debut album, 2019  'Hypersonic Missiles', introduced a smart, street-wise British songwriter with a penchant for euphoric, hard-hitting guitar anthems, it was 2021  peerless 'Seventeen Going Under' that sent the Newcastle artist stratospheric. "
        },
        added: new Date('2018-08-06'),
      },
      {
        name: 'This Feels Like the End',
        artist: 'Nothing But Thieves',
        album: 'Moral Panic',
        albumCover: require('@/assets/moral-album.png'),
        duration: "4:02",
        about: {
          cover: require('@/assets/sobre-nothing.png'),
          listeners: '5.990.403',
          info: 'Hailing from Southend-on-Sea in Essex, England, Nothing But Thieves make passionate guitar-based rock that balances indie artfulness with a pop sensibility'
        },
        added: new Date('2021-09-14'),
      }
    ],
    playlistCountry: [
      {
        name: 'Beautiful Drug',
        artist: 'Zac Brown Band',
        album: 'JEKYLL + HYDE ',
        albumCover: require('@/assets/jekyll-album.png'),
        duration: "3:11",
        about: {
          cover: require('@/assets/sobre-zac.png'),
          listeners: '9.808.079',
          info: 'Zac Brown Band is a multi-platinum, Grammy Award-winning, Southern rock group led by front man, Zac Brown. Throughout their career spanning more than a decade, Zac Brown Band has had six consecutive albums reach the top 10 of the Billboard 200 and five consecutive albums debut at #1 on Billboards Country Albums chart.'
        },
        added: new Date('2015-02-14'),
      },
      {
        name: 'At the End of a Bar',
        artist: 'Chris Young',
        album: 'Famous Friends',
        albumCover: require('@/assets/famous-friends.png'),
        duration: "3:06",
        about: {
          cover: require('@/assets/sobre-chris.png'),
          listeners: '5.000.096',
          info: 'With a dark baritone well beyond his years and a keen ear for the melodic country music of his childhood, Chris Young went from Nashville Star champion to actual Nashville star over the course of just a few years.'
        },
        added: new Date('2015-07-14'),
      },
      {
        name: 'Roots',
        artist: 'Zac Brown Band',
        album: 'Welcome Home',
        albumCover: require('@/assets/welcome-album.png'),
        duration: "3:01",
        about: {
          cover: require('@/assets/sobre-zac.png'),
          listeners: '9.808.079',
          info: 'Zac Brown Band is a multi-platinum, Grammy Award-winning, Southern rock group led by front man, Zac Brown. Throughout their career spanning more than a decade, Zac Brown Band has had six consecutive albums reach the top 10 of the Billboard 200 and five consecutive albums debut at #1 on Billboards Country Albums chart.'
        },
        added: new Date('2015-02-19'),
      },
      {
        name: 'Losing Sleep',
        artist: 'Chris Young',
        album: 'Losing Sleep',
        albumCover: require('@/assets/losing-album.png'),
        duration: "2:58",
        about: {
          cover: require('@/assets/sobre-chris.png'),
          listeners: '5.000.096',
          info: 'With a dark baritone well beyond his years and a keen ear for the melodic country music of his childhood, Chris Young went from Nashville Star champion to actual Nashville star over the course of just a few years.'
        },
        added: new Date('2015-11-14'),
      },
      {
        name: 'Play It Again',
        artist: 'Luke Bryan',
        album: 'Crash My Party',
        albumCover: require('@/assets/crash-my-album.png'),
        duration: "3:46",
        about: {
          cover: require('@/assets/sobre-luke.png'),
          listeners: '10.873.040',
          info: 'Country music superstar and television personality Luke Bryan has released 30 No. 1 hits, garnered nearly 20 billion worldwide streams and has more RIAA certified digital single certifications than any other Country artist of all time with 83 Million with overall career RIAA certifications totaling 98.5 Million.'
        },
        added: new Date('2015-12-14'),
      }
    ],
    playlistMixRelax: [
      {
        name: 'Another Minute with You',
        artist: 'Ryan McMullan',
        album: 'The "Debut" Mix Tape',
        albumCover: require('@/assets/debut-album.png'),
        duration: "2:44",
        about: {
          cover: require('@/assets/sobre-ryan.png'),
          listeners: '874.836',
          info: "Ryan McMullan s voice is in a class of its own; clear and powerful, soul-stirring and soaring over the captivating melodies that he crafts. Its no wonder that he is now being recognised as one of Northern Ireland biggest and brightest talents."
        },
        added: new Date('2015-09-28')
      },
      {
        name: 'We Could Star a War',
        artist: "Somebody's Child",
        album: "Somebody's Child",
        albumCover: require('@/assets/somebody-album.png'),
        duration: "3:37",
        about: {
          cover: require('@/assets/sobre-somebody.png'),
          listeners: '174.438',
          info: 'Starting his musical journey aged five in Paris, Cian Godfrey (aka Somebody s Child) took to playing the piano in the family apartment. Upon moving back to Ireland, he gained an interest in songwriting, enabling him to tell his own stories. '
        },
        added: new Date('2018-02-14'),
      },
      {
        name: 'Oceanside',
        artist: 'Dennis Lloyd',
        album: 'Oceanside',
        albumCover: require('@/assets/oceanside-album.png'),
        duration: "2:48",
        about: {
          cover: require('@/assets/sobre-dennis.png'),
          listeners: '7.219.743',
          info: 'I make music and I love dogs.'
        },
        added: new Date('2023-06-20'),
      },
      {
        name: 'GFY',
        artist: 'Dennis Lloyd',
        album: 'Exident',
        albumCover: require('@/assets/exident-album.png'),
        duration: "3:06",
        about: {
          cover: require('@/assets/sobre-dennis.png'),
          listeners: '7.219.743',
          info: 'I make music and I love dogs.'
        },
        added: new Date('2021-05-21'),
      },
      {
        name: "Nothing's on Fire",
        artist: 'The Holdup',
        album: 'Leaves in the Pool',
        albumCover: require('@/assets/leaves-in-the-pool-album.png'),
        duration: "3:22",
        about: {
          cover: require('@/assets/sobre-holdup.png'),
          listeners: '329.159',
          info: 'Coming from San Jose, CA, The Holdup has built a cult following writing and producing his own brand of groovy, melody driven, pop music, borrowing influences from R&B, reggae, and hip hop. '
        },
        added: new Date('2015-02-14'),
      }
    ],
    playlistSessions: [
      {
        name: 'fan behavior',
        artist: 'Isaac Dunbar',
        album: 'evil twin',
        albumCover: require('@/assets/evil-twin-album.png'),
        duration: "3:02",
        about: {
          cover: require('@/assets/sobre-isaac.png'),
          listeners: '606.576',
          info: "Isaac Dunbar merges elements of alt-pop, smooth R&B, and woozy dance music into his musically whimsical, lyrically earnest songs. He released his debut EP, balloons don't float here, as a high schooler in 2019, leading to his major-label debut, isaac's insects, the following year. "
        },
        added: new Date('2022-02-14'),
        collaborators:  require('@/assets/user-dry.png')
      },
      {
        name: 'OXOX',
        artist: 'Dutch Melrose',
        album: 'OXOX',
        albumCover: require('@/assets/oxox-album.png'),
        duration: "2:32",
        about: {
          cover: require('@/assets/sobre-dutch.png'),
          listeners: '1.217.437',
          info: 'forever in my feels - IG @dutchmelrose'
        },
        added: new Date('2013-07-14'),
        collaborators:  require('@/assets/user-vih.png')
      },
      {
        name: 'Play God',
        artist: 'Sam Fender',
        album: 'Hypersonic Missiles',
        albumCover: require('@/assets/hypersonic-album.png'),
        duration: "3:46",
        about: {
          cover: require('@/assets/sobre-fender.png'),
          listeners: '3.545.784',
          info: "If Sam Fender  debut album, 2019  'Hypersonic Missiles', introduced a smart, street-wise British songwriter with a penchant for euphoric, hard-hitting guitar anthems, it was 2021  peerless 'Seventeen Going Under' that sent the Newcastle artist stratospheric. "
        },
        added: new Date('2022-06-19'),
        collaborators:  require('@/assets/img-user.png')
      },
      {
        name: 'Good Ideas',
        artist: 'The Blue Stones',
        album: 'Pretty Monster',
        albumCover: require('@/assets/pretty-monster-album.png'),
        duration: "3:19",
        about: {
          cover: require('@/assets/sobre-blue.png'),
          listeners: '818.657',
          info: "Since bursting onto the scene with their acclaimed debut album Black Holes, The Blue Stones have delivered a crowd-thrilling live show that defies the laws of physics, generating an impossibly massive sound from its two members alone."
        },
        added: new Date('2012-02-14'),
        collaborators:  require('@/assets/img-user.png')

      },
      {
        name: 'Silent Sky',
        artist: 'Lofi Leif',
        album: 'Silent Sky',
        albumCover: require('@/assets/lofi-leif-album.png'),
        duration: "2:20",
        about: {
          cover: require('@/assets/sobre-lofi-leif.png'),
          listeners: '61.629',
          info: 'nothing'
        },
        added: new Date('2019-07-18'),
        collaborators:  require('@/assets/user-dry.png')
      }
    ],
    playlistDescobertas: [
      {
        name: 'silent stranger',
        artist: 'Against The Current',
        album: 'silent stranger',
        albumCover: require('@/assets/silent-album.png'),
        duration: "3:29",
        about: {
          cover: require('@/assets/sobre-against.png'),
          listeners: '4.620.084',
          info: 'Against The Current is made up of singer Chrissy Costanza, guitarist Dan Gow, and drummer, Will Ferri. ATC has earned accolades and a faithful following with their brand of pop, rock, and indie sounds.'
        },
        added: new Date('2023-05-14'),
      },
      {
        name: 'wrong way',
        artist: 'Dead Lakes',
        album: 'daydreamer',
        albumCover: require('@/assets/daydreamer-album.png'),
        duration: "3:08",
        about: {
          cover: require('@/assets/sobre-dead-lakes.png'),
          listeners: '100.238',
          info: 'A BAND'
        },
        added: new Date('2010-08-14'),
      },
      {
        name: 'Revolution',
        artist: 'Bishop Briggs',
        album: 'Revolution',
        albumCover: require('@/assets/revolution-album.png'),
        duration: "3:06",
        about: {
          cover: require('@/assets/sobre-bishop.png'),
          listeners: '3.905.258',
          info: 'Born in London to Scottish parents, Bishop Briggs grew up in Japan and Hong Kong. Days after graduating high school, she moved to Los Angeles where, after years of performing at any venue that would have her, she was discovered in a small hole-in-the-wall by a former-A&R rep and the rest was history.'
        },
        added: new Date('2022-10-20'),
      },
      {
        name: 'In My Mind',
        artist: 'The Amazonas',
        album: 'The Amazonas (Deluxe)',
        albumCover: require('@/assets/the-amazonas-album.png'),
        duration: "3:50",
        about: {
          cover: require('@/assets/sobre-amazonas.png'),
          listeners: '260.220',
          info: 'last gang in town'
        },
        added: new Date('2017-07-01'),
      },
      {
        name: 'Sinner',
        artist: 'Of Virtue',
        album: 'Sinner',
        albumCover: require('@/assets/sinner-album.png'),
        duration: "3:13",
        about: {
          cover: require('@/assets/sobre-virtue.png'),
          listeners: '645.245',
          info: 'Progression, or more generally, change, is a constant in music; in order to adapt and survive, you must grow and develop - and no band knows that more than Lansing, MI metal act Of Virtue.'
        },
        added: new Date('2015-11-10'),
      }
    ],
    thisIsNothingBut: [
      {
        name: 'Welcome to the DCC',
        artist: 'Nothing But Thieves',
        album: 'Welcome to the DCC',
        albumCover: require('@/assets/to-dcc-album.png'),
        duration: "3:18",
        about: {
          cover: require('@/assets/sobre-nothing.png'),
          listeners: '5.990.403',
          info: 'Hailing from Southend-on-Sea in Essex, England, Nothing But Thieves make passionate guitar-based rock that balances indie artfulness with a pop sensibility'
        },
        added: new Date('2023-09-14'),
      },
      {
        name: 'Overcome',
        artist: 'Nothing But Thieves',
        album: 'Dead Club City',
        albumCover: require('@/assets/dead-club-album.png'),
        duration: "3:34",
        about: {
          cover: require('@/assets/sobre-nothing.png'),
          listeners: '5.990.403',
          info: 'Hailing from Southend-on-Sea in Essex, England, Nothing But Thieves make passionate guitar-based rock that balances indie artfulness with a pop sensibility'
        },
        added: new Date('2023-06-30'),
      },
      {
        name: 'Amsterdam',
        artist: 'Nothing But Thieves',
        album: 'Broken Machine (Delux)',
        albumCover: require('@/assets/broken-album.png'),
        duration: "4:32",
        about: {
          cover: require('@/assets/sobre-nothing.png'),
          listeners: '5.990.403',
          info: 'Hailing from Southend-on-Sea in Essex, England, Nothing But Thieves make passionate guitar-based rock that balances indie artfulness with a pop sensibility'
        },
        added: new Date('2017-09-08'),
      },
      {
        name: 'Sorry',
        artist: 'Nothing But Thieves',
        album: 'Broken Machine (Delux)',
        albumCover: require('@/assets/broken-album.png'),
        duration: "3:35",
        about: {
          cover: require('@/assets/sobre-nothing.png'),
          listeners: '5.990.403',
          info: 'Hailing from Southend-on-Sea in Essex, England, Nothing But Thieves make passionate guitar-based rock that balances indie artfulness with a pop sensibility'
        },
        added: new Date('2015-02-14'),
      },
      {
        name: 'Honey Whiskey',
        artist: 'Nothing But Thieves',
        album: 'Nothing But Thieves (Delux)',
        albumCover: require('@/assets/nothing-album.png'),
        duration: "3:11",
        about: {
          cover: require('@/assets/sobre-nothing.png'),
          listeners: '5.990.403',
          info: 'Hailing from Southend-on-Sea in Essex, England, Nothing But Thieves make passionate guitar-based rock that balances indie artfulness with a pop sensibility'
        },
        added: new Date('2015-10-16'),
      }
    ],
    playlistMixMetal: [
      {
        name: 'Dissonance',
        artist: "We're Wolves",
        album: 'Dissonance',
        albumCover: require('@/assets/dissonance-album.png'),
        duration: "4:00",
        about: {
          cover: require('@/assets/sobre-were.png'),
          listeners: '49.081',
          info: "We re Wolves is a dark humored, anthemic blend of metal sub-genres and hard rock hailing from West Palm Beach, Florida. They are pushing the boundaries of entertainment through satirical yet theatrical visuals to enhance their carefully crafted sound."
        },
        added: new Date('2018-05-15'),
        explicit: true
      },
      {
        name: 'Obey (with YUNGBLUD)',
        artist: 'Bring Me The Horizon',
        album: 'POST HUMAN: SURVIVAL HORROR',
        albumCover: require('@/assets/post-album.png'),
        duration: "3:41",
        about: {
          cover: require('@/assets/sobre-bring.png'),
          listeners: '13.248.653',
          info: 'ʙʀɪɴɢ ᴍᴇ ᴛʜᴇ ʜᴏʀɪᴢᴏɴ https://www.bmthofficial.com'
        },
        added: new Date('2015-02-14'),
        explicit: true
      },
      {
        name: 'Riot',
        artist: 'Escape The Day',
        album: 'Riot',
        albumCover: require('@/assets/riot-album.png'),
        duration: "3:10",
        about: {
          cover: require('@/assets/sobre-escape.png'),
          listeners: '34.310',
          info: 'ESCAPE THE DAY is a trance-metal act from Gothenburg, Sweden which was founded in 2007. Since the early beginning ETD have built an international fanbase spreading over all different ages and cultures.'
        },
        added: new Date('2021-11-05'),
      },
      {
        name: 'Alone In a Room',
        artist: 'Asking Alexandria',
        album: 'Asking Alexandria',
        albumCover: require('@/assets/asking-album.png'),
        duration: "4:06",
        about: {
          cover: require('@/assets/sobre-asking.png'),
          listeners: '3.405.726',
          info: "Metal Hammer declared See Whats On The Inside (2021), 'an outrageously infectious ode to classic rock.' Forbes noted the album's visceral connection to early Asking Alexandria influences like Guns N Roses, Metallica, and Pantera. "
        },
        added: new Date('2017-12-15'),
        explicit: true
      },
      {
        name: 'Lock Me Up',
        artist: 'Paloma',
        album: 'Lock Me Up',
        albumCover: require('@/assets/lock-me-album.png'),
        duration: "3:26",
        about: {
          cover: require('@/assets/sobre-paloma.png'),
          listeners: '42.046',
          info: 'Their debut single My Oh My  revolves around one persons obsessive-turned abusive love for another. It speaks of building the strength to leave someone who can t grasp a reality where their wants aren t meant to be, which ends up tearing apart a toxic relationship for the better.'
        },
        added: new Date('2020-06-26'),
      }
    ],
    playlistDailyMix: [
      {
        name: 'Welcome to the DCC',
        artist: 'Nothing But Thieves',
        album: 'Welcome to the DCC',
        albumCover: require('@/assets/to-dcc-album.png'),
        duration: "3:18",
        about: {
          cover: require('@/assets/sobre-nothing.png'),
          listeners: '5.990.403',
          info: 'Hailing from Southend-on-Sea in Essex, England, Nothing But Thieves make passionate guitar-based rock that balances indie artfulness with a pop sensibility'
        },
        added: new Date('2023-09-14'),
      },
      {
        name: 'Sure Enough',
        artist: 'Two Door Cinema Club',
        album: 'Sure Enough',
        albumCover: require('@/assets/sure-enough.png'),
        duration: "2:51",
        about: {
          cover: require('@/assets/sobre-two-door.png'),
          listeners: '7.863.683',
          info: "Mixing guitar-driven, post-punk hooks with dancey, electronic polish, Northern Ireland's Two Door Cinema Club first gained attention with 2010's Tourist History and singles like 'Something Good Can Work' and 'Undercover Martyn.' The record hit number one on the Irish independent albums chart, and landed on the BBC Sound of 2010 Poll."
        },
        added: new Date('2021-11-15'),
      },
      {
        name: 'Healing',
        artist: 'The Blue Stones',
        album: 'Pretty Monster',
        albumCover: require('@/assets/pretty-monster-album.png'),
        duration: "3:20",
        about: {
          cover: require('@/assets/sobre-blue.png'),
          listeners: '818.657',
          info: "Since bursting onto the scene with their acclaimed debut album Black Holes, The Blue Stones have delivered a crowd-thrilling live show that defies the laws of physics, generating an impossibly massive sound from its two members alone."
        },
        added: new Date('2017-12-18'),
      },
      {
        name: 'Never Going Under',
        artist: 'Circa Waves',
        album: 'Never Going Under',
        albumCover: require('@/assets/never-going-album.png'),
        duration: "2:14",
        about: {
          cover: require('@/assets/sobre-circa.png'),
          listeners: '1.234.457',
          info: "Known for their nervy, melodic indie rock, Britain's Circa Waves first gained buzz in the 2010s with hooky singles like 'Get Away' and 'Stuck in My' Teeth."
        },
        added: new Date('2023-01-13'),
      },
      {
        name: 'Bad Decisions',
        artist: 'Bastille',
        album: 'Doom Days',
        albumCover: require('@/assets/doom-days-album.png'),
        duration: "3:10",
        about: {
          cover: require('@/assets/sobre-bastille.png'),
          listeners: '19.046.902',
          info: 'The bands chart-conquering debut album “Bad Blood”, which featured the international hit, Pompeii, drove Bastille to became 2013s biggest-selling global breakthrough act, with over a billion Spotify streams.'
        },
        added: new Date('2019-06-14'),
      }
    ],
    episodes: [
      {
        name: 'Paciente 63',
        episodeName: 'T1E9: Entrelaçamento',
        description: 'Sessão Extraodinária.Linhas de tempo que se cruzam. Elisa se rende -talvez por essa razão- diante de um plano que a ciência não pode confirmar. O paciente 63 reaparece para deixar um último registro.',
        albumCover: require('@/assets/paciente-63.png'),
        added: new Date('2021-10-14'),
      },
      {
        name: 'França e o Labirinto',
        episodeName: '02. Modus operandi',
        description: 'Com a ajuda da ex-esposa, a perita criminal Angela, o detetive vai atrás de pistas. Uma viagem pelo passado leva França até alguém que domina o caso do Assasino do Labirinto tão bem quanto ele, mas a conversa não sai como esperado.',
        albumCover: require('@/assets/frança-album.png'),
        added: new Date('2023-08-01'),
      },
    ],
    musicNow: {
      name: 'Dead Boys',
      artist: 'Sam Fender',
      albumCover: require('@/assets/hypersonic-album.png'),
      duration: "3:23",
      about: {
        cover: require('@/assets/sobre-fender.png'),
        listeners: '3.545.784',
        info: "If Sam Fender  debut album, 2019  'Hypersonic Missiles', introduced a smart, street-wise British songwriter with a penchant for euphoric, hard-hitting guitar anthems, it was 2021  peerless 'Seventeen Going Under' that sent the Newcastle artist stratospheric. "
      },
      playlist: 'Sam Fender'
    },
    download: false,
    favorite: false,

    listOfArtists: [
      {
        artist: 'Sam Fender',
        name: 'Dead Boys',
        album: 'Hypersonic Missiles',
        about: {
          cover: require('@/assets/sobre-fender.png'),
          listeners: '3.545.784',
          info: "If Sam Fender  debut album, 2019  'Hypersonic Missiles', introduced a smart, street-wise British songwriter with a penchant for euphoric, hard-hitting guitar anthems, it was 2021  peerless 'Seventeen Going Under' that sent the Newcastle artist stratospheric. "
        },
        albumCover: require('@/assets/hypersonic-album.png'),
        duration: "3:23",
        reproductions: '13.082.021',
        artistCover: require('@/assets/sam-fender.png')
      },
      {
        artist: 'Two Door Cinema Club',
        name: 'Wonderful Life - edit',
        album: 'Wonderful Life',
        albumCover: require('@/assets/wonderful-album.png'),
        duration: "3:06",
         about: {
          cover: require('@/assets/sobre-two-door.png'),
          listeners: '7.863.683',
          info: "Mixing guitar-driven, post-punk hooks with dancey, electronic polish, Northern Ireland's Two Door Cinema Club first gained attention with 2010's Tourist History and singles like 'Something Good Can Work' and 'Undercover Martyn.' The record hit number one on the Irish independent albums chart, and landed on the BBC Sound of 2010 Poll."
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/two-door.png')
      },
      {
        artist: 'Circa Waves',
        album: 'Different Creatures',
        name: 'Fire That Burns',
        albumCover: require('@/assets/different-album.png'),
        duration: "3:50",
        about: {
          cover: require('@/assets/sobre-circa.png'),
          listeners: '1.234.457',
          info: "Known for their nervy, melodic indie rock, Britain's Circa Waves first gained buzz in the 2010s with hooky singles like 'Get Away' and 'Stuck in My' Teeth."
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/circa-waves.png')
      },
      {
        name: 'Come Around',
        album: 'Come Around',
        artist: 'Corella',
        about: {
          cover: require('@/assets/sobre-corella.png'),
          listeners: '444.830',
          info: " 'Corella set the tone and the bar very high' - BBC Radio 1. Widescreen indie blessed with emphatic ambition, the results speak for themselves - Clash Magazine"
        },
        albumCover: require('@/assets/come-around-album.png'),
        duration: "3:14",
        reproductions: '13.082.021',
        artistCover: require('@/assets/corella.png')
      },
      {
        artist: 'Nothing But Thieves',
        album: 'Broken Machine (Deluxe)',
        name: 'Amsterdam',
        albumCover: require('@/assets/broken-album.png'),
        duration: "4:32",
        about: {
          cover: require('@/assets/sobre-nothing.png'),
          listeners: '5.990.403',
          info: 'Hailing from Southend-on-Sea in Essex, England, Nothing But Thieves make passionate guitar-based rock that balances indie artfulness with a pop sensibility'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/nothing-but.png')
      },
      {
        artist: 'Luna Bay',
        album: 'Lights Down',
        name: 'Lights Down',
        albumCover: require('@/assets/lights-down-album.png'),
        duration: "3:08",
        about: {
          cover: require('@/assets/sobre-luna-bay.png'),
          listeners: '53.884',
          info: "Luna Bay released their first, self titled, EP in November 2019 surrounding a headline UK Tour. The indie-rock quartet later finished 2019 with a sold out headline show at London's Scala'"
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/luna-bay.png')
      },
      {
        artist: 'Glass Caves',
        album: 'Do You Have a Name',
        name: 'Do You Have a Name',
        albumCover: require('@/assets/have-a-name.png'),
        duration: "3:30",
        about: {
          cover: require('@/assets/sobre-glass.png'),
          listeners: '38.177',
          info: 'Yorkshire puds x'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/glass-caves.png')
      },
      {
        artist: 'Bleachers',
        album: 'Gone Now',
        name: "Don't Take The Money",
        albumCover: require('@/assets/gone-now-album.png'),
        duration: "3:35",
        about: {
          cover: require('@/assets/sobre-bleachers.png'),
          listeners: '4.766.160',
          info: 'new jersey'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/bleachers.png')
      },
      {
        artist: 'Ryan McMullan',
        album: 'Static',
        name: 'Static',
        albumCover: require('@/assets/static-album.png'),
        duration: "3:07",
        about: {
          cover: require('@/assets/sobre-ryan.png'),
          listeners: '874.836',
          info: "Ryan McMullan s voice is in a class of its own; clear and powerful, soul-stirring and soaring over the captivating melodies that he crafts. Its no wonder that he is now being recognised as one of Northern Ireland biggest and brightest talents."
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/ryan-mcMullan.png')
      },
      {
        name: 'Oceans',
        album: 'Hidden Gems',
        albumCover: require('@/assets/hidden-gems-album.png'),
        duration: "5:09",
        about: {
          cover: require('@/assets/sobre-blue.png'),
          listeners: '818.657',
          info: "Since bursting onto the scene with their acclaimed debut album Black Holes, The Blue Stones have delivered a crowd-thrilling live show that defies the laws of physics, generating an impossibly massive sound from its two members alone."
        },
        reproductions: '13.082.021',
        artist: 'The Blue Stones',
        artistCover: require('@/assets/the-blue-stones.png')
      },
      {
        artist: 'Zac Brown Band',
        album: 'JEKYLL + HYDE ',
        name: 'Beautiful Drug',
        albumCover: require('@/assets/jekyll-album.png'),
        duration: "3:11",
        about: {
          cover: require('@/assets/sobre-zac.png'),
          listeners: '9.808.079',
          info: 'Zac Brown Band is a multi-platinum, Grammy Award-winning, Southern rock group led by front man, Zac Brown. Throughout their career spanning more than a decade, Zac Brown Band has had six consecutive albums reach the top 10 of the Billboard 200 and five consecutive albums debut at #1 on Billboards Country Albums chart.'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/zac-brown-band.png')
      },
      {
        artist: 'Chris Young',
        album: 'Famous Friends',
        name: 'At the End of a Bar',
        albumCover: require('@/assets/famous-friends.png'),
        duration: "3:06",
        about: {
          cover: require('@/assets/sobre-chris.png'),
          listeners: '5.000.096',
          info: 'With a dark baritone well beyond his years and a keen ear for the melodic country music of his childhood, Chris Young went from Nashville Star champion to actual Nashville star over the course of just a few years.'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/chris-young.png')
      },
      {
        name: 'Play It Again',
        artist: 'Luke Bryan',
        album: 'Crash My Party',
        albumCover: require('@/assets/crash-my-album.png'),
        duration: "3:46",
        about: {
          cover: require('@/assets/sobre-luke.png'),
          listeners: '10.873.040',
          info: 'Country music superstar and television personality Luke Bryan has released 30 No. 1 hits, garnered nearly 20 billion worldwide streams and has more RIAA certified digital single certifications than any other Country artist of all time with 83 Million with overall career RIAA certifications totaling 98.5 Million.'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/luke-bryan.png')
      },
      {
        artist: "Somebody's Child",
        album: "Somebody's Child",
        name: 'We Could Star a War',
        albumCover: require('@/assets/somebody-album.png'),
        duration: "3:37",
        about: {
          cover: require('@/assets/sobre-somebody.png'),
          listeners: '174.438',
          info: 'Starting his musical journey aged five in Paris, Cian Godfrey (aka Somebody s Child) took to playing the piano in the family apartment. Upon moving back to Ireland, he gained an interest in songwriting, enabling him to tell his own stories. '
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/somebodys-child.png')
      },
      {
        artist: 'Dennis Lloyd',
        album: 'Oceanside',
        name: 'Oceanside',
        about: {
          cover: require('@/assets/sobre-dennis.png'),
          listeners: '7.219.743',
          info: 'I make music and I love dogs.'
        },
        albumCover: require('@/assets/oceanside-album.png'),
        duration: "2:48",
        reproductions: '13.082.021',
        artistCover: require('@/assets/dennis-lloid.png')
      },
      {
        artist: 'The Holdup',
        album: 'Leaves in the Pool',
        name: "Nothing's on Fire",
        albumCover: require('@/assets/leaves-in-the-pool-album.png'),
        duration: "3:22",
         about: {
          cover: require('@/assets/sobre-holdup.png'),
          listeners: '329.159',
          info: 'Coming from San Jose, CA, The Holdup has built a cult following writing and producing his own brand of groovy, melody driven, pop music, borrowing influences from R&B, reggae, and hip hop. '
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/the-holdup.png')
      },
      {
        name: 'fan behavior',
        album: 'evil twin',
        artist: 'Isaac Dunbar',
        albumCover: require('@/assets/evil-twin-album.png'),
        duration: "3:02",
         about: {
          cover: require('@/assets/sobre-isaac.png'),
          listeners: '606.576',
          info: "Isaac Dunbar merges elements of alt-pop, smooth R&B, and woozy dance music into his musically whimsical, lyrically earnest songs. He released his debut EP, balloons don't float here, as a high schooler in 2019, leading to his major-label debut, isaac's insects, the following year. "
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/isaac-dumbar.png')
      },
      {
        name: 'OXOX',
        album: 'OXOX',
        artist: 'Dutch Melrose',
        albumCover: require('@/assets/oxox-album.png'),
        duration: "2:32",
        reproductions: '13.082.021',
        about: {
          cover: require('@/assets/sobre-dutch.png'),
          listeners: '1.217.437',
          info: 'forever in my feels - IG @dutchmelrose'
        },
        artistCover: require('@/assets/dutch-melrose.png')
      },
      {
        artist: 'Lofi Leif',
        album: 'Silent Sky',
        name: 'Silent Sky',
        albumCover: require('@/assets/lofi-leif-album.png'),
        duration: "2:20",
        about: {
          cover: require('@/assets/sobre-lofi-leif.png'),
          listeners: '61.629',
          info: 'nothing'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/lofi-leif.png')
      },
      {
        name: 'silent stranger',
        album: 'silent stranger',
        artist: 'Against The Current',
        albumCover: require('@/assets/silent-album.png'),
        duration: "3:29",
        about: {
          cover: require('@/assets/sobre-against.png'),
          listeners: '4.620.084',
          info: 'Against The Current is made up of singer Chrissy Costanza, guitarist Dan Gow, and drummer, Will Ferri. ATC has earned accolades and a faithful following with their brand of pop, rock, and indie sounds.'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/against-the-current.png')
      },
      {
        name: 'wrong way',
        album: 'daydreamer',
        artist: 'Dead Lakes',
        albumCover: require('@/assets/daydreamer-album.png'),
        duration: "3:08",
        about: {
          cover: require('@/assets/sobre-dead-lakes.png'),
          listeners: '100.238',
          info: 'A BAND'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/dead-lakes.png')
      },
      {
        name: 'Revolution',
        album: 'Revolution',
        artist: 'Bishop Briggs',
        albumCover: require('@/assets/revolution-album.png'),
        duration: "3:06",
        about: {
          cover: require('@/assets/sobre-bishop.png'),
          listeners: '3.905.258',
          info: 'Born in London to Scottish parents, Bishop Briggs grew up in Japan and Hong Kong. Days after graduating high school, she moved to Los Angeles where, after years of performing at any venue that would have her, she was discovered in a small hole-in-the-wall by a former-A&R rep and the rest was history.'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/bishop-briggs.png')
      },
      {
        name: 'In My Mind',
        artist: 'The Amazonas',
        album: 'The Amazonas (Deluxe)',
        albumCover: require('@/assets/the-amazonas-album.png'),
        duration: "3:50",
        about: {
          cover: require('@/assets/sobre-amazonas.png'),
          listeners: '260.220',
          info: 'last gang in town'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/the-amazonas.png')
      },
      {
        name: 'Sinner',
        album: 'Sinner',
        artist: 'Of Virtue',
        albumCover: require('@/assets/sinner-album.png'),
        duration: "3:13",
        about: {
          cover: require('@/assets/sobre-virtue.png'),
          listeners: '645.245',
          info: 'Progression, or more generally, change, is a constant in music; in order to adapt and survive, you must grow and develop - and no band knows that more than Lansing, MI metal act Of Virtue.'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/of-virtue.png')
      },
      {
        artist: "We're Wolves",
        album: 'Dissonance',
        explicit: true,
        name: 'Dissonance',
        albumCover: require('@/assets/dissonance-album.png'),
        duration: "4:00",
        about: {
          cover: require('@/assets/sobre-were.png'),
          listeners: '49.081',
          info: "We re Wolves is a dark humored, anthemic blend of metal sub-genres and hard rock hailing from West Palm Beach, Florida. They are pushing the boundaries of entertainment through satirical yet theatrical visuals to enhance their carefully crafted sound."
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/were-wolves.png')
      },
      {
        artist: 'Bring Me The Horizon',
        album: 'POST HUMAN: SURVIVAL HORROR',
        name: 'Obey (with YUNGBLUD)',
        albumCover: require('@/assets/post-album.png'),
        duration: "3:41",
        explicit: true,
        about: {
          cover: require('@/assets/sobre-bring.png'),
          listeners: '13.248.653',
          info: 'ʙʀɪɴɢ ᴍᴇ ᴛʜᴇ ʜᴏʀɪᴢᴏɴ https://www.bmthofficial.com'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/bring-me-the-horizon.png')
      },
      {
        artist: 'Escape The Day',
        album: 'Riot',
        name: 'Riot',
        albumCover: require('@/assets/riot-album.png'),
        duration: "3:10",
        about: {
          cover: require('@/assets/sobre-escape.png'),
          listeners: '34.310',
          info: 'ESCAPE THE DAY is a trance-metal act from Gothenburg, Sweden which was founded in 2007. Since the early beginning ETD have built an international fanbase spreading over all different ages and cultures.'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/escape-the-day.png')
      },
      {
        name: 'Alone In a Room',
        album: 'Asking Alexandria',
        artist: 'Asking Alexandria',
        albumCover: require('@/assets/asking-album.png'),
        explicit: true,
        duration: "4:06",
        about: {
          cover: require('@/assets/sobre-asking.png'),
          listeners: '3.405.726',
          info: "Metal Hammer declared See Whats On The Inside (2021), 'an outrageously infectious ode to classic rock.' Forbes noted the album's visceral connection to early Asking Alexandria influences like Guns N Roses, Metallica, and Pantera. "
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/asking-alexandria.png')
      },
      {
        name: 'Lock Me Up',
        album: 'Lock Me Up',
        artist: 'Paloma',
        albumCover: require('@/assets/lock-me-album.png'),
        duration: "3:26",
        about: {
          cover: require('@/assets/sobre-paloma.png'),
          listeners: '42.046',
          info: 'Their debut single My Oh My  revolves around one persons obsessive-turned abusive love for another. It speaks of building the strength to leave someone who can t grasp a reality where their wants aren t meant to be, which ends up tearing apart a toxic relationship for the better.'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/paloma.png')
      },
      {
        name: 'Bad Decisions',
        album: 'Doom Days',
        artist: 'Bastille',
        albumCover: require('@/assets/doom-days-album.png'),
        duration: "3:10",
        about: {
          cover: require('@/assets/sobre-bastille.png'),
          listeners: '19.046.902',
          info: 'The bands chart-conquering debut album “Bad Blood”, which featured the international hit, Pompeii, drove Bastille to became 2013s biggest-selling global breakthrough act, with over a billion Spotify streams.'
        },
        reproductions: '13.082.021',
        artistCover: require('@/assets/bastille.png')
      },
    ]
  },
  getters: {
  },
  mutations: {
    musicNow(state, musicNow) {
      state.musicNow = musicNow
    },
    download(state, download) {
      state.download = download
    },
    favorite(state, favorite) {
      state.favorite = favorite
    }
  },
  actions: {
  },
  modules: {
  }
})
