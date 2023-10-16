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
        added: new Date('2022-05-08'),
      },
      {
        name: 'Wonderful Life - edit',
        artist: 'Two Door Cinema Club',
        album: 'Wonderful Life',
        albumCover: require('@/assets/wonderful-album.png'),  
        duration: "3:06",
        added: new Date('2022-07-16'),
        
      },
      {
        name: 'Fire That Burns',
        artist: 'Circa Waves',
        album: 'Different Creatures',
        albumCover: require('@/assets/different-album.png'),  
        duration: "3:50",
        added: new Date('2023-10-13'),
        
      },
      {
        name: 'Come Around',
        artist: 'Corella',
        album: 'Come Around',
        albumCover: require('@/assets/come-around-album.png'),  
        duration: "3:14",
        added: new Date('2021-01-04'),
      },
      {
        name: 'Amsterdam',
        artist: 'Nothing But Thieves',
        album: 'Broken Machine (Deluxe)',
        albumCover: require('@/assets/broken-album.png'),  
        duration: "4:32",
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
        added: new Date('2023-10-06'),
        favorite: true,
        download: false
      },
      {
        name: 'Do You Have a Name',
        artist: 'Glass Caves',
        album: 'Do You Have a Name',
        albumCover: require('@/assets/have-a-name.png'),  
        duration: "3:30",
        added: new Date('2023-10-07'),
        favorite: true,
        download: false
      },
      {
        name: "Don't Take The Money",
        artist: 'Bleachers',
        album: 'Gone Now',
        albumCover: require('@/assets/gone-now-album.png'),  
        duration: "3:35",
        added: new Date('2023-10-08'),
        favorite: true,
        download: false
      },
      {
        name: 'Static',
        artist: 'Ryan McMullan',
        album: 'Static',
        albumCover: require('@/assets/static-album.png'),  
        duration: "3:07",
        added: new Date('2021-12-30'),
        favorite: true,
        download: false
      },
      {
        name: 'Sure Enough',
        artist: 'Two Door Cinema Club',
        album: 'Sure Enough',
        albumCover: require('@/assets/sure-enough.png'),  
        duration: "2:51",
        added: new Date('2021-11-15'),
        favorite: true,
        download: false
      },
    ],
    playlistIndieVibration: [
      {
        name: 'Hypersonic Missiles',
        artist: 'Sam Fender',
        album: 'Hypersonic Missiles',
        albumCover: require('@/assets/hypersonic-album.png'),  
        duration: "3:57",
        added: new Date('2022-05-03'),
      },
      {
        name: 'What You Know',
        artist: 'Two Door Cinema Club',
        album: 'Tourist History',
        albumCover: require('@/assets/tourist-album.png'),  
        duration: "3:11",
        added: new Date('2019-07-09'),
      },
      {
        name: 'Ocenas',
        artist: 'The Blue Stones',
        album: 'Hidden Gems',
        albumCover: require('@/assets/hidden-gems-album.png'),  
        duration: "5:09",
        added: new Date('2019-05-09'),
      },
      {
        name: 'Friday Fighting',
        artist: 'Sam Fender',
        album: 'Friday Fighting',
        albumCover: require('@/assets/friday-album.png'),  
        duration: "3:10",
        added: new Date('2018-08-06'),
      },
      {
        name: 'This Feels Like the End',
        artist: 'Nothing But Thieves',
        album: 'Moral Panic',
        albumCover: require('@/assets/moral-album.png'),  
        duration: "4:02",
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
        added: new Date('2015-02-14'),
      },
      {
        name: 'At the End of a Bar',
        artist: 'Chris Young',
        album: 'Famous Friends',
        albumCover: require('@/assets/famous-friends.png'),  
        duration: "3:06",
        added: new Date('2015-07-14'),
      },
      {
        name: 'Roots',
        artist: 'Zac Brown Band',
        album: 'Welcome Home',
        albumCover: require('@/assets/welcome-album.png'),  
        duration: "3:01",
        added: new Date('2015-02-19'),
      },
      {
        name: 'Losing Sleep',
        artist: 'Chris Young',
        album: 'Losing Sleep',
        albumCover: require('@/assets/losing-album.png'),  
        duration: "2:58",
        added: new Date('2015-11-14'),
      },
      {
        name: 'Play It Again',
        artist: 'Luke Bryan',
        album: 'Crash My Party',
        albumCover: require('@/assets/crash-my-album.png'),  
        duration: "3:46",
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
        added: new Date('2015-09-28')
      },
      {
        name: 'We Could Star a War',
        artist: "Somebody's Child",
        album: "Somebody's Child",
        albumCover: require('@/assets/somebody-album.png'),  
        duration: "3:37",
        added: new Date('2018-02-14'),
      },
      {
        name: 'Oceanside',
        artist: 'Dennis Lloyd',
        album: 'Oceanside',
        albumCover: require('@/assets/oceanside-album.png'),  
        duration: "2:48",
        added: new Date('2023-06-20'),
      },
      {
        name: 'GFY',
        artist: 'Dennis Lloyd',
        album: 'Exident',
        albumCover: require('@/assets/exident-album.png'),  
        duration: "3:06",
        added: new Date('2021-05-21'),
      },
      {
        name: "Nothing's on Fire",
        artist: 'The Holdup',
        album: 'Leaves in the Pool',
        albumCover: require('@/assets/leaves-in-the-pool-album.png'),  
        duration: "3:22",
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
        added: new Date('2022-02-14'),
      },
      {
        name: 'OXOX',
        artist: 'Dutch Melrose, Lost Boy',
        album: 'OXOX',
        albumCover: require('@/assets/oxox-album.png'),  
        duration: "2:32",
        added: new Date('2013-07-14'),
      },
      {
        name: 'Play God',
        artist: 'Sam Fender',
        album: 'Hypersonic Missiles',
        albumCover: require('@/assets/hypersonic-album.png'),  
        duration: "3:46",
        added: new Date('2022-06-19'),
      },
      {
        name: 'Good Ideas',
        artist: 'The Blue Stones',
        album: 'Pretty Monster',
        albumCover: require('@/assets/pretty-monster-album.png'),  
        duration: "3:19",
        added: new Date('2012-02-14'),
      },
      {
        name: 'Silent Sky',
        artist: 'Lofi Leif',
        album: 'Silent Sky',
        albumCover: require('@/assets/lofi-leif-album.png'),  
        duration: "2:20",
        added: new Date('2019-07-18'),
      }
    ],
    playlistDescobertas: [
      {
        name: 'silent stranger',
        artist: 'Against The Current',
        album: 'silent stranger',
        albumCover: require('@/assets/silent-album.png'),  
        duration: "3:29",
        added: new Date('2023-05-14'),
      },
      {
        name: 'wrong way',
        artist: 'Dead Lakes',
        album: 'daydreamer',
        albumCover: require('@/assets/daydreamer-album.png'),  
        duration: "3:08",
        added: new Date('2010-08-14'),
        
      },
      {
        name: 'Revolution',
        artist: 'Bishop Briggs',
        album: 'Revolution',
        albumCover: require('@/assets/revolution-album.png'),  
        duration: "3:06",
        added: new Date('2022-10-20'),
      },
      {
        name: 'In My Mind',
        artist: 'The Amazonas',
        album: 'The Amazonas (Deluxe)',
        albumCover: require('@/assets/the-amazonas-album.png'),  
        duration: "3:50",
        added: new Date('2017-07-01'),
      },
      {
        name: 'Sinner',
        artist: 'Of Virtue',
        album: 'Sinner',
        albumCover: require('@/assets/sinner-album.png'),  
        duration: "3:13",
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
        added: new Date('2023-09-14'),
      },
      {
        name: 'Overcome',
        artist: 'Nothing But Thieves',
        album: 'Dead Club City',
        albumCover: require('@/assets/dead-club-album.png'),  
        duration: "3:34",
        added: new Date('2023-06-30'),
      },
      {
        name: 'Amsterdam',
        artist: 'Nothing But Thieves',
        album: 'Broken Machine (Delux)',
        albumCover: require('@/assets/broken-album.png'),  
        duration: "4:32",
        added: new Date('2017-09-08'),
      },
      {
        name: 'Sorry',
        artist: 'Nothing But Thieves',
        album: 'Broken Machine (Delux)',
        albumCover: require('@/assets/broken-album.png'),  
        duration: "3:35",
        added: new Date('2015-02-14'),
      },
      {
        name: 'Honey Whiskey',
        artist: 'Nothing But Thieves',
        album: 'Nothing But Thieves (Delux)',
        albumCover: require('@/assets/nothing-album.png'),  
        duration: "3:11",
        added: new Date('2015-10-16'),
      }
    ],
    playlistMixMetal: [
      {
        name: 'Dissonance',
        artist: " We're Wolves",
        album: 'Dissonance',
        albumCover: require('@/assets/dissonance-album.png'),  
        duration: "4:00",
        added: new Date('2018-05-15'),
        explicit: true
      },
      {
        name: 'Obey (with YUNGBLUD)',
        artist: 'Bring Me The Horizon',
        album: 'POST HUMAN: SURVIVAL HORROR',
        albumCover: require('@/assets/post-album.png'),  
        duration: "3:41",
        added: new Date('2015-02-14'),
        explicit: true
      },
      {
        name: 'Riot',
        artist: 'Escape The Day',
        album: 'Riot',
        albumCover: require('@/assets/riot-album.png'),  
        duration: "3:10",
        added: new Date('2021-11-05'),
      },
      {
        name: 'Alone In a Room',
        artist: 'Asking Alexandria',
        album: 'Asking Alexandria',
        albumCover: require('@/assets/asking-album.png'),  
        duration: "4:06",
        added: new Date('2017-12-15'),
        explicit: true
      },
      {
        name: 'Lock Me Up',
        artist: 'Paloma',
        album: 'Lock Me Up',
        albumCover: require('@/assets/lock-me-album.png'),  
        duration: "3:26",
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
        added: new Date('2023-09-14'),
        
      },
      {
        name: 'Sure Enough',
        artist: 'Two Door Cinema Club',
        album: 'Sure Enough',
        albumCover: require('@/assets/sure-enough.png'),  
        duration: "2:51",
        added: new Date('2021-11-15'),
      },
      {
        name: 'Healing',
        artist: 'The Blue Stones',
        album: 'Pretty Monster',
        albumCover: require('@/assets/pretty-monster-album.png'),  
        duration: "3:20",
        added: new Date('2017-12-18'),
      },
      {
        name: 'Never Going Under',
        artist: 'Circa Waves',
        album: 'Never Going Under',
        albumCover: require('@/assets/never-going-album.png'),  
        duration: "2:14",
        added: new Date('2023-01-13'),
      },
      {
        name: 'Bad Decisions',
        artist: 'Bastille',
        album: 'Doom Days',
        albumCover: require('@/assets/doom-days-album.png'),  
        duration: "3:10",
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
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
