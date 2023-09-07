import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
@Component({
    selector:'app-home',
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent{
    td = [
        {
            "task":"Task 1",
            "desc":"Analyze the new requirements gathered from the customer."
        },
        {
            "task":"Task 3",
            "desc":"Arrange a web meeting with the customer to get new requirements."
        },
        {
            "task":"Task 10",
            "desc":"Show the retrieved data from the server in grid control."
        },
    ]
    ip = [
        {
            "task":"Task 2",
            "desc":"Improve application performance."
        },
        {
            "task":"Task 4",
            "desc":"Fix the issues reported in the IE browser."
        },
        {
            "task":"Task 11",
            "desc":"Fix cannot open user's default database SQL error."
        },
        {
            "task":"Task 21",
            "desc":"Improve the peformance of the editing functionality."
        }
    ]
    ir = [
        {
            "task":"Task 5",
            "desc":"Fix the issues reported by the customer."
        },
        {
            "task":"Task 7",
            "desc":"Fix the issues reported in Safari browser."
        },
        {
            "task":"Task 12",
            "desc":"Fix the issues reported in data binding."
        },
        {
            "task":"Task 19",
            "desc":"Test editing functionality."
        }
    ]
    done = [
        {
            "task":"Task 8",
            "desc":"Test the application in the IE browser."
        },
        {
            "task":"Task 13",
            "desc":"Analyze SQL server 2008 connection."
        },
        {
            "task":"Task 15",
            "desc":"Analyze gird control."
        },
        {
            "task":"Task 16",
            "desc":"Stored procedure for intial data binding of the gird."
        }
    ]

}