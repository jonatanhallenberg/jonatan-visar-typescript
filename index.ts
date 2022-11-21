const summera = (a: number, b: number) => a + b;

const apiUrl = "https://tv-api-k39vq.ondigitalocean.app/SVT%2024.json";

type TVProgram = {
    name: string,
    description: string,
    start: Date
}

const tvProgram = fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        return data as TVProgram[];
    })

const firstnames: string[] = ["Jonatan", "Eva", "Anna"];
const years: number[] = [23, 34, 54, 46];

let something: string | undefined | null;

something = "fem";
something = null;

//tuple
var employee: [string, number] = ["Jonatan", 13];

//enum
enum Status { Loading, Complete, Failed };
const loadingStatus: Status = Status.Failed;

if (loadingStatus === Status.Complete) {

}

const loadingStatus2: "loading" | "complete" | "failed" = "failed"

type Person = {
    birthyear?: number,
    firstname: string,
    children?: Person[]
    lastname: string,
}

const person: Person = {
    firstname: "Jonatan",
    lastname: "Hallenberg",
    birthyear: 2017,
    children: [
        {
            firstname: "Anna",
            lastname: "Andersson",
            children: [
                {
                    firstname: "Olof",
                    lastname: "Olofsson"
                }
            ]
        },
        {
            firstname: "Erik",
            lastname: "Eriksson"
        }
    ]
}

person.

const persons: Person[] = [
    {
        firstname: "Jonatan",
        lastname: "Hallenberg",
        birthyear: 2017
    },
    {
        firstname: "Anna",
        lastname: "Andersson",
        birthyear: 1980
    }
]








