import React from "react";

export default function CurrentDate() {
    let now = new Date();

    let date = now.getDate();

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    return (
        <p> {date} {month}, {year} </p>
    );
}