let bookingList = [
    {
        id: '001',
        key: 'valaki',
        booking_ubication: 'Valaki, Barovia',
        card_description: 'House near the church',
        detail_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at massa non est egestas semper. Vestibulum et orci nulla. Donec ac pharetra mauris. Nulla eget tellus tortor. Nam ac urna fermentum, ultricies dolor in, porta mi. Vivamus consectetur et justo non facilisis. Morbi facilisis pretium velit, ut scelerisque nisi tristique sed. Pellentesque pretium ex eu eros pulvinar, eu eleifend nisi iaculis. Aliquam at eros ut massa suscipit porta sit amet at magna. Nullam aliquet justo leo, nec dapibus nibh egestas aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer aliquet enim vitae est vestibulum commodo in at ante. Donec convallis mattis leo vel condimentum. Maecenas nec lectus nec ex semper egestas ac vitae quam. Nam et vestibulum velit. Morbi massa elit, iaculis lacinia ante a, aliquet pharetra felis. Quisque pharetra vulputate dapibus. Vestibulum vulputate viverra elit, ac euismod risus tempor sed. Donec eros libero, luctus eu mi et, malesuada pharetra nulla. Praesent tempor bibendum massa, at faucibus odio cursus pellentesque. Aenean a congue dui. Donec consequat aliquet felis, ut tincidunt turpis feugiat at. Donec purus lacus, iaculis vitae lacus non, consectetur volutpat odio. Nulla cursus nisi vel egestas faucibus Fusce vel vehicula eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus nibh odio, ac fermentum risus maximus vulputate. Praesent rutrum, dui at eleifend pellentesque, felis dui consectetur turpis, at venenatis tortor est vel purus. Duis dolor enim, malesuada in ante nec, egestas laoreet lectus. Aliquam erat volutpat. Aenean vel velit ac elit gravida tincidunt. Donec felis libero, faucibus vel sapien in, rutrum dignissim eros. Maecenas fermentum ornare erat, sit amet suscipit est ultrices quis. Morbi ornare, magna id posuere tempor, lacus eros viverra dolor, vel scelerisque lectus erat eu dolor. Sed pulvinar elementum malesuada. ',
        host: 'Blinsky',
        host_image: require('../assets/bookingsimg/blinksy_1/host/blinsky.png'),
        cardImages: require('../assets/bookingsimg/blinksy_1/place/outside.jpeg'),
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
        cardImages: require('../assets/bookingsimg/minastirith_1/place/outside.jpeg'),
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
        cardImages: require('../assets/bookingsimg/narshe1/narshe1.jpg'),
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
        cardImages: require('../assets/bookingsimg/medina1/medina1.jpg'),
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
        cardImages: require('../assets/bookingsimg/fishermenshackshouse1.jpg'),
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
        cardImages: require('../assets/bookingsimg/belowfukai1.jpg'),
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
        cardImages: require('../assets/bookingsimg/bellsprouttower1.jpg'),
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
        cardImages: require('../assets/bookingsimg/centralcityalchemist.jpg'),
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
        cardImages: require('../assets/bookingsimg/rukongai1/rukongai2.jpg'),
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
        cardImages: require('../assets/bookingsimg/trost1/trost1.jpg'),
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