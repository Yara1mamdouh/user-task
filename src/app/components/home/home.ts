import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  role: 'admin' | 'user' | 'moderator';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  searchEmail: string = '';
  isSearched: boolean = false;

  users: User[] = [
    {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "username": "emilys",
      "email": "emily.johnson@x.dummyjson.com",
      "phone": "+81 965-431-3024",
      "birthDate": "1996-5-30",
      "image": "https://dummyjson.com/icon/emilys/128",
      "role": "admin"
    },
    {
      "id": 2,
      "firstName": "Michael",
      "lastName": "Williams",
      "username": "michaelw",
      "email": "michael.williams@x.dummyjson.com",
      "phone": "+49 258-627-6644",
      "birthDate": "1989-8-10",
      "image": "https://dummyjson.com/icon/michaelw/128",
      "role": "admin"
    },
    {
      "id": 3,
      "firstName": "Sophia",
      "lastName": "Brown",
      "username": "sophiab",
      "email": "sophia.brown@x.dummyjson.com",
      "phone": "+81 210-652-2785",
      "birthDate": "1982-11-6",
      "image": "https://dummyjson.com/icon/sophiab/128",
      "role": "admin"
    },
    {
      "id": 4,
      "firstName": "James",
      "lastName": "Davis",
      "username": "jamesd",
      "email": "james.davis@x.dummyjson.com",
      "phone": "+49 614-958-9364",
      "birthDate": "1979-5-4",
      "image": "https://dummyjson.com/icon/jamesd/128",
      "role": "admin"
    },
    {
      "id": 5,
      "firstName": "Emma",
      "lastName": "Miller",
      "username": "emmaj",
      "email": "emma.miller@x.dummyjson.com",
      "phone": "+91 759-776-1614",
      "birthDate": "1994-6-13",
      "image": "https://dummyjson.com/icon/emmaj/128",
      "role": "admin"
    },
    {
      "id": 6,
      "firstName": "Olivia",
      "lastName": "Wilson",
      "username": "oliviaw",
      "email": "olivia.wilson@x.dummyjson.com",
      "phone": "+91 607-295-6448",
      "birthDate": "2002-4-20",
      "image": "https://dummyjson.com/icon/oliviaw/128",
      "role": "moderator"
    },
    {
      "id": 7,
      "firstName": "Alexander",
      "lastName": "Jones",
      "username": "alexanderj",
      "email": "alexander.jones@x.dummyjson.com",
      "phone": "+61 260-824-4986",
      "birthDate": "1986-10-20",
      "image": "https://dummyjson.com/icon/alexanderj/128",
      "role": "moderator"
    },
    {
      "id": 8,
      "firstName": "Ava",
      "lastName": "Taylor",
      "username": "avat",
      "email": "ava.taylor@x.dummyjson.com",
      "phone": "+1 458-853-7877",
      "birthDate": "1997-8-25",
      "image": "https://dummyjson.com/icon/avat/128",
      "role": "moderator"
    },
    {
      "id": 9,
      "firstName": "Ethan",
      "lastName": "Martinez",
      "username": "ethanm",
      "email": "ethan.martinez@x.dummyjson.com",
      "phone": "+92 933-608-5081",
      "birthDate": "1991-2-12",
      "image": "https://dummyjson.com/icon/ethanm/128",
      "role": "moderator"
    },
    {
      "id": 10,
      "firstName": "Isabella",
      "lastName": "Anderson",
      "username": "isabellad",
      "email": "isabella.anderson@x.dummyjson.com",
      "phone": "+49 770-658-4885",
      "birthDate": "1993-6-10",
      "image": "https://dummyjson.com/icon/isabellad/128",
      "role": "moderator"
    },
    {
      "id": 11,
      "firstName": "Liam",
      "lastName": "Garcia",
      "username": "liamg",
      "email": "liam.garcia@x.dummyjson.com",
      "phone": "+92 870-217-6201",
      "birthDate": "1995-6-6",
      "image": "https://dummyjson.com/icon/liamg/128",
      "role": "moderator"
    },
    {
      "id": 12,
      "firstName": "Mia",
      "lastName": "Rodriguez",
      "username": "miar",
      "email": "mia.rodriguez@x.dummyjson.com",
      "phone": "+49 989-461-8403",
      "birthDate": "2000-8-4",
      "image": "https://dummyjson.com/icon/miar/128",
      "role": "moderator"
    },
    {
      "id": 13,
      "firstName": "Noah",
      "lastName": "Hernandez",
      "username": "noahh",
      "email": "noah.hernandez@x.dummyjson.com",
      "phone": "+49 393-605-6968",
      "birthDate": "1984-6-5",
      "image": "https://dummyjson.com/icon/noahh/128",
      "role": "moderator"
    },
    {
      "id": 14,
      "firstName": "Charlotte",
      "lastName": "Lopez",
      "username": "charlottem",
      "email": "charlotte.lopez@x.dummyjson.com",
      "phone": "+44 373-953-5028",
      "birthDate": "1988-6-8",
      "image": "https://dummyjson.com/icon/charlottem/128",
      "role": "moderator"
    },
    {
      "id": 15,
      "firstName": "William",
      "lastName": "Gonzalez",
      "username": "williamg",
      "email": "william.gonzalez@x.dummyjson.com",
      "phone": "+81 905-252-7319",
      "birthDate": "1992-3-27",
      "image": "https://dummyjson.com/icon/williamg/128",
      "role": "moderator"
    },
    {
      "id": 16,
      "firstName": "Avery",
      "lastName": "Perez",
      "username": "averyp",
      "email": "avery.perez@x.dummyjson.com",
      "phone": "+61 731-431-3457",
      "birthDate": "1999-3-10",
      "image": "https://dummyjson.com/icon/averyp/128",
      "role": "user"
    },
    {
      "id": 17,
      "firstName": "Evelyn",
      "lastName": "Sanchez",
      "username": "evelyns",
      "email": "evelyn.sanchez@x.dummyjson.com",
      "phone": "+1 623-880-6871",
      "birthDate": "1987-10-13",
      "image": "https://dummyjson.com/icon/evelyns/128",
      "role": "user"
    },
    {
      "id": 18,
      "firstName": "Logan",
      "lastName": "Torres",
      "username": "logant",
      "email": "logan.torres@x.dummyjson.com",
      "phone": "+81 507-434-8733",
      "birthDate": "1993-10-26",
      "image": "https://dummyjson.com/icon/logant/128",
      "role": "user"
    },
    {
      "id": 19,
      "firstName": "Abigail",
      "lastName": "Rivera",
      "username": "abigailr",
      "email": "abigail.rivera@x.dummyjson.com",
      "phone": "+91 228-363-7806",
      "birthDate": "1996-10-11",
      "image": "https://dummyjson.com/icon/abigailr/128",
      "role": "user"
    },
    {
      "id": 20,
      "firstName": "Jackson",
      "lastName": "Evans",
      "username": "jacksone",
      "email": "jackson.evans@x.dummyjson.com",
      "phone": "+44 468-628-6686",
      "birthDate": "1990-11-30",
      "image": "https://dummyjson.com/icon/jacksone/128",
      "role": "user"
    },
    {
      "id": 21,
      "firstName": "Madison",
      "lastName": "Collins",
      "username": "madisonc",
      "email": "madison.collins@x.dummyjson.com",
      "phone": "+81 259-957-5711",
      "birthDate": "1998-3-7",
      "image": "https://dummyjson.com/icon/madisonc/128",
      "role": "user"
    },
    {
      "id": 22,
      "firstName": "Elijah",
      "lastName": "Stewart",
      "username": "elijahs",
      "email": "elijah.stewart@x.dummyjson.com",
      "phone": "+44 468-357-7872",
      "birthDate": "1991-10-22",
      "image": "https://dummyjson.com/icon/elijahs/128",
      "role": "user"
    },
    {
      "id": 23,
      "firstName": "Chloe",
      "lastName": "Morales",
      "username": "chloem",
      "email": "chloe.morales@x.dummyjson.com",
      "phone": "+92 468-541-7133",
      "birthDate": "1985-4-21",
      "image": "https://dummyjson.com/icon/chloem/128",
      "role": "user"
    },
    {
      "id": 24,
      "firstName": "Mateo",
      "lastName": "Nguyen",
      "username": "mateon",
      "email": "mateo.nguyen@x.dummyjson.com",
      "phone": "+1 341-597-6694",
      "birthDate": "1994-6-2",
      "image": "https://dummyjson.com/icon/mateon/128",
      "role": "user"
    },
    {
      "id": 25,
      "firstName": "Harper",
      "lastName": "Kelly",
      "username": "harpere",
      "email": "harper.kelly@x.dummyjson.com",
      "phone": "+92 518-863-2863",
      "birthDate": "1997-3-3",
      "image": "https://dummyjson.com/icon/harpere/128",
      "role": "user"
    },
    {
      "id": 26,
      "firstName": "Evelyn",
      "lastName": "Gonzalez",
      "username": "evelyng",
      "email": "evelyn.gonzalez@x.dummyjson.com",
      "phone": "+61 708-508-4638",
      "birthDate": "1989-2-5",
      "image": "https://dummyjson.com/icon/evelyng/128",
      "role": "user"
    },
    {
      "id": 27,
      "firstName": "Daniel",
      "lastName": "Cook",
      "username": "danielc",
      "email": "daniel.cook@x.dummyjson.com",
      "phone": "+44 254-761-6843",
      "birthDate": "1983-12-25",
      "image": "https://dummyjson.com/icon/danielc/128",
      "role": "user"
    },
    {
      "id": 28,
      "firstName": "Lily",
      "lastName": "Lee",
      "username": "lilyb",
      "email": "lily.lee@x.dummyjson.com",
      "phone": "+1 808-757-9867",
      "birthDate": "1995-12-3",
      "image": "https://dummyjson.com/icon/lilyb/128",
      "role": "user"
    },
    {
      "id": 29,
      "firstName": "Henry",
      "lastName": "Hill",
      "username": "henryh",
      "email": "henry.hill@x.dummyjson.com",
      "phone": "+1 240-833-4680",
      "birthDate": "1986-8-19",
      "image": "https://dummyjson.com/icon/henryh/128",
      "role": "user"
    },
    {
      "id": 30,
      "firstName": "Addison",
      "lastName": "Wright",
      "username": "addisonw",
      "email": "addison.wright@x.dummyjson.com",
      "phone": "+1 514-384-3300",
      "birthDate": "1992-1-3",
      "image": "https://dummyjson.com/icon/addisonw/128",
      "role": "user"
    }
  ];

  filteredUsers: User[] = [...this.users];

  onSearch() {
    if (this.searchEmail.trim() !== '') {
      this.filteredUsers = this.users.filter(user =>
        user.email.toLowerCase().includes(this.searchEmail.toLowerCase())
      );
      this.isSearched = true;
    }
  }

  onReset() {
    this.searchEmail = '';
    this.filteredUsers = [...this.users];
    this.isSearched = false;
  }
}