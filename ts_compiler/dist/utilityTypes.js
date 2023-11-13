"use strict";
// Awaited<Type>
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resolved");
    }, 1500);
});
const article = {
    title: "AAA BBB CCC",
    content: "ABCD EFHCG PLSJF",
    // It can be generated using Roles and UserIntf
    contributors: {
        author: { name: "MMMM", email: "mmm@example.com", age: 20 },
        editor: { name: "NNNN", email: "nnn@example.com", age: 22 },
        researcher: { name: "PPPP", email: "ppp@example.com", age: 23 },
    },
};
const personObj = {
    name: "Mehedi Hasan",
    age: 30,
};
const personObjRO = {
    name: "Mehedi Hasan",
    age: 30,
};
const limitedUser = {
    name: "Mehedi Hasan",
    email: "mytaison@aol.com",
};
// Partial<Type>
function updateUser(user, updates) {
    return Object.assign(Object.assign({}, user), updates);
}
const userA = {
    name: "Mehedi Hasan",
    email: "mytaison@aol.com",
    age: 32,
    password: "abcd1234",
};
const updatedUserA = updateUser(userA, { password: "Abcd#4321" });
