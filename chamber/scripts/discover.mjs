
import { buildInterestCards } from './interestCards.mjs';


// fetch JSON, calls displayInterestCards and render it together for the discover page. 


const url = 'data/interest-items.json';


async function getItemData() {
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
}

async function showGrid() {
    const items = await getItemData();
    buildInterestCards(items);
};
showGrid();


