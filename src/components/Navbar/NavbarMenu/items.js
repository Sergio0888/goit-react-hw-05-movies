import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home",
        to: "/"
    },
    {
        id: nanoid(),
        text: "Movies",
        to: "/movies"
    }
];

export default items;