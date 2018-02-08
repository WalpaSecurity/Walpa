----------------------------------------- API LARAVEL DOCUMENTATION -----------------------------------------

************************
> User registration <

URL : /api/register
METHOD : POST
PARAMS :
  name					
  email					
  password				
  c_password				
RETURN :
  {
    “"success”": true,
  }

************************

> User login <

URL : /api/login
METHOD : POST
PARAMS :
	email
	password
RETURN :
  {
    "	success":{
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUO….."
    }
  }

************************

> Retrieve a user's data <

URL : /api/get-details
METHOD : POST
HEADERS :
	Authorization : “Bearer” + token
	Accept : “application/json”
RETURN :
  {
    "	success":{
        ”id” : 6 ,
        “name” : “Toto”,
        “email” : “toto@toto.fr”,
        “created_at”: “2018-02-01 09:57”,
        “updated_at” : “2018-02-01 09:59”"
    }
  }

************************

> Get all donations <

URL : /donation
METHOD : GET
RETURN :
  {
    ‘success’ : true,
    ‘data’ : {
        'donationEuro' => 10,
        'donationBitCoin' => 150,
        ‘donationEther' => 50,
    }
  }

************************

> Add a donations <

URL : /donation
METHOD : POST
PARAMS :
  firstName
  lastName
  email
  amount        	
  type
RETURN :
  {
  ‘success’ : true,
  }

************************

> Send Git Hub URL <

URL : /api/activity
METHOD : POST
HEADERS :
	Authorization : “Bearer” + token
	Accept : “application/json”
PARAMS :
  url
RETURN :
  {
  ‘success’ : true,
  ‘fileName’ : “6_RESULT_1241942487”
  }

************************

> Retrieve user generated scan file lists <

URL : /api/account
METHOD : GET
HEADERS :
	Authorization : “Bearer” + token
	Accept : “application/json”
RETURN :
  {
      "success": true,
      "history": [
          {
              "file_name": "1_RESULT_809027680",
              "url": "https://github.com/Laurement/El-Gringo-Library.git",
              "statut": "EN_COURS"
          },
          {
              "file_name": "1_RESULT_684519288",
              "url": "https://github.com/Laurement/El-Gringo-Library.git",
              "statut": "TERMINEE"
          }
      ]
  }

************************

> Retrieve a user's scan file <

URL : /api/storage/{file_name}
METHOD : GET
HEADERS :
	Authorization : “Bearer” + token
	Accept : "application/json”
RETURN :  
  FILE

************************

> Registration and connection with GITHUB  <

URL : auth/github
METHOD : GET
RETURN :
  {
    ‘success’ : true,
    ‘token’: ‘afeiuazfek...’
  }

************************

> Contact form <

URL : /contact
METHOD : POST
PARAMS :
  firstName
  lastName
  email
  phone
  object
  message
RETURN :
  {
  ‘success’ : true
  }

************************************************

>>> ADMIN PART <<<

> Get the list of all users <

URL : /api/admin				
METHOD : GET
HEADERS :
	Authorization : “Bearer” + token
RETURN :  
  {
  ‘success’ : true,
  ‘data’ : ‘[......]’
  }

************************

> Put an admin user <

URL : /api/admin/{id}				
METHOD : POST
HEADERS :
	Authorization : “Bearer” + token
RETURN :  
  {
  ‘success’ : true,
  }

************************

> Add an admin <

URL : /api/admin				
METHOD : POST
PARAMS :
	email
	name
	password				
HEADERS :
	Authorization : “Bearer” + token
RETURN :  
  {
  ‘success’ : true,
  }

************************

> Delete an admin <

URL : /api/admin/{id}
METHOD : DELETE
HEADERS :
	Authorization : “Bearer” + token
RETURN :  
  {
  ‘success’ : true,
  }

************************

> Delete a user <

URL : /api/user/{id}
METHOD : DELETE
HEADERS :
	Authorization : “Bearer” + token
RETURN :  
  {
  ‘success’ : true,
  }

************************

> Have a list of all projects in the database <

URL : /api/projects
METHOD : GET
HEADERS :
	Authorization : “Bearer” + token
RETURN :  
  {
  ‘success’ : true,
  "data": [
          { "id": 1,  "statut": "EN_COURS",   "url": "http://x.x.x.x:x000/api/activity", "file_name": "1_RESULT_403403276", "user_id": 1},
          { "id": 2, "statut": "EN_COURS", "url": "http://x.x.x.x:x000/api/activity", "file_name": "1_RESULT_960442638", "user_id": 1},

  }




© WALPA - 2018 - HACKATON
