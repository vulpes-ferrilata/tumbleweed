use user

db.createUser(
    {
        user: "app_user",
        pwd: "123456",
        roles: [
            {
                "role": "readWrite",
                "db": "user"
            }
        ]
    }
);

use authentication

db.createUser(
    {
        user: "app_user",
        pwd: "123456",
        roles: [
            {
                "role": "readWrite",
                "db": "authentication"
            }
        ]
    }
);

use catan

db.createUser(
    {
        user: "app_user",
        pwd: "123456",
        roles: [
            {
                "role": "readWrite",
                "db": "catan"
            }
        ]
    }
);