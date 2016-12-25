import {Injectable} from '@angular/core';

@Injectable()
export class PlacesService {

    constructor() {
    }

    public getPlace(): Place[] {
        return [
            {
                name: 'Кирис',
                type: 'Hotel',
                description: 'Кирис — отличный выбор, если вам интересны горы, природа и релаксация.',
                phone: '833-212-212',
                images: ['assets/images/big1.jpg', 'assets/images/r1.jpg'],
                airTemp: '28',
                waterTemp: '21',
                followers: '2312',
                following: '716'
            },
            {
                name: 'Cekmen Hotel',
                type: 'Hotel',
                description: 'Расстояние до древних руины Фазелиса составляет 10 км, до аэропорта Анталии - менее 55 км. ',
                phone: '533-272-111',
                images: ['assets/images/big2.jpg', 'assets/images/r2.jpg'],
                airTemp: '26',
                waterTemp: '23',
                followers: '4312',
                following: '1222'
            },
            {
                name: 'Villa Merap',
                type: 'Fishing',
                description: 'Чамьюва — отличный выбор, если вам интересны природа, пляж и морское побережье.',
                phone: '293-822-122',
                images: ['assets/images/big3.jpg', 'assets/images/r3.jpg'],
                airTemp: '29',
                waterTemp: '20',
                followers: '1312',
                following: '916'
            },
            {
                name: 'Partmezzo',
                type: 'Tours',
                description: 'Вечером гости апарт-отеля Partmezzo могут посидеть у костра, заказать любимый напиток и пообщаться друг с другом. ',
                phone: '433-111-222',
                images: ['assets/images/big4.jpg', 'assets/images/r4.jpg'],
                airTemp: '32',
                waterTemp: '24',
                followers: '1000',
                following: '320'
            },
            {
                name: 'Tebriz Apart',
                type: 'Weather',
                description: 'Здесь лучшее соотношение цены и качества в Кеме!',
                phone: '439-555-624',
                images: ['assets/images/big5.jpg', 'assets/images/r1.jpg'],
                airTemp: '34',
                waterTemp: '27',
                followers: '1600',
                following: '420'
            }
        ];
    }
}
