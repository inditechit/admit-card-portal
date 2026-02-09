export interface Student {
  studentId: string;
  rollNumber: string;
  name: string;
  fatherName: string;
  class: string;
  section: string;
}

export const students: Student[] = [
  { studentId: "20140222901", rollNumber: "11101", name: "NAITIK KUMAR GUPTA", fatherName: "NANHE LAL GUPTA", class: "11", section: "A" },
  { studentId: "20150349295", rollNumber: "11102", name: "CHIRAG YADAV", fatherName: "RAJU YADAV", class: "11", section: "A" },
  { studentId: "20160113332", rollNumber: "11103", name: "PUNIT", fatherName: "DEEP CHANDRA", class: "11", section: "A" },
  { studentId: "20160373593", rollNumber: "11104", name: "ADITYA KUMAR", fatherName: "RAM VISHWAS", class: "11", section: "A" },
  { studentId: "20170363568", rollNumber: "11105", name: "AHAMAD ALI", fatherName: "ABDUL HALIM", class: "11", section: "A" },
  { studentId: "20170363576", rollNumber: "11106", name: "ABHAY KUMAR", fatherName: "ANIL KUMAR MAHTO", class: "11", section: "A" },
];

export const examSchedule = [
  { date: "11 Feb 2026", subject: "English", time: "2:30 PM - 5:30 PM" },
  { date: "13 Feb 2026", subject: "Maths", time: "2:30 PM - 5:30 PM" },
  { date: "20 Feb 2026", subject: "Computer Science", time: "2:30 PM - 5:30 PM" },
  { date: "23 Feb 2026", subject: "Chemistry", time: "2:30 PM - 5:30 PM" },
  { date: "27 Feb 2026", subject: "Physics", time: "2:30 PM - 5:30 PM" },
  { date: "02 March 2026", subject: "Physical Education", time: "2:30 PM - 5:30 PM" },
];
