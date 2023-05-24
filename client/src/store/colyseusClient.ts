import { writable } from "svelte/store";
import * as Colyseus from "colyseus.js";

const colyseusClient = writable<Colyseus.Client>();

export default colyseusClient;
