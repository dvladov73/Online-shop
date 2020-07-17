export class Order {
    personalData: PersonalData
    orderTotal:number = 0
    shipping: number = 0
  }
  
  export class PersonalData {
    email: string = ''
    name: string = ''
    address:string=''
    city:string=''
    state:''
    code:string=''
    country: string = ''
  }