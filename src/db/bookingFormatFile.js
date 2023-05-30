
// Tentative format of each Booking
export let bookingFormatFile = {
    id: '',
    key: '',
    booking_ubication: '',
    card_description: '',
    detail_description: '',
    host: '',
    host_image: require(''),
    cardImages: require(''),
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
}