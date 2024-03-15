export interface adminList {
 
    CIN:string,
    firstName:string,
    lastName:string,
    birthDate:Date,
    gender:string,
    hireDate:Date,
    phone:string,
    address:string,
    email:string
    

};
export interface Admin {
    
    CIN:string,
    firstName:string,
    lastName:string,
    birthDate:Date,
    gender:string,
    role:string,
    hireDate:Date,
    address:string,
    phone:string,
    email:string
    
    
    

};
export interface clientList {
 
    CIN:string,
    firstName:string,
    lastName:string,
    birthDate:Date,
    gender:string,
    phone:string,
    address:string,
    email:string
    

};
export interface Client {
    
    CIN:string,
    firstName:string,
    lastName:string,
    birthDate:Date,
    gender:string,
    role:string,
    salary:number,
    job:string,
    address:string,
    phone:string,
    email:string
    
    
    

};


export interface Ilogin {
    login:string,
    password:string
   
};
export interface Iforget {
    login:string,
  email:string
   
};

export interface Ireset{
    login:string,
    password:string,
    validatePassword:string
    

};
