import { Room } from "colyseus.js";
import { writable } from "svelte/store";
import { CocFightRoomState } from "../schema/CocFightRoomState";

const room = writable<Room<CocFightRoomState>>();

export default room;
