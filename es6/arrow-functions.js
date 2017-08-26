'use strict';

// arrow functions doesn't have own 'this'
// so you cannot use 'new'
// they don't have arguments, uses outer arguments


let group = {
    title: "Our student",
    students: ["John", "Kate", "Eric"],

    showList: function () {
        this.students.forEach(
            student => console.log(this.title + ': ' + student)
        )
    }
};

// let group = {
//     title: "Our student",
//     students: ["John", "Kate", "Eric"],
//
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this);
//         }, this);
//     }
// };

group.showList();

