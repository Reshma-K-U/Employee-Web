export interface Employee {
    basic: Basic;
    personal: Personal;
     work: Work;
    prev_exp: Prev_Exp[];
     qualification: Qualification[];
     salary: Salary;
     dependents: Dependents[];
    about: string;
  }

  export  interface Basic {
    firstname: string;
    lastname: string;
    emp_id: string;
    gender: string;
    email: string;
  }

  export  interface Personal {
    marrital_status: string;
    address: string;
    date_of_birth: string;
    mob_num: string;
    other_email: string;
    accnt_num: string;
    pan_num: string;
    aadhar_num: string;
    passport_num: string;
  }

  export  interface Work {
    department: string;
    location: string;
    hire_source: string;
    role: string;
    status: string;
    joining_date: string;
    employee_type: string;
}

  export  interface Prev_Exp{
    company_name: string;
    job_title: string;
    fromDate: string;
    toDate: string;
    job_description: string;
  }

  export   interface Qualification {
    course: string;
    specialization: string;
    institute: string;
    university: string;
    percentage: string;
  }

  export interface Salary {
    basicpay: any;
    hra: any;
    cedallow: any;
    medallow: any;
    speallow: any;
    conallow: any;
    wwf: any;
    esi: any;
    pt: any;
    total: any;
  }

  export   interface Dependents {
    name: string;
    relation: string;
    occupation: string;
  }
