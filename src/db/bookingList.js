let bookingList = [
    {
        id: '001',
        key: 'valaki',
        booking_ubication: 'Valaki, Barovia',
        card_description: 'House near the church',
        detail_description: `Welcome, my friends! I am Blinsky, the greatest toymaker in all of Barovia. I am delighted to invite you to my home where you can see my wonderful creations and enjoy a comfortable stay.

        My home is filled with the fruits of my labor - toys and other charming curiosities that I have crafted with great care and skill. While some may find them strange, I can assure you that they are not macabre or disturbing in any way. They are simply unique and delightful works of art that will bring a smile to your face.
        
        As my guests, you will be treated to the finest hospitality that I can offer. Whether you need a cozy bed to rest in, a warm meal to fill your belly, or just a friendly face to talk to, I will be here to provide for your every need.
        
        Of course, I must warn you that Barovia is a dangerous place, full of shadows and other threats. But never fear, for my trusty creations will keep you safe from harm. You will never forget your stay in my home, and I can promise you that it will be an experience like no other.
        
        So come and join me in my little corner of Barovia. I promise that you will not be disappointed.`,
        host: 'Blinsky',
        host_image: require('../assets/bookingsimg/01-valaki_1/host/blinsky.png'),
        cardImages: [
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F01-valaki_1%2Fplace%2F1.jpeg?alt=media&token=edbfd897-ce85-4225-90e7-098d6e8b3580',
                idImg:"0"
            }, 
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F01-valaki_1%2Fplace%2F2.jpeg?alt=media&token=eff9b9a4-19b6-4507-825d-6ee681844bd3',
                idImg:"1"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F01-valaki_1%2Fplace%2F3.jpeg?alt=media&token=534bc0b6-90e2-411e-975e-c976dd574fa7',
                idImg:"2"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F01-valaki_1%2Fplace%2F4.jpeg?alt=media&token=8feac4cf-4f3e-46a1-94a0-c42266f132c4',
                idImg:"3"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F01-valaki_1%2Fplace%2F5.jpeg?alt=media&token=cb39cdd4-2656-4099-bcfd-08afc00327d9',
                idImg:"4"
            }
            ],
        characteristics:[{
            beds:'two beds',
            bathroom:'exclusive bathroom',
            work_area:'work area',
            shared_area:'shared area'
        }],
        afterBookingData: [{
            first_notification: '',
            morning_notifications: ['', ''],
            lunch_notifications: ['', ''],
            afternoon_notifications: ['', ''],
            dinner_notifications: ['', ''],
            sunset_notifications: ['', ''],
            evening_notifications: ['', ''],
            midnight_notifcations: ['', ''],
            early_morning: ['', ''],
        }],
        price_per_night:10
    },
    {
        id: '002',
        key: 'minas tirith',
        booking_ubication: 'Minas Tirith',
        card_description: 'Second level of the citadel',
        detail_description: `Welcome, traveler! My name is Halbarad, a Citadel Guard of Gondor, and I would be honored to host you in our humble home, together with my son Túrin. Our fortress may not offer the most impressive views or luxurious amenities, but what we lack in grandeur we make up for in heart and hospitality.

        Our house is situated on the first level of the city, so the view from our windows is limited to the street and the front houses. But don't let that dissuade you from experiencing the true beauty of Gondor through the eyes of a true defender. Our home may be simple, but it is clean, cozy, and equipped with everything you need to make your stay comfortable and memorable.
        
        As a Citadel Guard, I have dedicated my life to protecting this great city and its people. And now, I invite you to join us and experience the heart and hospitality of a true defender. Though we may not offer breathtaking views from our windows, the true beauty of Gondor lies in its people and history.
        
        And if you're lucky, you may even get the chance to meet my dear friend, a wise wizard who occasionally graces us with his presence. His stories and advice about Middle-earth will leave you inspired and enriched.
        
        So why wait? Book your stay at our citadel and experience the heart and hospitality of a Citadel Guard and his son. We promise to make your stay in Gondor a memorable one!`,
        host: 'Guardia de Gondor',
        host_image: require('../assets/bookingsimg/07-minastirith_1/host/guard.png'),
        cardImages: [
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F07-minastirith_1%2Fplace%2F1.jpeg?alt=media&token=c5190579-0bae-432b-ad1d-3e31d0e25fb1',
                idImg:"5"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F07-minastirith_1%2Fplace%2FDefault_room_full_of_weapons_and_a_bed_inside_a_little_House_i_1.jpeg?alt=media&token=be72c56e-de4b-4dec-a8d4-842e29cda25f',
                idImg:"6"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F07-minastirith_1%2Fplace%2FDefault_room_full_of_weapons_inside_a_little_House_inside_the_1.jpeg?alt=media&token=74b10eed-be77-4060-b988-63db862aefa1',
                idImg:"7"

            }
        ],
        afterBookingData: [{
            first_notification: '',
            morning_notifications: ['', ''],
            lunch_notifications: ['', ''],
            afternoon_notifications: ['', ''],
            dinner_notifications: ['', ''],
            sunset_notifications: ['', ''],
            evening_notifications: ['', ''],
            midnight_notifcations: ['', ''],
            early_morning: ['', ''],
        }],
        price_per_night:20
    }, {
        id: '003',
        key: 'narshe',
        booking_ubication: 'Narshe',
        card_description: 'My place at Narshe Mines',
        detail_description: `Hello and welcome to the Mines of Narshe! My name is Terra and I'm an inhabitant of this mystical place. I live in one of the many caves that make up the mine, and I've always wanted to share my home with other adventurers and travelers.

        My cave is cozy and comfortable, with all the amenities you need to make your stay enjoyable. The best part? My friends, the Moogles, are always nearby and ready to assist you with anything you need. They're known for their hospitality and kindness, so you'll be in good hands!
        
        Though the Mines of Narshe may seem like a daunting place at first, it's filled with wonder and excitement for those willing to explore it. From the glittering crystals to the mysterious creatures that inhabit the mine, there's always something new to discover.
        
        And if you're looking for a more tranquil experience, my cave is the perfect place to relax and unwind. You'll be able to disconnect from the hustle and bustle of the outside world and bask in the quiet beauty of the mines.
        
        So what are you waiting for? Come stay with me and experience the wonder and magic of the Mines of Narshe. I promise it will be a stay you won't soon forget!`,
        host: 'Moogle',
        host_image: require('../assets/bookingsimg/08-narshe_1/host/moogle.png'),
        cardImages: [
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F08-narshe_1%2Fplace%2F1.jpg?alt=media&token=803e8c26-1d9e-43f5-ad95-a1ed84c23a60',
                idImg:"8"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F08-narshe_1%2Fplace%2Fnarshe2.jpg?alt=media&token=3512bc44-f67e-44f8-ba86-1b1227a8c4ab',
                idImg:"9"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F08-narshe_1%2Fplace%2Fnarshe3.jpg?alt=media&token=2db75eff-c06c-4cb4-b627-50073da6e160',
                idImg:"10"

            }
            
            
    
        ],
        afterBookingData: [{
            first_notification: '',
            morning_notifications: ['', ''],
            lunch_notifications: ['', ''],
            afternoon_notifications: ['', ''],
            dinner_notifications: ['', ''],
            sunset_notifications: ['', ''],
            evening_notifications: ['', ''],
            midnight_notifcations: ['', ''],
            early_morning: ['', ''],
        }],
        price_per_night:2
    }, {
        id: '004',
        key: 'medina village',
        booking_ubication: 'Medina Village',
        card_description: 'Casa del anciano',
        detail_description: `Step into my humble abode in the tranquil town of Medina, where secrets reside and history whispers through the walls. Witness the curious dynamics within, where an imp, seemingly bound by duty, adds a touch of mischief to the ambiance. As shadows dance and tales unfold, you may wonder about the nature of their relationship. Explore the local wonders, engage in ancient traditions, and unravel the enigmatic bond that ties host and imp. Behind closed doors, an unexpected tale awaits, where kindness masks a mysterious allure.`,
        host: 'Ozzy VIII',
        host_image: require('../assets/bookingsimg/06-medina_1/host/ozzy.png'),
        cardImages:[
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F06-medina_1%2Fplace%2Fmedina1.jpg?alt=media&token=c5763540-a2aa-49af-90f2-d19fbc887c94',
                idImg:"11"
            }
        ],
        afterBookingData: [{
            first_notification: '',
            morning_notifications: ['', ''],
            lunch_notifications: ['', ''],
            afternoon_notifications: ['', ''],
            dinner_notifications: ['', ''],
            sunset_notifications: ['', ''],
            evening_notifications: ['', ''],
            midnight_notifcations: ['', ''],
            early_morning: ['', ''],
        }],
        price_per_night:8
    }, {
        id: '005',
        key: 'revachol',
        booking_ubication: 'Martinaise, Revachol',
        card_description: 'little House at the fishermen shacks',
        detail_description: `Welcome to the heart of Martinaise, where the gentle lapping of waves accompanies a humble abode. Meet our beloved host, an elderly woman who weaves tales as she washes clothes by the shore. Amidst the dilapidated shacks and weary souls, discover a community bound by resilience and shared stories. Embrace the spirit of camaraderie as you encounter wandering souls, weathered by life's hardships yet finding solace in fleeting moments. Immerse yourself in the raw authenticity of Martinaise, where humanity's struggles mingle with the salty sea breeze. 

        Venture beyond the fisherman shacks and you'll stumble upon an abandoned church, its timeworn walls whispering forgotten hymns. A haunting beauty lingers within its desolate halls, a relic of faith that now stands as a silent witness to the passage of time. As you tread upon the worn cobblestones, take notice of the ancient craters that scar the earth, remnants of a battle fought long ago. The echoes of history resonate through these pockmarked landscapes, reminding us of the sacrifices made in a bygone era. Amidst the solemn surroundings, find solace in the enduring resilience of Martinaise's inhabitants, who weathered the storms of both conflict and time with unwavering spirit.

        While the specter of bygone battles and remnants of a tumultuous past surround Martinaise, fear not, for your stay here promises respite and tranquility. Though shadows may loom and the weight of history hangs in the air, it is in this humble district that you'll find a haven of solace and peace. While the echoes of struggle are ever-present, we assure you that your time here will be filled with pleasant encounters, heartwarming conversations, and the chance to immerse yourself in the simple joys of life. Let the gentle lapping of waves and the laughter of newfound friends wash away any apprehension, as you embrace the hope for a truly rejuvenating experience in Martinaise's embrace.
        `,
        host: 'Old Woman',
        host_image: require('../assets/bookingsimg/05-revachol_1/host/old.png'),
        cardImages: [
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F05-revachol_1%2Fplace%2Ffishermenshackshouse1.jpg?alt=media&token=5d9d6c20-1c8d-47ed-9017-02adeb4dedfa',
                idImg:"12"
            }
            
        ],
        afterBookingData: [{
            first_notification: '',
            morning_notifications: ['', ''],
            lunch_notifications: ['', ''],
            afternoon_notifications: ['', ''],
            dinner_notifications: ['', ''],
            sunset_notifications: ['', ''],
            evening_notifications: ['', ''],
            midnight_notifcations: ['', ''],
            early_morning: ['', ''],
        }],
        price_per_night:0
    }, {
        id: '006',
        key: 'fukai',
        booking_ubication: 'Sea of decay',
        card_description: 'Underneath fukai',
        detail_description: `Descend into a world shrouded in ethereal hues of blues and yellows, where sunlight is a distant memory, yet the ambient glow fills every corner. Amidst the towering trunks that reach for the heavens, explore a landscape devoid of conventional foliage, replaced instead by the majestic presence of colossal trunks that paint the horizon. As you traverse the soft expanse of gray and yellow sand beneath your feet, let the distant symphony of waterfalls serenade your senses, adding a melodic touch to the serene atmosphere. Immerse yourself in the tranquil embrace of Fukai, where the absence of light reveals a beauty all its own, and the whispers of the forest beckon you to discover the secrets it holds.
        
        Within this enigmatic realm of Fukai, I welcome you to my humble dwelling, where simplicity reigns and the essence of survival takes center stage. As you venture deeper into the forest's embrace, you'll find that my abode offers the bare necessities. Bedrolls await weary travelers, providing respite amidst the vast expanse of nature's embrace. Gather around the comforting warmth of bonfires, casting their gentle glow upon the mysterious surroundings. In this secluded haven, the concept of a traditional bathroom fades away, replaced instead by the symbiotic relationship with nature that Fukai embodies. And when hunger calls, the offerings are humble: the subtle crunch of insects, sustaining us in this symbiotic dance with the forest. Embrace the simplicity of this existence, where the harmony of Fukai becomes a testament to our resilience and our deep connection to the living world.`,
        host: 'Boy',
        host_image: require('../assets/bookingsimg/03-fukai_1/host/boy.png'),
        cardImages:[
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F03-fukai_1%2Fplace%2F1.jpeg?alt=media&token=f645c0a8-f1f9-45ef-8d74-44e0c4f692c2',
                idImg:"13"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F03-fukai_1%2Fplace%2FDefault_fukai_sea_of_decay_of_nausica_movie_Forest_dead_trees_0.jpeg?alt=media&token=b13c263d-2d0c-461e-9ad8-add68418ef9a',
                idImg:"14"
            }
            
            

        ],
        afterBookingData: [{
            first_notification: '',
            morning_notifications: ['', ''],
            lunch_notifications: ['', ''],
            afternoon_notifications: ['', ''],
            dinner_notifications: ['', ''],
            sunset_notifications: ['', ''],
            evening_notifications: ['', ''],
            midnight_notifcations: ['', ''],
            early_morning: ['', ''],
        }],
        price_per_night:4
    }, {
        id: '007',
        key: 'torre bellsprout',
        booking_ubication: 'Violet City',
        card_description: 'Bellsprout tower',
        detail_description: `Step into the sacred Bellsprout Tower, a haven of tranquility nestled within Violet City's embrace in the Johto region. Here, amidst the whispering leaves and the gentle rustle of Bellsprouts, a wise monk awaits, ready to guide you on a serene journey of self-discovery. As you ascend the tower's ancient steps, the meditative atmosphere envelops you, offering respite from the outside world. Engage in peaceful contemplation and learn the art of inner harmony from the seasoned monks, masters of meditation. While the ancient monks may not impart martial arts wisdom, their teachings carry the wisdom of generations, fostering a deeper connection to oneself and the world around you. Amidst the playful company of Bellsprouts and the occasional ethereal presence of Gastly, let the serenity of the Bellsprout Tower wash over you, allowing your spirit to soar in a realm of tranquility and self-reflection`,
        host: 'Monk of bellsprout tower',
        host_image: require('../assets/bookingsimg/02-bellsprouttower_1/host/monk.png'),
        cardImages: [
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F02-bellsprouttower_1%2Fplace%2F1.jpeg?alt=media&token=b4767dc2-58aa-40ce-846f-f2da51d14958',
                idImg:"15"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F02-bellsprouttower_1%2Fplace%2Fbellsprouttower1.jpg?alt=media&token=1a719b93-6c11-40e1-848a-590524e268cb',
                idImg:"16"
            }
            
            
        ],
        afterBookingData: [{
            first_notification: '',
            morning_notifications: ['', ''],
            lunch_notifications: ['', ''],
            afternoon_notifications: ['', ''],
            dinner_notifications: ['', ''],
            sunset_notifications: ['', ''],
            evening_notifications: ['', ''],
            midnight_notifcations: ['', ''],
            early_morning: ['', ''],
        }],
        price_per_night:25
    }, {
        id: '008',
        key: '008',
        booking_ubication: 'Central City',
        card_description: 'Apartment at Central city downtown in Amestris',
        detail_description: `Welcome to the bustling heart of Central City, the vibrant capital of Amestris. Nestled amidst the grandeur and intrigue of this remarkable metropolis, lies an apartment where an alchemist's spirit dwells. Step into a world where alchemy and innovation intertwine, where secrets are whispered amidst the gleaming spires. Your host, an accomplished alchemist in service to the state, invites you to discover the wonders of their craft. From transmutation circles to alchemical wonders, immerse yourself in a realm where science and mysticism coalesce. As you explore the bustling streets and delve into the mysteries of Central City, allow the host's expertise to unfold, offering glimpses into the realm of alchemical possibility. Embrace the allure of this extraordinary domain, where the echoes of ancient wisdom dance amidst the ever-evolving tapestry of human ambition.
        
        Within the confines of the alchemist's apartment in Central City, a unique opportunity awaits. Your host, a skilled practitioner of the arcane art of alchemy, extends a gracious invitation to delve into the depths of this ancient craft. Discover a treasure trove of knowledge as you peruse their extensive collection of alchemical texts and manuscripts, offering glimpses into the intricacies of transmutation and the secrets of the philosopher's stone. Embark on an enlightening journey of learning and exploration, guided by the host's expertise and passion for the subject. Through hands-on demonstrations and insightful discussions, you'll have the chance to unlock the mysteries of alchemy, unraveling the intricate threads that bind matter and energy. Expand your understanding and let the alchemist's teachings ignite the spark of curiosity within you. Whether you're a novice seeking an introduction to the art or an experienced alchemist looking to refine your skills, this unique opportunity promises an unforgettable journey into the captivating realm of alchemy.

        As a cherished guest of the alchemist's abode in Central City, a solemn request accompanies your stay. In recognition of the sacred knowledge and secrets that permeate these walls, you will be asked to honor a vow of secrecy. Upon reserving a room, you will be kindly requested to sign a document, pledging that the insights, conversations, and discoveries shared within this dwelling shall remain solely within the confines of your own mind. This sacred pact serves to safeguard the delicate balance between knowledge and the preservation of alchemical lore. Embrace this trust bestowed upon you, cherishing the wisdom you acquire during your stay, knowing that its power lies in its safekeeping. With this commitment, you become an honored guardian of the alchemist's legacy, ensuring that the enigmatic arts of alchemy remain shrouded in the sanctity of this extraordinary space.
        `,
        host: 'Benjamin Westcott',
        host_image:require('../assets/bookingsimg/04-centralcity_1/host/benjamin.png'),
        cardImages: [
                        {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F04-centralcity_1%2Fplace%2F1.jpg?alt=media&token=e0fff577-109d-4c49-baa1-abaf42db475c',
                idImg:"17"
            }, 
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F04-centralcity_1%2Fplace%2Fcentralcityalchemist2.jpg?alt=media&token=2e1f245c-2cda-4bb5-9e3e-24617fd063e4',
                idImg:"18"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F04-centralcity_1%2Fplace%2Fcentralcityalchemist3.jpg?alt=media&token=cd448eb7-560d-4573-ac0e-3870f0bbf183',
                idImg:"19"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F04-centralcity_1%2Fplace%2Fcentralcityalchemist4.jpg?alt=media&token=e3ae0068-562d-45ba-a741-73bc6567d36e',
                idImg:"20"
            },
        ],
        afterBookingData: [{
            first_notification: '',
            morning_notifications: ['', ''],
            lunch_notifications: ['', ''],
            afternoon_notifications: ['', ''],
            dinner_notifications: ['', ''],
            sunset_notifications: ['', ''],
            evening_notifications: ['', ''],
            midnight_notifcations: ['', ''],
            early_morning: ['', ''],
        }],
        price_per_night:50
    }, {
        id: '009',
        key: '009',
        booking_ubication: 'Rukongai',
        card_description: 'Beautiful house for staying while visiting Soul Society',
        detail_description: `Step into the ethereal realm of Soul Society, where the boundary between the living and the afterlife blurs. Here, amidst the vibrant tapestry of Rukongai, lies the humble abode of a Shinigami, a guardian of souls and purveyor of balance. Enter a sanctuary where the resonance of countless swords reverberates, their gleaming forms adorning the walls in an exquisite display of craftsmanship. Embrace the graceful elegance of traditional Japanese aesthetics, as the house whispers tales of honor and duty in every nook and cranny. Within this haven, the Shinigami host invites you to immerse yourself in the enigmatic realm of Soul Society. Discover the delicate balance between life and death, witness the interplay of spiritual energies, and gain insight into the sacred duties of a Shinigami. As you traverse the threshold of this sacred space, prepare to be captivated by the mystique and timeless beauty that unfolds, a testament to the profound journey that awaits those who seek solace within the realm of the departed.`,
        host: 'Renjiro Fujiwara',
        host_image:require('../assets/bookingsimg/09-rukongai_1/host/renjiro.png'),
        cardImages: [
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F09-rukongai_1%2Fplace%2Frukongai1.jpg?alt=media&token=cbc873e7-e352-4180-9c4a-df77f6959049',
                idImg:"21"
            }, 
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F09-rukongai_1%2Fplace%2Frukongai2.jpg?alt=media&token=ac6d5c30-0529-4206-87dc-39f4a7835883',
                idImg:"22"
            },
            
            
        ],
        afterBookingData: [{
            first_notification: '',
            morning_notifications: ['', ''],
            lunch_notifications: ['', ''],
            afternoon_notifications: ['', ''],
            dinner_notifications: ['', ''],
            sunset_notifications: ['', ''],
            evening_notifications: ['', ''],
            midnight_notifcations: ['', ''],
            early_morning: ['', ''],
        }],
        price_per_night:50
    },
    {
        id: '010',
        key: '010',
        booking_ubication: 'Trost',
        card_description: "Stunning views in Trost, just beware of lurking Titans. Unforgettable stay with a thrilling twist!",
        detail_description: `Welcome to the resilient city of Trost, nestled within the towering walls that shield humanity from the relentless threat of Titans. Amidst this fortress of courage and determination, a gracious host awaits in a Germanic-style house, offering solace and respite from the ever-present danger that lurks beyond the walls. Step into a haven where the spirit of resilience permeates every corner, where the enduring spirit of humanity is nurtured amidst the chaos. Immerse yourself in the warmth of a rustic Germanic dwelling, with its timbered architecture and cozy charm, providing a comforting embrace in the face of adversity. As you venture through the city's streets, bear witness to the remnants of a battle fought long ago, where craters mark the scars of past struggles against the Titans. While the shadows of the Titans loom, find solace in the camaraderie of Trost's inhabitants, united in their shared determination to protect what remains. Your host welcomes you to experience the bittersweet harmony of this humble district, where the possibility of encountering the fallen serves as a reminder to cherish the precious moments of respite and togetherness that await you within the walls.

        Please note that while residing within the fortified walls of Trost, there remains a remote possibility of encountering Titans, as the threat persists beyond the city's defenses. In the event of such an occurrence, we regretfully inform you that the host cannot assume responsibility for the outcome, and no refunds will be provided. We encourage all visitors to exercise caution and adhere to the safety protocols set forth by the Garrison. While the city of Trost stands as a beacon of resilience, it is essential to remain vigilant and prioritize personal safety during your stay. Rest assured, however, that the host will make every effort to provide a secure and comfortable environment within the confines of their Germanic-style home. Let the spirit of bravery guide you as you embark on this extraordinary journey, where the echoes of humanity's indomitable spirit resonate amidst the ever-present specter of the Titans.`,
        host: 'Anika Fischer',
        host_image: require('../assets/bookingsimg/10-trost_1/host/anikafishcher.png'),
        cardImages: [
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F10-trost_1%2Fplace%2Ftrost1.jpg?alt=media&token=fffde380-d1ec-4864-824f-37d4d57e76ac',
                idImg:"23"
            }, 
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F10-trost_1%2Fplace%2Ftrost2.jpg?alt=media&token=2280e0db-70f5-4720-a065-873b0dca685b',
                idImg:"24"
            },
            {
                url:'https://firebasestorage.googleapis.com/v0/b/torchnd-f03db.appspot.com/o/Booking%20Images%2F10-trost_1%2Fplace%2Ftrost3.jpg?alt=media&token=fa28717b-180b-4f6b-ab74-2c086fd15f28',
                idImg:"25"
            },
            
            
            
        ],
        afterBookingData: [{
            first_notification: '',
            morning_notifications: ['', ''],
            lunch_notifications: ['', ''],
            afternoon_notifications: ['', ''],
            dinner_notifications: ['', ''],
            sunset_notifications: ['', ''],
            evening_notifications: ['', ''],
            midnight_notifcations: ['', ''],
            early_morning: ['', ''],
        }],
        price_per_night:35
    },
    /* {
        id: '011',
        key: 'sleepyhollow',
        booking_ubication: '',
        card_description: '',
        detail_description: '',
        host: '',
        host_image: '',
        cardImages: '',
        characteristics:[{
            beds:'',
            bathroom:'',
            work_area:'',
            shared_area:''
        }],
        afterBookingData: [{
            first_notification: '',
            morning_notifications: [''],
            lunch_notifications: [''],
            afternoon_notifications: [''],
            dinner_notifications: [''],
            sunset_notifications: [''],
            evening_notifications: [''],
            midnight_notifcations: [''],
            early_morning: [''],
        }],
        pricePerNight:''
    } */


]



export default bookingList