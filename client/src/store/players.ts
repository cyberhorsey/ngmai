import { writable } from "svelte/store";
import { Player } from "../schema/Player";

const players = writable<Player[]>([]);

export default players;
