import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      city: 'France',
      desc: "The largest country in Western Europe, has long been a gateway between the continent's northern and southern regions.",
      photo: `https://freedomhouse.org/sites/default/files/2019-10/France_notre_dame_shutterstock_113889787.jpg`,
      l1: "Architecure and Fine Arts",
      l2: "Cultural Events",
      l3: "Safety and Security",
    },
    {
      id: 1,
      city: 'Seoul',
      desc: 'Korean Soul, formally Soul-tukpyolsi ("Special City of Seoul"), city and capital of South Korea (the Republic of Korea).',
      photo: `https://media.cntraveler.com/photos/5a6f78b7abbf37393aaae64a/16:9/w_2560%2Cc_limit/Insadong-GettyImages-691361168.jpg`,
      l1: "Humanities and Arts",
      l2: "Cultural Events",
      l3: "Safety and Security",
    },
    {
      id: 2,
      city: 'San Francisco',
      desc: "It is a cultural and financial centre of the western United States and one of the country's most cosmopolitan cities.",
      photo: `https://content.r9cdn.net/rimg/dimg/69/1b/cca1e76b-city-13852-1633ad11236.jpg?width=1366&height=768&xhint=1966&yhint=1018&crop=true`,
      l1: "Science and Technology",
      l2: "Cultural Events",
      l3: "Safety and Security",
    },
    {
      id: 3,
      city: 'Boston',
      desc: "Best known for its famous baked beans, Fenway Park, The Boston Marathon, and of course for the bar from Cheers.",
      photo: `https://a.travel-assets.com/findyours-php/viewfinder/images/res70/530000/530796-boston.jpg`,
      l1: "Engineering and Tech",
      l2: "Cultural Events",
      l3: "Safety and Security",
    },
  ];
  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
  submitApplication(firstName: string, lastName: string, email: string, institution: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, institution: ${institution}, email: ${email}.`);
  }
}
