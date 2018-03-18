export class Student {
    id = 0;
    name = '';
    addresses : Address[];
}
export class Address {
    type = '';
    street = '';
    city = '';
    state = '';
    zip = ''
}
export const students : Student[] = [
    {
        id : 0,
        name : 'Kalyan',
        addresses :[
            {
                type : 'TEMP',
                street : 'Yadaval Street',
                city : 'Chennai',
                state : 'TN',
                zip : '600119'
            },
            {
                type : 'PERM',
                street : 'Butchayyapeta',
                city : 'Visakhapatnam',
                state : 'AP',
                zip : '531026'
            }
        ]
    },
    {
        id : 1,
        name : 'Karthik',
        addresses :[
            {
                type : 'TEMP',
                street : 'Nelson Street',
                city : 'Vellore',
                state : 'TN',
                zip : '123456'
            },
            {
                type : 'PERM',
                street : 'Butchayyapeta',
                city : 'Visakhapatnam',
                state : 'AP',
                zip : '531026'
            }
        ]
    }


]
export const states = ['AP', 'TN', 'UP', 'WB']
export const types = ['TEMP','PERM']
