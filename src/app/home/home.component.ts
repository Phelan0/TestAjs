import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
@Component({
    selector:'app-home',
    templateUrl: "./home.component.html"
})
export class HomeComponent{
    ToDo = [
        {
            "name":"task 1",
            "content":"Analyze the new requirements gathered from the customer."
        },
        {
            "name":"task 3",
            "content":"Arrange a web meeting with the customer to get new requirements."
        },
        {
            "name":"task 10",
            "content":"Show the retrieved data from the server in grid control."
        },
        {
            "name":"task 20",
            "content":"Enhance editing"
        }
    ]
    InProgress = [
        {
            "name":"task 2",
            "content":"Improve a"
        },
        {
            "name":"task 6",
            "content":"content 6"
        },
        {
            "name":"task 7",
            "content":"content 7"
        },
        {
            "name":"task 8",
            "content":"content 8"
        }
    ]
    InReview = [
        {
            "name":"task 9",
            "content":"content 9"
        },
        {
            "name":"task 10",
            "content":"content 10"
        },
        {
            "name":"task 11",
            "content":"content 11"
        },
        {
            "name":"task 12",
            "content":"content 12"
        }
    ]
    Done = [
        {
            "name":"task 13",
            "content":"content 13"
        },
        {
            "name":"task 14",
            "content":"content 14"
        },
        {
            "name":"task 15",
            "content":"content 15"
        },
        {
            "name":"task 16",
            "content":"content 16"
        }
    ]

}