let bookingList = [
    {
        id: '001',
        key: 'valaki',
        booking_ubication: 'Valaki, Barovia',
        card_description: 'House near the church',
        detail_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at massa non est egestas semper. Vestibulum et orci nulla. Donec ac pharetra mauris. Nulla eget tellus tortor. Nam ac urna fermentum, ultricies dolor in, porta mi. Vivamus consectetur et justo non facilisis. Morbi facilisis pretium velit, ut scelerisque nisi tristique sed. Pellentesque pretium ex eu eros pulvinar, eu eleifend nisi iaculis. Aliquam at eros ut massa suscipit porta sit amet at magna. Nullam aliquet justo leo, nec dapibus nibh egestas aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer aliquet enim vitae est vestibulum commodo in at ante. Donec convallis mattis leo vel condimentum. Maecenas nec lectus nec ex semper egestas ac vitae quam. Nam et vestibulum velit. Morbi massa elit, iaculis lacinia ante a, aliquet pharetra felis. Quisque pharetra vulputate dapibus. Vestibulum vulputate viverra elit, ac euismod risus tempor sed. Donec eros libero, luctus eu mi et, malesuada pharetra nulla. Praesent tempor bibendum massa, at faucibus odio cursus pellentesque. Aenean a congue dui. Donec consequat aliquet felis, ut tincidunt turpis feugiat at. Donec purus lacus, iaculis vitae lacus non, consectetur volutpat odio. Nulla cursus nisi vel egestas faucibus Fusce vel vehicula eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus nibh odio, ac fermentum risus maximus vulputate. Praesent rutrum, dui at eleifend pellentesque, felis dui consectetur turpis, at venenatis tortor est vel purus. Duis dolor enim, malesuada in ante nec, egestas laoreet lectus. Aliquam erat volutpat. Aenean vel velit ac elit gravida tincidunt. Donec felis libero, faucibus vel sapien in, rutrum dignissim eros. Maecenas fermentum ornare erat, sit amet suscipit est ultrices quis. Morbi ornare, magna id posuere tempor, lacus eros viverra dolor, vel scelerisque lectus erat eu dolor. Sed pulvinar elementum malesuada. ',
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
    },
    {
        id: '002',
        key: 'minas tirith',
        booking_ubication: 'Minas Tirith',
        card_description: 'Second level of the citadel',
        detail_description: "Welcome, traveler! My name is Halbarad, a Citadel Guard of Gondor, and I would be honored to host you in our humble home, together with my son Túrin. Our fortress may not offer the most impressive views or luxurious amenities, but what we lack in grandeur we make up for in heart and hospitality.\
        \
        Our house is situated on the first level of the city, so the view from our windows is limited to the street and the front houses. But don\'t let that dissuade you from experiencing the true beauty of Gondor through the eyes of a true defender. Our home may be simple, but it is clean, cozy, and equipped with everything you need to make your stay comfortable and memorable.\
        \
        As a Citadel Guard, I have dedicated my life to protecting this great city and its people. And now, I invite you to join us and experience the heart and hospitality of a true defender. Though we may not offer breathtaking views from our windows, the true beauty of Gondor lies in its people and history.\
        \
        And if you\'re lucky, you may even get the chance to meet my dear friend, a wise wizard who occasionally graces us with his presence. His stories and advice about Middle-earth will leave you inspired and enriched.\
        \
        So why wait? Book your stay at our citadel and experience the heart and hospitality of a Citadel Guard and his son. We promise to make your stay in Gondor a memorable one!",
        host: 'Guardia de Gondor',
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
        }]
    }, {
        id: '003',
        key: 'narshe',
        booking_ubication: 'Narshe',
        card_description: 'My place at Narshe Mines',
        detail_description: "Hello and welcome to the Mines of Narshe! My name is Terra and I\'m an inhabitant of this mystical place. I live in one of the many caves that make up the mine, and I\'ve always wanted to share my home with other adventurers and travelers.\
        My cave is cozy and comfortable, with all the amenities you need to make your stay enjoyable. The best part? My friends, the Moogles, are always nearby and ready to assist you with anything you need. They\'re known for their hospitality and kindness, so you\'ll be in good hands!\
        Though the Mines of Narshe may seem like a daunting place at first, it\'s filled with wonder and excitement for those willing to explore it. From the glittering crystals to the mysterious creatures that inhabit the mine, there\'s always something new to discover.\
        And if you\'re looking for a more tranquil experience, my cave is the perfect place to relax and unwind. You\'ll be able to disconnect from the hustle and bustle of the outside world and bask in the quiet beauty of the mines.\
        So what are you waiting for? Come stay with me and experience the wonder and magic of the Mines of Narshe. I promise it will be a stay you won\'t soon forget!\
        ",
        host: 'Moogle',
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
        }]
    }, {
        id: '004',
        key: 'medina village',
        booking_ubication: 'Medina Village',
        card_description: 'Casa del anciano',
        detail_description: '',
        host: 'Descendiente de Vinnie',
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
        }]
    }, {
        id: '005',
        key: 'revachol',
        booking_ubication: 'Martinaise, Revachol',
        card_description: 'little House at the fishermen shacks',
        detail_description: '',
        host: 'Old Woman',
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
        }]
    }, {
        id: '006',
        key: 'fukai',
        booking_ubication: 'Sea of decay',
        card_description: 'Underneath fukai',
        detail_description: '',
        host: 'Nausicaä',
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
        }]
    }, {
        id: '007',
        key: 'torre bellsprout',
        booking_ubication: 'Violet City',
        card_description: 'Bellsprout tower',
        detail_description: '',
        host: 'Monk of bellsprout tower',
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
        }]
    }, {
        id: '008',
        key: '008',
        booking_ubication: 'Central City',
        card_description: 'Apartment at Central city downtown in Amestris',
        detail_description: '',
        host: 'Benjamin Westcott',
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
        }]
    }, {
        id: '009',
        key: '009',
        booking_ubication: 'Rukongai',
        card_description: 'Beautiful house for staying while visiting Soul Society',
        detail_description: '',
        host: 'Renjiro Fujiwara',
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
        }]
    },
    {
        id: '010',
        key: '010',
        booking_ubication: 'Trost',
        card_description: "Stunning views in Trost, just beware of lurking Titans. Unforgettable stay with a thrilling twist!",
        detail_description: '',
        host: 'Anika Fischer',
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
        }]
    }]



export default bookingList