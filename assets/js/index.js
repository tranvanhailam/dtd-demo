let users = [
    {
        id: 1,
        name: "Kien Dam",
    },
    {
        id: 2,
        name: "Son Dang",
    },
    {
        id: 3,
        name: "Hung Dam",
    },
];

let cmts = [
    {
        id: 1,
        user_id: 2,
        content: "Ban gioi thieu di",
    },
    {
        id: 2,
        user_id: 1,
        content: "Toi la Kien",
    },
];

function getCmts() {
    //Lấy user cmt
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(cmts);
        }, 1000);
    });
}

getCmts()
    .then(function (cmts) {
        var userIds = cmts.map(function (cmt) {
            return cmt.user_id;
        });
        return getUsersByIds(userIds).then(function (users) {
            return {
                users: users,
                cmts: cmts,
            }; //List user , list cmt
        });
    })
    .then(function (data) {
        console.log(data);
        var cmtBlock = document.getElementById("cmt-block");
        var html = "";
        data.cmts.forEach((cmt) => {
            var user = data.users.find((user) => {
                return user.id === cmt.user_id;
            });
            html += `${user.name}: ${cmt.content}`;
        });
        cmtBlock.innerHTML = html;
    });

function getUsersByIds(userIDs) {
    // Lấy user trong users
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIDs.includes(user.id);
        });
        resolve(result);
    });
}

getUsersByIds([1, 2]).then(function (users) {
    console.log(users);
});

//
const promise = new Promise((resolve, reject) => {
    console.log('Executing promise')
    resolve('Success')
  })
  
  promise.then((result) => {
    console.log('Promise resolved:', result)
  })
  
  console.log('Promise created')
  
