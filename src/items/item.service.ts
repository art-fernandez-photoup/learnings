import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";
import items from "./item-schema";
// import fs from "fs";

// let rawData = fs.readFileSync(`${__dirname}/items.json`).toString();
// let items: Items = JSON.parse(rawData);

export const findAll = async (): Promise<Item[]> => {
    return await items.find();
};

// export const find = async (id: number): Promise<Item> => {
//     return items[id];
// }

// export const create = async (newData: BaseItem): Promise<Item> => {
//     const id: number = new Date().valueOf();

//     items[id] = {
//         id,
//         ...newData
//     };

//     return items[id];
// }

// export const update = async(id: number, updateData: BaseItem): Promise<Item | null> => {
//     const item = await find(id);

//     if(!item) return null;

//     items[id] = {
//         id,
//         ...updateData
//     };

//     return items[id];
// }

// export const remove = async(id: number): Promise<void | null> => {
//     const item = await find(id);

//     if(!item) return null;

//     delete items[id];
// }
