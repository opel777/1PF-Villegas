import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User, CreateUserData, UpdateUserData } from './model'; 
import { environment } from 'src/environments/environment';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load users', fakeAsync(() => {
    const dummyUsers: User[] = [
      { id: 1, name: 'User 1', surname: 'Surname 1', email: 'user1@example.com', password: 'password1' },
      { id: 2, name: 'User 2', surname: 'Surname 2', email: 'user2@example.com', password: 'password2' },
    ];

    let usersResult: User[] | undefined;
    service.getUsers().subscribe((users) => {
      usersResult = users;
    });

    service.loadUsers();
    tick();

    const req = httpMock.expectOne(environment.baseApiUrl + '/users');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);

    expect(usersResult).toEqual(dummyUsers);
  }));

  it('should create a user', fakeAsync(() => {
    const newUser: User = { 
      id: 3, 
      name: 'New User', 
      surname: 'New User Surname', 
      email: 'newuser@example.com', 
      password: 'newpassword' 
    };
    const createUserData: CreateUserData = {
        name: 'New User',
        surname: 'New User Surname',
        email: 'newuser@example.com',
        password: 'newpassword',
        id: 0
    };

    let usersResult: User[] | undefined;
    service.getUsers().subscribe((users) => {
      usersResult = users;
    });

    service.createUser(createUserData);
    tick();

    const req = httpMock.expectOne(environment.baseApiUrl + '/users');
    expect(req.request.method).toBe('POST');
    req.flush(newUser);

    expect(usersResult).toContain(newUser);
  }));

  it('should update a user', fakeAsync(() => {
    const userId = 1;
    const updatedUserData: UpdateUserData = { 
      name: 'Updated User Name', 
      surname: 'Updated User Surname' 
    };
  
    const updatedUser: User = { 
      id: userId, 
      name: updatedUserData.name || '', 
      surname: updatedUserData.surname || '', 
      email: 'updated@example.com', 
      password: 'updatedpassword' 
    };
  
   
    service.updateUserById(userId, updatedUserData);
    tick();
  
    const reqPut = httpMock.expectOne(environment.baseApiUrl + `/users/${userId}`);
    expect(reqPut.request.method).toBe('PUT');
    reqPut.flush(updatedUser);
  
  
    const reqGet = httpMock.expectOne(environment.baseApiUrl + '/users');
    expect(reqGet.request.method).toBe('GET');
    reqGet.flush([updatedUser]); 
  
    let usersResult: User[] | undefined;
    service.getUsers().subscribe((users) => {
      usersResult = users;
    });
  
    expect(usersResult).toContain(updatedUser);
  }));

  
//   it('should delete a user', fakeAsync(() => {
//     const userId = 1;
  
//     let usersResult: User[] | undefined;
//     service.getUsers().subscribe((users) => {
//       usersResult = users;
//     });
  
//     const reqGetInitial = httpMock.expectOne(environment.baseApiUrl + '/users');
//     expect(reqGetInitial.request.method).toBe('GET');
    
//     const dummyUsers: User[] = [
//       { id: 1, name: 'User 1', surname: 'Surname 1', email: 'user1@example.com', password: 'password1' },
//       { id: 2, name: 'User 2', surname: 'Surname 2', email: 'user2@example.com', password: 'password2' },
//     ];
    
//     reqGetInitial.flush(dummyUsers);
  
//     tick(); 
  
    
//     service.deleteUserById(userId);
//     tick();
  
//     const reqDelete = httpMock.expectOne(req => req.method === 'DELETE' && req.url === environment.baseApiUrl + `/users/${userId}`);
//     reqDelete.flush({});
  
    
//     const reqGetUpdated = httpMock.expectOne(environment.baseApiUrl + '/users');
//     expect(reqGetUpdated.request.method).toBe('GET');
//     reqGetUpdated.flush([]); 
  
//     expect(usersResult?.find(u => u.id === userId)).toBeUndefined();
  
   
//     expect(usersResult).toEqual([]);
//   }));
  
  
  
});

